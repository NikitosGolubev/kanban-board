/**
 * @fileOverview Creates ready to be displayed record.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class ReadyRecordFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {Number} id Record ID
     * @param {string} name Record name (it's inner content)
     * @return {HTMLElement}
     */
    build({id, name}) {
        let recordContainer = document.createElement('div');
        recordContainer.classList.add('record');
        recordContainer.classList.add('js-record');
        recordContainer.setAttribute('data-record-id', id);

        let recordContent = document.createElement('span');
        recordContent.classList.add('record__content');
        recordContent.innerHTML = name;

        recordContainer.appendChild(recordContent);

        return recordContainer;
    }
}

export default ReadyRecordFactory;
