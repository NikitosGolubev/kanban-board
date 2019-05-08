/**
 * @fileOverview Responsible for managing records
 * @namespace NikitosGolubev\Controllers
 */

import Controller from "./controller";
import view from "../use-cases/print-view";

/**
 * @extends Controller
 */
class RecordsController extends Controller {
    constructor(model, view) {
        super(model, view);
    }

    /**
     * Create record form
     * @param {object} data Expects: {event: eventObj}
     */
    create(data) {
        let createElem = this.dom.findParentByClassName(data.event.target, 'js-show-add-record-form');
        if (createElem) {
            view(this.view, {createElem: createElem});
        }
    }

    /**
     * Hides create record form.
     * @param {object} data Expects: {event, eventObj}
     */
    hideCreate(data) {
        let closeElem = this.dom.findParentByClassName(event.target, 'js-close-add-record-form');
        if (closeElem) {
            let addForm = this.dom.findParentByClassName(closeElem, 'js-add-form');
            view(this.view, {addForm: addForm});
        }
    }
}

export default RecordsController;
