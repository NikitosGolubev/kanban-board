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
}

export default Record;
