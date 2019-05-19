/**
 * @fileOverview Creates new column in some storage.
 * @namespace NikitosGolubev\UseCases
 */

import Column from '../entities/column';

/**
 *
 * @param {object} data Data which were passed for creation column.
 * @param {object} db Module which can perform operations with some storage
 * @return {object} Object which was stored.
 */
function createColumn(data, db) {
    const id = db.id();
    const columnFactory = new Column(id);
    data = Object.assign({
        updatedAt: null
    }, data);
    const column = columnFactory.init(data);
    return db.add(column);
}

export {createColumn};


