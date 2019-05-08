/**
 * @fileOverview Responsible for managing columns
 * @namespace NikitosGolubev\Controllers
 */

import Controller from "./controller";
import view from "../use-cases/print-view";

/**
 * @extends Controller
 */
class ColumnsController extends Controller {
    constructor(model, view) {
        super(model, view);
    }

    /**
     * Destroys columns which was created but no filled with data.
     * @param {object} data Expects: {event: eventObj}
     */
    destroyEmptyColumn(data) {
        let destroyElemTriggered = this.dom.findParentByClassName(data.event.target, 'js-remove-empty-column');
        if (destroyElemTriggered) {
            let columnToDestroy = this.dom.findParentByClassName(destroyElemTriggered, 'js-column_wrap');
            view(this.view, {element: columnToDestroy});
        }
    }

    /**
     * Creates empty column
     * @param {object} data Expects: {event: eventObj}
     */
    createEmptyColumn(data) {
        let elemTriggered = this.dom.findParentByClassName(data.event.target, 'js-create-empty-column');
        if (elemTriggered) {
            view(this.view);
        }
    }
}

export default ColumnsController;
