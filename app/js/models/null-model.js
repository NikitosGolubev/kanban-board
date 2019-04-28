/**
 * @fileOverview Null object for model (mock when model is actually not needed)
 * @namespace NikitosGolubev\Models
 */

import Model from './model';

/**
 * @extends Model
 */
class NullModel extends Model {
    constructor() {
        super();
    }

    add(data) {}
    get() {}
}

export default NullModel;
