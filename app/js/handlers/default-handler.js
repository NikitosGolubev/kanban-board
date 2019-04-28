/**
 * @fileOverview Default handler
 * @namespace NikitosGolubev\Handlers
 */

import Handler from './handler';

/**
 * Provides default approach on handle exceptions at the application.
 * @implements Handler
 */
class DefaultHandler extends Handler {
    /**
     * @see Handler.handle()
     * @param exception
     */
    handle(exception) {
        // There exceptions could be handled
    }
}

export default DefaultHandler;
