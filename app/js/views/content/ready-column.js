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
     * @param {object} columnData Data to display column
     * @param {HTMLElement|boolean} emptyColumn Empty column for creating existing one, if
     * given, should be replaced with fresh created column. By default equals to 'false', which
     * means that column is gonna be displayed at the end of columns container.
     */
    main({columnData, emptyColumn = false} = false) {
        let serviceColumn = document.querySelector('.js-last-service-column');

        let columnsContainer = serviceColumn.parentNode;

        // Creating new column
        let readyColumn = this.columnFactory({
            title: columnData.title,
            id: columnData.id
        }).get();

        // Applying  modifications to model making it more functional.
        this.applyModifications(readyColumn);

        // Adding new column before empty column, if it exists,
        // otherwise paste it in the end of columns container.
        if (emptyColumn !== false) {
            columnsContainer.insertBefore(readyColumn, emptyColumn);
            emptyColumn.parentNode.removeChild(emptyColumn);
        } else {
            columnsContainer.insertBefore(readyColumn, serviceColumn);
        }
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
