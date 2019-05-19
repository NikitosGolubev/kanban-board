/**
 * @fileOverview Prints validation messages next to fields.
 * @namespace NikitosGolubev\Views\Layouts
 */

import ValidationView from './validation-view';
import u from 'umbrellajs';
import FieldMessageFactory from "../../../ui-factories/simple/field-message-factory";

/**
 * @extends ValidationView
 */
class FieldValidationMessage extends ValidationView {
    constructor(model) {
        super(model);
        this.messageFactory = new FieldMessageFactory();

        this.msgAttr = 'data-message-exists';
        this.msgExistsValue = "1";

        this.fieldSuccessClassNames = ['field_success'];
        this.fieldFailClassNames = ['field_danger'];
        this.messageSuccessClassNames = ['validation-message_success'];
        this.messageFailClassNames = ['validation-message_danger'];
    }

    /**
     * @see ValidationView.success()
     * @param {HTMLElement} target Field
     * @param {string} message
     */
    success({target, message}) {
        let messageContainer = this.initMessage(target, message);

        // Unique part start
        u(target).removeClass(this.fieldFailClassNames);
        u(messageContainer).removeClass(this.messageFailClassNames);
        u(target).addClass(this.fieldSuccessClassNames);
        u(messageContainer).addClass(this.messageSuccessClassNames);
        // Unique part end

        this.storeMessage(target, messageContainer);
    }

    /**
     * @see ValidationView.fail()
     * @param {HTMLElement} target Field
     * @param {string} message
     */
    fail({target, message}) {
        let messageContainer = this.initMessage(target, message);

        // Unique part
        u(target).removeClass(this.fieldSuccessClassNames);
        u(messageContainer).removeClass(this.messageSuccessClassNames);
        u(target).addClass(this.fieldFailClassNames);
        u(messageContainer).addClass(this.messageFailClassNames);
        // Unique part end

        this.storeMessage(target, messageContainer);
    }

    /**
     * Prepares everything to start working with displaying validation
     * @param {HTMLElement} target
     * @param {string} message
     * @return {HTMLElement}
     */
    initMessage(target, message) {
        let messageContainer = this.getMessageContainer(target);
        this.setMessage(messageContainer, message);
        return messageContainer;
    }

    /**
     * Saves and performs operations which would complete the validation display process.
     * @param {HTMLElement} target
     * @param {HTMLElement} messageContainer
     */
    storeMessage(target, messageContainer) {
        this.insertMessageContainer(messageContainer, target);
        this.rememberMessageContainerCreated(target);
    }

    /**
     * Fetches message container
     * @param {HTMLElement} target
     * @return {HTMLElement}
     */
    getMessageContainer(target) {
        if (this.isMessageExists(target)) {
            return this.findExistingMessageContainer(target);
        } else {
            return this.createMessageContainer();
        }
    }

    /**
     * Creates element which would display validation response.
     * @return {Object}
     */
    createMessageContainer() {
        return this.messageFactory.get();
    }

    /**
     * Finds existing message. (which were shown)
     * @param target
     * @return {HTMLElement}
     */
    findExistingMessageContainer(target) {
        return u(target).siblings().filter('.js-validation-message').first();
    }

    /**
     * Defines if message was already shown next to this target.
     * @param {HTMLElement} target
     * @return {boolean}
     */
    isMessageExists(target) {
        return target.getAttribute(this.msgAttr) === this.msgExistsValue;
    }

    /**
     * Inserts message response in right place.
     * @param {HTMLElement} messageContainer
     * @param {HTMLElement} target
     */
    insertMessageContainer(messageContainer, target) {
        if (!this.isMessageExists(target)) {
            u(target).after(messageContainer);
        }
    }

    /**
     * Remembers that message was once shown to prevent duplicating
     * @param {HTMLElement} target
     */
    rememberMessageContainerCreated(target) {
        target.setAttribute(this.msgAttr, this.msgExistsValue);
    }

    /**
     * Sets message in message container to make it visible.
     * @param {HTMLElement} messageContainer
     * @param {string} message
     */
    setMessage(messageContainer, message) {
        this.messageFactory.setMessage(messageContainer, message);
    }
}

export default FieldValidationMessage;
