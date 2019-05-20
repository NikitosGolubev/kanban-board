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
    }
}

export default Column;
