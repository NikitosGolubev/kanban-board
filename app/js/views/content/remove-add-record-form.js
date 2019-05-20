/**
 * @fileOverview Pastes add record button and hides add record form.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';

/* Layouts */
import RemoveElement from '../layouts/remove-element';

/* UI factories */
import AddRecordButtonFactory from "../../ui-factories/simple/add-record-button-factory";

/**
 * @implements View, Observer
 */
class RemoveAddRecordForm extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\RemoveAddRecordForm'; }

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
     * @param {object} $data Expected: {addForm: DOMElement}
     */
    main($data = false) {
        let controlsContainer = $data.addForm.parentNode;

        this.removeElement($data.addForm);

        let button = this.createAddRecordButton();

        controlsContainer.appendChild(button);
    }

    /**
     * @private
     * @return {Object} DOM
     */
    createAddRecordButton() {
        let buttonFactory = new AddRecordButtonFactory();
        return buttonFactory.get();
    }

    /**
     * @private
     * @param {object} elementToRemove DOM
     */
    removeElement(elementToRemove) {
        let removeElementLayout = new RemoveElement();
        removeElementLayout.main({element: elementToRemove});
    }
}

export default RemoveAddRecordForm;
