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
        // New column
        let readyColumn = this.columnFactory({
            title: columnData.title,
            id: columnData.id
        }).get();

        // Applying  modifications on column making it more functional.
        this.applyModifications(readyColumn);

        // Displaying column on the screen
        this.displayColumn(readyColumn, emptyColumn);
    }

    /**
     * Applies some necessary modifications to column to make it more functional and accurate.
     * @param {HTMLElement} column Created column
     */
    applyModifications(column) {
        let druggableRecords = new DraggableRecordsInColumn();
        let scrollableColumn = new ScrollableColumn();
        let stickyElements = new StickyElementsInColumn();

        druggableRecords.main({column: column});
        scrollableColumn.main({column: column});
        stickyElements.main({column: column});
    }

    /**
     * Displays created column on the screen correctly.
     * @param {HTMLElement} column
     * @param {HTMLElement|boolean} $emptyColumn Empty column
     */
    displayColumn(column, $emptyColumn = false) {
        let lastGeneratedColumn = this.dom('.js-generated-column').last();
        let columnsContainer = this.dom('.js-columns-container').first();

        if ($emptyColumn !== false) {
            // If empty column provided, it should be replaced with created column.
            // (empty column should be removed as well)
            this.dom($emptyColumn).before(column);
            this.dom($emptyColumn).remove();
        } else if (lastGeneratedColumn) {
            // If previously generated columns exist, then pasting new column after last one.
            this.dom(lastGeneratedColumn).after(column);
        } else {
            // If no columns were generated before, than it's first column,
            // so pasting it at the beginning of columns container.
            this.dom(columnsContainer).prepend(column);
        }
    }
}

export default ReadyColumn;
