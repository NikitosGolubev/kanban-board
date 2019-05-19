/**
 * @fileOverview Simple factory interface
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import cloneDeepWith from 'lodash/cloneDeepWith';
import isElement from 'lodash/isElement';

/**
 * Interface for simple factories of user interface
 * @abstract
 */
class UiFactory {
    /**
     *  @param {object|boolean} $data Params which may be received to build object more accurately.
     */
    constructor($data = false) {
        /**
         * UI dependencies.
         * @type {Map<any, UiFactory>}
         */
        // IMPORTANT!!! THIS PROPERTY MUST BE DECLARED BEFORE this.build();
        this.uiObjects = this.uiObjectsFactory();

        this.elem = this.build($data);
    }

    /**
     * @return {object|null} Created DOM(ui) element
     */
    get() {
        return cloneDeepWith(this.elem, (value) => {
            if (isElement(value)) {
                return value.cloneNode(true);
            }
        });
    }

    /**
     * Creates a UI element
     *
     * @abstract
     * @protected
     * @param data
     * @return {object} DOM element
     */
    build(data) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /**
     * Objects for defining other UI dependencies to build more complex elements.
     * Should be overridden when necessary.
     * @protected
     * @return {Map<any, UiFactory>}
     */
    uiObjectsFactory() {
        return new Map();
    }
}

export default UiFactory;
