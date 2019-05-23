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
        let serviceColumn = document.querySelector('.js-last-service-column');
        let parent  = serviceColumn.parentNode;
        parent.insertBefore(column, serviceColumn);
    }
}

export default EmptyColumn;
