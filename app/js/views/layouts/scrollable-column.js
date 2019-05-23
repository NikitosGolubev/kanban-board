/**
 * @fileOverview Makes column scrollable.
 * @namespace NikitosGolubev\Views\Layouts
 */

import Layout from '../layout';

/**
 * @implements View, Observer
 */
class ScrollableColumn extends Layout {
    namespace() { return 'NikitosGolubev\\Views\\Layouts\\ScrollableColumn'; }

    constructor(model) {
        super(model);
        this.makeScrollable = this.services.makeScrollable;
    }

    /**
     * @see View.main()
     * @param {{column: HTMLElement}} Column which needs to be scrollable.
     */
    main({column} = false) {
        this.makeScrollable(column, {});
    }
}

export default ScrollableColumn;
