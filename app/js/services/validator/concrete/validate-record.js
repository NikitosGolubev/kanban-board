/**
 * @fileOverview Validates record
 * @namespace NikitosGolubev\Services\Validator\Concrete
 */

import Validator from '../validator';

/**
 * @extends Validator
 */
class ValidateRecord extends Validator {
    namespace() { return 'NikitosGolubev\\Services\\Validator\\Concrete\\ValidateRecord' }

    constructor() {
        super();

        /**
         * The name of what this object validates
         * @type {string}
         */
        this.subjectName = "record";
    }

    /**
     * @see Validator.validate()
     * @param record Records data object.
     * @return {object}
     */
    validate(record) {
        return {
            name: this.validateName(record.name),
            columnId: this.validateColumnId(record.columnId)
        };
    }

    /**
     * Validates records name.
     * @private
     * @param {object} nameData
     * @return {object}
     */
    validateName(nameData) {
        let {content, required=true} = nameData;

        this.verifyContent(this.subjectName, 'name', content);

        const emptinessCheck = this.emptinessWithNecessityCheck(content, required, nameData);
        if (emptinessCheck) return emptinessCheck;

        if (!this.validator.isLength(content, {min: 12, max: 500})) {
            return this.response.fail(this.msgs.limitLen(12, 500), nameData);
        }

        return this.response.success(true, nameData);
    }

    /**
     * Validates records columnId to which it belongs.
     * @private
     * @param {object} columnIdData
     * @return {object}
     */
    validateColumnId(columnIdData) {
        let {content, required=true} = columnIdData;
        let failMessage = "Valid ID is automatically provided in columns attribute, don't change it!";

        const emptinessCheck = this.emptinessWithNecessityCheck(content, required, columnIdData, {
            failMessage: failMessage
        });
        if (emptinessCheck) return emptinessCheck;

        if (!this.validator.isInt(content, {allow_leading_zeroes: false})) {
            return this.response.fail(failMessage, columnIdData);
        }

        return this.response.success(true, columnIdData);
    }
}

export default ValidateRecord;