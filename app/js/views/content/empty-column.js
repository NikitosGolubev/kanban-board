/**
 * @fileOverview Creates new empty column which user may fill with data in future.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';

/* Layouts */

/* UI factories */
import EmptyColumnFactory from "../../ui-factories/simple/empty-column-factory";


/**
 * @implements View, Observer
 */
class EmptyColumn extends View {
    constructor(model) {
        super(model);
    }

    /**
     * @see Observer.update()
     */
    update(data) {}

    /**
     * @see View.main()
     *
     * @param {object} $data Expected: Nothing
     */
    main($data = false) {
        let column = new EmptyColumnFactory();
        column = column.get();
        let serviceColumn = document.querySelector('.js-last-service-column');
        let parent  = serviceColumn.parentNode;
        parent.insertBefore(column, serviceColumn);
    }
}

export default EmptyColumn;
