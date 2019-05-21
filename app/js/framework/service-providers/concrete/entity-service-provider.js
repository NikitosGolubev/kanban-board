/**
 * @fileOverview Dependencies for managing entities.
 * @namespace NikitosGolubev\Framework\ServiceProviders\Concrete
 */

import ServiceProvider from '../service-provider';
import RequestDataStorage from '../../../services/request-data-storage/request-data-storage';
import UserInputMutator from '../../../services/mutator/user-input-mutator';
import DataToDisplayMutator from '../../../services/mutator/data-to-display-mutator';
import DomValidationPointer from '../../../services/validation-pointer/dom-validation-pointer';

/**
 * @extends ServiceProvider
 */
class EntityServiceProvider extends ServiceProvider {
    constructor() {
        super();
    }

    /**
     * Provides dependencies for committing actions with entities.
     * @return {object}
     */
    get() {
        return {
            request: new RequestDataStorage(),
            inputFilter: new UserInputMutator(),
            displayFilter: new DataToDisplayMutator(),
            validationPointer: new DomValidationPointer(),
        };
    }
}

export default (new EntityServiceProvider()).get();