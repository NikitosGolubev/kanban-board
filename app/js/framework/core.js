/**
 * @fileOverview Core of the framework.
 * @namespace NikitosGolubev\Framework
 */

import App from './service-providers/app';

/**
 * Provides crucial functionality and performs important operations.
 * MUST be extended by Services, Models, Views, Controllers.
 */
class Core {
    /**
     * Defines namespace of current object. MUST BE OVERRIDDEN BY EACH CHILD.
     * @return {string}
     */
    namespace() { return 'NikitosGolubev\\Framework\\Core'; }

    constructor() {
        /**
         * Blueprint of dependencies for modules.
         * @type {App}
         */
        this.app = new App;

        /**
         * Injected dependencies.
         */
        this.services = this.injectDependencies();
    }

    /**
     * Injects dependencies to appropriate objects.
     * @return {object}
     */
    injectDependencies() {
        const dependencies = this.app.getDependencies();
        const dependenciesToInject = dependencies[this.namespace()];
        return (dependenciesToInject !== undefined) ? dependenciesToInject : {};
    }
}

export default Core;