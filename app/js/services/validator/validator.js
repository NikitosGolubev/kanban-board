/**
 * @fileOverview Validator interface.
 * @namespace NikitosGolubev\Services\Validator
 */

import Service from '../service';
import ValidationResponse from './validation-response';

/**
 * Provides API to validate data.
 * @extends Service
 * @abstract
 */
class Validator extends Service {
    namespace() { return 'NikitosGolubev\\Services\\Validator\\Validator'; }

    constructor() {
        super();

        /** Package which will perform some validation operations */
        this.validator = this.services.validator;

        /** For building response, report about validation result */
        this.response = new ValidationResponse();

        /** Getting default validation messages */
        this.msgs = this.response.getDefaultValidationMessages();
    }

    /**
     * Validates some data.
     * @abstract
     * @param {object} data Data which should be validated.
     * @return {object}
     */
    validate(data) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /**
     * Returns common result for the whole validation.
     * @public
     * @param {object} validationResult
     * @return {boolean}
     */
    getGeneralValidationResult(validationResult) {
        for (let dataParam in validationResult) {
            if (!this.response.getValidationResult(validationResult[dataParam])) return false;
        }

        return true;
    }

    /**
     * Returns validation response if field is empty or FALSE if its not.
     * @param content Data for validation.
     * @param {boolean} required If data may be empty or not.
     * @param {object} $additionalData
     * @param {{failMessage: string, successMessage: string}} $options
     * @return {false|object}
     */
    emptinessWithNecessityCheck(content, required, $additionalData = false, $options = {}) {
        let {failMessage = this.msgs.empty, successMessage = true} = $options;

        if (this.validator.isEmpty(content)) {
            if (required) return this.response.fail(failMessage, $additionalData);
            else return this.response.success(successMessage, $additionalData);
        } else return false;
    }

    /**
     * Checks if content (data which should be validated) provided.
     * @param {string} validationSubjectName Subject which validates.
     * @param {string} paramName Aspect of subject which validates particularly.
     * @param content Data which should be validated.
     */
    verifyContent(validationSubjectName, paramName, content) {
        if (content === undefined) {
            const errorMessage = `${validationSubjectName.toUpperCase()} VALIDATION: 
            You MUST provide 'content' in ${paramName}`;

            throw new Error(errorMessage);
        }
    }
}

export default Validator;