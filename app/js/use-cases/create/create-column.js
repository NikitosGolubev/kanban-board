/**
 * @namespace NikitosGolubev\UseCases\Create
 */

import Create from './create';
import Column from '../../entities/column';

/**
 * Creates new column.
 * @extends Create
 */
class CreateColumn extends Create {
    constructor(db) {
        super(db);
        this.columnFactory = new Column(this.id);
    }

    /**
     * @see Create.create()
     * @param columnData
     * @return {object}
     */
    create(columnData) {
        columnData = Object.assign({
            updatedAt: null
        }, columnData);

        const column = this.columnFactory.init(columnData);
        return this.db.add(column);
    }
}

export default CreateColumn;