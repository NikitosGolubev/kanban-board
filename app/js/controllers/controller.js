/**
 * @fileOverview Base Controller
 * @namespace NikitosGolubev\Controllers
 */

import DOM from '../helpers/dom';

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.dom = new DOM;
    }
}

export default Controller;
