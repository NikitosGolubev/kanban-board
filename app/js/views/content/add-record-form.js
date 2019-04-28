/**
 * @fileOverview Pastes add record form to template.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';

/**
 * @implements View, Observer
 */
class AddRecordForm extends View {
    constructor(model) {
        super(model);
    }

    /**
     * @see Observer.update()
     */
    update(data) {}

    /**
     * @see View.main()
     */
    main($data = false) {
        // Creating add record form element and pasting it
    }
}

export default AddRecordForm;
