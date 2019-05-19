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
    constructor() {
        super();
    }
}

export default Column;
