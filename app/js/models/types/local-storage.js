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
     * @return {array}
     */
    get() {
        const db = this.getDB(); // getting database
        return db[this.storage]; // retrieving the whole table
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
