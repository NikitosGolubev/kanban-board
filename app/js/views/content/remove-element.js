/**
 * @fileOverview Just removes an element.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';

/**
 * Removes element from DOM
 */
class RemoveElement extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\RemoveElement'; }

    constructor(model) {
        super(model);
    }

    /**
     * @see Observer.update()
     */
    update(data) {}

    /**
     * Removes element from DOM.
     * @param $data Expects {element: DOMElemToRemove}
     */
    main($data = false) {
        let parent = $data.element.parentNode;
        parent.removeChild($data.element);
    }
}

export default RemoveElement;
