/**
 * @fileOverview Responsible for managing columns
 * @namespace NikitosGolubev\Controllers
 */

import Controller from "./controller";
import u from "umbrellajs";
import validator from 'validator';
import {validate, getGeneralValidationResult} from '../use-cases/validate-column';
import {filter} from '../use-cases/filter-input';
import {setValidationResult, getValidationResult} from "../use-cases/quick-validation-pointer";
import {createColumn} from "../use-cases/create-column";

/**
 * @extends Controller
 */
class ColumnsController extends Controller {
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

    /**
     * Returns object only with data which were provided by the user.
     * @param {HTMLElement} form Place where user passed the data.
     * @param {boolean} $filterIt Defines if data should be previously filtered or not.
     * @return {object}
     */
    getPassedDataOnly(form, $filterIt = true) {
        let column, passedData = {};

        if ($filterIt) column = this.getFilteredColumnParams(form);
        else column = this.getColumnParams(form);

        for (let field in column) {
            passedData[field] = column[field].content;
        }

        return passedData;
    }

    /**
     * Returns column with filtered user input. For security sakes. Helper.
     * @private
     * @param {HTMLElement} form Form, where user input may be fetched.
     * @return {object}
     */
    getFilteredColumnParams(form) {
        let column = this.getColumnParams(form);
        for (let field in column) {
            column[field].content = filter(column[field].content, validator);
        }
        return column;
    }

    /**
     * Returns data about column, how to validate it, the values that were sent by user, other settings...
     * @private
     * @param {HTMLElement} form current form - DOM element
     * @return {object}
     */
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
