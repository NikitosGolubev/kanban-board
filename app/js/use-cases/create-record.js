import Record from '../entities/record';

function createRecord(data, db) {
    const id = db.id();
    const recordFactory = new Record(id);
    data = Object.assign({
        updatedAt: null
    }, data);
    const column = recordFactory.init(data);
    return db.add(column);
}

export {createRecord};
