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
     * @param {null|string} $storage Storage which data should be selected.
     *    By default = null, that means, that current storage name is gonna be used.
     * @return {array} Array with objects which represent records
     */
    get($storage = null) {
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
     * Returns the record which belongs to another record (relative).
     * One to one relationship.
     * @param {object} item Item whose relative should be found.
     * @param {string} relativesStorageName Storage where relative may be found
     * @param {null|string} $selfParamToCompare Items param which should act in comparison to identify relative.
     * Null by default, it means that relativesStorageName would be cut to single form and supplemented with 'Id'
     * word to form param. Example: of storage name is 'columns', then param is gonna be equal to 'columnsId'
     * @param {string} $relativeParamToCompare Relatives param which should act in comparison to identify self.
     * Default value is: 'id'
     * @return {Array}
     */
    hasOne(item, relativesStorageName, $selfParamToCompare = null, $relativeParamToCompare = 'id') {
        if ($selfParamToCompare === null) {
            // Cutting (-s) from the end of provided storage name
            let singleRecordName = relativesStorageName.substr(0, (relativesStorageName.length - 1));
            $selfParamToCompare = singleRecordName+"Id";
        }

        let relativesStorageData = this.get(relativesStorageName);

        let relative = this.where(relativesStorageData, (model, record) => {
            return item[$selfParamToCompare] === record[$relativeParamToCompare];
        }, false);

        return relative;
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
