/**
 * @fileOverview Attaches events to appropriate methods on index page
 * @namespace NikitosGolubev\Bootstrap\Routers
 */

import Router from '../../router';

// Models
import NullModel from '../../models/null-model';

// Controllers
import RecordsController from '../../controllers/records-controller';
import ColumnsController from '../../controllers/columns-controller';

// Views
import AddRecordForm from '../../views/content/add-record-form';
import RemoveAddRecordForm from '../../views/content/remove-add-record-form';
import RemoveElement from "../../views/layouts/remove-element";
import EmptyColumn from '../../views/content/empty-column';

// DOM elements
let body = document.querySelector('.js-page-body');

// Attaching events
body.addEventListener('click', showAddRecordForm);
body.addEventListener('click', hideAddRecordForm);
body.addEventListener('click', removeEmptyColumn);
body.addEventListener('click', createEmptyColumn);

// Event functions
function showAddRecordForm(event) {
    const model = new NullModel();
    const view = new AddRecordForm(model);
    const controller = new RecordsController(model, view);

    Router.run({event: event}, controller, 'create');
}

function hideAddRecordForm(event) {
    const model = new NullModel();
    const view = new RemoveAddRecordForm(model);
    const controller = new RecordsController(model, view);

    Router.run({event: event}, controller, 'hideCreate');
}

function removeEmptyColumn(event) {
    const view = new RemoveElement();
    const controller = new ColumnsController(false, view);

    Router.run({event: event}, controller, 'destroyEmptyColumn');
}

function createEmptyColumn(event) {
    const model = new NullModel();
    const view = new EmptyColumn(model);
    const controller = new ColumnsController(model, view);

    Router.run({event: event}, controller, 'createEmptyColumn');
}