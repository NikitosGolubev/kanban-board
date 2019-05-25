/**
 * @fileOverview Column model. Blueprint for building column.
 * @namespace NikitosGolubev\Models\Content\CookieType\Record
 */

import LocalStorage from '../../types/local-storage';

/**
 * Represents Record in 'columns' storage
 * @extends LocalStorage
 */
class Column extends LocalStorage {
    namespace() { return 'NikitosGolubev\\Models\\Content\\LsType\\Column'; }

    constructor() {
        super();
        this.storage = 'columns';
    }

    /**
     * Returns records which column contains.
     * @param {object} column Column which records should be retrieved.
     * @return {Array}
     */
    getRecords(column) {
        return this.hasMany(column, 'records', 'id', 'columnId');
    }
}

export default Column;
