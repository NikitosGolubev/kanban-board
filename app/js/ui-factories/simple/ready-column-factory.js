/**
 * @fileOverview Creates fresh, ready to use column.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';
import AddRecordButtonFactory from "./add-record-button-factory";
import ColumnFooterFactory from "./column-footer-factory";
import ColumnHeaderFactory from "./column-header-factory";
import ColumnBodyFactory from "./column-body-factory";
import ColumnFactory from "./column-factory";

/**
 * @extends UiFactory
 */
class ReadyColumnFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {{id: int, title: string}}
     */
    build({id, title}) {
        const header = (new ColumnHeaderFactory({title: title})).get();
        const body = (new ColumnBodyFactory()).get();

        const addRecordButton = (new AddRecordButtonFactory()).get();
        const footer = (new ColumnFooterFactory({children: [addRecordButton]})).get();

        const readyColumn = new ColumnFactory({children: [header, body, footer], id: id});
        return readyColumn.get();
    }
}

export default ReadyColumnFactory;
