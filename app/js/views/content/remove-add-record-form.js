/**
 * @fileOverview Pastes add record button and hides add record form.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';

/**
 * @implements View, Observer
 */
class RemoveAddRecordForm extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\RemoveAddRecordForm'; }

    constructor(model) {
        super(model);
        this.buttonFactory = this.services.buttonFactory;
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

        let button = this.createAddRecordButton();

        controlsContainer.insertBefore(button, $data.addForm);

        this.removeElement($data.addForm);
    }

    /**
     * @private
     * @return {Object} DOM
     */
    createAddRecordButton() {
        return this.buttonFactory().get();
    }

    /**
     * @private
     * @param {object} elementToRemove DOM
     */
    removeElement(elementToRemove) {
        elementToRemove.parentNode.removeChild(elementToRemove);
    }
}

export default RemoveAddRecordForm;
