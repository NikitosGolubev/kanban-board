/**
 * @fileOverview Provides simple API to save and fetch validation results in DOM elements attributes
 * @namespace NikitosGolubev\UseCases
 */

/**
 * Attribute which would contain validation result
 * @type {string}
 */
const validationResultAttribute = 'data-validation-result';

/**
 * Sets attribute with validation result on DOM element.
 * @param {boolean} result
 * @param {HTMLElement} element
 */
function setValidationResult(result, element) {
    element.setAttribute(validationResultAttribute, result);
}

/**
 * Retrieves validation result.
 * @param {HTMLElement} element
 * @return {boolean}
 */
function getValidationResult(element) {
    let result = element.getAttribute(validationResultAttribute);
    return result === "true";
}

export {setValidationResult, getValidationResult};