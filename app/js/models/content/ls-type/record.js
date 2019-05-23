/**
 * @fileOverview Record model
 * @namespace NikitosGolubev\Models\Content\CookieType\Record
 */

import LocalStorage from '../../types/local-storage';

/**
 * Represents Record in 'records' storage
 * @extends LocalStorage
 */
class Record extends LocalStorage {
    namespace() { return 'NikitosGolubev\\Models\\Content\\LsType\\Record'; }

    constructor() {
        super();
    }

    /**
     * Returns column to which record belongs to.
     * @param {object} record Record which column should be identified.
     * @return {Array}
     */
    getColumn(record) {
        return this.hasOne(record, 'columns');
    }
}

export default Record;
