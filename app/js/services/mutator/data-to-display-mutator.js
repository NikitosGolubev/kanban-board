/**
 * @fileOverview Changes data which is gonna be displayed to user.
 * @namespace NikitosGolubev\Services\Mutator
 */

import Mutator from './mutator';
import validator from 'validator';

/**
 * Mutates data which is gonna be displayed on the screen.
 * (makes it more accurate, avoids XSS (security issues))
 * @extends Mutator
 */
class DataToDisplayMutator extends Mutator {
    constructor() {
        super();
        this.validator = validator;
    }

    /**
     * Prepares data to be accurately displayed on the screen.
     * @param dataToChange
     * @param $options
     */
    apply(dataToChange, $options = {}) {
        dataToChange = this.validator.escape(dataToChange); // prevents xss
        dataToChange = this.replaceLineBreaksWithHTMLTags(dataToChange);
        return dataToChange;
    }

    /**
     * @param {string} str String which needs to be modified.
     * @return {string}
     */
    replaceLineBreaksWithHTMLTags(str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }
}

export default DataToDisplayMutator;