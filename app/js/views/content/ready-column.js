/**
 * @fileOverview Creates new column.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';
import DraggableRecordsInColumn from "../layouts/draggable-records-in-column";
import ScrollableColumn from "../layouts/scrollable-column";
import StickyElementsInColumn from "../layouts/sticky-elements-in-column";

/**
 * @implements View, Observer
 */
class ReadyColumn extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\ReadyColumn'; }

    constructor(model) {
        super(model);
        this.columnFactory = this.services.columnFactory;
        this.dom = this.services.dom;
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

        let readyColumn = this.columnFactory({
            title: columnData.title,
            id: columnData.id
        }).get();

        this.applyModifications(readyColumn);

        // Replacing empty column with new, concrete, created one.
        columnsContainer.insertBefore(readyColumn, emptyColumn);

        columnsContainer.removeChild(emptyColumn);
    }

    applyModifications(column) {
        let druggableRecords = new DraggableRecordsInColumn();
        let scrollableColumn = new ScrollableColumn();
        let stickyElements = new StickyElementsInColumn();

        druggableRecords.main({column: column});
        scrollableColumn.main({column: column});
        stickyElements.main({column: column});
    }
}

export default ReadyColumn;
