/**
 * @fileOverview Creates column header.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class ColumnHeaderFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {{title: string}} Columns title.
     */
    build({title}) {
        let headerContainer = document.createElement('header');
        headerContainer.classList.add('js-column__header');
        headerContainer.classList.add('column__header');

        headerContainer.innerHTML += title;
        return headerContainer;
    }
}

export default ColumnHeaderFactory;
