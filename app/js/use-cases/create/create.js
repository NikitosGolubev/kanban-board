/**
 * @fileOverview Creation interface.
 * @namespace NikitosGolubev\UseCases\Create
 */

/**
 * Interface which provides API for creating different things.
 * @abstract
 */
class Create {
    constructor(db) {
        /** The storage instance for transferring and storing data */
        this.db = db;

        /** ID module which provides a handful of useful operations with it. */
        this.id = db.id();
    }

    /**
     * Creates something in some storage.
     * @abstract
     * @param {object} data Data for creation
     * @return {object} Data which were added
     */
    create(data) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }
}

export default Create;
