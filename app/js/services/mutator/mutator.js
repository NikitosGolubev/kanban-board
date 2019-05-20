/**
 * @fileOverview Mutator interface.
 * @namespace NikitosGolubev\Services\Mutator
 */

import Service from '../service';

/**
 * Interface which provides API to change data differently.
 * @extends Service
 * @abstract
 */
class Mutator extends Service {
    namespace() { return 'NikitosGolubev\\Services\\Mutator\\Mutator'; }

    constructor() {
        super();
    }

    /**
     * Changes given data somehow.
     * @abstract
     * @param dataToChange Data which should be changed.
     * @param {object} $options Options which set up change approach to be more accurate.
     */
    apply(dataToChange, $options = {}) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }
}

export default Mutator;