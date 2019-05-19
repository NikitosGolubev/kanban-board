/**
 * @fileOverview Creates add record form.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';
// Smaller UI parts
import AddFormContainerFactory from "./add-form-container-factory";
import TextareaFactory from './textarea-factory';
import FormControlsContainerFactory from './form-controls-container-factory';
import ButtonFactory from "./button-factory";
import CloseBtnFactory from "./close-btn-factory";


/**
 *
 * @extends UiFactory
 */
class AddRecordFormFactory extends UiFactory {
    /**
     * @see UiFactory.uiObjects
     */
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.uiObjectsFactory()
     * @return {Map<any, UiFactory>}
     */
    uiObjectsFactory() {
        return new Map([
            ['formContainer', new AddFormContainerFactory()],
            ['textarea', new TextareaFactory({placeholder: 'Введите название карточки'})],
            ['formControlsContainer', new FormControlsContainerFactory()],
            ['addBtn', new ButtonFactory({content: 'Добавить карточку'})],
            ['closeBtn', new CloseBtnFactory()]
        ]);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data nothing expected
     */
    build(data) {
        let formContainer = this.uiObjects.get('formContainer').get();
        formContainer.classList.add('js-create-record-form');

        let textareaContainer = document.createElement('div');
        let textarea = this.uiObjects.get('textarea').get(); // Textarea
        textarea.classList.add('js-record-name-input');
        textareaContainer.appendChild(textarea);

        let formControlsContainer = this.uiObjects.get('formControlsContainer').get(); // Div for controls

        // Controls
        let addBtn = this.getAddBtn();
        let closeBtn = this.getCloseBtn();

        formControlsContainer.appendChild(addBtn);
        formControlsContainer.appendChild(closeBtn);

        formContainer.appendChild(textareaContainer);
        formContainer.appendChild(formControlsContainer);

        return formContainer;
    }

    /**
     * @private
     * @return {HTMLDivElement}
     */
    getAddBtn() {
        let addBtn = document.createElement('div');
        let btn = this.uiObjects.get('addBtn').get();
        btn.classList.add('js-create-record');
        addBtn.appendChild(btn);
        return addBtn;
    }

    /**
     * @private
     * @return {HTMLDivElement}
     */
    getCloseBtn() {
        let closeBtnContainer = document.createElement('div');
        let closeBtn = this.uiObjects.get('closeBtn').get();
        closeBtn.classList.add('add-form__close-img');
        closeBtn.classList.add('js-close-add-record-form');
        closeBtnContainer.appendChild(closeBtn);
        return closeBtnContainer;
    }
}

export default AddRecordFormFactory;
