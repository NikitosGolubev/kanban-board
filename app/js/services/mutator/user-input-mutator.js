/**
 * @fileOverview Filters data which were passed.
 * @namespace NikitosGolubev\Services\Mutator
 */

import Mutator from './mutator';

/**
 * Mutates data which user passed to avoid unpleasant issues.
 * @extends Mutator
 */
class UserInputMutator extends Mutator{
    namespace() { return 'NikitosGolubev\\Services\\Mutator\\UserInputMutator' }

    constructor() {
        super();
        this.validator = this.services.validator;
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
        str = str.replace(/\n\n+/g, "\n");
        str.replace(/\s\s+/g, " ");
        return str;
    }
}

export default UserInputMutator;