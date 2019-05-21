/**
 * @fileOverview DOM validation pointer
 * @namespace NikitosGolubev\Services\ValidationPointer
 */

import ValidationPointer from './validation-pointer';

/**
 * Manipulates with validation result using DOM elements.
 * @extends ValidationPointer
 */
class DomValidationPointer extends ValidationPointer {
    constructor() {
        super();

        /**
         * Attribute which would contain validation result
         * @type {string}
         */
        this.validationResultAttribute = 'data-validation-result';
    }


    /**
     * Sets validation result as an attribute of particular HTMLElement
     * @see ValidationPointer.setValidationResult()
     * @param result
     * @param {HTMLElement} target
     */
    setValidationResult(result, target) {
        target.setAttribute(this.validationResultAttribute, result);
    }


    /**
     * Retrieves validation result from attribute of HTMLElement
     * @param {HTMLElement} target
     * @return {boolean}
     */
    getValidationResult(target) {
        let result = target.getAttribute(this.validationResultAttribute);
        return result === "true";
    }
}

export default DomValidationPointer;