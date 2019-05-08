/**
 * @fileOverview Creates add column form.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';
// Smaller UI parts
import AddFormContainerFactory from "./add-form-container-factory";
import TextInputFactory from './text-input-factory';
import FormControlsContainerFactory from './form-controls-container-factory';
import ButtonFactory from "./button-factory";
import CloseBtnFactory from "./close-btn-factory";


/**
 *
 * @extends UiFactory
 */
class CreateColumnFormFactory extends UiFactory {
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
            ['input', new TextInputFactory({placeholder: 'Введите название колонки'})],
            ['formControlsContainer', new FormControlsContainerFactory()],
            ['addBtn', new ButtonFactory({content: 'Добавить колонку'})],
            ['closeBtn', new CloseBtnFactory()]
        ]);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data nothing expected
     */
    build(data) {
        let formContainer = this.uiObjects.get('formContainer').get();

        let inputContainer = document.createElement('div');
        let input = this.uiObjects.get('input').get(); // Textarea
        inputContainer.appendChild(input);

        let formControlsContainer = this.uiObjects.get('formControlsContainer').get(); // Div for controls

        // Controls
        let addBtn = this.getAddBtn();
        let closeBtn = this.getCloseBtn();

        formControlsContainer.appendChild(addBtn);
        formControlsContainer.appendChild(closeBtn);

        formContainer.appendChild(inputContainer);
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
        closeBtn.classList.add('js-remove-empty-column');
        closeBtnContainer.appendChild(closeBtn);
        return closeBtnContainer;
    }
}

export default CreateColumnFormFactory;
