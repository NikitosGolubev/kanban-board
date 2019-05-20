/**
 * @fileOverview Creates new record.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';
import u from 'umbrellajs';
import ReadyRecordFactory from "../../ui-factories/simple/ready-record-factory";

/**
 * @implements View, Observer
 */
class ReadyRecord extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\ReadyRecord'; }

    constructor(model) {
        super(model);
    }

    /**
     * @see Observer.update()
     */
    update(data) {}

    /**
     * @see View.main()
     * @param $data
     */
    main({recordData, columnElement} = false) {
        let recordsContainer = u(columnElement).find('.js-column__content').first();
        let readyRecordFactory = new ReadyRecordFactory(recordData);
        let readyRecord = readyRecordFactory.get();

        recordsContainer.appendChild(readyRecord);
    }
}

export default ReadyRecord;
