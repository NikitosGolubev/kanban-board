/**
 * @fileOverview Creates empty column.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';
import CreateColumnFormFactory from "./create-column-form-factory";
import ColumnFooterFactory from "./column-footer-factory";
import ColumnFactory from "./column-factory";

/**
 *
 * @extends UiFactory
 */
class EmptyColumnFactory extends UiFactory {
    /**
     * @see UiFactory.uiObjects
     */
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data nothing expected
     */
    build(data) {
        let form = new CreateColumnFormFactory();
        form = form.get();
        let footer = new ColumnFooterFactory({children: [form]});
        footer = footer.get();
        let column = new ColumnFactory({children: [footer]});
        column = column.get();

        return column;
    }
}

export default EmptyColumnFactory;
