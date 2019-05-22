/**
 * @fileOverview Base Model
 * @namespace NikitosGolubev\Models
 */

import Subject from './subject';
import config from '../configs/default';

/**
 * Interface which provides API(facade) for interacting with some data storage.
 * (CRUD)
 * @abstract
 * @extends Subject
 */
class Model extends Subject {
    namespace() { return 'NikitosGolubev\\Models\\Model'; }

    constructor() {
        super();
        this.cfg = config();
        this.primaryKey = 'id';
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
     * Inits model, creates table and database if needed.
     * @abstract
     */
    init() {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /**
     * Adds data to some storage.
     * @abstract
     * @param {{columnName: function, ....}} data
     * @return {object} Record which were added.
     */
    add(data) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /**
     * Gets all the data from some storage.
     * @abstract
     * @return {array} Array with objects which represent records
     */
    get() {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /**
     * Searches for particular element(-s) in storage.
     * @param {array|boolean} $items Items through which search should be performed, if set to true
     *     then, searches through current selection.
     * @param {function} $searchAction Callback which accepts two parameters:
     *     1) - model which processes this method (self).
     *     2) - single selected record
     *     MUST return boolean type.
     * @param {boolean} $browseAll Defines if all the matches should be returned, or only first one.
     *     All records are browsed by default (true).
     * @return {array} Returns array with results or an empty array (if nothing found).
     */
    where($items = true, $searchAction = () => true, $browseAll = true) {
        if ($items === true) $items = this.get();
        let result = [];

        for (let i = 0; i < $items.length; i++) {
            if ($searchAction(this, $items[i])) {
                result.push($items[i]);
                if (!$browseAll) break;
            }
        }

        return result;
    }

    /**
     * Defines if some item exists or not.
     * @param {array|boolean} $items Items through which search should be performed, if set to true
     *     then, searches through current selection.
     * @param {function} $searchAction Callback which accepts two parameters:
     *     1) - model which processes this method (self).
     *     2) - single selected record
     *     MUST return boolean type.
     * @return {boolean}
     */
    exists($items = true, $searchAction = () => true) {
        let selection = this.where($items, $searchAction, false);
        return !!selection.length;
    }

    /**
     * Defines set of methods to access & generate ID (primary key).
     * @return {object}
     */
    id() {
        return {
            /* Generates unique ID of the record in table. */
            newId: () => {
                let results = this.get();
                // If there is no results, than table is empty
                if (!results.length) return 1;
                // Getting last result (as it has the biggest id) and incrementing it.
                else {
                    let lastId = Number(results[(results.length - 1)][this.primaryKey]);
                    return ++lastId;
                }
            }
        }
    }

    /*
     * As project develops, it's reasonable to include:
     * UPDATE, DELETE, WHERE methods.
     * But as they are not really required now, I omit them.
     */
}

export default Model;
