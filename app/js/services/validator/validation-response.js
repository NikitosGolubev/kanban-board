/**
 * @fileOverview Represents common response for any validation.
 * @namespace NikitosGolubev\Services\Validator
 */

/**
 * Common validation response
 */
class ValidationResponse {
    constructor() {
        this.defaultValidationMessages = this.getDefaultValidationMessages();
    }

    /**
     * Returns default messages which represent different validation results.
     * @return {object}
     */
    getDefaultValidationMessages() {
        return {
            success: 'Успешно!',
            fail: 'Что-то не так :(',
            empty: 'Обязательное поле',
            integersOnly: 'Необходимо целое число',
            limitLen: function (min, max) {
                return `Допустимая длинна от ${min} до ${max} символов`;
            },
            limitNumber: function (min, max) {
                return `Допустимый диапазон от ${min} до ${max}`;
            }
        };
    }

    /**
     * Creates validation response
     * @protected
     * @param {boolean} result
     * @param {string} message Describes result.
     * @param {object|false} $additionalObject Some other properties which may be helpful further.
     * @return {object}
     */
    build(result, message, $additionalObject = false) {
        let response = {
            result: result,
            message: message
        };

        if ($additionalObject) {
            response = Object.assign(response, $additionalObject);
        }

        return response;
    }

    /**
     * Creates positive validation response
     * @public
     * @param {string} $message
     * @param {object|boolean} $additionalObject
     * @return {object}
     */
    success($message = true, $additionalObject = false) {
        if ($message === true) $message = this.defaultValidationMessages.success;
        return this.build(true, $message, $additionalObject);
    }

    /**
     * Creates negative validation response
     * @public
     * @param {string} $message
     * @param {object|boolean} $additionalObject
     * @return {object}
     */
    fail($message = true, $additionalObject = false) {
        if ($message === true) $message = this.defaultValidationMessages.fail;
        return this.build(false, $message, $additionalObject);
    }

    /**
     * Returns validation result.
     * @param validationResult
     * @return {boolean}
     */
    getValidationResult(validationResult) {
        return validationResult.result;
    }
}

export default ValidationResponse;