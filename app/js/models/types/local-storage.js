/**
 * @fileOverview Local storage model
 * @namespace NikitosGolubev\Models\Types
 */

import Model from '../model';
import ls from 'local-storage';

/**
 * Model which deals with LS (manages its data transfer).
 * @extends Model
 */
class LocalStorage extends Model {
    namespace() { return 'NikitosGolubev\\Models\\Types\\LocalStorage'; }

    constructor() {
        super();

        /**
         * Database name.
         * @type {string}
         */
        this.db = this.cfg.localStorage.database;
    }

    /* ---------------------------------- */
    /* --- INTERFACE --- */
    /* ---------------------------------- */

    /**
     * @see Model.init()
     */
    init() {
        if (!this.isDatabaseExists()) {
            ls(this.cfg.localStorage.database, {});
        }

        if (!this.isTableExists()) {
            this.createTable();
        }
    }

    /**
     * @see Model.add()
     */
    add(data) {
        let db = this.getDB();
        let record = {};

        // Getting values from functions-getters
        for (let columnName in data) {
            let valueGetter = data[columnName];
            record[columnName] = valueGetter();
        }

        db[this.storage].push(record);
        this.updateDB(db);
        return record;
    }

    /**
     * @see Model.get()
     * @param {null|string} $storage
     * @return {array}
     */
    get($storage = null) {
        if ($storage === null) $storage = this.storage;
        const db = this.getDB(); // getting database
        return db[$storage]; // retrieving the whole table
    }

    /**
     * @see Model.delete()
     * @param {array} toDelete
     * @return {Array}
     */
    delete(...toDelete) {
        let db = this.getDB();
        let items = db[this.storage];

        let deletedItems = [];

        // If there is no items inside table, than there is nothing to delete.
        if (!items) return deletedItems;

        // Looping through items to delete
        for (let i = 0; i < toDelete.length; i++) {
            let itemToDelete = toDelete[i];

            // Looping through records in storage
            for (let j = 0; j < items.length; j++) {
                let record = items[j];

                // If item to delete matches with record, than delete it.
                if (itemToDelete[this.primaryKey] === record[this.primaryKey]) {
                    deletedItems.push(record);
                    items.splice(j, 1);
                    break;
                }
            }
        }

        this.updateDB(db);

        return deletedItems;
    }

    /**
     * @see Model.dropTable()
     */
    dropTable() {
        let db = this.getDB();
        delete db[this.storage];
        this.updateDB(db);
    }

    /* ---------------------------------- */
    /* --- PRIVATE & PROTECTED HELPERS ***/
    /* ---------------------------------- */

    /**
     * @private
     */
    createTable() {
        const db = this.getDB();
        db[this.storage] = [];
        this.updateDB(db);
    }

    /**
     * @private
     * @return {boolean}
     */
    isTableExists() {
        const db = this.getDB();
        return !(db[this.storage] === undefined);
    }

    /**
     * Returns all the data from database
     * @private
     * @return {object}
     */
    getDB() {return ls.get(this.db); }

    /**
     * @private
     * @param data Data which should be uploaded to database
     */
    updateDB(data) { ls.set(this.db, data); }

    /**
     * @private
     * @return {boolean}
     */
    isDatabaseExists() { return !(this.getDB() === null); }
}

export default LocalStorage;
