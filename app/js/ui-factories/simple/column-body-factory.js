/**
 * @fileOverview Creates column body container.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class ColumnBodyFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param data Nothing expected
     */
    build(data) {
        let columnBody = document.createElement('div');
        columnBody.classList.add('js-column__content');
        columnBody.classList.add('column__content');

        return columnBody;
    }
}

export default ColumnBodyFactory;
