/**
 * @fileOverview Creates new empty column which user may fill with data in future.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';

/**
 * @implements View, Observer
 */
class EmptyColumn extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\EmptyColumn'; }

    constructor(model) {
        super(model);
        this.dom = this.services.dom;
        this.columnFactory = this.services.columnFactory;
    }

    /**
     * @see Observer.update()
     */
    update(data) {}

    /**
     * @see View.main()
     * @param {object} $data Expected: Nothing
     */
    main($data = false) {
        let column = this.columnFactory().get();
        this.displayColumn(column);
    }

    /**
     * Displays column on the screen correctly.
     * @param {HTMLElement} column
     */
    displayColumn(column) {
        let lastGeneratedColumn = this.dom('.js-generated-column').last();
        let columnsContainer = this.dom('.js-columns-container').first();

        if (lastGeneratedColumn) {
            // If previously generated columns exist, then pasting new column after last one.
            this.dom(lastGeneratedColumn).after(column);
        } else {
            // If no columns were generated before, than it's first column,
            // so pasting it at the beginning of columns container.
            this.dom(columnsContainer).prepend(column);
        }
    }
}

export default EmptyColumn;
