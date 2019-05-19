/**
 * @fileOverview Represents column
 * @namespace NikitosGolubev\Entities
 */

class Column {
    constructor($id = null) {
        this.id = $id;
    }

    /**
     * Creates column.
     * @param id
     * @param createdAt
     * @param updatedAt
     * @param title Title of the column
     * @return {object}
     */
    init({
         id = this.id.newId(),
         createdAt = Date.now(),
         updatedAt = Date.now(),
         title
         }) {
        return Object.freeze({
            id: () => id,
            createdAt: () => createdAt,
            updatedAt: ()  => updatedAt,
            title: () => title
        });
    }
}

export default Column;