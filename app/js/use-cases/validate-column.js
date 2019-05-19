/**
 * @fileOverview Validates passed columns data.
 * @namespace NikitosGolubev\UseCases
 */

import ValidationResponse from '../entities/validation-response';

const r = new ValidationResponse;

/**
 * Defines validation for expected data.
 * @param {object} column Passed data and it's additional properties.
 * @param validator Package which is responsible for validation.
 * @return {object}
 */
function validate(column, validator) {
    return {
        title: validateTitle(column.title, validator)
    };
}

/**
 * Returns common result for the whole validation.
 * @param validationResult
 * @return {boolean}
 */
function getGeneralValidationResult(validationResult) {
    for (let dataParam in validationResult) {
        if (!r.getValidationResult(validationResult[dataParam])) return false;
    }

    return true;
}

/**
 * Validates columns title
 * @param {object} titleData
 * @param validator
 * @return {object}
 */
function validateTitle(titleData, validator) {
    let {content, required=true} = titleData;

    if (validator.isEmpty(content)) {
        if (required) return r.fail(r.defaultMessagies.empty, titleData);
        else return r.success(true, titleData);
    }

    if (!validator.isLength(content, {min: 3, max: 255})) {
        return r.fail(r.defaultMessagies.limitLen(3, 255), titleData);
    }

    return r.success(true, titleData);
}

export {validate, getGeneralValidationResult};