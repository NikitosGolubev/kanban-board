/**
 * @fileOverview Attaches events to appropriate methods on index page
 * @namespace NikitosGolubev\Bootstrap\Routers
 */

import Router from '../../framework/router';
import u from "umbrellajs";

// Models
import NullModel from '../../models/null-model';
import Column from '../../models/content/ls-type/column';
import Record from "../../models/content/ls-type/record";

// Controllers
import RecordsController from '../../controllers/entities-management/records-controller';
import ColumnsController from '../../controllers/entities-management/columns-controller';

// Views
import AddRecordForm from '../../views/content/add-record-form';
import RemoveAddRecordForm from '../../views/content/remove-add-record-form';
import RemoveElement from "../../views/layouts/remove-element";
import EmptyColumn from '../../views/content/empty-column';
import ReadyColumn from '../../views/content/ready-column';
import ReadyRecord from '../../views/content/ready-record';
import FieldValidationMessage from '../../views/content/validation/field-validation-message';

// DOM elements
let body = document.querySelector('.js-page-body');

// Attaching events
body.addEventListener('click', showAddRecordForm);
body.addEventListener('click', hideAddRecordForm);
body.addEventListener('click', removeEmptyColumn);
body.addEventListener('click', createEmptyColumn);
body.addEventListener('click', createColumn);
body.addEventListener('click', createRecord);


// Event functions
function showAddRecordForm(event) {
    let elemTriggered = u(event.target).closest('.js-show-add-record-form').first();
    if (elemTriggered) {
        const model = new NullModel();
        const view = new AddRecordForm(model);
        const controller = new RecordsController(model, view);

        const data = {event: event, createElem: elemTriggered};

        Router.run(data, controller);
    }
}

function hideAddRecordForm(event) {
    let elemTriggered = u(event.target).closest('.js-close-add-record-form').first();
    if (elemTriggered) {
        const model = new NullModel();
        const view = new RemoveAddRecordForm(model);
        const controller = new RecordsController(model, view);

        const data = {event: event, closeElem: elemTriggered};

        Router.run(data, controller, 'hideCreateForm');
    }
}

function removeEmptyColumn(event) {
    let elemTriggered = u(event.target).closest('.js-remove-empty-column').first();
    if (elemTriggered) {
        const model = new NullModel();
        const view = new RemoveElement(model);
        const controller = new ColumnsController(model, view);

        const data = {event: event, destroyElem: elemTriggered};

        Router.run(data, controller, 'destroyEmptyColumn');
    }
}

function createEmptyColumn(event) {
    let elemTriggered = u(event.target).closest('.js-create-empty-column').first();
    if (elemTriggered) {
        const model = new NullModel();
        const view = new EmptyColumn(model);
        const controller = new ColumnsController(model, view);

        Router.run({event: event}, controller);
    }
}

function createColumn(event) {
    let elemTriggered = u(event.target).closest('.js-create-column').first();
    if (elemTriggered) {
        const modelValidate = new NullModel();
        const viewValidate = new FieldValidationMessage(modelValidate);
        const controllerValidate = new ColumnsController(modelValidate, viewValidate);

        const modelCreate = new Column();
        const viewCreate = new ReadyColumn(modelCreate);
        const controllerCreate = new ColumnsController(modelCreate, viewCreate);

        const data = {event: event, elemTriggered: elemTriggered};

        const params = [
            [data, controllerValidate, 'validate'],
            [data, controllerCreate, 'store']
        ];

        Router.multipleRun(params);
    }
}

function createRecord(event) {
    let elemTriggered = u(event.target).closest('.js-create-record').first();
    if (elemTriggered) {
        const modelValidate = new NullModel();
        const viewValidate = new FieldValidationMessage(modelValidate);
        const controllerValidate = new RecordsController(modelValidate, viewValidate);

        const modelCreate = new Record();
        const viewCreate = new ReadyRecord(modelCreate);
        const controllerCreate = new RecordsController(modelCreate, viewCreate);

        const data = {event: event, elemTriggered: elemTriggered};

        const params = [
            [data, controllerValidate, 'validate'],
            [data, controllerCreate, 'store']
        ];

        Router.multipleRun(params);
    }
}
