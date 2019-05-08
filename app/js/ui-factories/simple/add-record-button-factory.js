/**
 * @fileOverview Creates add record button.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';
// UI dependencies
import AddButtonFactory from './add-button-factory';

/**
 * @extends UiFactory
 */
class AddRecordButtonFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data nothing expected
     */
    build(data) {
        let addBtn = this.uiObjects.get('addBtn').get();
        addBtn.classList.add('js-show-add-record-form');
        addBtn.classList.add('column__panel');
        return addBtn;
    }

    /**
     * @see UiFactory.uiObjectsFactory()
     * @return {Map<any, UiFactory>}
     */
    uiObjectsFactory() {
        return new Map([
           ['addBtn', new AddButtonFactory({content: 'Добавить ещё одну карточку'})]
        ]);
    }
}

export default AddRecordButtonFactory;
