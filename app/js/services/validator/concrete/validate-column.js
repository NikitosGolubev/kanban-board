/**
 * @fileOverview Validates column
 * @namespace NikitosGolubev\Services\Validator\Concrete
 */

import Validator from '../validator';

/**
 * @extends Validator
 */
class ValidateColumn extends Validator {
    constructor() {
        super();

        /**
         * The name of what this object validates
         * @type {string}
         */
        this.subjectName = "column";
    }

    /**
     * @see Validator.validate()
     * @param column Columns data object.
     * @return {object}
     */
    validate(column) {
        return {
            title: this.validateTitle(column.title)
        };
    }

    /**
     * Validates columns title.
     * @private
     * @param {object} titleData
     * @return {object}
     */
    validateTitle(titleData) {
        let {content, required=true} = titleData;

        this.verifyContent(this.subjectName, 'title', content);

        const emptinessCheck = this.emptinessWithNecessityCheck(content, required, titleData);
        if (emptinessCheck) return emptinessCheck;

        if (!this.validator.isLength(content, {min: 3, max: 255})) {
            return this.response.fail(this.msgs.limitLen(3, 255), titleData);
        }

        return this.response.success(true, titleData);
    }
}

export default ValidateColumn;