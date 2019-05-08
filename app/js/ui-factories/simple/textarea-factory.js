/**
 * @fileOverview Creates textarea.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class TextareaFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data {placeholder: value} expected
     */
    build(data) {
        let textarea = document.createElement('textarea');
        textarea.classList.add('field');
        textarea.setAttribute('placeholder', data.placeholder);

        return textarea;
    }
}

export default TextareaFactory;
