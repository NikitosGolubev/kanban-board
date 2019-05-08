/**
 * @fileOverview Creates text input.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class TextInputFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data {placeholder: value} expected
     */
    build(data) {
        let input = document.createElement('input');
        input.classList.add('field');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', data.placeholder);

        return input;
    }
}

export default TextInputFactory;
