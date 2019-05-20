/**
 * @fileOverview Represents abstract entity.
 * @namespace NikitosGolubev\Entities
 */

/**
 * Entity interface.
 * @abstract
 */
class Entity {
    /**
     * Method which defines some entity,
     * @abstract
     * @param {object} dataObj basis for defining entity.
     * @return {object}
     */
    init(dataObj) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /**
     * Verifies if all of the required data were passed.
     * @protected
     * @param {string} entityName The name of what is processed.
     * @param {object} requiredFields Fields which MUST contain some value.
     * @throws Error
     */
    validate(entityName, requiredFields) {
        let invalidMsg = this.generateInvalidValidationMessage(entityName, requiredFields);

        for (let field in requiredFields) {
            if (requiredFields[field] === undefined) {
                throw new Error(invalidMsg);
            }
        }
    }

    /**
     * Generates failure validation message.
     * @private
     * @param entityName
     * @param requiredFields
     * @return {string}
     */
    generateInvalidValidationMessage(entityName, requiredFields) {
        let invalidMsg = `ERROR! FOLLOWING FIELDS ARE REQUIRED FOR GENERATING ${entityName.toUpperCase()}: `;
        for (let field in requiredFields) {
            invalidMsg += field+", ";
        }
        invalidMsg = invalidMsg.substr(0, (invalidMsg.length - 2));

        return invalidMsg;
    }
}

export default Entity;