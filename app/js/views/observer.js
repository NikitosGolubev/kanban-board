/**
 * @fileOverview Observer interface
 * @namespace NikitosGolubev\Views
 */

import Core from '../framework/core';

/**
 * @abstract
 * @extends Core
 */
class Observer extends Core {
    namespace() { return 'NikitosGolubev\\Views\\Observer'; }

    constructor(model) {
        super();
        if (model !== false) {
            this.model = model;
            this.model.registerObserver(this);
        }
    }

    /**
     * Updates the view about changes in particular way
     * @param data
     * @abstract
     */
    update(data) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }
}

export default Observer;
