/**
 * @fileOverview Service Interface
 * @namespace NikitosGolubev\Services
 */

import Core from '../framework/core';

/**
 * @abstract
 * @extends Core
 */
class Service extends Core {
    namespace() {return "NikitosGolubev\\Services\\Service";}

    constructor() {
        super();
    }
}

export default Service;