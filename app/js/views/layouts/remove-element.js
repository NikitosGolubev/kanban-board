/**
 * @fileOverview Remove element layout.
 * @namespace NikitosGolubev\Views\Layouts
 */

import Layout from "../layout";

/**
 * Removes particular element from DOM
 */
class RemoveElement extends Layout {
    namespace() { return 'NikitosGolubev\\Views\\Layouts\\RemoveElement'; }

    constructor() {
        super();
    }

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
