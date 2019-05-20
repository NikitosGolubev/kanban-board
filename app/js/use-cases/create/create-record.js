/**
 * @namespace NikitosGolubev\UseCases\Create
 */

import Create from './create';
import Record from '../../entities/record';

/**
 * Creates new record.
 * @extends Create
 */
class CreateRecord extends Create {
    constructor(db) {
        super(db);
        this.recordFactory = new Record(this.id);
    }

    /**
     * @see Create.create()
     * @param recordData
     * @return {object}
     */
    create(recordData) {
        recordData = Object.assign({
            updatedAt: null
        }, recordData);

        const record = this.recordFactory.init(recordData);
        return this.db.add(record);
    }
}

export default CreateRecord;