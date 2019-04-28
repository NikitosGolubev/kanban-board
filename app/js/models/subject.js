/**
 * @fileOverview Subject - part of observer pattern
 * @namespace NikitosGolubev\Models
 */

/**
 * Implements API to be able to notify objects about events.
 */
class Subject {
    constructor() {
        this.observers = [];
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        // searching for given observer
        let observerIndex = this.observers.indexOf(observer);
        if (observerIndex > -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    notifyObservers(data) {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].update(data);
        }
    }
}

export default Subject;
