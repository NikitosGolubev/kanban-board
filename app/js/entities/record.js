class Record {
    constructor($id = null) {
        this.id = $id;
    }

    init({
             id = this.id.newId(),
             createdAt = Date.now(),
             updatedAt = Date.now(),
             name,
             columnId
         }) {
        return Object.freeze({
            id: () => id,
            createdAt: () => createdAt,
            updatedAt: ()  => updatedAt,
            name: () => name,
            columnId: () => columnId
        });
    }
}

export default Record;