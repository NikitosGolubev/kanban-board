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
     * @param {object} data Nothing expected
     */
    index(data) {
        let columns = this.model.get();
        for (let i = 0; i < columns.length; i++) {
            let records = this.model.getRecords(columns[i]);

            this.printView({column: columns[i], records: records});
        }
    }

    /**
     * Makes columns being responsive on screen resize.
     * @param data Nothing expected
     */
    responsiveColumnsOnResize(data) {
        let columns = document.querySelectorAll('.js-column_wrap');
        columns.forEach((column) => {
            column.style.width = 100+'%';
        });
    }
}

export default IndexController;
