/**
 * @fileOverview Prints columns and their records.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';
import ReadyColumn from './ready-column';
import ReadyRecord from './ready-record';

/**
 * @implements View, Observer
 */
class DisplayColumnsWithRecords extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\DisplayColumnsWithRecords'; }

    constructor(model) {
        super(model);
        this.dom = this.services.dom;
        this.columnView = new ReadyColumn(model); // to display columns
        this.recordView = new ReadyRecord(model); // to display records
    }

    /**
     * @see Observer.update()
     */
    update(data) {}

    /**
     * @see View.main()
     * @param {object} column Column which should be displayed
     * @param {array} records Records which should be displayed inside column.
     */
    main({column, records} = false) {
        // Printing column
        this.columnView.main({columnData: column});

        // Getting printed column
        let columnElement = this.dom(`[data-column-id="${column.id}"]`).first();

        // Printing records inside column
        for (let i = 0; i < records.length; i++) {
            this.recordView.main({recordData: records[i], columnElement: columnElement});
        }
    }
}

export default DisplayColumnsWithRecords;
