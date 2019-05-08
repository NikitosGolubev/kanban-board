/**
 * @fileOverview Creates form controls container.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class FormControlsContainerFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data nothing expected
     */
    build(data) {
        let formControlsContainer = document.createElement('div');
        formControlsContainer.classList.add('add-form__controls');

        return formControlsContainer;
    }
}

export default FormControlsContainerFactory;
