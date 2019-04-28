/**
 * @fileOverview Handler Interface
 * @namespace NikitosGolubev\Handlers
 */

/**
 * Describes API on how to handle exceptions
 * @interface
 */
class Handler {
    /**
     * Method which handles the exceptions some way.
     * @param exception
     */
    handle(exception) {
        throw "It's abstract method which requires implementation.";
    }
}

export default Handler;
