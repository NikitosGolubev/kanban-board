/**
 * @fileOverview Responsible for managing records
 * @namespace NikitosGolubev\Controllers\EntitiesManagement
 */

import EntityController from "./entity-controller";
import CreateRecord from "../../use-cases/create/create-record";

/**
 * @extends EntityController
 */
class RecordsController extends EntityController {
    namespace() { return 'NikitosGolubev\\Controllers\\EntitiesManagement\\RecordsController'; }

    constructor(model, view) {
        super(model, view);

        this.formSelector = '.js-create-record-form';
        this.creator = new CreateRecord(model);
    }

    /**
     * @see EntityController.setParams()
     * @param form
     * @param $other
     */
    setParams(form, $other = {}) {
        const name = this.dom(form).find('.js-record-name-input').first();
        const columnId = this.dom(form).closest('.js-column_wrap').first().getAttribute('data-column-id');

        this.request.setParam('name', {
            content: name.value,
            target: name
        });

        this.request.setParam('columnId', {
            content: columnId,
            visualValidation: false,
            modifiable: false
        });
    }

    /**
     * Hides create record form.
     * @param {object} data Expects: {closeElem: DOMElem}
     */
    hideCreateForm(data) {
        let addForm = this.dom(data.closeElem).closest('.js-add-form').first();
        this.printView({addForm: addForm});
    }

    /**
     * Creates record and stores its data in some storage.
     * @see EntityController.storeLogic()
     * @param {object} data Expects: {elemTriggered: DOMElem}
     */
    store(data) {
        let form = this.getForm(data.elemTriggered, this.formSelector);

        this.storeLogic(data, (createdRecord, form) => {
            let columnElement = this.dom(form).closest('.js-column_wrap').first();
            this.printView({recordData: createdRecord, columnElement: columnElement});
        }, form);
    }
}

export default RecordsController;
