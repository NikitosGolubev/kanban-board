/**
 * @fileOverview Creates new record.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../view';

/**
 * @implements View, Observer
 */
class ReadyRecord extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\ReadyRecord'; }

    constructor(model) {
        super(model);
        this.dom = this.services.dom;
        this.recordFactory = this.services.recordFactory;
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
        let recordsContainer = this.dom(columnElement).find('.js-column__content').first();
        let readyRecord = this.recordFactory(recordData).get();

        recordsContainer.appendChild(readyRecord);
    }
}

export default ReadyRecord;
