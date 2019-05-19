import ValidationResponse from '../entities/validation-response';

const r = new ValidationResponse;


function validate(record, validator) {
    return {
        name: validateName(record.name, validator),
        columnId: validateColumnId(record.columnId, validator)
    };
}

function getGeneralValidationResult(validationResult) {
    for (let dataParam in validationResult) {
        if (!r.getValidationResult(validationResult[dataParam])) return false;
    }

    return true;
}

function validateName(nameData, validator) {
    let {content, required=true} = nameData;

    if (validator.isEmpty(content)) {
        if (required) return r.fail(r.defaultMessagies.empty, nameData);
        else return r.success(true, nameData);
    }

    if (!validator.isLength(content, {min: 12, max: 500})) {
        return r.fail(r.defaultMessagies.limitLen(12, 500), nameData);
    }

    return r.success(true, nameData);
}

function validateColumnId(columnIdData, validator) {
    let {content, required=true} = columnIdData;
    let failMessage = "Valid ID is automatically provided in columns attribute, don't change it!";

    if (validator.isEmpty(content)) {
        if (required) return r.fail(failMessage, columnIdData);
        else return r.success(true, columnIdData);
    }

    if (!validator.isInt(content, {allow_leading_zeroes: false})) {
        return r.fail(failMessage, columnIdData);
    }

    return r.success(true, columnIdData);
}

export {validate, getGeneralValidationResult};