/**
 * @fileOverview Responsible for managing columns
 * @namespace NikitosGolubev\Controllers\EntitiesManagement
 */

import EntityController from "./entity-controller";
import CreateColumn from "../../use-cases/create/create-column";

/**
 * @extends EntityController
 */
class ColumnsController extends EntityController {
    namespace() { return 'NikitosGolubev\\Controllers\\EntitiesManagement\\ColumnsController'; }

    constructor(model, view) {
        super(model, view);

        this.formSelector = '.js-create-column-form';
        this.creator = new CreateColumn(model);

        /**
         * Represents the form which is used for engaging with entity.
         * @type {HTMLElement}
         */
        this.initialForm = this.services.initialFormFactory().get();
    }

    /**
     * @see EntityController.setParams()
     * @param form
     * @param $other
     */
    setParams(form, $other = {}) {
        const title = this.dom(form).find('.js-column-name-input').first();

        this.request.setParam('title', {
            content: title.value,
            target: title
        });
    }

    /**
     * Destroys columns which was created but no filled with data.
     * @param {object} data Expects: {destroyElem: DOMElem}
     */
    destroyEmptyColumn(data) {
        let columnToDestroy = this.dom(data.destroyElem).closest('.js-column_wrap').first();
        this.printView({element: columnToDestroy});
    }

    /**
     * Creates column and stores its data in some storage.
     * @see EntityController.storeLogic()
     * @param {object} data Expects: {elemTriggered: DOMElem}
     */
    store(data) {
        let form = this.getForm(data.elemTriggered, this.formSelector);

        this.storeLogic(data, (createdColumn, form) => {
            let columnElement = this.dom(form).closest('.js-column_wrap').first();
            this.printView({columnData: createdColumn, emptyColumn: columnElement});
            this.resetForm(form, this.initialForm);
        }, form);
    }
}

export default ColumnsController;
