/**
 * @fileOverview Prints view
 * @namespace NikitosGolubev\UseCases\PrintView
 */

/**
 * Prints view
 *
 * @param view View object which should print some content.
 * @param $data Data that should be passed to view.
 * @returns {*|void}
 */
function view(view, $data = false) {
    return view.main($data);
}

export default view;
