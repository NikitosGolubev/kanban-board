/**
 * @fileOverview UI adjusters for index page
 * @namespace NikitosGolubev\Bootstrap\UiAdjusters
 */

import stickybits from 'stickybits';
import SimpleBar from 'simplebar';
import Sortable from 'sortablejs';

// Starter
assignScrollToColumns();
makeColumnElementsSticky();
configureDragDropBtwRecords();

// On window resize, keep columns responsive
window.addEventListener('resize', () => {
    let columns = document.querySelectorAll('.js-column_wrap');
    columns.forEach((column) => {
        column.style.width = 100+'%';
    });
});

/**
 * Assigns scrollbars to columns (they are scrollable)
 */
function assignScrollToColumns() {
   SimpleBar.removeObserver();
   let columns = document.querySelectorAll('.js-column_wrap');
   let scrollOptions = {};
   columns.forEach((column) => {
      new SimpleBar(column, scrollOptions);
   });
}

/**
 * Make column elements sticky (cross browser)
 */
function makeColumnElementsSticky() {
   const stickyHeaders = stickybits('.js-column__header');
   const stickyFooters = stickybits('.js-column__panel_wrap');
}

/**
 * Defines drag & drop functionality for records.
 */
function configureDragDropBtwRecords() {
   let recordContainers= document.querySelectorAll('.js-column__content');
   recordContainers.forEach((recordContainer) => {
      Sortable.create(recordContainer, {
         handle: '.js-record',
         animation: 300,
         direction: 'vertical',
         ghostClass: 'record_drug',
         chosenClass: 'record_drug',
         swapThreshold: 0.35
      });
   });
}
