/**
 * @fileOverview Null object for model (mock when model is actually not needed)
 * @namespace NikitosGolubev\Models
 */

import Model from './model';

/**
 * @extends Model
 */
class NullModel extends Model {
    namespace() { return 'NikitosGolubev\\Models\\NullModel'; }

    constructor() {
        super();
    }

    init() {}
    add(data) { return {}; }
    get() { return []; }
}

export default NullModel;
