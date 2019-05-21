/**
 * @fileOverview Responsible for managing operations related with entities.
 * @namespace NikitosGolubev\Controllers\EntitiesManagement
 */

import Controller from "../controller";

/**
 * @extends Controller
 * @abstract
 */
class EntityController extends Controller {
    namespace() { return 'NikitosGolubev\\Controllers\\EntitiesManagement\\EntityController'; }

    constructor(model, view) {
        super(model, view);

        // Making injected dependencies easier to access.
        this.dom = this.services.dom;
        this.request = this.services.request;
        this.inputFilter = this.services.inputFilter;
        this.displayFilter = this.services.displayFilter;
        this.validationPointer = this.services.validationPointer;

        this.validator = this.services.validator;

        /**
         * Selector which defines the element where user passes data.
         * Should be overridden.
         * @abstract
         * @type {string}
         */
        this.formSelector = null;

        /**
         * Component which would create the entity.
         * Should be overridden
         * @abstract
         */
        this.creator = null;
    }

    /**
     * Defines params - data which is expected to derive and how to handle it.
     * Factory method. The parameters should be set with request module.
     * @abstract
     * @param {HTMLElement} form Element where user passed some data.
     * @param {object} $other Other settings, it mb HTML elements, or something else. Depends on necessity.
     */
    setParams(form, $other = {}) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /**
     * Validates entity. Maybe overridden if necessary.
     * @param {object} data Expects: {elemTriggered: DOMElem}
     */
    validate(data) {
        let form = this.getForm(data.elemTriggered, this.formSelector);

        this.setFilteredParams(form);
        let entity = this.request.getParams();

        let validationResponse = this.validator.validate(entity);
        let validationResult = this.validator.getGeneralValidationResult(validationResponse);

        this.validationPointer.setValidationResult(validationResult, form);
        this.model.notify({responses: validationResponse});
    }

    /**
     * Contains the logic of storing entity in some storage.
     * @param {object} data Expects: {elemTriggered: DOMElem}
     * @param {function} $uniqueAction Action which should be taken if entity is stored. Callback.
     *     Accepts created entity object as the first argument.
     * @param rest Arguments which may be passed to $uniqueAction
     */
    storeLogic(data, $uniqueAction = (createdEntity) => {}, ...rest) {
        let form = this.getForm(data.elemTriggered, this.formSelector);

        this.setFilteredParams(form);
        let validationResult = this.validationPointer.getValidationResult(form);

        if (validationResult) {
            let entityData = this.request.getContentsOnly(); // Getting particular data which were passed.
            let createdEntity = this.creator.create(entityData);
            this.prepareForDisplay(createdEntity);

            $uniqueAction(createdEntity, rest);
        }
    }

    /**
     * Prepares data for display on the screen. Modifies it somehow.
     * @param {object} dataObjToDisplay Object which contains data which should be displayed.
     * To be filtered, keys must match with set params keys.
     */
    prepareForDisplay(dataObjToDisplay) {
        // Params which were set
        let params = this.request.getParams();

        for (let param in dataObjToDisplay) {
            // Defining if key exists in params (which were set)
            let paramWhichWasSet = params[param];

            // If it exists and allows modifications, then applying filter(-s).
            if (paramWhichWasSet !== undefined && paramWhichWasSet.modifiable) {
                dataObjToDisplay[param] = this.displayFilter.apply(dataObjToDisplay[param]);
            }
        }
    }

    /**
     * Returns current form.
     * @protected
     * @param {HTMLElement} formInnerElement DOM element which exists inside the form.
     * @param {string} formSelector Selector which defines form.
     * @return {HTMLElement}
     */
    getForm(formInnerElement, formSelector) {
        return this.dom(formInnerElement).closest(formSelector).first();
    }

    /**
     * Sets the entities params and filters them somehow immediately.
     * @param {HTMLElement} form
     * @param {object} $other
     */
    setFilteredParams(form, $other = {}) {
        this.setParams(form, $other);
        this.request.modifyContent(null, (param) => {
            // Basic filtering which makes input which user passed more valid (in case if it's not).
            return this.inputFilter.apply(param);
        });
    }
}

export default EntityController;
