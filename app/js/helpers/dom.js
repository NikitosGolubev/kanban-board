/**
 * @fileOverview Provides some helpful API to manipulate DOM
 * @namespace NikitosGolubev\Helpers
 */

class DOM {
    /**
     * Finding particular parent by its className and its child
     *
     * @param  {Object} childElement
     * @param  {String} parentClassName
     * @return {Object|Boolean} DOM element OR FALSE(not found)
     */
    static findParentByClassName(childElement, parentClassName) {
        // If given child IS the element that should be found. (when unaware of if it's child elem or not)
        if (childElement.classList.contains(parentClassName)) return childElement;

        let parentResult = childElement.parentNode; // Getting first parent of child
        // Starting loop
        // If element doesnt contain needed className so loop next
        while (!parentResult.classList.contains(parentClassName)) {
            // If html is our parent so its something wrong here, == nothing found
            if (parentResult.tagName === "HTML") return false;
            // Getting next parent element
            parentResult = parentResult.parentNode;
        }
        return parentResult;
    }

}

export default DOM;
