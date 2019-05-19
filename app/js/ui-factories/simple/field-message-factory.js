/**
 * @fileOverview Creates field message block.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class FieldMessageFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data nothing expected
     */
    build(data) {
        let messageContainer = document.createElement('div');
        messageContainer.classList.add('js-validation-message');
        messageContainer.classList.add('validation-message');
        return messageContainer;
    }

    /**
     * Sets message to any fieldMessage block
     * @param {HTMLElement} fieldMessage
     * @param {string} message
     */
    setMessage(fieldMessage, message) {
        fieldMessage.innerText = message;
    }
}

export default FieldMessageFactory;
