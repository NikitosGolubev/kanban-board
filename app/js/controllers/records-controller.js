/**
 * @fileOverview Responsible for managing records
 * @namespace NikitosGolubev\Controllers
 */

import Controller from "./controller";

/**
 * @extends Controller
 */
class RecordsController extends Controller {
    constructor(model, view) {
        super(model, view);
    }

    /**
     * Create record form
     * @param event
     */
    create(event) {
        console.log(this.model);
    }
}

export default RecordsController;
