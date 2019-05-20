/**
 * @fileOverview Base router.
 * @namespace NikitosGolubev\Framework
 */

import Handler from '../handlers/handler';
import DefaultHandler from '../handlers/default-handler';

/**
 * Provides some common API for all routers
 * @use NikitosGolubev\Handlers\Handler
 * @use NikitosGolubev\Handlers\DefaultHandler
 */
class Router {
    /**
     * Default method which wraps the calls to logic.
     *
     * @param data
     * @param controllerObj
     * @param {string} $method If omitted, then view is gonna be printed.
     * @param $handler
     */
    static run(data, controllerObj, $method = 'printView', $handler = false) {
        if (!($handler instanceof Handler)) $handler = new DefaultHandler();

        try {
            controllerObj[$method](data);
        } catch (e) {
            $handler.handle(e);
        }
    }


    /**
     * Runs several calls to logic in order.
     * @param {array} params Expected [[data, controller, $method = 'printView', $handler = false], ....]
     */
    static multipleRun(params) {
        for (let i = 0; i < params.length; i++) {
            let [data, controller, method="printView", handler=false] = params[i];
            Router.run(data, controller, method, handler);
        }
    }
}

export default Router;
