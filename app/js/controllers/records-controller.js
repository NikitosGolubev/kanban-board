/**
 * @fileOverview Responsible for managing records
 * @namespace NikitosGolubev\Controllers
 */

import Controller from "./controller";
import u from "umbrellajs";
import {filter} from "../use-cases/filter-input";
import validator from "validator";
import {setValidationResult, getValidationResult} from "../use-cases/quick-validation-pointer";
import {validate, getGeneralValidationResult} from '../use-cases/validate-record';
import {createRecord} from "../use-cases/create-record";

/**
 * @extends Controller
 */
class RecordsController extends Controller {
    constructor(model, view) {
        super(model, view);
    }

    /**
     * Hides create record form.
     * @param {object} data Expects: {closeElem: DOMElem}
     */
    hideCreateForm(data) {
        let addForm = u(data.closeElem).closest('.js-add-form').first();
        this.printView({addForm: addForm});
    }

    validate(data) {
        let form = this.getForm(data.elemTriggered);
        let record = this.getFilteredParams(form);

        let response = validate(record, validator);
        let validationResult = getGeneralValidationResult(response);
        setValidationResult(validationResult, form);
        this.model.notify({responses: response});
    }

    store(data) {
        let form = this.getForm(data.elemTriggered);
        let validationResult = getValidationResult(form);
        if (validationResult) {
            let recordData = this.getPassedDataOnly(form);
            let createdRecord = createRecord(recordData, this.model);

            // Creating new column visually
            let columnElement = u(form).closest('.js-column_wrap').first();
            this.printView({recordData: createdRecord, columnElement: columnElement});
        }
    }

    /* ------------------- */
    /*** --- HELPERS --- ***/
    /* ------------------- */

    getForm(elemTriggeredWithEvent) {
        return u(elemTriggeredWithEvent).closest('.js-create-record-form').first();
    }

    getPassedDataOnly(form, $filterIt = true) {
        let column, passedData = {};

        if ($filterIt) column = this.getFilteredParams(form);
        else column = this.getParams(form);

        for (let field in column) {
            passedData[field] = column[field].content;
        }

        return passedData;
    }

    getFilteredParams(form) {
        let column = this.getParams(form);
        for (let field in column) {
            column[field].content = filter(column[field].content, validator);
        }
        return column;
    }

    getParams(form) {
        const name = u(form).find('.js-record-name-input').first();
        const columnId = u(form).closest('.js-column_wrap').first().getAttribute('data-column-id');

        return {
            name: {
                content: name.value,
                target: name
            },
            columnId: {
                content: columnId,
                visualValidation: false
            }
        };
    }
}

export default RecordsController;
