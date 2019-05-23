/**
 * @fileOverview Represents record
 * @namespace NikitosGolubev\Entities
 */

import Entity from './entity';

/**
 * @extends Entity
 */
class Record extends Entity {
    constructor($id = null) {
        super();
        this.id = $id;
    }

    /**
     * Initiates records structure.
     * @param {int} id
     * @param {int|null} createdAt
     * @param {int|null} updatedAt
     * @param {string} name
     * @param {int} columnId
     * @return {object}
     */
    init({
         id = this.id.newId(),
         createdAt = Date.now(),
         updatedAt = Date.now(),
         name,
         columnId
    }) {
        this.validate('record', {
            name: name,
            columnId: columnId
        });

        return Object.freeze({
            id: () => +id,
            createdAt: () => createdAt,
            updatedAt: ()  => updatedAt,
            name: () => name,
            columnId: () => +columnId
        });
    }
}

export default Record;