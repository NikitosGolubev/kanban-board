/**
 * @fileOverview Attaches events to appropriate methods on index page
 * @namespace NikitosGolubev\Bootstrap\Routers
 */

import Router from '../../router';
import DOM from '../../helpers/dom';

import NullModel from '../../models/null-model';

import RecordsController from '../../controllers/records-controller';
import AddRecordForm from '../../views/content/add-record-form';

// DOM elements
let body = document.querySelector('.js-page-body');

// Attaching events
body.addEventListener('click', showAddRecordForm);

// Event functions
function showAddRecordForm(event) {
    let validElementUsed = DOM.findParentByClassName(event.target, 'js-show-add-record-form');
    if (validElementUsed) {
        const nullModel = new NullModel();
        const addRecordFormView = new AddRecordForm(nullModel);
        const recordsController = new RecordsController(nullModel, addRecordFormView);

        Router.run(event, recordsController, 'create');
    }
}
