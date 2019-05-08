/**
 * @fileOverview Creates basic foundation for column.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class ColumnFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data {children: [DOMchild1, DOMchild2, ...]} <- Optional
     */
    build(data) {
        // column wrap
        let column = document.createElement('section');
        column.classList.add('js-column_wrap');
        column.classList.add('column_wrap');

        // column body
        let columnBody = document.createElement('div');
        columnBody.classList.add('js-column');
        columnBody.classList.add('column');

        // pasting children to column if they are provided
        if (Array.isArray(data.children)) {
            for (let i = 0; i < data.children.length; i++) {
                columnBody.appendChild(data.children[i]);
            }
        }

        column.appendChild(columnBody);
        return column;
    }
}

export default ColumnFactory;
