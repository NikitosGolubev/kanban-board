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

    /*** -------------------- ***/
    /*** ABSTRACT METHODS API ***/
    /*** -------------------- ***/

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
     * Deletes item from storage.
     * @abstract
     * @param {array} toDelete Item(-s) which are needed to be deleted
     * @return {array} records which were deleted
     */
    delete(...toDelete) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /**
     * Removes storage entirely
     * @abstract
     */
    dropTable() {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /*** -------------------- ***/
    /*** COMMON METHODS API ***/
    /*** -------------------- ***/

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
     * One to one relationship.
     * @see this.has()
     * @param {object} item
     * @param {string} relativesStorageName
     * @param {null|string} $selfParamToCompare Null by default, see this.makeRelativeKeyName()
     * @param {string} $relativeParamToCompare 'id' by default
     * @return {Array}
     */
    hasOne(item, relativesStorageName, $selfParamToCompare = null, $relativeParamToCompare = this.primaryKey) {
        if ($selfParamToCompare === null) {
            $selfParamToCompare = this.makeRelativeKeyName(relativesStorageName);
        }

        return this.has(item, relativesStorageName, $selfParamToCompare, $relativeParamToCompare, false);
    }

    /**
     * One to many relationship.
     * @see this.has()
     * @see this.makeRelativeKeyName()
     * @param {object} item
     * @param {string} relativesStorageName
     * @param {string} $selfParamToCompare this.primaryKey by default
     * @param {null|string} $relativeParamToCompare Null by default, see this.makeRelativeKeyName()
     * @return {Array}
     */
    hasMany(item, relativesStorageName, $selfParamToCompare = this.primaryKey, $relativeParamToCompare = null) {
        if ($relativeParamToCompare === null) {
            $relativeParamToCompare = this.makeRelativeKeyName(relativesStorageName);
        }

        return this.has(item, relativesStorageName, $selfParamToCompare, $relativeParamToCompare, true);
    }

    /**
     * Helps to identify one to one, one to many relationships between records.
     * @param {object} item Item whose relative(-s) should be found.
     * @param {string} relativesStorageName Storage where relative(-s) may be found
     * @param {string} selfParamToCompare Items param which should act in comparison to identify relative(-s).
     * @param {string} relativeParamToCompare Relatives param which should act in comparison to identify self.
     * @param {boolean} browseAll Defines if all relatives should be found (true) or only one of them (false).
     * @return {Array}
     */
    has(item, relativesStorageName, selfParamToCompare, relativeParamToCompare, browseAll = true) {
        let relativesStorageData = this.get(relativesStorageName);

        let relatives = this.where(relativesStorageData, (model, record) => {
            return item[selfParamToCompare] === record[relativeParamToCompare];
        }, browseAll);

        return relatives;
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
     * UPDATE and other methods.
     * But as they are not really required now, I omit them.
     */

    /*** Helpers ***/

    /**
     * Makes relative key name based on storage name and primary key.
     * Example: storage name is 'columns', primaryKey is 'id', then param is gonna be equal to 'columnId'
     * @param {string} storageName
     * @return {string}
     */
    makeRelativeKeyName(storageName) {
        // Cutting (-s) from the end of provided storage name
        let singleRecordName = storageName.substr(0, (storageName.length - 1));

        // Capitalizing first letter of primary key.
        let primaryKey = this.primaryKey.charAt(0).toUpperCase() + this.primaryKey.slice(1);

        let relativeKey = singleRecordName+primaryKey;
        return relativeKey;
    }
}

export default Model;
