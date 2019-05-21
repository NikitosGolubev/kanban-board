/**
 * @fileOverview Mutator interface.
 * @namespace NikitosGolubev\Services\Mutator
 */

/**
 * Interface which provides API to change data differently.
 * @abstract
 */
class Mutator {
    constructor() {}

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