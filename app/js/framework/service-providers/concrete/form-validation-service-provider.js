/**
 * @fileOverview Dependencies for validating forms.
 * @namespace NikitosGolubev\Framework\ServiceProviders\Concrete
 */

import ServiceProvider from '../service-provider';

/**
 * @extends ServiceProvider
 */
class FormValidationServiceProvider extends ServiceProvider {
    constructor() {
        super();
    }

    /**
     * Provides dependencies for forms validation.
     * @return {object}
     */
    get() {
        return {
        };
    }
}

export default (new FormValidationServiceProvider()).get();