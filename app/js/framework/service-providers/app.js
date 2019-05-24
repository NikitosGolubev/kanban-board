/**
 * @fileOverview Dependency manager.
 * WARNING: IT's FORBIDDEN TO IMPORT ANY VIEWS, MODELS OR CONTROLLERS HERE.
 * OTHERWISE CIRCULAR DEPENDENCY WOULD OCCUR AND THE WHOLE APPLICATION WILL BREAK (stop functioning).
 * SAME RULE OF IMPORTING APPLIES ON SERVICE PROVIDERS.
 * @namespace NikitosGolubev\Framework\ServiceProviders
 */

// Packages
import DomManipulationLibrary from 'umbrellajs';
import stickybits from 'stickybits';
import SimpleBar from 'simplebar';
import Sortable from 'sortablejs';

// Services
import ValidateColumn from "../../services/validator/concrete/validate-column";
import ValidateRecord from "../../services/validator/concrete/validate-record";

// UI factories
import CreateColumnFormFactory from "../../ui-factories/simple/create-column-form-factory";
import AddRecordFormFactory from "../../ui-factories/simple/add-record-form-factory";
import AddRecordButtonFactory from "../../ui-factories/simple/add-record-button-factory";
import ReadyColumnFactory from "../../ui-factories/simple/ready-column-factory";
import EmptyColumnFactory from "../../ui-factories/simple/empty-column-factory";
import ReadyRecordFactory from "../../ui-factories/simple/ready-record-factory";
import FieldMessageFactory from "../../ui-factories/simple/field-message-factory";

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
            // Controllers
            'NikitosGolubev\\Controllers\\EntitiesManagement\\ColumnsController': {
                dom: DomManipulationLibrary,
                validator: new ValidateColumn(),
                initialFormFactory: (formData) => new CreateColumnFormFactory(formData),
                ...EntityManagementDependencies
            },
            'NikitosGolubev\\Controllers\\EntitiesManagement\\RecordsController': {
                dom: DomManipulationLibrary,
                validator: new ValidateRecord(),
                initialFormFactory: (formData) => new AddRecordFormFactory(formData),
                ...EntityManagementDependencies
            },
            // Views
            'NikitosGolubev\\Views\\Content\\ReadyColumn': {
                columnFactory: (columnData) => new ReadyColumnFactory(columnData),
                dom: DomManipulationLibrary
            },
            'NikitosGolubev\\Views\\Content\\EmptyColumn': {
                columnFactory: (columnData) => new EmptyColumnFactory(columnData)
            },
            'NikitosGolubev\\Views\\Content\\ReadyRecord': {
                dom: DomManipulationLibrary,
                recordFactory: (recordData) => new ReadyRecordFactory(recordData)
            },
            'NikitosGolubev\\Views\\Content\\AddRecordForm': {
                formFactory: (formData) => new AddRecordFormFactory(formData)
            },
            'NikitosGolubev\\Views\\Content\\RemoveAddRecordForm': {
                buttonFactory: (buttonData) => new AddRecordButtonFactory(buttonData)
            },
            'NikitosGolubev\\Views\\Content\\Validation\\FieldValidationMessage': {
                dom: DomManipulationLibrary,
                messageFactory: (messageData) => new FieldMessageFactory(messageData)
            },
            'NikitosGolubev\\Views\\Content\\DisplayColumnsWithRecords': {
                dom: DomManipulationLibrary
            },
            // Layouts
            'NikitosGolubev\\Views\\Layouts\\StickyElementsInColumn': {
                dom: DomManipulationLibrary,
                makeSticky: stickybits
            },
            'NikitosGolubev\\Views\\Layouts\\ScrollableColumn': {
                makeScrollable: (element, $options = {}) => new SimpleBar(element, $options)
            },
            'NikitosGolubev\\Views\\Layouts\\DraggableRecordsInColumn': {
                dom: DomManipulationLibrary,
                drugAndDrop: Sortable
            }
        };
    }
}

export default App;