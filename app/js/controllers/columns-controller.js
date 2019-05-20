/**
 * @fileOverview Responsible for managing columns
 * @namespace NikitosGolubev\Controllers
 */

import Controller from "./controller";
// import u from "umbrellajs";
// import validator from 'validator';
// import {validate, getGeneralValidationResult} from '../use-cases/validate-column';
// import {filter} from '../use-cases/filter-input';
// import {setValidationResult, getValidationResult} from "../use-cases/quick-validation-pointer";
// import {createColumn} from "../use-cases/create-column";

/**
 * @extends Controller
 */
class ColumnsController extends Controller {
    namespace() { return 'NikitosGolubev\\Controllers\\ColumnsController'; }

    constructor(model, view) {
        super(model, view);
    }

    /**
     * Destroys columns which was created but no filled with data.
     * @param {object} data Expects: {destroyElem: DOMElem}
     */
    destroyEmptyColumn(data) {
        let columnToDestroy = u(data.destroyElem).closest('.js-column_wrap').first();
        this.printView({element: columnToDestroy});
    }

    /**
     * Creates column and stores its data in some storage.
     * @param {object} data Expects: {elemTriggered: DOMElem}
     */
    store(data) {
        let form = this.getForm(data.elemTriggered);
        let validationResult = getValidationResult(form);
        if (validationResult) {
            // Creating new column in some storage
            let columnData = this.getPassedDataOnly(form);
            let createdColumn = createColumn(columnData, this.model);

            // Creating new column visually
            let columnElement = u(form).closest('.js-column_wrap').first();
            this.printView({columnData: createdColumn, columnElement: columnElement});
        }
    }

    /**
     * Validates data which were sent for column creation.
     * @param {object} data Expects: {elemTriggered: DOMElem}
     */
    validate(data) {
        let form = this.getForm(data.elemTriggered);
        let column = this.getFilteredColumnParams(form);

        let response = validate(column, validator);
        let validationResult = getGeneralValidationResult(response);
        setValidationResult(validationResult, form);
        this.model.notify({responses: response});
    }

    /* ------------------- */
    /*** --- HELPERS --- ***/
    /* ------------------- */

    /**
     * Returns current form. Helper.
     * @private
     * @param elemTriggeredWithEvent DOM element
     * @return {HTMLElement}
     */
    getForm(elemTriggeredWithEvent) {
        return u(elemTriggeredWithEvent).closest('.js-create-column-form').first();
    }

    getColumnParams(form) {
        const title = u(form).find('.js-column-name-input').first();

        return {
            title: {
                content: title.value,
                target: title
            }
        };
    }
}

export default ColumnsController;
