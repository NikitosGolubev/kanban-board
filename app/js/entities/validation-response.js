/**
 * @fileOverview Represents common response for any type of validation possible.
 * @namespace NikitosGolubev\Entities
 */

/**
 * Common validation response
 */
class ValidationResponse {
    constructor() {
        /**
         * Default messages about validation result
         * @type {object}
         */
        this.defaultMessagies = {
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

        this.codes = {
            200: 'OK',
            201: 'Not required and empty',
            300: 'ERROR'
        }
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
        if ($message === true) $message = this.defaultMessagies.success;
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
        if ($message === true) $message = this.defaultMessagies.fail;
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