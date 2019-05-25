/**
 * @fileOverview Removes all generated columns.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';

/**
 * @implements View, Observer
 */
class RemoveAllColumns extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\RemoveAllColumns'; }

    constructor(model) {
        super(model);
        this.dom = this.services.dom;
    }

    /**
     * @see Observer.update()
     */
    update(data) {}

    /**
     * Removes all the generated columns from columns container.
     * @param $data Nothing expected
     */
    main($data = false) {
        this.dom('.js-generated-column').remove();
    }
}

export default RemoveAllColumns;
