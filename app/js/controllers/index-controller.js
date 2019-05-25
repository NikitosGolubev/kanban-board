/**
 * @fileOverview Performs different operations on index page.
 * @namespace NikitosGolubev\Controllers
 */

import Controller from "./controller";

/**
 * @extends Controller
 */
class IndexController extends Controller {
    namespace() { return 'NikitosGolubev\\Controllers\\IndexController'; }

    constructor(model, view) {
        super(model, view);
    }

    /**
     * Displays columns and records
     * @param {{event: event}} data
     */
    index(data) {
        let columns = this.model.get();
        for (let i = 0; i < columns.length; i++) {
            let records = this.model.getRecords(columns[i]);

            this.printView({column: columns[i], records: records});
        }
    }
}

export default IndexController;
