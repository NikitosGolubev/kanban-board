/**
 * @fileOverview Provides empty, nullable view.
 * @namespace NikitosGolubev\Views
 */

import View from './view';

/**
 * @implements View, Observer
 */
class NullView extends View {
    namespace() { return 'NikitosGolubev\\Views\\NullView'; }

    constructor(model) {
        super(model);
    }

    update(data) {}
    main($data = false) {}
}

export default NullView;
