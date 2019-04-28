/**
 * @fileOverview Base Model
 * @namespace NikitosGolubev\Models
 */

import Subject from './subject';

/**
 * Interface which provides API(facade) for interacting with some data storage.
 * (CRUD)
 * @abstract
 * @extends Subject
 */
class Model extends Subject {
    constructor() {
        super();
        this.storage = this.getDefaultStorageName();
    }

    /**
     * Gets default storage name which is based on class name.
     *
     * (Active record) If class name is "apple", than storage is "apples"
     *
     * @returns {string}
     */
    getDefaultStorageName() {
        return this.constructor.name.toLowerCase()+"s";
    }

    /**
     * Adds data to some storage.
     * @abstract
     */
    add(data) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /**
     * Gets all the data from some storage.
     * @abstract
     */
    get() {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /*
     * As project develops, it's reasonable to include:
     * UPDATE, DELETE, WHERE methods.
     * But as they are not really required, I omit them.
     */
}

export default Model;
