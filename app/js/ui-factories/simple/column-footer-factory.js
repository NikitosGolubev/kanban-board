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
     * @param {{children: array}}
     */
    build({children=false}) {
        // footer
        let footer = document.createElement('footer');
        footer.classList.add('js-column__panel_wrap');
        footer.classList.add('column__panel_wrap');


        // pasting children if they are provided
        if (Array.isArray(children)) {
            for (let i = 0; i < children.length; i++) {
                footer.appendChild(children[i]);
            }
        }

        return footer;
    }
}

export default ColumnFooterFactory;
