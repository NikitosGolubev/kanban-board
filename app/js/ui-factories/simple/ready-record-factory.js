/**
 * @fileOverview
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
     * @param {{id: int, title: string}}
     */
    build({id, name}) {
        let recordContainer = document.createElement('div');
        recordContainer.classList.add('record');
        recordContainer.classList.add('js-record');
        recordContainer.setAttribute('data-record-id', id);

        let recordName = document.createElement('span');
        recordName.innerHTML = name;

        recordContainer.appendChild(recordName);

        return recordContainer;
    }
}

export default ReadyRecordFactory;
