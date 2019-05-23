/**
 * @fileOverview Makes records druggable inside column.
 * @namespace NikitosGolubev\Views\Layouts
 */

import Layout from '../layout';

/**
 * @implements View, Observer
 */
class DraggableRecordsInColumn extends Layout {
    namespace() { return 'NikitosGolubev\\Views\\Layouts\\DraggableRecordsInColumn'; }

    constructor(model) {
        super(model);
        this.dom = this.services.dom;
        this.drugAndDrop = this.services.drugAndDrop;
    }

    /**
     * @see View.main()
     * @param {{column: HTMLElement}} Column which needs to contain druggable records.
     */
    main({column} = false) {
        let recordContainer = this.dom(column).find('.js-column__content').first();
        this.drugAndDrop.create(recordContainer, {
            handle: '.js-record',
            animation: 300,
            direction: 'vertical',
            ghostClass: 'record_drug',
            chosenClass: 'record_drug',
            swapThreshold: 0.35
        });
    }
}

export default DraggableRecordsInColumn;
