/**
 * @fileOverview Base Controller
 * @namespace NikitosGolubev\Controllers
 */

import view from "../use-cases/print-view";

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.model.init();
    }

    /**
     * Just prints view, without any other logic.
     * @param {object} data Usually {event: eventObj} expected, also other data which may be
     *     necessary for view. {event: eventObj, somethingElse1: something1, .... smthN: yourVal}
     */
    printView(data) {
        view(this.view, data);
    }
}

export default Controller;
