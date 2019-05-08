/**
 * @fileOverview Layout interface, no model communication.
 * @namespace NikitosGolubev\Views
 */

import View from './view';

/**
 * Provides interface for ONLY UI CHANGES, CONTACT WITH MODEL IS NOT ALLOWED.
 * @abstract
 */
class Layout extends View {
    /**
     * There is no place for model
     * @param model is not used
     */
    constructor(model) {
        super(false);
    }

    /**
     * Implementing Observer interface. FINAL, MUST NOT BE OVERRIDDEN.
     * @param data
     */
    update(data) {}
}

export default Layout;
