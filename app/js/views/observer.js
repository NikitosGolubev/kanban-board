/**
 * @fileOverview Observer interface
 * @namespace NikitosGolubev\Views
 */

/**
 * @abstract
 */
class Observer {
    constructor(model) {
        this.model = model;
        this.model.registerObserver(this);
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
