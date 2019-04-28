/**
 * @fileOverview Cookie model
 * @namespace NikitosGolubev\Models\Types
 */

import Model from '../model';

/**
 * Model which deals with cookie-type (manages its data transfer).
 * @extends Model
 */
class Cookie extends Model {
    constructor() {
        super();
    }

    /**
     * @see Model.add()
     */
    add(data) {
        // @todo Implement add method (add to cookie storage)
    }

    /**
     * @see Model.get()
     */
    get() {
        // @todo Implement get method (add data from cookie storage)
    }
}

export default Cookie;
