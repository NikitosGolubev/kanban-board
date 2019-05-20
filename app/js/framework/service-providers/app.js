/**
 * @namespace NikitosGolubev\Framework\ServiceProviders
 */

import FormValidationDependencies from './concrete/form-validation-service-provider';

/**
 * Main dependency manager.
 */
class App {
    /**
     * Defines dependencies for modules.
     * @return {{namespace: object}}
     */
    getDependencies() {
        return {
            "NikitosGolubev\\Controllers\\ColumnsController": FormValidationDependencies
        };
    }
}

export default App;