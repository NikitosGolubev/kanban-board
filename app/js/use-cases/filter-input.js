/**
 * @fileOverview Filters content which were received.
 * @namespace NikitosGolubev\UseCases
 */

/**
 * Filters data which is received from user to prevent security issues.
 * @param input Data received
 * @param filter Package which is gonna help with filtering
 * @return {string}
 */
function filter(input, filter) {
    input = ""+input; // To string
    input = filter.escape(input);
    input = trim(input);
    input = filter.trim(input);
    input = filter.stripLow(input, {keep_new_lines: true});
    return input;
}

/**
 * Cuts all unnecessary spaces from the string. Including spaces between characters.
 * @param {string} str
 * @return {string}
 */
function trim(str) {
    return str.replace(/\s\s+/g, " ");
}

export {filter};
