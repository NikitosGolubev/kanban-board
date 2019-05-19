/**
 * @fileOverview Creates new column.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';
import ReadyColumnFactory from "../../ui-factories/simple/ready-column-factory";

/**
 * @implements View, Observer
 */
class ReadyColumn extends View {
    constructor(model) {
        super(model);
    }

    /**
     * @see Observer.update()
     */
    update(data) {}

    /**
     * @see View.main()
     * @param {{columnData: object, columnElement: HTMLElement}}
     */
    main({columnData, columnElement: emptyColumn} = false) {
        let columnsContainer = emptyColumn.parentNode;

        let readyColumnFactory = new ReadyColumnFactory({title: columnData.title, id: columnData.id});
        let readyColumn = readyColumnFactory.get();

        columnsContainer.insertBefore(readyColumn, emptyColumn);
        columnsContainer.removeChild(emptyColumn);
    }
}

export default ReadyColumn;
