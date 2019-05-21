/**
 * @fileOverview Filters data which were passed.
 * @namespace NikitosGolubev\Services\Mutator
 */

import Mutator from './mutator';
import validator from 'validator';

/**
 * Mutates data which user passed to avoid unpleasant issues.
 * @extends Mutator
 */
class UserInputMutator extends Mutator{
    constructor() {
        super();
        this.validator = validator;
    }

    /**
     * Eliminates unnecessary characters from the data given.
     * @param dataToChange
     * @param $options
     */
    apply(dataToChange, $options = {}) {
        dataToChange = ""+dataToChange; // To string
        dataToChange = this.validator.trim(dataToChange);
        dataToChange = this.validator.stripLow(dataToChange, {keep_new_lines: true});
        dataToChange = this.trim(dataToChange);
        return dataToChange;
    }

    /**
     * Cuts all unnecessary spaces from the string. Including spaces between characters.
     * @protected
     * @param {string} str
     * @return {string}
     */
    trim(str) {
        str = str = str.replace(/\n\n+/g, "\n");
        str = str.replace(/\s\s+/g, " ");
        return str;
    }
}

export default UserInputMutator;