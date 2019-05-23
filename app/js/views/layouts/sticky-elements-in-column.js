/**
 * @fileOverview Sets particular elements to be sticky inside column.
 * @namespace NikitosGolubev\Views\Layouts
 */

import Layout from '../layout';

/**
 * @implements View, Observer
 */
class StickyElementsInColumn extends Layout {
    namespace() { return 'NikitosGolubev\\Views\\Layouts\\StickyElementsInColumn'; }

    constructor(model) {
        super(model);
        this.dom = this.services.dom;
        this.makeSticky = this.services.makeSticky;
    }

    /**
     * @see View.main()
     * @param {{column: HTMLElement}} Column which contains sticky elements.
     */
    main({column} = false) {
        let header = this.dom(column).find('.js-column__header').first();
        let footer = this.dom(column).find('.js-column__panel_wrap').first();

        this.makeSticky(header);
        this.makeSticky(footer);
    }
}

export default StickyElementsInColumn;
