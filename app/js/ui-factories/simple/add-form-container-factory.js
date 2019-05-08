/**
 * @fileOverview Creates add form container.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class AddFormContainerFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data nothing expected
     */
    build(data) {
        let formContainer = document.createElement('div');
        formContainer.classList.add('js-add-form');
        formContainer.classList.add('add-form');
        formContainer.classList.add('column__panel');
        return formContainer;
    }
}

export default AddFormContainerFactory;
