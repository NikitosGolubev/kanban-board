/**
 * @fileOverview Creates column footer foundation.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class ColumnFooterFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data {children: [DOMchild1, DOMchild2, ...]} <- Optional
     */
    build(data) {
        // footer
        let footer = document.createElement('footer');
        footer.classList.add('js-column__panel_wrap');
        footer.classList.add('column__panel_wrap');


        // pasting children if they are provided
        if (Array.isArray(data.children)) {
            for (let i = 0; i < data.children.length; i++) {
                footer.appendChild(data.children[i]);
            }
        }

        return footer;
    }
}

export default ColumnFooterFactory;
