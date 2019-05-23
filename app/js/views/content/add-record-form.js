/**
 * @fileOverview Pastes add record form to template.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';

/**
 * @implements View, Observer
 */
class AddRecordForm extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\AddRecordForm'; }

    constructor(model) {
        super(model);
        this.formFactory = this.services.formFactory;
    }

    /**
     * @see Observer.update()
     */
    update(data) {}

    /**
     * @see View.main()
     *
     * @param {object} $data Expected: {createElem: DOMElemTriggeredWithEvent}
     */
    main($data = false) {
        let controlsContainer = $data.createElem.parentNode;

        let form = this.createAddRecordForm();

        controlsContainer.insertBefore(form, $data.createElem);

        this.removeElement($data.createElem);
    }

    /**
     * @private
     * @return {Object} DOM
     */
    createAddRecordForm() {
        return this.formFactory().get();
    }

    /**
     * @private
     * @param {object} elementToRemove DOM
     */
    removeElement(elementToRemove) {
        elementToRemove.parentNode.removeChild(elementToRemove);
    }
}

export default AddRecordForm;
