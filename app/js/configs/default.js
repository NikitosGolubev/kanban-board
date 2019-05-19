/**
 * @fileOverview Stores default configuration for application.
 * @namespace NikitosGolubev\Configs
 */

/**
 * Default settings for application.
 * @return {object}
 */
function config() {
    return {
        localStorage: {
            database: "KANBAN_BOARD"
        }
    };
}

export default config;