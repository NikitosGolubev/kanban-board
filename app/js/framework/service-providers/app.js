/**
 * @fileOverview Dependency manager.
 * WARNING: IT's FORBIDDEN TO IMPORT ANY VIEWS, MODELS OR CONTROLLERS HERE.
 * OTHERWISE CIRCULAR DEPENDENCY WOULD OCCUR AND THE WHOLE APPLICATION WILL BREAK (stop functioning).
 * SAME RULE OF IMPORTING APPLIES ON SERVICE PROVIDERS.
 * @namespace NikitosGolubev\Framework\ServiceProviders
 */

// Packages
import DomManipulationLibrary from 'umbrellajs';

// Services
import ValidateColumn from "../../services/validator/concrete/validate-column";
import ValidateRecord from "../../services/validator/concrete/validate-record";
import CreateColumnFormFactory from "../../ui-factories/simple/create-column-form-factory";
import AddRecordFormFactory from "../../ui-factories/simple/add-record-form-factory";

// Service providers
import EntityManagementDependencies from './concrete/entity-service-provider';

/**
 * Main dependency manager.
 * WARNING: IT's FORBIDDEN TO IMPORT ANY VIEWS, MODELS OR CONTROLLERS HERE.
 * OTHERWISE CIRCULAR DEPENDENCY WOULD OCCUR AND THE WHOLE APPLICATION WILL BREAK (stop functioning).
 * SAME RULE OF IMPORTING APPLIES ON SERVICE PROVIDERS.
 */
class App {
    /**
     * Defines dependencies for modules.
     * @return {{namespace: object}}
     */
    getDependencies() {
        return {
            'NikitosGolubev\\Controllers\\EntitiesManagement\\ColumnsController': {
                dom: DomManipulationLibrary,
                validator: new ValidateColumn(),
                initialFormFactory: new CreateColumnFormFactory(),
                ...EntityManagementDependencies
            },
            'NikitosGolubev\\Controllers\\EntitiesManagement\\RecordsController': {
                dom: DomManipulationLibrary,
                validator: new ValidateRecord(),
                initialFormFactory: new AddRecordFormFactory(),
                ...EntityManagementDependencies
            }
        };
    }
}

export default App;