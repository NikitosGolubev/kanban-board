/**
 * @fileOverview Base Controller
 * @namespace NikitosGolubev\Controllers
 */

import Core from '../framework/core';

/**
 * @extends Core
 */
class Controller extends Core {
    namespace() { return 'NikitosGolubev\\Controllers\\Controller'; }

    constructor(model, view) {
        super();
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
        this.view.main(data);
    }
}

export default Controller;
