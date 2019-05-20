/**
 * @fileOverview Represents column
 * @namespace NikitosGolubev\Entities
 */

import Entity from './entity';

/**
 * @extends Entity
 */
class Column extends Entity {
    constructor($id = null) {
        super();
        this.id = $id;
    }

    /**
     * Initiates columns structure.
     * @param {int} id
     * @param {int|null} createdAt
     * @param {int|null} updatedAt
     * @param {string} title Title of the column
     * @return {object}
     */
    init({
         id = this.id.newId(),
         createdAt = Date.now(),
         updatedAt = Date.now(),
         title
    }) {
        this.validate('column', {
            title: title
        });

        return Object.freeze({
            id: () => id,
            createdAt: () => createdAt,
            updatedAt: ()  => updatedAt,
            title: () => title
        });
    }
}

export default Column;