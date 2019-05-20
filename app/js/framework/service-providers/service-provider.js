/**
 * @fileOverview Service Provider Interface
 * @namespace NikitosGolubev\Framework\ServiceProviders
 */

/**
 * Provides API to derive dependencies.
 */
class ServiceProvider {
    constructor() {}

    /**
     * Provides dependencies which should be injected in someplace.
     * @abstract
     * @return {object}
     */
    get() {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }
}

export default ServiceProvider;