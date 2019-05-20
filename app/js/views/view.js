/**
 * @fileOverview Base view
 * @namespace NikitosGolubev\Views
 */

import Observer from './observer';

/**
 * @extends Observer interface
 * @abstract
 * @interface
 */
class View extends Observer {
    namespace() { return 'NikitosGolubev\\Views\\View'; }

    constructor(model) {
        super(model);
    }

    /**
     * Performs all the UI changes.
     * @param $data Some data upon which changes should be done.
     */
    main($data = false) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }
}

export default View;
