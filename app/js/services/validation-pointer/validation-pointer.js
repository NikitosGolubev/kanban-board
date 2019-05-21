/**
 * @fileOverview Validation pointer interface.
 * @namespace NikitosGolubev\Services\ValidationPointer
 */

/**
 * Provides simple API to quickly save and fetch validation results.
 * @abstract
 */
class ValidationPointer {
    constructor() {}

    /**
     * Stores validation result somehow.
     * @abstract
     * @param {boolean} result Represents validation result
     * @param target A hint where validation result should be stored ot may be storage itself. (abstract)
     */
    setValidationResult(result, target) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /**
     * Returns result which were set.
     * @abstract
     * @param target A hint where validation result is stored ot may be storage itself. (abstract)
     * @return {boolean}
     */
    getValidationResult(target) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }
}

export default ValidationPointer;