/**
 * @fileOverview Pastes add record form to template.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';

/* Layouts */
import RemoveElement from '../layouts/remove-element';

/* UI factories */
import AddRecordFormFactory from '../../ui-factories/simple/add-record-form-factory';

/**
 * @implements View, Observer
 */
class AddRecordForm extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\AddRecordForm'; }

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
     * @param {object} $data Expected: {createElem: DOMElemTriggeredWithEvent}
     */
    main($data = false) {
        let controlsContainer = $data.createElem.parentNode;

        this.removeElement($data.createElem);

        let form = this.createAddRecordForm();

        controlsContainer.appendChild(form);
    }

    /**
     * @private
     * @return {Object} DOM
     */
    createAddRecordForm() {
        let formFactory = new AddRecordFormFactory;
        return formFactory.get();
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

export default AddRecordForm;
