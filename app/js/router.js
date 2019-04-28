/**
 * @fileOverview Base router.
 * @namespace NikitosGolubev
 */

import Handler from './handlers/handler';
import DefaultHandler from './handlers/default-handler';

/**
 * Provides some common API for all routers
 * @use NikitosGolubev\Handlers\Handler
 * @use NikitosGolubev\Handlers\DefaultHandler
 */
class Router {
    /**
     * Default method which wraps the calls to logic.
     *
     * @param event
     * @param controllerObj
     * @param method
     * @param $handler
     */
    static run(event, controllerObj, method, $handler = false) {
        if (!($handler instanceof Handler)) $handler = new DefaultHandler();

        try {
            controllerObj[method](event);
        } catch (e) {
            $handler.handle(e);
        }
    }
}

export default Router;
