(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var _stickybits = _interopRequireDefault(require("stickybits"));

var _simplebar = _interopRequireDefault(require("simplebar"));

var _sortablejs = _interopRequireDefault(require("sortablejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @fileOverview UI adjusters for index page
 * @namespace NikitosGolubev\Bootstrap\UiAdjusters
 */
// Starter
assignScrollToColumns();
makeColumnElementsSticky();
configureDragDropBtwRecords(); // On window resize, keep columns responsive

window.addEventListener('resize', function () {
  var columns = document.querySelectorAll('.js-column_wrap');
  columns.forEach(function (column) {
    column.style.width = 100 + '%';
  });
});
/**
 * Assigns scrollbars to columns (they are scrollable)
 */

function assignScrollToColumns() {
  _simplebar["default"].removeObserver();

  var columns = document.querySelectorAll('.js-column_wrap');
  var scrollOptions = {};
  columns.forEach(function (column) {
    new _simplebar["default"](column, scrollOptions);
  });
}
/**
 * Make column elements sticky (cross browser)
 */


function makeColumnElementsSticky() {
  var stickyHeaders = (0, _stickybits["default"])('.js-column__header');
  var stickyFooters = (0, _stickybits["default"])('.js-column__panel_wrap');
}
/**
 * Defines drag & drop functionality for records.
 */


function configureDragDropBtwRecords() {
  var recordContainers = document.querySelectorAll('.js-column__content');
  recordContainers.forEach(function (recordContainer) {
    _sortablejs["default"].create(recordContainer, {
      handle: '.js-record',
      animation: 300,
      direction: 'vertical',
      ghostClass: 'record_drug',
      chosenClass: 'record_drug',
      swapThreshold: 0.35
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOTA4ZmUxMDAuanMiXSwibmFtZXMiOlsiYXNzaWduU2Nyb2xsVG9Db2x1bW5zIiwibWFrZUNvbHVtbkVsZW1lbnRzU3RpY2t5IiwiY29uZmlndXJlRHJhZ0Ryb3BCdHdSZWNvcmRzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbHVtbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY29sdW1uIiwic3R5bGUiLCJ3aWR0aCIsIlNpbXBsZUJhciIsInJlbW92ZU9ic2VydmVyIiwic2Nyb2xsT3B0aW9ucyIsInN0aWNreUhlYWRlcnMiLCJzdGlja3lGb290ZXJzIiwicmVjb3JkQ29udGFpbmVycyIsInJlY29yZENvbnRhaW5lciIsIlNvcnRhYmxlIiwiY3JlYXRlIiwiaGFuZGxlIiwiYW5pbWF0aW9uIiwiZGlyZWN0aW9uIiwiZ2hvc3RDbGFzcyIsImNob3NlbkNsYXNzIiwic3dhcFRocmVzaG9sZCJdLCJtYXBwaW5ncyI6Ijs7QUFLQTs7QUFDQTs7QUFDQTs7OztBQVBBOzs7O0FBU0E7QUFDQUEscUJBQXFCO0FBQ3JCQyx3QkFBd0I7QUFDeEJDLDJCQUEyQixHLENBRTNCOztBQUNBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDcEMsTUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixDQUFkO0FBQ0FGLEVBQUFBLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixVQUFDQyxNQUFELEVBQVk7QUFDeEJBLElBQUFBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxLQUFiLEdBQXFCLE1BQUksR0FBekI7QUFDSCxHQUZEO0FBR0gsQ0FMRDtBQU9BOzs7O0FBR0EsU0FBU1gscUJBQVQsR0FBaUM7QUFDOUJZLHdCQUFVQyxjQUFWOztBQUNBLE1BQUlSLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBZDtBQUNBLE1BQUlPLGFBQWEsR0FBRyxFQUFwQjtBQUNBVCxFQUFBQSxPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFZO0FBQ3pCLFFBQUlHLHFCQUFKLENBQWNILE1BQWQsRUFBc0JLLGFBQXRCO0FBQ0YsR0FGRDtBQUdGO0FBRUQ7Ozs7O0FBR0EsU0FBU2Isd0JBQVQsR0FBb0M7QUFDakMsTUFBTWMsYUFBYSxHQUFHLDRCQUFXLG9CQUFYLENBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLDRCQUFXLHdCQUFYLENBQXRCO0FBQ0Y7QUFFRDs7Ozs7QUFHQSxTQUFTZCwyQkFBVCxHQUF1QztBQUNwQyxNQUFJZSxnQkFBZ0IsR0FBRVgsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBdEI7QUFDQVUsRUFBQUEsZ0JBQWdCLENBQUNULE9BQWpCLENBQXlCLFVBQUNVLGVBQUQsRUFBcUI7QUFDM0NDLDJCQUFTQyxNQUFULENBQWdCRixlQUFoQixFQUFpQztBQUM5QkcsTUFBQUEsTUFBTSxFQUFFLFlBRHNCO0FBRTlCQyxNQUFBQSxTQUFTLEVBQUUsR0FGbUI7QUFHOUJDLE1BQUFBLFNBQVMsRUFBRSxVQUhtQjtBQUk5QkMsTUFBQUEsVUFBVSxFQUFFLGFBSmtCO0FBSzlCQyxNQUFBQSxXQUFXLEVBQUUsYUFMaUI7QUFNOUJDLE1BQUFBLGFBQWEsRUFBRTtBQU5lLEtBQWpDO0FBUUYsR0FURDtBQVVGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgVUkgYWRqdXN0ZXJzIGZvciBpbmRleCBwYWdlXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXEJvb3RzdHJhcFxcVWlBZGp1c3RlcnNcclxuICovXHJcblxyXG5pbXBvcnQgc3RpY2t5Yml0cyBmcm9tICdzdGlja3liaXRzJztcclxuaW1wb3J0IFNpbXBsZUJhciBmcm9tICdzaW1wbGViYXInO1xyXG5pbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XHJcblxyXG4vLyBTdGFydGVyXHJcbmFzc2lnblNjcm9sbFRvQ29sdW1ucygpO1xyXG5tYWtlQ29sdW1uRWxlbWVudHNTdGlja3koKTtcclxuY29uZmlndXJlRHJhZ0Ryb3BCdHdSZWNvcmRzKCk7XHJcblxyXG4vLyBPbiB3aW5kb3cgcmVzaXplLCBrZWVwIGNvbHVtbnMgcmVzcG9uc2l2ZVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgbGV0IGNvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY29sdW1uX3dyYXAnKTtcclxuICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XHJcbiAgICAgICAgY29sdW1uLnN0eWxlLndpZHRoID0gMTAwKyclJztcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBBc3NpZ25zIHNjcm9sbGJhcnMgdG8gY29sdW1ucyAodGhleSBhcmUgc2Nyb2xsYWJsZSlcclxuICovXHJcbmZ1bmN0aW9uIGFzc2lnblNjcm9sbFRvQ29sdW1ucygpIHtcclxuICAgU2ltcGxlQmFyLnJlbW92ZU9ic2VydmVyKCk7XHJcbiAgIGxldCBjb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWNvbHVtbl93cmFwJyk7XHJcbiAgIGxldCBzY3JvbGxPcHRpb25zID0ge307XHJcbiAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XHJcbiAgICAgIG5ldyBTaW1wbGVCYXIoY29sdW1uLCBzY3JvbGxPcHRpb25zKTtcclxuICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlIGNvbHVtbiBlbGVtZW50cyBzdGlja3kgKGNyb3NzIGJyb3dzZXIpXHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlQ29sdW1uRWxlbWVudHNTdGlja3koKSB7XHJcbiAgIGNvbnN0IHN0aWNreUhlYWRlcnMgPSBzdGlja3liaXRzKCcuanMtY29sdW1uX19oZWFkZXInKTtcclxuICAgY29uc3Qgc3RpY2t5Rm9vdGVycyA9IHN0aWNreWJpdHMoJy5qcy1jb2x1bW5fX3BhbmVsX3dyYXAnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgZHJhZyAmIGRyb3AgZnVuY3Rpb25hbGl0eSBmb3IgcmVjb3Jkcy5cclxuICovXHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZURyYWdEcm9wQnR3UmVjb3JkcygpIHtcclxuICAgbGV0IHJlY29yZENvbnRhaW5lcnM9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1jb2x1bW5fX2NvbnRlbnQnKTtcclxuICAgcmVjb3JkQ29udGFpbmVycy5mb3JFYWNoKChyZWNvcmRDb250YWluZXIpID0+IHtcclxuICAgICAgU29ydGFibGUuY3JlYXRlKHJlY29yZENvbnRhaW5lciwge1xyXG4gICAgICAgICBoYW5kbGU6ICcuanMtcmVjb3JkJyxcclxuICAgICAgICAgYW5pbWF0aW9uOiAzMDAsXHJcbiAgICAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuICAgICAgICAgZ2hvc3RDbGFzczogJ3JlY29yZF9kcnVnJyxcclxuICAgICAgICAgY2hvc2VuQ2xhc3M6ICdyZWNvcmRfZHJ1ZycsXHJcbiAgICAgICAgIHN3YXBUaHJlc2hvbGQ6IDAuMzVcclxuICAgICAgfSk7XHJcbiAgIH0pO1xyXG59XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_908fe100.js","/")
},{"6r38Q7":5,"buffer":3,"simplebar":6,"sortablejs":7,"stickybits":8}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
;

(function (exports) {
  'use strict';

  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var PLUS = '+'.charCodeAt(0);
  var SLASH = '/'.charCodeAt(0);
  var NUMBER = '0'.charCodeAt(0);
  var LOWER = 'a'.charCodeAt(0);
  var UPPER = 'A'.charCodeAt(0);
  var PLUS_URL_SAFE = '-'.charCodeAt(0);
  var SLASH_URL_SAFE = '_'.charCodeAt(0);

  function decode(elt) {
    var code = elt.charCodeAt(0);
    if (code === PLUS || code === PLUS_URL_SAFE) return 62; // '+'

    if (code === SLASH || code === SLASH_URL_SAFE) return 63; // '/'

    if (code < NUMBER) return -1; //no match

    if (code < NUMBER + 10) return code - NUMBER + 26 + 26;
    if (code < UPPER + 26) return code - UPPER;
    if (code < LOWER + 26) return code - LOWER + 26;
  }

  function b64ToByteArray(b64) {
    var i, j, l, tmp, placeHolders, arr;

    if (b64.length % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    } // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice


    var len = b64.length;
    placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0; // base64 is 4/3 + up to two characters of the original data

    arr = new Arr(b64.length * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars

    l = placeHolders > 0 ? b64.length - 4 : b64.length;
    var L = 0;

    function push(v) {
      arr[L++] = v;
    }

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = decode(b64.charAt(i)) << 18 | decode(b64.charAt(i + 1)) << 12 | decode(b64.charAt(i + 2)) << 6 | decode(b64.charAt(i + 3));
      push((tmp & 0xFF0000) >> 16);
      push((tmp & 0xFF00) >> 8);
      push(tmp & 0xFF);
    }

    if (placeHolders === 2) {
      tmp = decode(b64.charAt(i)) << 2 | decode(b64.charAt(i + 1)) >> 4;
      push(tmp & 0xFF);
    } else if (placeHolders === 1) {
      tmp = decode(b64.charAt(i)) << 10 | decode(b64.charAt(i + 1)) << 4 | decode(b64.charAt(i + 2)) >> 2;
      push(tmp >> 8 & 0xFF);
      push(tmp & 0xFF);
    }

    return arr;
  }

  function uint8ToBase64(uint8) {
    var i,
        extraBytes = uint8.length % 3,
        // if we have 1 byte left, pad 2 bytes
    output = "",
        temp,
        length;

    function encode(num) {
      return lookup.charAt(num);
    }

    function tripletToBase64(num) {
      return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
    } // go through the array every three bytes, we'll deal with trailing stuff later


    for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
      temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
      output += tripletToBase64(temp);
    } // pad the end with zeros, but make sure to not forget the extra bytes


    switch (extraBytes) {
      case 1:
        temp = uint8[uint8.length - 1];
        output += encode(temp >> 2);
        output += encode(temp << 4 & 0x3F);
        output += '==';
        break;

      case 2:
        temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
        output += encode(temp >> 10);
        output += encode(temp >> 4 & 0x3F);
        output += encode(temp << 2 & 0x3F);
        output += '=';
        break;
    }

    return output;
  }

  exports.toByteArray = b64ToByteArray;
  exports.fromByteArray = uint8ToBase64;
})(typeof exports === 'undefined' ? (void 0).base64js = {} : exports);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImI2NC5qcyJdLCJuYW1lcyI6WyJsb29rdXAiLCJleHBvcnRzIiwiQXJyIiwiVWludDhBcnJheSIsIkFycmF5IiwiUExVUyIsImNoYXJDb2RlQXQiLCJTTEFTSCIsIk5VTUJFUiIsIkxPV0VSIiwiVVBQRVIiLCJQTFVTX1VSTF9TQUZFIiwiU0xBU0hfVVJMX1NBRkUiLCJkZWNvZGUiLCJlbHQiLCJjb2RlIiwiYjY0VG9CeXRlQXJyYXkiLCJiNjQiLCJpIiwiaiIsImwiLCJ0bXAiLCJwbGFjZUhvbGRlcnMiLCJhcnIiLCJsZW5ndGgiLCJFcnJvciIsImxlbiIsImNoYXJBdCIsIkwiLCJwdXNoIiwidiIsInVpbnQ4VG9CYXNlNjQiLCJ1aW50OCIsImV4dHJhQnl0ZXMiLCJvdXRwdXQiLCJ0ZW1wIiwiZW5jb2RlIiwibnVtIiwidHJpcGxldFRvQmFzZTY0IiwidG9CeXRlQXJyYXkiLCJmcm9tQnl0ZUFycmF5IiwiYmFzZTY0anMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsTUFBTSxHQUFHLGtFQUFiO0FBRUE7O0FBQUUsV0FBVUMsT0FBVixFQUFtQjtBQUNwQjs7QUFFQyxNQUFJQyxHQUFHLEdBQUksT0FBT0MsVUFBUCxLQUFzQixXQUF2QixHQUNOQSxVQURNLEdBRU5DLEtBRko7QUFJRCxNQUFJQyxJQUFJLEdBQUssSUFBSUMsVUFBSixDQUFlLENBQWYsQ0FBYjtBQUNBLE1BQUlDLEtBQUssR0FBSSxJQUFJRCxVQUFKLENBQWUsQ0FBZixDQUFiO0FBQ0EsTUFBSUUsTUFBTSxHQUFHLElBQUlGLFVBQUosQ0FBZSxDQUFmLENBQWI7QUFDQSxNQUFJRyxLQUFLLEdBQUksSUFBSUgsVUFBSixDQUFlLENBQWYsQ0FBYjtBQUNBLE1BQUlJLEtBQUssR0FBSSxJQUFJSixVQUFKLENBQWUsQ0FBZixDQUFiO0FBQ0EsTUFBSUssYUFBYSxHQUFHLElBQUlMLFVBQUosQ0FBZSxDQUFmLENBQXBCO0FBQ0EsTUFBSU0sY0FBYyxHQUFHLElBQUlOLFVBQUosQ0FBZSxDQUFm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QUksQ0FBVCxHQUFjLElBQWYsQ0FBaEI7QUFDQUQsUUFBQUEsTUFBTSxJQUFJLElBQVY7QUFDQTs7QUFDRCxXQUFLLENBQUw7QUFDQ0MsUUFBQUEsSUFBSSxHQUFHLENBQUNILEtBQUssQ0FBQ0EsS0FBSyxDQUFDUixNQUFOLEdBQWUsQ0FBaEIsQ0FBTCxJQUEyQixDQUE1QixJQUFrQ1EsS0FBSyxDQUFDQSxLQUFLLENBQUNSLE1BQU4sR0FBZSxDQUFoQixDQUE5QztBQUNBVSxRQUFBQSxNQUFNLElBQUlFLE1BQU0sQ0FBQ0QsSUFBSSxJQUFJLEVBQVQsQ0FBaEI7QUFDQUQsUUFBQUEsTUFBTSxJQUFJRSxNQUFNLENBQUVELElBQUksSUFBSSxDQUFULEdBQWMsSUFBZixDQUFoQjtBQUNBRCxRQUFBQSxNQUFNLElBQUlFLE1BQU0sQ0FBRUQsSUFBSSxJQUFJLENBQVQsR0FBYyxJQUFmLENBQWhCO0FBQ0FELFFBQUFBLE1BQU0sSUFBSSxHQUFWO0FBQ0E7QUFiRjs7QUFnQkEsV0FBT0EsTUFBUDtBQUNBOztBQUVEakMsRUFBQUEsT0FBTyxDQUFDc0MsV0FBUixHQUFzQnZCLGNBQXRCO0FBQ0FmLEVBQUFBLE9BQU8sQ0FBQ3VDLGFBQVIsR0FBd0JULGFBQXhCO0FBQ0EsQ0F6SEMsRUF5SEEsT0FBTzlCLE9BQVAsS0FBbUIsV0FBbkIsR0FBa0MsU0FBS3dDLFFBQUwsR0FBZ0IsRUFBbEQsR0FBd0R4QyxPQXpIeEQsQ0FBRCIsInNvdXJjZXNDb250ZW50IjpbInZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTX1VSTF9TQUZFID0gJy0nLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIX1VSTF9TQUZFID0gJ18nLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUyB8fFxuXHRcdCAgICBjb2RlID09PSBQTFVTX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSCB8fFxuXHRcdCAgICBjb2RlID09PSBTTEFTSF9VUkxfU0FGRSlcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\base64-js\\lib\\b64.js","/..\\..\\..\\..\\node_modules\\base64-js\\lib")
},{"6r38Q7":5,"buffer":3}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var base64 = require('base64-js');

var ieee754 = require('ieee754');

exports.Buffer = Buffer;
exports.SlowBuffer = Buffer;
exports.INSPECT_MAX_BYTES = 50;
Buffer.poolSize = 8192;
/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */

Buffer._useTypedArrays = function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0);
    var arr = new Uint8Array(buf);

    arr.foo = function () {
      return 42;
    };

    return 42 === arr.foo() && typeof arr.subarray === 'function'; // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false;
  }
}();
/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */


function Buffer(subject, encoding, noZero) {
  if (!(this instanceof Buffer)) return new Buffer(subject, encoding, noZero);

  var type = _typeof(subject); // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.


  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject);

    while (subject.length % 4 !== 0) {
      subject = subject + '=';
    }
  } // Find the length


  var length;
  if (type === 'number') length = coerce(subject);else if (type === 'string') length = Buffer.byteLength(subject, encoding);else if (type === 'object') length = coerce(subject.length); // assume that object is array-like
  else throw new Error('First argument needs to be a number, array or string.');
  var buf;

  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length));
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this;
    buf.length = length;
    buf._isBuffer = true;
  }

  var i;

  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject);
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject)) buf[i] = subject.readUInt8(i);else buf[i] = subject[i];
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding);
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0;
    }
  }

  return buf;
} // STATIC METHODS
// ==============


Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer);
};

Buffer.byteLength = function (str, encoding) {
  var ret;
  str = str + '';

  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2;
      break;

    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length;
      break;

    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length;
      break;

    case 'base64':
      ret = base64ToBytes(str).length;
      break;

    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2;
      break;

    default:
      throw new Error('Unknown encoding');
  }

  return ret;
};

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' + 'list should be an Array.');

  if (list.length === 0) {
    return new Buffer(0);
  } else if (list.length === 1) {
    return list[0];
  }

  var i;

  if (typeof totalLength !== 'number') {
    totalLength = 0;

    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length;
    }
  }

  var buf = new Buffer(totalLength);
  var pos = 0;

  for (i = 0; i < list.length; i++) {
    var item = list[i];
    item.copy(buf, pos);
    pos += item.length;
  }

  return buf;
}; // BUFFER INSTANCE METHODS
// =======================


function _hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  assert(strLen % 2 === 0, 'Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; i++) {
    var _byte = parseInt(string.substr(i * 2, 2), 16);

    assert(!isNaN(_byte), 'Invalid hex string');
    buf[offset + i] = _byte;
  }

  Buffer._charsWritten = i * 2;
  return i;
}

function _utf8Write(buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length);
  return charsWritten;
}

function _asciiWrite(buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length);
  return charsWritten;
}

function _binaryWrite(buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length);
}

function _base64Write(buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length);
  return charsWritten;
}

function _utf16leWrite(buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length);
  return charsWritten;
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length;
      length = undefined;
    }
  } else {
    // legacy
    var swap = encoding;
    encoding = offset;
    offset = length;
    length = swap;
  }

  offset = Number(offset) || 0;
  var remaining = this.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  }

  encoding = String(encoding || 'utf8').toLowerCase();
  var ret;

  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length);
      break;

    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length);
      break;

    case 'ascii':
      ret = _asciiWrite(this, string, offset, length);
      break;

    case 'binary':
      ret = _binaryWrite(this, string, offset, length);
      break;

    case 'base64':
      ret = _base64Write(this, string, offset, length);
      break;

    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length);
      break;

    default:
      throw new Error('Unknown encoding');
  }

  return ret;
};

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this;
  encoding = String(encoding || 'utf8').toLowerCase();
  start = Number(start) || 0;
  end = end !== undefined ? Number(end) : end = self.length; // Fastpath empty strings

  if (end === start) return '';
  var ret;

  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end);
      break;

    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end);
      break;

    case 'ascii':
      ret = _asciiSlice(self, start, end);
      break;

    case 'binary':
      ret = _binarySlice(self, start, end);
      break;

    case 'base64':
      ret = _base64Slice(self, start, end);
      break;

    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end);
      break;

    default:
      throw new Error('Unknown encoding');
  }

  return ret;
};

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this;
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (!target_start) target_start = 0; // Copy 0 bytes; we're done

  if (end === start) return;
  if (target.length === 0 || source.length === 0) return; // Fatal error conditions

  assert(end >= start, 'sourceEnd < sourceStart');
  assert(target_start >= 0 && target_start < target.length, 'targetStart out of bounds');
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds');
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;
  if (target.length - target_start < end - start) end = target.length - target_start + start;
  var len = end - start;

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start];
    }
  } else {
    target._set(this.subarray(start, start + len), target_start);
  }
};

function _base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function _utf8Slice(buf, start, end) {
  var res = '';
  var tmp = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
      tmp = '';
    } else {
      tmp += '%' + buf[i].toString(16);
    }
  }

  return res + decodeUtf8Char(tmp);
}

function _asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function _binarySlice(buf, start, end) {
  return _asciiSlice(buf, start, end);
}

function _hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; i++) {
    out += toHex(buf[i]);
  }

  return out;
}

function _utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length;
  start = clamp(start, len, 0);
  end = clamp(end, len, len);

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end));
  } else {
    var sliceLen = end - start;
    var newBuf = new Buffer(sliceLen, undefined, true);

    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start];
    }

    return newBuf;
  }
}; // `get` will be removed in Node 0.13+


Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.');
  return this.readUInt8(offset);
}; // `set` will be removed in Node 0.13+


Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.');
  return this.writeUInt8(v, offset);
};

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset < this.length, 'Trying to read beyond buffer length');
  }

  if (offset >= this.length) return;
  return this[offset];
};

function _readUInt16(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length');
  }

  var len = buf.length;
  if (offset >= len) return;
  var val;

  if (littleEndian) {
    val = buf[offset];
    if (offset + 1 < len) val |= buf[offset + 1] << 8;
  } else {
    val = buf[offset] << 8;
    if (offset + 1 < len) val |= buf[offset + 1];
  }

  return val;
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert);
};

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert);
};

function _readUInt32(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
  }

  var len = buf.length;
  if (offset >= len) return;
  var val;

  if (littleEndian) {
    if (offset + 2 < len) val = buf[offset + 2] << 16;
    if (offset + 1 < len) val |= buf[offset + 1] << 8;
    val |= buf[offset];
    if (offset + 3 < len) val = val + (buf[offset + 3] << 24 >>> 0);
  } else {
    if (offset + 1 < len) val = buf[offset + 1] << 16;
    if (offset + 2 < len) val |= buf[offset + 2] << 8;
    if (offset + 3 < len) val |= buf[offset + 3];
    val = val + (buf[offset] << 24 >>> 0);
  }

  return val;
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert);
};

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert);
};

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset < this.length, 'Trying to read beyond buffer length');
  }

  if (offset >= this.length) return;
  var neg = this[offset] & 0x80;
  if (neg) return (0xff - this[offset] + 1) * -1;else return this[offset];
};

function _readInt16(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length');
  }

  var len = buf.length;
  if (offset >= len) return;

  var val = _readUInt16(buf, offset, littleEndian, true);

  var neg = val & 0x8000;
  if (neg) return (0xffff - val + 1) * -1;else return val;
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert);
};

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert);
};

function _readInt32(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
  }

  var len = buf.length;
  if (offset >= len) return;

  var val = _readUInt32(buf, offset, littleEndian, true);

  var neg = val & 0x80000000;
  if (neg) return (0xffffffff - val + 1) * -1;else return val;
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert);
};

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert);
};

function _readFloat(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4);
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert);
};

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert);
};

function _readDouble(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length');
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8);
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert);
};

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert);
};

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset < this.length, 'trying to write beyond buffer length');
    verifuint(value, 0xff);
  }

  if (offset >= this.length) return;
  this[offset] = value;
};

function _writeUInt16(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length');
    verifuint(value, 0xffff);
  }

  var len = buf.length;
  if (offset >= len) return;

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert);
};

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert);
};

function _writeUInt32(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length');
    verifuint(value, 0xffffffff);
  }

  var len = buf.length;
  if (offset >= len) return;

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert);
};

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert);
};

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset < this.length, 'Trying to write beyond buffer length');
    verifsint(value, 0x7f, -0x80);
  }

  if (offset >= this.length) return;
  if (value >= 0) this.writeUInt8(value, offset, noAssert);else this.writeUInt8(0xff + value + 1, offset, noAssert);
};

function _writeInt16(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length');
    verifsint(value, 0x7fff, -0x8000);
  }

  var len = buf.length;
  if (offset >= len) return;
  if (value >= 0) _writeUInt16(buf, value, offset, littleEndian, noAssert);else _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert);
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert);
};

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert);
};

function _writeInt32(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length');
    verifsint(value, 0x7fffffff, -0x80000000);
  }

  var len = buf.length;
  if (offset >= len) return;
  if (value >= 0) _writeUInt32(buf, value, offset, littleEndian, noAssert);else _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert);
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert);
};

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert);
};

function _writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length');
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  var len = buf.length;
  if (offset >= len) return;
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert);
};

function _writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 7 < buf.length, 'Trying to write beyond buffer length');
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  var len = buf.length;
  if (offset >= len) return;
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert);
}; // fill(value, start=0, end=buffer.length)


Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0;
  if (!start) start = 0;
  if (!end) end = this.length;

  if (typeof value === 'string') {
    value = value.charCodeAt(0);
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number');
  assert(end >= start, 'end < start'); // Fill 0 bytes; we're done

  if (end === start) return;
  if (this.length === 0) return;
  assert(start >= 0 && start < this.length, 'start out of bounds');
  assert(end >= 0 && end <= this.length, 'end out of bounds');

  for (var i = start; i < end; i++) {
    this[i] = value;
  }
};

Buffer.prototype.inspect = function () {
  var out = [];
  var len = this.length;

  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i]);

    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...';
      break;
    }
  }

  return '<Buffer ' + out.join(' ') + '>';
};
/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */


Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return new Buffer(this).buffer;
    } else {
      var buf = new Uint8Array(this.length);

      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i];
      }

      return buf.buffer;
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser');
  }
}; // HELPER FUNCTIONS
// ================


function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

var BP = Buffer.prototype;
/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */

Buffer._augment = function (arr) {
  arr._isBuffer = true; // save reference to original Uint8Array get/set methods before overwriting

  arr._get = arr.get;
  arr._set = arr.set; // deprecated, will be removed in node 0.13+

  arr.get = BP.get;
  arr.set = BP.set;
  arr.write = BP.write;
  arr.toString = BP.toString;
  arr.toLocaleString = BP.toString;
  arr.toJSON = BP.toJSON;
  arr.copy = BP.copy;
  arr.slice = BP.slice;
  arr.readUInt8 = BP.readUInt8;
  arr.readUInt16LE = BP.readUInt16LE;
  arr.readUInt16BE = BP.readUInt16BE;
  arr.readUInt32LE = BP.readUInt32LE;
  arr.readUInt32BE = BP.readUInt32BE;
  arr.readInt8 = BP.readInt8;
  arr.readInt16LE = BP.readInt16LE;
  arr.readInt16BE = BP.readInt16BE;
  arr.readInt32LE = BP.readInt32LE;
  arr.readInt32BE = BP.readInt32BE;
  arr.readFloatLE = BP.readFloatLE;
  arr.readFloatBE = BP.readFloatBE;
  arr.readDoubleLE = BP.readDoubleLE;
  arr.readDoubleBE = BP.readDoubleBE;
  arr.writeUInt8 = BP.writeUInt8;
  arr.writeUInt16LE = BP.writeUInt16LE;
  arr.writeUInt16BE = BP.writeUInt16BE;
  arr.writeUInt32LE = BP.writeUInt32LE;
  arr.writeUInt32BE = BP.writeUInt32BE;
  arr.writeInt8 = BP.writeInt8;
  arr.writeInt16LE = BP.writeInt16LE;
  arr.writeInt16BE = BP.writeInt16BE;
  arr.writeInt32LE = BP.writeInt32LE;
  arr.writeInt32BE = BP.writeInt32BE;
  arr.writeFloatLE = BP.writeFloatLE;
  arr.writeFloatBE = BP.writeFloatBE;
  arr.writeDoubleLE = BP.writeDoubleLE;
  arr.writeDoubleBE = BP.writeDoubleBE;
  arr.fill = BP.fill;
  arr.inspect = BP.inspect;
  arr.toArrayBuffer = BP.toArrayBuffer;
  return arr;
}; // slice(start, end)


function clamp(index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue;
  index = ~~index; // Coerce to integer.

  if (index >= len) return len;
  if (index >= 0) return index;
  index += len;
  if (index >= 0) return index;
  return 0;
}

function coerce(length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length);
  return length < 0 ? 0 : length;
}

function isArray(subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]';
  })(subject);
}

function isArrayish(subject) {
  return isArray(subject) || Buffer.isBuffer(subject) || subject && _typeof(subject) === 'object' && typeof subject.length === 'number';
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i);
    if (b <= 0x7F) byteArray.push(str.charCodeAt(i));else {
      var start = i;
      if (b >= 0xD800 && b <= 0xDFFF) i++;
      var h = encodeURIComponent(str.slice(start, i + 1)).substr(1).split('%');

      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16));
      }
    }
  }

  return byteArray;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(str);
}

function blitBuffer(src, dst, offset, length) {
  var pos;

  for (var i = 0; i < length; i++) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function decodeUtf8Char(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
    return String.fromCharCode(0xFFFD); // UTF 8 invalid char
  }
}
/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */


function verifuint(value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number');
  assert(value >= 0, 'specified a negative value for writing an unsigned value');
  assert(value <= max, 'value is larger than maximum value for type');
  assert(Math.floor(value) === value, 'value has a fractional component');
}

function verifsint(value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number');
  assert(value <= max, 'value larger than maximum allowed value');
  assert(value >= min, 'value smaller than minimum allowed value');
  assert(Math.floor(value) === value, 'value has a fractional component');
}

function verifIEEE754(value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number');
  assert(value <= max, 'value larger than maximum allowed value');
  assert(value >= min, 'value smaller than minimum allowed value');
}

function assert(test, message) {
  if (!test) throw new Error(message || 'Failed assertion');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJhc2U2NCIsInJlcXVpcmUiLCJpZWVlNzU0IiwiZXhwb3J0cyIsIkJ1ZmZlciIsIlNsb3dCdWZmZXIiLCJJTlNQRUNUX01BWF9CWVRFUyIsInBvb2xTaXplIiwiX3VzZVR5cGVkQXJyYXlzIiwiYnVmIiwiQXJyYXlCdWZmZXIiLCJhcnIiLCJVaW50OEFycmF5IiwiZm9vIiwic3ViYXJyYXkiLCJlIiwic3ViamVjdCIsImVuY29kaW5nIiwibm9aZXJvIiwidHlwZSIsInN0cmluZ3RyaW0iLCJsZW5ndGgiLCJjb2VyY2UiLCJieXRlTGVuZ3RoIiwiRXJyb3IiLCJfYXVnbWVudCIsIl9pc0J1ZmZlciIsImkiLCJfc2V0IiwiaXNBcnJheWlzaCIsImlzQnVmZmVyIiwicmVhZFVJbnQ4Iiwid3JpdGUiLCJpc0VuY29kaW5nIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJiIiwidW5kZWZpbmVkIiwic3RyIiwicmV0IiwidXRmOFRvQnl0ZXMiLCJiYXNlNjRUb0J5dGVzIiwiY29uY2F0IiwibGlzdCIsInRvdGFsTGVuZ3RoIiwiYXNzZXJ0IiwiaXNBcnJheSIsInBvcyIsIml0ZW0iLCJjb3B5IiwiX2hleFdyaXRlIiwic3RyaW5nIiwib2Zmc2V0IiwiTnVtYmVyIiwicmVtYWluaW5nIiwic3RyTGVuIiwiYnl0ZSIsInBhcnNlSW50Iiwic3Vic3RyIiwiaXNOYU4iLCJfY2hhcnNXcml0dGVuIiwiX3V0ZjhXcml0ZSIsImNoYXJzV3JpdHRlbiIsImJsaXRCdWZmZXIiLCJfYXNjaWlXcml0ZSIsImFzY2lpVG9CeXRlcyIsIl9iaW5hcnlXcml0ZSIsIl9iYXNlNjRXcml0ZSIsIl91dGYxNmxlV3JpdGUiLCJ1dGYxNmxlVG9CeXRlcyIsInByb3RvdHlwZSIsImlzRmluaXRlIiwic3dhcCIsInRvU3RyaW5nIiwic3RhcnQiLCJlbmQiLCJzZWxmIiwiX2hleFNsaWNlIiwiX3V0ZjhTbGljZSIsIl9hc2NpaVNsaWNlIiwiX2JpbmFyeVNsaWNlIiwiX2Jhc2U2NFNsaWNlIiwiX3V0ZjE2bGVTbGljZSIsInRvSlNPTiIsImRhdGEiLCJBcnJheSIsInNsaWNlIiwiY2FsbCIsIl9hcnIiLCJ0YXJnZXQiLCJ0YXJnZXRfc3RhcnQiLCJzb3VyY2UiLCJsZW4iLCJmcm9tQnl0ZUFycmF5IiwicmVzIiwidG1wIiwiTWF0aCIsIm1pbiIsImRlY29kZVV0ZjhDaGFyIiwiZnJvbUNoYXJDb2RlIiwib3V0IiwidG9IZXgiLCJieXRlcyIsImNsYW1wIiwic2xpY2VMZW4iLCJuZXdCdWYiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwic2V0IiwidiIsIndyaXRlVUludDgiLCJub0Fzc2VydCIsIl9yZWFkVUludDE2IiwibGl0dGxlRW5kaWFuIiwidmFsIiwicmVhZFVJbnQxNkxFIiwicmVhZFVJbnQxNkJFIiwiX3JlYWRVSW50MzIiLCJyZWFkVUludDMyTEUiLCJyZWFkVUludDMyQkUiLCJyZWFkSW50OCIsIm5lZyIsIl9yZWFkSW50MTYiLCJyZWFkSW50MTZMRSIsInJlYWRJbnQxNkJFIiwiX3JlYWRJbnQzMiIsInJlYWRJbnQzMkxFIiwicmVhZEludDMyQkUiLCJfcmVhZEZsb2F0IiwicmVhZCIsInJlYWRGbG9hdExFIiwicmVhZEZsb2F0QkUiLCJfcmVhZERvdWJsZSIsInJlYWREb3VibGVMRSIsInJlYWREb3VibGVCRSIsInZhbHVlIiwidmVyaWZ1aW50IiwiX3dyaXRlVUludDE2IiwiaiIsIndyaXRlVUludDE2TEUiLCJ3cml0ZVVJbnQxNkJFIiwiX3dyaXRlVUludDMyIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVUludDMyQkUiLCJ3cml0ZUludDgiLCJ2ZXJpZnNpbnQiLCJfd3JpdGVJbnQxNiIsIndyaXRlSW50MTZMRSIsIndyaXRlSW50MTZCRSIsIl93cml0ZUludDMyIiwid3JpdGVJbnQzMkxFIiwid3JpdGVJbnQzMkJFIiwiX3dyaXRlRmxvYXQiLCJ2ZXJpZklFRUU3NTQiLCJ3cml0ZUZsb2F0TEUiLCJ3cml0ZUZsb2F0QkUiLCJfd3JpdGVEb3VibGUiLCJ3cml0ZURvdWJsZUxFIiwid3JpdGVEb3VibGVCRSIsImZpbGwiLCJjaGFyQ29kZUF0IiwiaW5zcGVjdCIsImpvaW4iLCJ0b0FycmF5QnVmZmVyIiwiYnVmZmVyIiwidHJpbSIsInJlcGxhY2UiLCJCUCIsIl9nZXQiLCJ0b0xvY2FsZVN0cmluZyIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwiY2VpbCIsIk9iamVjdCIsIm4iLCJieXRlQXJyYXkiLCJwdXNoIiwiaCIsImVuY29kZVVSSUNvbXBvbmVudCIsInNwbGl0IiwiYyIsImhpIiwibG8iLCJ0b0J5dGVBcnJheSIsInNyYyIsImRzdCIsImRlY29kZVVSSUNvbXBvbmVudCIsImVyciIsIm1heCIsImZsb29yIiwidGVzdCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O0FBT0EsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUFwQjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUVBRSxPQUFPLENBQUNDLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0FELE9BQU8sQ0FBQ0UsVUFBUixHQUFxQkQsTUFBckI7QUFDQUQsT0FBTyxDQUFDRyxpQkFBUixHQUE0QixFQUE1QjtBQUNBRixNQUFNLENBQUNHLFFBQVAsR0FBa0IsSUFBbEI7QUFFQTs7Ozs7O0FBS0FILE1BQU0sQ0FBQ0ksZUFBUCxHQUEwQixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJO0FBQ0YsUUFBSUMsR0FBRyxHQUFHLElBQUlDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBVjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxJQUFJQyxVQUFKLENBQWVILEdBQWYsQ0FBVjs7QUFDQUUsSUFBQUEsR0FBRyxDQUFDRSxHQUFKLEdBQVUsWUFBWTtBQUFFLGFBQU8sRUFBUDtBQUFXLEtBQW5DOztBQUNBLFdBQU8sT0FBT0YsR0FBRyxDQUFDRSxHQUFKLEVBQVAsSUFDSCxPQUFPRixHQUFHLENBQUNHLFFBQVgsS0FBd0IsVUFENUIsQ0FKRSxDQUtxQztBQUN4QyxHQU5ELENBTUUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1YsV0FBTyxLQUFQO0FBQ0Q7QUFDRixDQWZ3QixFQUF6QjtBQWlCQTs7Ozs7Ozs7Ozs7Ozs7QUFZQSxTQUFTWCxNQUFULENBQWlCWSxPQUFqQixFQUEwQkMsUUFBMUIsRUFBb0NDLE1BQXBDLEVBQTRDO0FBQzFDLE1BQUksRUFBRSxnQkFBZ0JkLE1BQWxCLENBQUosRUFDRSxPQUFPLElBQUlBLE1BQUosQ0FBV1ksT0FBWCxFQUFvQkMsUUFBcEIsRUFBOEJDLE1BQTlCLENBQVA7O0FBRUYsTUFBSUMsSUFBSSxXQUFVSCxPQUFWLENBQVIsQ0FKMEMsQ0FNMUM7QUFDQTs7O0FBQ0EsTUFBSUMsUUFBUSxLQUFLLFFBQWIsSUFBeUJFLElBQUksS0FBSyxRQUF0QyxFQUFnRDtBQUM5Q0gsSUFBQUEsT0FBTyxHQUFHSSxVQUFVLENBQUNKLE9BQUQsQ0FBcEI7O0FBQ0EsV0FBT0EsT0FBTyxDQUFDSyxNQUFSLEdBQWlCLENBQWpCLEtBQXVCLENBQTlCLEVBQWlDO0FBQy9CTCxNQUFBQSxPQUFPLEdBQUdBLE9BQU8sR0FBRyxHQUFwQjtBQUNEO0FBQ0YsR0FieUMsQ0FlMUM7OztBQUNBLE1BQUlLLE1BQUo7QUFDQSxNQUFJRixJQUFJLEtBQUssUUFBYixFQUNFRSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ04sT0FBRCxDQUFmLENBREYsS0FFSyxJQUFJRyxJQUFJLEtBQUssUUFBYixFQUNIRSxNQUFNLEdBQUdqQixNQUFNLENBQUNtQixVQUFQLENBQWtCUCxPQUFsQixFQUEyQkMsUUFBM0IsQ0FBVCxDQURHLEtBRUEsSUFBSUUsSUFBSSxLQUFLLFFBQWIsRUFDSEUsTUFBTSxHQUFHQyxNQUFNLENBQUNOLE9BQU8sQ0FBQ0ssTUFBVCxDQUFmLENBREcsQ0FDNkI7QUFEN0IsT0FHSCxNQUFNLElBQUlHLEtBQUosQ0FBVSx1REFBVixDQUFOO0FBRUYsTUFBSWYsR0FBSjs7QUFDQSxNQUFJTCxNQUFNLENBQUNJLGVBQVgsRUFBNEI7QUFDMUI7QUFDQUMsSUFBQUEsR0FBRyxHQUFHTCxNQUFNLENBQUNxQixRQUFQLENBQWdCLElBQUliLFVBQUosQ0FBZVMsTUFBZixDQUFoQixDQUFOO0FBQ0QsR0FIRCxNQUdPO0FBQ0w7QUFDQVosSUFBQUEsR0FBRyxHQUFHLElBQU47QUFDQUEsSUFBQUEsR0FBRyxDQUFDWSxNQUFKLEdBQWFBLE1BQWI7QUFDQVosSUFBQUEsR0FBRyxDQUFDaUIsU0FBSixHQUFnQixJQUFoQjtBQUNEOztBQUVELE1BQUlDLENBQUo7O0FBQ0EsTUFBSXZCLE1BQU0sQ0FBQ0ksZUFBUCxJQUEwQixPQUFPUSxPQUFPLENBQUNPLFVBQWYsS0FBOEIsUUFBNUQsRUFBc0U7QUFDcEU7QUFDQWQsSUFBQUEsR0FBRyxDQUFDbUIsSUFBSixDQUFTWixPQUFUO0FBQ0QsR0FIRCxNQUdPLElBQUlhLFVBQVUsQ0FBQ2IsT0FBRCxDQUFkLEVBQXlCO0FBQzlCO0FBQ0EsU0FBS1csQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHTixNQUFoQixFQUF3Qk0sQ0FBQyxFQUF6QixFQUE2QjtBQUMzQixVQUFJdkIsTUFBTSxDQUFDMEIsUUFBUCxDQUFnQmQsT0FBaEIsQ0FBSixFQUNFUCxHQUFHLENBQUNrQixDQUFELENBQUgsR0FBU1gsT0FBTyxDQUFDZSxTQUFSLENBQWtCSixDQUFsQixDQUFULENBREYsS0FHRWxCLEdBQUcsQ0FBQ2tCLENBQUQsQ0FBSCxHQUFTWCxPQUFPLENBQUNXLENBQUQsQ0FBaEI7QUFDSDtBQUNGLEdBUk0sTUFRQSxJQUFJUixJQUFJLEtBQUssUUFBYixFQUF1QjtBQUM1QlYsSUFBQUEsR0FBRyxDQUFDdUIsS0FBSixDQUFVaEIsT0FBVixFQUFtQixDQUFuQixFQUFzQkMsUUFBdEI7QUFDRCxHQUZNLE1BRUEsSUFBSUUsSUFBSSxLQUFLLFFBQVQsSUFBcUIsQ0FBQ2YsTUFBTSxDQUFDSSxlQUE3QixJQUFnRCxDQUFDVSxNQUFyRCxFQUE2RDtBQUNsRSxTQUFLUyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdOLE1BQWhCLEVBQXdCTSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCbEIsTUFBQUEsR0FBRyxDQUFDa0IsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT2xCLEdBQVA7QUFDRCxDLENBRUQ7QUFDQTs7O0FBRUFMLE1BQU0sQ0FBQzZCLFVBQVAsR0FBb0IsVUFBVWhCLFFBQVYsRUFBb0I7QUFDdEMsVUFBUWlCLE1BQU0sQ0FBQ2pCLFFBQUQsQ0FBTixDQUFpQmtCLFdBQWpCLEVBQVI7QUFDRSxTQUFLLEtBQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLE9BQUw7QUFDQSxTQUFLLE9BQUw7QUFDQSxTQUFLLFFBQUw7QUFDQSxTQUFLLFFBQUw7QUFDQSxTQUFLLEtBQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLE9BQUw7QUFDQSxTQUFLLFNBQUw7QUFDQSxTQUFLLFVBQUw7QUFDRSxhQUFPLElBQVA7O0FBQ0Y7QUFDRSxhQUFPLEtBQVA7QUFkSjtBQWdCRCxDQWpCRDs7QUFtQkEvQixNQUFNLENBQUMwQixRQUFQLEdBQWtCLFVBQVVNLENBQVYsRUFBYTtBQUM3QixTQUFPLENBQUMsRUFBRUEsQ0FBQyxLQUFLLElBQU4sSUFBY0EsQ0FBQyxLQUFLQyxTQUFwQixJQUFpQ0QsQ0FBQyxDQUFDVixTQUFyQyxDQUFSO0FBQ0QsQ0FGRDs7QUFJQXRCLE1BQU0sQ0FBQ21CLFVBQVAsR0FBb0IsVUFBVWUsR0FBVixFQUFlckIsUUFBZixFQUF5QjtBQUMzQyxNQUFJc0IsR0FBSjtBQUNBRCxFQUFBQSxHQUFHLEdBQUdBLEdBQUcsR0FBRyxFQUFaOztBQUNBLFVBQVFyQixRQUFRLElBQUksTUFBcEI7QUFDRSxTQUFLLEtBQUw7QUFDRXNCLE1BQUFBLEdBQUcsR0FBR0QsR0FBRyxDQUFDakIsTUFBSixHQUFhLENBQW5CO0FBQ0E7O0FBQ0YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxPQUFMO0FBQ0VrQixNQUFBQSxHQUFHLEdBQUdDLFdBQVcsQ0FBQ0YsR0FBRCxDQUFYLENBQWlCakIsTUFBdkI7QUFDQTs7QUFDRixTQUFLLE9BQUw7QUFDQSxTQUFLLFFBQUw7QUFDQSxTQUFLLEtBQUw7QUFDRWtCLE1BQUFBLEdBQUcsR0FBR0QsR0FBRyxDQUFDakIsTUFBVjtBQUNBOztBQUNGLFNBQUssUUFBTDtBQUNFa0IsTUFBQUEsR0FBRyxHQUFHRSxhQUFhLENBQUNILEdBQUQsQ0FBYixDQUFtQmpCLE1BQXpCO0FBQ0E7O0FBQ0YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxPQUFMO0FBQ0EsU0FBSyxTQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0VrQixNQUFBQSxHQUFHLEdBQUdELEdBQUcsQ0FBQ2pCLE1BQUosR0FBYSxDQUFuQjtBQUNBOztBQUNGO0FBQ0UsWUFBTSxJQUFJRyxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQXZCSjs7QUF5QkEsU0FBT2UsR0FBUDtBQUNELENBN0JEOztBQStCQW5DLE1BQU0sQ0FBQ3NDLE1BQVAsR0FBZ0IsVUFBVUMsSUFBVixFQUFnQkMsV0FBaEIsRUFBNkI7QUFDM0NDLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSCxJQUFELENBQVIsRUFBZ0IsZ0RBQ2xCLDBCQURFLENBQU47O0FBR0EsTUFBSUEsSUFBSSxDQUFDdEIsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQixXQUFPLElBQUlqQixNQUFKLENBQVcsQ0FBWCxDQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUl1QyxJQUFJLENBQUN0QixNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQzVCLFdBQU9zQixJQUFJLENBQUMsQ0FBRCxDQUFYO0FBQ0Q7O0FBRUQsTUFBSWhCLENBQUo7O0FBQ0EsTUFBSSxPQUFPaUIsV0FBUCxLQUF1QixRQUEzQixFQUFxQztBQUNuQ0EsSUFBQUEsV0FBVyxHQUFHLENBQWQ7O0FBQ0EsU0FBS2pCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2dCLElBQUksQ0FBQ3RCLE1BQXJCLEVBQTZCTSxDQUFDLEVBQTlCLEVBQWtDO0FBQ2hDaUIsTUFBQUEsV0FBVyxJQUFJRCxJQUFJLENBQUNoQixDQUFELENBQUosQ0FBUU4sTUFBdkI7QUFDRDtBQUNGOztBQUVELE1BQUlaLEdBQUcsR0FBRyxJQUFJTCxNQUFKLENBQVd3QyxXQUFYLENBQVY7QUFDQSxNQUFJRyxHQUFHLEdBQUcsQ0FBVjs7QUFDQSxPQUFLcEIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHZ0IsSUFBSSxDQUFDdEIsTUFBckIsRUFBNkJNLENBQUMsRUFBOUIsRUFBa0M7QUFDaEMsUUFBSXFCLElBQUksR0FBR0wsSUFBSSxDQUFDaEIsQ0FBRCxDQUFmO0FBQ0FxQixJQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVXhDLEdBQVYsRUFBZXNDLEdBQWY7QUFDQUEsSUFBQUEsR0FBRyxJQUFJQyxJQUFJLENBQUMzQixNQUFaO0FBQ0Q7O0FBQ0QsU0FBT1osR0FBUDtBQUNELENBMUJELEMsQ0E0QkE7QUFDQTs7O0FBRUEsU0FBU3lDLFNBQVQsQ0FBb0J6QyxHQUFwQixFQUF5QjBDLE1BQXpCLEVBQWlDQyxNQUFqQyxFQUF5Qy9CLE1BQXpDLEVBQWlEO0FBQy9DK0IsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQUQsQ0FBTixJQUFrQixDQUEzQjtBQUNBLE1BQUlFLFNBQVMsR0FBRzdDLEdBQUcsQ0FBQ1ksTUFBSixHQUFhK0IsTUFBN0I7O0FBQ0EsTUFBSSxDQUFDL0IsTUFBTCxFQUFhO0FBQ1hBLElBQUFBLE1BQU0sR0FBR2lDLFNBQVQ7QUFDRCxHQUZELE1BRU87QUFDTGpDLElBQUFBLE1BQU0sR0FBR2dDLE1BQU0sQ0FBQ2hDLE1BQUQsQ0FBZjs7QUFDQSxRQUFJQSxNQUFNLEdBQUdpQyxTQUFiLEVBQXdCO0FBQ3RCakMsTUFBQUEsTUFBTSxHQUFHaUMsU0FBVDtBQUNEO0FBQ0YsR0FWOEMsQ0FZL0M7OztBQUNBLE1BQUlDLE1BQU0sR0FBR0osTUFBTSxDQUFDOUIsTUFBcEI7QUFDQXdCLEVBQUFBLE1BQU0sQ0FBQ1UsTUFBTSxHQUFHLENBQVQsS0FBZSxDQUFoQixFQUFtQixvQkFBbkIsQ0FBTjs7QUFFQSxNQUFJbEMsTUFBTSxHQUFHa0MsTUFBTSxHQUFHLENBQXRCLEVBQXlCO0FBQ3ZCbEMsSUFBQUEsTUFBTSxHQUFHa0MsTUFBTSxHQUFHLENBQWxCO0FBQ0Q7O0FBQ0QsT0FBSyxJQUFJNUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sTUFBcEIsRUFBNEJNLENBQUMsRUFBN0IsRUFBaUM7QUFDL0IsUUFBSTZCLEtBQUksR0FBR0MsUUFBUSxDQUFDTixNQUFNLENBQUNPLE1BQVAsQ0FBYy9CLENBQUMsR0FBRyxDQUFsQixFQUFxQixDQUFyQixDQUFELEVBQTBCLEVBQTFCLENBQW5COztBQUNBa0IsSUFBQUEsTUFBTSxDQUFDLENBQUNjLEtBQUssQ0FBQ0gsS0FBRCxDQUFQLEVBQWUsb0JBQWYsQ0FBTjtBQUNBL0MsSUFBQUEsR0FBRyxDQUFDMkMsTUFBTSxHQUFHekIsQ0FBVixDQUFILEdBQWtCNkIsS0FBbEI7QUFDRDs7QUFDRHBELEVBQUFBLE1BQU0sQ0FBQ3dELGFBQVAsR0FBdUJqQyxDQUFDLEdBQUcsQ0FBM0I7QUFDQSxTQUFPQSxDQUFQO0FBQ0Q7O0FBRUQsU0FBU2tDLFVBQVQsQ0FBcUJwRCxHQUFyQixFQUEwQjBDLE1BQTFCLEVBQWtDQyxNQUFsQyxFQUEwQy9CLE1BQTFDLEVBQWtEO0FBQ2hELE1BQUl5QyxZQUFZLEdBQUcxRCxNQUFNLENBQUN3RCxhQUFQLEdBQ2pCRyxVQUFVLENBQUN2QixXQUFXLENBQUNXLE1BQUQsQ0FBWixFQUFzQjFDLEdBQXRCLEVBQTJCMkMsTUFBM0IsRUFBbUMvQixNQUFuQyxDQURaO0FBRUEsU0FBT3lDLFlBQVA7QUFDRDs7QUFFRCxTQUFTRSxXQUFULENBQXNCdkQsR0FBdEIsRUFBMkIwQyxNQUEzQixFQUFtQ0MsTUFBbkMsRUFBMkMvQixNQUEzQyxFQUFtRDtBQUNqRCxNQUFJeUMsWUFBWSxHQUFHMUQsTUFBTSxDQUFDd0QsYUFBUCxHQUNqQkcsVUFBVSxDQUFDRSxZQUFZLENBQUNkLE1BQUQsQ0FBYixFQUF1QjFDLEdBQXZCLEVBQTRCMkMsTUFBNUIsRUFBb0MvQixNQUFwQyxDQURaO0FBRUEsU0FBT3lDLFlBQVA7QUFDRDs7QUFFRCxTQUFTSSxZQUFULENBQXVCekQsR0FBdkIsRUFBNEIwQyxNQUE1QixFQUFvQ0MsTUFBcEMsRUFBNEMvQixNQUE1QyxFQUFvRDtBQUNsRCxTQUFPMkMsV0FBVyxDQUFDdkQsR0FBRCxFQUFNMEMsTUFBTixFQUFjQyxNQUFkLEVBQXNCL0IsTUFBdEIsQ0FBbEI7QUFDRDs7QUFFRCxTQUFTOEMsWUFBVCxDQUF1QjFELEdBQXZCLEVBQTRCMEMsTUFBNUIsRUFBb0NDLE1BQXBDLEVBQTRDL0IsTUFBNUMsRUFBb0Q7QUFDbEQsTUFBSXlDLFlBQVksR0FBRzFELE1BQU0sQ0FBQ3dELGFBQVAsR0FDakJHLFVBQVUsQ0FBQ3RCLGFBQWEsQ0FBQ1UsTUFBRCxDQUFkLEVBQXdCMUMsR0FBeEIsRUFBNkIyQyxNQUE3QixFQUFxQy9CLE1BQXJDLENBRFo7QUFFQSxTQUFPeUMsWUFBUDtBQUNEOztBQUVELFNBQVNNLGFBQVQsQ0FBd0IzRCxHQUF4QixFQUE2QjBDLE1BQTdCLEVBQXFDQyxNQUFyQyxFQUE2Qy9CLE1BQTdDLEVBQXFEO0FBQ25ELE1BQUl5QyxZQUFZLEdBQUcxRCxNQUFNLENBQUN3RCxhQUFQLEdBQ2pCRyxVQUFVLENBQUNNLGNBQWMsQ0FBQ2xCLE1BQUQsQ0FBZixFQUF5QjFDLEdBQXpCLEVBQThCMkMsTUFBOUIsRUFBc0MvQixNQUF0QyxDQURaO0FBRUEsU0FBT3lDLFlBQVA7QUFDRDs7QUFFRDFELE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJ0QyxLQUFqQixHQUF5QixVQUFVbUIsTUFBVixFQUFrQkMsTUFBbEIsRUFBMEIvQixNQUExQixFQUFrQ0osUUFBbEMsRUFBNEM7QUFDbkU7QUFDQTtBQUNBLE1BQUlzRCxRQUFRLENBQUNuQixNQUFELENBQVosRUFBc0I7QUFDcEIsUUFBSSxDQUFDbUIsUUFBUSxDQUFDbEQsTUFBRCxDQUFiLEVBQXVCO0FBQ3JCSixNQUFBQSxRQUFRLEdBQUdJLE1BQVg7QUFDQUEsTUFBQUEsTUFBTSxHQUFHZ0IsU0FBVDtBQUNEO0FBQ0YsR0FMRCxNQUtPO0FBQUc7QUFDUixRQUFJbUMsSUFBSSxHQUFHdkQsUUFBWDtBQUNBQSxJQUFBQSxRQUFRLEdBQUdtQyxNQUFYO0FBQ0FBLElBQUFBLE1BQU0sR0FBRy9CLE1BQVQ7QUFDQUEsSUFBQUEsTUFBTSxHQUFHbUQsSUFBVDtBQUNEOztBQUVEcEIsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQUQsQ0FBTixJQUFrQixDQUEzQjtBQUNBLE1BQUlFLFNBQVMsR0FBRyxLQUFLakMsTUFBTCxHQUFjK0IsTUFBOUI7O0FBQ0EsTUFBSSxDQUFDL0IsTUFBTCxFQUFhO0FBQ1hBLElBQUFBLE1BQU0sR0FBR2lDLFNBQVQ7QUFDRCxHQUZELE1BRU87QUFDTGpDLElBQUFBLE1BQU0sR0FBR2dDLE1BQU0sQ0FBQ2hDLE1BQUQsQ0FBZjs7QUFDQSxRQUFJQSxNQUFNLEdBQUdpQyxTQUFiLEVBQXdCO0FBQ3RCakMsTUFBQUEsTUFBTSxHQUFHaUMsU0FBVDtBQUNEO0FBQ0Y7O0FBQ0RyQyxFQUFBQSxRQUFRLEdBQUdpQixNQUFNLENBQUNqQixRQUFRLElBQUksTUFBYixDQUFOLENBQTJCa0IsV0FBM0IsRUFBWDtBQUVBLE1BQUlJLEdBQUo7O0FBQ0EsVUFBUXRCLFFBQVI7QUFDRSxTQUFLLEtBQUw7QUFDRXNCLE1BQUFBLEdBQUcsR0FBR1csU0FBUyxDQUFDLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxNQUFmLEVBQXVCL0IsTUFBdkIsQ0FBZjtBQUNBOztBQUNGLFNBQUssTUFBTDtBQUNBLFNBQUssT0FBTDtBQUNFa0IsTUFBQUEsR0FBRyxHQUFHc0IsVUFBVSxDQUFDLElBQUQsRUFBT1YsTUFBUCxFQUFlQyxNQUFmLEVBQXVCL0IsTUFBdkIsQ0FBaEI7QUFDQTs7QUFDRixTQUFLLE9BQUw7QUFDRWtCLE1BQUFBLEdBQUcsR0FBR3lCLFdBQVcsQ0FBQyxJQUFELEVBQU9iLE1BQVAsRUFBZUMsTUFBZixFQUF1Qi9CLE1BQXZCLENBQWpCO0FBQ0E7O0FBQ0YsU0FBSyxRQUFMO0FBQ0VrQixNQUFBQSxHQUFHLEdBQUcyQixZQUFZLENBQUMsSUFBRCxFQUFPZixNQUFQLEVBQWVDLE1BQWYsRUFBdUIvQixNQUF2QixDQUFsQjtBQUNBOztBQUNGLFNBQUssUUFBTDtBQUNFa0IsTUFBQUEsR0FBRyxHQUFHNEIsWUFBWSxDQUFDLElBQUQsRUFBT2hCLE1BQVAsRUFBZUMsTUFBZixFQUF1Qi9CLE1BQXZCLENBQWxCO0FBQ0E7O0FBQ0YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxPQUFMO0FBQ0EsU0FBSyxTQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0VrQixNQUFBQSxHQUFHLEdBQUc2QixhQUFhLENBQUMsSUFBRCxFQUFPakIsTUFBUCxFQUFlQyxNQUFmLEVBQXVCL0IsTUFBdkIsQ0FBbkI7QUFDQTs7QUFDRjtBQUNFLFlBQU0sSUFBSUcsS0FBSixDQUFVLGtCQUFWLENBQU47QUF4Qko7O0FBMEJBLFNBQU9lLEdBQVA7QUFDRCxDQXZERDs7QUF5REFuQyxNQUFNLENBQUNrRSxTQUFQLENBQWlCRyxRQUFqQixHQUE0QixVQUFVeEQsUUFBVixFQUFvQnlELEtBQXBCLEVBQTJCQyxHQUEzQixFQUFnQztBQUMxRCxNQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUVBM0QsRUFBQUEsUUFBUSxHQUFHaUIsTUFBTSxDQUFDakIsUUFBUSxJQUFJLE1BQWIsQ0FBTixDQUEyQmtCLFdBQTNCLEVBQVg7QUFDQXVDLEVBQUFBLEtBQUssR0FBR3JCLE1BQU0sQ0FBQ3FCLEtBQUQsQ0FBTixJQUFpQixDQUF6QjtBQUNBQyxFQUFBQSxHQUFHLEdBQUlBLEdBQUcsS0FBS3RDLFNBQVQsR0FDRmdCLE1BQU0sQ0FBQ3NCLEdBQUQsQ0FESixHQUVGQSxHQUFHLEdBQUdDLElBQUksQ0FBQ3ZELE1BRmYsQ0FMMEQsQ0FTMUQ7O0FBQ0EsTUFBSXNELEdBQUcsS0FBS0QsS0FBWixFQUNFLE9BQU8sRUFBUDtBQUVGLE1BQUluQyxHQUFKOztBQUNBLFVBQVF0QixRQUFSO0FBQ0UsU0FBSyxLQUFMO0FBQ0VzQixNQUFBQSxHQUFHLEdBQUdzQyxTQUFTLENBQUNELElBQUQsRUFBT0YsS0FBUCxFQUFjQyxHQUFkLENBQWY7QUFDQTs7QUFDRixTQUFLLE1BQUw7QUFDQSxTQUFLLE9BQUw7QUFDRXBDLE1BQUFBLEdBQUcsR0FBR3VDLFVBQVUsQ0FBQ0YsSUFBRCxFQUFPRixLQUFQLEVBQWNDLEdBQWQsQ0FBaEI7QUFDQTs7QUFDRixTQUFLLE9BQUw7QUFDRXBDLE1BQUFBLEdBQUcsR0FBR3dDLFdBQVcsQ0FBQ0gsSUFBRCxFQUFPRixLQUFQLEVBQWNDLEdBQWQsQ0FBakI7QUFDQTs7QUFDRixTQUFLLFFBQUw7QUFDRXBDLE1BQUFBLEdBQUcsR0FBR3lDLFlBQVksQ0FBQ0osSUFBRCxFQUFPRixLQUFQLEVBQWNDLEdBQWQsQ0FBbEI7QUFDQTs7QUFDRixTQUFLLFFBQUw7QUFDRXBDLE1BQUFBLEdBQUcsR0FBRzBDLFlBQVksQ0FBQ0wsSUFBRCxFQUFPRixLQUFQLEVBQWNDLEdBQWQsQ0FBbEI7QUFDQTs7QUFDRixTQUFLLE1BQUw7QUFDQSxTQUFLLE9BQUw7QUFDQSxTQUFLLFNBQUw7QUFDQSxTQUFLLFVBQUw7QUFDRXBDLE1BQUFBLEdBQUcsR0FBRzJDLGFBQWEsQ0FBQ04sSUFBRCxFQUFPRixLQUFQLEVBQWNDLEdBQWQsQ0FBbkI7QUFDQTs7QUFDRjtBQUNFLFlBQU0sSUFBSW5ELEtBQUosQ0FBVSxrQkFBVixDQUFOO0FBeEJKOztBQTBCQSxTQUFPZSxHQUFQO0FBQ0QsQ0F6Q0Q7O0FBMkNBbkMsTUFBTSxDQUFDa0UsU0FBUCxDQUFpQmEsTUFBakIsR0FBMEIsWUFBWTtBQUNwQyxTQUFPO0FBQ0xoRSxJQUFBQSxJQUFJLEVBQUUsUUFERDtBQUVMaUUsSUFBQUEsSUFBSSxFQUFFQyxLQUFLLENBQUNmLFNBQU4sQ0FBZ0JnQixLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkIsS0FBS0MsSUFBTCxJQUFhLElBQXhDLEVBQThDLENBQTlDO0FBRkQsR0FBUDtBQUlELENBTEQsQyxDQU9BOzs7QUFDQXBGLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJyQixJQUFqQixHQUF3QixVQUFVd0MsTUFBVixFQUFrQkMsWUFBbEIsRUFBZ0NoQixLQUFoQyxFQUF1Q0MsR0FBdkMsRUFBNEM7QUFDbEUsTUFBSWdCLE1BQU0sR0FBRyxJQUFiO0FBRUEsTUFBSSxDQUFDakIsS0FBTCxFQUFZQSxLQUFLLEdBQUcsQ0FBUjtBQUNaLE1BQUksQ0FBQ0MsR0FBRCxJQUFRQSxHQUFHLEtBQUssQ0FBcEIsRUFBdUJBLEdBQUcsR0FBRyxLQUFLdEQsTUFBWDtBQUN2QixNQUFJLENBQUNxRSxZQUFMLEVBQW1CQSxZQUFZLEdBQUcsQ0FBZixDQUwrQyxDQU9sRTs7QUFDQSxNQUFJZixHQUFHLEtBQUtELEtBQVosRUFBbUI7QUFDbkIsTUFBSWUsTUFBTSxDQUFDcEUsTUFBUCxLQUFrQixDQUFsQixJQUF1QnNFLE1BQU0sQ0FBQ3RFLE1BQVAsS0FBa0IsQ0FBN0MsRUFBZ0QsT0FUa0IsQ0FXbEU7O0FBQ0F3QixFQUFBQSxNQUFNLENBQUM4QixHQUFHLElBQUlELEtBQVIsRUFBZSx5QkFBZixDQUFOO0FBQ0E3QixFQUFBQSxNQUFNLENBQUM2QyxZQUFZLElBQUksQ0FBaEIsSUFBcUJBLFlBQVksR0FBR0QsTUFBTSxDQUFDcEUsTUFBNUMsRUFDRiwyQkFERSxDQUFOO0FBRUF3QixFQUFBQSxNQUFNLENBQUM2QixLQUFLLElBQUksQ0FBVCxJQUFjQSxLQUFLLEdBQUdpQixNQUFNLENBQUN0RSxNQUE5QixFQUFzQywyQkFBdEMsQ0FBTjtBQUNBd0IsRUFBQUEsTUFBTSxDQUFDOEIsR0FBRyxJQUFJLENBQVAsSUFBWUEsR0FBRyxJQUFJZ0IsTUFBTSxDQUFDdEUsTUFBM0IsRUFBbUMseUJBQW5DLENBQU4sQ0FoQmtFLENBa0JsRTs7QUFDQSxNQUFJc0QsR0FBRyxHQUFHLEtBQUt0RCxNQUFmLEVBQ0VzRCxHQUFHLEdBQUcsS0FBS3RELE1BQVg7QUFDRixNQUFJb0UsTUFBTSxDQUFDcEUsTUFBUCxHQUFnQnFFLFlBQWhCLEdBQStCZixHQUFHLEdBQUdELEtBQXpDLEVBQ0VDLEdBQUcsR0FBR2MsTUFBTSxDQUFDcEUsTUFBUCxHQUFnQnFFLFlBQWhCLEdBQStCaEIsS0FBckM7QUFFRixNQUFJa0IsR0FBRyxHQUFHakIsR0FBRyxHQUFHRCxLQUFoQjs7QUFFQSxNQUFJa0IsR0FBRyxHQUFHLEdBQU4sSUFBYSxDQUFDeEYsTUFBTSxDQUFDSSxlQUF6QixFQUEwQztBQUN4QyxTQUFLLElBQUltQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaUUsR0FBcEIsRUFBeUJqRSxDQUFDLEVBQTFCO0FBQ0U4RCxNQUFBQSxNQUFNLENBQUM5RCxDQUFDLEdBQUcrRCxZQUFMLENBQU4sR0FBMkIsS0FBSy9ELENBQUMsR0FBRytDLEtBQVQsQ0FBM0I7QUFERjtBQUVELEdBSEQsTUFHTztBQUNMZSxJQUFBQSxNQUFNLENBQUM3RCxJQUFQLENBQVksS0FBS2QsUUFBTCxDQUFjNEQsS0FBZCxFQUFxQkEsS0FBSyxHQUFHa0IsR0FBN0IsQ0FBWixFQUErQ0YsWUFBL0M7QUFDRDtBQUNGLENBaENEOztBQWtDQSxTQUFTVCxZQUFULENBQXVCeEUsR0FBdkIsRUFBNEJpRSxLQUE1QixFQUFtQ0MsR0FBbkMsRUFBd0M7QUFDdEMsTUFBSUQsS0FBSyxLQUFLLENBQVYsSUFBZUMsR0FBRyxLQUFLbEUsR0FBRyxDQUFDWSxNQUEvQixFQUF1QztBQUNyQyxXQUFPckIsTUFBTSxDQUFDNkYsYUFBUCxDQUFxQnBGLEdBQXJCLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPVCxNQUFNLENBQUM2RixhQUFQLENBQXFCcEYsR0FBRyxDQUFDNkUsS0FBSixDQUFVWixLQUFWLEVBQWlCQyxHQUFqQixDQUFyQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTRyxVQUFULENBQXFCckUsR0FBckIsRUFBMEJpRSxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDcEMsTUFBSW1CLEdBQUcsR0FBRyxFQUFWO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQXBCLEVBQUFBLEdBQUcsR0FBR3FCLElBQUksQ0FBQ0MsR0FBTCxDQUFTeEYsR0FBRyxDQUFDWSxNQUFiLEVBQXFCc0QsR0FBckIsQ0FBTjs7QUFFQSxPQUFLLElBQUloRCxDQUFDLEdBQUcrQyxLQUFiLEVBQW9CL0MsQ0FBQyxHQUFHZ0QsR0FBeEIsRUFBNkJoRCxDQUFDLEVBQTlCLEVBQWtDO0FBQ2hDLFFBQUlsQixHQUFHLENBQUNrQixDQUFELENBQUgsSUFBVSxJQUFkLEVBQW9CO0FBQ2xCbUUsTUFBQUEsR0FBRyxJQUFJSSxjQUFjLENBQUNILEdBQUQsQ0FBZCxHQUFzQjdELE1BQU0sQ0FBQ2lFLFlBQVAsQ0FBb0IxRixHQUFHLENBQUNrQixDQUFELENBQXZCLENBQTdCO0FBQ0FvRSxNQUFBQSxHQUFHLEdBQUcsRUFBTjtBQUNELEtBSEQsTUFHTztBQUNMQSxNQUFBQSxHQUFHLElBQUksTUFBTXRGLEdBQUcsQ0FBQ2tCLENBQUQsQ0FBSCxDQUFPOEMsUUFBUCxDQUFnQixFQUFoQixDQUFiO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPcUIsR0FBRyxHQUFHSSxjQUFjLENBQUNILEdBQUQsQ0FBM0I7QUFDRDs7QUFFRCxTQUFTaEIsV0FBVCxDQUFzQnRFLEdBQXRCLEVBQTJCaUUsS0FBM0IsRUFBa0NDLEdBQWxDLEVBQXVDO0FBQ3JDLE1BQUlwQyxHQUFHLEdBQUcsRUFBVjtBQUNBb0MsRUFBQUEsR0FBRyxHQUFHcUIsSUFBSSxDQUFDQyxHQUFMLENBQVN4RixHQUFHLENBQUNZLE1BQWIsRUFBcUJzRCxHQUFyQixDQUFOOztBQUVBLE9BQUssSUFBSWhELENBQUMsR0FBRytDLEtBQWIsRUFBb0IvQyxDQUFDLEdBQUdnRCxHQUF4QixFQUE2QmhELENBQUMsRUFBOUI7QUFDRVksSUFBQUEsR0FBRyxJQUFJTCxNQUFNLENBQUNpRSxZQUFQLENBQW9CMUYsR0FBRyxDQUFDa0IsQ0FBRCxDQUF2QixDQUFQO0FBREY7O0FBRUEsU0FBT1ksR0FBUDtBQUNEOztBQUVELFNBQVN5QyxZQUFULENBQXVCdkUsR0FBdkIsRUFBNEJpRSxLQUE1QixFQUFtQ0MsR0FBbkMsRUFBd0M7QUFDdEMsU0FBT0ksV0FBVyxDQUFDdEUsR0FBRCxFQUFNaUUsS0FBTixFQUFhQyxHQUFiLENBQWxCO0FBQ0Q7O0FBRUQsU0FBU0UsU0FBVCxDQUFvQnBFLEdBQXBCLEVBQXlCaUUsS0FBekIsRUFBZ0NDLEdBQWhDLEVBQXFDO0FBQ25DLE1BQUlpQixHQUFHLEdBQUduRixHQUFHLENBQUNZLE1BQWQ7QUFFQSxNQUFJLENBQUNxRCxLQUFELElBQVVBLEtBQUssR0FBRyxDQUF0QixFQUF5QkEsS0FBSyxHQUFHLENBQVI7QUFDekIsTUFBSSxDQUFDQyxHQUFELElBQVFBLEdBQUcsR0FBRyxDQUFkLElBQW1CQSxHQUFHLEdBQUdpQixHQUE3QixFQUFrQ2pCLEdBQUcsR0FBR2lCLEdBQU47QUFFbEMsTUFBSVEsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsT0FBSyxJQUFJekUsQ0FBQyxHQUFHK0MsS0FBYixFQUFvQi9DLENBQUMsR0FBR2dELEdBQXhCLEVBQTZCaEQsQ0FBQyxFQUE5QixFQUFrQztBQUNoQ3lFLElBQUFBLEdBQUcsSUFBSUMsS0FBSyxDQUFDNUYsR0FBRyxDQUFDa0IsQ0FBRCxDQUFKLENBQVo7QUFDRDs7QUFDRCxTQUFPeUUsR0FBUDtBQUNEOztBQUVELFNBQVNsQixhQUFULENBQXdCekUsR0FBeEIsRUFBNkJpRSxLQUE3QixFQUFvQ0MsR0FBcEMsRUFBeUM7QUFDdkMsTUFBSTJCLEtBQUssR0FBRzdGLEdBQUcsQ0FBQzZFLEtBQUosQ0FBVVosS0FBVixFQUFpQkMsR0FBakIsQ0FBWjtBQUNBLE1BQUltQixHQUFHLEdBQUcsRUFBVjs7QUFDQSxPQUFLLElBQUluRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMkUsS0FBSyxDQUFDakYsTUFBMUIsRUFBa0NNLENBQUMsSUFBSSxDQUF2QyxFQUEwQztBQUN4Q21FLElBQUFBLEdBQUcsSUFBSTVELE1BQU0sQ0FBQ2lFLFlBQVAsQ0FBb0JHLEtBQUssQ0FBQzNFLENBQUQsQ0FBTCxHQUFXMkUsS0FBSyxDQUFDM0UsQ0FBQyxHQUFDLENBQUgsQ0FBTCxHQUFhLEdBQTVDLENBQVA7QUFDRDs7QUFDRCxTQUFPbUUsR0FBUDtBQUNEOztBQUVEMUYsTUFBTSxDQUFDa0UsU0FBUCxDQUFpQmdCLEtBQWpCLEdBQXlCLFVBQVVaLEtBQVYsRUFBaUJDLEdBQWpCLEVBQXNCO0FBQzdDLE1BQUlpQixHQUFHLEdBQUcsS0FBS3ZFLE1BQWY7QUFDQXFELEVBQUFBLEtBQUssR0FBRzZCLEtBQUssQ0FBQzdCLEtBQUQsRUFBUWtCLEdBQVIsRUFBYSxDQUFiLENBQWI7QUFDQWpCLEVBQUFBLEdBQUcsR0FBRzRCLEtBQUssQ0FBQzVCLEdBQUQsRUFBTWlCLEdBQU4sRUFBV0EsR0FBWCxDQUFYOztBQUVBLE1BQUl4RixNQUFNLENBQUNJLGVBQVgsRUFBNEI7QUFDMUIsV0FBT0osTUFBTSxDQUFDcUIsUUFBUCxDQUFnQixLQUFLWCxRQUFMLENBQWM0RCxLQUFkLEVBQXFCQyxHQUFyQixDQUFoQixDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSTZCLFFBQVEsR0FBRzdCLEdBQUcsR0FBR0QsS0FBckI7QUFDQSxRQUFJK0IsTUFBTSxHQUFHLElBQUlyRyxNQUFKLENBQVdvRyxRQUFYLEVBQXFCbkUsU0FBckIsRUFBZ0MsSUFBaEMsQ0FBYjs7QUFDQSxTQUFLLElBQUlWLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2RSxRQUFwQixFQUE4QjdFLENBQUMsRUFBL0IsRUFBbUM7QUFDakM4RSxNQUFBQSxNQUFNLENBQUM5RSxDQUFELENBQU4sR0FBWSxLQUFLQSxDQUFDLEdBQUcrQyxLQUFULENBQVo7QUFDRDs7QUFDRCxXQUFPK0IsTUFBUDtBQUNEO0FBQ0YsQ0FmRCxDLENBaUJBOzs7QUFDQXJHLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJvQyxHQUFqQixHQUF1QixVQUFVdEQsTUFBVixFQUFrQjtBQUN2Q3VELEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJEQUFaO0FBQ0EsU0FBTyxLQUFLN0UsU0FBTCxDQUFlcUIsTUFBZixDQUFQO0FBQ0QsQ0FIRCxDLENBS0E7OztBQUNBaEQsTUFBTSxDQUFDa0UsU0FBUCxDQUFpQnVDLEdBQWpCLEdBQXVCLFVBQVVDLENBQVYsRUFBYTFELE1BQWIsRUFBcUI7QUFDMUN1RCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyREFBWjtBQUNBLFNBQU8sS0FBS0csVUFBTCxDQUFnQkQsQ0FBaEIsRUFBbUIxRCxNQUFuQixDQUFQO0FBQ0QsQ0FIRDs7QUFLQWhELE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJ2QyxTQUFqQixHQUE2QixVQUFVcUIsTUFBVixFQUFrQjRELFFBQWxCLEVBQTRCO0FBQ3ZELE1BQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2JuRSxJQUFBQSxNQUFNLENBQUNPLE1BQU0sS0FBS2YsU0FBWCxJQUF3QmUsTUFBTSxLQUFLLElBQXBDLEVBQTBDLGdCQUExQyxDQUFOO0FBQ0FQLElBQUFBLE1BQU0sQ0FBQ08sTUFBTSxHQUFHLEtBQUsvQixNQUFmLEVBQXVCLHFDQUF2QixDQUFOO0FBQ0Q7O0FBRUQsTUFBSStCLE1BQU0sSUFBSSxLQUFLL0IsTUFBbkIsRUFDRTtBQUVGLFNBQU8sS0FBSytCLE1BQUwsQ0FBUDtBQUNELENBVkQ7O0FBWUEsU0FBUzZELFdBQVQsQ0FBc0J4RyxHQUF0QixFQUEyQjJDLE1BQTNCLEVBQW1DOEQsWUFBbkMsRUFBaURGLFFBQWpELEVBQTJEO0FBQ3pELE1BQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2JuRSxJQUFBQSxNQUFNLENBQUMsT0FBT3FFLFlBQVAsS0FBd0IsU0FBekIsRUFBb0MsMkJBQXBDLENBQU47QUFDQXJFLElBQUFBLE1BQU0sQ0FBQ08sTUFBTSxLQUFLZixTQUFYLElBQXdCZSxNQUFNLEtBQUssSUFBcEMsRUFBMEMsZ0JBQTFDLENBQU47QUFDQVAsSUFBQUEsTUFBTSxDQUFDTyxNQUFNLEdBQUcsQ0FBVCxHQUFhM0MsR0FBRyxDQUFDWSxNQUFsQixFQUEwQixxQ0FBMUIsQ0FBTjtBQUNEOztBQUVELE1BQUl1RSxHQUFHLEdBQUduRixHQUFHLENBQUNZLE1BQWQ7QUFDQSxNQUFJK0IsTUFBTSxJQUFJd0MsR0FBZCxFQUNFO0FBRUYsTUFBSXVCLEdBQUo7O0FBQ0EsTUFBSUQsWUFBSixFQUFrQjtBQUNoQkMsSUFBQUEsR0FBRyxHQUFHMUcsR0FBRyxDQUFDMkMsTUFBRCxDQUFUO0FBQ0EsUUFBSUEsTUFBTSxHQUFHLENBQVQsR0FBYXdDLEdBQWpCLEVBQ0V1QixHQUFHLElBQUkxRyxHQUFHLENBQUMyQyxNQUFNLEdBQUcsQ0FBVixDQUFILElBQW1CLENBQTFCO0FBQ0gsR0FKRCxNQUlPO0FBQ0wrRCxJQUFBQSxHQUFHLEdBQUcxRyxHQUFHLENBQUMyQyxNQUFELENBQUgsSUFBZSxDQUFyQjtBQUNBLFFBQUlBLE1BQU0sR0FBRyxDQUFULEdBQWF3QyxHQUFqQixFQUNFdUIsR0FBRyxJQUFJMUcsR0FBRyxDQUFDMkMsTUFBTSxHQUFHLENBQVYsQ0FBVjtBQUNIOztBQUNELFNBQU8rRCxHQUFQO0FBQ0Q7O0FBRUQvRyxNQUFNLENBQUNrRSxTQUFQLENBQWlCOEMsWUFBakIsR0FBZ0MsVUFBVWhFLE1BQVYsRUFBa0I0RCxRQUFsQixFQUE0QjtBQUMxRCxTQUFPQyxXQUFXLENBQUMsSUFBRCxFQUFPN0QsTUFBUCxFQUFlLElBQWYsRUFBcUI0RCxRQUFyQixDQUFsQjtBQUNELENBRkQ7O0FBSUE1RyxNQUFNLENBQUNrRSxTQUFQLENBQWlCK0MsWUFBakIsR0FBZ0MsVUFBVWpFLE1BQVYsRUFBa0I0RCxRQUFsQixFQUE0QjtBQUMxRCxTQUFPQyxXQUFXLENBQUMsSUFBRCxFQUFPN0QsTUFBUCxFQUFlLEtBQWYsRUFBc0I0RCxRQUF0QixDQUFsQjtBQUNELENBRkQ7O0FBSUEsU0FBU00sV0FBVCxDQUFzQjdHLEdBQXRCLEVBQTJCMkMsTUFBM0IsRUFBbUM4RCxZQUFuQyxFQUFpREYsUUFBakQsRUFBMkQ7QUFDekQsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYm5FLElBQUFBLE1BQU0sQ0FBQyxPQUFPcUUsWUFBUCxLQUF3QixTQUF6QixFQUFvQywyQkFBcEMsQ0FBTjtBQUNBckUsSUFBQUEsTUFBTSxDQUFDTyxNQUFNLEtBQUtmLFNBQVgsSUFBd0JlLE1BQU0sS0FBSyxJQUFwQyxFQUEwQyxnQkFBMUMsQ0FBTjtBQUNBUCxJQUFBQSxNQUFNLENBQUNPLE1BQU0sR0FBRyxDQUFULEdBQWEzQyxHQUFHLENBQUNZLE1BQWxCLEVBQTBCLHFDQUExQixDQUFOO0FBQ0Q7O0FBRUQsTUFBSXVFLEdBQUcsR0FBR25GLEdBQUcsQ0FBQ1ksTUFBZDtBQUNBLE1BQUkrQixNQUFNLElBQUl3QyxHQUFkLEVBQ0U7QUFFRixNQUFJdUIsR0FBSjs7QUFDQSxNQUFJRCxZQUFKLEVBQWtCO0FBQ2hCLFFBQUk5RCxNQUFNLEdBQUcsQ0FBVCxHQUFhd0MsR0FBakIsRUFDRXVCLEdBQUcsR0FBRzFHLEdBQUcsQ0FBQzJDLE1BQU0sR0FBRyxDQUFWLENBQUgsSUFBbUIsRUFBekI7QUFDRixRQUFJQSxNQUFNLEdBQUcsQ0FBVCxHQUFhd0MsR0FBakIsRUFDRXVCLEdBQUcsSUFBSTFHLEdBQUcsQ0FBQzJDLE1BQU0sR0FBRyxDQUFWLENBQUgsSUFBbUIsQ0FBMUI7QUFDRitELElBQUFBLEdBQUcsSUFBSTFHLEdBQUcsQ0FBQzJDLE1BQUQsQ0FBVjtBQUNBLFFBQUlBLE1BQU0sR0FBRyxDQUFULEdBQWF3QyxHQUFqQixFQUNFdUIsR0FBRyxHQUFHQSxHQUFHLElBQUkxRyxHQUFHLENBQUMyQyxNQUFNLEdBQUcsQ0FBVixDQUFILElBQW1CLEVBQW5CLEtBQTBCLENBQTlCLENBQVQ7QUFDSCxHQVJELE1BUU87QUFDTCxRQUFJQSxNQUFNLEdBQUcsQ0FBVCxHQUFhd0MsR0FBakIsRUFDRXVCLEdBQUcsR0FBRzFHLEdBQUcsQ0FBQzJDLE1BQU0sR0FBRyxDQUFWLENBQUgsSUFBbUIsRUFBekI7QUFDRixRQUFJQSxNQUFNLEdBQUcsQ0FBVCxHQUFhd0MsR0FBakIsRUFDRXVCLEdBQUcsSUFBSTFHLEdBQUcsQ0FBQzJDLE1BQU0sR0FBRyxDQUFWLENBQUgsSUFBbUIsQ0FBMUI7QUFDRixRQUFJQSxNQUFNLEdBQUcsQ0FBVCxHQUFhd0MsR0FBakIsRUFDRXVCLEdBQUcsSUFBSTFHLEdBQUcsQ0FBQzJDLE1BQU0sR0FBRyxDQUFWLENBQVY7QUFDRitELElBQUFBLEdBQUcsR0FBR0EsR0FBRyxJQUFJMUcsR0FBRyxDQUFDMkMsTUFBRCxDQUFILElBQWUsRUFBZixLQUFzQixDQUExQixDQUFUO0FBQ0Q7O0FBQ0QsU0FBTytELEdBQVA7QUFDRDs7QUFFRC9HLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJpRCxZQUFqQixHQUFnQyxVQUFVbkUsTUFBVixFQUFrQjRELFFBQWxCLEVBQTRCO0FBQzFELFNBQU9NLFdBQVcsQ0FBQyxJQUFELEVBQU9sRSxNQUFQLEVBQWUsSUFBZixFQUFxQjRELFFBQXJCLENBQWxCO0FBQ0QsQ0FGRDs7QUFJQTVHLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJrRCxZQUFqQixHQUFnQyxVQUFVcEUsTUFBVixFQUFrQjRELFFBQWxCLEVBQTRCO0FBQzFELFNBQU9NLFdBQVcsQ0FBQyxJQUFELEVBQU9sRSxNQUFQLEVBQWUsS0FBZixFQUFzQjRELFFBQXRCLENBQWxCO0FBQ0QsQ0FGRDs7QUFJQTVHLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJtRCxRQUFqQixHQUE0QixVQUFVckUsTUFBVixFQUFrQjRELFFBQWxCLEVBQTRCO0FBQ3RELE1BQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2JuRSxJQUFBQSxNQUFNLENBQUNPLE1BQU0sS0FBS2YsU0FBWCxJQUF3QmUsTUFBTSxLQUFLLElBQXBDLEVBQ0YsZ0JBREUsQ0FBTjtBQUVBUCxJQUFBQSxNQUFNLENBQUNPLE1BQU0sR0FBRyxLQUFLL0IsTUFBZixFQUF1QixxQ0FBdkIsQ0FBTjtBQUNEOztBQUVELE1BQUkrQixNQUFNLElBQUksS0FBSy9CLE1BQW5CLEVBQ0U7QUFFRixNQUFJcUcsR0FBRyxHQUFHLEtBQUt0RSxNQUFMLElBQWUsSUFBekI7QUFDQSxNQUFJc0UsR0FBSixFQUNFLE9BQU8sQ0FBQyxPQUFPLEtBQUt0RSxNQUFMLENBQVAsR0FBc0IsQ0FBdkIsSUFBNEIsQ0FBQyxDQUFwQyxDQURGLEtBR0UsT0FBTyxLQUFLQSxNQUFMLENBQVA7QUFDSCxDQWZEOztBQWlCQSxTQUFTdUUsVUFBVCxDQUFxQmxILEdBQXJCLEVBQTBCMkMsTUFBMUIsRUFBa0M4RCxZQUFsQyxFQUFnREYsUUFBaEQsRUFBMEQ7QUFDeEQsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYm5FLElBQUFBLE1BQU0sQ0FBQyxPQUFPcUUsWUFBUCxLQUF3QixTQUF6QixFQUFvQywyQkFBcEMsQ0FBTjtBQUNBckUsSUFBQUEsTUFBTSxDQUFDTyxNQUFNLEtBQUtmLFNBQVgsSUFBd0JlLE1BQU0sS0FBSyxJQUFwQyxFQUEwQyxnQkFBMUMsQ0FBTjtBQUNBUCxJQUFBQSxNQUFNLENBQUNPLE1BQU0sR0FBRyxDQUFULEdBQWEzQyxHQUFHLENBQUNZLE1BQWxCLEVBQTBCLHFDQUExQixDQUFOO0FBQ0Q7O0FBRUQsTUFBSXVFLEdBQUcsR0FBR25GLEdBQUcsQ0FBQ1ksTUFBZDtBQUNBLE1BQUkrQixNQUFNLElBQUl3QyxHQUFkLEVBQ0U7O0FBRUYsTUFBSXVCLEdBQUcsR0FBR0YsV0FBVyxDQUFDeEcsR0FBRCxFQUFNMkMsTUFBTixFQUFjOEQsWUFBZCxFQUE0QixJQUE1QixDQUFyQjs7QUFDQSxNQUFJUSxHQUFHLEdBQUdQLEdBQUcsR0FBRyxNQUFoQjtBQUNBLE1BQUlPLEdBQUosRUFDRSxPQUFPLENBQUMsU0FBU1AsR0FBVCxHQUFlLENBQWhCLElBQXFCLENBQUMsQ0FBN0IsQ0FERixLQUdFLE9BQU9BLEdBQVA7QUFDSDs7QUFFRC9HLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJzRCxXQUFqQixHQUErQixVQUFVeEUsTUFBVixFQUFrQjRELFFBQWxCLEVBQTRCO0FBQ3pELFNBQU9XLFVBQVUsQ0FBQyxJQUFELEVBQU92RSxNQUFQLEVBQWUsSUFBZixFQUFxQjRELFFBQXJCLENBQWpCO0FBQ0QsQ0FGRDs7QUFJQTVHLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJ1RCxXQUFqQixHQUErQixVQUFVekUsTUFBVixFQUFrQjRELFFBQWxCLEVBQTRCO0FBQ3pELFNBQU9XLFVBQVUsQ0FBQyxJQUFELEVBQU92RSxNQUFQLEVBQWUsS0FBZixFQUFzQjRELFFBQXRCLENBQWpCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTYyxVQUFULENBQXFCckgsR0FBckIsRUFBMEIyQyxNQUExQixFQUFrQzhELFlBQWxDLEVBQWdERixRQUFoRCxFQUEwRDtBQUN4RCxNQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNibkUsSUFBQUEsTUFBTSxDQUFDLE9BQU9xRSxZQUFQLEtBQXdCLFNBQXpCLEVBQW9DLDJCQUFwQyxDQUFOO0FBQ0FyRSxJQUFBQSxNQUFNLENBQUNPLE1BQU0sS0FBS2YsU0FBWCxJQUF3QmUsTUFBTSxLQUFLLElBQXBDLEVBQTBDLGdCQUExQyxDQUFOO0FBQ0FQLElBQUFBLE1BQU0sQ0FBQ08sTUFBTSxHQUFHLENBQVQsR0FBYTNDLEdBQUcsQ0FBQ1ksTUFBbEIsRUFBMEIscUNBQTFCLENBQU47QUFDRDs7QUFFRCxNQUFJdUUsR0FBRyxHQUFHbkYsR0FBRyxDQUFDWSxNQUFkO0FBQ0EsTUFBSStCLE1BQU0sSUFBSXdDLEdBQWQsRUFDRTs7QUFFRixNQUFJdUIsR0FBRyxHQUFHRyxXQUFXLENBQUM3RyxHQUFELEVBQU0yQyxNQUFOLEVBQWM4RCxZQUFkLEVBQTRCLElBQTVCLENBQXJCOztBQUNBLE1BQUlRLEdBQUcsR0FBR1AsR0FBRyxHQUFHLFVBQWhCO0FBQ0EsTUFBSU8sR0FBSixFQUNFLE9BQU8sQ0FBQyxhQUFhUCxHQUFiLEdBQW1CLENBQXBCLElBQXlCLENBQUMsQ0FBakMsQ0FERixLQUdFLE9BQU9BLEdBQVA7QUFDSDs7QUFFRC9HLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJ5RCxXQUFqQixHQUErQixVQUFVM0UsTUFBVixFQUFrQjRELFFBQWxCLEVBQTRCO0FBQ3pELFNBQU9jLFVBQVUsQ0FBQyxJQUFELEVBQU8xRSxNQUFQLEVBQWUsSUFBZixFQUFxQjRELFFBQXJCLENBQWpCO0FBQ0QsQ0FGRDs7QUFJQTVHLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUIwRCxXQUFqQixHQUErQixVQUFVNUUsTUFBVixFQUFrQjRELFFBQWxCLEVBQTRCO0FBQ3pELFNBQU9jLFVBQVUsQ0FBQyxJQUFELEVBQU8xRSxNQUFQLEVBQWUsS0FBZixFQUFzQjRELFFBQXRCLENBQWpCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTaUIsVUFBVCxDQUFxQnhILEdBQXJCLEVBQTBCMkMsTUFBMUIsRUFBa0M4RCxZQUFsQyxFQUFnREYsUUFBaEQsRUFBMEQ7QUFDeEQsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYm5FLElBQUFBLE1BQU0sQ0FBQyxPQUFPcUUsWUFBUCxLQUF3QixTQUF6QixFQUFvQywyQkFBcEMsQ0FBTjtBQUNBckUsSUFBQUEsTUFBTSxDQUFDTyxNQUFNLEdBQUcsQ0FBVCxHQUFhM0MsR0FBRyxDQUFDWSxNQUFsQixFQUEwQixxQ0FBMUIsQ0FBTjtBQUNEOztBQUVELFNBQU9uQixPQUFPLENBQUNnSSxJQUFSLENBQWF6SCxHQUFiLEVBQWtCMkMsTUFBbEIsRUFBMEI4RCxZQUExQixFQUF3QyxFQUF4QyxFQUE0QyxDQUE1QyxDQUFQO0FBQ0Q7O0FBRUQ5RyxNQUFNLENBQUNrRSxTQUFQLENBQWlCNkQsV0FBakIsR0FBK0IsVUFBVS9FLE1BQVYsRUFBa0I0RCxRQUFsQixFQUE0QjtBQUN6RCxTQUFPaUIsVUFBVSxDQUFDLElBQUQsRUFBTzdFLE1BQVAsRUFBZSxJQUFmLEVBQXFCNEQsUUFBckIsQ0FBakI7QUFDRCxDQUZEOztBQUlBNUcsTUFBTSxDQUFDa0UsU0FBUCxDQUFpQjhELFdBQWpCLEdBQStCLFVBQVVoRixNQUFWLEVBQWtCNEQsUUFBbEIsRUFBNEI7QUFDekQsU0FBT2lCLFVBQVUsQ0FBQyxJQUFELEVBQU83RSxNQUFQLEVBQWUsS0FBZixFQUFzQjRELFFBQXRCLENBQWpCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTcUIsV0FBVCxDQUFzQjVILEdBQXRCLEVBQTJCMkMsTUFBM0IsRUFBbUM4RCxZQUFuQyxFQUFpREYsUUFBakQsRUFBMkQ7QUFDekQsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYm5FLElBQUFBLE1BQU0sQ0FBQyxPQUFPcUUsWUFBUCxLQUF3QixTQUF6QixFQUFvQywyQkFBcEMsQ0FBTjtBQUNBckUsSUFBQUEsTUFBTSxDQUFDTyxNQUFNLEdBQUcsQ0FBVCxHQUFhM0MsR0FBRyxDQUFDWSxNQUFsQixFQUEwQixxQ0FBMUIsQ0FBTjtBQUNEOztBQUVELFNBQU9uQixPQUFPLENBQUNnSSxJQUFSLENBQWF6SCxHQUFiLEVBQWtCMkMsTUFBbEIsRUFBMEI4RCxZQUExQixFQUF3QyxFQUF4QyxFQUE0QyxDQUE1QyxDQUFQO0FBQ0Q7O0FBRUQ5RyxNQUFNLENBQUNrRSxTQUFQLENBQWlCZ0UsWUFBakIsR0FBZ0MsVUFBVWxGLE1BQVYsRUFBa0I0RCxRQUFsQixFQUE0QjtBQUMxRCxTQUFPcUIsV0FBVyxDQUFDLElBQUQsRUFBT2pGLE1BQVAsRUFBZSxJQUFmLEVBQXFCNEQsUUFBckIsQ0FBbEI7QUFDRCxDQUZEOztBQUlBNUcsTUFBTSxDQUFDa0UsU0FBUCxDQUFpQmlFLFlBQWpCLEdBQWdDLFVBQVVuRixNQUFWLEVBQWtCNEQsUUFBbEIsRUFBNEI7QUFDMUQsU0FBT3FCLFdBQVcsQ0FBQyxJQUFELEVBQU9qRixNQUFQLEVBQWUsS0FBZixFQUFzQjRELFFBQXRCLENBQWxCO0FBQ0QsQ0FGRDs7QUFJQTVHLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJ5QyxVQUFqQixHQUE4QixVQUFVeUIsS0FBVixFQUFpQnBGLE1BQWpCLEVBQXlCNEQsUUFBekIsRUFBbUM7QUFDL0QsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYm5FLElBQUFBLE1BQU0sQ0FBQzJGLEtBQUssS0FBS25HLFNBQVYsSUFBdUJtRyxLQUFLLEtBQUssSUFBbEMsRUFBd0MsZUFBeEMsQ0FBTjtBQUNBM0YsSUFBQUEsTUFBTSxDQUFDTyxNQUFNLEtBQUtmLFNBQVgsSUFBd0JlLE1BQU0sS0FBSyxJQUFwQyxFQUEwQyxnQkFBMUMsQ0FBTjtBQUNBUCxJQUFBQSxNQUFNLENBQUNPLE1BQU0sR0FBRyxLQUFLL0IsTUFBZixFQUF1QixzQ0FBdkIsQ0FBTjtBQUNBb0gsSUFBQUEsU0FBUyxDQUFDRCxLQUFELEVBQVEsSUFBUixDQUFUO0FBQ0Q7O0FBRUQsTUFBSXBGLE1BQU0sSUFBSSxLQUFLL0IsTUFBbkIsRUFBMkI7QUFFM0IsT0FBSytCLE1BQUwsSUFBZW9GLEtBQWY7QUFDRCxDQVhEOztBQWFBLFNBQVNFLFlBQVQsQ0FBdUJqSSxHQUF2QixFQUE0QitILEtBQTVCLEVBQW1DcEYsTUFBbkMsRUFBMkM4RCxZQUEzQyxFQUF5REYsUUFBekQsRUFBbUU7QUFDakUsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYm5FLElBQUFBLE1BQU0sQ0FBQzJGLEtBQUssS0FBS25HLFNBQVYsSUFBdUJtRyxLQUFLLEtBQUssSUFBbEMsRUFBd0MsZUFBeEMsQ0FBTjtBQUNBM0YsSUFBQUEsTUFBTSxDQUFDLE9BQU9xRSxZQUFQLEtBQXdCLFNBQXpCLEVBQW9DLDJCQUFwQyxDQUFOO0FBQ0FyRSxJQUFBQSxNQUFNLENBQUNPLE1BQU0sS0FBS2YsU0FBWCxJQUF3QmUsTUFBTSxLQUFLLElBQXBDLEVBQTBDLGdCQUExQyxDQUFOO0FBQ0FQLElBQUFBLE1BQU0sQ0FBQ08sTUFBTSxHQUFHLENBQVQsR0FBYTNDLEdBQUcsQ0FBQ1ksTUFBbEIsRUFBMEIsc0NBQTFCLENBQU47QUFDQW9ILElBQUFBLFNBQVMsQ0FBQ0QsS0FBRCxFQUFRLE1BQVIsQ0FBVDtBQUNEOztBQUVELE1BQUk1QyxHQUFHLEdBQUduRixHQUFHLENBQUNZLE1BQWQ7QUFDQSxNQUFJK0IsTUFBTSxJQUFJd0MsR0FBZCxFQUNFOztBQUVGLE9BQUssSUFBSWpFLENBQUMsR0FBRyxDQUFSLEVBQVdnSCxDQUFDLEdBQUczQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0wsR0FBRyxHQUFHeEMsTUFBZixFQUF1QixDQUF2QixDQUFwQixFQUErQ3pCLENBQUMsR0FBR2dILENBQW5ELEVBQXNEaEgsQ0FBQyxFQUF2RCxFQUEyRDtBQUN6RGxCLElBQUFBLEdBQUcsQ0FBQzJDLE1BQU0sR0FBR3pCLENBQVYsQ0FBSCxHQUNJLENBQUM2RyxLQUFLLEdBQUksUUFBUyxLQUFLdEIsWUFBWSxHQUFHdkYsQ0FBSCxHQUFPLElBQUlBLENBQTVCLENBQW5CLE1BQ0ksQ0FBQ3VGLFlBQVksR0FBR3ZGLENBQUgsR0FBTyxJQUFJQSxDQUF4QixJQUE2QixDQUZyQztBQUdEO0FBQ0Y7O0FBRUR2QixNQUFNLENBQUNrRSxTQUFQLENBQWlCc0UsYUFBakIsR0FBaUMsVUFBVUosS0FBVixFQUFpQnBGLE1BQWpCLEVBQXlCNEQsUUFBekIsRUFBbUM7QUFDbEUwQixFQUFBQSxZQUFZLENBQUMsSUFBRCxFQUFPRixLQUFQLEVBQWNwRixNQUFkLEVBQXNCLElBQXRCLEVBQTRCNEQsUUFBNUIsQ0FBWjtBQUNELENBRkQ7O0FBSUE1RyxNQUFNLENBQUNrRSxTQUFQLENBQWlCdUUsYUFBakIsR0FBaUMsVUFBVUwsS0FBVixFQUFpQnBGLE1BQWpCLEVBQXlCNEQsUUFBekIsRUFBbUM7QUFDbEUwQixFQUFBQSxZQUFZLENBQUMsSUFBRCxFQUFPRixLQUFQLEVBQWNwRixNQUFkLEVBQXNCLEtBQXRCLEVBQTZCNEQsUUFBN0IsQ0FBWjtBQUNELENBRkQ7O0FBSUEsU0FBUzhCLFlBQVQsQ0FBdUJySSxHQUF2QixFQUE0QitILEtBQTVCLEVBQW1DcEYsTUFBbkMsRUFBMkM4RCxZQUEzQyxFQUF5REYsUUFBekQsRUFBbUU7QUFDakUsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYm5FLElBQUFBLE1BQU0sQ0FBQzJGLEtBQUssS0FBS25HLFNBQVYsSUFBdUJtRyxLQUFLLEtBQUssSUFBbEMsRUFBd0MsZUFBeEMsQ0FBTjtBQUNBM0YsSUFBQUEsTUFBTSxDQUFDLE9BQU9xRSxZQUFQLEtBQXdCLFNBQXpCLEVBQW9DLDJCQUFwQyxDQUFOO0FBQ0FyRSxJQUFBQSxNQUFNLENBQUNPLE1BQU0sS0FBS2YsU0FBWCxJQUF3QmUsTUFBTSxLQUFLLElBQXBDLEVBQTBDLGdCQUExQyxDQUFOO0FBQ0FQLElBQUFBLE1BQU0sQ0FBQ08sTUFBTSxHQUFHLENBQVQsR0FBYTNDLEdBQUcsQ0FBQ1ksTUFBbEIsRUFBMEIsc0NBQTFCLENBQU47QUFDQW9ILElBQUFBLFNBQVMsQ0FBQ0QsS0FBRCxFQUFRLFVBQVIsQ0FBVDtBQUNEOztBQUVELE1BQUk1QyxHQUFHLEdBQUduRixHQUFHLENBQUNZLE1BQWQ7QUFDQSxNQUFJK0IsTUFBTSxJQUFJd0MsR0FBZCxFQUNFOztBQUVGLE9BQUssSUFBSWpFLENBQUMsR0FBRyxDQUFSLEVBQVdnSCxDQUFDLEdBQUczQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0wsR0FBRyxHQUFHeEMsTUFBZixFQUF1QixDQUF2QixDQUFwQixFQUErQ3pCLENBQUMsR0FBR2dILENBQW5ELEVBQXNEaEgsQ0FBQyxFQUF2RCxFQUEyRDtBQUN6RGxCLElBQUFBLEdBQUcsQ0FBQzJDLE1BQU0sR0FBR3pCLENBQVYsQ0FBSCxHQUNLNkcsS0FBSyxLQUFLLENBQUN0QixZQUFZLEdBQUd2RixDQUFILEdBQU8sSUFBSUEsQ0FBeEIsSUFBNkIsQ0FBeEMsR0FBNkMsSUFEakQ7QUFFRDtBQUNGOztBQUVEdkIsTUFBTSxDQUFDa0UsU0FBUCxDQUFpQnlFLGFBQWpCLEdBQWlDLFVBQVVQLEtBQVYsRUFBaUJwRixNQUFqQixFQUF5QjRELFFBQXpCLEVBQW1DO0FBQ2xFOEIsRUFBQUEsWUFBWSxDQUFDLElBQUQsRUFBT04sS0FBUCxFQUFjcEYsTUFBZCxFQUFzQixJQUF0QixFQUE0QjRELFFBQTVCLENBQVo7QUFDRCxDQUZEOztBQUlBNUcsTUFBTSxDQUFDa0UsU0FBUCxDQUFpQjBFLGFBQWpCLEdBQWlDLFVBQVVSLEtBQVYsRUFBaUJwRixNQUFqQixFQUF5QjRELFFBQXpCLEVBQW1DO0FBQ2xFOEIsRUFBQUEsWUFBWSxDQUFDLElBQUQsRUFBT04sS0FBUCxFQUFjcEYsTUFBZCxFQUFzQixLQUF0QixFQUE2QjRELFFBQTdCLENBQVo7QUFDRCxDQUZEOztBQUlBNUcsTUFBTSxDQUFDa0UsU0FBUCxDQUFpQjJFLFNBQWpCLEdBQTZCLFVBQVVULEtBQVYsRUFBaUJwRixNQUFqQixFQUF5QjRELFFBQXpCLEVBQW1DO0FBQzlELE1BQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2JuRSxJQUFBQSxNQUFNLENBQUMyRixLQUFLLEtBQUtuRyxTQUFWLElBQXVCbUcsS0FBSyxLQUFLLElBQWxDLEVBQXdDLGVBQXhDLENBQU47QUFDQTNGLElBQUFBLE1BQU0sQ0FBQ08sTUFBTSxLQUFLZixTQUFYLElBQXdCZSxNQUFNLEtBQUssSUFBcEMsRUFBMEMsZ0JBQTFDLENBQU47QUFDQVAsSUFBQUEsTUFBTSxDQUFDTyxNQUFNLEdBQUcsS0FBSy9CLE1BQWYsRUFBdUIsc0NBQXZCLENBQU47QUFDQTZILElBQUFBLFNBQVMsQ0FBQ1YsS0FBRCxFQUFRLElBQVIsRUFBYyxDQUFDLElBQWYsQ0FBVDtBQUNEOztBQUVELE1BQUlwRixNQUFNLElBQUksS0FBSy9CLE1BQW5CLEVBQ0U7QUFFRixNQUFJbUgsS0FBSyxJQUFJLENBQWIsRUFDRSxLQUFLekIsVUFBTCxDQUFnQnlCLEtBQWhCLEVBQXVCcEYsTUFBdkIsRUFBK0I0RCxRQUEvQixFQURGLEtBR0UsS0FBS0QsVUFBTCxDQUFnQixPQUFPeUIsS0FBUCxHQUFlLENBQS9CLEVBQWtDcEYsTUFBbEMsRUFBMEM0RCxRQUExQztBQUNILENBZkQ7O0FBaUJBLFNBQVNtQyxXQUFULENBQXNCMUksR0FBdEIsRUFBMkIrSCxLQUEzQixFQUFrQ3BGLE1BQWxDLEVBQTBDOEQsWUFBMUMsRUFBd0RGLFFBQXhELEVBQWtFO0FBQ2hFLE1BQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2JuRSxJQUFBQSxNQUFNLENBQUMyRixLQUFLLEtBQUtuRyxTQUFWLElBQXVCbUcsS0FBSyxLQUFLLElBQWxDLEVBQXdDLGVBQXhDLENBQU47QUFDQTNGLElBQUFBLE1BQU0sQ0FBQyxPQUFPcUUsWUFBUCxLQUF3QixTQUF6QixFQUFvQywyQkFBcEMsQ0FBTjtBQUNBckUsSUFBQUEsTUFBTSxDQUFDTyxNQUFNLEtBQUtmLFNBQVgsSUFBd0JlLE1BQU0sS0FBSyxJQUFwQyxFQUEwQyxnQkFBMUMsQ0FBTjtBQUNBUCxJQUFBQSxNQUFNLENBQUNPLE1BQU0sR0FBRyxDQUFULEdBQWEzQyxHQUFHLENBQUNZLE1BQWxCLEVBQTBCLHNDQUExQixDQUFOO0FBQ0E2SCxJQUFBQSxTQUFTLENBQUNWLEtBQUQsRUFBUSxNQUFSLEVBQWdCLENBQUMsTUFBakIsQ0FBVDtBQUNEOztBQUVELE1BQUk1QyxHQUFHLEdBQUduRixHQUFHLENBQUNZLE1BQWQ7QUFDQSxNQUFJK0IsTUFBTSxJQUFJd0MsR0FBZCxFQUNFO0FBRUYsTUFBSTRDLEtBQUssSUFBSSxDQUFiLEVBQ0VFLFlBQVksQ0FBQ2pJLEdBQUQsRUFBTStILEtBQU4sRUFBYXBGLE1BQWIsRUFBcUI4RCxZQUFyQixFQUFtQ0YsUUFBbkMsQ0FBWixDQURGLEtBR0UwQixZQUFZLENBQUNqSSxHQUFELEVBQU0sU0FBUytILEtBQVQsR0FBaUIsQ0FBdkIsRUFBMEJwRixNQUExQixFQUFrQzhELFlBQWxDLEVBQWdERixRQUFoRCxDQUFaO0FBQ0g7O0FBRUQ1RyxNQUFNLENBQUNrRSxTQUFQLENBQWlCOEUsWUFBakIsR0FBZ0MsVUFBVVosS0FBVixFQUFpQnBGLE1BQWpCLEVBQXlCNEQsUUFBekIsRUFBbUM7QUFDakVtQyxFQUFBQSxXQUFXLENBQUMsSUFBRCxFQUFPWCxLQUFQLEVBQWNwRixNQUFkLEVBQXNCLElBQXRCLEVBQTRCNEQsUUFBNUIsQ0FBWDtBQUNELENBRkQ7O0FBSUE1RyxNQUFNLENBQUNrRSxTQUFQLENBQWlCK0UsWUFBakIsR0FBZ0MsVUFBVWIsS0FBVixFQUFpQnBGLE1BQWpCLEVBQXlCNEQsUUFBekIsRUFBbUM7QUFDakVtQyxFQUFBQSxXQUFXLENBQUMsSUFBRCxFQUFPWCxLQUFQLEVBQWNwRixNQUFkLEVBQXNCLEtBQXRCLEVBQTZCNEQsUUFBN0IsQ0FBWDtBQUNELENBRkQ7O0FBSUEsU0FBU3NDLFdBQVQsQ0FBc0I3SSxHQUF0QixFQUEyQitILEtBQTNCLEVBQWtDcEYsTUFBbEMsRUFBMEM4RCxZQUExQyxFQUF3REYsUUFBeEQsRUFBa0U7QUFDaEUsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYm5FLElBQUFBLE1BQU0sQ0FBQzJGLEtBQUssS0FBS25HLFNBQVYsSUFBdUJtRyxLQUFLLEtBQUssSUFBbEMsRUFBd0MsZUFBeEMsQ0FBTjtBQUNBM0YsSUFBQUEsTUFBTSxDQUFDLE9BQU9xRSxZQUFQLEtBQXdCLFNBQXpCLEVBQW9DLDJCQUFwQyxDQUFOO0FBQ0FyRSxJQUFBQSxNQUFNLENBQUNPLE1BQU0sS0FBS2YsU0FBWCxJQUF3QmUsTUFBTSxLQUFLLElBQXBDLEVBQTBDLGdCQUExQyxDQUFOO0FBQ0FQLElBQUFBLE1BQU0sQ0FBQ08sTUFBTSxHQUFHLENBQVQsR0FBYTNDLEdBQUcsQ0FBQ1ksTUFBbEIsRUFBMEIsc0NBQTFCLENBQU47QUFDQTZILElBQUFBLFNBQVMsQ0FBQ1YsS0FBRCxFQUFRLFVBQVIsRUFBb0IsQ0FBQyxVQUFyQixDQUFUO0FBQ0Q7O0FBRUQsTUFBSTVDLEdBQUcsR0FBR25GLEdBQUcsQ0FBQ1ksTUFBZDtBQUNBLE1BQUkrQixNQUFNLElBQUl3QyxHQUFkLEVBQ0U7QUFFRixNQUFJNEMsS0FBSyxJQUFJLENBQWIsRUFDRU0sWUFBWSxDQUFDckksR0FBRCxFQUFNK0gsS0FBTixFQUFhcEYsTUFBYixFQUFxQjhELFlBQXJCLEVBQW1DRixRQUFuQyxDQUFaLENBREYsS0FHRThCLFlBQVksQ0FBQ3JJLEdBQUQsRUFBTSxhQUFhK0gsS0FBYixHQUFxQixDQUEzQixFQUE4QnBGLE1BQTlCLEVBQXNDOEQsWUFBdEMsRUFBb0RGLFFBQXBELENBQVo7QUFDSDs7QUFFRDVHLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJpRixZQUFqQixHQUFnQyxVQUFVZixLQUFWLEVBQWlCcEYsTUFBakIsRUFBeUI0RCxRQUF6QixFQUFtQztBQUNqRXNDLEVBQUFBLFdBQVcsQ0FBQyxJQUFELEVBQU9kLEtBQVAsRUFBY3BGLE1BQWQsRUFBc0IsSUFBdEIsRUFBNEI0RCxRQUE1QixDQUFYO0FBQ0QsQ0FGRDs7QUFJQTVHLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJrRixZQUFqQixHQUFnQyxVQUFVaEIsS0FBVixFQUFpQnBGLE1BQWpCLEVBQXlCNEQsUUFBekIsRUFBbUM7QUFDakVzQyxFQUFBQSxXQUFXLENBQUMsSUFBRCxFQUFPZCxLQUFQLEVBQWNwRixNQUFkLEVBQXNCLEtBQXRCLEVBQTZCNEQsUUFBN0IsQ0FBWDtBQUNELENBRkQ7O0FBSUEsU0FBU3lDLFdBQVQsQ0FBc0JoSixHQUF0QixFQUEyQitILEtBQTNCLEVBQWtDcEYsTUFBbEMsRUFBMEM4RCxZQUExQyxFQUF3REYsUUFBeEQsRUFBa0U7QUFDaEUsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYm5FLElBQUFBLE1BQU0sQ0FBQzJGLEtBQUssS0FBS25HLFNBQVYsSUFBdUJtRyxLQUFLLEtBQUssSUFBbEMsRUFBd0MsZUFBeEMsQ0FBTjtBQUNBM0YsSUFBQUEsTUFBTSxDQUFDLE9BQU9xRSxZQUFQLEtBQXdCLFNBQXpCLEVBQW9DLDJCQUFwQyxDQUFOO0FBQ0FyRSxJQUFBQSxNQUFNLENBQUNPLE1BQU0sS0FBS2YsU0FBWCxJQUF3QmUsTUFBTSxLQUFLLElBQXBDLEVBQTBDLGdCQUExQyxDQUFOO0FBQ0FQLElBQUFBLE1BQU0sQ0FBQ08sTUFBTSxHQUFHLENBQVQsR0FBYTNDLEdBQUcsQ0FBQ1ksTUFBbEIsRUFBMEIsc0NBQTFCLENBQU47QUFDQXFJLElBQUFBLFlBQVksQ0FBQ2xCLEtBQUQsRUFBUSxzQkFBUixFQUFnQyxDQUFDLHNCQUFqQyxDQUFaO0FBQ0Q7O0FBRUQsTUFBSTVDLEdBQUcsR0FBR25GLEdBQUcsQ0FBQ1ksTUFBZDtBQUNBLE1BQUkrQixNQUFNLElBQUl3QyxHQUFkLEVBQ0U7QUFFRjFGLEVBQUFBLE9BQU8sQ0FBQzhCLEtBQVIsQ0FBY3ZCLEdBQWQsRUFBbUIrSCxLQUFuQixFQUEwQnBGLE1BQTFCLEVBQWtDOEQsWUFBbEMsRUFBZ0QsRUFBaEQsRUFBb0QsQ0FBcEQ7QUFDRDs7QUFFRDlHLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJxRixZQUFqQixHQUFnQyxVQUFVbkIsS0FBVixFQUFpQnBGLE1BQWpCLEVBQXlCNEQsUUFBekIsRUFBbUM7QUFDakV5QyxFQUFBQSxXQUFXLENBQUMsSUFBRCxFQUFPakIsS0FBUCxFQUFjcEYsTUFBZCxFQUFzQixJQUF0QixFQUE0QjRELFFBQTVCLENBQVg7QUFDRCxDQUZEOztBQUlBNUcsTUFBTSxDQUFDa0UsU0FBUCxDQUFpQnNGLFlBQWpCLEdBQWdDLFVBQVVwQixLQUFWLEVBQWlCcEYsTUFBakIsRUFBeUI0RCxRQUF6QixFQUFtQztBQUNqRXlDLEVBQUFBLFdBQVcsQ0FBQyxJQUFELEVBQU9qQixLQUFQLEVBQWNwRixNQUFkLEVBQXNCLEtBQXRCLEVBQTZCNEQsUUFBN0IsQ0FBWDtBQUNELENBRkQ7O0FBSUEsU0FBUzZDLFlBQVQsQ0FBdUJwSixHQUF2QixFQUE0QitILEtBQTVCLEVBQW1DcEYsTUFBbkMsRUFBMkM4RCxZQUEzQyxFQUF5REYsUUFBekQsRUFBbUU7QUFDakUsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYm5FLElBQUFBLE1BQU0sQ0FBQzJGLEtBQUssS0FBS25HLFNBQVYsSUFBdUJtRyxLQUFLLEtBQUssSUFBbEMsRUFBd0MsZUFBeEMsQ0FBTjtBQUNBM0YsSUFBQUEsTUFBTSxDQUFDLE9BQU9xRSxZQUFQLEtBQXdCLFNBQXpCLEVBQW9DLDJCQUFwQyxDQUFOO0FBQ0FyRSxJQUFBQSxNQUFNLENBQUNPLE1BQU0sS0FBS2YsU0FBWCxJQUF3QmUsTUFBTSxLQUFLLElBQXBDLEVBQTBDLGdCQUExQyxDQUFOO0FBQ0FQLElBQUFBLE1BQU0sQ0FBQ08sTUFBTSxHQUFHLENBQVQsR0FBYTNDLEdBQUcsQ0FBQ1ksTUFBbEIsRUFDRixzQ0FERSxDQUFOO0FBRUFxSSxJQUFBQSxZQUFZLENBQUNsQixLQUFELEVBQVEsdUJBQVIsRUFBaUMsQ0FBQyx1QkFBbEMsQ0FBWjtBQUNEOztBQUVELE1BQUk1QyxHQUFHLEdBQUduRixHQUFHLENBQUNZLE1BQWQ7QUFDQSxNQUFJK0IsTUFBTSxJQUFJd0MsR0FBZCxFQUNFO0FBRUYxRixFQUFBQSxPQUFPLENBQUM4QixLQUFSLENBQWN2QixHQUFkLEVBQW1CK0gsS0FBbkIsRUFBMEJwRixNQUExQixFQUFrQzhELFlBQWxDLEVBQWdELEVBQWhELEVBQW9ELENBQXBEO0FBQ0Q7O0FBRUQ5RyxNQUFNLENBQUNrRSxTQUFQLENBQWlCd0YsYUFBakIsR0FBaUMsVUFBVXRCLEtBQVYsRUFBaUJwRixNQUFqQixFQUF5QjRELFFBQXpCLEVBQW1DO0FBQ2xFNkMsRUFBQUEsWUFBWSxDQUFDLElBQUQsRUFBT3JCLEtBQVAsRUFBY3BGLE1BQWQsRUFBc0IsSUFBdEIsRUFBNEI0RCxRQUE1QixDQUFaO0FBQ0QsQ0FGRDs7QUFJQTVHLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUJ5RixhQUFqQixHQUFpQyxVQUFVdkIsS0FBVixFQUFpQnBGLE1BQWpCLEVBQXlCNEQsUUFBekIsRUFBbUM7QUFDbEU2QyxFQUFBQSxZQUFZLENBQUMsSUFBRCxFQUFPckIsS0FBUCxFQUFjcEYsTUFBZCxFQUFzQixLQUF0QixFQUE2QjRELFFBQTdCLENBQVo7QUFDRCxDQUZELEMsQ0FJQTs7O0FBQ0E1RyxNQUFNLENBQUNrRSxTQUFQLENBQWlCMEYsSUFBakIsR0FBd0IsVUFBVXhCLEtBQVYsRUFBaUI5RCxLQUFqQixFQUF3QkMsR0FBeEIsRUFBNkI7QUFDbkQsTUFBSSxDQUFDNkQsS0FBTCxFQUFZQSxLQUFLLEdBQUcsQ0FBUjtBQUNaLE1BQUksQ0FBQzlELEtBQUwsRUFBWUEsS0FBSyxHQUFHLENBQVI7QUFDWixNQUFJLENBQUNDLEdBQUwsRUFBVUEsR0FBRyxHQUFHLEtBQUt0RCxNQUFYOztBQUVWLE1BQUksT0FBT21ILEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0JBLElBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDeUIsVUFBTixDQUFpQixDQUFqQixDQUFSO0FBQ0Q7O0FBRURwSCxFQUFBQSxNQUFNLENBQUMsT0FBTzJGLEtBQVAsS0FBaUIsUUFBakIsSUFBNkIsQ0FBQzdFLEtBQUssQ0FBQzZFLEtBQUQsQ0FBcEMsRUFBNkMsdUJBQTdDLENBQU47QUFDQTNGLEVBQUFBLE1BQU0sQ0FBQzhCLEdBQUcsSUFBSUQsS0FBUixFQUFlLGFBQWYsQ0FBTixDQVZtRCxDQVluRDs7QUFDQSxNQUFJQyxHQUFHLEtBQUtELEtBQVosRUFBbUI7QUFDbkIsTUFBSSxLQUFLckQsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUV2QndCLEVBQUFBLE1BQU0sQ0FBQzZCLEtBQUssSUFBSSxDQUFULElBQWNBLEtBQUssR0FBRyxLQUFLckQsTUFBNUIsRUFBb0MscUJBQXBDLENBQU47QUFDQXdCLEVBQUFBLE1BQU0sQ0FBQzhCLEdBQUcsSUFBSSxDQUFQLElBQVlBLEdBQUcsSUFBSSxLQUFLdEQsTUFBekIsRUFBaUMsbUJBQWpDLENBQU47O0FBRUEsT0FBSyxJQUFJTSxDQUFDLEdBQUcrQyxLQUFiLEVBQW9CL0MsQ0FBQyxHQUFHZ0QsR0FBeEIsRUFBNkJoRCxDQUFDLEVBQTlCLEVBQWtDO0FBQ2hDLFNBQUtBLENBQUwsSUFBVTZHLEtBQVY7QUFDRDtBQUNGLENBdEJEOztBQXdCQXBJLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUI0RixPQUFqQixHQUEyQixZQUFZO0FBQ3JDLE1BQUk5RCxHQUFHLEdBQUcsRUFBVjtBQUNBLE1BQUlSLEdBQUcsR0FBRyxLQUFLdkUsTUFBZjs7QUFDQSxPQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdpRSxHQUFwQixFQUF5QmpFLENBQUMsRUFBMUIsRUFBOEI7QUFDNUJ5RSxJQUFBQSxHQUFHLENBQUN6RSxDQUFELENBQUgsR0FBUzBFLEtBQUssQ0FBQyxLQUFLMUUsQ0FBTCxDQUFELENBQWQ7O0FBQ0EsUUFBSUEsQ0FBQyxLQUFLeEIsT0FBTyxDQUFDRyxpQkFBbEIsRUFBcUM7QUFDbkM4RixNQUFBQSxHQUFHLENBQUN6RSxDQUFDLEdBQUcsQ0FBTCxDQUFILEdBQWEsS0FBYjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLGFBQWF5RSxHQUFHLENBQUMrRCxJQUFKLENBQVMsR0FBVCxDQUFiLEdBQTZCLEdBQXBDO0FBQ0QsQ0FYRDtBQWFBOzs7Ozs7QUFJQS9KLE1BQU0sQ0FBQ2tFLFNBQVAsQ0FBaUI4RixhQUFqQixHQUFpQyxZQUFZO0FBQzNDLE1BQUksT0FBT3hKLFVBQVAsS0FBc0IsV0FBMUIsRUFBdUM7QUFDckMsUUFBSVIsTUFBTSxDQUFDSSxlQUFYLEVBQTRCO0FBQzFCLGFBQVEsSUFBSUosTUFBSixDQUFXLElBQVgsQ0FBRCxDQUFtQmlLLE1BQTFCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSTVKLEdBQUcsR0FBRyxJQUFJRyxVQUFKLENBQWUsS0FBS1MsTUFBcEIsQ0FBVjs7QUFDQSxXQUFLLElBQUlNLENBQUMsR0FBRyxDQUFSLEVBQVdpRSxHQUFHLEdBQUduRixHQUFHLENBQUNZLE1BQTFCLEVBQWtDTSxDQUFDLEdBQUdpRSxHQUF0QyxFQUEyQ2pFLENBQUMsSUFBSSxDQUFoRDtBQUNFbEIsUUFBQUEsR0FBRyxDQUFDa0IsQ0FBRCxDQUFILEdBQVMsS0FBS0EsQ0FBTCxDQUFUO0FBREY7O0FBRUEsYUFBT2xCLEdBQUcsQ0FBQzRKLE1BQVg7QUFDRDtBQUNGLEdBVEQsTUFTTztBQUNMLFVBQU0sSUFBSTdJLEtBQUosQ0FBVSxvREFBVixDQUFOO0FBQ0Q7QUFDRixDQWJELEMsQ0FlQTtBQUNBOzs7QUFFQSxTQUFTSixVQUFULENBQXFCa0IsR0FBckIsRUFBMEI7QUFDeEIsTUFBSUEsR0FBRyxDQUFDZ0ksSUFBUixFQUFjLE9BQU9oSSxHQUFHLENBQUNnSSxJQUFKLEVBQVA7QUFDZCxTQUFPaEksR0FBRyxDQUFDaUksT0FBSixDQUFZLFlBQVosRUFBMEIsRUFBMUIsQ0FBUDtBQUNEOztBQUVELElBQUlDLEVBQUUsR0FBR3BLLE1BQU0sQ0FBQ2tFLFNBQWhCO0FBRUE7Ozs7QUFHQWxFLE1BQU0sQ0FBQ3FCLFFBQVAsR0FBa0IsVUFBVWQsR0FBVixFQUFlO0FBQy9CQSxFQUFBQSxHQUFHLENBQUNlLFNBQUosR0FBZ0IsSUFBaEIsQ0FEK0IsQ0FHL0I7O0FBQ0FmLEVBQUFBLEdBQUcsQ0FBQzhKLElBQUosR0FBVzlKLEdBQUcsQ0FBQytGLEdBQWY7QUFDQS9GLEVBQUFBLEdBQUcsQ0FBQ2lCLElBQUosR0FBV2pCLEdBQUcsQ0FBQ2tHLEdBQWYsQ0FMK0IsQ0FPL0I7O0FBQ0FsRyxFQUFBQSxHQUFHLENBQUMrRixHQUFKLEdBQVU4RCxFQUFFLENBQUM5RCxHQUFiO0FBQ0EvRixFQUFBQSxHQUFHLENBQUNrRyxHQUFKLEdBQVUyRCxFQUFFLENBQUMzRCxHQUFiO0FBRUFsRyxFQUFBQSxHQUFHLENBQUNxQixLQUFKLEdBQVl3SSxFQUFFLENBQUN4SSxLQUFmO0FBQ0FyQixFQUFBQSxHQUFHLENBQUM4RCxRQUFKLEdBQWUrRixFQUFFLENBQUMvRixRQUFsQjtBQUNBOUQsRUFBQUEsR0FBRyxDQUFDK0osY0FBSixHQUFxQkYsRUFBRSxDQUFDL0YsUUFBeEI7QUFDQTlELEVBQUFBLEdBQUcsQ0FBQ3dFLE1BQUosR0FBYXFGLEVBQUUsQ0FBQ3JGLE1BQWhCO0FBQ0F4RSxFQUFBQSxHQUFHLENBQUNzQyxJQUFKLEdBQVd1SCxFQUFFLENBQUN2SCxJQUFkO0FBQ0F0QyxFQUFBQSxHQUFHLENBQUMyRSxLQUFKLEdBQVlrRixFQUFFLENBQUNsRixLQUFmO0FBQ0EzRSxFQUFBQSxHQUFHLENBQUNvQixTQUFKLEdBQWdCeUksRUFBRSxDQUFDekksU0FBbkI7QUFDQXBCLEVBQUFBLEdBQUcsQ0FBQ3lHLFlBQUosR0FBbUJvRCxFQUFFLENBQUNwRCxZQUF0QjtBQUNBekcsRUFBQUEsR0FBRyxDQUFDMEcsWUFBSixHQUFtQm1ELEVBQUUsQ0FBQ25ELFlBQXRCO0FBQ0ExRyxFQUFBQSxHQUFHLENBQUM0RyxZQUFKLEdBQW1CaUQsRUFBRSxDQUFDakQsWUFBdEI7QUFDQTVHLEVBQUFBLEdBQUcsQ0FBQzZHLFlBQUosR0FBbUJnRCxFQUFFLENBQUNoRCxZQUF0QjtBQUNBN0csRUFBQUEsR0FBRyxDQUFDOEcsUUFBSixHQUFlK0MsRUFBRSxDQUFDL0MsUUFBbEI7QUFDQTlHLEVBQUFBLEdBQUcsQ0FBQ2lILFdBQUosR0FBa0I0QyxFQUFFLENBQUM1QyxXQUFyQjtBQUNBakgsRUFBQUEsR0FBRyxDQUFDa0gsV0FBSixHQUFrQjJDLEVBQUUsQ0FBQzNDLFdBQXJCO0FBQ0FsSCxFQUFBQSxHQUFHLENBQUNvSCxXQUFKLEdBQWtCeUMsRUFBRSxDQUFDekMsV0FBckI7QUFDQXBILEVBQUFBLEdBQUcsQ0FBQ3FILFdBQUosR0FBa0J3QyxFQUFFLENBQUN4QyxXQUFyQjtBQUNBckgsRUFBQUEsR0FBRyxDQUFDd0gsV0FBSixHQUFrQnFDLEVBQUUsQ0FBQ3JDLFdBQXJCO0FBQ0F4SCxFQUFBQSxHQUFHLENBQUN5SCxXQUFKLEdBQWtCb0MsRUFBRSxDQUFDcEMsV0FBckI7QUFDQXpILEVBQUFBLEdBQUcsQ0FBQzJILFlBQUosR0FBbUJrQyxFQUFFLENBQUNsQyxZQUF0QjtBQUNBM0gsRUFBQUEsR0FBRyxDQUFDNEgsWUFBSixHQUFtQmlDLEVBQUUsQ0FBQ2pDLFlBQXRCO0FBQ0E1SCxFQUFBQSxHQUFHLENBQUNvRyxVQUFKLEdBQWlCeUQsRUFBRSxDQUFDekQsVUFBcEI7QUFDQXBHLEVBQUFBLEdBQUcsQ0FBQ2lJLGFBQUosR0FBb0I0QixFQUFFLENBQUM1QixhQUF2QjtBQUNBakksRUFBQUEsR0FBRyxDQUFDa0ksYUFBSixHQUFvQjJCLEVBQUUsQ0FBQzNCLGFBQXZCO0FBQ0FsSSxFQUFBQSxHQUFHLENBQUNvSSxhQUFKLEdBQW9CeUIsRUFBRSxDQUFDekIsYUFBdkI7QUFDQXBJLEVBQUFBLEdBQUcsQ0FBQ3FJLGFBQUosR0FBb0J3QixFQUFFLENBQUN4QixhQUF2QjtBQUNBckksRUFBQUEsR0FBRyxDQUFDc0ksU0FBSixHQUFnQnVCLEVBQUUsQ0FBQ3ZCLFNBQW5CO0FBQ0F0SSxFQUFBQSxHQUFHLENBQUN5SSxZQUFKLEdBQW1Cb0IsRUFBRSxDQUFDcEIsWUFBdEI7QUFDQXpJLEVBQUFBLEdBQUcsQ0FBQzBJLFlBQUosR0FBbUJtQixFQUFFLENBQUNuQixZQUF0QjtBQUNBMUksRUFBQUEsR0FBRyxDQUFDNEksWUFBSixHQUFtQmlCLEVBQUUsQ0FBQ2pCLFlBQXRCO0FBQ0E1SSxFQUFBQSxHQUFHLENBQUM2SSxZQUFKLEdBQW1CZ0IsRUFBRSxDQUFDaEIsWUFBdEI7QUFDQTdJLEVBQUFBLEdBQUcsQ0FBQ2dKLFlBQUosR0FBbUJhLEVBQUUsQ0FBQ2IsWUFBdEI7QUFDQWhKLEVBQUFBLEdBQUcsQ0FBQ2lKLFlBQUosR0FBbUJZLEVBQUUsQ0FBQ1osWUFBdEI7QUFDQWpKLEVBQUFBLEdBQUcsQ0FBQ21KLGFBQUosR0FBb0JVLEVBQUUsQ0FBQ1YsYUFBdkI7QUFDQW5KLEVBQUFBLEdBQUcsQ0FBQ29KLGFBQUosR0FBb0JTLEVBQUUsQ0FBQ1QsYUFBdkI7QUFDQXBKLEVBQUFBLEdBQUcsQ0FBQ3FKLElBQUosR0FBV1EsRUFBRSxDQUFDUixJQUFkO0FBQ0FySixFQUFBQSxHQUFHLENBQUN1SixPQUFKLEdBQWNNLEVBQUUsQ0FBQ04sT0FBakI7QUFDQXZKLEVBQUFBLEdBQUcsQ0FBQ3lKLGFBQUosR0FBb0JJLEVBQUUsQ0FBQ0osYUFBdkI7QUFFQSxTQUFPekosR0FBUDtBQUNELENBbERELEMsQ0FvREE7OztBQUNBLFNBQVM0RixLQUFULENBQWdCb0UsS0FBaEIsRUFBdUIvRSxHQUF2QixFQUE0QmdGLFlBQTVCLEVBQTBDO0FBQ3hDLE1BQUksT0FBT0QsS0FBUCxLQUFpQixRQUFyQixFQUErQixPQUFPQyxZQUFQO0FBQy9CRCxFQUFBQSxLQUFLLEdBQUcsQ0FBQyxDQUFDQSxLQUFWLENBRndDLENBRXRCOztBQUNsQixNQUFJQSxLQUFLLElBQUkvRSxHQUFiLEVBQWtCLE9BQU9BLEdBQVA7QUFDbEIsTUFBSStFLEtBQUssSUFBSSxDQUFiLEVBQWdCLE9BQU9BLEtBQVA7QUFDaEJBLEVBQUFBLEtBQUssSUFBSS9FLEdBQVQ7QUFDQSxNQUFJK0UsS0FBSyxJQUFJLENBQWIsRUFBZ0IsT0FBT0EsS0FBUDtBQUNoQixTQUFPLENBQVA7QUFDRDs7QUFFRCxTQUFTckosTUFBVCxDQUFpQkQsTUFBakIsRUFBeUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0FBLEVBQUFBLE1BQU0sR0FBRyxDQUFDLENBQUMyRSxJQUFJLENBQUM2RSxJQUFMLENBQVUsQ0FBQ3hKLE1BQVgsQ0FBWDtBQUNBLFNBQU9BLE1BQU0sR0FBRyxDQUFULEdBQWEsQ0FBYixHQUFpQkEsTUFBeEI7QUFDRDs7QUFFRCxTQUFTeUIsT0FBVCxDQUFrQjlCLE9BQWxCLEVBQTJCO0FBQ3pCLFNBQU8sQ0FBQ3FFLEtBQUssQ0FBQ3ZDLE9BQU4sSUFBaUIsVUFBVTlCLE9BQVYsRUFBbUI7QUFDMUMsV0FBTzhKLE1BQU0sQ0FBQ3hHLFNBQVAsQ0FBaUJHLFFBQWpCLENBQTBCYyxJQUExQixDQUErQnZFLE9BQS9CLE1BQTRDLGdCQUFuRDtBQUNELEdBRk0sRUFFSkEsT0FGSSxDQUFQO0FBR0Q7O0FBRUQsU0FBU2EsVUFBVCxDQUFxQmIsT0FBckIsRUFBOEI7QUFDNUIsU0FBTzhCLE9BQU8sQ0FBQzlCLE9BQUQsQ0FBUCxJQUFvQlosTUFBTSxDQUFDMEIsUUFBUCxDQUFnQmQsT0FBaEIsQ0FBcEIsSUFDSEEsT0FBTyxJQUFJLFFBQU9BLE9BQVAsTUFBbUIsUUFBOUIsSUFDQSxPQUFPQSxPQUFPLENBQUNLLE1BQWYsS0FBMEIsUUFGOUI7QUFHRDs7QUFFRCxTQUFTZ0YsS0FBVCxDQUFnQjBFLENBQWhCLEVBQW1CO0FBQ2pCLE1BQUlBLENBQUMsR0FBRyxFQUFSLEVBQVksT0FBTyxNQUFNQSxDQUFDLENBQUN0RyxRQUFGLENBQVcsRUFBWCxDQUFiO0FBQ1osU0FBT3NHLENBQUMsQ0FBQ3RHLFFBQUYsQ0FBVyxFQUFYLENBQVA7QUFDRDs7QUFFRCxTQUFTakMsV0FBVCxDQUFzQkYsR0FBdEIsRUFBMkI7QUFDekIsTUFBSTBJLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxPQUFLLElBQUlySixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVyxHQUFHLENBQUNqQixNQUF4QixFQUFnQ00sQ0FBQyxFQUFqQyxFQUFxQztBQUNuQyxRQUFJUyxDQUFDLEdBQUdFLEdBQUcsQ0FBQzJILFVBQUosQ0FBZXRJLENBQWYsQ0FBUjtBQUNBLFFBQUlTLENBQUMsSUFBSSxJQUFULEVBQ0U0SSxTQUFTLENBQUNDLElBQVYsQ0FBZTNJLEdBQUcsQ0FBQzJILFVBQUosQ0FBZXRJLENBQWYsQ0FBZixFQURGLEtBRUs7QUFDSCxVQUFJK0MsS0FBSyxHQUFHL0MsQ0FBWjtBQUNBLFVBQUlTLENBQUMsSUFBSSxNQUFMLElBQWVBLENBQUMsSUFBSSxNQUF4QixFQUFnQ1QsQ0FBQztBQUNqQyxVQUFJdUosQ0FBQyxHQUFHQyxrQkFBa0IsQ0FBQzdJLEdBQUcsQ0FBQ2dELEtBQUosQ0FBVVosS0FBVixFQUFpQi9DLENBQUMsR0FBQyxDQUFuQixDQUFELENBQWxCLENBQTBDK0IsTUFBMUMsQ0FBaUQsQ0FBakQsRUFBb0QwSCxLQUFwRCxDQUEwRCxHQUExRCxDQUFSOztBQUNBLFdBQUssSUFBSXpDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd1QyxDQUFDLENBQUM3SixNQUF0QixFQUE4QnNILENBQUMsRUFBL0I7QUFDRXFDLFFBQUFBLFNBQVMsQ0FBQ0MsSUFBVixDQUFleEgsUUFBUSxDQUFDeUgsQ0FBQyxDQUFDdkMsQ0FBRCxDQUFGLEVBQU8sRUFBUCxDQUF2QjtBQURGO0FBRUQ7QUFDRjs7QUFDRCxTQUFPcUMsU0FBUDtBQUNEOztBQUVELFNBQVMvRyxZQUFULENBQXVCM0IsR0FBdkIsRUFBNEI7QUFDMUIsTUFBSTBJLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxPQUFLLElBQUlySixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVyxHQUFHLENBQUNqQixNQUF4QixFQUFnQ00sQ0FBQyxFQUFqQyxFQUFxQztBQUNuQztBQUNBcUosSUFBQUEsU0FBUyxDQUFDQyxJQUFWLENBQWUzSSxHQUFHLENBQUMySCxVQUFKLENBQWV0SSxDQUFmLElBQW9CLElBQW5DO0FBQ0Q7O0FBQ0QsU0FBT3FKLFNBQVA7QUFDRDs7QUFFRCxTQUFTM0csY0FBVCxDQUF5Qi9CLEdBQXpCLEVBQThCO0FBQzVCLE1BQUkrSSxDQUFKLEVBQU9DLEVBQVAsRUFBV0MsRUFBWDtBQUNBLE1BQUlQLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxPQUFLLElBQUlySixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVyxHQUFHLENBQUNqQixNQUF4QixFQUFnQ00sQ0FBQyxFQUFqQyxFQUFxQztBQUNuQzBKLElBQUFBLENBQUMsR0FBRy9JLEdBQUcsQ0FBQzJILFVBQUosQ0FBZXRJLENBQWYsQ0FBSjtBQUNBMkosSUFBQUEsRUFBRSxHQUFHRCxDQUFDLElBQUksQ0FBVjtBQUNBRSxJQUFBQSxFQUFFLEdBQUdGLENBQUMsR0FBRyxHQUFUO0FBQ0FMLElBQUFBLFNBQVMsQ0FBQ0MsSUFBVixDQUFlTSxFQUFmO0FBQ0FQLElBQUFBLFNBQVMsQ0FBQ0MsSUFBVixDQUFlSyxFQUFmO0FBQ0Q7O0FBRUQsU0FBT04sU0FBUDtBQUNEOztBQUVELFNBQVN2SSxhQUFULENBQXdCSCxHQUF4QixFQUE2QjtBQUMzQixTQUFPdEMsTUFBTSxDQUFDd0wsV0FBUCxDQUFtQmxKLEdBQW5CLENBQVA7QUFDRDs7QUFFRCxTQUFTeUIsVUFBVCxDQUFxQjBILEdBQXJCLEVBQTBCQyxHQUExQixFQUErQnRJLE1BQS9CLEVBQXVDL0IsTUFBdkMsRUFBK0M7QUFDN0MsTUFBSTBCLEdBQUo7O0FBQ0EsT0FBSyxJQUFJcEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sTUFBcEIsRUFBNEJNLENBQUMsRUFBN0IsRUFBaUM7QUFDL0IsUUFBS0EsQ0FBQyxHQUFHeUIsTUFBSixJQUFjc0ksR0FBRyxDQUFDckssTUFBbkIsSUFBK0JNLENBQUMsSUFBSThKLEdBQUcsQ0FBQ3BLLE1BQTVDLEVBQ0U7QUFDRnFLLElBQUFBLEdBQUcsQ0FBQy9KLENBQUMsR0FBR3lCLE1BQUwsQ0FBSCxHQUFrQnFJLEdBQUcsQ0FBQzlKLENBQUQsQ0FBckI7QUFDRDs7QUFDRCxTQUFPQSxDQUFQO0FBQ0Q7O0FBRUQsU0FBU3VFLGNBQVQsQ0FBeUI1RCxHQUF6QixFQUE4QjtBQUM1QixNQUFJO0FBQ0YsV0FBT3FKLGtCQUFrQixDQUFDckosR0FBRCxDQUF6QjtBQUNELEdBRkQsQ0FFRSxPQUFPc0osR0FBUCxFQUFZO0FBQ1osV0FBTzFKLE1BQU0sQ0FBQ2lFLFlBQVAsQ0FBb0IsTUFBcEIsQ0FBUCxDQURZLENBQ3VCO0FBQ3BDO0FBQ0Y7QUFFRDs7Ozs7OztBQUtBLFNBQVNzQyxTQUFULENBQW9CRCxLQUFwQixFQUEyQnFELEdBQTNCLEVBQWdDO0FBQzlCaEosRUFBQUEsTUFBTSxDQUFDLE9BQU8yRixLQUFQLEtBQWlCLFFBQWxCLEVBQTRCLHVDQUE1QixDQUFOO0FBQ0EzRixFQUFBQSxNQUFNLENBQUMyRixLQUFLLElBQUksQ0FBVixFQUFhLDBEQUFiLENBQU47QUFDQTNGLEVBQUFBLE1BQU0sQ0FBQzJGLEtBQUssSUFBSXFELEdBQVYsRUFBZSw2Q0FBZixDQUFOO0FBQ0FoSixFQUFBQSxNQUFNLENBQUNtRCxJQUFJLENBQUM4RixLQUFMLENBQVd0RCxLQUFYLE1BQXNCQSxLQUF2QixFQUE4QixrQ0FBOUIsQ0FBTjtBQUNEOztBQUVELFNBQVNVLFNBQVQsQ0FBb0JWLEtBQXBCLEVBQTJCcUQsR0FBM0IsRUFBZ0M1RixHQUFoQyxFQUFxQztBQUNuQ3BELEVBQUFBLE1BQU0sQ0FBQyxPQUFPMkYsS0FBUCxLQUFpQixRQUFsQixFQUE0Qix1Q0FBNUIsQ0FBTjtBQUNBM0YsRUFBQUEsTUFBTSxDQUFDMkYsS0FBSyxJQUFJcUQsR0FBVixFQUFlLHlDQUFmLENBQU47QUFDQWhKLEVBQUFBLE1BQU0sQ0FBQzJGLEtBQUssSUFBSXZDLEdBQVYsRUFBZSwwQ0FBZixDQUFOO0FBQ0FwRCxFQUFBQSxNQUFNLENBQUNtRCxJQUFJLENBQUM4RixLQUFMLENBQVd0RCxLQUFYLE1BQXNCQSxLQUF2QixFQUE4QixrQ0FBOUIsQ0FBTjtBQUNEOztBQUVELFNBQVNrQixZQUFULENBQXVCbEIsS0FBdkIsRUFBOEJxRCxHQUE5QixFQUFtQzVGLEdBQW5DLEVBQXdDO0FBQ3RDcEQsRUFBQUEsTUFBTSxDQUFDLE9BQU8yRixLQUFQLEtBQWlCLFFBQWxCLEVBQTRCLHVDQUE1QixDQUFOO0FBQ0EzRixFQUFBQSxNQUFNLENBQUMyRixLQUFLLElBQUlxRCxHQUFWLEVBQWUseUNBQWYsQ0FBTjtBQUNBaEosRUFBQUEsTUFBTSxDQUFDMkYsS0FBSyxJQUFJdkMsR0FBVixFQUFlLDBDQUFmLENBQU47QUFDRDs7QUFFRCxTQUFTcEQsTUFBVCxDQUFpQmtKLElBQWpCLEVBQXVCQyxPQUF2QixFQUFnQztBQUM5QixNQUFJLENBQUNELElBQUwsRUFBVyxNQUFNLElBQUl2SyxLQUFKLENBQVV3SyxPQUFPLElBQUksa0JBQXJCLENBQU47QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTJcblxuLyoqXG4gKiBJZiBgQnVmZmVyLl91c2VUeXBlZEFycmF5c2A6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChjb21wYXRpYmxlIGRvd24gdG8gSUU2KVxuICovXG5CdWZmZXIuX3VzZVR5cGVkQXJyYXlzID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gRGV0ZWN0IGlmIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWQgQXJyYXlzLiBTdXBwb3J0ZWQgYnJvd3NlcnMgYXJlIElFIDEwKywgRmlyZWZveCA0KyxcbiAgLy8gQ2hyb21lIDcrLCBTYWZhcmkgNS4xKywgT3BlcmEgMTEuNissIGlPUyA0LjIrLiBJZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFkZGluZ1xuICAvLyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsIHRoZW4gdGhhdCdzIHRoZSBzYW1lIGFzIG5vIGBVaW50OEFycmF5YCBzdXBwb3J0XG4gIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGFkZCBhbGwgdGhlIG5vZGUgQnVmZmVyIEFQSSBtZXRob2RzLiBUaGlzIGlzIGFuIGlzc3VlXG4gIC8vIGluIEZpcmVmb3ggNC0yOS4gTm93IGZpeGVkOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzhcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgLy8gQ2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIFdvcmthcm91bmQ6IG5vZGUncyBiYXNlNjQgaW1wbGVtZW50YXRpb24gYWxsb3dzIGZvciBub24tcGFkZGVkIHN0cmluZ3NcbiAgLy8gd2hpbGUgYmFzZTY0LWpzIGRvZXMgbm90LlxuICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnICYmIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgc3ViamVjdCA9IHN0cmluZ3RyaW0oc3ViamVjdClcbiAgICB3aGlsZSAoc3ViamVjdC5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgICBzdWJqZWN0ID0gc3ViamVjdCArICc9J1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdClcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0Lmxlbmd0aCkgLy8gYXNzdW1lIHRoYXQgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgZWxzZVxuICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbmVlZHMgdG8gYmUgYSBudW1iZXIsIGFycmF5IG9yIHN0cmluZy4nKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgICAgZWxzZVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0W2ldXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbi8vIFNUQVRJQyBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT09IG51bGwgJiYgYiAhPT0gdW5kZWZpbmVkICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAvIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBhc3NlcnQoaXNBcnJheShsaXN0KSwgJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3QsIFt0b3RhbExlbmd0aF0pXFxuJyArXG4gICAgICAnbGlzdCBzaG91bGQgYmUgYW4gQXJyYXkuJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdG90YWxMZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuLy8gQlVGRkVSIElOU1RBTkNFIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIF9oZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGFzc2VydChzdHJMZW4gJSAyID09PSAwLCAnSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgYXNzZXJ0KCFpc05hTihieXRlKSwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIEJ1ZmZlci5fY2hhcnNXcml0dGVuID0gaSAqIDJcbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gX3V0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBfYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG4gIHN0YXJ0ID0gTnVtYmVyKHN0YXJ0KSB8fCAwXG4gIGVuZCA9IChlbmQgIT09IHVuZGVmaW5lZClcbiAgICA/IE51bWJlcihlbmQpXG4gICAgOiBlbmQgPSBzZWxmLmxlbmd0aFxuXG4gIC8vIEZhc3RwYXRoIGVtcHR5IHN0cmluZ3NcbiAgaWYgKGVuZCA9PT0gc3RhcnQpXG4gICAgcmV0dXJuICcnXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBhc3NlcnQodGFyZ2V0X3N0YXJ0ID49IDAgJiYgdGFyZ2V0X3N0YXJ0IDwgdGFyZ2V0Lmxlbmd0aCxcbiAgICAgICd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCBzb3VyY2UubGVuZ3RoLCAnc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gc291cmNlLmxlbmd0aCwgJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwIHx8ICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gX3V0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBfYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspXG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBfYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIF9oZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2krMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gY2xhbXAoc3RhcnQsIGxlbiwgMClcbiAgZW5kID0gY2xhbXAoZW5kLCBsZW4sIGxlbilcblxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAyXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gICAgdmFsIHw9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldCArIDNdIDw8IDI0ID4+PiAwKVxuICB9IGVsc2Uge1xuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDFdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDJdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgM11cbiAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldF0gPDwgMjQgPj4+IDApXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLFxuICAgICAgICAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgdmFyIG5lZyA9IHRoaXNbb2Zmc2V0XSAmIDB4ODBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MTYoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDMyKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDAwMDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmZmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEZsb2F0IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRG91YmxlIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZilcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmZmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmLCAtMHg4MClcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgdGhpcy53cml0ZVVJbnQ4KHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgdGhpcy53cml0ZVVJbnQ4KDB4ZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZiwgLTB4ODAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQxNihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MTYoYnVmLCAweGZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MzIoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgMHhmZmZmZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsXG4gICAgICAgICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUuY2hhckNvZGVBdCgwKVxuICB9XG5cbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKSwgJ3ZhbHVlIGlzIG5vdCBhIG51bWJlcicpXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHRoaXMubGVuZ3RoLCAnc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gdGhpcy5sZW5ndGgsICdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICB0aGlzW2ldID0gdmFsdWVcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXQgPSBbXVxuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpXSA9IHRvSGV4KHRoaXNbaV0pXG4gICAgaWYgKGkgPT09IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMpIHtcbiAgICAgIG91dFtpICsgMV0gPSAnLi4uJ1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBvdXQuam9pbignICcpICsgJz4nXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKVxuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbi8vIHNsaWNlKHN0YXJ0LCBlbmQpXG5mdW5jdGlvbiBjbGFtcCAoaW5kZXgsIGxlbiwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIGluZGV4ID0gfn5pbmRleDsgIC8vIENvZXJjZSB0byBpbnRlZ2VyLlxuICBpZiAoaW5kZXggPj0gbGVuKSByZXR1cm4gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgaW5kZXggKz0gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gY29lcmNlIChsZW5ndGgpIHtcbiAgLy8gQ29lcmNlIGxlbmd0aCB0byBhIG51bWJlciAocG9zc2libHkgTmFOKSwgcm91bmQgdXBcbiAgLy8gaW4gY2FzZSBpdCdzIGZyYWN0aW9uYWwgKGUuZy4gMTIzLjQ1NikgdGhlbiBkbyBhXG4gIC8vIGRvdWJsZSBuZWdhdGUgdG8gY29lcmNlIGEgTmFOIHRvIDAuIEVhc3ksIHJpZ2h0P1xuICBsZW5ndGggPSB+fk1hdGguY2VpbCgrbGVuZ3RoKVxuICByZXR1cm4gbGVuZ3RoIDwgMCA/IDAgOiBsZW5ndGhcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoc3ViamVjdCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHN1YmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN1YmplY3QpID09PSAnW29iamVjdCBBcnJheV0nXG4gIH0pKHN1YmplY3QpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpXG4gICAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSlcbiAgICBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspXG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIHBvc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cblxuLypcbiAqIFdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGlzIGEgdmFsaWQgaW50ZWdlci4gVGhpcyBtZWFucyB0aGF0IGl0XG4gKiBpcyBub24tbmVnYXRpdmUuIEl0IGhhcyBubyBmcmFjdGlvbmFsIGNvbXBvbmVudCBhbmQgdGhhdCBpdCBkb2VzIG5vdFxuICogZXhjZWVkIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHZlcmlmdWludCAodmFsdWUsIG1heCkge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPj0gMCwgJ3NwZWNpZmllZCBhIG5lZ2F0aXZlIHZhbHVlIGZvciB3cml0aW5nIGFuIHVuc2lnbmVkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGlzIGxhcmdlciB0aGFuIG1heGltdW0gdmFsdWUgZm9yIHR5cGUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZnNpbnQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZklFRUU3NTQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxufVxuXG5mdW5jdGlvbiBhc3NlcnQgKHRlc3QsIG1lc3NhZ2UpIHtcbiAgaWYgKCF0ZXN0KSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAnRmFpbGVkIGFzc2VydGlvbicpXG59XG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\buffer\\index.js","/..\\..\\..\\..\\node_modules\\buffer")
},{"6r38Q7":5,"base64-js":2,"buffer":3,"ieee754":4}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJyZWFkIiwiYnVmZmVyIiwib2Zmc2V0IiwiaXNMRSIsIm1MZW4iLCJuQnl0ZXMiLCJlIiwibSIsImVMZW4iLCJlTWF4IiwiZUJpYXMiLCJuQml0cyIsImkiLCJkIiwicyIsIk5hTiIsIkluZmluaXR5IiwiTWF0aCIsInBvdyIsIndyaXRlIiwidmFsdWUiLCJjIiwicnQiLCJhYnMiLCJpc05hTiIsImZsb29yIiwibG9nIiwiTE4yIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPLENBQUNDLElBQVIsR0FBZSxVQUFVQyxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQkMsSUFBMUIsRUFBZ0NDLElBQWhDLEVBQXNDQyxNQUF0QyxFQUE4QztBQUMzRCxNQUFJQyxDQUFKLEVBQU9DLENBQVA7QUFDQSxNQUFJQyxJQUFJLEdBQUlILE1BQU0sR0FBRyxDQUFWLEdBQWVELElBQWYsR0FBc0IsQ0FBakM7QUFDQSxNQUFJSyxJQUFJLEdBQUcsQ0FBQyxLQUFLRCxJQUFOLElBQWMsQ0FBekI7QUFDQSxNQUFJRSxLQUFLLEdBQUdELElBQUksSUFBSSxDQUFwQjtBQUNBLE1BQUlFLEtBQUssR0FBRyxDQUFDLENBQWI7QUFDQSxNQUFJQyxDQUFDLEdBQUdULElBQUksR0FBSUUsTUFBTSxHQUFHLENBQWIsR0FBa0IsQ0FBOUI7QUFDQSxNQUFJUSxDQUFDLEdBQUdWLElBQUksR0FBRyxDQUFDLENBQUosR0FBUSxDQUFwQjtBQUNBLE1BQUlXLENBQUMsR0FBR2IsTUFBTSxDQUFDQyxNQUFNLEdBQUdVLENBQVYsQ0FBZDtBQUVBQSxFQUFBQSxDQUFDLElBQUlDLENBQUw7QUFFQVAsRUFBQUEsQ0FBQyxHQUFHUSxDQUFDLEdBQUksQ0FBQyxLQUFNLENBQUNILEtBQVIsSUFBa0IsQ0FBM0I7QUFDQUcsRUFBQUEsQ0FBQyxLQUFNLENBQUNILEtBQVI7QUFDQUEsRUFBQUEsS0FBSyxJQUFJSCxJQUFUOztBQUNBLFNBQU9HLEtBQUssR0FB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QUFLLEdBQUcsQ0FBcEIsQ0FBUixHQUFpQ08sSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZZCxJQUFaLENBQXJDO0FBQ0FFLE1BQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPRixJQUFJLElBQUksQ0FBZixFQUFrQkgsTUFBTSxDQUFDQyxNQUFNLEdBQUdVLENBQVYsQ0FBTixHQUFxQkwsQ0FBQyxHQUFHLElBQXpCLEVBQStCSyxDQUFDLElBQUlDLENBQXBDLEVBQXVDTixDQUFDLElBQUksR0FBNUMsRUFBaURILElBQUksSUFBSSxDQUEzRSxFQUE4RSxDQUFFOztBQUVoRkUsRUFBQUEsQ0FBQyxHQUFJQSxDQUFDLElBQUlGLElBQU4sR0FBY0csQ0FBbEI7QUFDQUMsRUFBQUEsSUFBSSxJQUFJSixJQUFSOztBQUNBLFNBQU9JLElBQUksR0FBRyxDQUFkLEVBQWlCUCxNQUFNLENBQUNDLE1BQU0sR0FBR1UsQ0FBVixDQUFOLEdBQXFCTixDQUFDLEdBQUcsSUFBekIsRUFBK0JNLENBQUMsSUFBSUMsQ0FBcEMsRUFBdUNQLENBQUMsSUFBSSxHQUE1QyxFQUFpREUsSUFBSSxJQUFJLENBQTFFLEVBQTZFLENBQUU7O0FBRS9FUCxFQUFBQSxNQUFNLENBQUNDLE1BQU0sR0FBR1UsQ0FBVCxHQUFhQyxDQUFkLENBQU4sSUFBMEJDLENBQUMsR0FBRyxHQUE5QjtBQUNELENBbEREIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\ieee754\\index.js","/..\\..\\..\\..\\node_modules\\ieee754")
},{"6r38Q7":5,"buffer":3}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

// shim for using process in browser
var process = module.exports = {};

process.nextTick = function () {
  var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
  var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;

  if (canSetImmediate) {
    return function (f) {
      return window.setImmediate(f);
    };
  }

  if (canPost) {
    var queue = [];
    window.addEventListener('message', function (ev) {
      var source = ev.source;

      if ((source === window || source === null) && ev.data === 'process-tick') {
        ev.stopPropagation();

        if (queue.length > 0) {
          var fn = queue.shift();
          fn();
        }
      }
    }, true);
    return function nextTick(fn) {
      queue.push(fn);
      window.postMessage('process-tick', '*');
    };
  }

  return function nextTick(fn) {
    setTimeout(fn, 0);
  };
}();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
  throw new Error('process.binding is not supported');
}; // TODO(shtylman)


process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZXIuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJuZXh0VGljayIsImNhblNldEltbWVkaWF0ZSIsIndpbmRvdyIsInNldEltbWVkaWF0ZSIsImNhblBvc3QiLCJwb3N0TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmIiwicXVldWUiLCJldiIsInNvdXJjZSIsImRhdGEiLCJzdG9wUHJvcGFnYXRpb24iLCJsZW5ndGgiLCJmbiIsInNoaWZ0IiwicHVzaCIsInNldFRpbWVvdXQiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2Iiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwiYmluZGluZyIsIm5hbWUiLCJFcnJvciIsImN3ZCIsImNoZGlyIiwiZGlyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUEsSUFBSUEsT0FBTyxHQUFHQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBL0I7O0FBRUFGLE9BQU8sQ0FBQ0csUUFBUixHQUFvQixZQUFZO0FBQzVCLE1BQUlDLGVBQWUsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQ25CQSxNQUFNLENBQUNDLFlBRFY7QUFFQSxNQUFJQyxPQUFPLEdBQUcsT0FBT0YsTUFBUCxLQUFrQixXQUFsQixJQUNYQSxNQUFNLENBQUNHLFdBREksSUFDV0gsTUFBTSxDQUFDSSxnQkFEaEM7O0FBSUEsTUFBSUwsZUFBSixFQUFxQjtBQUNqQixXQUFPLFVBQVVNLENBQVYsRUFBYTtBQUFFLGFBQU9MLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkksQ0FBcEIsQ0FBUDtBQUErQixLQUFyRDtBQUNIOztBQUVELE1BQUlILE9BQUosRUFBYTtBQUNULFFBQUlJLEtBQUssR0FBRyxFQUFaO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVUcsRUFBVixFQUFjO0FBQzdDLFVBQUlDLE1BQU0sR0FBR0QsRUFBRSxDQUFDQyxNQUFoQjs7QUFDQSxVQUFJLENBQUNBLE1BQU0sS0FBS1IsTUFBWCxJQUFxQlEsTUFBTSxLQUFLLElBQWpDLEtBQTBDRCxFQUFFLENBQUNFLElBQUgsS0FBWSxjQUExRCxFQUEwRTtBQUN0RUYsUUFBQUEsRUFBRSxDQUFDRyxlQUFIOztBQUNBLFlBQUlKLEtBQUssQ0FBQ0ssTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ2xCLGNBQUlDLEVBQUUsR0FBR04sS0FBSyxDQUFDTyxLQUFOLEVBQVQ7QUFDQUQsVUFBQUEsRUFBRTtBQUNMO0FBQ0o7QUFDSixLQVRELEVBU0csSUFUSDtBQVdBLFdBQU8sU0FBU2QsUUFBVCxDQUFrQmMsRUFBbEIsRUFBc0I7QUFDekJOLE1BQUFBLEtBQUssQ0FBQ1EsSUFBTixDQUFXRixFQUFYO0FBQ0FaLE1BQUFBLE1BQU0sQ0FBQ0csV0FBUCxDQUFtQixjQUFuQixFQUFtQyxHQUFuQztBQUNILEtBSEQ7QUFJSDs7QUFFRCxTQUFPLFNBQVNMLFFBQVQsQ0FBa0JjLEVBQWxCLEVBQXNCO0FBQ3pCRyxJQUFBQSxVQUFVLENBQUNILEVBQUQsRUFBSyxDQUFMLENBQVY7QUFDSCxHQUZEO0FBR0gsQ0FqQ2tCLEVBQW5COztBQW1DQWpCLE9BQU8sQ0FBQ3FCLEtBQVIsR0FBZ0IsU0FBaEI7QUFDQXJCLE9BQU8sQ0FBQ3NCLE9BQVIsR0FBa0IsSUFBbEI7QUFDQXRCLE9BQU8sQ0FBQ3VCLEdBQVIsR0FBYyxFQUFkO0FBQ0F2QixPQUFPLENBQUN3QixJQUFSLEdBQWUsRUFBZjs7QUFFQSxTQUFTQyxJQUFULEdBQWdCLENBQUU7O0FBRWxCekIsT0FBTyxDQUFDMEIsRUFBUixHQUFhRCxJQUFiO0FBQ0F6QixPQUFPLENBQUMyQixXQUFSLEdBQXNCRixJQUF0QjtBQUNBekIsT0FBTyxDQUFDNEIsSUFBUixHQUFlSCxJQUFmO0FBQ0F6QixPQUFPLENBQUM2QixHQUFSLEdBQWNKLElBQWQ7QUFDQXpCLE9BQU8sQ0FBQzhCLGNBQVIsR0FBeUJMLElBQXpCO0FBQ0F6QixPQUFPLENBQUMrQixrQkFBUixHQUE2Qk4sSUFBN0I7QUFDQXpCLE9BQU8sQ0FBQ2dDLElBQVIsR0FBZVAsSUFBZjs7QUFFQXpCLE9BQU8sQ0FBQ2lDLE9BQVIsR0FBa0IsVUFBVUMsSUFBVixFQUFnQjtBQUM5QixRQUFNLElBQUlDLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0gsQ0FGRCxDLENBSUE7OztBQUNBbkMsT0FBTyxDQUFDb0MsR0FBUixHQUFjLFlBQVk7QUFBRSxTQUFPLEdBQVA7QUFBWSxDQUF4Qzs7QUFDQXBDLE9BQU8sQ0FBQ3FDLEtBQVIsR0FBZ0IsVUFBVUMsR0FBVixFQUFlO0FBQzNCLFFBQU0sSUFBSUgsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDSCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\process\\browser.js","/..\\..\\..\\..\\node_modules\\process")
},{"6r38Q7":5,"buffer":3}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * SimpleBar.js - v4.0.0-alpha.5
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e();
}(void 0, function () {
  "use strict";

  var t = function t(_t2) {
    if ("function" != typeof _t2) throw TypeError(String(_t2) + " is not a function");
    return _t2;
  },
      e = function e(t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
      i = {}.toString,
      r = function r(t) {
    return i.call(t).slice(8, -1);
  },
      n = "".split,
      s = e(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    return "String" == r(t) ? n.call(t, "") : Object(t);
  } : Object,
      o = function o(t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  },
      a = function a(t) {
    return Object(o(t));
  },
      l = Math.ceil,
      c = Math.floor,
      u = function u(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? c : l)(t);
  },
      h = Math.min,
      f = function f(t) {
    return t > 0 ? h(u(t), 9007199254740991) : 0;
  },
      d = function d(t) {
    return "object" == _typeof(t) ? null !== t : "function" == typeof t;
  },
      p = Array.isArray || function (t) {
    return "Array" == r(t);
  },
      v = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function g(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }

  var b,
      m,
      y,
      x,
      E = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && window.Math == Math ? window : "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Math == Math ? self : Function("return this")(),
      w = !e(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function get() {
        return 7;
      }
    }).a;
  }),
      O = E.document,
      _ = d(O) && d(O.createElement),
      S = !w && !e(function () {
    return 7 != Object.defineProperty((t = "div", _ ? O.createElement(t) : {}), "a", {
      get: function get() {
        return 7;
      }
    }).a;
    var t;
  }),
      A = function A(t) {
    if (!d(t)) throw TypeError(String(t) + " is not an object");
    return t;
  },
      L = function L(t, e) {
    if (!d(t)) return t;
    var i, r;
    if (e && "function" == typeof (i = t.toString) && !d(r = i.call(t))) return r;
    if ("function" == typeof (i = t.valueOf) && !d(r = i.call(t))) return r;
    if (!e && "function" == typeof (i = t.toString) && !d(r = i.call(t))) return r;
    throw TypeError("Can't convert object to primitive value");
  },
      M = Object.defineProperty,
      k = {
    f: w ? M : function (t, e, i) {
      if (A(t), e = L(e, !0), A(i), S) try {
        return M(t, e, i);
      } catch (t) {}
      if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
      return "value" in i && (t[e] = i.value), t;
    }
  },
      W = function W(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    };
  },
      T = w ? function (t, e, i) {
    return k.f(t, e, W(1, i));
  } : function (t, e, i) {
    return t[e] = i, t;
  },
      j = function j(t, e) {
    try {
      T(E, t, e);
    } catch (i) {
      E[t] = e;
    }

    return e;
  },
      R = g(function (t) {
    var e = E["__core-js_shared__"] || j("__core-js_shared__", {});
    (t.exports = function (t, i) {
      return e[t] || (e[t] = void 0 !== i ? i : {});
    })("versions", []).push({
      version: "3.0.1",
      mode: "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  }),
      N = 0,
      z = Math.random(),
      C = function C(t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++N + z).toString(36));
  },
      V = !e(function () {
    return !String(Symbol());
  }),
      D = R("wks"),
      B = E.Symbol,
      I = function I(t) {
    return D[t] || (D[t] = V && B[t] || (V ? B : C)("Symbol." + t));
  },
      P = I("species"),
      H = function H(t, e) {
    var i;
    return p(t) && ("function" != typeof (i = t.constructor) || i !== Array && !p(i.prototype) ? d(i) && null === (i = i[P]) && (i = void 0) : i = void 0), new (void 0 === i ? Array : i)(0 === e ? 0 : e);
  },
      q = function q(e, i) {
    var r = 1 == e,
        n = 2 == e,
        o = 3 == e,
        l = 4 == e,
        c = 6 == e,
        u = 5 == e || c,
        h = i || H;
    return function (i, d, p) {
      for (var v, g, b = a(i), m = s(b), y = function (e, i, r) {
        if (t(e), void 0 === i) return e;

        switch (r) {
          case 0:
            return function () {
              return e.call(i);
            };

          case 1:
            return function (t) {
              return e.call(i, t);
            };

          case 2:
            return function (t, r) {
              return e.call(i, t, r);
            };

          case 3:
            return function (t, r, n) {
              return e.call(i, t, r, n);
            };
        }

        return function () {
          return e.apply(i, arguments);
        };
      }(d, p, 3), x = f(m.length), E = 0, w = r ? h(i, x) : n ? h(i, 0) : void 0; x > E; E++) {
        if ((u || E in m) && (g = y(v = m[E], E, b), e)) if (r) w[E] = g;else if (g) switch (e) {
          case 3:
            return !0;

          case 5:
            return v;

          case 6:
            return E;

          case 2:
            w.push(v);
        } else if (l) return !1;
      }

      return c ? -1 : o || l ? l : w;
    };
  },
      F = I("species"),
      $ = {}.propertyIsEnumerable,
      X = Object.getOwnPropertyDescriptor,
      Y = {
    f: X && !$.call({
      1: 2
    }, 1) ? function (t) {
      var e = X(this, t);
      return !!e && e.enumerable;
    } : $
  },
      G = function G(t) {
    return s(o(t));
  },
      K = {}.hasOwnProperty,
      U = function U(t, e) {
    return K.call(t, e);
  },
      J = Object.getOwnPropertyDescriptor,
      Q = {
    f: w ? J : function (t, e) {
      if (t = G(t), e = L(e, !0), S) try {
        return J(t, e);
      } catch (t) {}
      if (U(t, e)) return W(!Y.f.call(t, e), t[e]);
    }
  },
      Z = R("native-function-to-string", Function.toString),
      tt = E.WeakMap,
      et = "function" == typeof tt && /native code/.test(Z.call(tt)),
      it = R("keys"),
      rt = {},
      nt = E.WeakMap;

  if (et) {
    var st = new nt(),
        ot = st.get,
        at = st.has,
        lt = st.set;
    b = function b(t, e) {
      return lt.call(st, t, e), e;
    }, m = function m(t) {
      return ot.call(st, t) || {};
    }, y = function y(t) {
      return at.call(st, t);
    };
  } else {
    var ct = it[x = "state"] || (it[x] = C(x));
    rt[ct] = !0, b = function b(t, e) {
      return T(t, ct, e), e;
    }, m = function m(t) {
      return U(t, ct) ? t[ct] : {};
    }, y = function y(t) {
      return U(t, ct);
    };
  }

  var ut,
      ht,
      ft = {
    set: b,
    get: m,
    has: y,
    enforce: function enforce(t) {
      return y(t) ? m(t) : b(t, {});
    },
    getterFor: function getterFor(t) {
      return function (e) {
        var i;
        if (!d(e) || (i = m(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return i;
      };
    }
  },
      dt = g(function (t) {
    var e = ft.get,
        i = ft.enforce,
        r = String(Z).split("toString");
    R("inspectSource", function (t) {
      return Z.call(t);
    }), (t.exports = function (t, e, n, s) {
      var o = !!s && !!s.unsafe,
          a = !!s && !!s.enumerable,
          l = !!s && !!s.noTargetGet;
      "function" == typeof n && ("string" != typeof e || U(n, "name") || T(n, "name", e), i(n).source = r.join("string" == typeof e ? e : "")), t !== E ? (o ? !l && t[e] && (a = !0) : delete t[e], a ? t[e] = n : T(t, e, n)) : a ? t[e] = n : j(e, n);
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && e(this).source || Z.call(this);
    });
  }),
      pt = Math.max,
      vt = Math.min,
      gt = (ut = !1, function (t, e, i) {
    var r,
        n = G(t),
        s = f(n.length),
        o = function (t, e) {
      var i = u(t);
      return i < 0 ? pt(i + e, 0) : vt(i, e);
    }(i, s);

    if (ut && e != e) {
      for (; s > o;) {
        if ((r = n[o++]) != r) return !0;
      }
    } else for (; s > o; o++) {
      if ((ut || o in n) && n[o] === e) return ut || o || 0;
    }

    return !ut && -1;
  }),
      bt = function bt(t, e) {
    var i,
        r = G(t),
        n = 0,
        s = [];

    for (i in r) {
      !U(rt, i) && U(r, i) && s.push(i);
    }

    for (; e.length > n;) {
      U(r, i = e[n++]) && (~gt(s, i) || s.push(i));
    }

    return s;
  },
      mt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
      yt = mt.concat("length", "prototype"),
      xt = {
    f: Object.getOwnPropertyNames || function (t) {
      return bt(t, yt);
    }
  },
      Et = {
    f: Object.getOwnPropertySymbols
  },
      wt = E.Reflect,
      Ot = wt && wt.ownKeys || function (t) {
    var e = xt.f(A(t)),
        i = Et.f;
    return i ? e.concat(i(t)) : e;
  },
      _t = function _t(t, e) {
    for (var i = Ot(e), r = k.f, n = Q.f, s = 0; s < i.length; s++) {
      var o = i[s];
      U(t, o) || r(t, o, n(e, o));
    }
  },
      St = /#|\.prototype\./,
      At = function At(t, i) {
    var r = Mt[Lt(t)];
    return r == Wt || r != kt && ("function" == typeof i ? e(i) : !!i);
  },
      Lt = At.normalize = function (t) {
    return String(t).replace(St, ".").toLowerCase();
  },
      Mt = At.data = {},
      kt = At.NATIVE = "N",
      Wt = At.POLYFILL = "P",
      Tt = At,
      jt = Q.f,
      Rt = function Rt(t, e) {
    var i,
        r,
        n,
        s,
        o,
        a = t.target,
        l = t.global,
        c = t.stat;
    if (i = l ? E : c ? E[a] || j(a, {}) : (E[a] || {}).prototype) for (r in e) {
      if (s = e[r], n = t.noTargetGet ? (o = jt(i, r)) && o.value : i[r], !Tt(l ? r : a + (c ? "." : "#") + r, t.forced) && void 0 !== n) {
        if (_typeof(s) == _typeof(n)) continue;

        _t(s, n);
      }

      (t.sham || n && n.sham) && T(s, "sham", !0), dt(i, r, s, t);
    }
  },
      Nt = q(2);

  Rt({
    target: "Array",
    proto: !0,
    forced: !(ht = "filter", !e(function () {
      var t = [];
      return (t.constructor = {})[F] = function () {
        return {
          foo: 1
        };
      }, 1 !== t[ht](Boolean).foo;
    }))
  }, {
    filter: function filter(t) {
      return Nt(this, t, arguments[1]);
    }
  });

  var zt = function zt(t, i) {
    var r = [][t];
    return !r || !e(function () {
      r.call(null, i || function () {
        throw 1;
      }, 1);
    });
  },
      Ct = [].forEach,
      Vt = q(0),
      Dt = zt("forEach") ? function (t) {
    return Vt(this, t, arguments[1]);
  } : Ct;

  Rt({
    target: "Array",
    proto: !0,
    forced: [].forEach != Dt
  }, {
    forEach: Dt
  });
  Rt({
    target: "Array",
    proto: !0,
    forced: zt("reduce")
  }, {
    reduce: function reduce(e) {
      return function (e, i, r, n, o) {
        t(i);
        var l = a(e),
            c = s(l),
            u = f(l.length),
            h = o ? u - 1 : 0,
            d = o ? -1 : 1;
        if (r < 2) for (;;) {
          if (h in c) {
            n = c[h], h += d;
            break;
          }

          if (h += d, o ? h < 0 : u <= h) throw TypeError("Reduce of empty array with no initial value");
        }

        for (; o ? h >= 0 : u > h; h += d) {
          h in c && (n = i(n, c[h], h, l));
        }

        return n;
      }(this, e, arguments.length, arguments[1], !1);
    }
  });
  var Bt = k.f,
      It = Function.prototype,
      Pt = It.toString,
      Ht = /^\s*function ([^ (]*)/;
  !w || "name" in It || Bt(It, "name", {
    configurable: !0,
    get: function get() {
      try {
        return Pt.call(this).match(Ht)[1];
      } catch (t) {
        return "";
      }
    }
  });

  var qt = Object.keys || function (t) {
    return bt(t, mt);
  },
      Ft = Object.assign,
      $t = !Ft || e(function () {
    var t = {},
        e = {},
        i = Symbol();
    return t[i] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t) {
      e[t] = t;
    }), 7 != Ft({}, t)[i] || "abcdefghijklmnopqrst" != qt(Ft({}, e)).join("");
  }) ? function (t, e) {
    for (var i = a(t), r = arguments.length, n = 1, o = Et.f, l = Y.f; r > n;) {
      for (var c, u = s(arguments[n++]), h = o ? qt(u).concat(o(u)) : qt(u), f = h.length, d = 0; f > d;) {
        l.call(u, c = h[d++]) && (i[c] = u[c]);
      }
    }

    return i;
  } : Ft;

  Rt({
    target: "Object",
    stat: !0,
    forced: Object.assign !== $t
  }, {
    assign: $t
  });
  var Xt = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
      Yt = "[" + Xt + "]",
      Gt = RegExp("^" + Yt + Yt + "*"),
      Kt = RegExp(Yt + Yt + "*$"),
      Ut = E.parseInt,
      Jt = /^[-+]?0[xX]/,
      Qt = 8 !== Ut(Xt + "08") || 22 !== Ut(Xt + "0x16") ? function (t, e) {
    var i = function (t, e) {
      return t = String(o(t)), 1 & e && (t = t.replace(Gt, "")), 2 & e && (t = t.replace(Kt, "")), t;
    }(String(t), 3);

    return Ut(i, e >>> 0 || (Jt.test(i) ? 16 : 10));
  } : Ut;
  Rt({
    global: !0,
    forced: parseInt != Qt
  }, {
    parseInt: Qt
  });
  var Zt,
      te,
      ee = RegExp.prototype.exec,
      ie = String.prototype.replace,
      re = ee,
      ne = (Zt = /a/, te = /b*/g, ee.call(Zt, "a"), ee.call(te, "a"), 0 !== Zt.lastIndex || 0 !== te.lastIndex),
      se = void 0 !== /()??/.exec("")[1];
  (ne || se) && (re = function re(t) {
    var e,
        i,
        r,
        n,
        s = this;
    return se && (i = new RegExp("^" + s.source + "$(?!\\s)", function () {
      var t = A(this),
          e = "";
      return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
    }.call(s))), ne && (e = s.lastIndex), r = ee.call(s, t), ne && r && (s.lastIndex = s.global ? r.index + r[0].length : e), se && r && r.length > 1 && ie.call(r[0], i, function () {
      for (n = 1; n < arguments.length - 2; n++) {
        void 0 === arguments[n] && (r[n] = void 0);
      }
    }), r;
  });
  var oe = re;
  Rt({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== oe
  }, {
    exec: oe
  });

  var ae = function ae(t, e, i) {
    return e + (i ? function (t, e, i) {
      var r,
          n,
          s = String(o(t)),
          a = u(e),
          l = s.length;
      return a < 0 || a >= l ? i ? "" : void 0 : (r = s.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === l || (n = s.charCodeAt(a + 1)) < 56320 || n > 57343 ? i ? s.charAt(a) : r : i ? s.slice(a, a + 2) : n - 56320 + (r - 55296 << 10) + 65536;
    }(t, e, !0).length : 1);
  },
      le = function le(t, e) {
    var i = t.exec;

    if ("function" == typeof i) {
      var n = i.call(t, e);
      if ("object" != _typeof(n)) throw TypeError("RegExp exec method returned something other than an Object or null");
      return n;
    }

    if ("RegExp" !== r(t)) throw TypeError("RegExp#exec called on incompatible receiver");
    return oe.call(t, e);
  },
      ce = I("species"),
      ue = !e(function () {
    var t = /./;
    return t.exec = function () {
      var t = [];
      return t.groups = {
        a: "7"
      }, t;
    }, "7" !== "".replace(t, "$<a>");
  }),
      he = !e(function () {
    var t = /(?:)/,
        e = t.exec;

    t.exec = function () {
      return e.apply(this, arguments);
    };

    var i = "ab".split(t);
    return 2 !== i.length || "a" !== i[0] || "b" !== i[1];
  }),
      fe = function fe(t, i, r, n) {
    var s = I(t),
        o = !e(function () {
      var e = {};
      return e[s] = function () {
        return 7;
      }, 7 != ""[t](e);
    }),
        a = o && !e(function () {
      var e = !1,
          i = /a/;
      return i.exec = function () {
        return e = !0, null;
      }, "split" === t && (i.constructor = {}, i.constructor[ce] = function () {
        return i;
      }), i[s](""), !e;
    });

    if (!o || !a || "replace" === t && !ue || "split" === t && !he) {
      var l = /./[s],
          c = r(s, ""[t], function (t, e, i, r, n) {
        return e.exec === oe ? o && !n ? {
          done: !0,
          value: l.call(e, i, r)
        } : {
          done: !0,
          value: t.call(i, e, r)
        } : {
          done: !1
        };
      }),
          u = c[0],
          h = c[1];
      dt(String.prototype, t, u), dt(RegExp.prototype, s, 2 == i ? function (t, e) {
        return h.call(t, this, e);
      } : function (t) {
        return h.call(t, this);
      }), n && T(RegExp.prototype[s], "sham", !0);
    }
  };

  fe("match", 1, function (t, e, i) {
    return [function (e) {
      var i = o(this),
          r = null == e ? void 0 : e[t];
      return void 0 !== r ? r.call(e, i) : new RegExp(e)[t](String(i));
    }, function (t) {
      var r = i(e, t, this);
      if (r.done) return r.value;
      var n = A(t),
          s = String(this);
      if (!n.global) return le(n, s);
      var o = n.unicode;
      n.lastIndex = 0;

      for (var a, l = [], c = 0; null !== (a = le(n, s));) {
        var u = String(a[0]);
        l[c] = u, "" === u && (n.lastIndex = ae(s, f(n.lastIndex), o)), c++;
      }

      return 0 === c ? null : l;
    }];
  });
  var de = Math.max,
      pe = Math.min,
      ve = Math.floor,
      ge = /\$([$&`']|\d\d?|<[^>]*>)/g,
      be = /\$([$&`']|\d\d?)/g;
  fe("replace", 2, function (t, e, i) {
    return [function (i, r) {
      var n = o(this),
          s = null == i ? void 0 : i[t];
      return void 0 !== s ? s.call(i, n, r) : e.call(String(n), i, r);
    }, function (t, n) {
      var s = i(e, t, this, n);
      if (s.done) return s.value;
      var o = A(t),
          a = String(this),
          l = "function" == typeof n;
      l || (n = String(n));
      var c = o.global;

      if (c) {
        var h = o.unicode;
        o.lastIndex = 0;
      }

      for (var d = [];;) {
        var p = le(o, a);
        if (null === p) break;
        if (d.push(p), !c) break;
        "" === String(p[0]) && (o.lastIndex = ae(a, f(o.lastIndex), h));
      }

      for (var v, g = "", b = 0, m = 0; m < d.length; m++) {
        p = d[m];

        for (var y = String(p[0]), x = de(pe(u(p.index), a.length), 0), E = [], w = 1; w < p.length; w++) {
          E.push(void 0 === (v = p[w]) ? v : String(v));
        }

        var O = p.groups;

        if (l) {
          var _ = [y].concat(E, x, a);

          void 0 !== O && _.push(O);
          var S = String(n.apply(void 0, _));
        } else S = r(y, a, x, E, O, n);

        x >= b && (g += a.slice(b, x) + S, b = x + y.length);
      }

      return g + a.slice(b);
    }];

    function r(t, i, r, n, s, o) {
      var l = r + t.length,
          c = n.length,
          u = be;
      return void 0 !== s && (s = a(s), u = ge), e.call(o, u, function (e, o) {
        var a;

        switch (o.charAt(0)) {
          case "$":
            return "$";

          case "&":
            return t;

          case "`":
            return i.slice(0, r);

          case "'":
            return i.slice(l);

          case "<":
            a = s[o.slice(1, -1)];
            break;

          default:
            var u = +o;
            if (0 === u) return e;

            if (u > c) {
              var h = ve(u / 10);
              return 0 === h ? e : h <= c ? void 0 === n[h - 1] ? o.charAt(1) : n[h - 1] + o.charAt(1) : e;
            }

            a = n[u - 1];
        }

        return void 0 === a ? "" : a;
      });
    }
  });

  for (var me in {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  }) {
    var ye = E[me],
        xe = ye && ye.prototype;
    if (xe && xe.forEach !== Dt) try {
      T(xe, "forEach", Dt);
    } catch (t) {
      xe.forEach = Dt;
    }
  }

  var Ee = g(function (t, e) {
    t.exports = function () {
      if ("undefined" == typeof document) return 0;
      var t,
          e = document.body,
          i = document.createElement("div"),
          r = i.style;
      return r.position = "absolute", r.top = r.left = "-9999px", r.width = r.height = "100px", r.overflow = "scroll", e.appendChild(i), t = i.offsetWidth - i.clientWidth, e.removeChild(i), t;
    };
  }),
      we = "Expected a function",
      Oe = NaN,
      _e = "[object Symbol]",
      Se = /^\s+|\s+$/g,
      Ae = /^[-+]0x[0-9a-f]+$/i,
      Le = /^0b[01]+$/i,
      Me = /^0o[0-7]+$/i,
      ke = parseInt,
      We = "object" == _typeof(v) && v && v.Object === Object && v,
      Te = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      je = We || Te || Function("return this")(),
      Re = Object.prototype.toString,
      Ne = Math.max,
      ze = Math.min,
      Ce = function Ce() {
    return je.Date.now();
  };

  function Ve(t, e, i) {
    var r,
        n,
        s,
        o,
        a,
        l,
        c = 0,
        u = !1,
        h = !1,
        f = !0;
    if ("function" != typeof t) throw new TypeError(we);

    function d(e) {
      var i = r,
          s = n;
      return r = n = void 0, c = e, o = t.apply(s, i);
    }

    function p(t) {
      var i = t - l;
      return void 0 === l || i >= e || i < 0 || h && t - c >= s;
    }

    function v() {
      var t = Ce();
      if (p(t)) return g(t);
      a = setTimeout(v, function (t) {
        var i = e - (t - l);
        return h ? ze(i, s - (t - c)) : i;
      }(t));
    }

    function g(t) {
      return a = void 0, f && r ? d(t) : (r = n = void 0, o);
    }

    function b() {
      var t = Ce(),
          i = p(t);

      if (r = arguments, n = this, l = t, i) {
        if (void 0 === a) return function (t) {
          return c = t, a = setTimeout(v, e), u ? d(t) : o;
        }(l);
        if (h) return a = setTimeout(v, e), d(l);
      }

      return void 0 === a && (a = setTimeout(v, e)), o;
    }

    return e = Be(e) || 0, De(i) && (u = !!i.leading, s = (h = "maxWait" in i) ? Ne(Be(i.maxWait) || 0, e) : s, f = "trailing" in i ? !!i.trailing : f), b.cancel = function () {
      void 0 !== a && clearTimeout(a), c = 0, r = l = n = a = void 0;
    }, b.flush = function () {
      return void 0 === a ? o : g(Ce());
    }, b;
  }

  function De(t) {
    var e = _typeof(t);

    return !!t && ("object" == e || "function" == e);
  }

  function Be(t) {
    if ("number" == typeof t) return t;
    if (function (t) {
      return "symbol" == _typeof(t) || function (t) {
        return !!t && "object" == _typeof(t);
      }(t) && Re.call(t) == _e;
    }(t)) return Oe;

    if (De(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = De(e) ? e + "" : e;
    }

    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Se, "");
    var i = Le.test(t);
    return i || Me.test(t) ? ke(t.slice(2), i ? 2 : 8) : Ae.test(t) ? Oe : +t;
  }

  var Ie = function Ie(t, e, i) {
    var r = !0,
        n = !0;
    if ("function" != typeof t) throw new TypeError(we);
    return De(i) && (r = "leading" in i ? !!i.leading : r, n = "trailing" in i ? !!i.trailing : n), Ve(t, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  },
      Pe = "Expected a function",
      He = NaN,
      qe = "[object Symbol]",
      Fe = /^\s+|\s+$/g,
      $e = /^[-+]0x[0-9a-f]+$/i,
      Xe = /^0b[01]+$/i,
      Ye = /^0o[0-7]+$/i,
      Ge = parseInt,
      Ke = "object" == _typeof(v) && v && v.Object === Object && v,
      Ue = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      Je = Ke || Ue || Function("return this")(),
      Qe = Object.prototype.toString,
      Ze = Math.max,
      ti = Math.min,
      ei = function ei() {
    return Je.Date.now();
  };

  function ii(t) {
    var e = _typeof(t);

    return !!t && ("object" == e || "function" == e);
  }

  function ri(t) {
    if ("number" == typeof t) return t;
    if (function (t) {
      return "symbol" == _typeof(t) || function (t) {
        return !!t && "object" == _typeof(t);
      }(t) && Qe.call(t) == qe;
    }(t)) return He;

    if (ii(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = ii(e) ? e + "" : e;
    }

    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Fe, "");
    var i = Xe.test(t);
    return i || Ye.test(t) ? Ge(t.slice(2), i ? 2 : 8) : $e.test(t) ? He : +t;
  }

  var ni = function ni(t, e, i) {
    var r,
        n,
        s,
        o,
        a,
        l,
        c = 0,
        u = !1,
        h = !1,
        f = !0;
    if ("function" != typeof t) throw new TypeError(Pe);

    function d(e) {
      var i = r,
          s = n;
      return r = n = void 0, c = e, o = t.apply(s, i);
    }

    function p(t) {
      var i = t - l;
      return void 0 === l || i >= e || i < 0 || h && t - c >= s;
    }

    function v() {
      var t = ei();
      if (p(t)) return g(t);
      a = setTimeout(v, function (t) {
        var i = e - (t - l);
        return h ? ti(i, s - (t - c)) : i;
      }(t));
    }

    function g(t) {
      return a = void 0, f && r ? d(t) : (r = n = void 0, o);
    }

    function b() {
      var t = ei(),
          i = p(t);

      if (r = arguments, n = this, l = t, i) {
        if (void 0 === a) return function (t) {
          return c = t, a = setTimeout(v, e), u ? d(t) : o;
        }(l);
        if (h) return a = setTimeout(v, e), d(l);
      }

      return void 0 === a && (a = setTimeout(v, e)), o;
    }

    return e = ri(e) || 0, ii(i) && (u = !!i.leading, s = (h = "maxWait" in i) ? Ze(ri(i.maxWait) || 0, e) : s, f = "trailing" in i ? !!i.trailing : f), b.cancel = function () {
      void 0 !== a && clearTimeout(a), c = 0, r = l = n = a = void 0;
    }, b.flush = function () {
      return void 0 === a ? o : g(ei());
    }, b;
  },
      si = "Expected a function",
      oi = "__lodash_hash_undefined__",
      ai = "[object Function]",
      li = "[object GeneratorFunction]",
      ci = /^\[object .+?Constructor\]$/,
      ui = "object" == _typeof(v) && v && v.Object === Object && v,
      hi = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      fi = ui || hi || Function("return this")();

  var di = Array.prototype,
      pi = Function.prototype,
      vi = Object.prototype,
      gi = fi["__core-js_shared__"],
      bi = function () {
    var t = /[^.]+$/.exec(gi && gi.keys && gi.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(),
      mi = pi.toString,
      yi = vi.hasOwnProperty,
      xi = vi.toString,
      Ei = RegExp("^" + mi.call(yi).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      wi = di.splice,
      Oi = Ti(fi, "Map"),
      _i = Ti(Object, "create");

  function Si(t) {
    var e = -1,
        i = t ? t.length : 0;

    for (this.clear(); ++e < i;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  function Ai(t) {
    var e = -1,
        i = t ? t.length : 0;

    for (this.clear(); ++e < i;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  function Li(t) {
    var e = -1,
        i = t ? t.length : 0;

    for (this.clear(); ++e < i;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  function Mi(t, e) {
    for (var i, r, n = t.length; n--;) {
      if ((i = t[n][0]) === (r = e) || i != i && r != r) return n;
    }

    return -1;
  }

  function ki(t) {
    return !(!Ri(t) || (e = t, bi && bi in e)) && (function (t) {
      var e = Ri(t) ? xi.call(t) : "";
      return e == ai || e == li;
    }(t) || function (t) {
      var e = !1;
      if (null != t && "function" != typeof t.toString) try {
        e = !!(t + "");
      } catch (t) {}
      return e;
    }(t) ? Ei : ci).test(function (t) {
      if (null != t) {
        try {
          return mi.call(t);
        } catch (t) {}

        try {
          return t + "";
        } catch (t) {}
      }

      return "";
    }(t));
    var e;
  }

  function Wi(t, e) {
    var i,
        r,
        n = t.__data__;
    return ("string" == (r = _typeof(i = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== i : null === i) ? n["string" == typeof e ? "string" : "hash"] : n.map;
  }

  function Ti(t, e) {
    var i = function (t, e) {
      return null == t ? void 0 : t[e];
    }(t, e);

    return ki(i) ? i : void 0;
  }

  function ji(t, e) {
    if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(si);

    var i = function i() {
      var r = arguments,
          n = e ? e.apply(this, r) : r[0],
          s = i.cache;
      if (s.has(n)) return s.get(n);
      var o = t.apply(this, r);
      return i.cache = s.set(n, o), o;
    };

    return i.cache = new (ji.Cache || Li)(), i;
  }

  function Ri(t) {
    var e = _typeof(t);

    return !!t && ("object" == e || "function" == e);
  }

  Si.prototype.clear = function () {
    this.__data__ = _i ? _i(null) : {};
  }, Si.prototype["delete"] = function (t) {
    return this.has(t) && delete this.__data__[t];
  }, Si.prototype.get = function (t) {
    var e = this.__data__;

    if (_i) {
      var i = e[t];
      return i === oi ? void 0 : i;
    }

    return yi.call(e, t) ? e[t] : void 0;
  }, Si.prototype.has = function (t) {
    var e = this.__data__;
    return _i ? void 0 !== e[t] : yi.call(e, t);
  }, Si.prototype.set = function (t, e) {
    return this.__data__[t] = _i && void 0 === e ? oi : e, this;
  }, Ai.prototype.clear = function () {
    this.__data__ = [];
  }, Ai.prototype["delete"] = function (t) {
    var e = this.__data__,
        i = Mi(e, t);
    return !(i < 0 || (i == e.length - 1 ? e.pop() : wi.call(e, i, 1), 0));
  }, Ai.prototype.get = function (t) {
    var e = this.__data__,
        i = Mi(e, t);
    return i < 0 ? void 0 : e[i][1];
  }, Ai.prototype.has = function (t) {
    return Mi(this.__data__, t) > -1;
  }, Ai.prototype.set = function (t, e) {
    var i = this.__data__,
        r = Mi(i, t);
    return r < 0 ? i.push([t, e]) : i[r][1] = e, this;
  }, Li.prototype.clear = function () {
    this.__data__ = {
      hash: new Si(),
      map: new (Oi || Ai)(),
      string: new Si()
    };
  }, Li.prototype["delete"] = function (t) {
    return Wi(this, t)["delete"](t);
  }, Li.prototype.get = function (t) {
    return Wi(this, t).get(t);
  }, Li.prototype.has = function (t) {
    return Wi(this, t).has(t);
  }, Li.prototype.set = function (t, e) {
    return Wi(this, t).set(t, e), this;
  }, ji.Cache = Li;

  var Ni = ji,
      zi = function () {
    if ("undefined" != typeof Map) return Map;

    function t(t, e) {
      var i = -1;
      return t.some(function (t, r) {
        return t[0] === e && (i = r, !0);
      }), i;
    }

    return function () {
      function e() {
        this.__entries__ = [];
      }

      return Object.defineProperty(e.prototype, "size", {
        get: function get() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.get = function (e) {
        var i = t(this.__entries__, e),
            r = this.__entries__[i];
        return r && r[1];
      }, e.prototype.set = function (e, i) {
        var r = t(this.__entries__, e);
        ~r ? this.__entries__[r][1] = i : this.__entries__.push([e, i]);
      }, e.prototype["delete"] = function (e) {
        var i = this.__entries__,
            r = t(i, e);
        ~r && i.splice(r, 1);
      }, e.prototype.has = function (e) {
        return !!~t(this.__entries__, e);
      }, e.prototype.clear = function () {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function (t, e) {
        void 0 === e && (e = null);

        for (var i = 0, r = this.__entries__; i < r.length; i++) {
          var n = r[i];
          t.call(e, n[1], n[0]);
        }
      }, e;
    }();
  }(),
      Ci = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
      Vi = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
      Di = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Vi) : function (t) {
    return setTimeout(function () {
      return t(Date.now());
    }, 1e3 / 60);
  },
      Bi = 2;

  var Ii = 20,
      Pi = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Hi = "undefined" != typeof MutationObserver,
      qi = function () {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) {
        var i = !1,
            r = !1,
            n = 0;

        function s() {
          i && (i = !1, t()), r && a();
        }

        function o() {
          Di(s);
        }

        function a() {
          var t = Date.now();

          if (i) {
            if (t - n < Bi) return;
            r = !0;
          } else i = !0, r = !1, setTimeout(o, e);

          n = t;
        }

        return a;
      }(this.refresh.bind(this), Ii);
    }

    return t.prototype.addObserver = function (t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function (t) {
      var e = this.observers_,
          i = e.indexOf(t);
      ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function () {
      this.updateObservers_() && this.refresh();
    }, t.prototype.updateObservers_ = function () {
      var t = this.observers_.filter(function (t) {
        return t.gatherActive(), t.hasActive();
      });
      return t.forEach(function (t) {
        return t.broadcastActive();
      }), t.length > 0;
    }, t.prototype.connect_ = function () {
      Ci && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Hi ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function () {
      Ci && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function (t) {
      var e = t.propertyName,
          i = void 0 === e ? "" : e;
      Pi.some(function (t) {
        return !!~i.indexOf(t);
      }) && this.refresh();
    }, t.getInstance = function () {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }(),
      Fi = function Fi(t, e) {
    for (var i = 0, r = Object.keys(e); i < r.length; i++) {
      var n = r[i];
      Object.defineProperty(t, n, {
        value: e[n],
        enumerable: !1,
        writable: !1,
        configurable: !0
      });
    }

    return t;
  },
      $i = function $i(t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView || Vi;
  },
      Xi = Qi(0, 0, 0, 0);

  function Yi(t) {
    return parseFloat(t) || 0;
  }

  function Gi(t) {
    for (var e = [], i = 1; i < arguments.length; i++) {
      e[i - 1] = arguments[i];
    }

    return e.reduce(function (e, i) {
      return e + Yi(t["border-" + i + "-width"]);
    }, 0);
  }

  function Ki(t) {
    var e = t.clientWidth,
        i = t.clientHeight;
    if (!e && !i) return Xi;

    var r = $i(t).getComputedStyle(t),
        n = function (t) {
      for (var e = {}, i = 0, r = ["top", "right", "bottom", "left"]; i < r.length; i++) {
        var n = r[i],
            s = t["padding-" + n];
        e[n] = Yi(s);
      }

      return e;
    }(r),
        s = n.left + n.right,
        o = n.top + n.bottom,
        a = Yi(r.width),
        l = Yi(r.height);

    if ("border-box" === r.boxSizing && (Math.round(a + s) !== e && (a -= Gi(r, "left", "right") + s), Math.round(l + o) !== i && (l -= Gi(r, "top", "bottom") + o)), !function (t) {
      return t === $i(t).document.documentElement;
    }(t)) {
      var c = Math.round(a + s) - e,
          u = Math.round(l + o) - i;
      1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(u) && (l -= u);
    }

    return Qi(n.left, n.top, a, l);
  }

  var Ui = "undefined" != typeof SVGGraphicsElement ? function (t) {
    return t instanceof $i(t).SVGGraphicsElement;
  } : function (t) {
    return t instanceof $i(t).SVGElement && "function" == typeof t.getBBox;
  };

  function Ji(t) {
    return Ci ? Ui(t) ? function (t) {
      var e = t.getBBox();
      return Qi(0, 0, e.width, e.height);
    }(t) : Ki(t) : Xi;
  }

  function Qi(t, e, i, r) {
    return {
      x: t,
      y: e,
      width: i,
      height: r
    };
  }

  var Zi = function () {
    function t(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Qi(0, 0, 0, 0), this.target = t;
    }

    return t.prototype.isActive = function () {
      var t = Ji(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function () {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, t;
  }(),
      tr = function () {
    return function (t, e) {
      var i,
          r,
          n,
          s,
          o,
          a,
          l,
          c = (r = (i = e).x, n = i.y, s = i.width, o = i.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(a.prototype), Fi(l, {
        x: r,
        y: n,
        width: s,
        height: o,
        top: n,
        right: r + s,
        bottom: o + n,
        left: r
      }), l);
      Fi(this, {
        target: t,
        contentRect: c
      });
    };
  }(),
      er = function () {
    function t(t, e, i) {
      if (this.activeObservations_ = [], this.observations_ = new zi(), "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i;
    }

    return t.prototype.observe = function (t) {
      if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");

      if ("undefined" != typeof Element && Element instanceof Object) {
        if (!(t instanceof $i(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(t) || (e.set(t, new Zi(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function (t) {
      if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");

      if ("undefined" != typeof Element && Element instanceof Object) {
        if (!(t instanceof $i(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(t) && (e["delete"](t), e.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function () {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function () {
      var t = this;
      this.clearActive(), this.observations_.forEach(function (e) {
        e.isActive() && t.activeObservations_.push(e);
      });
    }, t.prototype.broadcastActive = function () {
      if (this.hasActive()) {
        var t = this.callbackCtx_,
            e = this.activeObservations_.map(function (t) {
          return new tr(t.target, t.broadcastRect());
        });
        this.callback_.call(t, e, t), this.clearActive();
      }
    }, t.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    }, t;
  }(),
      ir = "undefined" != typeof WeakMap ? new WeakMap() : new zi(),
      rr = function () {
    return function t(e) {
      if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
      var i = qi.getInstance(),
          r = new er(e, i, this);
      ir.set(this, r);
    };
  }();

  ["observe", "unobserve", "disconnect"].forEach(function (t) {
    rr.prototype[t] = function () {
      var e;
      return (e = ir.get(this))[t].apply(e, arguments);
    };
  });

  var nr = void 0 !== Vi.ResizeObserver ? Vi.ResizeObserver : rr,
      sr = !("undefined" == typeof window || !window.document || !window.document.createElement),
      or = function () {
    function t(e, i) {
      var r = this;
      this.onScroll = function () {
        r.scrollXTicking || (window.requestAnimationFrame(r.scrollX), r.scrollXTicking = !0), r.scrollYTicking || (window.requestAnimationFrame(r.scrollY), r.scrollYTicking = !0);
      }, this.scrollX = function () {
        r.axis.x.isOverflowing && (r.showScrollbar("x"), r.positionScrollbar("x")), r.scrollXTicking = !1;
      }, this.scrollY = function () {
        r.axis.y.isOverflowing && (r.showScrollbar("y"), r.positionScrollbar("y")), r.scrollYTicking = !1;
      }, this.onMouseEnter = function () {
        r.showScrollbar("x"), r.showScrollbar("y");
      }, this.onMouseMove = function (t) {
        r.mouseX = t.clientX, r.mouseY = t.clientY, (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseMoveForAxis("x"), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseMoveForAxis("y");
      }, this.onMouseLeave = function () {
        r.onMouseMove.cancel(), (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseLeaveForAxis("x"), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseLeaveForAxis("y"), r.mouseX = -1, r.mouseY = -1;
      }, this.onWindowResize = function () {
        r.scrollbarWidth = Ee(), r.hideNativeScrollbar();
      }, this.hideScrollbars = function () {
        r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect(), r.axis.y.track.rect = r.axis.y.track.el.getBoundingClientRect(), r.isWithinBounds(r.axis.y.track.rect) || (r.axis.y.scrollbar.el.classList.remove(r.classNames.visible), r.axis.y.isVisible = !1), r.isWithinBounds(r.axis.x.track.rect) || (r.axis.x.scrollbar.el.classList.remove(r.classNames.visible), r.axis.x.isVisible = !1);
      }, this.onPointerEvent = function (t) {
        var e, i;
        r.axis.x.scrollbar.rect = r.axis.x.scrollbar.el.getBoundingClientRect(), r.axis.y.scrollbar.rect = r.axis.y.scrollbar.el.getBoundingClientRect(), (r.axis.x.isOverflowing || r.axis.x.forceVisible) && (i = r.isWithinBounds(r.axis.x.scrollbar.rect)), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && (e = r.isWithinBounds(r.axis.y.scrollbar.rect)), (e || i) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && r.onDragStart(t, "y"), i && r.onDragStart(t, "x")));
      }, this.drag = function (e) {
        var i = r.axis[r.draggedAxis].track,
            n = i.rect[r.axis[r.draggedAxis].sizeAttr],
            s = r.axis[r.draggedAxis].scrollbar;
        e.preventDefault(), e.stopPropagation();
        var o = (("y" === r.draggedAxis ? e.pageY : e.pageX) - i.rect[r.axis[r.draggedAxis].offsetAttr] - r.axis[r.draggedAxis].dragOffset) / i.rect[r.axis[r.draggedAxis].sizeAttr] * r.contentWrapperEl[r.axis[r.draggedAxis].scrollSizeAttr];
        "x" === r.draggedAxis && (o = r.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? o - (n + s.size) : o, o = r.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -o : o), r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr] = o;
      }, this.onEndDrag = function (t) {
        t.preventDefault(), t.stopPropagation(), r.el.classList.remove(r.classNames.dragging), document.removeEventListener("mousemove", r.drag), document.removeEventListener("mouseup", r.onEndDrag);
      }, this.el = e, this.flashTimeout, this.contentEl, this.contentWrapperEl, this.offsetEl, this.maskEl, this.globalObserver, this.mutationObserver, this.resizeObserver, this.scrollbarWidth, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, i), this.classNames = Object.assign({}, t.defaultOptions.classNames, this.options.classNames), this.isRtl, this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: !0,
          isVisible: !1,
          forceVisible: !1,
          track: {},
          scrollbar: {}
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: !0,
          isVisible: !1,
          forceVisible: !1,
          track: {},
          scrollbar: {}
        }
      }, this.el.SimpleBar || (this.recalculate = Ie(this.recalculate.bind(this), 64), this.onMouseMove = Ie(this.onMouseMove.bind(this), 64), this.hideScrollbars = ni(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = ni(this.onWindowResize.bind(this), 64, {
        leading: !0
      }), t.getRtlHelpers = Ni(t.getRtlHelpers), this.init());
    }

    t.getRtlHelpers = function () {
      var e = document.createElement("div");
      e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
      var i = e.firstElementChild;
      document.body.appendChild(i);
      var r = i.firstElementChild;
      i.scrollLeft = 0;
      var n = t.getOffset(i),
          s = t.getOffset(r);
      i.scrollLeft = 999;
      var o = t.getOffset(r);
      return {
        isRtlScrollingInverted: n.left !== s.left && s.left - o.left != 0,
        isRtlScrollbarInverted: n.left !== s.left
      };
    }, t.initHtmlApi = function () {
      this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(function (e) {
        e.forEach(function (e) {
          Array.prototype.forEach.call(e.addedNodes, function (e) {
            1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !e.SimpleBar && new t(e, t.getElOptions(e)) : Array.prototype.forEach.call(e.querySelectorAll("[data-simplebar]"), function (e) {
              !e.SimpleBar && new t(e, t.getElOptions(e));
            }));
          }), Array.prototype.forEach.call(e.removedNodes, function (t) {
            1 === t.nodeType && (t.hasAttribute("data-simplebar") ? t.SimpleBar && t.SimpleBar.unMount() : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), function (t) {
              t.SimpleBar && t.SimpleBar.unMount();
            }));
          });
        });
      }), this.globalObserver.observe(document, {
        childList: !0,
        subtree: !0
      })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements));
    }, t.getElOptions = function (t) {
      return Array.prototype.reduce.call(t.attributes, function (t, e) {
        var i = e.name.match(/data-simplebar-(.+)/);

        if (i) {
          var r = i[1].replace(/\W+(.)/g, function (t, e) {
            return e.toUpperCase();
          });

          switch (e.value) {
            case "true":
              t[r] = !0;
              break;

            case "false":
              t[r] = !1;
              break;

            case void 0:
              t[r] = !0;
              break;

            default:
              t[r] = e.value;
          }
        }

        return t;
      }, {});
    }, t.removeObserver = function () {
      this.globalObserver.disconnect();
    }, t.initDOMLoadedElements = function () {
      document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function (e) {
        e.SimpleBar || new t(e, t.getElOptions(e));
      });
    }, t.getOffset = function (t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + (window.pageYOffset || document.documentElement.scrollTop),
        left: e.left + (window.pageXOffset || document.documentElement.scrollLeft)
      };
    };
    var e = t.prototype;
    return e.init = function () {
      this.el.SimpleBar = this, sr && (this.initDOM(), this.scrollbarWidth = Ee(), this.recalculate(), this.initListeners());
    }, e.initDOM = function () {
      var t = this;
      if (Array.prototype.filter.call(this.el.children, function (e) {
        return e.classList.contains(t.classNames.wrapper);
      }).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.el.querySelector("." + this.classNames.contentWrapper), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.contentEl = this.el.querySelector("." + this.classNames.contentEl), this.placeholderEl = this.el.querySelector("." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.el.querySelector("." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.el.querySelector("." + this.classNames.track + "." + this.classNames.vertical);else {
        for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) {
          this.contentEl.appendChild(this.el.firstChild);
        }

        this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl);
      }

      if (!this.axis.x.track.el || !this.axis.y.track.el) {
        var e = document.createElement("div"),
            i = document.createElement("div");
        e.classList.add(this.classNames.track), i.classList.add(this.classNames.scrollbar), e.appendChild(i), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el);
      }

      this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init");
    }, e.initListeners = function () {
      var t = this;
      this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick", "touchstart", "touchend", "touchmove"].forEach(function (e) {
        t.el.addEventListener(e, t.onPointerEvent, !0);
      }), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), window.addEventListener("resize", this.onWindowResize), this.resizeObserver = new nr(this.recalculate), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl);
    }, e.recalculate = function () {
      var t = this.heightAutoObserverEl.offsetHeight <= 1,
          e = this.heightAutoObserverEl.offsetWidth <= 1;
      this.elStyles = window.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction, this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft, this.contentWrapperEl.style.height = t ? "auto" : "100%", this.placeholderEl.style.width = e ? this.contentEl.offsetWidth + "px" : "auto", this.placeholderEl.style.height = this.contentEl.scrollHeight + "px", this.axis.x.isOverflowing = this.contentWrapperEl.scrollWidth > this.contentWrapperEl.offsetWidth, this.axis.y.isOverflowing = this.contentWrapperEl.scrollHeight > this.contentWrapperEl.offsetHeight, this.axis.x.isOverflowing = "hidden" !== this.elStyles.overflowX && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== this.elStyles.overflowY && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar(), this.axis.x.track.rect = this.axis.x.track.el.getBoundingClientRect(), this.axis.y.track.rect = this.axis.y.track.el.getBoundingClientRect(), this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y");
    }, e.getScrollbarSize = function (t) {
      void 0 === t && (t = "y");
      var e,
          i = this.scrollbarWidth ? this.contentWrapperEl[this.axis[t].scrollSizeAttr] : this.contentWrapperEl[this.axis[t].scrollSizeAttr] - this.minScrollbarWidth,
          r = this.axis[t].track.rect[this.axis[t].sizeAttr];

      if (this.axis[t].isOverflowing) {
        var n = r / i;
        return e = Math.max(~~(n * r), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e;
      }
    }, e.positionScrollbar = function (e) {
      void 0 === e && (e = "y");
      var i = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
          r = this.axis[e].track.rect[this.axis[e].sizeAttr],
          n = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
          s = this.axis[e].scrollbar,
          o = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
          a = (o = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -o : o) / (i - n),
          l = ~~((r - s.size) * a);
      l = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? l + (r - s.size) : l, s.el.style.transform = "x" === e ? "translate3d(" + l + "px, 0, 0)" : "translate3d(0, " + l + "px, 0)";
    }, e.toggleTrackVisibility = function (t) {
      void 0 === t && (t = "y");
      var e = this.axis[t].track.el,
          i = this.axis[t].scrollbar.el;
      this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? i.style.display = "block" : i.style.display = "none";
    }, e.hideNativeScrollbar = function () {
      if (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + (this.scrollbarWidth || this.minScrollbarWidth) + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + (this.scrollbarWidth || this.minScrollbarWidth) + "px" : 0, !this.scrollbarWidth) {
        var t = [this.isRtl ? "paddingLeft" : "paddingRight"];
        this.contentWrapperEl.style[t] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? this.minScrollbarWidth + "px" : 0, this.contentWrapperEl.style.paddingBottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? this.minScrollbarWidth + "px" : 0;
      }
    }, e.onMouseMoveForAxis = function (t) {
      void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover);
    }, e.onMouseLeaveForAxis = function (t) {
      void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover);
    }, e.showScrollbar = function (t) {
      void 0 === t && (t = "y");
      var e = this.axis[t].scrollbar.el;
      this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars();
    }, e.onDragStart = function (t, e) {
      void 0 === e && (e = "y");
      var i = this.axis[e].scrollbar.el,
          r = "y" === e ? t.pageY : t.pageX;
      this.axis[e].dragOffset = r - i.getBoundingClientRect()[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), document.addEventListener("mousemove", this.drag), document.addEventListener("mouseup", this.onEndDrag);
    }, e.getContentElement = function () {
      return this.contentEl;
    }, e.getScrollElement = function () {
      return this.contentWrapperEl;
    }, e.removeListeners = function () {
      var t = this;
      this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick", "touchstart", "touchend", "touchmove"].forEach(function (e) {
        t.el.removeEventListener(e, t.onPointerEvent);
      }), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel();
    }, e.unMount = function () {
      this.removeListeners(), this.el.SimpleBar = null;
    }, e.isChildNode = function (t) {
      return null !== t && (t === this.el || this.isChildNode(t.parentNode));
    }, e.isWithinBounds = function (t) {
      return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height;
    }, t;
  }();

  return or.defaultOptions = {
    autoHide: !0,
    forceVisible: !1,
    classNames: {
      contentEl: "simplebar-content",
      contentWrapper: "simplebar-content-wrapper",
      offset: "simplebar-offset",
      mask: "simplebar-mask",
      wrapper: "simplebar-wrapper",
      placeholder: "simplebar-placeholder",
      scrollbar: "simplebar-scrollbar",
      track: "simplebar-track",
      heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
      heightAutoObserverEl: "simplebar-height-auto-observer",
      visible: "simplebar-visible",
      horizontal: "simplebar-horizontal",
      vertical: "simplebar-vertical",
      hover: "simplebar-hover",
      dragging: "simplebar-dragging"
    },
    scrollbarMinSize: 25,
    scrollbarMaxSize: 0,
    timeout: 1e3
  }, sr && or.initHtmlApi(), or;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZWJhci5taW4uanMiXSwibmFtZXMiOlsidCIsImUiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwic2VsZiIsIlNpbXBsZUJhciIsIlR5cGVFcnJvciIsIlN0cmluZyIsImkiLCJ0b1N0cmluZyIsInIiLCJjYWxsIiwic2xpY2UiLCJuIiwic3BsaXQiLCJzIiwiT2JqZWN0IiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJvIiwiYSIsImwiLCJNYXRoIiwiY2VpbCIsImMiLCJmbG9vciIsInUiLCJpc05hTiIsImgiLCJtaW4iLCJmIiwiZCIsInAiLCJBcnJheSIsImlzQXJyYXkiLCJ2IiwiZ2xvYmFsVGhpcyIsIndpbmRvdyIsImdsb2JhbCIsImciLCJiIiwibSIsInkiLCJ4IiwiRSIsIkZ1bmN0aW9uIiwidyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiTyIsImRvY3VtZW50IiwiXyIsImNyZWF0ZUVsZW1lbnQiLCJTIiwiQSIsIkwiLCJ2YWx1ZU9mIiwiTSIsImsiLCJ2YWx1ZSIsIlciLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJUIiwiaiIsIlIiLCJwdXNoIiwidmVyc2lvbiIsIm1vZGUiLCJjb3B5cmlnaHQiLCJOIiwieiIsInJhbmRvbSIsIkMiLCJjb25jYXQiLCJWIiwiU3ltYm9sIiwiRCIsIkIiLCJJIiwiUCIsIkgiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsInEiLCJhcHBseSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkYiLCIkIiwiWCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlkiLCJHIiwiSyIsImhhc093blByb3BlcnR5IiwiVSIsIkoiLCJRIiwiWiIsInR0IiwiV2Vha01hcCIsImV0IiwidGVzdCIsIml0IiwicnQiLCJudCIsInN0Iiwib3QiLCJhdCIsImhhcyIsImx0Iiwic2V0IiwiY3QiLCJ1dCIsImh0IiwiZnQiLCJlbmZvcmNlIiwiZ2V0dGVyRm9yIiwidHlwZSIsImR0IiwidW5zYWZlIiwibm9UYXJnZXRHZXQiLCJzb3VyY2UiLCJqb2luIiwicHQiLCJtYXgiLCJ2dCIsImd0IiwiYnQiLCJtdCIsInl0IiwieHQiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiRXQiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJ3dCIsIlJlZmxlY3QiLCJPdCIsIm93bktleXMiLCJfdCIsIlN0IiwiQXQiLCJNdCIsIkx0IiwiV3QiLCJrdCIsIm5vcm1hbGl6ZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImRhdGEiLCJOQVRJVkUiLCJQT0xZRklMTCIsIlR0IiwianQiLCJSdCIsInRhcmdldCIsInN0YXQiLCJmb3JjZWQiLCJzaGFtIiwiTnQiLCJwcm90byIsImZvbyIsIkJvb2xlYW4iLCJmaWx0ZXIiLCJ6dCIsIkN0IiwiZm9yRWFjaCIsIlZ0IiwiRHQiLCJyZWR1Y2UiLCJCdCIsIkl0IiwiUHQiLCJIdCIsIm1hdGNoIiwicXQiLCJrZXlzIiwiRnQiLCJhc3NpZ24iLCIkdCIsIlh0IiwiWXQiLCJHdCIsIlJlZ0V4cCIsIkt0IiwiVXQiLCJwYXJzZUludCIsIkp0IiwiUXQiLCJadCIsInRlIiwiZWUiLCJleGVjIiwiaWUiLCJyZSIsIm5lIiwibGFzdEluZGV4Iiwic2UiLCJpZ25vcmVDYXNlIiwibXVsdGlsaW5lIiwidW5pY29kZSIsInN0aWNreSIsImluZGV4Iiwib2UiLCJhZSIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJsZSIsImNlIiwidWUiLCJncm91cHMiLCJoZSIsImZlIiwiZG9uZSIsImRlIiwicGUiLCJ2ZSIsImdlIiwiYmUiLCJtZSIsIkNTU1J1bGVMaXN0IiwiQ1NTU3R5bGVEZWNsYXJhdGlvbiIsIkNTU1ZhbHVlTGlzdCIsIkNsaWVudFJlY3RMaXN0IiwiRE9NUmVjdExpc3QiLCJET01TdHJpbmdMaXN0IiwiRE9NVG9rZW5MaXN0IiwiRGF0YVRyYW5zZmVySXRlbUxpc3QiLCJGaWxlTGlzdCIsIkhUTUxBbGxDb2xsZWN0aW9uIiwiSFRNTENvbGxlY3Rpb24iLCJIVE1MRm9ybUVsZW1lbnQiLCJIVE1MU2VsZWN0RWxlbWVudCIsIk1lZGlhTGlzdCIsIk1pbWVUeXBlQXJyYXkiLCJOYW1lZE5vZGVNYXAiLCJOb2RlTGlzdCIsIlBhaW50UmVxdWVzdExpc3QiLCJQbHVnaW4iLCJQbHVnaW5BcnJheSIsIlNWR0xlbmd0aExpc3QiLCJTVkdOdW1iZXJMaXN0IiwiU1ZHUGF0aFNlZ0xpc3QiLCJTVkdQb2ludExpc3QiLCJTVkdTdHJpbmdMaXN0IiwiU1ZHVHJhbnNmb3JtTGlzdCIsIlNvdXJjZUJ1ZmZlckxpc3QiLCJTdHlsZVNoZWV0TGlzdCIsIlRleHRUcmFja0N1ZUxpc3QiLCJUZXh0VHJhY2tMaXN0IiwiVG91Y2hMaXN0IiwieWUiLCJ4ZSIsIkVlIiwiYm9keSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImFwcGVuZENoaWxkIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNoaWxkIiwid2UiLCJPZSIsIk5hTiIsIl9lIiwiU2UiLCJBZSIsIkxlIiwiTWUiLCJrZSIsIldlIiwiVGUiLCJqZSIsIlJlIiwiTmUiLCJ6ZSIsIkNlIiwiRGF0ZSIsIm5vdyIsIlZlIiwic2V0VGltZW91dCIsIkJlIiwiRGUiLCJsZWFkaW5nIiwibWF4V2FpdCIsInRyYWlsaW5nIiwiY2FuY2VsIiwiY2xlYXJUaW1lb3V0IiwiZmx1c2giLCJJZSIsIlBlIiwiSGUiLCJxZSIsIkZlIiwiJGUiLCJYZSIsIlllIiwiR2UiLCJLZSIsIlVlIiwiSmUiLCJRZSIsIlplIiwidGkiLCJlaSIsImlpIiwicmkiLCJuaSIsInNpIiwib2kiLCJhaSIsImxpIiwiY2kiLCJ1aSIsImhpIiwiZmkiLCJkaSIsInBpIiwidmkiLCJnaSIsImJpIiwiSUVfUFJPVE8iLCJtaSIsInlpIiwieGkiLCJFaSIsIndpIiwic3BsaWNlIiwiT2kiLCJUaSIsIl9pIiwiU2kiLCJjbGVhciIsIkFpIiwiTGkiLCJNaSIsImtpIiwiUmkiLCJXaSIsIl9fZGF0YV9fIiwibWFwIiwiamkiLCJjYWNoZSIsIkNhY2hlIiwicG9wIiwiaGFzaCIsInN0cmluZyIsIk5pIiwiemkiLCJNYXAiLCJzb21lIiwiX19lbnRyaWVzX18iLCJDaSIsIlZpIiwiRGkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiQmkiLCJJaSIsIlBpIiwiSGkiLCJNdXRhdGlvbk9ic2VydmVyIiwicWkiLCJjb25uZWN0ZWRfIiwibXV0YXRpb25FdmVudHNBZGRlZF8iLCJtdXRhdGlvbnNPYnNlcnZlcl8iLCJvYnNlcnZlcnNfIiwib25UcmFuc2l0aW9uRW5kXyIsInJlZnJlc2giLCJhZGRPYnNlcnZlciIsImluZGV4T2YiLCJjb25uZWN0XyIsInJlbW92ZU9ic2VydmVyIiwiZGlzY29ubmVjdF8iLCJ1cGRhdGVPYnNlcnZlcnNfIiwiZ2F0aGVyQWN0aXZlIiwiaGFzQWN0aXZlIiwiYnJvYWRjYXN0QWN0aXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGlzY29ubmVjdCIsInByb3BlcnR5TmFtZSIsImdldEluc3RhbmNlIiwiaW5zdGFuY2VfIiwiRmkiLCIkaSIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsIlhpIiwiUWkiLCJZaSIsInBhcnNlRmxvYXQiLCJHaSIsIktpIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInJpZ2h0IiwiYm90dG9tIiwiYm94U2l6aW5nIiwicm91bmQiLCJkb2N1bWVudEVsZW1lbnQiLCJhYnMiLCJVaSIsIlNWR0dyYXBoaWNzRWxlbWVudCIsIlNWR0VsZW1lbnQiLCJnZXRCQm94IiwiSmkiLCJaaSIsImJyb2FkY2FzdFdpZHRoIiwiYnJvYWRjYXN0SGVpZ2h0IiwiY29udGVudFJlY3RfIiwiaXNBY3RpdmUiLCJicm9hZGNhc3RSZWN0IiwidHIiLCJET01SZWN0UmVhZE9ubHkiLCJjcmVhdGUiLCJjb250ZW50UmVjdCIsImVyIiwiYWN0aXZlT2JzZXJ2YXRpb25zXyIsIm9ic2VydmF0aW9uc18iLCJjYWxsYmFja18iLCJjb250cm9sbGVyXyIsImNhbGxiYWNrQ3R4XyIsIkVsZW1lbnQiLCJ1bm9ic2VydmUiLCJzaXplIiwiY2xlYXJBY3RpdmUiLCJpciIsInJyIiwibnIiLCJSZXNpemVPYnNlcnZlciIsInNyIiwib3IiLCJvblNjcm9sbCIsInNjcm9sbFhUaWNraW5nIiwic2Nyb2xsWCIsInNjcm9sbFlUaWNraW5nIiwic2Nyb2xsWSIsImF4aXMiLCJpc092ZXJmbG93aW5nIiwic2hvd1Njcm9sbGJhciIsInBvc2l0aW9uU2Nyb2xsYmFyIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZVgiLCJjbGllbnRYIiwibW91c2VZIiwiY2xpZW50WSIsImZvcmNlVmlzaWJsZSIsIm9uTW91c2VNb3ZlRm9yQXhpcyIsIm9uTW91c2VMZWF2ZSIsIm9uTW91c2VMZWF2ZUZvckF4aXMiLCJvbldpbmRvd1Jlc2l6ZSIsInNjcm9sbGJhcldpZHRoIiwiaGlkZU5hdGl2ZVNjcm9sbGJhciIsImhpZGVTY3JvbGxiYXJzIiwidHJhY2siLCJyZWN0IiwiZWwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpc1dpdGhpbkJvdW5kcyIsInNjcm9sbGJhciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNsYXNzTmFtZXMiLCJ2aXNpYmxlIiwiaXNWaXNpYmxlIiwib25Qb2ludGVyRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uRHJhZ1N0YXJ0IiwiZHJhZyIsImRyYWdnZWRBeGlzIiwic2l6ZUF0dHIiLCJwYWdlWSIsInBhZ2VYIiwib2Zmc2V0QXR0ciIsImRyYWdPZmZzZXQiLCJjb250ZW50V3JhcHBlckVsIiwic2Nyb2xsU2l6ZUF0dHIiLCJpc1J0bCIsImdldFJ0bEhlbHBlcnMiLCJpc1J0bFNjcm9sbGJhckludmVydGVkIiwiaXNSdGxTY3JvbGxpbmdJbnZlcnRlZCIsInNjcm9sbE9mZnNldEF0dHIiLCJvbkVuZERyYWciLCJkcmFnZ2luZyIsImZsYXNoVGltZW91dCIsImNvbnRlbnRFbCIsIm9mZnNldEVsIiwibWFza0VsIiwiZ2xvYmFsT2JzZXJ2ZXIiLCJtdXRhdGlvbk9ic2VydmVyIiwicmVzaXplT2JzZXJ2ZXIiLCJtaW5TY3JvbGxiYXJXaWR0aCIsIm9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsIm92ZXJmbG93QXR0ciIsInJlY2FsY3VsYXRlIiwidGltZW91dCIsImluaXQiLCJpbm5lckhUTUwiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInNjcm9sbExlZnQiLCJnZXRPZmZzZXQiLCJpbml0SHRtbEFwaSIsImluaXRET01Mb2FkZWRFbGVtZW50cyIsImFkZGVkTm9kZXMiLCJub2RlVHlwZSIsImhhc0F0dHJpYnV0ZSIsImdldEVsT3B0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVkTm9kZXMiLCJ1bk1vdW50IiwicmVhZHlTdGF0ZSIsImRvU2Nyb2xsIiwibmFtZSIsInRvVXBwZXJDYXNlIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJwYWdlWE9mZnNldCIsImluaXRET00iLCJpbml0TGlzdGVuZXJzIiwiY2hpbGRyZW4iLCJjb250YWlucyIsIndyYXBwZXIiLCJ3cmFwcGVyRWwiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudFdyYXBwZXIiLCJvZmZzZXQiLCJtYXNrIiwicGxhY2Vob2xkZXJFbCIsInBsYWNlaG9sZGVyIiwiaGVpZ2h0QXV0b09ic2VydmVyV3JhcHBlckVsIiwiaGVpZ2h0QXV0b09ic2VydmVyRWwiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJhZGQiLCJmaXJzdENoaWxkIiwiY2xvbmVOb2RlIiwiYXV0b0hpZGUiLCJzZXRBdHRyaWJ1dGUiLCJvZmZzZXRIZWlnaHQiLCJlbFN0eWxlcyIsImRpcmVjdGlvbiIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwibWFyZ2luIiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsV2lkdGgiLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJnZXRTY3JvbGxiYXJTaXplIiwidG9nZ2xlVHJhY2tWaXNpYmlsaXR5Iiwic2Nyb2xsYmFyTWluU2l6ZSIsInNjcm9sbGJhck1heFNpemUiLCJ0cmFuc2Zvcm0iLCJ2aXNpYmlsaXR5IiwiZGlzcGxheSIsImhvdmVyIiwiZ2V0Q29udGVudEVsZW1lbnQiLCJnZXRTY3JvbGxFbGVtZW50IiwicmVtb3ZlTGlzdGVuZXJzIiwiaXNDaGlsZE5vZGUiLCJwYXJlbnROb2RlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7O0FBU0EsQ0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLHNCQUFpQkMsT0FBakIseUNBQWlCQSxPQUFqQixNQUEwQixlQUFhLE9BQU9DLE1BQTlDLEdBQXFEQSxNQUFNLENBQUNELE9BQVAsR0FBZUQsQ0FBQyxFQUFyRSxHQUF3RSxjQUFZLE9BQU9HLE1BQW5CLElBQTJCQSxNQUFNLENBQUNDLEdBQWxDLEdBQXNDRCxNQUFNLENBQUNILENBQUQsQ0FBNUMsR0FBZ0QsQ0FBQ0QsQ0FBQyxHQUFDQSxDQUFDLElBQUVNLElBQU4sRUFBWUMsU0FBWixHQUFzQk4sQ0FBQyxFQUEvSTtBQUFrSixDQUFoSyxTQUFzSyxZQUFVO0FBQUM7O0FBQWEsTUFBSUQsQ0FBQyxHQUFDLFdBQVNBLEdBQVQsRUFBVztBQUFDLFFBQUcsY0FBWSxPQUFPQSxHQUF0QixFQUF3QixNQUFNUSxTQUFTLENBQUNDLE1BQU0sQ0FBQ1QsR0FBRCxDQUFOLEdBQVUsb0JBQVgsQ0FBZjtBQUFnRCxXQUFPQSxHQUFQO0FBQVMsR0FBbkc7QUFBQSxNQUFvR0MsQ0FBQyxHQUFDLFNBQUZBLENBQUUsQ0FBU0QsQ0FBVCxFQUFXO0FBQUMsUUFBRztBQUFDLGFBQU0sQ0FBQyxDQUFDQSxDQUFDLEVBQVQ7QUFBWSxLQUFoQixDQUFnQixPQUFNQSxDQUFOLEVBQVE7QUFBQyxhQUFNLENB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TUFBQUEsS0FBSyxFQUFDLGlCQUEvYztBQUFpZTVFLE1BQUFBLFFBQVEsRUFBQztBQUExZSxLQUF4QztBQUF3aUJ1RSxJQUFBQSxnQkFBZ0IsRUFBQyxFQUF6akI7QUFBNGpCQyxJQUFBQSxnQkFBZ0IsRUFBQyxDQUE3a0I7QUFBK2tCM0QsSUFBQUEsT0FBTyxFQUFDO0FBQXZsQixHQUFsQixFQUE4bUJwRSxFQUFFLElBQUVDLEVBQUUsQ0FBQ3lFLFdBQUgsRUFBbG5CLEVBQW1vQnpFLEVBQTFvQjtBQUE2b0IsQ0FBL3E0QyxDQUFEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaW1wbGVCYXIuanMgLSB2NC4wLjAtYWxwaGEuNVxuICogU2Nyb2xsYmFycywgc2ltcGxlci5cbiAqIGh0dHBzOi8vZ3JzbXRvLmdpdGh1Yi5pby9zaW1wbGViYXIvXG4gKlxuICogTWFkZSBieSBBZHJpZW4gRGVuYXQgZnJvbSBhIGZvcmsgYnkgSm9uYXRoYW4gTmljb2xcbiAqIFVuZGVyIE1JVCBMaWNlbnNlXG4gKi9cblxuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9dHx8c2VsZikuU2ltcGxlQmFyPWUoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKFN0cmluZyh0KStcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtyZXR1cm4gdH0sZT1mdW5jdGlvbih0KXt0cnl7cmV0dXJuISF0KCl9Y2F0Y2godCl7cmV0dXJuITB9fSxpPXt9LnRvU3RyaW5nLHI9ZnVuY3Rpb24odCl7cmV0dXJuIGkuY2FsbCh0KS5zbGljZSg4LC0xKX0sbj1cIlwiLnNwbGl0LHM9ZShmdW5jdGlvbigpe3JldHVybiFPYmplY3QoXCJ6XCIpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApfSk/ZnVuY3Rpb24odCl7cmV0dXJuXCJTdHJpbmdcIj09cih0KT9uLmNhbGwodCxcIlwiKTpPYmplY3QodCl9Ok9iamVjdCxvPWZ1bmN0aW9uKHQpe2lmKG51bGw9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIrdCk7cmV0dXJuIHR9LGE9ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChvKHQpKX0sbD1NYXRoLmNlaWwsYz1NYXRoLmZsb29yLHU9ZnVuY3Rpb24odCl7cmV0dXJuIGlzTmFOKHQ9K3QpPzA6KHQ+MD9jOmwpKHQpfSxoPU1hdGgubWluLGY9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9oKHUodCksOTAwNzE5OTI1NDc0MDk5MSk6MH0sZD1mdW5jdGlvbih0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fSxwPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKHQpe3JldHVyblwiQXJyYXlcIj09cih0KX0sdj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6e307ZnVuY3Rpb24gZyh0LGUpe3JldHVybiB0KGU9e2V4cG9ydHM6e319LGUuZXhwb3J0cyksZS5leHBvcnRzfXZhciBiLG0seSx4LEU9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSx3PSFlKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pLE89RS5kb2N1bWVudCxfPWQoTykmJmQoTy5jcmVhdGVFbGVtZW50KSxTPSF3JiYhZShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoKHQ9XCJkaXZcIixfP08uY3JlYXRlRWxlbWVudCh0KTp7fSksXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmE7dmFyIHR9KSxBPWZ1bmN0aW9uKHQpe2lmKCFkKHQpKXRocm93IFR5cGVFcnJvcihTdHJpbmcodCkrXCIgaXMgbm90IGFuIG9iamVjdFwiKTtyZXR1cm4gdH0sTD1mdW5jdGlvbih0LGUpe2lmKCFkKHQpKXJldHVybiB0O3ZhciBpLHI7aWYoZSYmXCJmdW5jdGlvblwiPT10eXBlb2YoaT10LnRvU3RyaW5nKSYmIWQocj1pLmNhbGwodCkpKXJldHVybiByO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKGk9dC52YWx1ZU9mKSYmIWQocj1pLmNhbGwodCkpKXJldHVybiByO2lmKCFlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihpPXQudG9TdHJpbmcpJiYhZChyPWkuY2FsbCh0KSkpcmV0dXJuIHI7dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpfSxNPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxrPXtmOnc/TTpmdW5jdGlvbih0LGUsaSl7aWYoQSh0KSxlPUwoZSwhMCksQShpKSxTKXRyeXtyZXR1cm4gTSh0LGUsaSl9Y2F0Y2godCl7fWlmKFwiZ2V0XCJpbiBpfHxcInNldFwiaW4gaSl0aHJvdyBUeXBlRXJyb3IoXCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZFwiKTtyZXR1cm5cInZhbHVlXCJpbiBpJiYodFtlXT1pLnZhbHVlKSx0fX0sVz1mdW5jdGlvbih0LGUpe3JldHVybntlbnVtZXJhYmxlOiEoMSZ0KSxjb25maWd1cmFibGU6ISgyJnQpLHdyaXRhYmxlOiEoNCZ0KSx2YWx1ZTplfX0sVD13P2Z1bmN0aW9uKHQsZSxpKXtyZXR1cm4gay5mKHQsZSxXKDEsaSkpfTpmdW5jdGlvbih0LGUsaSl7cmV0dXJuIHRbZV09aSx0fSxqPWZ1bmN0aW9uKHQsZSl7dHJ5e1QoRSx0LGUpfWNhdGNoKGkpe0VbdF09ZX1yZXR1cm4gZX0sUj1nKGZ1bmN0aW9uKHQpe3ZhciBlPUVbXCJfX2NvcmUtanNfc2hhcmVkX19cIl18fGooXCJfX2NvcmUtanNfc2hhcmVkX19cIix7fSk7KHQuZXhwb3J0cz1mdW5jdGlvbih0LGkpe3JldHVybiBlW3RdfHwoZVt0XT12b2lkIDAhPT1pP2k6e30pfSkoXCJ2ZXJzaW9uc1wiLFtdKS5wdXNoKHt2ZXJzaW9uOlwiMy4wLjFcIixtb2RlOlwiZ2xvYmFsXCIsY29weXJpZ2h0OlwiwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KVwifSl9KSxOPTAsej1NYXRoLnJhbmRvbSgpLEM9ZnVuY3Rpb24odCl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHZvaWQgMD09PXQ/XCJcIjp0LFwiKV9cIiwoKytOK3opLnRvU3RyaW5nKDM2KSl9LFY9IWUoZnVuY3Rpb24oKXtyZXR1cm4hU3RyaW5nKFN5bWJvbCgpKX0pLEQ9UihcIndrc1wiKSxCPUUuU3ltYm9sLEk9ZnVuY3Rpb24odCl7cmV0dXJuIERbdF18fChEW3RdPVYmJkJbdF18fChWP0I6QykoXCJTeW1ib2wuXCIrdCkpfSxQPUkoXCJzcGVjaWVzXCIpLEg9ZnVuY3Rpb24odCxlKXt2YXIgaTtyZXR1cm4gcCh0KSYmKFwiZnVuY3Rpb25cIiE9dHlwZW9mKGk9dC5jb25zdHJ1Y3Rvcil8fGkhPT1BcnJheSYmIXAoaS5wcm90b3R5cGUpP2QoaSkmJm51bGw9PT0oaT1pW1BdKSYmKGk9dm9pZCAwKTppPXZvaWQgMCksbmV3KHZvaWQgMD09PWk/QXJyYXk6aSkoMD09PWU/MDplKX0scT1mdW5jdGlvbihlLGkpe3ZhciByPTE9PWUsbj0yPT1lLG89Mz09ZSxsPTQ9PWUsYz02PT1lLHU9NT09ZXx8YyxoPWl8fEg7cmV0dXJuIGZ1bmN0aW9uKGksZCxwKXtmb3IodmFyIHYsZyxiPWEoaSksbT1zKGIpLHk9ZnVuY3Rpb24oZSxpLHIpe2lmKHQoZSksdm9pZCAwPT09aSlyZXR1cm4gZTtzd2l0Y2gocil7Y2FzZSAwOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmNhbGwoaSl9O2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGUuY2FsbChpLHQpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHQscil7cmV0dXJuIGUuY2FsbChpLHQscil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24odCxyLG4pe3JldHVybiBlLmNhbGwoaSx0LHIsbil9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KGksYXJndW1lbnRzKX19KGQscCwzKSx4PWYobS5sZW5ndGgpLEU9MCx3PXI/aChpLHgpOm4/aChpLDApOnZvaWQgMDt4PkU7RSsrKWlmKCh1fHxFIGluIG0pJiYoZz15KHY9bVtFXSxFLGIpLGUpKWlmKHIpd1tFXT1nO2Vsc2UgaWYoZylzd2l0Y2goZSl7Y2FzZSAzOnJldHVybiEwO2Nhc2UgNTpyZXR1cm4gdjtjYXNlIDY6cmV0dXJuIEU7Y2FzZSAyOncucHVzaCh2KX1lbHNlIGlmKGwpcmV0dXJuITE7cmV0dXJuIGM/LTE6b3x8bD9sOnd9fSxGPUkoXCJzcGVjaWVzXCIpLCQ9e30ucHJvcGVydHlJc0VudW1lcmFibGUsWD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFk9e2Y6WCYmISQuY2FsbCh7MToyfSwxKT9mdW5jdGlvbih0KXt2YXIgZT1YKHRoaXMsdCk7cmV0dXJuISFlJiZlLmVudW1lcmFibGV9OiR9LEc9ZnVuY3Rpb24odCl7cmV0dXJuIHMobyh0KSl9LEs9e30uaGFzT3duUHJvcGVydHksVT1mdW5jdGlvbih0LGUpe3JldHVybiBLLmNhbGwodCxlKX0sSj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFE9e2Y6dz9KOmZ1bmN0aW9uKHQsZSl7aWYodD1HKHQpLGU9TChlLCEwKSxTKXRyeXtyZXR1cm4gSih0LGUpfWNhdGNoKHQpe31pZihVKHQsZSkpcmV0dXJuIFcoIVkuZi5jYWxsKHQsZSksdFtlXSl9fSxaPVIoXCJuYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nXCIsRnVuY3Rpb24udG9TdHJpbmcpLHR0PUUuV2Vha01hcCxldD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0dCYmL25hdGl2ZSBjb2RlLy50ZXN0KFouY2FsbCh0dCkpLGl0PVIoXCJrZXlzXCIpLHJ0PXt9LG50PUUuV2Vha01hcDtpZihldCl7dmFyIHN0PW5ldyBudCxvdD1zdC5nZXQsYXQ9c3QuaGFzLGx0PXN0LnNldDtiPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGx0LmNhbGwoc3QsdCxlKSxlfSxtPWZ1bmN0aW9uKHQpe3JldHVybiBvdC5jYWxsKHN0LHQpfHx7fX0seT1mdW5jdGlvbih0KXtyZXR1cm4gYXQuY2FsbChzdCx0KX19ZWxzZXt2YXIgY3Q9aXRbeD1cInN0YXRlXCJdfHwoaXRbeF09Qyh4KSk7cnRbY3RdPSEwLGI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gVCh0LGN0LGUpLGV9LG09ZnVuY3Rpb24odCl7cmV0dXJuIFUodCxjdCk/dFtjdF06e319LHk9ZnVuY3Rpb24odCl7cmV0dXJuIFUodCxjdCl9fXZhciB1dCxodCxmdD17c2V0OmIsZ2V0Om0saGFzOnksZW5mb3JjZTpmdW5jdGlvbih0KXtyZXR1cm4geSh0KT9tKHQpOmIodCx7fSl9LGdldHRlckZvcjpmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIGk7aWYoIWQoZSl8fChpPW0oZSkpLnR5cGUhPT10KXRocm93IFR5cGVFcnJvcihcIkluY29tcGF0aWJsZSByZWNlaXZlciwgXCIrdCtcIiByZXF1aXJlZFwiKTtyZXR1cm4gaX19fSxkdD1nKGZ1bmN0aW9uKHQpe3ZhciBlPWZ0LmdldCxpPWZ0LmVuZm9yY2Uscj1TdHJpbmcoWikuc3BsaXQoXCJ0b1N0cmluZ1wiKTtSKFwiaW5zcGVjdFNvdXJjZVwiLGZ1bmN0aW9uKHQpe3JldHVybiBaLmNhbGwodCl9KSwodC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuLHMpe3ZhciBvPSEhcyYmISFzLnVuc2FmZSxhPSEhcyYmISFzLmVudW1lcmFibGUsbD0hIXMmJiEhcy5ub1RhcmdldEdldDtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYoXCJzdHJpbmdcIiE9dHlwZW9mIGV8fFUobixcIm5hbWVcIil8fFQobixcIm5hbWVcIixlKSxpKG4pLnNvdXJjZT1yLmpvaW4oXCJzdHJpbmdcIj09dHlwZW9mIGU/ZTpcIlwiKSksdCE9PUU/KG8/IWwmJnRbZV0mJihhPSEwKTpkZWxldGUgdFtlXSxhP3RbZV09bjpUKHQsZSxuKSk6YT90W2VdPW46aihlLG4pfSkoRnVuY3Rpb24ucHJvdG90eXBlLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMmJmUodGhpcykuc291cmNlfHxaLmNhbGwodGhpcyl9KX0pLHB0PU1hdGgubWF4LHZ0PU1hdGgubWluLGd0PSh1dD0hMSxmdW5jdGlvbih0LGUsaSl7dmFyIHIsbj1HKHQpLHM9ZihuLmxlbmd0aCksbz1mdW5jdGlvbih0LGUpe3ZhciBpPXUodCk7cmV0dXJuIGk8MD9wdChpK2UsMCk6dnQoaSxlKX0oaSxzKTtpZih1dCYmZSE9ZSl7Zm9yKDtzPm87KWlmKChyPW5bbysrXSkhPXIpcmV0dXJuITB9ZWxzZSBmb3IoO3M+bztvKyspaWYoKHV0fHxvIGluIG4pJiZuW29dPT09ZSlyZXR1cm4gdXR8fG98fDA7cmV0dXJuIXV0JiYtMX0pLGJ0PWZ1bmN0aW9uKHQsZSl7dmFyIGkscj1HKHQpLG49MCxzPVtdO2ZvcihpIGluIHIpIVUocnQsaSkmJlUocixpKSYmcy5wdXNoKGkpO2Zvcig7ZS5sZW5ndGg+bjspVShyLGk9ZVtuKytdKSYmKH5ndChzLGkpfHxzLnB1c2goaSkpO3JldHVybiBzfSxtdD1bXCJjb25zdHJ1Y3RvclwiLFwiaGFzT3duUHJvcGVydHlcIixcImlzUHJvdG90eXBlT2ZcIixcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsXCJ0b0xvY2FsZVN0cmluZ1wiLFwidG9TdHJpbmdcIixcInZhbHVlT2ZcIl0seXQ9bXQuY29uY2F0KFwibGVuZ3RoXCIsXCJwcm90b3R5cGVcIikseHQ9e2Y6T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXN8fGZ1bmN0aW9uKHQpe3JldHVybiBidCh0LHl0KX19LEV0PXtmOk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHN9LHd0PUUuUmVmbGVjdCxPdD13dCYmd3Qub3duS2V5c3x8ZnVuY3Rpb24odCl7dmFyIGU9eHQuZihBKHQpKSxpPUV0LmY7cmV0dXJuIGk/ZS5jb25jYXQoaSh0KSk6ZX0sX3Q9ZnVuY3Rpb24odCxlKXtmb3IodmFyIGk9T3QoZSkscj1rLmYsbj1RLmYscz0wO3M8aS5sZW5ndGg7cysrKXt2YXIgbz1pW3NdO1UodCxvKXx8cih0LG8sbihlLG8pKX19LFN0PS8jfFxcLnByb3RvdHlwZVxcLi8sQXQ9ZnVuY3Rpb24odCxpKXt2YXIgcj1NdFtMdCh0KV07cmV0dXJuIHI9PVd0fHxyIT1rdCYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGk/ZShpKTohIWkpfSxMdD1BdC5ub3JtYWxpemU9ZnVuY3Rpb24odCl7cmV0dXJuIFN0cmluZyh0KS5yZXBsYWNlKFN0LFwiLlwiKS50b0xvd2VyQ2FzZSgpfSxNdD1BdC5kYXRhPXt9LGt0PUF0Lk5BVElWRT1cIk5cIixXdD1BdC5QT0xZRklMTD1cIlBcIixUdD1BdCxqdD1RLmYsUnQ9ZnVuY3Rpb24odCxlKXt2YXIgaSxyLG4scyxvLGE9dC50YXJnZXQsbD10Lmdsb2JhbCxjPXQuc3RhdDtpZihpPWw/RTpjP0VbYV18fGooYSx7fSk6KEVbYV18fHt9KS5wcm90b3R5cGUpZm9yKHIgaW4gZSl7aWYocz1lW3JdLG49dC5ub1RhcmdldEdldD8obz1qdChpLHIpKSYmby52YWx1ZTppW3JdLCFUdChsP3I6YSsoYz9cIi5cIjpcIiNcIikrcix0LmZvcmNlZCkmJnZvaWQgMCE9PW4pe2lmKHR5cGVvZiBzPT10eXBlb2Ygbiljb250aW51ZTtfdChzLG4pfSh0LnNoYW18fG4mJm4uc2hhbSkmJlQocyxcInNoYW1cIiwhMCksZHQoaSxyLHMsdCl9fSxOdD1xKDIpO1J0KHt0YXJnZXQ6XCJBcnJheVwiLHByb3RvOiEwLGZvcmNlZDohKGh0PVwiZmlsdGVyXCIsIWUoZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4odC5jb25zdHJ1Y3Rvcj17fSlbRl09ZnVuY3Rpb24oKXtyZXR1cm57Zm9vOjF9fSwxIT09dFtodF0oQm9vbGVhbikuZm9vfSkpfSx7ZmlsdGVyOmZ1bmN0aW9uKHQpe3JldHVybiBOdCh0aGlzLHQsYXJndW1lbnRzWzFdKX19KTt2YXIgenQ9ZnVuY3Rpb24odCxpKXt2YXIgcj1bXVt0XTtyZXR1cm4hcnx8IWUoZnVuY3Rpb24oKXtyLmNhbGwobnVsbCxpfHxmdW5jdGlvbigpe3Rocm93IDF9LDEpfSl9LEN0PVtdLmZvckVhY2gsVnQ9cSgwKSxEdD16dChcImZvckVhY2hcIik/ZnVuY3Rpb24odCl7cmV0dXJuIFZ0KHRoaXMsdCxhcmd1bWVudHNbMV0pfTpDdDtSdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMCxmb3JjZWQ6W10uZm9yRWFjaCE9RHR9LHtmb3JFYWNoOkR0fSk7UnQoe3RhcmdldDpcIkFycmF5XCIscHJvdG86ITAsZm9yY2VkOnp0KFwicmVkdWNlXCIpfSx7cmVkdWNlOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlLGkscixuLG8pe3QoaSk7dmFyIGw9YShlKSxjPXMobCksdT1mKGwubGVuZ3RoKSxoPW8/dS0xOjAsZD1vPy0xOjE7aWYocjwyKWZvcig7Oyl7aWYoaCBpbiBjKXtuPWNbaF0saCs9ZDticmVha31pZihoKz1kLG8/aDwwOnU8PWgpdGhyb3cgVHlwZUVycm9yKFwiUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKX1mb3IoO28/aD49MDp1Pmg7aCs9ZCloIGluIGMmJihuPWkobixjW2hdLGgsbCkpO3JldHVybiBufSh0aGlzLGUsYXJndW1lbnRzLmxlbmd0aCxhcmd1bWVudHNbMV0sITEpfX0pO3ZhciBCdD1rLmYsSXQ9RnVuY3Rpb24ucHJvdG90eXBlLFB0PUl0LnRvU3RyaW5nLEh0PS9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLzshd3x8XCJuYW1lXCJpbiBJdHx8QnQoSXQsXCJuYW1lXCIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIFB0LmNhbGwodGhpcykubWF0Y2goSHQpWzFdfWNhdGNoKHQpe3JldHVyblwiXCJ9fX0pO3ZhciBxdD1PYmplY3Qua2V5c3x8ZnVuY3Rpb24odCl7cmV0dXJuIGJ0KHQsbXQpfSxGdD1PYmplY3QuYXNzaWduLCR0PSFGdHx8ZShmdW5jdGlvbigpe3ZhciB0PXt9LGU9e30saT1TeW1ib2woKTtyZXR1cm4gdFtpXT03LFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIi5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2VbdF09dH0pLDchPUZ0KHt9LHQpW2ldfHxcImFiY2RlZmdoaWprbG1ub3BxcnN0XCIhPXF0KEZ0KHt9LGUpKS5qb2luKFwiXCIpfSk/ZnVuY3Rpb24odCxlKXtmb3IodmFyIGk9YSh0KSxyPWFyZ3VtZW50cy5sZW5ndGgsbj0xLG89RXQuZixsPVkuZjtyPm47KWZvcih2YXIgYyx1PXMoYXJndW1lbnRzW24rK10pLGg9bz9xdCh1KS5jb25jYXQobyh1KSk6cXQodSksZj1oLmxlbmd0aCxkPTA7Zj5kOylsLmNhbGwodSxjPWhbZCsrXSkmJihpW2NdPXVbY10pO3JldHVybiBpfTpGdDtSdCh7dGFyZ2V0OlwiT2JqZWN0XCIsc3RhdDohMCxmb3JjZWQ6T2JqZWN0LmFzc2lnbiE9PSR0fSx7YXNzaWduOiR0fSk7dmFyIFh0PVwiXFx0XFxuXFx2XFxmXFxyIMKg4ZqA4oCA4oCB4oCC4oCD4oCE4oCF4oCG4oCH4oCI4oCJ4oCK4oCv4oGf44CAXFx1MjAyOFxcdTIwMjlcXHVmZWZmXCIsWXQ9XCJbXCIrWHQrXCJdXCIsR3Q9UmVnRXhwKFwiXlwiK1l0K1l0K1wiKlwiKSxLdD1SZWdFeHAoWXQrWXQrXCIqJFwiKSxVdD1FLnBhcnNlSW50LEp0PS9eWy0rXT8wW3hYXS8sUXQ9OCE9PVV0KFh0K1wiMDhcIil8fDIyIT09VXQoWHQrXCIweDE2XCIpP2Z1bmN0aW9uKHQsZSl7dmFyIGk9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdD1TdHJpbmcobyh0KSksMSZlJiYodD10LnJlcGxhY2UoR3QsXCJcIikpLDImZSYmKHQ9dC5yZXBsYWNlKEt0LFwiXCIpKSx0fShTdHJpbmcodCksMyk7cmV0dXJuIFV0KGksZT4+PjB8fChKdC50ZXN0KGkpPzE2OjEwKSl9OlV0O1J0KHtnbG9iYWw6ITAsZm9yY2VkOnBhcnNlSW50IT1RdH0se3BhcnNlSW50OlF0fSk7dmFyIFp0LHRlLGVlPVJlZ0V4cC5wcm90b3R5cGUuZXhlYyxpZT1TdHJpbmcucHJvdG90eXBlLnJlcGxhY2UscmU9ZWUsbmU9KFp0PS9hLyx0ZT0vYiovZyxlZS5jYWxsKFp0LFwiYVwiKSxlZS5jYWxsKHRlLFwiYVwiKSwwIT09WnQubGFzdEluZGV4fHwwIT09dGUubGFzdEluZGV4KSxzZT12b2lkIDAhPT0vKCk/Py8uZXhlYyhcIlwiKVsxXTsobmV8fHNlKSYmKHJlPWZ1bmN0aW9uKHQpe3ZhciBlLGkscixuLHM9dGhpcztyZXR1cm4gc2UmJihpPW5ldyBSZWdFeHAoXCJeXCIrcy5zb3VyY2UrXCIkKD8hXFxcXHMpXCIsZnVuY3Rpb24oKXt2YXIgdD1BKHRoaXMpLGU9XCJcIjtyZXR1cm4gdC5nbG9iYWwmJihlKz1cImdcIiksdC5pZ25vcmVDYXNlJiYoZSs9XCJpXCIpLHQubXVsdGlsaW5lJiYoZSs9XCJtXCIpLHQudW5pY29kZSYmKGUrPVwidVwiKSx0LnN0aWNreSYmKGUrPVwieVwiKSxlfS5jYWxsKHMpKSksbmUmJihlPXMubGFzdEluZGV4KSxyPWVlLmNhbGwocyx0KSxuZSYmciYmKHMubGFzdEluZGV4PXMuZ2xvYmFsP3IuaW5kZXgrclswXS5sZW5ndGg6ZSksc2UmJnImJnIubGVuZ3RoPjEmJmllLmNhbGwoclswXSxpLGZ1bmN0aW9uKCl7Zm9yKG49MTtuPGFyZ3VtZW50cy5sZW5ndGgtMjtuKyspdm9pZCAwPT09YXJndW1lbnRzW25dJiYocltuXT12b2lkIDApfSkscn0pO3ZhciBvZT1yZTtSdCh7dGFyZ2V0OlwiUmVnRXhwXCIscHJvdG86ITAsZm9yY2VkOi8uLy5leGVjIT09b2V9LHtleGVjOm9lfSk7dmFyIGFlPWZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4gZSsoaT9mdW5jdGlvbih0LGUsaSl7dmFyIHIsbixzPVN0cmluZyhvKHQpKSxhPXUoZSksbD1zLmxlbmd0aDtyZXR1cm4gYTwwfHxhPj1sP2k/XCJcIjp2b2lkIDA6KHI9cy5jaGFyQ29kZUF0KGEpKTw1NTI5Nnx8cj41NjMxOXx8YSsxPT09bHx8KG49cy5jaGFyQ29kZUF0KGErMSkpPDU2MzIwfHxuPjU3MzQzP2k/cy5jaGFyQXQoYSk6cjppP3Muc2xpY2UoYSxhKzIpOm4tNTYzMjArKHItNTUyOTY8PDEwKSs2NTUzNn0odCxlLCEwKS5sZW5ndGg6MSl9LGxlPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dC5leGVjO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGkpe3ZhciBuPWkuY2FsbCh0LGUpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBuKXRocm93IFR5cGVFcnJvcihcIlJlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbFwiKTtyZXR1cm4gbn1pZihcIlJlZ0V4cFwiIT09cih0KSl0aHJvdyBUeXBlRXJyb3IoXCJSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyXCIpO3JldHVybiBvZS5jYWxsKHQsZSl9LGNlPUkoXCJzcGVjaWVzXCIpLHVlPSFlKGZ1bmN0aW9uKCl7dmFyIHQ9Ly4vO3JldHVybiB0LmV4ZWM9ZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gdC5ncm91cHM9e2E6XCI3XCJ9LHR9LFwiN1wiIT09XCJcIi5yZXBsYWNlKHQsXCIkPGE+XCIpfSksaGU9IWUoZnVuY3Rpb24oKXt2YXIgdD0vKD86KS8sZT10LmV4ZWM7dC5leGVjPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfTt2YXIgaT1cImFiXCIuc3BsaXQodCk7cmV0dXJuIDIhPT1pLmxlbmd0aHx8XCJhXCIhPT1pWzBdfHxcImJcIiE9PWlbMV19KSxmZT1mdW5jdGlvbih0LGkscixuKXt2YXIgcz1JKHQpLG89IWUoZnVuY3Rpb24oKXt2YXIgZT17fTtyZXR1cm4gZVtzXT1mdW5jdGlvbigpe3JldHVybiA3fSw3IT1cIlwiW3RdKGUpfSksYT1vJiYhZShmdW5jdGlvbigpe3ZhciBlPSExLGk9L2EvO3JldHVybiBpLmV4ZWM9ZnVuY3Rpb24oKXtyZXR1cm4gZT0hMCxudWxsfSxcInNwbGl0XCI9PT10JiYoaS5jb25zdHJ1Y3Rvcj17fSxpLmNvbnN0cnVjdG9yW2NlXT1mdW5jdGlvbigpe3JldHVybiBpfSksaVtzXShcIlwiKSwhZX0pO2lmKCFvfHwhYXx8XCJyZXBsYWNlXCI9PT10JiYhdWV8fFwic3BsaXRcIj09PXQmJiFoZSl7dmFyIGw9Ly4vW3NdLGM9cihzLFwiXCJbdF0sZnVuY3Rpb24odCxlLGkscixuKXtyZXR1cm4gZS5leGVjPT09b2U/byYmIW4/e2RvbmU6ITAsdmFsdWU6bC5jYWxsKGUsaSxyKX06e2RvbmU6ITAsdmFsdWU6dC5jYWxsKGksZSxyKX06e2RvbmU6ITF9fSksdT1jWzBdLGg9Y1sxXTtkdChTdHJpbmcucHJvdG90eXBlLHQsdSksZHQoUmVnRXhwLnByb3RvdHlwZSxzLDI9PWk/ZnVuY3Rpb24odCxlKXtyZXR1cm4gaC5jYWxsKHQsdGhpcyxlKX06ZnVuY3Rpb24odCl7cmV0dXJuIGguY2FsbCh0LHRoaXMpfSksbiYmVChSZWdFeHAucHJvdG90eXBlW3NdLFwic2hhbVwiLCEwKX19O2ZlKFwibWF0Y2hcIiwxLGZ1bmN0aW9uKHQsZSxpKXtyZXR1cm5bZnVuY3Rpb24oZSl7dmFyIGk9byh0aGlzKSxyPW51bGw9PWU/dm9pZCAwOmVbdF07cmV0dXJuIHZvaWQgMCE9PXI/ci5jYWxsKGUsaSk6bmV3IFJlZ0V4cChlKVt0XShTdHJpbmcoaSkpfSxmdW5jdGlvbih0KXt2YXIgcj1pKGUsdCx0aGlzKTtpZihyLmRvbmUpcmV0dXJuIHIudmFsdWU7dmFyIG49QSh0KSxzPVN0cmluZyh0aGlzKTtpZighbi5nbG9iYWwpcmV0dXJuIGxlKG4scyk7dmFyIG89bi51bmljb2RlO24ubGFzdEluZGV4PTA7Zm9yKHZhciBhLGw9W10sYz0wO251bGwhPT0oYT1sZShuLHMpKTspe3ZhciB1PVN0cmluZyhhWzBdKTtsW2NdPXUsXCJcIj09PXUmJihuLmxhc3RJbmRleD1hZShzLGYobi5sYXN0SW5kZXgpLG8pKSxjKyt9cmV0dXJuIDA9PT1jP251bGw6bH1dfSk7dmFyIGRlPU1hdGgubWF4LHBlPU1hdGgubWluLHZlPU1hdGguZmxvb3IsZ2U9L1xcJChbJCZgJ118XFxkXFxkP3w8W14+XSo+KS9nLGJlPS9cXCQoWyQmYCddfFxcZFxcZD8pL2c7ZmUoXCJyZXBsYWNlXCIsMixmdW5jdGlvbih0LGUsaSl7cmV0dXJuW2Z1bmN0aW9uKGkscil7dmFyIG49byh0aGlzKSxzPW51bGw9PWk/dm9pZCAwOmlbdF07cmV0dXJuIHZvaWQgMCE9PXM/cy5jYWxsKGksbixyKTplLmNhbGwoU3RyaW5nKG4pLGkscil9LGZ1bmN0aW9uKHQsbil7dmFyIHM9aShlLHQsdGhpcyxuKTtpZihzLmRvbmUpcmV0dXJuIHMudmFsdWU7dmFyIG89QSh0KSxhPVN0cmluZyh0aGlzKSxsPVwiZnVuY3Rpb25cIj09dHlwZW9mIG47bHx8KG49U3RyaW5nKG4pKTt2YXIgYz1vLmdsb2JhbDtpZihjKXt2YXIgaD1vLnVuaWNvZGU7by5sYXN0SW5kZXg9MH1mb3IodmFyIGQ9W107Oyl7dmFyIHA9bGUobyxhKTtpZihudWxsPT09cClicmVhaztpZihkLnB1c2gocCksIWMpYnJlYWs7XCJcIj09PVN0cmluZyhwWzBdKSYmKG8ubGFzdEluZGV4PWFlKGEsZihvLmxhc3RJbmRleCksaCkpfWZvcih2YXIgdixnPVwiXCIsYj0wLG09MDttPGQubGVuZ3RoO20rKyl7cD1kW21dO2Zvcih2YXIgeT1TdHJpbmcocFswXSkseD1kZShwZSh1KHAuaW5kZXgpLGEubGVuZ3RoKSwwKSxFPVtdLHc9MTt3PHAubGVuZ3RoO3crKylFLnB1c2godm9pZCAwPT09KHY9cFt3XSk/djpTdHJpbmcodikpO3ZhciBPPXAuZ3JvdXBzO2lmKGwpe3ZhciBfPVt5XS5jb25jYXQoRSx4LGEpO3ZvaWQgMCE9PU8mJl8ucHVzaChPKTt2YXIgUz1TdHJpbmcobi5hcHBseSh2b2lkIDAsXykpfWVsc2UgUz1yKHksYSx4LEUsTyxuKTt4Pj1iJiYoZys9YS5zbGljZShiLHgpK1MsYj14K3kubGVuZ3RoKX1yZXR1cm4gZythLnNsaWNlKGIpfV07ZnVuY3Rpb24gcih0LGkscixuLHMsbyl7dmFyIGw9cit0Lmxlbmd0aCxjPW4ubGVuZ3RoLHU9YmU7cmV0dXJuIHZvaWQgMCE9PXMmJihzPWEocyksdT1nZSksZS5jYWxsKG8sdSxmdW5jdGlvbihlLG8pe3ZhciBhO3N3aXRjaChvLmNoYXJBdCgwKSl7Y2FzZVwiJFwiOnJldHVyblwiJFwiO2Nhc2VcIiZcIjpyZXR1cm4gdDtjYXNlXCJgXCI6cmV0dXJuIGkuc2xpY2UoMCxyKTtjYXNlXCInXCI6cmV0dXJuIGkuc2xpY2UobCk7Y2FzZVwiPFwiOmE9c1tvLnNsaWNlKDEsLTEpXTticmVhaztkZWZhdWx0OnZhciB1PStvO2lmKDA9PT11KXJldHVybiBlO2lmKHU+Yyl7dmFyIGg9dmUodS8xMCk7cmV0dXJuIDA9PT1oP2U6aDw9Yz92b2lkIDA9PT1uW2gtMV0/by5jaGFyQXQoMSk6bltoLTFdK28uY2hhckF0KDEpOmV9YT1uW3UtMV19cmV0dXJuIHZvaWQgMD09PWE/XCJcIjphfSl9fSk7Zm9yKHZhciBtZSBpbntDU1NSdWxlTGlzdDowLENTU1N0eWxlRGVjbGFyYXRpb246MCxDU1NWYWx1ZUxpc3Q6MCxDbGllbnRSZWN0TGlzdDowLERPTVJlY3RMaXN0OjAsRE9NU3RyaW5nTGlzdDowLERPTVRva2VuTGlzdDoxLERhdGFUcmFuc2Zlckl0ZW1MaXN0OjAsRmlsZUxpc3Q6MCxIVE1MQWxsQ29sbGVjdGlvbjowLEhUTUxDb2xsZWN0aW9uOjAsSFRNTEZvcm1FbGVtZW50OjAsSFRNTFNlbGVjdEVsZW1lbnQ6MCxNZWRpYUxpc3Q6MCxNaW1lVHlwZUFycmF5OjAsTmFtZWROb2RlTWFwOjAsTm9kZUxpc3Q6MSxQYWludFJlcXVlc3RMaXN0OjAsUGx1Z2luOjAsUGx1Z2luQXJyYXk6MCxTVkdMZW5ndGhMaXN0OjAsU1ZHTnVtYmVyTGlzdDowLFNWR1BhdGhTZWdMaXN0OjAsU1ZHUG9pbnRMaXN0OjAsU1ZHU3RyaW5nTGlzdDowLFNWR1RyYW5zZm9ybUxpc3Q6MCxTb3VyY2VCdWZmZXJMaXN0OjAsU3R5bGVTaGVldExpc3Q6MCxUZXh0VHJhY2tDdWVMaXN0OjAsVGV4dFRyYWNrTGlzdDowLFRvdWNoTGlzdDowfSl7dmFyIHllPUVbbWVdLHhlPXllJiZ5ZS5wcm90b3R5cGU7aWYoeGUmJnhlLmZvckVhY2ghPT1EdCl0cnl7VCh4ZSxcImZvckVhY2hcIixEdCl9Y2F0Y2godCl7eGUuZm9yRWFjaD1EdH19dmFyIEVlPWcoZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQpcmV0dXJuIDA7dmFyIHQsZT1kb2N1bWVudC5ib2R5LGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPWkuc3R5bGU7cmV0dXJuIHIucG9zaXRpb249XCJhYnNvbHV0ZVwiLHIudG9wPXIubGVmdD1cIi05OTk5cHhcIixyLndpZHRoPXIuaGVpZ2h0PVwiMTAwcHhcIixyLm92ZXJmbG93PVwic2Nyb2xsXCIsZS5hcHBlbmRDaGlsZChpKSx0PWkub2Zmc2V0V2lkdGgtaS5jbGllbnRXaWR0aCxlLnJlbW92ZUNoaWxkKGkpLHR9fSksd2U9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsT2U9TmFOLF9lPVwiW29iamVjdCBTeW1ib2xdXCIsU2U9L15cXHMrfFxccyskL2csQWU9L15bLStdMHhbMC05YS1mXSskL2ksTGU9L14wYlswMV0rJC9pLE1lPS9eMG9bMC03XSskL2ksa2U9cGFyc2VJbnQsV2U9XCJvYmplY3RcIj09dHlwZW9mIHYmJnYmJnYuT2JqZWN0PT09T2JqZWN0JiZ2LFRlPVwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixqZT1XZXx8VGV8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxSZT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLE5lPU1hdGgubWF4LHplPU1hdGgubWluLENlPWZ1bmN0aW9uKCl7cmV0dXJuIGplLkRhdGUubm93KCl9O2Z1bmN0aW9uIFZlKHQsZSxpKXt2YXIgcixuLHMsbyxhLGwsYz0wLHU9ITEsaD0hMSxmPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcih3ZSk7ZnVuY3Rpb24gZChlKXt2YXIgaT1yLHM9bjtyZXR1cm4gcj1uPXZvaWQgMCxjPWUsbz10LmFwcGx5KHMsaSl9ZnVuY3Rpb24gcCh0KXt2YXIgaT10LWw7cmV0dXJuIHZvaWQgMD09PWx8fGk+PWV8fGk8MHx8aCYmdC1jPj1zfWZ1bmN0aW9uIHYoKXt2YXIgdD1DZSgpO2lmKHAodCkpcmV0dXJuIGcodCk7YT1zZXRUaW1lb3V0KHYsZnVuY3Rpb24odCl7dmFyIGk9ZS0odC1sKTtyZXR1cm4gaD96ZShpLHMtKHQtYykpOml9KHQpKX1mdW5jdGlvbiBnKHQpe3JldHVybiBhPXZvaWQgMCxmJiZyP2QodCk6KHI9bj12b2lkIDAsbyl9ZnVuY3Rpb24gYigpe3ZhciB0PUNlKCksaT1wKHQpO2lmKHI9YXJndW1lbnRzLG49dGhpcyxsPXQsaSl7aWYodm9pZCAwPT09YSlyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGM9dCxhPXNldFRpbWVvdXQodixlKSx1P2QodCk6b30obCk7aWYoaClyZXR1cm4gYT1zZXRUaW1lb3V0KHYsZSksZChsKX1yZXR1cm4gdm9pZCAwPT09YSYmKGE9c2V0VGltZW91dCh2LGUpKSxvfXJldHVybiBlPUJlKGUpfHwwLERlKGkpJiYodT0hIWkubGVhZGluZyxzPShoPVwibWF4V2FpdFwiaW4gaSk/TmUoQmUoaS5tYXhXYWl0KXx8MCxlKTpzLGY9XCJ0cmFpbGluZ1wiaW4gaT8hIWkudHJhaWxpbmc6ZiksYi5jYW5jZWw9ZnVuY3Rpb24oKXt2b2lkIDAhPT1hJiZjbGVhclRpbWVvdXQoYSksYz0wLHI9bD1uPWE9dm9pZCAwfSxiLmZsdXNoPWZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PWE/bzpnKENlKCkpfSxifWZ1bmN0aW9uIERlKHQpe3ZhciBlPXR5cGVvZiB0O3JldHVybiEhdCYmKFwib2JqZWN0XCI9PWV8fFwiZnVuY3Rpb25cIj09ZSl9ZnVuY3Rpb24gQmUodCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQpcmV0dXJuIHQ7aWYoZnVuY3Rpb24odCl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHR8fGZ1bmN0aW9uKHQpe3JldHVybiEhdCYmXCJvYmplY3RcIj09dHlwZW9mIHR9KHQpJiZSZS5jYWxsKHQpPT1fZX0odCkpcmV0dXJuIE9lO2lmKERlKHQpKXt2YXIgZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnZhbHVlT2Y/dC52YWx1ZU9mKCk6dDt0PURlKGUpP2UrXCJcIjplfWlmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiAwPT09dD90Oit0O3Q9dC5yZXBsYWNlKFNlLFwiXCIpO3ZhciBpPUxlLnRlc3QodCk7cmV0dXJuIGl8fE1lLnRlc3QodCk/a2UodC5zbGljZSgyKSxpPzI6OCk6QWUudGVzdCh0KT9PZTordH12YXIgSWU9ZnVuY3Rpb24odCxlLGkpe3ZhciByPSEwLG49ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKHdlKTtyZXR1cm4gRGUoaSkmJihyPVwibGVhZGluZ1wiaW4gaT8hIWkubGVhZGluZzpyLG49XCJ0cmFpbGluZ1wiaW4gaT8hIWkudHJhaWxpbmc6biksVmUodCxlLHtsZWFkaW5nOnIsbWF4V2FpdDplLHRyYWlsaW5nOm59KX0sUGU9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsSGU9TmFOLHFlPVwiW29iamVjdCBTeW1ib2xdXCIsRmU9L15cXHMrfFxccyskL2csJGU9L15bLStdMHhbMC05YS1mXSskL2ksWGU9L14wYlswMV0rJC9pLFllPS9eMG9bMC03XSskL2ksR2U9cGFyc2VJbnQsS2U9XCJvYmplY3RcIj09dHlwZW9mIHYmJnYmJnYuT2JqZWN0PT09T2JqZWN0JiZ2LFVlPVwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixKZT1LZXx8VWV8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxRZT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFplPU1hdGgubWF4LHRpPU1hdGgubWluLGVpPWZ1bmN0aW9uKCl7cmV0dXJuIEplLkRhdGUubm93KCl9O2Z1bmN0aW9uIGlpKHQpe3ZhciBlPXR5cGVvZiB0O3JldHVybiEhdCYmKFwib2JqZWN0XCI9PWV8fFwiZnVuY3Rpb25cIj09ZSl9ZnVuY3Rpb24gcmkodCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQpcmV0dXJuIHQ7aWYoZnVuY3Rpb24odCl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHR8fGZ1bmN0aW9uKHQpe3JldHVybiEhdCYmXCJvYmplY3RcIj09dHlwZW9mIHR9KHQpJiZRZS5jYWxsKHQpPT1xZX0odCkpcmV0dXJuIEhlO2lmKGlpKHQpKXt2YXIgZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnZhbHVlT2Y/dC52YWx1ZU9mKCk6dDt0PWlpKGUpP2UrXCJcIjplfWlmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiAwPT09dD90Oit0O3Q9dC5yZXBsYWNlKEZlLFwiXCIpO3ZhciBpPVhlLnRlc3QodCk7cmV0dXJuIGl8fFllLnRlc3QodCk/R2UodC5zbGljZSgyKSxpPzI6OCk6JGUudGVzdCh0KT9IZTordH12YXIgbmk9ZnVuY3Rpb24odCxlLGkpe3ZhciByLG4scyxvLGEsbCxjPTAsdT0hMSxoPSExLGY9ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFBlKTtmdW5jdGlvbiBkKGUpe3ZhciBpPXIscz1uO3JldHVybiByPW49dm9pZCAwLGM9ZSxvPXQuYXBwbHkocyxpKX1mdW5jdGlvbiBwKHQpe3ZhciBpPXQtbDtyZXR1cm4gdm9pZCAwPT09bHx8aT49ZXx8aTwwfHxoJiZ0LWM+PXN9ZnVuY3Rpb24gdigpe3ZhciB0PWVpKCk7aWYocCh0KSlyZXR1cm4gZyh0KTthPXNldFRpbWVvdXQodixmdW5jdGlvbih0KXt2YXIgaT1lLSh0LWwpO3JldHVybiBoP3RpKGkscy0odC1jKSk6aX0odCkpfWZ1bmN0aW9uIGcodCl7cmV0dXJuIGE9dm9pZCAwLGYmJnI/ZCh0KToocj1uPXZvaWQgMCxvKX1mdW5jdGlvbiBiKCl7dmFyIHQ9ZWkoKSxpPXAodCk7aWYocj1hcmd1bWVudHMsbj10aGlzLGw9dCxpKXtpZih2b2lkIDA9PT1hKXJldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gYz10LGE9c2V0VGltZW91dCh2LGUpLHU/ZCh0KTpvfShsKTtpZihoKXJldHVybiBhPXNldFRpbWVvdXQodixlKSxkKGwpfXJldHVybiB2b2lkIDA9PT1hJiYoYT1zZXRUaW1lb3V0KHYsZSkpLG99cmV0dXJuIGU9cmkoZSl8fDAsaWkoaSkmJih1PSEhaS5sZWFkaW5nLHM9KGg9XCJtYXhXYWl0XCJpbiBpKT9aZShyaShpLm1heFdhaXQpfHwwLGUpOnMsZj1cInRyYWlsaW5nXCJpbiBpPyEhaS50cmFpbGluZzpmKSxiLmNhbmNlbD1mdW5jdGlvbigpe3ZvaWQgMCE9PWEmJmNsZWFyVGltZW91dChhKSxjPTAscj1sPW49YT12b2lkIDB9LGIuZmx1c2g9ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09YT9vOmcoZWkoKSl9LGJ9LHNpPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLG9pPVwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiLGFpPVwiW29iamVjdCBGdW5jdGlvbl1cIixsaT1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsY2k9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyx1aT1cIm9iamVjdFwiPT10eXBlb2YgdiYmdiYmdi5PYmplY3Q9PT1PYmplY3QmJnYsaGk9XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGZpPXVpfHxoaXx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO3ZhciBkaT1BcnJheS5wcm90b3R5cGUscGk9RnVuY3Rpb24ucHJvdG90eXBlLHZpPU9iamVjdC5wcm90b3R5cGUsZ2k9ZmlbXCJfX2NvcmUtanNfc2hhcmVkX19cIl0sYmk9ZnVuY3Rpb24oKXt2YXIgdD0vW14uXSskLy5leGVjKGdpJiZnaS5rZXlzJiZnaS5rZXlzLklFX1BST1RPfHxcIlwiKTtyZXR1cm4gdD9cIlN5bWJvbChzcmMpXzEuXCIrdDpcIlwifSgpLG1pPXBpLnRvU3RyaW5nLHlpPXZpLmhhc093blByb3BlcnR5LHhpPXZpLnRvU3RyaW5nLEVpPVJlZ0V4cChcIl5cIittaS5jYWxsKHlpKS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyxcIlxcXFwkJlwiKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLFwiJDEuKj9cIikrXCIkXCIpLHdpPWRpLnNwbGljZSxPaT1UaShmaSxcIk1hcFwiKSxfaT1UaShPYmplY3QsXCJjcmVhdGVcIik7ZnVuY3Rpb24gU2kodCl7dmFyIGU9LTEsaT10P3QubGVuZ3RoOjA7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8aTspe3ZhciByPXRbZV07dGhpcy5zZXQoclswXSxyWzFdKX19ZnVuY3Rpb24gQWkodCl7dmFyIGU9LTEsaT10P3QubGVuZ3RoOjA7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8aTspe3ZhciByPXRbZV07dGhpcy5zZXQoclswXSxyWzFdKX19ZnVuY3Rpb24gTGkodCl7dmFyIGU9LTEsaT10P3QubGVuZ3RoOjA7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8aTspe3ZhciByPXRbZV07dGhpcy5zZXQoclswXSxyWzFdKX19ZnVuY3Rpb24gTWkodCxlKXtmb3IodmFyIGkscixuPXQubGVuZ3RoO24tLTspaWYoKGk9dFtuXVswXSk9PT0ocj1lKXx8aSE9aSYmciE9cilyZXR1cm4gbjtyZXR1cm4tMX1mdW5jdGlvbiBraSh0KXtyZXR1cm4hKCFSaSh0KXx8KGU9dCxiaSYmYmkgaW4gZSkpJiYoZnVuY3Rpb24odCl7dmFyIGU9UmkodCk/eGkuY2FsbCh0KTpcIlwiO3JldHVybiBlPT1haXx8ZT09bGl9KHQpfHxmdW5jdGlvbih0KXt2YXIgZT0hMTtpZihudWxsIT10JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LnRvU3RyaW5nKXRyeXtlPSEhKHQrXCJcIil9Y2F0Y2godCl7fXJldHVybiBlfSh0KT9FaTpjaSkudGVzdChmdW5jdGlvbih0KXtpZihudWxsIT10KXt0cnl7cmV0dXJuIG1pLmNhbGwodCl9Y2F0Y2godCl7fXRyeXtyZXR1cm4gdCtcIlwifWNhdGNoKHQpe319cmV0dXJuXCJcIn0odCkpO3ZhciBlfWZ1bmN0aW9uIFdpKHQsZSl7dmFyIGkscixuPXQuX19kYXRhX187cmV0dXJuKFwic3RyaW5nXCI9PShyPXR5cGVvZihpPWUpKXx8XCJudW1iZXJcIj09cnx8XCJzeW1ib2xcIj09cnx8XCJib29sZWFuXCI9PXI/XCJfX3Byb3RvX19cIiE9PWk6bnVsbD09PWkpP25bXCJzdHJpbmdcIj09dHlwZW9mIGU/XCJzdHJpbmdcIjpcImhhc2hcIl06bi5tYXB9ZnVuY3Rpb24gVGkodCxlKXt2YXIgaT1mdW5jdGlvbih0LGUpe3JldHVybiBudWxsPT10P3ZvaWQgMDp0W2VdfSh0LGUpO3JldHVybiBraShpKT9pOnZvaWQgMH1mdW5jdGlvbiBqaSh0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihzaSk7dmFyIGk9ZnVuY3Rpb24oKXt2YXIgcj1hcmd1bWVudHMsbj1lP2UuYXBwbHkodGhpcyxyKTpyWzBdLHM9aS5jYWNoZTtpZihzLmhhcyhuKSlyZXR1cm4gcy5nZXQobik7dmFyIG89dC5hcHBseSh0aGlzLHIpO3JldHVybiBpLmNhY2hlPXMuc2V0KG4sbyksb307cmV0dXJuIGkuY2FjaGU9bmV3KGppLkNhY2hlfHxMaSksaX1mdW5jdGlvbiBSaSh0KXt2YXIgZT10eXBlb2YgdDtyZXR1cm4hIXQmJihcIm9iamVjdFwiPT1lfHxcImZ1bmN0aW9uXCI9PWUpfVNpLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189X2k/X2kobnVsbCk6e319LFNpLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaGFzKHQpJiZkZWxldGUgdGhpcy5fX2RhdGFfX1t0XX0sU2kucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fO2lmKF9pKXt2YXIgaT1lW3RdO3JldHVybiBpPT09b2k/dm9pZCAwOml9cmV0dXJuIHlpLmNhbGwoZSx0KT9lW3RdOnZvaWQgMH0sU2kucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fO3JldHVybiBfaT92b2lkIDAhPT1lW3RdOnlpLmNhbGwoZSx0KX0sU2kucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9fZGF0YV9fW3RdPV9pJiZ2b2lkIDA9PT1lP29pOmUsdGhpc30sQWkucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz1bXX0sQWkucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fLGk9TWkoZSx0KTtyZXR1cm4hKGk8MHx8KGk9PWUubGVuZ3RoLTE/ZS5wb3AoKTp3aS5jYWxsKGUsaSwxKSwwKSl9LEFpLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXyxpPU1pKGUsdCk7cmV0dXJuIGk8MD92b2lkIDA6ZVtpXVsxXX0sQWkucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gTWkodGhpcy5fX2RhdGFfXyx0KT4tMX0sQWkucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuX19kYXRhX18scj1NaShpLHQpO3JldHVybiByPDA/aS5wdXNoKFt0LGVdKTppW3JdWzFdPWUsdGhpc30sTGkucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgU2ksbWFwOm5ldyhPaXx8QWkpLHN0cmluZzpuZXcgU2l9fSxMaS5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3JldHVybiBXaSh0aGlzLHQpLmRlbGV0ZSh0KX0sTGkucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gV2kodGhpcyx0KS5nZXQodCl9LExpLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIFdpKHRoaXMsdCkuaGFzKHQpfSxMaS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIFdpKHRoaXMsdCkuc2V0KHQsZSksdGhpc30samkuQ2FjaGU9TGk7dmFyIE5pPWppLHppPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcClyZXR1cm4gTWFwO2Z1bmN0aW9uIHQodCxlKXt2YXIgaT0tMTtyZXR1cm4gdC5zb21lKGZ1bmN0aW9uKHQscil7cmV0dXJuIHRbMF09PT1lJiYoaT1yLCEwKX0pLGl9cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3RoaXMuX19lbnRyaWVzX189W119cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX19lbnRyaWVzX18ubGVuZ3RofSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGUucHJvdG90eXBlLmdldD1mdW5jdGlvbihlKXt2YXIgaT10KHRoaXMuX19lbnRyaWVzX18sZSkscj10aGlzLl9fZW50cmllc19fW2ldO3JldHVybiByJiZyWzFdfSxlLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oZSxpKXt2YXIgcj10KHRoaXMuX19lbnRyaWVzX18sZSk7fnI/dGhpcy5fX2VudHJpZXNfX1tyXVsxXT1pOnRoaXMuX19lbnRyaWVzX18ucHVzaChbZSxpXSl9LGUucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihlKXt2YXIgaT10aGlzLl9fZW50cmllc19fLHI9dChpLGUpO35yJiZpLnNwbGljZShyLDEpfSxlLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oZSl7cmV0dXJuISF+dCh0aGlzLl9fZW50cmllc19fLGUpfSxlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19lbnRyaWVzX18uc3BsaWNlKDApfSxlLnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09ZSYmKGU9bnVsbCk7Zm9yKHZhciBpPTAscj10aGlzLl9fZW50cmllc19fO2k8ci5sZW5ndGg7aSsrKXt2YXIgbj1yW2ldO3QuY2FsbChlLG5bMV0sblswXSl9fSxlfSgpfSgpLENpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmd2luZG93LmRvY3VtZW50PT09ZG9jdW1lbnQsVmk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLk1hdGg9PT1NYXRoP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT09TWF0aD9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT09TWF0aD93aW5kb3c6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLERpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChWaSk6ZnVuY3Rpb24odCl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gdChEYXRlLm5vdygpKX0sMWUzLzYwKX0sQmk9Mjt2YXIgSWk9MjAsUGk9W1widG9wXCIsXCJyaWdodFwiLFwiYm90dG9tXCIsXCJsZWZ0XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJzaXplXCIsXCJ3ZWlnaHRcIl0sSGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIscWk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5jb25uZWN0ZWRfPSExLHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF89ITEsdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl89bnVsbCx0aGlzLm9ic2VydmVyc189W10sdGhpcy5vblRyYW5zaXRpb25FbmRfPXRoaXMub25UcmFuc2l0aW9uRW5kXy5iaW5kKHRoaXMpLHRoaXMucmVmcmVzaD1mdW5jdGlvbih0LGUpe3ZhciBpPSExLHI9ITEsbj0wO2Z1bmN0aW9uIHMoKXtpJiYoaT0hMSx0KCkpLHImJmEoKX1mdW5jdGlvbiBvKCl7RGkocyl9ZnVuY3Rpb24gYSgpe3ZhciB0PURhdGUubm93KCk7aWYoaSl7aWYodC1uPEJpKXJldHVybjtyPSEwfWVsc2UgaT0hMCxyPSExLHNldFRpbWVvdXQobyxlKTtuPXR9cmV0dXJuIGF9KHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLElpKX1yZXR1cm4gdC5wcm90b3R5cGUuYWRkT2JzZXJ2ZXI9ZnVuY3Rpb24odCl7fnRoaXMub2JzZXJ2ZXJzXy5pbmRleE9mKHQpfHx0aGlzLm9ic2VydmVyc18ucHVzaCh0KSx0aGlzLmNvbm5lY3RlZF98fHRoaXMuY29ubmVjdF8oKX0sdC5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2ZXI9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5vYnNlcnZlcnNfLGk9ZS5pbmRleE9mKHQpO35pJiZlLnNwbGljZShpLDEpLCFlLmxlbmd0aCYmdGhpcy5jb25uZWN0ZWRfJiZ0aGlzLmRpc2Nvbm5lY3RfKCl9LHQucHJvdG90eXBlLnJlZnJlc2g9ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZU9ic2VydmVyc18oKSYmdGhpcy5yZWZyZXNoKCl9LHQucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc189ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9ic2VydmVyc18uZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0LmdhdGhlckFjdGl2ZSgpLHQuaGFzQWN0aXZlKCl9KTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmJyb2FkY2FzdEFjdGl2ZSgpfSksdC5sZW5ndGg+MH0sdC5wcm90b3R5cGUuY29ubmVjdF89ZnVuY3Rpb24oKXtDaSYmIXRoaXMuY29ubmVjdGVkXyYmKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsdGhpcy5vblRyYW5zaXRpb25FbmRfKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVmcmVzaCksSGk/KHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfPW5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucmVmcmVzaCksdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8ub2JzZXJ2ZShkb2N1bWVudCx7YXR0cmlidXRlczohMCxjaGlsZExpc3Q6ITAsY2hhcmFjdGVyRGF0YTohMCxzdWJ0cmVlOiEwfSkpOihkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NU3VidHJlZU1vZGlmaWVkXCIsdGhpcy5yZWZyZXNoKSx0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfPSEwKSx0aGlzLmNvbm5lY3RlZF89ITApfSx0LnByb3RvdHlwZS5kaXNjb25uZWN0Xz1mdW5jdGlvbigpe0NpJiZ0aGlzLmNvbm5lY3RlZF8mJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHRoaXMub25UcmFuc2l0aW9uRW5kXyksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlZnJlc2gpLHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfJiZ0aGlzLm11dGF0aW9uc09ic2VydmVyXy5kaXNjb25uZWN0KCksdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyYmZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTVN1YnRyZWVNb2RpZmllZFwiLHRoaXMucmVmcmVzaCksdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl89bnVsbCx0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfPSExLHRoaXMuY29ubmVjdGVkXz0hMSl9LHQucHJvdG90eXBlLm9uVHJhbnNpdGlvbkVuZF89ZnVuY3Rpb24odCl7dmFyIGU9dC5wcm9wZXJ0eU5hbWUsaT12b2lkIDA9PT1lP1wiXCI6ZTtQaS5zb21lKGZ1bmN0aW9uKHQpe3JldHVybiEhfmkuaW5kZXhPZih0KX0pJiZ0aGlzLnJlZnJlc2goKX0sdC5nZXRJbnN0YW5jZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmluc3RhbmNlX3x8KHRoaXMuaW5zdGFuY2VfPW5ldyB0KSx0aGlzLmluc3RhbmNlX30sdC5pbnN0YW5jZV89bnVsbCx0fSgpLEZpPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpPTAscj1PYmplY3Qua2V5cyhlKTtpPHIubGVuZ3RoO2krKyl7dmFyIG49cltpXTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHt2YWx1ZTplW25dLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITEsY29uZmlndXJhYmxlOiEwfSl9cmV0dXJuIHR9LCRpPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lm93bmVyRG9jdW1lbnQmJnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld3x8Vml9LFhpPVFpKDAsMCwwLDApO2Z1bmN0aW9uIFlpKHQpe3JldHVybiBwYXJzZUZsb2F0KHQpfHwwfWZ1bmN0aW9uIEdpKHQpe2Zvcih2YXIgZT1bXSxpPTE7aTxhcmd1bWVudHMubGVuZ3RoO2krKyllW2ktMV09YXJndW1lbnRzW2ldO3JldHVybiBlLnJlZHVjZShmdW5jdGlvbihlLGkpe3JldHVybiBlK1lpKHRbXCJib3JkZXItXCIraStcIi13aWR0aFwiXSl9LDApfWZ1bmN0aW9uIEtpKHQpe3ZhciBlPXQuY2xpZW50V2lkdGgsaT10LmNsaWVudEhlaWdodDtpZighZSYmIWkpcmV0dXJuIFhpO3ZhciByPSRpKHQpLmdldENvbXB1dGVkU3R5bGUodCksbj1mdW5jdGlvbih0KXtmb3IodmFyIGU9e30saT0wLHI9W1widG9wXCIsXCJyaWdodFwiLFwiYm90dG9tXCIsXCJsZWZ0XCJdO2k8ci5sZW5ndGg7aSsrKXt2YXIgbj1yW2ldLHM9dFtcInBhZGRpbmctXCIrbl07ZVtuXT1ZaShzKX1yZXR1cm4gZX0ocikscz1uLmxlZnQrbi5yaWdodCxvPW4udG9wK24uYm90dG9tLGE9WWkoci53aWR0aCksbD1ZaShyLmhlaWdodCk7aWYoXCJib3JkZXItYm94XCI9PT1yLmJveFNpemluZyYmKE1hdGgucm91bmQoYStzKSE9PWUmJihhLT1HaShyLFwibGVmdFwiLFwicmlnaHRcIikrcyksTWF0aC5yb3VuZChsK28pIT09aSYmKGwtPUdpKHIsXCJ0b3BcIixcImJvdHRvbVwiKStvKSksIWZ1bmN0aW9uKHQpe3JldHVybiB0PT09JGkodCkuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50fSh0KSl7dmFyIGM9TWF0aC5yb3VuZChhK3MpLWUsdT1NYXRoLnJvdW5kKGwrbyktaTsxIT09TWF0aC5hYnMoYykmJihhLT1jKSwxIT09TWF0aC5hYnModSkmJihsLT11KX1yZXR1cm4gUWkobi5sZWZ0LG4udG9wLGEsbCl9dmFyIFVpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTVkdHcmFwaGljc0VsZW1lbnQ/ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiAkaSh0KS5TVkdHcmFwaGljc0VsZW1lbnR9OmZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgJGkodCkuU1ZHRWxlbWVudCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5nZXRCQm94fTtmdW5jdGlvbiBKaSh0KXtyZXR1cm4gQ2k/VWkodCk/ZnVuY3Rpb24odCl7dmFyIGU9dC5nZXRCQm94KCk7cmV0dXJuIFFpKDAsMCxlLndpZHRoLGUuaGVpZ2h0KX0odCk6S2kodCk6WGl9ZnVuY3Rpb24gUWkodCxlLGkscil7cmV0dXJue3g6dCx5OmUsd2lkdGg6aSxoZWlnaHQ6cn19dmFyIFppPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt0aGlzLmJyb2FkY2FzdFdpZHRoPTAsdGhpcy5icm9hZGNhc3RIZWlnaHQ9MCx0aGlzLmNvbnRlbnRSZWN0Xz1RaSgwLDAsMCwwKSx0aGlzLnRhcmdldD10fXJldHVybiB0LnByb3RvdHlwZS5pc0FjdGl2ZT1mdW5jdGlvbigpe3ZhciB0PUppKHRoaXMudGFyZ2V0KTtyZXR1cm4gdGhpcy5jb250ZW50UmVjdF89dCx0LndpZHRoIT09dGhpcy5icm9hZGNhc3RXaWR0aHx8dC5oZWlnaHQhPT10aGlzLmJyb2FkY2FzdEhlaWdodH0sdC5wcm90b3R5cGUuYnJvYWRjYXN0UmVjdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuY29udGVudFJlY3RfO3JldHVybiB0aGlzLmJyb2FkY2FzdFdpZHRoPXQud2lkdGgsdGhpcy5icm9hZGNhc3RIZWlnaHQ9dC5oZWlnaHQsdH0sdH0oKSx0cj1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0LGUpe3ZhciBpLHIsbixzLG8sYSxsLGM9KHI9KGk9ZSkueCxuPWkueSxzPWkud2lkdGgsbz1pLmhlaWdodCxhPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBET01SZWN0UmVhZE9ubHk/RE9NUmVjdFJlYWRPbmx5Ok9iamVjdCxsPU9iamVjdC5jcmVhdGUoYS5wcm90b3R5cGUpLEZpKGwse3g6cix5Om4sd2lkdGg6cyxoZWlnaHQ6byx0b3A6bixyaWdodDpyK3MsYm90dG9tOm8rbixsZWZ0OnJ9KSxsKTtGaSh0aGlzLHt0YXJnZXQ6dCxjb250ZW50UmVjdDpjfSl9fSgpLGVyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsaSl7aWYodGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfPVtdLHRoaXMub2JzZXJ2YXRpb25zXz1uZXcgemksXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGNhbGxiYWNrIHByb3ZpZGVkIGFzIHBhcmFtZXRlciAxIGlzIG5vdCBhIGZ1bmN0aW9uLlwiKTt0aGlzLmNhbGxiYWNrXz10LHRoaXMuY29udHJvbGxlcl89ZSx0aGlzLmNhbGxiYWNrQ3R4Xz1pfXJldHVybiB0LnByb3RvdHlwZS5vYnNlcnZlPWZ1bmN0aW9uKHQpe2lmKCFhcmd1bWVudHMubGVuZ3RoKXRocm93IG5ldyBUeXBlRXJyb3IoXCIxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBFbGVtZW50JiZFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KXtpZighKHQgaW5zdGFuY2VvZiAkaSh0KS5FbGVtZW50KSl0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTt2YXIgZT10aGlzLm9ic2VydmF0aW9uc187ZS5oYXModCl8fChlLnNldCh0LG5ldyBaaSh0KSksdGhpcy5jb250cm9sbGVyXy5hZGRPYnNlcnZlcih0aGlzKSx0aGlzLmNvbnRyb2xsZXJfLnJlZnJlc2goKSl9fSx0LnByb3RvdHlwZS51bm9ic2VydmU9ZnVuY3Rpb24odCl7aWYoIWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIjEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEVsZW1lbnQmJkVsZW1lbnQgaW5zdGFuY2VvZiBPYmplY3Qpe2lmKCEodCBpbnN0YW5jZW9mICRpKHQpLkVsZW1lbnQpKXRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO3ZhciBlPXRoaXMub2JzZXJ2YXRpb25zXztlLmhhcyh0KSYmKGUuZGVsZXRlKHQpLGUuc2l6ZXx8dGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKSl9fSx0LnByb3RvdHlwZS5kaXNjb25uZWN0PWZ1bmN0aW9uKCl7dGhpcy5jbGVhckFjdGl2ZSgpLHRoaXMub2JzZXJ2YXRpb25zXy5jbGVhcigpLHRoaXMuY29udHJvbGxlcl8ucmVtb3ZlT2JzZXJ2ZXIodGhpcyl9LHQucHJvdG90eXBlLmdhdGhlckFjdGl2ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5jbGVhckFjdGl2ZSgpLHRoaXMub2JzZXJ2YXRpb25zXy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuaXNBY3RpdmUoKSYmdC5hY3RpdmVPYnNlcnZhdGlvbnNfLnB1c2goZSl9KX0sdC5wcm90b3R5cGUuYnJvYWRjYXN0QWN0aXZlPWZ1bmN0aW9uKCl7aWYodGhpcy5oYXNBY3RpdmUoKSl7dmFyIHQ9dGhpcy5jYWxsYmFja0N0eF8sZT10aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuZXcgdHIodC50YXJnZXQsdC5icm9hZGNhc3RSZWN0KCkpfSk7dGhpcy5jYWxsYmFja18uY2FsbCh0LGUsdCksdGhpcy5jbGVhckFjdGl2ZSgpfX0sdC5wcm90b3R5cGUuY2xlYXJBY3RpdmU9ZnVuY3Rpb24oKXt0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18uc3BsaWNlKDApfSx0LnByb3RvdHlwZS5oYXNBY3RpdmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLmxlbmd0aD4wfSx0fSgpLGlyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBXZWFrTWFwP25ldyBXZWFrTWFwOm5ldyB6aSxycj1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiB0KGUpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24uXCIpO2lmKCFhcmd1bWVudHMubGVuZ3RoKXRocm93IG5ldyBUeXBlRXJyb3IoXCIxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO3ZhciBpPXFpLmdldEluc3RhbmNlKCkscj1uZXcgZXIoZSxpLHRoaXMpO2lyLnNldCh0aGlzLHIpfX0oKTtbXCJvYnNlcnZlXCIsXCJ1bm9ic2VydmVcIixcImRpc2Nvbm5lY3RcIl0uZm9yRWFjaChmdW5jdGlvbih0KXtyci5wcm90b3R5cGVbdF09ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4oZT1pci5nZXQodGhpcykpW3RdLmFwcGx5KGUsYXJndW1lbnRzKX19KTt2YXIgbnI9dm9pZCAwIT09VmkuUmVzaXplT2JzZXJ2ZXI/VmkuUmVzaXplT2JzZXJ2ZXI6cnIsc3I9IShcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93fHwhd2luZG93LmRvY3VtZW50fHwhd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpLG9yPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLGkpe3ZhciByPXRoaXM7dGhpcy5vblNjcm9sbD1mdW5jdGlvbigpe3Iuc2Nyb2xsWFRpY2tpbmd8fCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIuc2Nyb2xsWCksci5zY3JvbGxYVGlja2luZz0hMCksci5zY3JvbGxZVGlja2luZ3x8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoci5zY3JvbGxZKSxyLnNjcm9sbFlUaWNraW5nPSEwKX0sdGhpcy5zY3JvbGxYPWZ1bmN0aW9uKCl7ci5heGlzLnguaXNPdmVyZmxvd2luZyYmKHIuc2hvd1Njcm9sbGJhcihcInhcIiksci5wb3NpdGlvblNjcm9sbGJhcihcInhcIikpLHIuc2Nyb2xsWFRpY2tpbmc9ITF9LHRoaXMuc2Nyb2xsWT1mdW5jdGlvbigpe3IuYXhpcy55LmlzT3ZlcmZsb3dpbmcmJihyLnNob3dTY3JvbGxiYXIoXCJ5XCIpLHIucG9zaXRpb25TY3JvbGxiYXIoXCJ5XCIpKSxyLnNjcm9sbFlUaWNraW5nPSExfSx0aGlzLm9uTW91c2VFbnRlcj1mdW5jdGlvbigpe3Iuc2hvd1Njcm9sbGJhcihcInhcIiksci5zaG93U2Nyb2xsYmFyKFwieVwiKX0sdGhpcy5vbk1vdXNlTW92ZT1mdW5jdGlvbih0KXtyLm1vdXNlWD10LmNsaWVudFgsci5tb3VzZVk9dC5jbGllbnRZLChyLmF4aXMueC5pc092ZXJmbG93aW5nfHxyLmF4aXMueC5mb3JjZVZpc2libGUpJiZyLm9uTW91c2VNb3ZlRm9yQXhpcyhcInhcIiksKHIuYXhpcy55LmlzT3ZlcmZsb3dpbmd8fHIuYXhpcy55LmZvcmNlVmlzaWJsZSkmJnIub25Nb3VzZU1vdmVGb3JBeGlzKFwieVwiKX0sdGhpcy5vbk1vdXNlTGVhdmU9ZnVuY3Rpb24oKXtyLm9uTW91c2VNb3ZlLmNhbmNlbCgpLChyLmF4aXMueC5pc092ZXJmbG93aW5nfHxyLmF4aXMueC5mb3JjZVZpc2libGUpJiZyLm9uTW91c2VMZWF2ZUZvckF4aXMoXCJ4XCIpLChyLmF4aXMueS5pc092ZXJmbG93aW5nfHxyLmF4aXMueS5mb3JjZVZpc2libGUpJiZyLm9uTW91c2VMZWF2ZUZvckF4aXMoXCJ5XCIpLHIubW91c2VYPS0xLHIubW91c2VZPS0xfSx0aGlzLm9uV2luZG93UmVzaXplPWZ1bmN0aW9uKCl7ci5zY3JvbGxiYXJXaWR0aD1FZSgpLHIuaGlkZU5hdGl2ZVNjcm9sbGJhcigpfSx0aGlzLmhpZGVTY3JvbGxiYXJzPWZ1bmN0aW9uKCl7ci5heGlzLngudHJhY2sucmVjdD1yLmF4aXMueC50cmFjay5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxyLmF4aXMueS50cmFjay5yZWN0PXIuYXhpcy55LnRyYWNrLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHIuaXNXaXRoaW5Cb3VuZHMoci5heGlzLnkudHJhY2sucmVjdCl8fChyLmF4aXMueS5zY3JvbGxiYXIuZWwuY2xhc3NMaXN0LnJlbW92ZShyLmNsYXNzTmFtZXMudmlzaWJsZSksci5heGlzLnkuaXNWaXNpYmxlPSExKSxyLmlzV2l0aGluQm91bmRzKHIuYXhpcy54LnRyYWNrLnJlY3QpfHwoci5heGlzLnguc2Nyb2xsYmFyLmVsLmNsYXNzTGlzdC5yZW1vdmUoci5jbGFzc05hbWVzLnZpc2libGUpLHIuYXhpcy54LmlzVmlzaWJsZT0hMSl9LHRoaXMub25Qb2ludGVyRXZlbnQ9ZnVuY3Rpb24odCl7dmFyIGUsaTtyLmF4aXMueC5zY3JvbGxiYXIucmVjdD1yLmF4aXMueC5zY3JvbGxiYXIuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksci5heGlzLnkuc2Nyb2xsYmFyLnJlY3Q9ci5heGlzLnkuc2Nyb2xsYmFyLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLChyLmF4aXMueC5pc092ZXJmbG93aW5nfHxyLmF4aXMueC5mb3JjZVZpc2libGUpJiYoaT1yLmlzV2l0aGluQm91bmRzKHIuYXhpcy54LnNjcm9sbGJhci5yZWN0KSksKHIuYXhpcy55LmlzT3ZlcmZsb3dpbmd8fHIuYXhpcy55LmZvcmNlVmlzaWJsZSkmJihlPXIuaXNXaXRoaW5Cb3VuZHMoci5heGlzLnkuc2Nyb2xsYmFyLnJlY3QpKSwoZXx8aSkmJih0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSxcIm1vdXNlZG93blwiPT09dC50eXBlJiYoZSYmci5vbkRyYWdTdGFydCh0LFwieVwiKSxpJiZyLm9uRHJhZ1N0YXJ0KHQsXCJ4XCIpKSl9LHRoaXMuZHJhZz1mdW5jdGlvbihlKXt2YXIgaT1yLmF4aXNbci5kcmFnZ2VkQXhpc10udHJhY2ssbj1pLnJlY3Rbci5heGlzW3IuZHJhZ2dlZEF4aXNdLnNpemVBdHRyXSxzPXIuYXhpc1tyLmRyYWdnZWRBeGlzXS5zY3JvbGxiYXI7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIG89KChcInlcIj09PXIuZHJhZ2dlZEF4aXM/ZS5wYWdlWTplLnBhZ2VYKS1pLnJlY3Rbci5heGlzW3IuZHJhZ2dlZEF4aXNdLm9mZnNldEF0dHJdLXIuYXhpc1tyLmRyYWdnZWRBeGlzXS5kcmFnT2Zmc2V0KS9pLnJlY3Rbci5heGlzW3IuZHJhZ2dlZEF4aXNdLnNpemVBdHRyXSpyLmNvbnRlbnRXcmFwcGVyRWxbci5heGlzW3IuZHJhZ2dlZEF4aXNdLnNjcm9sbFNpemVBdHRyXTtcInhcIj09PXIuZHJhZ2dlZEF4aXMmJihvPXIuaXNSdGwmJnQuZ2V0UnRsSGVscGVycygpLmlzUnRsU2Nyb2xsYmFySW52ZXJ0ZWQ/by0obitzLnNpemUpOm8sbz1yLmlzUnRsJiZ0LmdldFJ0bEhlbHBlcnMoKS5pc1J0bFNjcm9sbGluZ0ludmVydGVkPy1vOm8pLHIuY29udGVudFdyYXBwZXJFbFtyLmF4aXNbci5kcmFnZ2VkQXhpc10uc2Nyb2xsT2Zmc2V0QXR0cl09b30sdGhpcy5vbkVuZERyYWc9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCksci5lbC5jbGFzc0xpc3QucmVtb3ZlKHIuY2xhc3NOYW1lcy5kcmFnZ2luZyksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHIuZHJhZyksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixyLm9uRW5kRHJhZyl9LHRoaXMuZWw9ZSx0aGlzLmZsYXNoVGltZW91dCx0aGlzLmNvbnRlbnRFbCx0aGlzLmNvbnRlbnRXcmFwcGVyRWwsdGhpcy5vZmZzZXRFbCx0aGlzLm1hc2tFbCx0aGlzLmdsb2JhbE9ic2VydmVyLHRoaXMubXV0YXRpb25PYnNlcnZlcix0aGlzLnJlc2l6ZU9ic2VydmVyLHRoaXMuc2Nyb2xsYmFyV2lkdGgsdGhpcy5taW5TY3JvbGxiYXJXaWR0aD0yMCx0aGlzLm9wdGlvbnM9T2JqZWN0LmFzc2lnbih7fSx0LmRlZmF1bHRPcHRpb25zLGkpLHRoaXMuY2xhc3NOYW1lcz1PYmplY3QuYXNzaWduKHt9LHQuZGVmYXVsdE9wdGlvbnMuY2xhc3NOYW1lcyx0aGlzLm9wdGlvbnMuY2xhc3NOYW1lcyksdGhpcy5pc1J0bCx0aGlzLmF4aXM9e3g6e3Njcm9sbE9mZnNldEF0dHI6XCJzY3JvbGxMZWZ0XCIsc2l6ZUF0dHI6XCJ3aWR0aFwiLHNjcm9sbFNpemVBdHRyOlwic2Nyb2xsV2lkdGhcIixvZmZzZXRBdHRyOlwibGVmdFwiLG92ZXJmbG93QXR0cjpcIm92ZXJmbG93WFwiLGRyYWdPZmZzZXQ6MCxpc092ZXJmbG93aW5nOiEwLGlzVmlzaWJsZTohMSxmb3JjZVZpc2libGU6ITEsdHJhY2s6e30sc2Nyb2xsYmFyOnt9fSx5OntzY3JvbGxPZmZzZXRBdHRyOlwic2Nyb2xsVG9wXCIsc2l6ZUF0dHI6XCJoZWlnaHRcIixzY3JvbGxTaXplQXR0cjpcInNjcm9sbEhlaWdodFwiLG9mZnNldEF0dHI6XCJ0b3BcIixvdmVyZmxvd0F0dHI6XCJvdmVyZmxvd1lcIixkcmFnT2Zmc2V0OjAsaXNPdmVyZmxvd2luZzohMCxpc1Zpc2libGU6ITEsZm9yY2VWaXNpYmxlOiExLHRyYWNrOnt9LHNjcm9sbGJhcjp7fX19LHRoaXMuZWwuU2ltcGxlQmFyfHwodGhpcy5yZWNhbGN1bGF0ZT1JZSh0aGlzLnJlY2FsY3VsYXRlLmJpbmQodGhpcyksNjQpLHRoaXMub25Nb3VzZU1vdmU9SWUodGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpLDY0KSx0aGlzLmhpZGVTY3JvbGxiYXJzPW5pKHRoaXMuaGlkZVNjcm9sbGJhcnMuYmluZCh0aGlzKSx0aGlzLm9wdGlvbnMudGltZW91dCksdGhpcy5vbldpbmRvd1Jlc2l6ZT1uaSh0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyksNjQse2xlYWRpbmc6ITB9KSx0LmdldFJ0bEhlbHBlcnM9TmkodC5nZXRSdGxIZWxwZXJzKSx0aGlzLmluaXQoKSl9dC5nZXRSdGxIZWxwZXJzPWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlubmVySFRNTD0nPGRpdiBjbGFzcz1cImhzLWR1bW15LXNjcm9sbGJhci1zaXplXCI+PGRpdiBzdHlsZT1cImhlaWdodDogMjAwJTsgd2lkdGg6IDIwMCU7IG1hcmdpbjogMTBweCAwO1wiPjwvZGl2PjwvZGl2Pic7dmFyIGk9ZS5maXJzdEVsZW1lbnRDaGlsZDtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGkpO3ZhciByPWkuZmlyc3RFbGVtZW50Q2hpbGQ7aS5zY3JvbGxMZWZ0PTA7dmFyIG49dC5nZXRPZmZzZXQoaSkscz10LmdldE9mZnNldChyKTtpLnNjcm9sbExlZnQ9OTk5O3ZhciBvPXQuZ2V0T2Zmc2V0KHIpO3JldHVybntpc1J0bFNjcm9sbGluZ0ludmVydGVkOm4ubGVmdCE9PXMubGVmdCYmcy5sZWZ0LW8ubGVmdCE9MCxpc1J0bFNjcm9sbGJhckludmVydGVkOm4ubGVmdCE9PXMubGVmdH19LHQuaW5pdEh0bWxBcGk9ZnVuY3Rpb24oKXt0aGlzLmluaXRET01Mb2FkZWRFbGVtZW50cz10aGlzLmluaXRET01Mb2FkZWRFbGVtZW50cy5iaW5kKHRoaXMpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBNdXRhdGlvbk9ic2VydmVyJiYodGhpcy5nbG9iYWxPYnNlcnZlcj1uZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihlKXtlLmZvckVhY2goZnVuY3Rpb24oZSl7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLmFkZGVkTm9kZXMsZnVuY3Rpb24oZSl7MT09PWUubm9kZVR5cGUmJihlLmhhc0F0dHJpYnV0ZShcImRhdGEtc2ltcGxlYmFyXCIpPyFlLlNpbXBsZUJhciYmbmV3IHQoZSx0LmdldEVsT3B0aW9ucyhlKSk6QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zaW1wbGViYXJdXCIpLGZ1bmN0aW9uKGUpeyFlLlNpbXBsZUJhciYmbmV3IHQoZSx0LmdldEVsT3B0aW9ucyhlKSl9KSl9KSxBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGUucmVtb3ZlZE5vZGVzLGZ1bmN0aW9uKHQpezE9PT10Lm5vZGVUeXBlJiYodC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNpbXBsZWJhclwiKT90LlNpbXBsZUJhciYmdC5TaW1wbGVCYXIudW5Nb3VudCgpOkFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2ltcGxlYmFyXVwiKSxmdW5jdGlvbih0KXt0LlNpbXBsZUJhciYmdC5TaW1wbGVCYXIudW5Nb3VudCgpfSkpfSl9KX0pLHRoaXMuZ2xvYmFsT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KSksXCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlJiYhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP3dpbmRvdy5zZXRUaW1lb3V0KHRoaXMuaW5pdERPTUxvYWRlZEVsZW1lbnRzKTooZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIix0aGlzLmluaXRET01Mb2FkZWRFbGVtZW50cyksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsdGhpcy5pbml0RE9NTG9hZGVkRWxlbWVudHMpKX0sdC5nZXRFbE9wdGlvbnM9ZnVuY3Rpb24odCl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UuY2FsbCh0LmF0dHJpYnV0ZXMsZnVuY3Rpb24odCxlKXt2YXIgaT1lLm5hbWUubWF0Y2goL2RhdGEtc2ltcGxlYmFyLSguKykvKTtpZihpKXt2YXIgcj1pWzFdLnJlcGxhY2UoL1xcVysoLikvZyxmdW5jdGlvbih0LGUpe3JldHVybiBlLnRvVXBwZXJDYXNlKCl9KTtzd2l0Y2goZS52YWx1ZSl7Y2FzZVwidHJ1ZVwiOnRbcl09ITA7YnJlYWs7Y2FzZVwiZmFsc2VcIjp0W3JdPSExO2JyZWFrO2Nhc2Ugdm9pZCAwOnRbcl09ITA7YnJlYWs7ZGVmYXVsdDp0W3JdPWUudmFsdWV9fXJldHVybiB0fSx7fSl9LHQucmVtb3ZlT2JzZXJ2ZXI9ZnVuY3Rpb24oKXt0aGlzLmdsb2JhbE9ic2VydmVyLmRpc2Nvbm5lY3QoKX0sdC5pbml0RE9NTG9hZGVkRWxlbWVudHM9ZnVuY3Rpb24oKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLHRoaXMuaW5pdERPTUxvYWRlZEVsZW1lbnRzKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIix0aGlzLmluaXRET01Mb2FkZWRFbGVtZW50cyksQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2ltcGxlYmFyXVwiKSxmdW5jdGlvbihlKXtlLlNpbXBsZUJhcnx8bmV3IHQoZSx0LmdldEVsT3B0aW9ucyhlKSl9KX0sdC5nZXRPZmZzZXQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm57dG9wOmUudG9wKyh3aW5kb3cucGFnZVlPZmZzZXR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApLGxlZnQ6ZS5sZWZ0Kyh3aW5kb3cucGFnZVhPZmZzZXR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0KX19O3ZhciBlPXQucHJvdG90eXBlO3JldHVybiBlLmluaXQ9ZnVuY3Rpb24oKXt0aGlzLmVsLlNpbXBsZUJhcj10aGlzLHNyJiYodGhpcy5pbml0RE9NKCksdGhpcy5zY3JvbGxiYXJXaWR0aD1FZSgpLHRoaXMucmVjYWxjdWxhdGUoKSx0aGlzLmluaXRMaXN0ZW5lcnMoKSl9LGUuaW5pdERPTT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7aWYoQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMuZWwuY2hpbGRyZW4sZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xhc3NMaXN0LmNvbnRhaW5zKHQuY2xhc3NOYW1lcy53cmFwcGVyKX0pLmxlbmd0aCl0aGlzLndyYXBwZXJFbD10aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5jbGFzc05hbWVzLndyYXBwZXIpLHRoaXMuY29udGVudFdyYXBwZXJFbD10aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5jbGFzc05hbWVzLmNvbnRlbnRXcmFwcGVyKSx0aGlzLm9mZnNldEVsPXRoaXMuZWwucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLmNsYXNzTmFtZXMub2Zmc2V0KSx0aGlzLm1hc2tFbD10aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5jbGFzc05hbWVzLm1hc2spLHRoaXMuY29udGVudEVsPXRoaXMuZWwucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLmNsYXNzTmFtZXMuY29udGVudEVsKSx0aGlzLnBsYWNlaG9sZGVyRWw9dGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMuY2xhc3NOYW1lcy5wbGFjZWhvbGRlciksdGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWw9dGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMuY2xhc3NOYW1lcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwpLHRoaXMuaGVpZ2h0QXV0b09ic2VydmVyRWw9dGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMuY2xhc3NOYW1lcy5oZWlnaHRBdXRvT2JzZXJ2ZXJFbCksdGhpcy5heGlzLngudHJhY2suZWw9dGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMuY2xhc3NOYW1lcy50cmFjaytcIi5cIit0aGlzLmNsYXNzTmFtZXMuaG9yaXpvbnRhbCksdGhpcy5heGlzLnkudHJhY2suZWw9dGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMuY2xhc3NOYW1lcy50cmFjaytcIi5cIit0aGlzLmNsYXNzTmFtZXMudmVydGljYWwpO2Vsc2V7Zm9yKHRoaXMud3JhcHBlckVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5jb250ZW50V3JhcHBlckVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5vZmZzZXRFbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMubWFza0VsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5jb250ZW50RWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLnBsYWNlaG9sZGVyRWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLmhlaWdodEF1dG9PYnNlcnZlcldyYXBwZXJFbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuaGVpZ2h0QXV0b09ic2VydmVyRWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLndyYXBwZXJFbC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy53cmFwcGVyKSx0aGlzLmNvbnRlbnRXcmFwcGVyRWwuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuY29udGVudFdyYXBwZXIpLHRoaXMub2Zmc2V0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMub2Zmc2V0KSx0aGlzLm1hc2tFbC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5tYXNrKSx0aGlzLmNvbnRlbnRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5jb250ZW50RWwpLHRoaXMucGxhY2Vob2xkZXJFbC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5wbGFjZWhvbGRlciksdGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuaGVpZ2h0QXV0b09ic2VydmVyV3JhcHBlckVsKSx0aGlzLmhlaWdodEF1dG9PYnNlcnZlckVsLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmhlaWdodEF1dG9PYnNlcnZlckVsKTt0aGlzLmVsLmZpcnN0Q2hpbGQ7KXRoaXMuY29udGVudEVsLmFwcGVuZENoaWxkKHRoaXMuZWwuZmlyc3RDaGlsZCk7dGhpcy5jb250ZW50V3JhcHBlckVsLmFwcGVuZENoaWxkKHRoaXMuY29udGVudEVsKSx0aGlzLm9mZnNldEVsLmFwcGVuZENoaWxkKHRoaXMuY29udGVudFdyYXBwZXJFbCksdGhpcy5tYXNrRWwuYXBwZW5kQ2hpbGQodGhpcy5vZmZzZXRFbCksdGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwuYXBwZW5kQ2hpbGQodGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJFbCksdGhpcy53cmFwcGVyRWwuYXBwZW5kQ2hpbGQodGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwpLHRoaXMud3JhcHBlckVsLmFwcGVuZENoaWxkKHRoaXMubWFza0VsKSx0aGlzLndyYXBwZXJFbC5hcHBlbmRDaGlsZCh0aGlzLnBsYWNlaG9sZGVyRWwpLHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyRWwpfWlmKCF0aGlzLmF4aXMueC50cmFjay5lbHx8IXRoaXMuYXhpcy55LnRyYWNrLmVsKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLnRyYWNrKSxpLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLnNjcm9sbGJhciksZS5hcHBlbmRDaGlsZChpKSx0aGlzLmF4aXMueC50cmFjay5lbD1lLmNsb25lTm9kZSghMCksdGhpcy5heGlzLngudHJhY2suZWwuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuaG9yaXpvbnRhbCksdGhpcy5heGlzLnkudHJhY2suZWw9ZS5jbG9uZU5vZGUoITApLHRoaXMuYXhpcy55LnRyYWNrLmVsLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLnZlcnRpY2FsKSx0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYXhpcy54LnRyYWNrLmVsKSx0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYXhpcy55LnRyYWNrLmVsKX10aGlzLmF4aXMueC5zY3JvbGxiYXIuZWw9dGhpcy5heGlzLngudHJhY2suZWwucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLmNsYXNzTmFtZXMuc2Nyb2xsYmFyKSx0aGlzLmF4aXMueS5zY3JvbGxiYXIuZWw9dGhpcy5heGlzLnkudHJhY2suZWwucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLmNsYXNzTmFtZXMuc2Nyb2xsYmFyKSx0aGlzLm9wdGlvbnMuYXV0b0hpZGV8fCh0aGlzLmF4aXMueC5zY3JvbGxiYXIuZWwuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMudmlzaWJsZSksdGhpcy5heGlzLnkuc2Nyb2xsYmFyLmVsLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLnZpc2libGUpKSx0aGlzLmVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2ltcGxlYmFyXCIsXCJpbml0XCIpfSxlLmluaXRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMub3B0aW9ucy5hdXRvSGlkZSYmdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLHRoaXMub25Nb3VzZUVudGVyKSxbXCJtb3VzZWRvd25cIixcImNsaWNrXCIsXCJkYmxjbGlja1wiLFwidG91Y2hzdGFydFwiLFwidG91Y2hlbmRcIixcInRvdWNobW92ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3QuZWwuYWRkRXZlbnRMaXN0ZW5lcihlLHQub25Qb2ludGVyRXZlbnQsITApfSksdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5vbk1vdXNlTW92ZSksdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMub25Nb3VzZUxlYXZlKSx0aGlzLmNvbnRlbnRXcmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMub25TY3JvbGwpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5vbldpbmRvd1Jlc2l6ZSksdGhpcy5yZXNpemVPYnNlcnZlcj1uZXcgbnIodGhpcy5yZWNhbGN1bGF0ZSksdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwpLHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNvbnRlbnRFbCl9LGUucmVjYWxjdWxhdGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmhlaWdodEF1dG9PYnNlcnZlckVsLm9mZnNldEhlaWdodDw9MSxlPXRoaXMuaGVpZ2h0QXV0b09ic2VydmVyRWwub2Zmc2V0V2lkdGg8PTE7dGhpcy5lbFN0eWxlcz13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKSx0aGlzLmlzUnRsPVwicnRsXCI9PT10aGlzLmVsU3R5bGVzLmRpcmVjdGlvbix0aGlzLmNvbnRlbnRFbC5zdHlsZS5wYWRkaW5nPXRoaXMuZWxTdHlsZXMucGFkZGluZ1RvcCtcIiBcIit0aGlzLmVsU3R5bGVzLnBhZGRpbmdSaWdodCtcIiBcIit0aGlzLmVsU3R5bGVzLnBhZGRpbmdCb3R0b20rXCIgXCIrdGhpcy5lbFN0eWxlcy5wYWRkaW5nTGVmdCx0aGlzLndyYXBwZXJFbC5zdHlsZS5tYXJnaW49XCItXCIrdGhpcy5lbFN0eWxlcy5wYWRkaW5nVG9wK1wiIC1cIit0aGlzLmVsU3R5bGVzLnBhZGRpbmdSaWdodCtcIiAtXCIrdGhpcy5lbFN0eWxlcy5wYWRkaW5nQm90dG9tK1wiIC1cIit0aGlzLmVsU3R5bGVzLnBhZGRpbmdMZWZ0LHRoaXMuY29udGVudFdyYXBwZXJFbC5zdHlsZS5oZWlnaHQ9dD9cImF1dG9cIjpcIjEwMCVcIix0aGlzLnBsYWNlaG9sZGVyRWwuc3R5bGUud2lkdGg9ZT90aGlzLmNvbnRlbnRFbC5vZmZzZXRXaWR0aCtcInB4XCI6XCJhdXRvXCIsdGhpcy5wbGFjZWhvbGRlckVsLnN0eWxlLmhlaWdodD10aGlzLmNvbnRlbnRFbC5zY3JvbGxIZWlnaHQrXCJweFwiLHRoaXMuYXhpcy54LmlzT3ZlcmZsb3dpbmc9dGhpcy5jb250ZW50V3JhcHBlckVsLnNjcm9sbFdpZHRoPnRoaXMuY29udGVudFdyYXBwZXJFbC5vZmZzZXRXaWR0aCx0aGlzLmF4aXMueS5pc092ZXJmbG93aW5nPXRoaXMuY29udGVudFdyYXBwZXJFbC5zY3JvbGxIZWlnaHQ+dGhpcy5jb250ZW50V3JhcHBlckVsLm9mZnNldEhlaWdodCx0aGlzLmF4aXMueC5pc092ZXJmbG93aW5nPVwiaGlkZGVuXCIhPT10aGlzLmVsU3R5bGVzLm92ZXJmbG93WCYmdGhpcy5heGlzLnguaXNPdmVyZmxvd2luZyx0aGlzLmF4aXMueS5pc092ZXJmbG93aW5nPVwiaGlkZGVuXCIhPT10aGlzLmVsU3R5bGVzLm92ZXJmbG93WSYmdGhpcy5heGlzLnkuaXNPdmVyZmxvd2luZyx0aGlzLmF4aXMueC5mb3JjZVZpc2libGU9XCJ4XCI9PT10aGlzLm9wdGlvbnMuZm9yY2VWaXNpYmxlfHwhMD09PXRoaXMub3B0aW9ucy5mb3JjZVZpc2libGUsdGhpcy5heGlzLnkuZm9yY2VWaXNpYmxlPVwieVwiPT09dGhpcy5vcHRpb25zLmZvcmNlVmlzaWJsZXx8ITA9PT10aGlzLm9wdGlvbnMuZm9yY2VWaXNpYmxlLHRoaXMuaGlkZU5hdGl2ZVNjcm9sbGJhcigpLHRoaXMuYXhpcy54LnRyYWNrLnJlY3Q9dGhpcy5heGlzLngudHJhY2suZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksdGhpcy5heGlzLnkudHJhY2sucmVjdD10aGlzLmF4aXMueS50cmFjay5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx0aGlzLmF4aXMueC5zY3JvbGxiYXIuc2l6ZT10aGlzLmdldFNjcm9sbGJhclNpemUoXCJ4XCIpLHRoaXMuYXhpcy55LnNjcm9sbGJhci5zaXplPXRoaXMuZ2V0U2Nyb2xsYmFyU2l6ZShcInlcIiksdGhpcy5heGlzLnguc2Nyb2xsYmFyLmVsLnN0eWxlLndpZHRoPXRoaXMuYXhpcy54LnNjcm9sbGJhci5zaXplK1wicHhcIix0aGlzLmF4aXMueS5zY3JvbGxiYXIuZWwuc3R5bGUuaGVpZ2h0PXRoaXMuYXhpcy55LnNjcm9sbGJhci5zaXplK1wicHhcIix0aGlzLnBvc2l0aW9uU2Nyb2xsYmFyKFwieFwiKSx0aGlzLnBvc2l0aW9uU2Nyb2xsYmFyKFwieVwiKSx0aGlzLnRvZ2dsZVRyYWNrVmlzaWJpbGl0eShcInhcIiksdGhpcy50b2dnbGVUcmFja1Zpc2liaWxpdHkoXCJ5XCIpfSxlLmdldFNjcm9sbGJhclNpemU9ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9XCJ5XCIpO3ZhciBlLGk9dGhpcy5zY3JvbGxiYXJXaWR0aD90aGlzLmNvbnRlbnRXcmFwcGVyRWxbdGhpcy5heGlzW3RdLnNjcm9sbFNpemVBdHRyXTp0aGlzLmNvbnRlbnRXcmFwcGVyRWxbdGhpcy5heGlzW3RdLnNjcm9sbFNpemVBdHRyXS10aGlzLm1pblNjcm9sbGJhcldpZHRoLHI9dGhpcy5heGlzW3RdLnRyYWNrLnJlY3RbdGhpcy5heGlzW3RdLnNpemVBdHRyXTtpZih0aGlzLmF4aXNbdF0uaXNPdmVyZmxvd2luZyl7dmFyIG49ci9pO3JldHVybiBlPU1hdGgubWF4KH5+KG4qciksdGhpcy5vcHRpb25zLnNjcm9sbGJhck1pblNpemUpLHRoaXMub3B0aW9ucy5zY3JvbGxiYXJNYXhTaXplJiYoZT1NYXRoLm1pbihlLHRoaXMub3B0aW9ucy5zY3JvbGxiYXJNYXhTaXplKSksZX19LGUucG9zaXRpb25TY3JvbGxiYXI9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9XCJ5XCIpO3ZhciBpPXRoaXMuY29udGVudFdyYXBwZXJFbFt0aGlzLmF4aXNbZV0uc2Nyb2xsU2l6ZUF0dHJdLHI9dGhpcy5heGlzW2VdLnRyYWNrLnJlY3RbdGhpcy5heGlzW2VdLnNpemVBdHRyXSxuPXBhcnNlSW50KHRoaXMuZWxTdHlsZXNbdGhpcy5heGlzW2VdLnNpemVBdHRyXSwxMCkscz10aGlzLmF4aXNbZV0uc2Nyb2xsYmFyLG89dGhpcy5jb250ZW50V3JhcHBlckVsW3RoaXMuYXhpc1tlXS5zY3JvbGxPZmZzZXRBdHRyXSxhPShvPVwieFwiPT09ZSYmdGhpcy5pc1J0bCYmdC5nZXRSdGxIZWxwZXJzKCkuaXNSdGxTY3JvbGxpbmdJbnZlcnRlZD8tbzpvKS8oaS1uKSxsPX5+KChyLXMuc2l6ZSkqYSk7bD1cInhcIj09PWUmJnRoaXMuaXNSdGwmJnQuZ2V0UnRsSGVscGVycygpLmlzUnRsU2Nyb2xsYmFySW52ZXJ0ZWQ/bCsoci1zLnNpemUpOmwscy5lbC5zdHlsZS50cmFuc2Zvcm09XCJ4XCI9PT1lP1widHJhbnNsYXRlM2QoXCIrbCtcInB4LCAwLCAwKVwiOlwidHJhbnNsYXRlM2QoMCwgXCIrbCtcInB4LCAwKVwifSxlLnRvZ2dsZVRyYWNrVmlzaWJpbGl0eT1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1cInlcIik7dmFyIGU9dGhpcy5heGlzW3RdLnRyYWNrLmVsLGk9dGhpcy5heGlzW3RdLnNjcm9sbGJhci5lbDt0aGlzLmF4aXNbdF0uaXNPdmVyZmxvd2luZ3x8dGhpcy5heGlzW3RdLmZvcmNlVmlzaWJsZT8oZS5zdHlsZS52aXNpYmlsaXR5PVwidmlzaWJsZVwiLHRoaXMuY29udGVudFdyYXBwZXJFbC5zdHlsZVt0aGlzLmF4aXNbdF0ub3ZlcmZsb3dBdHRyXT1cInNjcm9sbFwiKTooZS5zdHlsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCIsdGhpcy5jb250ZW50V3JhcHBlckVsLnN0eWxlW3RoaXMuYXhpc1t0XS5vdmVyZmxvd0F0dHJdPVwiaGlkZGVuXCIpLHRoaXMuYXhpc1t0XS5pc092ZXJmbG93aW5nP2kuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI6aS5zdHlsZS5kaXNwbGF5PVwibm9uZVwifSxlLmhpZGVOYXRpdmVTY3JvbGxiYXI9ZnVuY3Rpb24oKXtpZih0aGlzLm9mZnNldEVsLnN0eWxlW3RoaXMuaXNSdGw/XCJsZWZ0XCI6XCJyaWdodFwiXT10aGlzLmF4aXMueS5pc092ZXJmbG93aW5nfHx0aGlzLmF4aXMueS5mb3JjZVZpc2libGU/XCItXCIrKHRoaXMuc2Nyb2xsYmFyV2lkdGh8fHRoaXMubWluU2Nyb2xsYmFyV2lkdGgpK1wicHhcIjowLHRoaXMub2Zmc2V0RWwuc3R5bGUuYm90dG9tPXRoaXMuYXhpcy54LmlzT3ZlcmZsb3dpbmd8fHRoaXMuYXhpcy54LmZvcmNlVmlzaWJsZT9cIi1cIisodGhpcy5zY3JvbGxiYXJXaWR0aHx8dGhpcy5taW5TY3JvbGxiYXJXaWR0aCkrXCJweFwiOjAsIXRoaXMuc2Nyb2xsYmFyV2lkdGgpe3ZhciB0PVt0aGlzLmlzUnRsP1wicGFkZGluZ0xlZnRcIjpcInBhZGRpbmdSaWdodFwiXTt0aGlzLmNvbnRlbnRXcmFwcGVyRWwuc3R5bGVbdF09dGhpcy5heGlzLnkuaXNPdmVyZmxvd2luZ3x8dGhpcy5heGlzLnkuZm9yY2VWaXNpYmxlP3RoaXMubWluU2Nyb2xsYmFyV2lkdGgrXCJweFwiOjAsdGhpcy5jb250ZW50V3JhcHBlckVsLnN0eWxlLnBhZGRpbmdCb3R0b209dGhpcy5heGlzLnguaXNPdmVyZmxvd2luZ3x8dGhpcy5heGlzLnguZm9yY2VWaXNpYmxlP3RoaXMubWluU2Nyb2xsYmFyV2lkdGgrXCJweFwiOjB9fSxlLm9uTW91c2VNb3ZlRm9yQXhpcz1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1cInlcIiksdGhpcy5heGlzW3RdLnRyYWNrLnJlY3Q9dGhpcy5heGlzW3RdLnRyYWNrLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHRoaXMuYXhpc1t0XS5zY3JvbGxiYXIucmVjdD10aGlzLmF4aXNbdF0uc2Nyb2xsYmFyLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHRoaXMuaXNXaXRoaW5Cb3VuZHModGhpcy5heGlzW3RdLnNjcm9sbGJhci5yZWN0KT90aGlzLmF4aXNbdF0uc2Nyb2xsYmFyLmVsLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmhvdmVyKTp0aGlzLmF4aXNbdF0uc2Nyb2xsYmFyLmVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmhvdmVyKSx0aGlzLmlzV2l0aGluQm91bmRzKHRoaXMuYXhpc1t0XS50cmFjay5yZWN0KT8odGhpcy5zaG93U2Nyb2xsYmFyKHQpLHRoaXMuYXhpc1t0XS50cmFjay5lbC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5ob3ZlcikpOnRoaXMuYXhpc1t0XS50cmFjay5lbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5ob3Zlcil9LGUub25Nb3VzZUxlYXZlRm9yQXhpcz1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1cInlcIiksdGhpcy5heGlzW3RdLnRyYWNrLmVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmhvdmVyKSx0aGlzLmF4aXNbdF0uc2Nyb2xsYmFyLmVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmhvdmVyKX0sZS5zaG93U2Nyb2xsYmFyPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PVwieVwiKTt2YXIgZT10aGlzLmF4aXNbdF0uc2Nyb2xsYmFyLmVsO3RoaXMuYXhpc1t0XS5pc1Zpc2libGV8fChlLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLnZpc2libGUpLHRoaXMuYXhpc1t0XS5pc1Zpc2libGU9ITApLHRoaXMub3B0aW9ucy5hdXRvSGlkZSYmdGhpcy5oaWRlU2Nyb2xsYmFycygpfSxlLm9uRHJhZ1N0YXJ0PWZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09ZSYmKGU9XCJ5XCIpO3ZhciBpPXRoaXMuYXhpc1tlXS5zY3JvbGxiYXIuZWwscj1cInlcIj09PWU/dC5wYWdlWTp0LnBhZ2VYO3RoaXMuYXhpc1tlXS5kcmFnT2Zmc2V0PXItaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVt0aGlzLmF4aXNbZV0ub2Zmc2V0QXR0cl0sdGhpcy5kcmFnZ2VkQXhpcz1lLHRoaXMuZWwuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuZHJhZ2dpbmcpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLmRyYWcpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5vbkVuZERyYWcpfSxlLmdldENvbnRlbnRFbGVtZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGVudEVsfSxlLmdldFNjcm9sbEVsZW1lbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZW50V3JhcHBlckVsfSxlLnJlbW92ZUxpc3RlbmVycz1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5vcHRpb25zLmF1dG9IaWRlJiZ0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5vbk1vdXNlRW50ZXIpLFtcIm1vdXNlZG93blwiLFwiY2xpY2tcIixcImRibGNsaWNrXCIsXCJ0b3VjaHN0YXJ0XCIsXCJ0b3VjaGVuZFwiLFwidG91Y2htb3ZlXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKGUsdC5vblBvaW50ZXJFdmVudCl9KSx0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uTW91c2VNb3ZlKSx0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5vbk1vdXNlTGVhdmUpLHRoaXMuY29udGVudFdyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5vblNjcm9sbCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLm9uV2luZG93UmVzaXplKSx0aGlzLm11dGF0aW9uT2JzZXJ2ZXImJnRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCksdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCksdGhpcy5yZWNhbGN1bGF0ZS5jYW5jZWwoKSx0aGlzLm9uTW91c2VNb3ZlLmNhbmNlbCgpLHRoaXMuaGlkZVNjcm9sbGJhcnMuY2FuY2VsKCksdGhpcy5vbldpbmRvd1Jlc2l6ZS5jYW5jZWwoKX0sZS51bk1vdW50PWZ1bmN0aW9uKCl7dGhpcy5yZW1vdmVMaXN0ZW5lcnMoKSx0aGlzLmVsLlNpbXBsZUJhcj1udWxsfSxlLmlzQ2hpbGROb2RlPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT09dCYmKHQ9PT10aGlzLmVsfHx0aGlzLmlzQ2hpbGROb2RlKHQucGFyZW50Tm9kZSkpfSxlLmlzV2l0aGluQm91bmRzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1vdXNlWD49dC5sZWZ0JiZ0aGlzLm1vdXNlWDw9dC5sZWZ0K3Qud2lkdGgmJnRoaXMubW91c2VZPj10LnRvcCYmdGhpcy5tb3VzZVk8PXQudG9wK3QuaGVpZ2h0fSx0fSgpO3JldHVybiBvci5kZWZhdWx0T3B0aW9ucz17YXV0b0hpZGU6ITAsZm9yY2VWaXNpYmxlOiExLGNsYXNzTmFtZXM6e2NvbnRlbnRFbDpcInNpbXBsZWJhci1jb250ZW50XCIsY29udGVudFdyYXBwZXI6XCJzaW1wbGViYXItY29udGVudC13cmFwcGVyXCIsb2Zmc2V0Olwic2ltcGxlYmFyLW9mZnNldFwiLG1hc2s6XCJzaW1wbGViYXItbWFza1wiLHdyYXBwZXI6XCJzaW1wbGViYXItd3JhcHBlclwiLHBsYWNlaG9sZGVyOlwic2ltcGxlYmFyLXBsYWNlaG9sZGVyXCIsc2Nyb2xsYmFyOlwic2ltcGxlYmFyLXNjcm9sbGJhclwiLHRyYWNrOlwic2ltcGxlYmFyLXRyYWNrXCIsaGVpZ2h0QXV0b09ic2VydmVyV3JhcHBlckVsOlwic2ltcGxlYmFyLWhlaWdodC1hdXRvLW9ic2VydmVyLXdyYXBwZXJcIixoZWlnaHRBdXRvT2JzZXJ2ZXJFbDpcInNpbXBsZWJhci1oZWlnaHQtYXV0by1vYnNlcnZlclwiLHZpc2libGU6XCJzaW1wbGViYXItdmlzaWJsZVwiLGhvcml6b250YWw6XCJzaW1wbGViYXItaG9yaXpvbnRhbFwiLHZlcnRpY2FsOlwic2ltcGxlYmFyLXZlcnRpY2FsXCIsaG92ZXI6XCJzaW1wbGViYXItaG92ZXJcIixkcmFnZ2luZzpcInNpbXBsZWJhci1kcmFnZ2luZ1wifSxzY3JvbGxiYXJNaW5TaXplOjI1LHNjcm9sbGJhck1heFNpemU6MCx0aW1lb3V0OjFlM30sc3ImJm9yLmluaXRIdG1sQXBpKCksb3J9KTtcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\simplebar\\dist\\simplebar.min.js","/..\\..\\..\\..\\node_modules\\simplebar\\dist")
},{"6r38Q7":5,"buffer":3}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
(function sortableModule(factory) {
  "use strict";

  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = factory();
  } else {
    /* jshint sub:true */
    window["Sortable"] = factory();
  }
})(function sortableFactory() {
  "use strict";

  if (typeof window === "undefined" || !window.document) {
    return function sortableError() {
      throw new Error("Sortable.js requires a window with a document");
    };
  }

  var dragEl,
      parentEl,
      ghostEl,
      cloneEl,
      rootEl,
      nextEl,
      lastDownEl,
      scrollEl,
      scrollParentEl,
      scrollCustomFn,
      oldIndex,
      newIndex,
      oldDraggableIndex,
      newDraggableIndex,
      activeGroup,
      putSortable,
      autoScrolls = [],
      scrolling = false,
      awaitingDragStarted = false,
      ignoreNextClick = false,
      sortables = [],
      pointerElemChangedInterval,
      lastPointerElemX,
      lastPointerElemY,
      tapEvt,
      touchEvt,
      moved,
      lastTarget,
      lastDirection,
      pastFirstInvertThresh = false,
      isCircumstantialInvert = false,
      lastMode,
      // 'swap' or 'insert'
  targetMoveDistance,
      // For positioning ghost absolutely
  ghostRelativeParent,
      ghostRelativeParentInitialScroll = [],
      // (left, top)
  realDragElRect,
      // dragEl rect after current animation

  /** @const */
  R_SPACE = /\s+/g,
      expando = 'Sortable' + new Date().getTime(),
      win = window,
      document = win.document,
      parseInt = win.parseInt,
      setTimeout = win.setTimeout,
      $ = win.jQuery || win.Zepto,
      Polymer = win.Polymer,
      captureMode = {
    capture: false,
    passive: false
  },
      IE11OrLess = !!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),
      Edge = !!navigator.userAgent.match(/Edge/i),
      FireFox = !!navigator.userAgent.match(/firefox/i),
      Safari = !!(navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && !navigator.userAgent.match(/android/i)),
      IOS = !!navigator.userAgent.match(/iP(ad|od|hone)/i),
      PositionGhostAbsolutely = IOS,
      CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
      // This will not pass for IE9, because IE9 DnD only works on anchors
  supportDraggable = 'draggable' in document.createElement('div'),
      supportCssPointerEvents = function () {
    // false when <= IE11
    if (IE11OrLess) {
      return false;
    }

    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
  }(),
      _silent = false,
      _alignedSilent = false,
      abs = Math.abs,
      min = Math.min,
      max = Math.max,
      savedInputChecked = [],
      _detectDirection = function _detectDirection(el, options) {
    var elCSS = _css(el),
        elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
        child1 = _getChild(el, 0, options),
        child2 = _getChild(el, 1, options),
        firstChildCSS = child1 && _css(child1),
        secondChildCSS = child2 && _css(child2),
        firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + _getRect(child1).width,
        secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + _getRect(child2).width;

    if (elCSS.display === 'flex') {
      return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    }

    if (elCSS.display === 'grid') {
      return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    }

    if (child1 && firstChildCSS["float"] !== 'none') {
      var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
      return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }

    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
  },

  /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */
  _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    for (var i = 0; i < sortables.length; i++) {
      if (_lastChild(sortables[i])) continue;

      var rect = _getRect(sortables[i]),
          threshold = sortables[i][expando].options.emptyInsertThreshold,
          insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
          insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

      if (threshold && insideHorizontally && insideVertically) {
        return sortables[i];
      }
    }
  },
      _isClientInRowColumn = function _isClientInRowColumn(x, y, el, axis, options) {
    var targetRect = _getRect(el),
        targetS1Opp = axis === 'vertical' ? targetRect.left : targetRect.top,
        targetS2Opp = axis === 'vertical' ? targetRect.right : targetRect.bottom,
        mouseOnOppAxis = axis === 'vertical' ? x : y;

    return targetS1Opp < mouseOnOppAxis && mouseOnOppAxis < targetS2Opp;
  },
      _isElInRowColumn = function _isElInRowColumn(el1, el2, axis) {
    var el1Rect = el1 === dragEl && realDragElRect || _getRect(el1),
        el2Rect = el2 === dragEl && realDragElRect || _getRect(el2),
        el1S1Opp = axis === 'vertical' ? el1Rect.left : el1Rect.top,
        el1S2Opp = axis === 'vertical' ? el1Rect.right : el1Rect.bottom,
        el1OppLength = axis === 'vertical' ? el1Rect.width : el1Rect.height,
        el2S1Opp = axis === 'vertical' ? el2Rect.left : el2Rect.top,
        el2S2Opp = axis === 'vertical' ? el2Rect.right : el2Rect.bottom,
        el2OppLength = axis === 'vertical' ? el2Rect.width : el2Rect.height;

    return el1S1Opp === el2S1Opp || el1S2Opp === el2S2Opp || el1S1Opp + el1OppLength / 2 === el2S1Opp + el2OppLength / 2;
  },
      _getParentAutoScrollElement = function _getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) return _getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;

    do {
      // we don't need to get elem css if it isn't even overflowing in the first place (performance)
      if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = _css(elem);

        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
          if (!elem || !elem.getBoundingClientRect || elem === document.body) return _getWindowScrollingElement();
          if (gotSelf || includeSelf) return elem;
          gotSelf = true;
        }
      }
      /* jshint boss:true */

    } while (elem = elem.parentNode);

    return _getWindowScrollingElement();
  },
      _getWindowScrollingElement = function _getWindowScrollingElement() {
    if (IE11OrLess) {
      return document.documentElement;
    } else {
      return document.scrollingElement;
    }
  },
      _scrollBy = function _scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
  },
      _autoScroll = _throttle(function (
  /**Event*/
  evt,
  /**Object*/
  options,
  /**HTMLElement*/
  rootEl,
  /**Boolean*/
  isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (options.scroll) {
      var _this = rootEl ? rootEl[expando] : window,
          sens = options.scrollSensitivity,
          speed = options.scrollSpeed,
          x = evt.clientX,
          y = evt.clientY,
          winScroller = _getWindowScrollingElement(),
          scrollThisInstance = false; // Detect scrollEl


      if (scrollParentEl !== rootEl) {
        _clearAutoScrolls();

        scrollEl = options.scroll;
        scrollCustomFn = options.scrollFn;

        if (scrollEl === true) {
          scrollEl = _getParentAutoScrollElement(rootEl, true);
          scrollParentEl = scrollEl;
        }
      }

      var layersOut = 0;
      var currentParent = scrollEl;

      do {
        var el = currentParent,
            rect = _getRect(el),
            top = rect.top,
            bottom = rect.bottom,
            left = rect.left,
            right = rect.right,
            width = rect.width,
            height = rect.height,
            scrollWidth,
            scrollHeight,
            css,
            vx,
            vy,
            canScrollX,
            canScrollY,
            scrollPosX,
            scrollPosY;

        scrollWidth = el.scrollWidth;
        scrollHeight = el.scrollHeight;
        css = _css(el);
        scrollPosX = el.scrollLeft;
        scrollPosY = el.scrollTop;

        if (el === winScroller) {
          canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll' || css.overflowX === 'visible');
          canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll' || css.overflowY === 'visible');
        } else {
          canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll');
          canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll');
        }

        vx = canScrollX && (abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (abs(left - x) <= sens && !!scrollPosX);
        vy = canScrollY && (abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (abs(top - y) <= sens && !!scrollPosY);

        if (!autoScrolls[layersOut]) {
          for (var i = 0; i <= layersOut; i++) {
            if (!autoScrolls[i]) {
              autoScrolls[i] = {};
            }
          }
        }

        if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
          autoScrolls[layersOut].el = el;
          autoScrolls[layersOut].vx = vx;
          autoScrolls[layersOut].vy = vy;
          clearInterval(autoScrolls[layersOut].pid);

          if (el && (vx != 0 || vy != 0)) {
            scrollThisInstance = true;
            /* jshint loopfunc:true */

            autoScrolls[layersOut].pid = setInterval(function () {
              // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
              if (isFallback && this.layer === 0) {
                Sortable.active._emulateDragOver(true);

                Sortable.active._onTouchMove(touchEvt, true);
              }

              var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
              var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

              if ('function' === typeof scrollCustomFn) {
                if (scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt, touchEvt, autoScrolls[this.layer].el) !== 'continue') {
                  return;
                }
              }

              _scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
            }.bind({
              layer: layersOut
            }), 24);
          }
        }

        layersOut++;
      } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = _getParentAutoScrollElement(currentParent, false)));

      scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
    }
  }, 30),
      _clearAutoScrolls = function _clearAutoScrolls() {
    autoScrolls.forEach(function (autoScroll) {
      clearInterval(autoScroll.pid);
    });
    autoScrolls = [];
  },
      _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
      return function (to, from, dragEl, evt) {
        var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

        if (value == null && (pull || sameGroup)) {
          // Default pull value
          // Default pull and put value if same group
          return true;
        } else if (value == null || value === false) {
          return false;
        } else if (pull && value === 'clone') {
          return value;
        } else if (typeof value === 'function') {
          return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
        } else {
          var otherGroup = (pull ? to : from).options.group.name;
          return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
        }
      };
    }

    var group = {};
    var originalGroup = options.group;

    if (!originalGroup || _typeof(originalGroup) != 'object') {
      originalGroup = {
        name: originalGroup
      };
    }

    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
  },
      _checkAlignment = function _checkAlignment(evt) {
    if (!dragEl || !dragEl.parentNode) return;
    dragEl.parentNode[expando] && dragEl.parentNode[expando]._computeIsAligned(evt);
  },
      _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      _css(ghostEl, 'display', 'none');
    }
  },
      _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      _css(ghostEl, 'display', '');
    }
  }; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);

  var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if (dragEl) {
      evt = evt.touches ? evt.touches[0] : evt;

      var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

      if (nearest) {
        // Create imitation event
        var event = {};

        for (var i in evt) {
          event[i] = evt[i];
        }

        event.target = event.rootEl = nearest;
        event.preventDefault = void 0;
        event.stopPropagation = void 0;

        nearest[expando]._onDragOver(event);
      }
    }
  };
  /**
   * @class  Sortable
   * @param  {HTMLElement}  el
   * @param  {Object}       [options]
   */


  function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) {
      throw 'Sortable: `el` must be HTMLElement, not ' + {}.toString.call(el);
    }

    this.el = el; // root element

    this.options = options = _extend({}, options); // Export instance

    el[expando] = this; // Default options

    var defaults = {
      group: null,
      sort: true,
      disabled: false,
      store: null,
      handle: null,
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true,
      draggable: /[uo]l/i.test(el.nodeName) ? '>li' : '>*',
      swapThreshold: 1,
      // percentage; 0 <= x <= 1
      invertSwap: false,
      // invert always
      invertedSwapThreshold: null,
      // will be set to same as swapThreshold if default
      removeCloneOnHide: true,
      direction: function direction() {
        return _detectDirection(el, this.options);
      },
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      dragClass: 'sortable-drag',
      ignore: 'a, img',
      filter: null,
      preventOnFilter: true,
      animation: 0,
      easing: null,
      setData: function setData(dataTransfer, dragEl) {
        dataTransfer.setData('Text', dragEl.textContent);
      },
      dropBubble: false,
      dragoverBubble: false,
      dataIdAttr: 'data-id',
      delay: 0,
      delayOnTouchOnly: false,
      touchStartThreshold: parseInt(window.devicePixelRatio, 10) || 1,
      forceFallback: false,
      fallbackClass: 'sortable-fallback',
      fallbackOnBody: false,
      fallbackTolerance: 0,
      fallbackOffset: {
        x: 0,
        y: 0
      },
      supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
      emptyInsertThreshold: 5
    }; // Set default options

    for (var name in defaults) {
      !(name in options) && (options[name] = defaults[name]);
    }

    _prepareGroup(options); // Bind all private methods


    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    } // Setup drag mode


    this.nativeDraggable = options.forceFallback ? false : supportDraggable;

    if (this.nativeDraggable) {
      // Touch start threshold cannot be greater than the native dragstart threshold
      this.options.touchStartThreshold = 1;
    } // Bind events


    if (options.supportPointer) {
      _on(el, 'pointerdown', this._onTapStart);
    } else {
      _on(el, 'mousedown', this._onTapStart);

      _on(el, 'touchstart', this._onTapStart);
    }

    if (this.nativeDraggable) {
      _on(el, 'dragover', this);

      _on(el, 'dragenter', this);
    }

    sortables.push(this.el); // Restore sorting

    options.store && options.store.get && this.sort(options.store.get(this) || []);
  }

  Sortable.prototype =
  /** @lends Sortable.prototype */
  {
    constructor: Sortable,
    _computeIsAligned: function _computeIsAligned(evt) {
      var target;

      if (ghostEl && !supportCssPointerEvents) {
        _hideGhostForTarget();

        target = document.elementFromPoint(evt.clientX, evt.clientY);

        _unhideGhostForTarget();
      } else {
        target = evt.target;
      }

      target = _closest(target, this.options.draggable, this.el, false);
      if (_alignedSilent) return;
      if (!dragEl || dragEl.parentNode !== this.el) return;
      var children = this.el.children;

      for (var i = 0; i < children.length; i++) {
        // Don't change for target in case it is changed to aligned before onDragOver is fired
        if (_closest(children[i], this.options.draggable, this.el, false) && children[i] !== target) {
          children[i].sortableMouseAligned = _isClientInRowColumn(evt.clientX, evt.clientY, children[i], this._getDirection(evt, null), this.options);
        }
      } // Used for nulling last target when not in element, nothing to do with checking if aligned


      if (!_closest(target, this.options.draggable, this.el, true)) {
        lastTarget = null;
      }

      _alignedSilent = true;
      setTimeout(function () {
        _alignedSilent = false;
      }, 30);
    },
    _getDirection: function _getDirection(evt, target) {
      return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(
    /** Event|TouchEvent */
    evt) {
      if (!evt.cancelable) return;

      var _this = this,
          el = this.el,
          options = this.options,
          preventOnFilter = options.preventOnFilter,
          type = evt.type,
          touch = evt.touches && evt.touches[0],
          target = (touch || evt).target,
          originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
          filter = options.filter,
          startIndex,
          startDraggableIndex;

      _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


      if (dragEl) {
        return;
      }

      if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
        return; // only left button and enabled
      } // cancel dnd if original target is content editable


      if (originalTarget.isContentEditable) {
        return;
      }

      target = _closest(target, options.draggable, el, false);

      if (lastDownEl === target) {
        // Ignoring duplicate `down`
        return;
      } // Get the index of the dragged element within its parent


      startIndex = _index(target);
      startDraggableIndex = _index(target, options.draggable); // Check filter

      if (typeof filter === 'function') {
        if (filter.call(this, evt, target, this)) {
          _dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex, undefined, startDraggableIndex);

          preventOnFilter && evt.cancelable && evt.preventDefault();
          return; // cancel dnd
        }
      } else if (filter) {
        filter = filter.split(',').some(function (criteria) {
          criteria = _closest(originalTarget, criteria.trim(), el, false);

          if (criteria) {
            _dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex, undefined, startDraggableIndex);

            return true;
          }
        });

        if (filter) {
          preventOnFilter && evt.cancelable && evt.preventDefault();
          return; // cancel dnd
        }
      }

      if (options.handle && !_closest(originalTarget, options.handle, el, false)) {
        return;
      } // Prepare `dragstart`


      this._prepareDragStart(evt, touch, target, startIndex, startDraggableIndex);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      if (!dragEl || !this.options.scroll) return;

      var x = evt.clientX,
          y = evt.clientY,
          elem = document.elementFromPoint(x, y),
          _this = this; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good


      if (fallback || Edge || IE11OrLess || Safari) {
        _autoScroll(evt, _this.options, elem, fallback); // Listener for pointer element change


        var ogElemScroller = _getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastPointerElemX || y !== lastPointerElemY)) {
          pointerElemChangedInterval && clearInterval(pointerElemChangedInterval); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            if (!dragEl) return; // could also check if scroll direction on newElem changes due to parent autoscrolling

            var newElem = _getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;

              _clearAutoScrolls();

              _autoScroll(evt, _this.options, ogElemScroller, fallback);
            }
          }, 10);
          lastPointerElemX = x;
          lastPointerElemY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!_this.options.bubbleScroll || _getParentAutoScrollElement(elem, true) === _getWindowScrollingElement()) {
          _clearAutoScrolls();

          return;
        }

        _autoScroll(evt, _this.options, _getParentAutoScrollElement(elem, false), false);
      }
    },
    _prepareDragStart: function _prepareDragStart(
    /** Event */
    evt,
    /** Touch */
    touch,
    /** HTMLElement */
    target,
    /** Number */
    startIndex,
    /** Number */
    startDraggableIndex) {
      var _this = this,
          el = _this.el,
          options = _this.options,
          ownerDocument = el.ownerDocument,
          dragStartFn;

      if (target && !dragEl && target.parentNode === el) {
        rootEl = el;
        dragEl = target;
        parentEl = dragEl.parentNode;
        nextEl = dragEl.nextSibling;
        lastDownEl = target;
        activeGroup = options.group;
        oldIndex = startIndex;
        oldDraggableIndex = startDraggableIndex;
        tapEvt = {
          target: dragEl,
          clientX: (touch || evt).clientX,
          clientY: (touch || evt).clientY
        };
        this._lastX = (touch || evt).clientX;
        this._lastY = (touch || evt).clientY;
        dragEl.style['will-change'] = 'all'; // undo animation if needed

        dragEl.style.transition = '';
        dragEl.style.transform = '';

        dragStartFn = function dragStartFn() {
          // Delayed drag has been triggered
          // we can re-enable the events: touchmove/mousemove
          _this._disableDelayedDragEvents();

          if (!FireFox && _this.nativeDraggable) {
            dragEl.draggable = true;
          } // Bind the events: dragstart/dragend


          _this._triggerDragStart(evt, touch); // Drag start event


          _dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex, undefined, oldDraggableIndex); // Chosen item


          _toggleClass(dragEl, options.chosenClass, true);
        }; // Disable "draggable"


        options.ignore.split(',').forEach(function (criteria) {
          _find(dragEl, criteria.trim(), _disableDraggable);
        });

        _on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);

        _on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);

        _on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);

        _on(ownerDocument, 'mouseup', _this._onDrop);

        _on(ownerDocument, 'touchend', _this._onDrop);

        _on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)


        if (FireFox && this.nativeDraggable) {
          this.options.touchStartThreshold = 4;
          dragEl.draggable = true;
        } // Delay is impossible for native DnD in Edge or IE


        if (options.delay && (options.delayOnTouchOnly ? touch : true) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
          // If the user moves the pointer or let go the click or touch
          // before the delay has been reached:
          // disable the delayed drag
          _on(ownerDocument, 'mouseup', _this._disableDelayedDrag);

          _on(ownerDocument, 'touchend', _this._disableDelayedDrag);

          _on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);

          _on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);

          _on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);

          options.supportPointer && _on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
          _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
        } else {
          dragStartFn();
        }
      }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
    /** TouchEvent|PointerEvent **/
    e) {
      var touch = e.touches ? e.touches[0] : e;

      if (max(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
        this._disableDelayedDrag();
      }
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
      dragEl && _disableDraggable(dragEl);
      clearTimeout(this._dragStartTimer);

      this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
      var ownerDocument = this.el.ownerDocument;

      _off(ownerDocument, 'mouseup', this._disableDelayedDrag);

      _off(ownerDocument, 'touchend', this._disableDelayedDrag);

      _off(ownerDocument, 'touchcancel', this._disableDelayedDrag);

      _off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);

      _off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);

      _off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(
    /** Event */
    evt,
    /** Touch */
    touch) {
      touch = touch || (evt.pointerType == 'touch' ? evt : null);

      if (!this.nativeDraggable || touch) {
        if (this.options.supportPointer) {
          _on(document, 'pointermove', this._onTouchMove);
        } else if (touch) {
          _on(document, 'touchmove', this._onTouchMove);
        } else {
          _on(document, 'mousemove', this._onTouchMove);
        }
      } else {
        _on(dragEl, 'dragend', this);

        _on(rootEl, 'dragstart', this._onDragStart);
      }

      try {
        if (document.selection) {
          // Timeout neccessary for IE9
          _nextTick(function () {
            document.selection.empty();
          });
        } else {
          window.getSelection().removeAllRanges();
        }
      } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {
      awaitingDragStarted = false;

      if (rootEl && dragEl) {
        if (this.nativeDraggable) {
          _on(document, 'dragover', this._handleAutoScroll);

          _on(document, 'dragover', _checkAlignment);
        }

        var options = this.options; // Apply effect

        !fallback && _toggleClass(dragEl, options.dragClass, false);

        _toggleClass(dragEl, options.ghostClass, true); // In case dragging an animated element


        _css(dragEl, 'transform', '');

        Sortable.active = this;
        fallback && this._appendGhost(); // Drag start event

        _dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex, undefined, oldDraggableIndex, undefined, evt);
      } else {
        this._nulling();
      }
    },
    _emulateDragOver: function _emulateDragOver(forAutoScroll) {
      if (touchEvt) {
        if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY && !forAutoScroll) {
          return;
        }

        this._lastX = touchEvt.clientX;
        this._lastY = touchEvt.clientY;

        _hideGhostForTarget();

        var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        var parent = target;

        while (target && target.shadowRoot) {
          target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
          if (target === parent) break;
          parent = target;
        }

        if (parent) {
          do {
            if (parent[expando]) {
              var inserted;
              inserted = parent[expando]._onDragOver({
                clientX: touchEvt.clientX,
                clientY: touchEvt.clientY,
                target: target,
                rootEl: parent
              });

              if (inserted && !this.options.dragoverBubble) {
                break;
              }
            }

            target = parent; // store last element
          }
          /* jshint boss:true */
          while (parent = parent.parentNode);
        }

        dragEl.parentNode[expando]._computeIsAligned(touchEvt);

        _unhideGhostForTarget();
      }
    },
    _onTouchMove: function _onTouchMove(
    /**TouchEvent*/
    evt, forAutoScroll) {
      if (tapEvt) {
        var options = this.options,
            fallbackTolerance = options.fallbackTolerance,
            fallbackOffset = options.fallbackOffset,
            touch = evt.touches ? evt.touches[0] : evt,
            matrix = ghostEl && _matrix(ghostEl),
            scaleX = ghostEl && matrix && matrix.a,
            scaleY = ghostEl && matrix && matrix.d,
            relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && _getRelativeScrollOffset(ghostRelativeParent),
            dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
            dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1),
            translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)'; // only set the status to dragging, when we are actually dragging


        if (!Sortable.active && !awaitingDragStarted) {
          if (fallbackTolerance && min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance) {
            return;
          }

          this._onDragStart(evt, true);
        }

        !forAutoScroll && this._handleAutoScroll(touch, true);
        moved = true;
        touchEvt = touch;

        _css(ghostEl, 'webkitTransform', translate3d);

        _css(ghostEl, 'mozTransform', translate3d);

        _css(ghostEl, 'msTransform', translate3d);

        _css(ghostEl, 'transform', translate3d);

        evt.cancelable && evt.preventDefault();
      }
    },
    _appendGhost: function _appendGhost() {
      // Bug if using scale(): https://stackoverflow.com/questions/2637058
      // Not being adjusted for
      if (!ghostEl) {
        var container = this.options.fallbackOnBody ? document.body : rootEl,
            rect = _getRect(dragEl, true, container, !PositionGhostAbsolutely),
            css = _css(dragEl),
            options = this.options; // Position absolutely


        if (PositionGhostAbsolutely) {
          // Get relatively positioned parent
          ghostRelativeParent = container;

          while (_css(ghostRelativeParent, 'position') === 'static' && _css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
            ghostRelativeParent = ghostRelativeParent.parentNode;
          }

          if (ghostRelativeParent !== document) {
            var ghostRelativeParentRect = _getRect(ghostRelativeParent, true);

            rect.top -= ghostRelativeParentRect.top;
            rect.left -= ghostRelativeParentRect.left;
          }

          if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
            if (ghostRelativeParent === document) ghostRelativeParent = _getWindowScrollingElement();
            rect.top += ghostRelativeParent.scrollTop;
            rect.left += ghostRelativeParent.scrollLeft;
          } else {
            ghostRelativeParent = _getWindowScrollingElement();
          }

          ghostRelativeParentInitialScroll = _getRelativeScrollOffset(ghostRelativeParent);
        }

        ghostEl = dragEl.cloneNode(true);

        _toggleClass(ghostEl, options.ghostClass, false);

        _toggleClass(ghostEl, options.fallbackClass, true);

        _toggleClass(ghostEl, options.dragClass, true);

        _css(ghostEl, 'box-sizing', 'border-box');

        _css(ghostEl, 'margin', 0);

        _css(ghostEl, 'top', rect.top);

        _css(ghostEl, 'left', rect.left);

        _css(ghostEl, 'width', rect.width);

        _css(ghostEl, 'height', rect.height);

        _css(ghostEl, 'opacity', '0.8');

        _css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');

        _css(ghostEl, 'zIndex', '100000');

        _css(ghostEl, 'pointerEvents', 'none');

        container.appendChild(ghostEl);
      }
    },
    _onDragStart: function _onDragStart(
    /**Event*/
    evt,
    /**boolean*/
    fallback) {
      var _this = this;

      var dataTransfer = evt.dataTransfer;
      var options = _this.options; // Setup clone

      cloneEl = _clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      _toggleClass(cloneEl, _this.options.chosenClass, false); // #1143: IFrame support workaround


      _this._cloneId = _nextTick(function () {
        if (!_this.options.removeCloneOnHide) {
          rootEl.insertBefore(cloneEl, dragEl);
        }

        _dispatchEvent(_this, rootEl, 'clone', dragEl);
      });
      !fallback && _toggleClass(dragEl, options.dragClass, true); // Set proper drop events

      if (fallback) {
        ignoreNextClick = true;
        _this._loopId = setInterval(_this._emulateDragOver, 50);
      } else {
        // Undo what was set in _prepareDragStart before drag started
        _off(document, 'mouseup', _this._onDrop);

        _off(document, 'touchend', _this._onDrop);

        _off(document, 'touchcancel', _this._onDrop);

        if (dataTransfer) {
          dataTransfer.effectAllowed = 'move';
          options.setData && options.setData.call(_this, dataTransfer, dragEl);
        }

        _on(document, 'drop', _this); // #1276 fix:


        _css(dragEl, 'transform', 'translateZ(0)');
      }

      awaitingDragStarted = true;
      _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));

      _on(document, 'selectstart', _this);

      if (Safari) {
        _css(document.body, 'user-select', 'none');
      }
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(
    /**Event*/
    evt) {
      var el = this.el,
          target = evt.target,
          dragRect,
          targetRect,
          revert,
          options = this.options,
          group = options.group,
          activeSortable = Sortable.active,
          isOwner = activeGroup === group,
          canSort = options.sort,
          _this = this;

      if (_silent) return; // Return invocation when dragEl is inserted (or completed)

      function completed(insertion) {
        if (insertion) {
          if (isOwner) {
            activeSortable._hideClone();
          } else {
            activeSortable._showClone(_this);
          }

          if (activeSortable) {
            // Set ghost class to new sortable's ghost class
            _toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);

            _toggleClass(dragEl, options.ghostClass, true);
          }

          if (putSortable !== _this && _this !== Sortable.active) {
            putSortable = _this;
          } else if (_this === Sortable.active) {
            putSortable = null;
          } // Animation


          dragRect && _this._animate(dragRect, dragEl);
          target && targetRect && _this._animate(targetRect, target);
        } // Null lastTarget if it is not inside a previously swapped element


        if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
          lastTarget = null;
        } // no bubbling and not fallback


        if (!options.dragoverBubble && !evt.rootEl && target !== document) {
          _this._handleAutoScroll(evt);

          dragEl.parentNode[expando]._computeIsAligned(evt); // Do not detect for empty insert if already inserted


          !insertion && nearestEmptyInsertDetectEvent(evt);
        }

        !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
        return true;
      } // Call when dragEl has been inserted


      function changed() {
        _dispatchEvent(_this, rootEl, 'change', target, el, rootEl, oldIndex, _index(dragEl), oldDraggableIndex, _index(dragEl, options.draggable), evt);
      }

      if (evt.preventDefault !== void 0) {
        evt.cancelable && evt.preventDefault();
      }

      moved = true;
      target = _closest(target, options.draggable, el, true); // target is dragEl or target is animated

      if (dragEl.contains(evt.target) || target.animated) {
        return completed(false);
      }

      if (target !== dragEl) {
        ignoreNextClick = false;
      }

      if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
      : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
        var axis = this._getDirection(evt, target);

        dragRect = _getRect(dragEl);

        if (revert) {
          this._hideClone();

          parentEl = rootEl; // actualization

          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }

          return completed(true);
        }

        var elLastChild = _lastChild(el);

        if (!elLastChild || _ghostIsLast(evt, axis, el) && !elLastChild.animated) {
          // assign target only if condition is true
          if (elLastChild && el === evt.target) {
            target = elLastChild;
          }

          if (target) {
            targetRect = _getRect(target);
          }

          if (isOwner) {
            activeSortable._hideClone();
          } else {
            activeSortable._showClone(this);
          }

          if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
            el.appendChild(dragEl);
            parentEl = el; // actualization

            realDragElRect = null;
            changed();
            return completed(true);
          }
        } else if (target && target !== dragEl && target.parentNode === el) {
          var direction = 0,
              targetBeforeFirstSwap,
              aligned = target.sortableMouseAligned,
              differentLevel = dragEl.parentNode !== el,
              side1 = axis === 'vertical' ? 'top' : 'left',
              scrolledPastTop = _isScrolledPast(target, 'top') || _isScrolledPast(dragEl, 'top'),
              scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

          if (lastTarget !== target) {
            lastMode = null;
            targetBeforeFirstSwap = _getRect(target)[side1];
            pastFirstInvertThresh = false;
          } // Reference: https://www.lucidchart.com/documents/view/10fa0e93-e362-4126-aca2-b709ee56bd8b/0


          if (_isElInRowColumn(dragEl, target, axis) && aligned || differentLevel || scrolledPastTop || options.invertSwap || lastMode === 'insert' || // Needed, in the case that we are inside target and inserted because not aligned... aligned will stay false while inside
          // and lastMode will change to 'insert', but we must swap
          lastMode === 'swap') {
            // New target that we will be inside
            if (lastMode !== 'swap') {
              isCircumstantialInvert = options.invertSwap || differentLevel;
            }

            direction = _getSwapDirection(evt, target, axis, options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
            lastMode = 'swap';
          } else {
            // Insert at position
            direction = _getInsertDirection(target);
            lastMode = 'insert';
          }

          if (direction === 0) return completed(false);
          realDragElRect = null;
          lastTarget = target;
          lastDirection = direction;
          targetRect = _getRect(target);
          var nextSibling = target.nextElementSibling,
              after = false;
          after = direction === 1;

          var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

          if (moveVector !== false) {
            if (moveVector === 1 || moveVector === -1) {
              after = moveVector === 1;
            }

            _silent = true;
            setTimeout(_unsilent, 30);

            if (isOwner) {
              activeSortable._hideClone();
            } else {
              activeSortable._showClone(this);
            }

            if (after && !nextSibling) {
              el.appendChild(dragEl);
            } else {
              target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
            } // Undo chrome's scroll adjustment


            if (scrolledPastTop) {
              _scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
            }

            parentEl = dragEl.parentNode; // actualization
            // must be done before animation

            if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
              targetMoveDistance = abs(targetBeforeFirstSwap - _getRect(target)[side1]);
            }

            changed();
            return completed(true);
          }
        }

        if (el.contains(dragEl)) {
          return completed(false);
        }
      }

      return false;
    },
    _animate: function _animate(prevRect, target) {
      var ms = this.options.animation;

      if (ms) {
        var currentRect = _getRect(target);

        if (target === dragEl) {
          realDragElRect = currentRect;
        }

        if (prevRect.nodeType === 1) {
          prevRect = _getRect(prevRect);
        } // Check if actually moving position


        if (prevRect.left + prevRect.width / 2 !== currentRect.left + currentRect.width / 2 || prevRect.top + prevRect.height / 2 !== currentRect.top + currentRect.height / 2) {
          var matrix = _matrix(this.el),
              scaleX = matrix && matrix.a,
              scaleY = matrix && matrix.d;

          _css(target, 'transition', 'none');

          _css(target, 'transform', 'translate3d(' + (prevRect.left - currentRect.left) / (scaleX ? scaleX : 1) + 'px,' + (prevRect.top - currentRect.top) / (scaleY ? scaleY : 1) + 'px,0)');

          this._repaint(target);

          _css(target, 'transition', 'transform ' + ms + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));

          _css(target, 'transform', 'translate3d(0,0,0)');
        }

        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          _css(target, 'transition', '');

          _css(target, 'transform', '');

          target.animated = false;
        }, ms);
      }
    },
    _repaint: function _repaint(target) {
      return target.offsetWidth;
    },
    _offMoveEvents: function _offMoveEvents() {
      _off(document, 'touchmove', this._onTouchMove);

      _off(document, 'pointermove', this._onTouchMove);

      _off(document, 'dragover', nearestEmptyInsertDetectEvent);

      _off(document, 'mousemove', nearestEmptyInsertDetectEvent);

      _off(document, 'touchmove', nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
      var ownerDocument = this.el.ownerDocument;

      _off(ownerDocument, 'mouseup', this._onDrop);

      _off(ownerDocument, 'touchend', this._onDrop);

      _off(ownerDocument, 'pointerup', this._onDrop);

      _off(ownerDocument, 'touchcancel', this._onDrop);

      _off(document, 'selectstart', this);
    },
    _onDrop: function _onDrop(
    /**Event*/
    evt) {
      var el = this.el,
          options = this.options;
      awaitingDragStarted = false;
      scrolling = false;
      isCircumstantialInvert = false;
      pastFirstInvertThresh = false;
      clearInterval(this._loopId);
      clearInterval(pointerElemChangedInterval);

      _clearAutoScrolls();

      _cancelThrottle();

      clearTimeout(this._dragStartTimer);

      _cancelNextTick(this._cloneId);

      _cancelNextTick(this._dragStartId); // Unbind events


      _off(document, 'mousemove', this._onTouchMove);

      if (this.nativeDraggable) {
        _off(document, 'drop', this);

        _off(el, 'dragstart', this._onDragStart);

        _off(document, 'dragover', this._handleAutoScroll);

        _off(document, 'dragover', _checkAlignment);
      }

      if (Safari) {
        _css(document.body, 'user-select', '');
      }

      this._offMoveEvents();

      this._offUpEvents();

      if (evt) {
        if (moved) {
          evt.cancelable && evt.preventDefault();
          !options.dropBubble && evt.stopPropagation();
        }

        ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

        if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
          // Remove clone
          cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
        }

        if (dragEl) {
          if (this.nativeDraggable) {
            _off(dragEl, 'dragend', this);
          }

          _disableDraggable(dragEl);

          dragEl.style['will-change'] = ''; // Remove class's

          _toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);

          _toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event


          _dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex, null, oldDraggableIndex, null, evt);

          if (rootEl !== parentEl) {
            newIndex = _index(dragEl);
            newDraggableIndex = _index(dragEl, options.draggable);

            if (newIndex >= 0) {
              // Add event
              _dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt); // Remove event


              _dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt); // drag from one list and drop into another


              _dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt);

              _dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt);
            }

            putSortable && putSortable.save();
          } else {
            if (dragEl.nextSibling !== nextEl) {
              // Get the index of the dragged element within its parent
              newIndex = _index(dragEl);
              newDraggableIndex = _index(dragEl, options.draggable);

              if (newIndex >= 0) {
                // drag & drop within the same list
                _dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt);

                _dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt);
              }
            }
          }

          if (Sortable.active) {
            /* jshint eqnull:true */
            if (newIndex == null || newIndex === -1) {
              newIndex = oldIndex;
              newDraggableIndex = oldDraggableIndex;
            }

            _dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt); // Save sorting


            this.save();
          }
        }
      }

      this._nulling();
    },
    _nulling: function _nulling() {
      rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = scrollEl = scrollParentEl = autoScrolls.length = pointerElemChangedInterval = lastPointerElemX = lastPointerElemY = tapEvt = touchEvt = moved = newIndex = oldIndex = lastTarget = lastDirection = realDragElRect = putSortable = activeGroup = Sortable.active = null;
      savedInputChecked.forEach(function (el) {
        el.checked = true;
      });
      savedInputChecked.length = 0;
    },
    handleEvent: function handleEvent(
    /**Event*/
    evt) {
      switch (evt.type) {
        case 'drop':
        case 'dragend':
          this._onDrop(evt);

          break;

        case 'dragenter':
        case 'dragover':
          if (dragEl) {
            this._onDragOver(evt);

            _globalDragOver(evt);
          }

          break;

        case 'selectstart':
          evt.preventDefault();
          break;
      }
    },

    /**
     * Serializes the item into an array of string.
     * @returns {String[]}
     */
    toArray: function toArray() {
      var order = [],
          el,
          children = this.el.children,
          i = 0,
          n = children.length,
          options = this.options;

      for (; i < n; i++) {
        el = children[i];

        if (_closest(el, options.draggable, this.el, false)) {
          order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
      }

      return order;
    },

    /**
     * Sorts the elements according to the array.
     * @param  {String[]}  order  order of the items
     */
    sort: function sort(order) {
      var items = {},
          rootEl = this.el;
      this.toArray().forEach(function (id, i) {
        var el = rootEl.children[i];

        if (_closest(el, this.options.draggable, rootEl, false)) {
          items[id] = el;
        }
      }, this);
      order.forEach(function (id) {
        if (items[id]) {
          rootEl.removeChild(items[id]);
          rootEl.appendChild(items[id]);
        }
      });
    },

    /**
     * Save the current sorting
     */
    save: function save() {
      var store = this.options.store;
      store && store.set && store.set(this);
    },

    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param   {HTMLElement}  el
     * @param   {String}       [selector]  default: `options.draggable`
     * @returns {HTMLElement|null}
     */
    closest: function closest(el, selector) {
      return _closest(el, selector || this.options.draggable, this.el, false);
    },

    /**
     * Set/get option
     * @param   {string} name
     * @param   {*}      [value]
     * @returns {*}
     */
    option: function option(name, value) {
      var options = this.options;

      if (value === void 0) {
        return options[name];
      } else {
        options[name] = value;

        if (name === 'group') {
          _prepareGroup(options);
        }
      }
    },

    /**
     * Destroy
     */
    destroy: function destroy() {
      var el = this.el;
      el[expando] = null;

      _off(el, 'mousedown', this._onTapStart);

      _off(el, 'touchstart', this._onTapStart);

      _off(el, 'pointerdown', this._onTapStart);

      if (this.nativeDraggable) {
        _off(el, 'dragover', this);

        _off(el, 'dragenter', this);
      } // Remove draggable attributes


      Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
        el.removeAttribute('draggable');
      });

      this._onDrop();

      sortables.splice(sortables.indexOf(this.el), 1);
      this.el = el = null;
    },
    _hideClone: function _hideClone() {
      if (!cloneEl.cloneHidden) {
        _css(cloneEl, 'display', 'none');

        cloneEl.cloneHidden = true;

        if (cloneEl.parentNode && this.options.removeCloneOnHide) {
          cloneEl.parentNode.removeChild(cloneEl);
        }
      }
    },
    _showClone: function _showClone(putSortable) {
      if (putSortable.lastPutMode !== 'clone') {
        this._hideClone();

        return;
      }

      if (cloneEl.cloneHidden) {
        // show clone at dragEl or original position
        if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
          rootEl.insertBefore(cloneEl, dragEl);
        } else if (nextEl) {
          rootEl.insertBefore(cloneEl, nextEl);
        } else {
          rootEl.appendChild(cloneEl);
        }

        if (this.options.group.revertClone) {
          this._animate(dragEl, cloneEl);
        }

        _css(cloneEl, 'display', '');

        cloneEl.cloneHidden = false;
      }
    }
  };

  function _closest(
  /**HTMLElement*/
  el,
  /**String*/
  selector,
  /**HTMLElement*/
  ctx, includeCTX) {
    if (el) {
      ctx = ctx || document;

      do {
        if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && _matches(el, selector) : _matches(el, selector)) || includeCTX && el === ctx) {
          return el;
        }

        if (el === ctx) break;
        /* jshint boss:true */
      } while (el = _getParentOrHost(el));
    }

    return null;
  }

  function _getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
  }

  function _globalDragOver(
  /**Event*/
  evt) {
    if (evt.dataTransfer) {
      evt.dataTransfer.dropEffect = 'move';
    }

    evt.cancelable && evt.preventDefault();
  }

  function _on(el, event, fn) {
    el.addEventListener(event, fn, IE11OrLess ? false : captureMode);
  }

  function _off(el, event, fn) {
    el.removeEventListener(event, fn, IE11OrLess ? false : captureMode);
  }

  function _toggleClass(el, name, state) {
    if (el && name) {
      if (el.classList) {
        el.classList[state ? 'add' : 'remove'](name);
      } else {
        var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
        el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
      }
    }
  }

  function _css(el, prop, val) {
    var style = el && el.style;

    if (style) {
      if (val === void 0) {
        if (document.defaultView && document.defaultView.getComputedStyle) {
          val = document.defaultView.getComputedStyle(el, '');
        } else if (el.currentStyle) {
          val = el.currentStyle;
        }

        return prop === void 0 ? val : val[prop];
      } else {
        if (!(prop in style) && prop.indexOf('webkit') === -1) {
          prop = '-webkit-' + prop;
        }

        style[prop] = val + (typeof val === 'string' ? '' : 'px');
      }
    }
  }

  function _matrix(el) {
    var appliedTransforms = '';

    do {
      var transform = _css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (el = el.parentNode);

    if (window.DOMMatrix) {
      return new DOMMatrix(appliedTransforms);
    } else if (window.WebKitCSSMatrix) {
      return new WebKitCSSMatrix(appliedTransforms);
    } else if (window.CSSMatrix) {
      return new CSSMatrix(appliedTransforms);
    }
  }

  function _find(ctx, tagName, iterator) {
    if (ctx) {
      var list = ctx.getElementsByTagName(tagName),
          i = 0,
          n = list.length;

      if (iterator) {
        for (; i < n; i++) {
          iterator(list[i], i);
        }
      }

      return list;
    }

    return [];
  }

  function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex, startDraggableIndex, newDraggableIndex, originalEvt) {
    sortable = sortable || rootEl[expando];
    var evt,
        options = sortable.options,
        onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

    if (window.CustomEvent && !IE11OrLess && !Edge) {
      evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
      });
    } else {
      evt = document.createEvent('Event');
      evt.initEvent(name, true, true);
    }

    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = startIndex;
    evt.newIndex = newIndex;
    evt.oldDraggableIndex = startDraggableIndex;
    evt.newDraggableIndex = newDraggableIndex;
    evt.originalEvent = originalEvt;
    evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

    if (rootEl) {
      rootEl.dispatchEvent(evt);
    }

    if (options[onName]) {
      options[onName].call(sortable, evt);
    }
  }

  function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
    var evt,
        sortable = fromEl[expando],
        onMoveFn = sortable.options.onMove,
        retVal; // Support for new CustomEvent feature

    if (window.CustomEvent && !IE11OrLess && !Edge) {
      evt = new CustomEvent('move', {
        bubbles: true,
        cancelable: true
      });
    } else {
      evt = document.createEvent('Event');
      evt.initEvent('move', true, true);
    }

    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || _getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvt;
    fromEl.dispatchEvent(evt);

    if (onMoveFn) {
      retVal = onMoveFn.call(sortable, evt, originalEvt);
    }

    return retVal;
  }

  function _disableDraggable(el) {
    el.draggable = false;
  }

  function _unsilent() {
    _silent = false;
  }
  /**
   * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
   * and non-draggable elements
   * @param  {HTMLElement} el       The parent element
   * @param  {Number} childNum      The index of the child
   * @param  {Object} options       Parent Sortable's options
   * @return {HTMLElement}          The child at index childNum, or null if not found
   */


  function _getChild(el, childNum, options) {
    var currentChild = 0,
        i = 0,
        children = el.children;

    while (i < children.length) {
      if (children[i].style.display !== 'none' && children[i] !== ghostEl && children[i] !== dragEl && _closest(children[i], options.draggable, el, false)) {
        if (currentChild === childNum) {
          return children[i];
        }

        currentChild++;
      }

      i++;
    }

    return null;
  }
  /**
   * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
   * @param  {HTMLElement} el       Parent element
   * @return {HTMLElement}          The last child, ignoring ghostEl
   */


  function _lastChild(el) {
    var last = el.lastElementChild;

    while (last && (last === ghostEl || _css(last, 'display') === 'none')) {
      last = last.previousElementSibling;
    }

    return last || null;
  }

  function _ghostIsLast(evt, axis, el) {
    var elRect = _getRect(_lastChild(el)),
        mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
        mouseOnOppAxis = axis === 'vertical' ? evt.clientX : evt.clientY,
        targetS2 = axis === 'vertical' ? elRect.bottom : elRect.right,
        targetS1Opp = axis === 'vertical' ? elRect.left : elRect.top,
        targetS2Opp = axis === 'vertical' ? elRect.right : elRect.bottom,
        spacer = 10;

    return axis === 'vertical' ? mouseOnOppAxis > targetS2Opp + spacer || mouseOnOppAxis <= targetS2Opp && mouseOnAxis > targetS2 && mouseOnOppAxis >= targetS1Opp : mouseOnAxis > targetS2 && mouseOnOppAxis > targetS1Opp || mouseOnAxis <= targetS2 && mouseOnOppAxis > targetS2Opp + spacer;
  }

  function _getSwapDirection(evt, target, axis, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var targetRect = _getRect(target),
        mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
        targetLength = axis === 'vertical' ? targetRect.height : targetRect.width,
        targetS1 = axis === 'vertical' ? targetRect.top : targetRect.left,
        targetS2 = axis === 'vertical' ? targetRect.bottom : targetRect.right,
        dragRect = _getRect(dragEl),
        invert = false;

    if (!invertSwap) {
      // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
      if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
        // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
        // check if past first invert threshold on side opposite of lastDirection
        if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
          // past first invert threshold, do not restrict inverted threshold to dragEl shadow
          pastFirstInvertThresh = true;
        }

        if (!pastFirstInvertThresh) {
          var dragS1 = axis === 'vertical' ? dragRect.top : dragRect.left,
              dragS2 = axis === 'vertical' ? dragRect.bottom : dragRect.right; // dragEl shadow (target move distance shadow)

          if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
          : mouseOnAxis > targetS2 - targetMoveDistance) {
            return lastDirection * -1;
          }
        } else {
          invert = true;
        }
      } else {
        // Regular
        if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
          return _getInsertDirection(target);
        }
      }
    }

    invert = invert || invertSwap;

    if (invert) {
      // Invert of regular
      if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
        return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
      }
    }

    return 0;
  }
  /**
   * Gets the direction dragEl must be swapped relative to target in order to make it
   * seem that dragEl has been "inserted" into that element's position
   * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
   * @return {Number}                   Direction dragEl must be swapped
   */


  function _getInsertDirection(target) {
    var dragElIndex = _index(dragEl),
        targetIndex = _index(target);

    if (dragElIndex < targetIndex) {
      return 1;
    } else {
      return -1;
    }
  }
  /**
   * Generate id
   * @param   {HTMLElement} el
   * @returns {String}
   * @private
   */


  function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent,
        i = str.length,
        sum = 0;

    while (i--) {
      sum += str.charCodeAt(i);
    }

    return sum.toString(36);
  }
  /**
   * Returns the index of an element within its parent for a selected set of
   * elements
   * @param  {HTMLElement} el
   * @param  {selector} selector
   * @return {number}
   */


  function _index(el, selector) {
    var index = 0;

    if (!el || !el.parentNode) {
      return -1;
    }

    while (el && (el = el.previousElementSibling)) {
      if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== cloneEl && (!selector || _matches(el, selector))) {
        index++;
      }
    }

    return index;
  }

  function _matches(
  /**HTMLElement*/
  el,
  /**String*/
  selector) {
    if (!selector) return;
    selector[0] === '>' && (selector = selector.substring(1));

    if (el) {
      try {
        if (el.matches) {
          return el.matches(selector);
        } else if (el.msMatchesSelector) {
          return el.msMatchesSelector(selector);
        } else if (el.webkitMatchesSelector) {
          return el.webkitMatchesSelector(selector);
        }
      } catch (_) {
        return false;
      }
    }

    return false;
  }

  var _throttleTimeout;

  function _throttle(callback, ms) {
    return function () {
      if (!_throttleTimeout) {
        var args = arguments,
            _this = this;

        _throttleTimeout = setTimeout(function () {
          if (args.length === 1) {
            callback.call(_this, args[0]);
          } else {
            callback.apply(_this, args);
          }

          _throttleTimeout = void 0;
        }, ms);
      }
    };
  }

  function _cancelThrottle() {
    clearTimeout(_throttleTimeout);
    _throttleTimeout = void 0;
  }

  function _extend(dst, src) {
    if (dst && src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dst[key] = src[key];
        }
      }
    }

    return dst;
  }

  function _clone(el) {
    if (Polymer && Polymer.dom) {
      return Polymer.dom(el).cloneNode(true);
    } else if ($) {
      return $(el).clone(true)[0];
    } else {
      return el.cloneNode(true);
    }
  }

  function _saveInputCheckedState(root) {
    savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName('input');
    var idx = inputs.length;

    while (idx--) {
      var el = inputs[idx];
      el.checked && savedInputChecked.push(el);
    }
  }

  function _nextTick(fn) {
    return setTimeout(fn, 0);
  }

  function _cancelNextTick(id) {
    return clearTimeout(id);
  }
  /**
   * Returns the "bounding client rect" of given element
   * @param  {HTMLElement} el                The element whose boundingClientRect is wanted
   * @param  {[HTMLElement]} container       the parent the element will be placed in
   * @param  {[Boolean]} adjustForTransform  Whether the rect should compensate for parent's transform
   * @return {Object}                        The boundingClientRect of el
   */


  function _getRect(el, adjustForTransform, container, adjustForFixed) {
    if (!el.getBoundingClientRect && el !== win) return;
    var elRect, top, left, bottom, right, height, width;

    if (el !== win && el !== _getWindowScrollingElement()) {
      elRect = el.getBoundingClientRect();
      top = elRect.top;
      left = elRect.left;
      bottom = elRect.bottom;
      right = elRect.right;
      height = elRect.height;
      width = elRect.width;
    } else {
      top = 0;
      left = 0;
      bottom = window.innerHeight;
      right = window.innerWidth;
      height = window.innerHeight;
      width = window.innerWidth;
    }

    if (adjustForFixed && el !== win) {
      // Adjust for translate()
      container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
      // Not needed on <= IE11

      if (!IE11OrLess) {
        do {
          if (container && container.getBoundingClientRect && _css(container, 'transform') !== 'none') {
            var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

            top -= containerRect.top + parseInt(_css(container, 'border-top-width'));
            left -= containerRect.left + parseInt(_css(container, 'border-left-width'));
            bottom = top + elRect.height;
            right = left + elRect.width;
            break;
          }
          /* jshint boss:true */

        } while (container = container.parentNode);
      }
    }

    if (adjustForTransform && el !== win) {
      // Adjust for scale()
      var matrix = _matrix(container || el),
          scaleX = matrix && matrix.a,
          scaleY = matrix && matrix.d;

      if (matrix) {
        top /= scaleY;
        left /= scaleX;
        width /= scaleX;
        height /= scaleY;
        bottom = top + height;
        right = left + width;
      }
    }

    return {
      top: top,
      left: left,
      bottom: bottom,
      right: right,
      width: width,
      height: height
    };
  }
  /**
   * Checks if a side of an element is scrolled past a side of it's parents
   * @param  {HTMLElement}  el       The element who's side being scrolled out of view is in question
   * @param  {String}       side     Side of the element in question ('top', 'left', 'right', 'bottom')
   * @return {HTMLElement}           The parent scroll element that the el's side is scrolled past, or null if there is no such element
   */


  function _isScrolledPast(el, side) {
    var parent = _getParentAutoScrollElement(el, true),
        elSide = _getRect(el)[side];
    /* jshint boss:true */


    while (parent) {
      var parentSide = _getRect(parent)[side],
          visible;

      if (side === 'top' || side === 'left') {
        visible = elSide >= parentSide;
      } else {
        visible = elSide <= parentSide;
      }

      if (!visible) return parent;
      if (parent === _getWindowScrollingElement()) break;
      parent = _getParentAutoScrollElement(parent, false);
    }

    return false;
  }
  /**
   * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
   * The value is returned in real pixels.
   * @param  {HTMLElement} el
   * @return {Array}             Offsets in the format of [left, top]
   */


  function _getRelativeScrollOffset(el) {
    var offsetLeft = 0,
        offsetTop = 0,
        winScroller = _getWindowScrollingElement();

    if (el) {
      do {
        var matrix = _matrix(el),
            scaleX = matrix.a,
            scaleY = matrix.d;

        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
      } while (el !== winScroller && (el = el.parentNode));
    }

    return [offsetLeft, offsetTop];
  } // Fixed #973:


  _on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  }); // Export utils


  Sortable.utils = {
    on: _on,
    off: _off,
    css: _css,
    find: _find,
    is: function is(el, selector) {
      return !!_closest(el, selector, el, false);
    },
    extend: _extend,
    throttle: _throttle,
    closest: _closest,
    toggleClass: _toggleClass,
    clone: _clone,
    index: _index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick,
    detectDirection: _detectDirection,
    getChild: _getChild
  };
  /**
   * Create sortable instance
   * @param {HTMLElement}  el
   * @param {Object}      [options]
   */

  Sortable.create = function (el, options) {
    return new Sortable(el, options);
  }; // Export


  Sortable.version = '1.9.0';
  return Sortable;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvcnRhYmxlLmpzIl0sIm5hbWVzIjpbInNvcnRhYmxlTW9kdWxlIiwiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ3aW5kb3ciLCJzb3J0YWJsZUZhY3RvcnkiLCJkb2N1bWVudCIsInNvcnRhYmxlRXJyb3IiLCJFcnJvciIsImRyYWdFbCIsInBhcmVudEVsIiwiZ2hvc3RFbCIsImNsb25lRWwiLCJyb290RWwiLCJuZXh0RWwiLCJsYXN0RG93bkVsIiwic2Nyb2xsRWwiLCJzY3JvbGxQYXJlbnRFbCIsInNjcm9sbEN1c3RvbUZuIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsIm9sZERyYWdnYWJsZUluZGV4IiwibmV3RHJhZ2dhYmxlSW5kZXgiLCJhY3RpdmVHcm91cCIsInB1dFNvcnRhYmxlIiwiYXV0b1Njcm9sbHMiLCJzY3JvbGxpbmciLCJhd2FpdGluZ0RyYWdTdGFydGVkIiwiaWdub3JlTmV4dENsaWNrIiwic29ydGFibGVzIiwicG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwiLCJsYXN0UG9pbnRlckVsZW1YIiwibGFzdFBvaW50ZXJFbGVtWSIsInRhcEV2dCIsInRvdWNoRXZ0IiwibW92ZWQiLCJsYXN0VGFyZ2V0IiwibGFzdERpcmVjdGlvbiIsInBhc3RGaXJzdEludmVydFRocmVzaCIsImlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQiLCJsYXN0TW9kZSIsInRhcmdldE1vdmVEaXN0YW5jZSIsImdob3N0UmVsYXRpdmVQYXJlbnQiLCJnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbCIsInJlYWxEcmFnRWxSZWN0IiwiUl9TUEFDRSIsImV4cGFuZG8iLCJEYXRlIiwiZ2V0VGltZSIsIndpbiIsInBhcnNlSW50Iiwic2V0VGltZW91dCIsIiQiLCJqUXVlcnkiLCJaZXB0byIsIlBvbHltZXIiLCJjYXB0dXJlTW9kZSIsImNhcHR1cmUiLCJwYXNzaXZlIiwiSUUxMU9yTGVzcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwiRWRnZSIsIkZpcmVGb3giLCJTYWZhcmkiLCJJT1MiLCJQb3NpdGlvbkdob3N0QWJzb2x1dGVseSIsIkNTU0Zsb2F0UHJvcGVydHkiLCJzdXBwb3J0RHJhZ2dhYmxlIiwiY3JlYXRlRWxlbWVudCIsInN1cHBvcnRDc3NQb2ludGVyRXZlbnRzIiwiZWwiLCJzdHlsZSIsImNzc1RleHQiLCJwb2ludGVyRXZlbnRzIiwiX3NpbGVudCIsIl9hbGlnbmVkU2lsZW50IiwiYWJzIiwiTWF0aCIsIm1pbiIsIm1heCIsInNhdmVkSW5wdXRDaGVja2VkIiwiX2RldGVjdERpcmVjdGlvbiIsIm9wdGlvbnMiLCJlbENTUyIsIl9jc3MiLCJlbFdpZHRoIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJjaGlsZDEiLCJfZ2V0Q2hpbGQiLCJjaGlsZDIiLCJmaXJzdENoaWxkQ1NTIiwic2Vjb25kQ2hpbGRDU1MiLCJmaXJzdENoaWxkV2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJfZ2V0UmVjdCIsInNlY29uZENoaWxkV2lkdGgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJzcGxpdCIsImxlbmd0aCIsInRvdWNoaW5nU2lkZUNoaWxkMiIsImNsZWFyIiwiX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlIiwieCIsInkiLCJpIiwiX2xhc3RDaGlsZCIsInJlY3QiLCJ0aHJlc2hvbGQiLCJlbXB0eUluc2VydFRocmVzaG9sZCIsImluc2lkZUhvcml6b250YWxseSIsImxlZnQiLCJyaWdodCIsImluc2lkZVZlcnRpY2FsbHkiLCJ0b3AiLCJib3R0b20iLCJfaXNDbGllbnRJblJvd0NvbHVtbiIsImF4aXMiLCJ0YXJnZXRSZWN0IiwidGFyZ2V0UzFPcHAiLCJ0YXJnZXRTMk9wcCIsIm1vdXNlT25PcHBBeGlzIiwiX2lzRWxJblJvd0NvbHVtbiIsImVsMSIsImVsMiIsImVsMVJlY3QiLCJlbDJSZWN0IiwiZWwxUzFPcHAiLCJlbDFTMk9wcCIsImVsMU9wcExlbmd0aCIsImhlaWdodCIsImVsMlMxT3BwIiwiZWwyUzJPcHAiLCJlbDJPcHBMZW5ndGgiLCJfZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQiLCJpbmNsdWRlU2VsZiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIl9nZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50IiwiZWxlbSIsImdvdFNlbGYiLCJjbGllbnRXaWR0aCIsInNjcm9sbFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZWxlbUNTUyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImJvZHkiLCJwYXJlbnROb2RlIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsaW5nRWxlbWVudCIsIl9zY3JvbGxCeSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJfYXV0b1Njcm9sbCIsIl90aHJvdHRsZSIsImV2dCIsImlzRmFsbGJhY2siLCJzY3JvbGwiLCJfdGhpcyIsInNlbnMiLCJzY3JvbGxTZW5zaXRpdml0eSIsInNwZWVkIiwic2Nyb2xsU3BlZWQiLCJjbGllbnRYIiwiY2xpZW50WSIsIndpblNjcm9sbGVyIiwic2Nyb2xsVGhpc0luc3RhbmNlIiwiX2NsZWFyQXV0b1Njcm9sbHMiLCJzY3JvbGxGbiIsImxheWVyc091dCIsImN1cnJlbnRQYXJlbnQiLCJjc3MiLCJ2eCIsInZ5IiwiY2FuU2Nyb2xsWCIsImNhblNjcm9sbFkiLCJzY3JvbGxQb3NYIiwic2Nyb2xsUG9zWSIsImNsZWFySW50ZXJ2YWwiLCJwaWQiLCJzZXRJbnRlcnZhbCIsImxheWVyIiwiU29ydGFibGUiLCJhY3RpdmUiLCJfZW11bGF0ZURyYWdPdmVyIiwiX29uVG91Y2hNb3ZlIiwic2Nyb2xsT2Zmc2V0WSIsInNjcm9sbE9mZnNldFgiLCJjYWxsIiwiYmluZCIsImJ1YmJsZVNjcm9sbCIsImZvckVhY2giLCJhdXRvU2Nyb2xsIiwiX3ByZXBhcmVHcm91cCIsInRvRm4iLCJ2YWx1ZSIsInB1bGwiLCJ0byIsImZyb20iLCJzYW1lR3JvdXAiLCJncm91cCIsIm5hbWUiLCJvdGhlckdyb3VwIiwiam9pbiIsImluZGV4T2YiLCJvcmlnaW5hbEdyb3VwIiwiY2hlY2tQdWxsIiwiY2hlY2tQdXQiLCJwdXQiLCJyZXZlcnRDbG9uZSIsIl9jaGVja0FsaWdubWVudCIsIl9jb21wdXRlSXNBbGlnbmVkIiwiX2hpZGVHaG9zdEZvclRhcmdldCIsIl91bmhpZGVHaG9zdEZvclRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIm5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50IiwidG91Y2hlcyIsIm5lYXJlc3QiLCJldmVudCIsInRhcmdldCIsIl9vbkRyYWdPdmVyIiwibm9kZVR5cGUiLCJ0b1N0cmluZyIsIl9leHRlbmQiLCJkZWZhdWx0cyIsInNvcnQiLCJkaXNhYmxlZCIsInN0b3JlIiwiaGFuZGxlIiwiZHJhZ2dhYmxlIiwidGVzdCIsIm5vZGVOYW1lIiwic3dhcFRocmVzaG9sZCIsImludmVydFN3YXAiLCJpbnZlcnRlZFN3YXBUaHJlc2hvbGQiLCJyZW1vdmVDbG9uZU9uSGlkZSIsImRpcmVjdGlvbiIsImdob3N0Q2xhc3MiLCJjaG9zZW5DbGFzcyIsImRyYWdDbGFzcyIsImlnbm9yZSIsImZpbHRlciIsInByZXZlbnRPbkZpbHRlciIsImFuaW1hdGlvbiIsImVhc2luZyIsInNldERhdGEiLCJkYXRhVHJhbnNmZXIiLCJ0ZXh0Q29udGVudCIsImRyb3BCdWJibGUiLCJkcmFnb3ZlckJ1YmJsZSIsImRhdGFJZEF0dHIiLCJkZWxheSIsImRlbGF5T25Ub3VjaE9ubHkiLCJ0b3VjaFN0YXJ0VGhyZXNob2xkIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZvcmNlRmFsbGJhY2siLCJmYWxsYmFja0NsYXNzIiwiZmFsbGJhY2tPbkJvZHkiLCJmYWxsYmFja1RvbGVyYW5jZSIsImZhbGxiYWNrT2Zmc2V0Iiwic3VwcG9ydFBvaW50ZXIiLCJmbiIsImNoYXJBdCIsIm5hdGl2ZURyYWdnYWJsZSIsIl9vbiIsIl9vblRhcFN0YXJ0IiwicHVzaCIsImdldCIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudEZyb21Qb2ludCIsIl9jbG9zZXN0IiwiY2hpbGRyZW4iLCJzb3J0YWJsZU1vdXNlQWxpZ25lZCIsIl9nZXREaXJlY3Rpb24iLCJjYW5jZWxhYmxlIiwidHlwZSIsInRvdWNoIiwib3JpZ2luYWxUYXJnZXQiLCJzaGFkb3dSb290IiwicGF0aCIsImNvbXBvc2VkUGF0aCIsInN0YXJ0SW5kZXgiLCJzdGFydERyYWdnYWJsZUluZGV4IiwiX3NhdmVJbnB1dENoZWNrZWRTdGF0ZSIsImJ1dHRvbiIsImlzQ29udGVudEVkaXRhYmxlIiwiX2luZGV4IiwiX2Rpc3BhdGNoRXZlbnQiLCJ1bmRlZmluZWQiLCJzb21lIiwiY3JpdGVyaWEiLCJ0cmltIiwiX3ByZXBhcmVEcmFnU3RhcnQiLCJfaGFuZGxlQXV0b1Njcm9sbCIsImZhbGxiYWNrIiwib2dFbGVtU2Nyb2xsZXIiLCJuZXdFbGVtIiwib3duZXJEb2N1bWVudCIsImRyYWdTdGFydEZuIiwibmV4dFNpYmxpbmciLCJfbGFzdFgiLCJfbGFzdFkiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cyIsIl90cmlnZ2VyRHJhZ1N0YXJ0IiwiX3RvZ2dsZUNsYXNzIiwiX2ZpbmQiLCJfZGlzYWJsZURyYWdnYWJsZSIsIl9vbkRyb3AiLCJfZGlzYWJsZURlbGF5ZWREcmFnIiwiX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlciIsIl9kcmFnU3RhcnRUaW1lciIsImUiLCJmbG9vciIsImNsZWFyVGltZW91dCIsIl9vZmYiLCJwb2ludGVyVHlwZSIsIl9vbkRyYWdTdGFydCIsInNlbGVjdGlvbiIsIl9uZXh0VGljayIsImVtcHR5IiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiZXJyIiwiX2RyYWdTdGFydGVkIiwiX2FwcGVuZEdob3N0IiwiX251bGxpbmciLCJmb3JBdXRvU2Nyb2xsIiwicGFyZW50IiwiaW5zZXJ0ZWQiLCJtYXRyaXgiLCJfbWF0cml4Iiwic2NhbGVYIiwiYSIsInNjYWxlWSIsImQiLCJyZWxhdGl2ZVNjcm9sbE9mZnNldCIsIl9nZXRSZWxhdGl2ZVNjcm9sbE9mZnNldCIsImR4IiwiZHkiLCJ0cmFuc2xhdGUzZCIsImNvbnRhaW5lciIsImdob3N0UmVsYXRpdmVQYXJlbnRSZWN0IiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJfY2xvbmUiLCJfaGlkZUNsb25lIiwiX2Nsb25lSWQiLCJpbnNlcnRCZWZvcmUiLCJfbG9vcElkIiwiZWZmZWN0QWxsb3dlZCIsIl9kcmFnU3RhcnRJZCIsImRyYWdSZWN0IiwicmV2ZXJ0IiwiYWN0aXZlU29ydGFibGUiLCJpc093bmVyIiwiY2FuU29ydCIsImNvbXBsZXRlZCIsImluc2VydGlvbiIsIl9zaG93Q2xvbmUiLCJfYW5pbWF0ZSIsImFuaW1hdGVkIiwiY2hhbmdlZCIsImNvbnRhaW5zIiwibGFzdFB1dE1vZGUiLCJlbExhc3RDaGlsZCIsIl9naG9zdElzTGFzdCIsIl9vbk1vdmUiLCJ0YXJnZXRCZWZvcmVGaXJzdFN3YXAiLCJhbGlnbmVkIiwiZGlmZmVyZW50TGV2ZWwiLCJzaWRlMSIsInNjcm9sbGVkUGFzdFRvcCIsIl9pc1Njcm9sbGVkUGFzdCIsInNjcm9sbEJlZm9yZSIsIl9nZXRTd2FwRGlyZWN0aW9uIiwiX2dldEluc2VydERpcmVjdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsImFmdGVyIiwibW92ZVZlY3RvciIsIl91bnNpbGVudCIsInByZXZSZWN0IiwibXMiLCJjdXJyZW50UmVjdCIsIl9yZXBhaW50Iiwib2Zmc2V0V2lkdGgiLCJfb2ZmTW92ZUV2ZW50cyIsIl9vZmZVcEV2ZW50cyIsIl9jYW5jZWxUaHJvdHRsZSIsIl9jYW5jZWxOZXh0VGljayIsInJlbW92ZUNoaWxkIiwic2F2ZSIsImNoZWNrZWQiLCJoYW5kbGVFdmVudCIsIl9nbG9iYWxEcmFnT3ZlciIsInRvQXJyYXkiLCJvcmRlciIsIm4iLCJnZXRBdHRyaWJ1dGUiLCJfZ2VuZXJhdGVJZCIsIml0ZW1zIiwiaWQiLCJzZXQiLCJjbG9zZXN0Iiwic2VsZWN0b3IiLCJvcHRpb24iLCJkZXN0cm95IiwiQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQXR0cmlidXRlIiwic3BsaWNlIiwiY2xvbmVIaWRkZW4iLCJjdHgiLCJpbmNsdWRlQ1RYIiwiX21hdGNoZXMiLCJfZ2V0UGFyZW50T3JIb3N0IiwiaG9zdCIsImRyb3BFZmZlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhdGUiLCJjbGFzc0xpc3QiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwicHJvcCIsInZhbCIsImRlZmF1bHRWaWV3IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImN1cnJlbnRTdHlsZSIsImFwcGxpZWRUcmFuc2Zvcm1zIiwiRE9NTWF0cml4IiwiV2ViS2l0Q1NTTWF0cml4IiwiQ1NTTWF0cml4IiwidGFnTmFtZSIsIml0ZXJhdG9yIiwibGlzdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic29ydGFibGUiLCJ0YXJnZXRFbCIsInRvRWwiLCJmcm9tRWwiLCJvcmlnaW5hbEV2dCIsIm9uTmFtZSIsInRvVXBwZXJDYXNlIiwic3Vic3RyIiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJpdGVtIiwiY2xvbmUiLCJvcmlnaW5hbEV2ZW50IiwicHVsbE1vZGUiLCJkaXNwYXRjaEV2ZW50Iiwid2lsbEluc2VydEFmdGVyIiwib25Nb3ZlRm4iLCJvbk1vdmUiLCJyZXRWYWwiLCJkcmFnZ2VkIiwiZHJhZ2dlZFJlY3QiLCJyZWxhdGVkIiwicmVsYXRlZFJlY3QiLCJjaGlsZE51bSIsImN1cnJlbnRDaGlsZCIsImxhc3QiLCJsYXN0RWxlbWVudENoaWxkIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImVsUmVjdCIsIm1vdXNlT25BeGlzIiwidGFyZ2V0UzIiLCJzcGFjZXIiLCJpc0xhc3RUYXJnZXQiLCJ0YXJnZXRMZW5ndGgiLCJ0YXJnZXRTMSIsImludmVydCIsImRyYWdTMSIsImRyYWdTMiIsImRyYWdFbEluZGV4IiwidGFyZ2V0SW5kZXgiLCJzdHIiLCJzcmMiLCJocmVmIiwic3VtIiwiY2hhckNvZGVBdCIsImluZGV4Iiwic3Vic3RyaW5nIiwibWF0Y2hlcyIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiXyIsIl90aHJvdHRsZVRpbWVvdXQiLCJjYWxsYmFjayIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImRzdCIsImtleSIsImhhc093blByb3BlcnR5IiwiZG9tIiwicm9vdCIsImlucHV0cyIsImlkeCIsImFkanVzdEZvclRyYW5zZm9ybSIsImFkanVzdEZvckZpeGVkIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiY29udGFpbmVyUmVjdCIsInNpZGUiLCJlbFNpZGUiLCJwYXJlbnRTaWRlIiwidmlzaWJsZSIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJ1dGlscyIsIm9uIiwib2ZmIiwiZmluZCIsImlzIiwiZXh0ZW5kIiwidGhyb3R0bGUiLCJ0b2dnbGVDbGFzcyIsIm5leHRUaWNrIiwiY2FuY2VsTmV4dFRpY2siLCJkZXRlY3REaXJlY3Rpb24iLCJnZXRDaGlsZCIsImNyZWF0ZSIsInZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O0FBT0EsQ0FBQyxTQUFTQSxjQUFULENBQXdCQyxPQUF4QixFQUFpQztBQUNqQzs7QUFFQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0MsR0FBM0MsRUFBZ0Q7QUFDL0NELElBQUFBLE1BQU0sQ0FBQ0QsT0FBRCxDQUFOO0FBQ0EsR0FGRCxNQUdLLElBQUksT0FBT0csTUFBUCxJQUFpQixXQUFqQixJQUFnQyxPQUFPQSxNQUFNLENBQUNDLE9BQWQsSUFBeUIsV0FB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Q0EsS0FQZTtBQVFoQjJjLElBQUFBLE1BQU0sRUFBRXhTLE9BUlE7QUFTaEJ5UyxJQUFBQSxRQUFRLEVBQUVqWCxTQVRNO0FBVWhCOFAsSUFBQUEsT0FBTyxFQUFFdEksUUFWTztBQVdoQjBQLElBQUFBLFdBQVcsRUFBRXROLFlBWEc7QUFZaEJnSixJQUFBQSxLQUFLLEVBQUV4RyxNQVpTO0FBYWhCMEksSUFBQUEsS0FBSyxFQUFFdE0sTUFiUztBQWNoQjJPLElBQUFBLFFBQVEsRUFBRXpNLFNBZE07QUFlaEIwTSxJQUFBQSxjQUFjLEVBQUVwSSxlQWZBO0FBZ0JoQnFJLElBQUFBLGVBQWUsRUFBRXJjLGdCQWhCRDtBQWlCaEJzYyxJQUFBQSxRQUFRLEVBQUUzYjtBQWpCTSxHQUFqQjtBQXFCQTs7Ozs7O0FBS0FpRyxFQUFBQSxRQUFRLENBQUMyVixNQUFULEdBQWtCLFVBQVVsZCxFQUFWLEVBQWNZLE9BQWQsRUFBdUI7QUFDeEMsV0FBTyxJQUFJMkcsUUFBSixDQUFhdkgsRUFBYixFQUFpQlksT0FBakIsQ0FBUDtBQUNBLEdBRkQsQ0EvM0U2QixDQW80RTdCOzs7QUFDQTJHLEVBQUFBLFFBQVEsQ0FBQzRWLE9BQVQsR0FBbUIsT0FBbkI7QUFDQSxTQUFPNVYsUUFBUDtBQUNBLENBcDVFRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiFcbiAqIFNvcnRhYmxlXG4gKiBAYXV0aG9yXHRSdWJhWGEgICA8dHJhc2hAcnViYXhhLm9yZz5cbiAqIEBhdXRob3JcdG93ZW5tICAgIDxvd2VuMjMzNTVAZ21haWwuY29tPlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuKGZ1bmN0aW9uIHNvcnRhYmxlTW9kdWxlKGZhY3RvcnkpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8qIGpzaGludCBzdWI6dHJ1ZSAqL1xuXHRcdHdpbmRvd1tcIlNvcnRhYmxlXCJdID0gZmFjdG9yeSgpO1xuXHR9XG59KShmdW5jdGlvbiBzb3J0YWJsZUZhY3RvcnkoKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8ICF3aW5kb3cuZG9jdW1lbnQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gc29ydGFibGVFcnJvcigpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlNvcnRhYmxlLmpzIHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtcblx0XHR9O1xuXHR9XG5cblx0dmFyIGRyYWdFbCxcblx0XHRwYXJlbnRFbCxcblx0XHRnaG9zdEVsLFxuXHRcdGNsb25lRWwsXG5cdFx0cm9vdEVsLFxuXHRcdG5leHRFbCxcblx0XHRsYXN0RG93bkVsLFxuXG5cdFx0c2Nyb2xsRWwsXG5cdFx0c2Nyb2xsUGFyZW50RWwsXG5cdFx0c2Nyb2xsQ3VzdG9tRm4sXG5cblx0XHRvbGRJbmRleCxcblx0XHRuZXdJbmRleCxcblx0XHRvbGREcmFnZ2FibGVJbmRleCxcblx0XHRuZXdEcmFnZ2FibGVJbmRleCxcblxuXHRcdGFjdGl2ZUdyb3VwLFxuXHRcdHB1dFNvcnRhYmxlLFxuXG5cdFx0YXV0b1Njcm9sbHMgPSBbXSxcblx0XHRzY3JvbGxpbmcgPSBmYWxzZSxcblxuXHRcdGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZSxcblx0XHRpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZSxcblx0XHRzb3J0YWJsZXMgPSBbXSxcblxuXHRcdHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsLFxuXHRcdGxhc3RQb2ludGVyRWxlbVgsXG5cdFx0bGFzdFBvaW50ZXJFbGVtWSxcblxuXHRcdHRhcEV2dCxcblx0XHR0b3VjaEV2dCxcblxuXHRcdG1vdmVkLFxuXG5cblx0XHRsYXN0VGFyZ2V0LFxuXHRcdGxhc3REaXJlY3Rpb24sXG5cdFx0cGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2UsXG5cdFx0aXNDaXJjdW1zdGFudGlhbEludmVydCA9IGZhbHNlLFxuXHRcdGxhc3RNb2RlLCAvLyAnc3dhcCcgb3IgJ2luc2VydCdcblxuXHRcdHRhcmdldE1vdmVEaXN0YW5jZSxcblxuXHRcdC8vIEZvciBwb3NpdGlvbmluZyBnaG9zdCBhYnNvbHV0ZWx5XG5cdFx0Z2hvc3RSZWxhdGl2ZVBhcmVudCxcblx0XHRnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbCA9IFtdLCAvLyAobGVmdCwgdG9wKVxuXG5cdFx0cmVhbERyYWdFbFJlY3QsIC8vIGRyYWdFbCByZWN0IGFmdGVyIGN1cnJlbnQgYW5pbWF0aW9uXG5cblx0XHQvKiogQGNvbnN0ICovXG5cdFx0Ul9TUEFDRSA9IC9cXHMrL2csXG5cblx0XHRleHBhbmRvID0gJ1NvcnRhYmxlJyArIChuZXcgRGF0ZSkuZ2V0VGltZSgpLFxuXG5cdFx0d2luID0gd2luZG93LFxuXHRcdGRvY3VtZW50ID0gd2luLmRvY3VtZW50LFxuXHRcdHBhcnNlSW50ID0gd2luLnBhcnNlSW50LFxuXHRcdHNldFRpbWVvdXQgPSB3aW4uc2V0VGltZW91dCxcblxuXHRcdCQgPSB3aW4ualF1ZXJ5IHx8IHdpbi5aZXB0byxcblx0XHRQb2x5bWVyID0gd2luLlBvbHltZXIsXG5cblx0XHRjYXB0dXJlTW9kZSA9IHtcblx0XHRcdGNhcHR1cmU6IGZhbHNlLFxuXHRcdFx0cGFzc2l2ZTogZmFsc2Vcblx0XHR9LFxuXG5cdFx0SUUxMU9yTGVzcyA9ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKD86VHJpZGVudC4qcnZbIDpdPzExXFwufG1zaWV8aWVtb2JpbGUpL2kpLFxuXHRcdEVkZ2UgPSAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2UvaSksXG5cdFx0RmlyZUZveCA9ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvZmlyZWZveC9pKSxcblx0XHRTYWZhcmkgPSAhIShuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9zYWZhcmkvaSkgJiYgIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2Nocm9tZS9pKSAmJiAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvYW5kcm9pZC9pKSksXG5cdFx0SU9TID0gISEobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVAoYWR8b2R8aG9uZSkvaSkpLFxuXG5cdFx0UG9zaXRpb25HaG9zdEFic29sdXRlbHkgPSBJT1MsXG5cblx0XHRDU1NGbG9hdFByb3BlcnR5ID0gRWRnZSB8fCBJRTExT3JMZXNzID8gJ2Nzc0Zsb2F0JyA6ICdmbG9hdCcsXG5cblx0XHQvLyBUaGlzIHdpbGwgbm90IHBhc3MgZm9yIElFOSwgYmVjYXVzZSBJRTkgRG5EIG9ubHkgd29ya3Mgb24gYW5jaG9yc1xuXHRcdHN1cHBvcnREcmFnZ2FibGUgPSAoJ2RyYWdnYWJsZScgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLFxuXG5cdFx0c3VwcG9ydENzc1BvaW50ZXJFdmVudHMgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBmYWxzZSB3aGVuIDw9IElFMTFcblx0XHRcdGlmIChJRTExT3JMZXNzKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3gnKTtcblx0XHRcdGVsLnN0eWxlLmNzc1RleHQgPSAncG9pbnRlci1ldmVudHM6YXV0byc7XG5cdFx0XHRyZXR1cm4gZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9PT0gJ2F1dG8nO1xuXHRcdH0pKCksXG5cblx0XHRfc2lsZW50ID0gZmFsc2UsXG5cdFx0X2FsaWduZWRTaWxlbnQgPSBmYWxzZSxcblxuXHRcdGFicyA9IE1hdGguYWJzLFxuXHRcdG1pbiA9IE1hdGgubWluLFxuXHRcdG1heCA9IE1hdGgubWF4LFxuXG5cdFx0c2F2ZWRJbnB1dENoZWNrZWQgPSBbXSxcblxuXHRcdF9kZXRlY3REaXJlY3Rpb24gPSBmdW5jdGlvbihlbCwgb3B0aW9ucykge1xuXHRcdFx0dmFyIGVsQ1NTID0gX2NzcyhlbCksXG5cdFx0XHRcdGVsV2lkdGggPSBwYXJzZUludChlbENTUy53aWR0aClcblx0XHRcdFx0XHQtIHBhcnNlSW50KGVsQ1NTLnBhZGRpbmdMZWZ0KVxuXHRcdFx0XHRcdC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ1JpZ2h0KVxuXHRcdFx0XHRcdC0gcGFyc2VJbnQoZWxDU1MuYm9yZGVyTGVmdFdpZHRoKVxuXHRcdFx0XHRcdC0gcGFyc2VJbnQoZWxDU1MuYm9yZGVyUmlnaHRXaWR0aCksXG5cdFx0XHRcdGNoaWxkMSA9IF9nZXRDaGlsZChlbCwgMCwgb3B0aW9ucyksXG5cdFx0XHRcdGNoaWxkMiA9IF9nZXRDaGlsZChlbCwgMSwgb3B0aW9ucyksXG5cdFx0XHRcdGZpcnN0Q2hpbGRDU1MgPSBjaGlsZDEgJiYgX2NzcyhjaGlsZDEpLFxuXHRcdFx0XHRzZWNvbmRDaGlsZENTUyA9IGNoaWxkMiAmJiBfY3NzKGNoaWxkMiksXG5cdFx0XHRcdGZpcnN0Q2hpbGRXaWR0aCA9IGZpcnN0Q2hpbGRDU1MgJiYgcGFyc2VJbnQoZmlyc3RDaGlsZENTUy5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KGZpcnN0Q2hpbGRDU1MubWFyZ2luUmlnaHQpICsgX2dldFJlY3QoY2hpbGQxKS53aWR0aCxcblx0XHRcdFx0c2Vjb25kQ2hpbGRXaWR0aCA9IHNlY29uZENoaWxkQ1NTICYmIHBhcnNlSW50KHNlY29uZENoaWxkQ1NTLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQoc2Vjb25kQ2hpbGRDU1MubWFyZ2luUmlnaHQpICsgX2dldFJlY3QoY2hpbGQyKS53aWR0aDtcblxuXHRcdFx0aWYgKGVsQ1NTLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuXHRcdFx0XHRyZXR1cm4gZWxDU1MuZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbicgfHwgZWxDU1MuZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbi1yZXZlcnNlJ1xuXHRcdFx0XHQ/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlbENTUy5kaXNwbGF5ID09PSAnZ3JpZCcpIHtcblx0XHRcdFx0cmV0dXJuIGVsQ1NTLmdyaWRUZW1wbGF0ZUNvbHVtbnMuc3BsaXQoJyAnKS5sZW5ndGggPD0gMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjaGlsZDEgJiYgZmlyc3RDaGlsZENTUy5mbG9hdCAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdHZhciB0b3VjaGluZ1NpZGVDaGlsZDIgPSBmaXJzdENoaWxkQ1NTLmZsb2F0ID09PSAnbGVmdCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG5cdFx0XHRcdHJldHVybiBjaGlsZDIgJiYgKHNlY29uZENoaWxkQ1NTLmNsZWFyID09PSAnYm90aCcgfHwgc2Vjb25kQ2hpbGRDU1MuY2xlYXIgPT09IHRvdWNoaW5nU2lkZUNoaWxkMikgP1xuXHRcdFx0XHRcdCd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoY2hpbGQxICYmXG5cdFx0XHRcdChcblx0XHRcdFx0XHRmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdibG9jaycgfHxcblx0XHRcdFx0XHRmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdmbGV4JyB8fFxuXHRcdFx0XHRcdGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ3RhYmxlJyB8fFxuXHRcdFx0XHRcdGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2dyaWQnIHx8XG5cdFx0XHRcdFx0Zmlyc3RDaGlsZFdpZHRoID49IGVsV2lkdGggJiZcblx0XHRcdFx0XHRlbENTU1tDU1NGbG9hdFByb3BlcnR5XSA9PT0gJ25vbmUnIHx8XG5cdFx0XHRcdFx0Y2hpbGQyICYmXG5cdFx0XHRcdFx0ZWxDU1NbQ1NTRmxvYXRQcm9wZXJ0eV0gPT09ICdub25lJyAmJlxuXHRcdFx0XHRcdGZpcnN0Q2hpbGRXaWR0aCArIHNlY29uZENoaWxkV2lkdGggPiBlbFdpZHRoXG5cdFx0XHRcdCkgP1xuXHRcdFx0XHQndmVydGljYWwnIDogJ2hvcml6b250YWwnXG5cdFx0XHQpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBEZXRlY3RzIGZpcnN0IG5lYXJlc3QgZW1wdHkgc29ydGFibGUgdG8gWCBhbmQgWSBwb3NpdGlvbiB1c2luZyBlbXB0eUluc2VydFRocmVzaG9sZC5cblx0XHQgKiBAcGFyYW0gIHtOdW1iZXJ9IHggICAgICBYIHBvc2l0aW9uXG5cdFx0ICogQHBhcmFtICB7TnVtYmVyfSB5ICAgICAgWSBwb3NpdGlvblxuXHRcdCAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAgIEVsZW1lbnQgb2YgdGhlIGZpcnN0IGZvdW5kIG5lYXJlc3QgU29ydGFibGVcblx0XHQgKi9cblx0XHRfZGV0ZWN0TmVhcmVzdEVtcHR5U29ydGFibGUgPSBmdW5jdGlvbih4LCB5KSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNvcnRhYmxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoX2xhc3RDaGlsZChzb3J0YWJsZXNbaV0pKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgcmVjdCA9IF9nZXRSZWN0KHNvcnRhYmxlc1tpXSksXG5cdFx0XHRcdFx0dGhyZXNob2xkID0gc29ydGFibGVzW2ldW2V4cGFuZG9dLm9wdGlvbnMuZW1wdHlJbnNlcnRUaHJlc2hvbGQsXG5cdFx0XHRcdFx0aW5zaWRlSG9yaXpvbnRhbGx5ID0geCA+PSAocmVjdC5sZWZ0IC0gdGhyZXNob2xkKSAmJiB4IDw9IChyZWN0LnJpZ2h0ICsgdGhyZXNob2xkKSxcblx0XHRcdFx0XHRpbnNpZGVWZXJ0aWNhbGx5ID0geSA+PSAocmVjdC50b3AgLSB0aHJlc2hvbGQpICYmIHkgPD0gKHJlY3QuYm90dG9tICsgdGhyZXNob2xkKTtcblxuXHRcdFx0XHRpZiAodGhyZXNob2xkICYmIGluc2lkZUhvcml6b250YWxseSAmJiBpbnNpZGVWZXJ0aWNhbGx5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNvcnRhYmxlc1tpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRfaXNDbGllbnRJblJvd0NvbHVtbiA9IGZ1bmN0aW9uKHgsIHksIGVsLCBheGlzLCBvcHRpb25zKSB7XG5cdFx0XHR2YXIgdGFyZ2V0UmVjdCA9IF9nZXRSZWN0KGVsKSxcblx0XHRcdFx0dGFyZ2V0UzFPcHAgPSBheGlzID09PSAndmVydGljYWwnID8gdGFyZ2V0UmVjdC5sZWZ0IDogdGFyZ2V0UmVjdC50b3AsXG5cdFx0XHRcdHRhcmdldFMyT3BwID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IHRhcmdldFJlY3QucmlnaHQgOiB0YXJnZXRSZWN0LmJvdHRvbSxcblx0XHRcdFx0bW91c2VPbk9wcEF4aXMgPSBheGlzID09PSAndmVydGljYWwnID8geCA6IHk7XG5cblx0XHRcdHJldHVybiB0YXJnZXRTMU9wcCA8IG1vdXNlT25PcHBBeGlzICYmIG1vdXNlT25PcHBBeGlzIDwgdGFyZ2V0UzJPcHA7XG5cdFx0fSxcblxuXHRcdF9pc0VsSW5Sb3dDb2x1bW4gPSBmdW5jdGlvbihlbDEsIGVsMiwgYXhpcykge1xuXHRcdFx0dmFyIGVsMVJlY3QgPSBlbDEgPT09IGRyYWdFbCAmJiByZWFsRHJhZ0VsUmVjdCB8fCBfZ2V0UmVjdChlbDEpLFxuXHRcdFx0XHRlbDJSZWN0ID0gZWwyID09PSBkcmFnRWwgJiYgcmVhbERyYWdFbFJlY3QgfHwgX2dldFJlY3QoZWwyKSxcblx0XHRcdFx0ZWwxUzFPcHAgPSBheGlzID09PSAndmVydGljYWwnID8gZWwxUmVjdC5sZWZ0IDogZWwxUmVjdC50b3AsXG5cdFx0XHRcdGVsMVMyT3BwID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IGVsMVJlY3QucmlnaHQgOiBlbDFSZWN0LmJvdHRvbSxcblx0XHRcdFx0ZWwxT3BwTGVuZ3RoID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IGVsMVJlY3Qud2lkdGggOiBlbDFSZWN0LmhlaWdodCxcblx0XHRcdFx0ZWwyUzFPcHAgPSBheGlzID09PSAndmVydGljYWwnID8gZWwyUmVjdC5sZWZ0IDogZWwyUmVjdC50b3AsXG5cdFx0XHRcdGVsMlMyT3BwID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IGVsMlJlY3QucmlnaHQgOiBlbDJSZWN0LmJvdHRvbSxcblx0XHRcdFx0ZWwyT3BwTGVuZ3RoID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IGVsMlJlY3Qud2lkdGggOiBlbDJSZWN0LmhlaWdodDtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0ZWwxUzFPcHAgPT09IGVsMlMxT3BwIHx8XG5cdFx0XHRcdGVsMVMyT3BwID09PSBlbDJTMk9wcCB8fFxuXHRcdFx0XHQoZWwxUzFPcHAgKyBlbDFPcHBMZW5ndGggLyAyKSA9PT0gKGVsMlMxT3BwICsgZWwyT3BwTGVuZ3RoIC8gMilcblx0XHRcdCk7XG5cdFx0fSxcblxuXHRcdF9nZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudCA9IGZ1bmN0aW9uKGVsLCBpbmNsdWRlU2VsZikge1xuXHRcdFx0Ly8gc2tpcCB0byB3aW5kb3dcblx0XHRcdGlmICghZWwgfHwgIWVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkgcmV0dXJuIF9nZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG5cblx0XHRcdHZhciBlbGVtID0gZWw7XG5cdFx0XHR2YXIgZ290U2VsZiA9IGZhbHNlO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHQvLyB3ZSBkb24ndCBuZWVkIHRvIGdldCBlbGVtIGNzcyBpZiBpdCBpc24ndCBldmVuIG92ZXJmbG93aW5nIGluIHRoZSBmaXJzdCBwbGFjZSAocGVyZm9ybWFuY2UpXG5cdFx0XHRcdGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0KSB7XG5cdFx0XHRcdFx0dmFyIGVsZW1DU1MgPSBfY3NzKGVsZW0pO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdGVsZW0uY2xpZW50V2lkdGggPCBlbGVtLnNjcm9sbFdpZHRoICYmIChlbGVtQ1NTLm92ZXJmbG93WCA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1ggPT0gJ3Njcm9sbCcpIHx8XG5cdFx0XHRcdFx0XHRlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0ICYmIChlbGVtQ1NTLm92ZXJmbG93WSA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1kgPT0gJ3Njcm9sbCcpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWVsZW0gfHwgIWVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0IHx8IGVsZW0gPT09IGRvY3VtZW50LmJvZHkpIHJldHVybiBfZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuXG5cdFx0XHRcdFx0XHRpZiAoZ290U2VsZiB8fCBpbmNsdWRlU2VsZikgcmV0dXJuIGVsZW07XG5cdFx0XHRcdFx0XHRnb3RTZWxmID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdC8qIGpzaGludCBib3NzOnRydWUgKi9cblx0XHRcdH0gd2hpbGUgKGVsZW0gPSBlbGVtLnBhcmVudE5vZGUpO1xuXG5cdFx0XHRyZXR1cm4gX2dldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcblx0XHR9LFxuXG5cdFx0X2dldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChJRTExT3JMZXNzKSB7XG5cdFx0XHRcdHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudDtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0X3Njcm9sbEJ5ID0gZnVuY3Rpb24oZWwsIHgsIHkpIHtcblx0XHRcdGVsLnNjcm9sbExlZnQgKz0geDtcblx0XHRcdGVsLnNjcm9sbFRvcCArPSB5O1xuXHRcdH0sXG5cblx0XHRfYXV0b1Njcm9sbCA9IF90aHJvdHRsZShmdW5jdGlvbiAoLyoqRXZlbnQqL2V2dCwgLyoqT2JqZWN0Ki9vcHRpb25zLCAvKipIVE1MRWxlbWVudCovcm9vdEVsLCAvKipCb29sZWFuKi9pc0ZhbGxiYWNrKSB7XG5cdFx0XHQvLyBCdWc6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTUwNTUyMVxuXHRcdFx0aWYgKG9wdGlvbnMuc2Nyb2xsKSB7XG5cdFx0XHRcdHZhciBfdGhpcyA9IHJvb3RFbCA/IHJvb3RFbFtleHBhbmRvXSA6IHdpbmRvdyxcblx0XHRcdFx0XHRzZW5zID0gb3B0aW9ucy5zY3JvbGxTZW5zaXRpdml0eSxcblx0XHRcdFx0XHRzcGVlZCA9IG9wdGlvbnMuc2Nyb2xsU3BlZWQsXG5cblx0XHRcdFx0XHR4ID0gZXZ0LmNsaWVudFgsXG5cdFx0XHRcdFx0eSA9IGV2dC5jbGllbnRZLFxuXG5cdFx0XHRcdFx0d2luU2Nyb2xsZXIgPSBfZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpLFxuXG5cdFx0XHRcdFx0c2Nyb2xsVGhpc0luc3RhbmNlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gRGV0ZWN0IHNjcm9sbEVsXG5cdFx0XHRcdGlmIChzY3JvbGxQYXJlbnRFbCAhPT0gcm9vdEVsKSB7XG5cdFx0XHRcdFx0X2NsZWFyQXV0b1Njcm9sbHMoKTtcblxuXHRcdFx0XHRcdHNjcm9sbEVsID0gb3B0aW9ucy5zY3JvbGw7XG5cdFx0XHRcdFx0c2Nyb2xsQ3VzdG9tRm4gPSBvcHRpb25zLnNjcm9sbEZuO1xuXG5cdFx0XHRcdFx0aWYgKHNjcm9sbEVsID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRzY3JvbGxFbCA9IF9nZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChyb290RWwsIHRydWUpO1xuXHRcdFx0XHRcdFx0c2Nyb2xsUGFyZW50RWwgPSBzY3JvbGxFbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdHZhciBsYXllcnNPdXQgPSAwO1xuXHRcdFx0XHR2YXIgY3VycmVudFBhcmVudCA9IHNjcm9sbEVsO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0dmFyXHRlbCA9IGN1cnJlbnRQYXJlbnQsXG5cdFx0XHRcdFx0XHRyZWN0ID0gX2dldFJlY3QoZWwpLFxuXG5cdFx0XHRcdFx0XHR0b3AgPSByZWN0LnRvcCxcblx0XHRcdFx0XHRcdGJvdHRvbSA9IHJlY3QuYm90dG9tLFxuXHRcdFx0XHRcdFx0bGVmdCA9IHJlY3QubGVmdCxcblx0XHRcdFx0XHRcdHJpZ2h0ID0gcmVjdC5yaWdodCxcblxuXHRcdFx0XHRcdFx0d2lkdGggPSByZWN0LndpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0ID0gcmVjdC5oZWlnaHQsXG5cblx0XHRcdFx0XHRcdHNjcm9sbFdpZHRoLFxuXHRcdFx0XHRcdFx0c2Nyb2xsSGVpZ2h0LFxuXG5cdFx0XHRcdFx0XHRjc3MsXG5cblx0XHRcdFx0XHRcdHZ4LFxuXHRcdFx0XHRcdFx0dnksXG5cblx0XHRcdFx0XHRcdGNhblNjcm9sbFgsXG5cdFx0XHRcdFx0XHRjYW5TY3JvbGxZLFxuXG5cdFx0XHRcdFx0XHRzY3JvbGxQb3NYLFxuXHRcdFx0XHRcdFx0c2Nyb2xsUG9zWTtcblxuXG5cdFx0XHRcdFx0c2Nyb2xsV2lkdGggPSBlbC5zY3JvbGxXaWR0aDtcblx0XHRcdFx0XHRzY3JvbGxIZWlnaHQgPSBlbC5zY3JvbGxIZWlnaHQ7XG5cblx0XHRcdFx0XHRjc3MgPSBfY3NzKGVsKTtcblxuXHRcdFx0XHRcdHNjcm9sbFBvc1ggPSBlbC5zY3JvbGxMZWZ0O1xuXHRcdFx0XHRcdHNjcm9sbFBvc1kgPSBlbC5zY3JvbGxUb3A7XG5cblx0XHRcdFx0XHRpZiAoZWwgPT09IHdpblNjcm9sbGVyKSB7XG5cdFx0XHRcdFx0XHRjYW5TY3JvbGxYID0gd2lkdGggPCBzY3JvbGxXaWR0aCAmJiAoY3NzLm92ZXJmbG93WCA9PT0gJ2F1dG8nIHx8IGNzcy5vdmVyZmxvd1ggPT09ICdzY3JvbGwnIHx8IGNzcy5vdmVyZmxvd1ggPT09ICd2aXNpYmxlJyk7XG5cdFx0XHRcdFx0XHRjYW5TY3JvbGxZID0gaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0ICYmIChjc3Mub3ZlcmZsb3dZID09PSAnYXV0bycgfHwgY3NzLm92ZXJmbG93WSA9PT0gJ3Njcm9sbCcgfHwgY3NzLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2FuU2Nyb2xsWCA9IHdpZHRoIDwgc2Nyb2xsV2lkdGggJiYgKGNzcy5vdmVyZmxvd1ggPT09ICdhdXRvJyB8fCBjc3Mub3ZlcmZsb3dYID09PSAnc2Nyb2xsJyk7XG5cdFx0XHRcdFx0XHRjYW5TY3JvbGxZID0gaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0ICYmIChjc3Mub3ZlcmZsb3dZID09PSAnYXV0bycgfHwgY3NzLm92ZXJmbG93WSA9PT0gJ3Njcm9sbCcpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZ4ID0gY2FuU2Nyb2xsWCAmJiAoYWJzKHJpZ2h0IC0geCkgPD0gc2VucyAmJiAoc2Nyb2xsUG9zWCArIHdpZHRoKSA8IHNjcm9sbFdpZHRoKSAtIChhYnMobGVmdCAtIHgpIDw9IHNlbnMgJiYgISFzY3JvbGxQb3NYKTtcblxuXHRcdFx0XHRcdHZ5ID0gY2FuU2Nyb2xsWSAmJiAoYWJzKGJvdHRvbSAtIHkpIDw9IHNlbnMgJiYgKHNjcm9sbFBvc1kgKyBoZWlnaHQpIDwgc2Nyb2xsSGVpZ2h0KSAtIChhYnModG9wIC0geSkgPD0gc2VucyAmJiAhIXNjcm9sbFBvc1kpO1xuXG5cblx0XHRcdFx0XHRpZiAoIWF1dG9TY3JvbGxzW2xheWVyc091dF0pIHtcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IGxheWVyc091dDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghYXV0b1Njcm9sbHNbaV0pIHtcblx0XHRcdFx0XHRcdFx0XHRhdXRvU2Nyb2xsc1tpXSA9IHt9O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGF1dG9TY3JvbGxzW2xheWVyc091dF0udnggIT0gdnggfHwgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eSAhPSB2eSB8fCBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLmVsICE9PSBlbCkge1xuXHRcdFx0XHRcdFx0YXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5lbCA9IGVsO1xuXHRcdFx0XHRcdFx0YXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eCA9IHZ4O1xuXHRcdFx0XHRcdFx0YXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eSA9IHZ5O1xuXG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKGF1dG9TY3JvbGxzW2xheWVyc091dF0ucGlkKTtcblxuXHRcdFx0XHRcdFx0aWYgKGVsICYmICh2eCAhPSAwIHx8IHZ5ICE9IDApKSB7XG5cdFx0XHRcdFx0XHRcdHNjcm9sbFRoaXNJbnN0YW5jZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdC8qIGpzaGludCBsb29wZnVuYzp0cnVlICovXG5cdFx0XHRcdFx0XHRcdGF1dG9TY3JvbGxzW2xheWVyc091dF0ucGlkID0gc2V0SW50ZXJ2YWwoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBlbXVsYXRlIGRyYWcgb3ZlciBkdXJpbmcgYXV0b3Njcm9sbCAoZmFsbGJhY2spLCBlbXVsYXRpbmcgbmF0aXZlIERuRCBiZWhhdmlvdXJcblx0XHRcdFx0XHRcdFx0XHRpZiAoaXNGYWxsYmFjayAmJiB0aGlzLmxheWVyID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRTb3J0YWJsZS5hY3RpdmUuX2VtdWxhdGVEcmFnT3Zlcih0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFNvcnRhYmxlLmFjdGl2ZS5fb25Ub3VjaE1vdmUodG91Y2hFdnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR2YXIgc2Nyb2xsT2Zmc2V0WSA9IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ5ID8gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnkgKiBzcGVlZCA6IDA7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHNjcm9sbE9mZnNldFggPSBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eCA/IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ4ICogc3BlZWQgOiAwO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZihzY3JvbGxDdXN0b21GbikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChzY3JvbGxDdXN0b21Gbi5jYWxsKF90aGlzLCBzY3JvbGxPZmZzZXRYLCBzY3JvbGxPZmZzZXRZLCBldnQsIHRvdWNoRXZ0LCBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCkgIT09ICdjb250aW51ZScpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdF9zY3JvbGxCeShhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCwgc2Nyb2xsT2Zmc2V0WCwgc2Nyb2xsT2Zmc2V0WSk7XG5cdFx0XHRcdFx0XHRcdH0pLmJpbmQoe2xheWVyOiBsYXllcnNPdXR9KSwgMjQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsYXllcnNPdXQrKztcblx0XHRcdFx0fSB3aGlsZSAob3B0aW9ucy5idWJibGVTY3JvbGwgJiYgY3VycmVudFBhcmVudCAhPT0gd2luU2Nyb2xsZXIgJiYgKGN1cnJlbnRQYXJlbnQgPSBfZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoY3VycmVudFBhcmVudCwgZmFsc2UpKSk7XG5cdFx0XHRcdHNjcm9sbGluZyA9IHNjcm9sbFRoaXNJbnN0YW5jZTsgLy8gaW4gY2FzZSBhbm90aGVyIGZ1bmN0aW9uIGNhdGNoZXMgc2Nyb2xsaW5nIGFzIGZhbHNlIGluIGJldHdlZW4gd2hlbiBpdCBpcyBub3Rcblx0XHRcdH1cblx0XHR9LCAzMCksXG5cblx0XHRfY2xlYXJBdXRvU2Nyb2xscyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGF1dG9TY3JvbGxzLmZvckVhY2goZnVuY3Rpb24oYXV0b1Njcm9sbCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKGF1dG9TY3JvbGwucGlkKTtcblx0XHRcdH0pO1xuXHRcdFx0YXV0b1Njcm9sbHMgPSBbXTtcblx0XHR9LFxuXG5cdFx0X3ByZXBhcmVHcm91cCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0XHRmdW5jdGlvbiB0b0ZuKHZhbHVlLCBwdWxsKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbih0bywgZnJvbSwgZHJhZ0VsLCBldnQpIHtcblx0XHRcdFx0XHR2YXIgc2FtZUdyb3VwID0gdG8ub3B0aW9ucy5ncm91cC5uYW1lICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRmcm9tLm9wdGlvbnMuZ3JvdXAubmFtZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0dG8ub3B0aW9ucy5ncm91cC5uYW1lID09PSBmcm9tLm9wdGlvbnMuZ3JvdXAubmFtZTtcblxuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PSBudWxsICYmIChwdWxsIHx8IHNhbWVHcm91cCkpIHtcblx0XHRcdFx0XHRcdC8vIERlZmF1bHQgcHVsbCB2YWx1ZVxuXHRcdFx0XHRcdFx0Ly8gRGVmYXVsdCBwdWxsIGFuZCBwdXQgdmFsdWUgaWYgc2FtZSBncm91cFxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHVsbCAmJiB2YWx1ZSA9PT0gJ2Nsb25lJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdG9Gbih2YWx1ZSh0bywgZnJvbSwgZHJhZ0VsLCBldnQpLCBwdWxsKSh0bywgZnJvbSwgZHJhZ0VsLCBldnQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgb3RoZXJHcm91cCA9IChwdWxsID8gdG8gOiBmcm9tKS5vcHRpb25zLmdyb3VwLm5hbWU7XG5cblx0XHRcdFx0XHRcdHJldHVybiAodmFsdWUgPT09IHRydWUgfHxcblx0XHRcdFx0XHRcdCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlID09PSBvdGhlckdyb3VwKSB8fFxuXHRcdFx0XHRcdFx0KHZhbHVlLmpvaW4gJiYgdmFsdWUuaW5kZXhPZihvdGhlckdyb3VwKSA+IC0xKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZ3JvdXAgPSB7fTtcblx0XHRcdHZhciBvcmlnaW5hbEdyb3VwID0gb3B0aW9ucy5ncm91cDtcblxuXHRcdFx0aWYgKCFvcmlnaW5hbEdyb3VwIHx8IHR5cGVvZiBvcmlnaW5hbEdyb3VwICE9ICdvYmplY3QnKSB7XG5cdFx0XHRcdG9yaWdpbmFsR3JvdXAgPSB7bmFtZTogb3JpZ2luYWxHcm91cH07XG5cdFx0XHR9XG5cblx0XHRcdGdyb3VwLm5hbWUgPSBvcmlnaW5hbEdyb3VwLm5hbWU7XG5cdFx0XHRncm91cC5jaGVja1B1bGwgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHVsbCwgdHJ1ZSk7XG5cdFx0XHRncm91cC5jaGVja1B1dCA9IHRvRm4ob3JpZ2luYWxHcm91cC5wdXQpO1xuXHRcdFx0Z3JvdXAucmV2ZXJ0Q2xvbmUgPSBvcmlnaW5hbEdyb3VwLnJldmVydENsb25lO1xuXG5cdFx0XHRvcHRpb25zLmdyb3VwID0gZ3JvdXA7XG5cdFx0fSxcblxuXHRcdF9jaGVja0FsaWdubWVudCA9IGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0aWYgKCFkcmFnRWwgfHwgIWRyYWdFbC5wYXJlbnROb2RlKSByZXR1cm47XG5cdFx0XHRkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXSAmJiBkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXS5fY29tcHV0ZUlzQWxpZ25lZChldnQpO1xuXHRcdH0sXG5cblx0XHRfaGlkZUdob3N0Rm9yVGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIXN1cHBvcnRDc3NQb2ludGVyRXZlbnRzICYmIGdob3N0RWwpIHtcblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdF91bmhpZGVHaG9zdEZvclRhcmdldCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCFzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyAmJiBnaG9zdEVsKSB7XG5cdFx0XHRcdF9jc3MoZ2hvc3RFbCwgJ2Rpc3BsYXknLCAnJyk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXG5cdC8vICMxMTg0IGZpeCAtIFByZXZlbnQgY2xpY2sgZXZlbnQgb24gZmFsbGJhY2sgaWYgZHJhZ2dlZCBidXQgaXRlbSBub3QgY2hhbmdlZCBwb3NpdGlvblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdGlmIChpZ25vcmVOZXh0Q2xpY2spIHtcblx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbiAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uICYmIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdGlnbm9yZU5leHRDbGljayA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSwgdHJ1ZSk7XG5cblx0dmFyIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50ID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0aWYgKGRyYWdFbCkge1xuXHRcdFx0ZXZ0ID0gZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dDtcblx0XHRcdHZhciBuZWFyZXN0ID0gX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlKGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSk7XG5cblx0XHRcdGlmIChuZWFyZXN0KSB7XG5cdFx0XHRcdC8vIENyZWF0ZSBpbWl0YXRpb24gZXZlbnRcblx0XHRcdFx0dmFyIGV2ZW50ID0ge307XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gZXZ0KSB7XG5cdFx0XHRcdFx0ZXZlbnRbaV0gPSBldnRbaV07XG5cdFx0XHRcdH1cblx0XHRcdFx0ZXZlbnQudGFyZ2V0ID0gZXZlbnQucm9vdEVsID0gbmVhcmVzdDtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQgPSB2b2lkIDA7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9IHZvaWQgMDtcblx0XHRcdFx0bmVhcmVzdFtleHBhbmRvXS5fb25EcmFnT3ZlcihldmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAY2xhc3MgIFNvcnRhYmxlXG5cdCAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSAgZWxcblx0ICogQHBhcmFtICB7T2JqZWN0fSAgICAgICBbb3B0aW9uc11cblx0ICovXG5cdGZ1bmN0aW9uIFNvcnRhYmxlKGVsLCBvcHRpb25zKSB7XG5cdFx0aWYgKCEoZWwgJiYgZWwubm9kZVR5cGUgJiYgZWwubm9kZVR5cGUgPT09IDEpKSB7XG5cdFx0XHR0aHJvdyAnU29ydGFibGU6IGBlbGAgbXVzdCBiZSBIVE1MRWxlbWVudCwgbm90ICcgKyB7fS50b1N0cmluZy5jYWxsKGVsKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsID0gZWw7IC8vIHJvb3QgZWxlbWVudFxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgPSBfZXh0ZW5kKHt9LCBvcHRpb25zKTtcblxuXG5cdFx0Ly8gRXhwb3J0IGluc3RhbmNlXG5cdFx0ZWxbZXhwYW5kb10gPSB0aGlzO1xuXG5cdFx0Ly8gRGVmYXVsdCBvcHRpb25zXG5cdFx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdFx0Z3JvdXA6IG51bGwsXG5cdFx0XHRzb3J0OiB0cnVlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0c3RvcmU6IG51bGwsXG5cdFx0XHRoYW5kbGU6IG51bGwsXG5cdFx0XHRzY3JvbGw6IHRydWUsXG5cdFx0XHRzY3JvbGxTZW5zaXRpdml0eTogMzAsXG5cdFx0XHRzY3JvbGxTcGVlZDogMTAsXG5cdFx0XHRidWJibGVTY3JvbGw6IHRydWUsXG5cdFx0XHRkcmFnZ2FibGU6IC9bdW9dbC9pLnRlc3QoZWwubm9kZU5hbWUpID8gJz5saScgOiAnPionLFxuXHRcdFx0c3dhcFRocmVzaG9sZDogMSwgLy8gcGVyY2VudGFnZTsgMCA8PSB4IDw9IDFcblx0XHRcdGludmVydFN3YXA6IGZhbHNlLCAvLyBpbnZlcnQgYWx3YXlzXG5cdFx0XHRpbnZlcnRlZFN3YXBUaHJlc2hvbGQ6IG51bGwsIC8vIHdpbGwgYmUgc2V0IHRvIHNhbWUgYXMgc3dhcFRocmVzaG9sZCBpZiBkZWZhdWx0XG5cdFx0XHRyZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcblx0XHRcdGRpcmVjdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBfZGV0ZWN0RGlyZWN0aW9uKGVsLCB0aGlzLm9wdGlvbnMpO1xuXHRcdFx0fSxcblx0XHRcdGdob3N0Q2xhc3M6ICdzb3J0YWJsZS1naG9zdCcsXG5cdFx0XHRjaG9zZW5DbGFzczogJ3NvcnRhYmxlLWNob3NlbicsXG5cdFx0XHRkcmFnQ2xhc3M6ICdzb3J0YWJsZS1kcmFnJyxcblx0XHRcdGlnbm9yZTogJ2EsIGltZycsXG5cdFx0XHRmaWx0ZXI6IG51bGwsXG5cdFx0XHRwcmV2ZW50T25GaWx0ZXI6IHRydWUsXG5cdFx0XHRhbmltYXRpb246IDAsXG5cdFx0XHRlYXNpbmc6IG51bGwsXG5cdFx0XHRzZXREYXRhOiBmdW5jdGlvbiAoZGF0YVRyYW5zZmVyLCBkcmFnRWwpIHtcblx0XHRcdFx0ZGF0YVRyYW5zZmVyLnNldERhdGEoJ1RleHQnLCBkcmFnRWwudGV4dENvbnRlbnQpO1xuXHRcdFx0fSxcblx0XHRcdGRyb3BCdWJibGU6IGZhbHNlLFxuXHRcdFx0ZHJhZ292ZXJCdWJibGU6IGZhbHNlLFxuXHRcdFx0ZGF0YUlkQXR0cjogJ2RhdGEtaWQnLFxuXHRcdFx0ZGVsYXk6IDAsXG5cdFx0XHRkZWxheU9uVG91Y2hPbmx5OiBmYWxzZSxcblx0XHRcdHRvdWNoU3RhcnRUaHJlc2hvbGQ6IHBhcnNlSW50KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAxMCkgfHwgMSxcblx0XHRcdGZvcmNlRmFsbGJhY2s6IGZhbHNlLFxuXHRcdFx0ZmFsbGJhY2tDbGFzczogJ3NvcnRhYmxlLWZhbGxiYWNrJyxcblx0XHRcdGZhbGxiYWNrT25Cb2R5OiBmYWxzZSxcblx0XHRcdGZhbGxiYWNrVG9sZXJhbmNlOiAwLFxuXHRcdFx0ZmFsbGJhY2tPZmZzZXQ6IHt4OiAwLCB5OiAwfSxcblx0XHRcdHN1cHBvcnRQb2ludGVyOiBTb3J0YWJsZS5zdXBwb3J0UG9pbnRlciAhPT0gZmFsc2UgJiYgKCdQb2ludGVyRXZlbnQnIGluIHdpbmRvdyksXG5cdFx0XHRlbXB0eUluc2VydFRocmVzaG9sZDogNVxuXHRcdH07XG5cblxuXHRcdC8vIFNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHRmb3IgKHZhciBuYW1lIGluIGRlZmF1bHRzKSB7XG5cdFx0XHQhKG5hbWUgaW4gb3B0aW9ucykgJiYgKG9wdGlvbnNbbmFtZV0gPSBkZWZhdWx0c1tuYW1lXSk7XG5cdFx0fVxuXG5cdFx0X3ByZXBhcmVHcm91cChvcHRpb25zKTtcblxuXHRcdC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuXHRcdGZvciAodmFyIGZuIGluIHRoaXMpIHtcblx0XHRcdGlmIChmbi5jaGFyQXQoMCkgPT09ICdfJyAmJiB0eXBlb2YgdGhpc1tmbl0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldHVwIGRyYWcgbW9kZVxuXHRcdHRoaXMubmF0aXZlRHJhZ2dhYmxlID0gb3B0aW9ucy5mb3JjZUZhbGxiYWNrID8gZmFsc2UgOiBzdXBwb3J0RHJhZ2dhYmxlO1xuXG5cdFx0aWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG5cdFx0XHQvLyBUb3VjaCBzdGFydCB0aHJlc2hvbGQgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiB0aGUgbmF0aXZlIGRyYWdzdGFydCB0aHJlc2hvbGRcblx0XHRcdHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkID0gMTtcblx0XHR9XG5cblx0XHQvLyBCaW5kIGV2ZW50c1xuXHRcdGlmIChvcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG5cdFx0XHRfb24oZWwsICdwb2ludGVyZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfb24oZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcblx0XHRcdF9vbihlbCwgJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRhcFN0YXJ0KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcblx0XHRcdF9vbihlbCwgJ2RyYWdvdmVyJywgdGhpcyk7XG5cdFx0XHRfb24oZWwsICdkcmFnZW50ZXInLCB0aGlzKTtcblx0XHR9XG5cblx0XHRzb3J0YWJsZXMucHVzaCh0aGlzLmVsKTtcblxuXHRcdC8vIFJlc3RvcmUgc29ydGluZ1xuXHRcdG9wdGlvbnMuc3RvcmUgJiYgb3B0aW9ucy5zdG9yZS5nZXQgJiYgdGhpcy5zb3J0KG9wdGlvbnMuc3RvcmUuZ2V0KHRoaXMpIHx8IFtdKTtcblx0fVxuXG5cdFNvcnRhYmxlLnByb3RvdHlwZSA9IC8qKiBAbGVuZHMgU29ydGFibGUucHJvdG90eXBlICovIHtcblx0XHRjb25zdHJ1Y3RvcjogU29ydGFibGUsXG5cblx0XHRfY29tcHV0ZUlzQWxpZ25lZDogZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHR2YXIgdGFyZ2V0O1xuXG5cdFx0XHRpZiAoZ2hvc3RFbCAmJiAhc3VwcG9ydENzc1BvaW50ZXJFdmVudHMpIHtcblx0XHRcdFx0X2hpZGVHaG9zdEZvclRhcmdldCgpO1xuXHRcdFx0XHR0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSk7XG5cdFx0XHRcdF91bmhpZGVHaG9zdEZvclRhcmdldCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGFyZ2V0ID0gZXZ0LnRhcmdldDtcblx0XHRcdH1cblxuXHRcdFx0dGFyZ2V0ID0gX2Nsb3Nlc3QodGFyZ2V0LCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLmVsLCBmYWxzZSk7XG5cdFx0XHRpZiAoX2FsaWduZWRTaWxlbnQpIHJldHVybjtcblx0XHRcdGlmICghZHJhZ0VsIHx8IGRyYWdFbC5wYXJlbnROb2RlICE9PSB0aGlzLmVsKSByZXR1cm47XG5cblx0XHRcdHZhciBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vIERvbid0IGNoYW5nZSBmb3IgdGFyZ2V0IGluIGNhc2UgaXQgaXMgY2hhbmdlZCB0byBhbGlnbmVkIGJlZm9yZSBvbkRyYWdPdmVyIGlzIGZpcmVkXG5cdFx0XHRcdGlmIChfY2xvc2VzdChjaGlsZHJlbltpXSwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5lbCwgZmFsc2UpICYmIGNoaWxkcmVuW2ldICE9PSB0YXJnZXQpIHtcblx0XHRcdFx0XHRjaGlsZHJlbltpXS5zb3J0YWJsZU1vdXNlQWxpZ25lZCA9IF9pc0NsaWVudEluUm93Q29sdW1uKGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSwgY2hpbGRyZW5baV0sIHRoaXMuX2dldERpcmVjdGlvbihldnQsIG51bGwpLCB0aGlzLm9wdGlvbnMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBVc2VkIGZvciBudWxsaW5nIGxhc3QgdGFyZ2V0IHdoZW4gbm90IGluIGVsZW1lbnQsIG5vdGhpbmcgdG8gZG8gd2l0aCBjaGVja2luZyBpZiBhbGlnbmVkXG5cdFx0XHRpZiAoIV9jbG9zZXN0KHRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5lbCwgdHJ1ZSkpIHtcblx0XHRcdFx0bGFzdFRhcmdldCA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdF9hbGlnbmVkU2lsZW50ID0gdHJ1ZTtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9hbGlnbmVkU2lsZW50ID0gZmFsc2U7XG5cdFx0XHR9LCAzMCk7XG5cblx0XHR9LFxuXG5cdFx0X2dldERpcmVjdGlvbjogZnVuY3Rpb24oZXZ0LCB0YXJnZXQpIHtcblx0XHRcdHJldHVybiAodHlwZW9mIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdmdW5jdGlvbicpID8gdGhpcy5vcHRpb25zLmRpcmVjdGlvbi5jYWxsKHRoaXMsIGV2dCwgdGFyZ2V0LCBkcmFnRWwpIDogdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcblx0XHR9LFxuXG5cdFx0X29uVGFwU3RhcnQ6IGZ1bmN0aW9uICgvKiogRXZlbnR8VG91Y2hFdmVudCAqL2V2dCkge1xuXHRcdFx0aWYgKCFldnQuY2FuY2VsYWJsZSkgcmV0dXJuO1xuXHRcdFx0dmFyIF90aGlzID0gdGhpcyxcblx0XHRcdFx0ZWwgPSB0aGlzLmVsLFxuXHRcdFx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuXHRcdFx0XHRwcmV2ZW50T25GaWx0ZXIgPSBvcHRpb25zLnByZXZlbnRPbkZpbHRlcixcblx0XHRcdFx0dHlwZSA9IGV2dC50eXBlLFxuXHRcdFx0XHR0b3VjaCA9IGV2dC50b3VjaGVzICYmIGV2dC50b3VjaGVzWzBdLFxuXHRcdFx0XHR0YXJnZXQgPSAodG91Y2ggfHwgZXZ0KS50YXJnZXQsXG5cdFx0XHRcdG9yaWdpbmFsVGFyZ2V0ID0gZXZ0LnRhcmdldC5zaGFkb3dSb290ICYmICgoZXZ0LnBhdGggJiYgZXZ0LnBhdGhbMF0pIHx8IChldnQuY29tcG9zZWRQYXRoICYmIGV2dC5jb21wb3NlZFBhdGgoKVswXSkpIHx8IHRhcmdldCxcblx0XHRcdFx0ZmlsdGVyID0gb3B0aW9ucy5maWx0ZXIsXG5cdFx0XHRcdHN0YXJ0SW5kZXgsXG5cdFx0XHRcdHN0YXJ0RHJhZ2dhYmxlSW5kZXg7XG5cblx0XHRcdF9zYXZlSW5wdXRDaGVja2VkU3RhdGUoZWwpO1xuXG5cdFx0XHQvLyBEb24ndCB0cmlnZ2VyIHN0YXJ0IGV2ZW50IHdoZW4gYW4gZWxlbWVudCBpcyBiZWVuIGRyYWdnZWQsIG90aGVyd2lzZSB0aGUgZXZ0Lm9sZGluZGV4IGFsd2F5cyB3cm9uZyB3aGVuIHNldCBvcHRpb24uZ3JvdXAuXG5cdFx0XHRpZiAoZHJhZ0VsKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKC9tb3VzZWRvd258cG9pbnRlcmRvd24vLnRlc3QodHlwZSkgJiYgZXZ0LmJ1dHRvbiAhPT0gMCB8fCBvcHRpb25zLmRpc2FibGVkKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gb25seSBsZWZ0IGJ1dHRvbiBhbmQgZW5hYmxlZFxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYW5jZWwgZG5kIGlmIG9yaWdpbmFsIHRhcmdldCBpcyBjb250ZW50IGVkaXRhYmxlXG5cdFx0XHRpZiAob3JpZ2luYWxUYXJnZXQuaXNDb250ZW50RWRpdGFibGUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0YXJnZXQgPSBfY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgZmFsc2UpO1xuXG5cblx0XHRcdGlmIChsYXN0RG93bkVsID09PSB0YXJnZXQpIHtcblx0XHRcdFx0Ly8gSWdub3JpbmcgZHVwbGljYXRlIGBkb3duYFxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGRyYWdnZWQgZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudFxuXHRcdFx0c3RhcnRJbmRleCA9IF9pbmRleCh0YXJnZXQpO1xuXHRcdFx0c3RhcnREcmFnZ2FibGVJbmRleCA9IF9pbmRleCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcblxuXHRcdFx0Ly8gQ2hlY2sgZmlsdGVyXG5cdFx0XHRpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpZiAoZmlsdGVyLmNhbGwodGhpcywgZXZ0LCB0YXJnZXQsIHRoaXMpKSB7XG5cdFx0XHRcdFx0X2Rpc3BhdGNoRXZlbnQoX3RoaXMsIG9yaWdpbmFsVGFyZ2V0LCAnZmlsdGVyJywgdGFyZ2V0LCBlbCwgZWwsIHN0YXJ0SW5kZXgsIHVuZGVmaW5lZCwgc3RhcnREcmFnZ2FibGVJbmRleCk7XG5cdFx0XHRcdFx0cHJldmVudE9uRmlsdGVyICYmIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHJldHVybjsgLy8gY2FuY2VsIGRuZFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChmaWx0ZXIpIHtcblx0XHRcdFx0ZmlsdGVyID0gZmlsdGVyLnNwbGl0KCcsJykuc29tZShmdW5jdGlvbiAoY3JpdGVyaWEpIHtcblx0XHRcdFx0XHRjcml0ZXJpYSA9IF9jbG9zZXN0KG9yaWdpbmFsVGFyZ2V0LCBjcml0ZXJpYS50cmltKCksIGVsLCBmYWxzZSk7XG5cblx0XHRcdFx0XHRpZiAoY3JpdGVyaWEpIHtcblx0XHRcdFx0XHRcdF9kaXNwYXRjaEV2ZW50KF90aGlzLCBjcml0ZXJpYSwgJ2ZpbHRlcicsIHRhcmdldCwgZWwsIGVsLCBzdGFydEluZGV4LCB1bmRlZmluZWQsIHN0YXJ0RHJhZ2dhYmxlSW5kZXgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoZmlsdGVyKSB7XG5cdFx0XHRcdFx0cHJldmVudE9uRmlsdGVyICYmIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHJldHVybjsgLy8gY2FuY2VsIGRuZFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLmhhbmRsZSAmJiAhX2Nsb3Nlc3Qob3JpZ2luYWxUYXJnZXQsIG9wdGlvbnMuaGFuZGxlLCBlbCwgZmFsc2UpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUHJlcGFyZSBgZHJhZ3N0YXJ0YFxuXHRcdFx0dGhpcy5fcHJlcGFyZURyYWdTdGFydChldnQsIHRvdWNoLCB0YXJnZXQsIHN0YXJ0SW5kZXgsIHN0YXJ0RHJhZ2dhYmxlSW5kZXgpO1xuXHRcdH0sXG5cblxuXHRcdF9oYW5kbGVBdXRvU2Nyb2xsOiBmdW5jdGlvbihldnQsIGZhbGxiYWNrKSB7XG5cdFx0XHRpZiAoIWRyYWdFbCB8fCAhdGhpcy5vcHRpb25zLnNjcm9sbCkgcmV0dXJuO1xuXHRcdFx0dmFyIHggPSBldnQuY2xpZW50WCxcblx0XHRcdFx0eSA9IGV2dC5jbGllbnRZLFxuXG5cdFx0XHRcdGVsZW0gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpLFxuXHRcdFx0XHRfdGhpcyA9IHRoaXM7XG5cblx0XHRcdC8vIElFIGRvZXMgbm90IHNlZW0gdG8gaGF2ZSBuYXRpdmUgYXV0b3Njcm9sbCxcblx0XHRcdC8vIEVkZ2UncyBhdXRvc2Nyb2xsIHNlZW1zIHRvbyBjb25kaXRpb25hbCxcblx0XHRcdC8vIE1BQ09TIFNhZmFyaSBkb2VzIG5vdCBoYXZlIGF1dG9zY3JvbGwsXG5cdFx0XHQvLyBGaXJlZm94IGFuZCBDaHJvbWUgYXJlIGdvb2Rcblx0XHRcdGlmIChmYWxsYmFjayB8fCBFZGdlIHx8IElFMTFPckxlc3MgfHwgU2FmYXJpKSB7XG5cdFx0XHRcdF9hdXRvU2Nyb2xsKGV2dCwgX3RoaXMub3B0aW9ucywgZWxlbSwgZmFsbGJhY2spO1xuXG5cdFx0XHRcdC8vIExpc3RlbmVyIGZvciBwb2ludGVyIGVsZW1lbnQgY2hhbmdlXG5cdFx0XHRcdHZhciBvZ0VsZW1TY3JvbGxlciA9IF9nZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCB0cnVlKTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHNjcm9sbGluZyAmJlxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdCFwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCB8fFxuXHRcdFx0XHRcdFx0eCAhPT0gbGFzdFBvaW50ZXJFbGVtWCB8fFxuXHRcdFx0XHRcdFx0eSAhPT0gbGFzdFBvaW50ZXJFbGVtWVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cblx0XHRcdFx0XHRwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKTtcblx0XHRcdFx0XHQvLyBEZXRlY3QgZm9yIHBvaW50ZXIgZWxlbSBjaGFuZ2UsIGVtdWxhdGluZyBuYXRpdmUgRG5EIGJlaGF2aW91clxuXHRcdFx0XHRcdHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWRyYWdFbCkgcmV0dXJuO1xuXHRcdFx0XHRcdFx0Ly8gY291bGQgYWxzbyBjaGVjayBpZiBzY3JvbGwgZGlyZWN0aW9uIG9uIG5ld0VsZW0gY2hhbmdlcyBkdWUgdG8gcGFyZW50IGF1dG9zY3JvbGxpbmdcblx0XHRcdFx0XHRcdHZhciBuZXdFbGVtID0gX2dldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSksIHRydWUpO1xuXHRcdFx0XHRcdFx0aWYgKG5ld0VsZW0gIT09IG9nRWxlbVNjcm9sbGVyKSB7XG5cdFx0XHRcdFx0XHRcdG9nRWxlbVNjcm9sbGVyID0gbmV3RWxlbTtcblx0XHRcdFx0XHRcdFx0X2NsZWFyQXV0b1Njcm9sbHMoKTtcblx0XHRcdFx0XHRcdFx0X2F1dG9TY3JvbGwoZXZ0LCBfdGhpcy5vcHRpb25zLCBvZ0VsZW1TY3JvbGxlciwgZmFsbGJhY2spO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDEwKTtcblx0XHRcdFx0XHRsYXN0UG9pbnRlckVsZW1YID0geDtcblx0XHRcdFx0XHRsYXN0UG9pbnRlckVsZW1ZID0geTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZiBEbkQgaXMgZW5hYmxlZCAoYW5kIGJyb3dzZXIgaGFzIGdvb2QgYXV0b3Njcm9sbGluZyksIGZpcnN0IGF1dG9zY3JvbGwgd2lsbCBhbHJlYWR5IHNjcm9sbCwgc28gZ2V0IHBhcmVudCBhdXRvc2Nyb2xsIG9mIGZpcnN0IGF1dG9zY3JvbGxcblx0XHRcdFx0aWYgKCFfdGhpcy5vcHRpb25zLmJ1YmJsZVNjcm9sbCB8fCBfZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgdHJ1ZSkgPT09IF9nZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIHtcblx0XHRcdFx0XHRfY2xlYXJBdXRvU2Nyb2xscygpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRfYXV0b1Njcm9sbChldnQsIF90aGlzLm9wdGlvbnMsIF9nZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCBmYWxzZSksIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0X3ByZXBhcmVEcmFnU3RhcnQ6IGZ1bmN0aW9uICgvKiogRXZlbnQgKi9ldnQsIC8qKiBUb3VjaCAqL3RvdWNoLCAvKiogSFRNTEVsZW1lbnQgKi90YXJnZXQsIC8qKiBOdW1iZXIgKi9zdGFydEluZGV4LCAvKiogTnVtYmVyICovc3RhcnREcmFnZ2FibGVJbmRleCkge1xuXHRcdFx0dmFyIF90aGlzID0gdGhpcyxcblx0XHRcdFx0ZWwgPSBfdGhpcy5lbCxcblx0XHRcdFx0b3B0aW9ucyA9IF90aGlzLm9wdGlvbnMsXG5cdFx0XHRcdG93bmVyRG9jdW1lbnQgPSBlbC5vd25lckRvY3VtZW50LFxuXHRcdFx0XHRkcmFnU3RhcnRGbjtcblxuXHRcdFx0aWYgKHRhcmdldCAmJiAhZHJhZ0VsICYmICh0YXJnZXQucGFyZW50Tm9kZSA9PT0gZWwpKSB7XG5cdFx0XHRcdHJvb3RFbCA9IGVsO1xuXHRcdFx0XHRkcmFnRWwgPSB0YXJnZXQ7XG5cdFx0XHRcdHBhcmVudEVsID0gZHJhZ0VsLnBhcmVudE5vZGU7XG5cdFx0XHRcdG5leHRFbCA9IGRyYWdFbC5uZXh0U2libGluZztcblx0XHRcdFx0bGFzdERvd25FbCA9IHRhcmdldDtcblx0XHRcdFx0YWN0aXZlR3JvdXAgPSBvcHRpb25zLmdyb3VwO1xuXHRcdFx0XHRvbGRJbmRleCA9IHN0YXJ0SW5kZXg7XG5cdFx0XHRcdG9sZERyYWdnYWJsZUluZGV4ID0gc3RhcnREcmFnZ2FibGVJbmRleDtcblxuXHRcdFx0XHR0YXBFdnQgPSB7XG5cdFx0XHRcdFx0dGFyZ2V0OiBkcmFnRWwsXG5cdFx0XHRcdFx0Y2xpZW50WDogKHRvdWNoIHx8IGV2dCkuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiAodG91Y2ggfHwgZXZ0KS5jbGllbnRZXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dGhpcy5fbGFzdFggPSAodG91Y2ggfHwgZXZ0KS5jbGllbnRYO1xuXHRcdFx0XHR0aGlzLl9sYXN0WSA9ICh0b3VjaCB8fCBldnQpLmNsaWVudFk7XG5cblx0XHRcdFx0ZHJhZ0VsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJ2FsbCc7XG5cdFx0XHRcdC8vIHVuZG8gYW5pbWF0aW9uIGlmIG5lZWRlZFxuXHRcdFx0XHRkcmFnRWwuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuXHRcdFx0XHRkcmFnRWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XG5cblx0XHRcdFx0ZHJhZ1N0YXJ0Rm4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Ly8gRGVsYXllZCBkcmFnIGhhcyBiZWVuIHRyaWdnZXJlZFxuXHRcdFx0XHRcdC8vIHdlIGNhbiByZS1lbmFibGUgdGhlIGV2ZW50czogdG91Y2htb3ZlL21vdXNlbW92ZVxuXHRcdFx0XHRcdF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcblxuXHRcdFx0XHRcdGlmICghRmlyZUZveCAmJiBfdGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcblx0XHRcdFx0XHRcdGRyYWdFbC5kcmFnZ2FibGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEJpbmQgdGhlIGV2ZW50czogZHJhZ3N0YXJ0L2RyYWdlbmRcblx0XHRcdFx0XHRfdGhpcy5fdHJpZ2dlckRyYWdTdGFydChldnQsIHRvdWNoKTtcblxuXHRcdFx0XHRcdC8vIERyYWcgc3RhcnQgZXZlbnRcblx0XHRcdFx0XHRfZGlzcGF0Y2hFdmVudChfdGhpcywgcm9vdEVsLCAnY2hvb3NlJywgZHJhZ0VsLCByb290RWwsIHJvb3RFbCwgb2xkSW5kZXgsIHVuZGVmaW5lZCwgb2xkRHJhZ2dhYmxlSW5kZXgpO1xuXG5cdFx0XHRcdFx0Ly8gQ2hvc2VuIGl0ZW1cblx0XHRcdFx0XHRfdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmNob3NlbkNsYXNzLCB0cnVlKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvLyBEaXNhYmxlIFwiZHJhZ2dhYmxlXCJcblx0XHRcdFx0b3B0aW9ucy5pZ25vcmUuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChjcml0ZXJpYSkge1xuXHRcdFx0XHRcdF9maW5kKGRyYWdFbCwgY3JpdGVyaWEudHJpbSgpLCBfZGlzYWJsZURyYWdnYWJsZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdF9vbihvd25lckRvY3VtZW50LCAnZHJhZ292ZXInLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG5cdFx0XHRcdF9vbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuXHRcdFx0XHRfb24ob3duZXJEb2N1bWVudCwgJ3RvdWNobW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcblxuXHRcdFx0XHRfb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fb25Ecm9wKTtcblx0XHRcdFx0X29uKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9vbkRyb3ApO1xuXHRcdFx0XHRfb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XG5cblx0XHRcdFx0Ly8gTWFrZSBkcmFnRWwgZHJhZ2dhYmxlIChtdXN0IGJlIGJlZm9yZSBkZWxheSBmb3IgRmlyZUZveClcblx0XHRcdFx0aWYgKEZpcmVGb3ggJiYgdGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZCA9IDQ7XG5cdFx0XHRcdFx0ZHJhZ0VsLmRyYWdnYWJsZSA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBEZWxheSBpcyBpbXBvc3NpYmxlIGZvciBuYXRpdmUgRG5EIGluIEVkZ2Ugb3IgSUVcblx0XHRcdFx0aWYgKG9wdGlvbnMuZGVsYXkgJiYgKG9wdGlvbnMuZGVsYXlPblRvdWNoT25seSA/IHRvdWNoIDogdHJ1ZSkgJiYgKCF0aGlzLm5hdGl2ZURyYWdnYWJsZSB8fCAhKEVkZ2UgfHwgSUUxMU9yTGVzcykpKSB7XG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHVzZXIgbW92ZXMgdGhlIHBvaW50ZXIgb3IgbGV0IGdvIHRoZSBjbGljayBvciB0b3VjaFxuXHRcdFx0XHRcdC8vIGJlZm9yZSB0aGUgZGVsYXkgaGFzIGJlZW4gcmVhY2hlZDpcblx0XHRcdFx0XHQvLyBkaXNhYmxlIHRoZSBkZWxheWVkIGRyYWdcblx0XHRcdFx0XHRfb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcblx0XHRcdFx0XHRfb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG5cdFx0XHRcdFx0X29uKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuXHRcdFx0XHRcdF9vbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX3RoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG5cdFx0XHRcdFx0X29uKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcblx0XHRcdFx0XHRvcHRpb25zLnN1cHBvcnRQb2ludGVyICYmIF9vbihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcblxuXHRcdFx0XHRcdF90aGlzLl9kcmFnU3RhcnRUaW1lciA9IHNldFRpbWVvdXQoZHJhZ1N0YXJ0Rm4sIG9wdGlvbnMuZGVsYXkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRyYWdTdGFydEZuKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0X2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcjogZnVuY3Rpb24gKC8qKiBUb3VjaEV2ZW50fFBvaW50ZXJFdmVudCAqKi9lKSB7XG5cdFx0XHR2YXIgdG91Y2ggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xuXHRcdFx0aWYgKG1heChhYnModG91Y2guY2xpZW50WCAtIHRoaXMuX2xhc3RYKSwgYWJzKHRvdWNoLmNsaWVudFkgLSB0aGlzLl9sYXN0WSkpXG5cdFx0XHRcdFx0Pj0gTWF0aC5mbG9vcih0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZCAvICh0aGlzLm5hdGl2ZURyYWdnYWJsZSAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSlcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcoKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0X2Rpc2FibGVEZWxheWVkRHJhZzogZnVuY3Rpb24gKCkge1xuXHRcdFx0ZHJhZ0VsICYmIF9kaXNhYmxlRHJhZ2dhYmxlKGRyYWdFbCk7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5fZHJhZ1N0YXJ0VGltZXIpO1xuXG5cdFx0XHR0aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcblx0XHR9LFxuXG5cdFx0X2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50czogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzLmVsLm93bmVyRG9jdW1lbnQ7XG5cdFx0XHRfb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcblx0XHRcdF9vZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcblx0XHRcdF9vZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcblx0XHRcdF9vZmYob3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG5cdFx0XHRfb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuXHRcdFx0X29mZihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHRfdHJpZ2dlckRyYWdTdGFydDogZnVuY3Rpb24gKC8qKiBFdmVudCAqL2V2dCwgLyoqIFRvdWNoICovdG91Y2gpIHtcblx0XHRcdHRvdWNoID0gdG91Y2ggfHwgKGV2dC5wb2ludGVyVHlwZSA9PSAndG91Y2gnID8gZXZ0IDogbnVsbCk7XG5cblx0XHRcdGlmICghdGhpcy5uYXRpdmVEcmFnZ2FibGUgfHwgdG91Y2gpIHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuXHRcdFx0XHRcdF9vbihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRvdWNoKSB7XG5cdFx0XHRcdFx0X29uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9vbihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X29uKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcblx0XHRcdFx0X29uKHJvb3RFbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcblx0XHRcdH1cblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuXHRcdFx0XHRcdC8vIFRpbWVvdXQgbmVjY2Vzc2FyeSBmb3IgSUU5XG5cdFx0XHRcdFx0X25leHRUaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdF9kcmFnU3RhcnRlZDogZnVuY3Rpb24gKGZhbGxiYWNrLCBldnQpIHtcblx0XHRcdGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcblx0XHRcdGlmIChyb290RWwgJiYgZHJhZ0VsKSB7XG5cdFx0XHRcdGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuXHRcdFx0XHRcdF9vbihkb2N1bWVudCwgJ2RyYWdvdmVyJywgdGhpcy5faGFuZGxlQXV0b1Njcm9sbCk7XG5cdFx0XHRcdFx0X29uKGRvY3VtZW50LCAnZHJhZ292ZXInLCBfY2hlY2tBbGlnbm1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0XHRcdC8vIEFwcGx5IGVmZmVjdFxuXHRcdFx0XHQhZmFsbGJhY2sgJiYgX3RvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5kcmFnQ2xhc3MsIGZhbHNlKTtcblx0XHRcdFx0X3RvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5naG9zdENsYXNzLCB0cnVlKTtcblxuXHRcdFx0XHQvLyBJbiBjYXNlIGRyYWdnaW5nIGFuIGFuaW1hdGVkIGVsZW1lbnRcblx0XHRcdFx0X2NzcyhkcmFnRWwsICd0cmFuc2Zvcm0nLCAnJyk7XG5cblx0XHRcdFx0U29ydGFibGUuYWN0aXZlID0gdGhpcztcblxuXHRcdFx0XHRmYWxsYmFjayAmJiB0aGlzLl9hcHBlbmRHaG9zdCgpO1xuXG5cdFx0XHRcdC8vIERyYWcgc3RhcnQgZXZlbnRcblx0XHRcdFx0X2Rpc3BhdGNoRXZlbnQodGhpcywgcm9vdEVsLCAnc3RhcnQnLCBkcmFnRWwsIHJvb3RFbCwgcm9vdEVsLCBvbGRJbmRleCwgdW5kZWZpbmVkLCBvbGREcmFnZ2FibGVJbmRleCwgdW5kZWZpbmVkLCBldnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fbnVsbGluZygpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRfZW11bGF0ZURyYWdPdmVyOiBmdW5jdGlvbiAoZm9yQXV0b1Njcm9sbCkge1xuXHRcdFx0aWYgKHRvdWNoRXZ0KSB7XG5cdFx0XHRcdGlmICh0aGlzLl9sYXN0WCA9PT0gdG91Y2hFdnQuY2xpZW50WCAmJiB0aGlzLl9sYXN0WSA9PT0gdG91Y2hFdnQuY2xpZW50WSAmJiAhZm9yQXV0b1Njcm9sbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9sYXN0WCA9IHRvdWNoRXZ0LmNsaWVudFg7XG5cdFx0XHRcdHRoaXMuX2xhc3RZID0gdG91Y2hFdnQuY2xpZW50WTtcblxuXHRcdFx0XHRfaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG5cblx0XHRcdFx0dmFyIHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2hFdnQuY2xpZW50WCwgdG91Y2hFdnQuY2xpZW50WSk7XG5cdFx0XHRcdHZhciBwYXJlbnQgPSB0YXJnZXQ7XG5cblx0XHRcdFx0d2hpbGUgKHRhcmdldCAmJiB0YXJnZXQuc2hhZG93Um9vdCkge1xuXHRcdFx0XHRcdHRhcmdldCA9IHRhcmdldC5zaGFkb3dSb290LmVsZW1lbnRGcm9tUG9pbnQodG91Y2hFdnQuY2xpZW50WCwgdG91Y2hFdnQuY2xpZW50WSk7XG5cdFx0XHRcdFx0aWYgKHRhcmdldCA9PT0gcGFyZW50KSBicmVhaztcblx0XHRcdFx0XHRwYXJlbnQgPSB0YXJnZXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdFx0aWYgKHBhcmVudFtleHBhbmRvXSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgaW5zZXJ0ZWQ7XG5cblx0XHRcdFx0XHRcdFx0aW5zZXJ0ZWQgPSBwYXJlbnRbZXhwYW5kb10uX29uRHJhZ092ZXIoe1xuXHRcdFx0XHRcdFx0XHRcdGNsaWVudFg6IHRvdWNoRXZ0LmNsaWVudFgsXG5cdFx0XHRcdFx0XHRcdFx0Y2xpZW50WTogdG91Y2hFdnQuY2xpZW50WSxcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6IHRhcmdldCxcblx0XHRcdFx0XHRcdFx0XHRyb290RWw6IHBhcmVudFxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoaW5zZXJ0ZWQgJiYgIXRoaXMub3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSkge1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRhcmdldCA9IHBhcmVudDsgLy8gc3RvcmUgbGFzdCBlbGVtZW50XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8qIGpzaGludCBib3NzOnRydWUgKi9cblx0XHRcdFx0XHR3aGlsZSAocGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRyYWdFbC5wYXJlbnROb2RlW2V4cGFuZG9dLl9jb21wdXRlSXNBbGlnbmVkKHRvdWNoRXZ0KTtcblxuXHRcdFx0XHRfdW5oaWRlR2hvc3RGb3JUYXJnZXQoKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cblx0XHRfb25Ub3VjaE1vdmU6IGZ1bmN0aW9uICgvKipUb3VjaEV2ZW50Ki9ldnQsIGZvckF1dG9TY3JvbGwpIHtcblx0XHRcdGlmICh0YXBFdnQpIHtcblx0XHRcdFx0dmFyXHRvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuXHRcdFx0XHRcdGZhbGxiYWNrVG9sZXJhbmNlID0gb3B0aW9ucy5mYWxsYmFja1RvbGVyYW5jZSxcblx0XHRcdFx0XHRmYWxsYmFja09mZnNldCA9IG9wdGlvbnMuZmFsbGJhY2tPZmZzZXQsXG5cdFx0XHRcdFx0dG91Y2ggPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0LFxuXHRcdFx0XHRcdG1hdHJpeCA9IGdob3N0RWwgJiYgX21hdHJpeChnaG9zdEVsKSxcblx0XHRcdFx0XHRzY2FsZVggPSBnaG9zdEVsICYmIG1hdHJpeCAmJiBtYXRyaXguYSxcblx0XHRcdFx0XHRzY2FsZVkgPSBnaG9zdEVsICYmIG1hdHJpeCAmJiBtYXRyaXguZCxcblx0XHRcdFx0XHRyZWxhdGl2ZVNjcm9sbE9mZnNldCA9IFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgJiYgX2dldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0KGdob3N0UmVsYXRpdmVQYXJlbnQpLFxuXHRcdFx0XHRcdGR4ID0gKCh0b3VjaC5jbGllbnRYIC0gdGFwRXZ0LmNsaWVudFgpXG5cdFx0XHRcdFx0XHRcdCsgZmFsbGJhY2tPZmZzZXQueCkgLyAoc2NhbGVYIHx8IDEpXG5cdFx0XHRcdFx0XHRcdCsgKHJlbGF0aXZlU2Nyb2xsT2Zmc2V0ID8gKHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzBdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMF0pIDogMCkgLyAoc2NhbGVYIHx8IDEpLFxuXHRcdFx0XHRcdGR5ID0gKCh0b3VjaC5jbGllbnRZIC0gdGFwRXZ0LmNsaWVudFkpXG5cdFx0XHRcdFx0XHRcdCsgZmFsbGJhY2tPZmZzZXQueSkgLyAoc2NhbGVZIHx8IDEpXG5cdFx0XHRcdFx0XHRcdCsgKHJlbGF0aXZlU2Nyb2xsT2Zmc2V0ID8gKHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzFdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMV0pIDogMCkgLyAoc2NhbGVZIHx8IDEpLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZTNkID0gZXZ0LnRvdWNoZXMgPyAndHJhbnNsYXRlM2QoJyArIGR4ICsgJ3B4LCcgKyBkeSArICdweCwwKScgOiAndHJhbnNsYXRlKCcgKyBkeCArICdweCwnICsgZHkgKyAncHgpJztcblxuXHRcdFx0XHQvLyBvbmx5IHNldCB0aGUgc3RhdHVzIHRvIGRyYWdnaW5nLCB3aGVuIHdlIGFyZSBhY3R1YWxseSBkcmFnZ2luZ1xuXHRcdFx0XHRpZiAoIVNvcnRhYmxlLmFjdGl2ZSAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuXHRcdFx0XHRcdGlmIChmYWxsYmFja1RvbGVyYW5jZSAmJlxuXHRcdFx0XHRcdFx0bWluKGFicyh0b3VjaC5jbGllbnRYIC0gdGhpcy5fbGFzdFgpLCBhYnModG91Y2guY2xpZW50WSAtIHRoaXMuX2xhc3RZKSkgPCBmYWxsYmFja1RvbGVyYW5jZVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9vbkRyYWdTdGFydChldnQsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0IWZvckF1dG9TY3JvbGwgJiYgdGhpcy5faGFuZGxlQXV0b1Njcm9sbCh0b3VjaCwgdHJ1ZSk7XG5cblx0XHRcdFx0bW92ZWQgPSB0cnVlO1xuXHRcdFx0XHR0b3VjaEV2dCA9IHRvdWNoO1xuXG5cdFx0XHRcdF9jc3MoZ2hvc3RFbCwgJ3dlYmtpdFRyYW5zZm9ybScsIHRyYW5zbGF0ZTNkKTtcblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAnbW96VHJhbnNmb3JtJywgdHJhbnNsYXRlM2QpO1xuXHRcdFx0XHRfY3NzKGdob3N0RWwsICdtc1RyYW5zZm9ybScsIHRyYW5zbGF0ZTNkKTtcblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgdHJhbnNsYXRlM2QpO1xuXG5cdFx0XHRcdGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRfYXBwZW5kR2hvc3Q6IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIEJ1ZyBpZiB1c2luZyBzY2FsZSgpOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNjM3MDU4XG5cdFx0XHQvLyBOb3QgYmVpbmcgYWRqdXN0ZWQgZm9yXG5cdFx0XHRpZiAoIWdob3N0RWwpIHtcblx0XHRcdFx0dmFyIGNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5mYWxsYmFja09uQm9keSA/IGRvY3VtZW50LmJvZHkgOiByb290RWwsXG5cdFx0XHRcdFx0cmVjdCA9IF9nZXRSZWN0KGRyYWdFbCwgdHJ1ZSwgY29udGFpbmVyLCAhUG9zaXRpb25HaG9zdEFic29sdXRlbHkpLFxuXHRcdFx0XHRcdGNzcyA9IF9jc3MoZHJhZ0VsKSxcblx0XHRcdFx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0XHRcdC8vIFBvc2l0aW9uIGFic29sdXRlbHlcblx0XHRcdFx0aWYgKFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5KSB7XG5cdFx0XHRcdFx0Ly8gR2V0IHJlbGF0aXZlbHkgcG9zaXRpb25lZCBwYXJlbnRcblx0XHRcdFx0XHRnaG9zdFJlbGF0aXZlUGFyZW50ID0gY29udGFpbmVyO1xuXG5cdFx0XHRcdFx0d2hpbGUgKFxuXHRcdFx0XHRcdFx0X2NzcyhnaG9zdFJlbGF0aXZlUGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycgJiZcblx0XHRcdFx0XHRcdF9jc3MoZ2hvc3RSZWxhdGl2ZVBhcmVudCwgJ3RyYW5zZm9ybScpID09PSAnbm9uZScgJiZcblx0XHRcdFx0XHRcdGdob3N0UmVsYXRpdmVQYXJlbnQgIT09IGRvY3VtZW50XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRnaG9zdFJlbGF0aXZlUGFyZW50ID0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5wYXJlbnROb2RlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudCkge1xuXHRcdFx0XHRcdFx0dmFyIGdob3N0UmVsYXRpdmVQYXJlbnRSZWN0ID0gX2dldFJlY3QoZ2hvc3RSZWxhdGl2ZVBhcmVudCwgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdHJlY3QudG9wIC09IGdob3N0UmVsYXRpdmVQYXJlbnRSZWN0LnRvcDtcblx0XHRcdFx0XHRcdHJlY3QubGVmdCAtPSBnaG9zdFJlbGF0aXZlUGFyZW50UmVjdC5sZWZ0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuXHRcdFx0XHRcdFx0aWYgKGdob3N0UmVsYXRpdmVQYXJlbnQgPT09IGRvY3VtZW50KSBnaG9zdFJlbGF0aXZlUGFyZW50ID0gX2dldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcblxuXHRcdFx0XHRcdFx0cmVjdC50b3AgKz0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5zY3JvbGxUb3A7XG5cdFx0XHRcdFx0XHRyZWN0LmxlZnQgKz0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5zY3JvbGxMZWZ0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRnaG9zdFJlbGF0aXZlUGFyZW50ID0gX2dldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Z2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwgPSBfZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCk7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdGdob3N0RWwgPSBkcmFnRWwuY2xvbmVOb2RlKHRydWUpO1xuXG5cdFx0XHRcdF90b2dnbGVDbGFzcyhnaG9zdEVsLCBvcHRpb25zLmdob3N0Q2xhc3MsIGZhbHNlKTtcblx0XHRcdFx0X3RvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZmFsbGJhY2tDbGFzcywgdHJ1ZSk7XG5cdFx0XHRcdF90b2dnbGVDbGFzcyhnaG9zdEVsLCBvcHRpb25zLmRyYWdDbGFzcywgdHJ1ZSk7XG5cblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAnYm94LXNpemluZycsICdib3JkZXItYm94Jyk7XG5cdFx0XHRcdF9jc3MoZ2hvc3RFbCwgJ21hcmdpbicsIDApO1xuXHRcdFx0XHRfY3NzKGdob3N0RWwsICd0b3AnLCByZWN0LnRvcCk7XG5cdFx0XHRcdF9jc3MoZ2hvc3RFbCwgJ2xlZnQnLCByZWN0LmxlZnQpO1xuXHRcdFx0XHRfY3NzKGdob3N0RWwsICd3aWR0aCcsIHJlY3Qud2lkdGgpO1xuXHRcdFx0XHRfY3NzKGdob3N0RWwsICdoZWlnaHQnLCByZWN0LmhlaWdodCk7XG5cdFx0XHRcdF9jc3MoZ2hvc3RFbCwgJ29wYWNpdHknLCAnMC44Jyk7XG5cdFx0XHRcdF9jc3MoZ2hvc3RFbCwgJ3Bvc2l0aW9uJywgKFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ID8gJ2Fic29sdXRlJyA6ICdmaXhlZCcpKTtcblx0XHRcdFx0X2NzcyhnaG9zdEVsLCAnekluZGV4JywgJzEwMDAwMCcpO1xuXHRcdFx0XHRfY3NzKGdob3N0RWwsICdwb2ludGVyRXZlbnRzJywgJ25vbmUnKTtcblxuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2hvc3RFbCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdF9vbkRyYWdTdGFydDogZnVuY3Rpb24gKC8qKkV2ZW50Ki9ldnQsIC8qKmJvb2xlYW4qL2ZhbGxiYWNrKSB7XG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdFx0dmFyIGRhdGFUcmFuc2ZlciA9IGV2dC5kYXRhVHJhbnNmZXI7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IF90aGlzLm9wdGlvbnM7XG5cblx0XHRcdC8vIFNldHVwIGNsb25lXG5cdFx0XHRjbG9uZUVsID0gX2Nsb25lKGRyYWdFbCk7XG5cblx0XHRcdGNsb25lRWwuZHJhZ2dhYmxlID0gZmFsc2U7XG5cdFx0XHRjbG9uZUVsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG5cblx0XHRcdHRoaXMuX2hpZGVDbG9uZSgpO1xuXG5cdFx0XHRfdG9nZ2xlQ2xhc3MoY2xvbmVFbCwgX3RoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywgZmFsc2UpO1xuXG5cblx0XHRcdC8vICMxMTQzOiBJRnJhbWUgc3VwcG9ydCB3b3JrYXJvdW5kXG5cdFx0XHRfdGhpcy5fY2xvbmVJZCA9IF9uZXh0VGljayhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICghX3RoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSkge1xuXHRcdFx0XHRcdHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgZHJhZ0VsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfZGlzcGF0Y2hFdmVudChfdGhpcywgcm9vdEVsLCAnY2xvbmUnLCBkcmFnRWwpO1xuXHRcdFx0fSk7XG5cblxuXHRcdFx0IWZhbGxiYWNrICYmIF90b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCB0cnVlKTtcblxuXHRcdFx0Ly8gU2V0IHByb3BlciBkcm9wIGV2ZW50c1xuXHRcdFx0aWYgKGZhbGxiYWNrKSB7XG5cdFx0XHRcdGlnbm9yZU5leHRDbGljayA9IHRydWU7XG5cdFx0XHRcdF90aGlzLl9sb29wSWQgPSBzZXRJbnRlcnZhbChfdGhpcy5fZW11bGF0ZURyYWdPdmVyLCA1MCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBVbmRvIHdoYXQgd2FzIHNldCBpbiBfcHJlcGFyZURyYWdTdGFydCBiZWZvcmUgZHJhZyBzdGFydGVkXG5cdFx0XHRcdF9vZmYoZG9jdW1lbnQsICdtb3VzZXVwJywgX3RoaXMuX29uRHJvcCk7XG5cdFx0XHRcdF9vZmYoZG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9vbkRyb3ApO1xuXHRcdFx0XHRfb2ZmKGRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCBfdGhpcy5fb25Ecm9wKTtcblxuXHRcdFx0XHRpZiAoZGF0YVRyYW5zZmVyKSB7XG5cdFx0XHRcdFx0ZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG5cdFx0XHRcdFx0b3B0aW9ucy5zZXREYXRhICYmIG9wdGlvbnMuc2V0RGF0YS5jYWxsKF90aGlzLCBkYXRhVHJhbnNmZXIsIGRyYWdFbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfb24oZG9jdW1lbnQsICdkcm9wJywgX3RoaXMpO1xuXG5cdFx0XHRcdC8vICMxMjc2IGZpeDpcblx0XHRcdFx0X2NzcyhkcmFnRWwsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWigwKScpO1xuXHRcdFx0fVxuXG5cdFx0XHRhd2FpdGluZ0RyYWdTdGFydGVkID0gdHJ1ZTtcblxuXHRcdFx0X3RoaXMuX2RyYWdTdGFydElkID0gX25leHRUaWNrKF90aGlzLl9kcmFnU3RhcnRlZC5iaW5kKF90aGlzLCBmYWxsYmFjaywgZXZ0KSk7XG5cdFx0XHRfb24oZG9jdW1lbnQsICdzZWxlY3RzdGFydCcsIF90aGlzKTtcblx0XHRcdGlmIChTYWZhcmkpIHtcblx0XHRcdFx0X2Nzcyhkb2N1bWVudC5ib2R5LCAndXNlci1zZWxlY3QnLCAnbm9uZScpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblxuXHRcdC8vIFJldHVybnMgdHJ1ZSAtIGlmIG5vIGZ1cnRoZXIgYWN0aW9uIGlzIG5lZWRlZCAoZWl0aGVyIGluc2VydGVkIG9yIGFub3RoZXIgY29uZGl0aW9uKVxuXHRcdF9vbkRyYWdPdmVyOiBmdW5jdGlvbiAoLyoqRXZlbnQqL2V2dCkge1xuXHRcdFx0dmFyIGVsID0gdGhpcy5lbCxcblx0XHRcdFx0dGFyZ2V0ID0gZXZ0LnRhcmdldCxcblx0XHRcdFx0ZHJhZ1JlY3QsXG5cdFx0XHRcdHRhcmdldFJlY3QsXG5cdFx0XHRcdHJldmVydCxcblx0XHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcblx0XHRcdFx0Z3JvdXAgPSBvcHRpb25zLmdyb3VwLFxuXHRcdFx0XHRhY3RpdmVTb3J0YWJsZSA9IFNvcnRhYmxlLmFjdGl2ZSxcblx0XHRcdFx0aXNPd25lciA9IChhY3RpdmVHcm91cCA9PT0gZ3JvdXApLFxuXHRcdFx0XHRjYW5Tb3J0ID0gb3B0aW9ucy5zb3J0LFxuXHRcdFx0XHRfdGhpcyA9IHRoaXM7XG5cblx0XHRcdGlmIChfc2lsZW50KSByZXR1cm47XG5cblx0XHRcdC8vIFJldHVybiBpbnZvY2F0aW9uIHdoZW4gZHJhZ0VsIGlzIGluc2VydGVkIChvciBjb21wbGV0ZWQpXG5cdFx0XHRmdW5jdGlvbiBjb21wbGV0ZWQoaW5zZXJ0aW9uKSB7XG5cdFx0XHRcdGlmIChpbnNlcnRpb24pIHtcblx0XHRcdFx0XHRpZiAoaXNPd25lcikge1xuXHRcdFx0XHRcdFx0YWN0aXZlU29ydGFibGUuX2hpZGVDbG9uZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKF90aGlzKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoYWN0aXZlU29ydGFibGUpIHtcblx0XHRcdFx0XHRcdC8vIFNldCBnaG9zdCBjbGFzcyB0byBuZXcgc29ydGFibGUncyBnaG9zdCBjbGFzc1xuXHRcdFx0XHRcdFx0X3RvZ2dsZUNsYXNzKGRyYWdFbCwgcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MgOiBhY3RpdmVTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MsIGZhbHNlKTtcblx0XHRcdFx0XHRcdF90b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHB1dFNvcnRhYmxlICE9PSBfdGhpcyAmJiBfdGhpcyAhPT0gU29ydGFibGUuYWN0aXZlKSB7XG5cdFx0XHRcdFx0XHRwdXRTb3J0YWJsZSA9IF90aGlzO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX3RoaXMgPT09IFNvcnRhYmxlLmFjdGl2ZSkge1xuXHRcdFx0XHRcdFx0cHV0U29ydGFibGUgPSBudWxsO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEFuaW1hdGlvblxuXHRcdFx0XHRcdGRyYWdSZWN0ICYmIF90aGlzLl9hbmltYXRlKGRyYWdSZWN0LCBkcmFnRWwpO1xuXHRcdFx0XHRcdHRhcmdldCAmJiB0YXJnZXRSZWN0ICYmIF90aGlzLl9hbmltYXRlKHRhcmdldFJlY3QsIHRhcmdldCk7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdC8vIE51bGwgbGFzdFRhcmdldCBpZiBpdCBpcyBub3QgaW5zaWRlIGEgcHJldmlvdXNseSBzd2FwcGVkIGVsZW1lbnRcblx0XHRcdFx0aWYgKCh0YXJnZXQgPT09IGRyYWdFbCAmJiAhZHJhZ0VsLmFuaW1hdGVkKSB8fCAodGFyZ2V0ID09PSBlbCAmJiAhdGFyZ2V0LmFuaW1hdGVkKSkge1xuXHRcdFx0XHRcdGxhc3RUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gbm8gYnViYmxpbmcgYW5kIG5vdCBmYWxsYmFja1xuXHRcdFx0XHRpZiAoIW9wdGlvbnMuZHJhZ292ZXJCdWJibGUgJiYgIWV2dC5yb290RWwgJiYgdGFyZ2V0ICE9PSBkb2N1bWVudCkge1xuXHRcdFx0XHRcdF90aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKGV2dCk7XG5cdFx0XHRcdFx0ZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2NvbXB1dGVJc0FsaWduZWQoZXZ0KTtcblxuXHRcdFx0XHRcdC8vIERvIG5vdCBkZXRlY3QgZm9yIGVtcHR5IGluc2VydCBpZiBhbHJlYWR5IGluc2VydGVkXG5cdFx0XHRcdFx0IWluc2VydGlvbiAmJiBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudChldnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0IW9wdGlvbnMuZHJhZ292ZXJCdWJibGUgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbiAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbGwgd2hlbiBkcmFnRWwgaGFzIGJlZW4gaW5zZXJ0ZWRcblx0XHRcdGZ1bmN0aW9uIGNoYW5nZWQoKSB7XG5cdFx0XHRcdF9kaXNwYXRjaEV2ZW50KF90aGlzLCByb290RWwsICdjaGFuZ2UnLCB0YXJnZXQsIGVsLCByb290RWwsIG9sZEluZGV4LCBfaW5kZXgoZHJhZ0VsKSwgb2xkRHJhZ2dhYmxlSW5kZXgsIF9pbmRleChkcmFnRWwsIG9wdGlvbnMuZHJhZ2dhYmxlKSwgZXZ0KTtcblx0XHRcdH1cblxuXG5cdFx0XHRpZiAoZXZ0LnByZXZlbnREZWZhdWx0ICE9PSB2b2lkIDApIHtcblx0XHRcdFx0ZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cblxuXHRcdFx0bW92ZWQgPSB0cnVlO1xuXG5cdFx0XHR0YXJnZXQgPSBfY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgdHJ1ZSk7XG5cblx0XHRcdC8vIHRhcmdldCBpcyBkcmFnRWwgb3IgdGFyZ2V0IGlzIGFuaW1hdGVkXG5cdFx0XHRpZiAoZHJhZ0VsLmNvbnRhaW5zKGV2dC50YXJnZXQpIHx8IHRhcmdldC5hbmltYXRlZCkge1xuXHRcdFx0XHRyZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRhcmdldCAhPT0gZHJhZ0VsKSB7XG5cdFx0XHRcdGlnbm9yZU5leHRDbGljayA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYWN0aXZlU29ydGFibGUgJiYgIW9wdGlvbnMuZGlzYWJsZWQgJiZcblx0XHRcdFx0KGlzT3duZXJcblx0XHRcdFx0XHQ/IGNhblNvcnQgfHwgKHJldmVydCA9ICFyb290RWwuY29udGFpbnMoZHJhZ0VsKSkgLy8gUmV2ZXJ0aW5nIGl0ZW0gaW50byB0aGUgb3JpZ2luYWwgbGlzdFxuXHRcdFx0XHRcdDogKFxuXHRcdFx0XHRcdFx0cHV0U29ydGFibGUgPT09IHRoaXMgfHxcblx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0KHRoaXMubGFzdFB1dE1vZGUgPSBhY3RpdmVHcm91cC5jaGVja1B1bGwodGhpcywgYWN0aXZlU29ydGFibGUsIGRyYWdFbCwgZXZ0KSkgJiZcblx0XHRcdFx0XHRcdFx0Z3JvdXAuY2hlY2tQdXQodGhpcywgYWN0aXZlU29ydGFibGUsIGRyYWdFbCwgZXZ0KVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdHZhciBheGlzID0gdGhpcy5fZ2V0RGlyZWN0aW9uKGV2dCwgdGFyZ2V0KTtcblxuXHRcdFx0XHRkcmFnUmVjdCA9IF9nZXRSZWN0KGRyYWdFbCk7XG5cblx0XHRcdFx0aWYgKHJldmVydCkge1xuXHRcdFx0XHRcdHRoaXMuX2hpZGVDbG9uZSgpO1xuXHRcdFx0XHRcdHBhcmVudEVsID0gcm9vdEVsOyAvLyBhY3R1YWxpemF0aW9uXG5cblx0XHRcdFx0XHRpZiAobmV4dEVsKSB7XG5cdFx0XHRcdFx0XHRyb290RWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgbmV4dEVsKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cm9vdEVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBlbExhc3RDaGlsZCA9IF9sYXN0Q2hpbGQoZWwpO1xuXG5cdFx0XHRcdGlmICghZWxMYXN0Q2hpbGQgfHwgX2dob3N0SXNMYXN0KGV2dCwgYXhpcywgZWwpICYmICFlbExhc3RDaGlsZC5hbmltYXRlZCkge1xuXHRcdFx0XHRcdC8vIGFzc2lnbiB0YXJnZXQgb25seSBpZiBjb25kaXRpb24gaXMgdHJ1ZVxuXHRcdFx0XHRcdGlmIChlbExhc3RDaGlsZCAmJiBlbCA9PT0gZXZ0LnRhcmdldCkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0ID0gZWxMYXN0Q2hpbGQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0UmVjdCA9IF9nZXRSZWN0KHRhcmdldCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGlzT3duZXIpIHtcblx0XHRcdFx0XHRcdGFjdGl2ZVNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YWN0aXZlU29ydGFibGUuX3Nob3dDbG9uZSh0aGlzKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgISF0YXJnZXQpICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcblx0XHRcdFx0XHRcdHBhcmVudEVsID0gZWw7IC8vIGFjdHVhbGl6YXRpb25cblx0XHRcdFx0XHRcdHJlYWxEcmFnRWxSZWN0ID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0Y2hhbmdlZCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gZHJhZ0VsICYmIHRhcmdldC5wYXJlbnROb2RlID09PSBlbCkge1xuXHRcdFx0XHRcdHZhciBkaXJlY3Rpb24gPSAwLFxuXHRcdFx0XHRcdFx0dGFyZ2V0QmVmb3JlRmlyc3RTd2FwLFxuXHRcdFx0XHRcdFx0YWxpZ25lZCA9IHRhcmdldC5zb3J0YWJsZU1vdXNlQWxpZ25lZCxcblx0XHRcdFx0XHRcdGRpZmZlcmVudExldmVsID0gZHJhZ0VsLnBhcmVudE5vZGUgIT09IGVsLFxuXHRcdFx0XHRcdFx0c2lkZTEgPSBheGlzID09PSAndmVydGljYWwnID8gJ3RvcCcgOiAnbGVmdCcsXG5cdFx0XHRcdFx0XHRzY3JvbGxlZFBhc3RUb3AgPSBfaXNTY3JvbGxlZFBhc3QodGFyZ2V0LCAndG9wJykgfHwgX2lzU2Nyb2xsZWRQYXN0KGRyYWdFbCwgJ3RvcCcpLFxuXHRcdFx0XHRcdFx0c2Nyb2xsQmVmb3JlID0gc2Nyb2xsZWRQYXN0VG9wID8gc2Nyb2xsZWRQYXN0VG9wLnNjcm9sbFRvcCA6IHZvaWQgMDtcblxuXG5cdFx0XHRcdFx0aWYgKGxhc3RUYXJnZXQgIT09IHRhcmdldCkge1xuXHRcdFx0XHRcdFx0bGFzdE1vZGUgPSBudWxsO1xuXHRcdFx0XHRcdFx0dGFyZ2V0QmVmb3JlRmlyc3RTd2FwID0gX2dldFJlY3QodGFyZ2V0KVtzaWRlMV07XG5cdFx0XHRcdFx0XHRwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBSZWZlcmVuY2U6IGh0dHBzOi8vd3d3Lmx1Y2lkY2hhcnQuY29tL2RvY3VtZW50cy92aWV3LzEwZmEwZTkzLWUzNjItNDEyNi1hY2EyLWI3MDllZTU2YmQ4Yi8wXG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0X2lzRWxJblJvd0NvbHVtbihkcmFnRWwsIHRhcmdldCwgYXhpcykgJiYgYWxpZ25lZCB8fFxuXHRcdFx0XHRcdFx0ZGlmZmVyZW50TGV2ZWwgfHxcblx0XHRcdFx0XHRcdHNjcm9sbGVkUGFzdFRvcCB8fFxuXHRcdFx0XHRcdFx0b3B0aW9ucy5pbnZlcnRTd2FwIHx8XG5cdFx0XHRcdFx0XHRsYXN0TW9kZSA9PT0gJ2luc2VydCcgfHxcblx0XHRcdFx0XHRcdC8vIE5lZWRlZCwgaW4gdGhlIGNhc2UgdGhhdCB3ZSBhcmUgaW5zaWRlIHRhcmdldCBhbmQgaW5zZXJ0ZWQgYmVjYXVzZSBub3QgYWxpZ25lZC4uLiBhbGlnbmVkIHdpbGwgc3RheSBmYWxzZSB3aGlsZSBpbnNpZGVcblx0XHRcdFx0XHRcdC8vIGFuZCBsYXN0TW9kZSB3aWxsIGNoYW5nZSB0byAnaW5zZXJ0JywgYnV0IHdlIG11c3Qgc3dhcFxuXHRcdFx0XHRcdFx0bGFzdE1vZGUgPT09ICdzd2FwJ1xuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Ly8gTmV3IHRhcmdldCB0aGF0IHdlIHdpbGwgYmUgaW5zaWRlXG5cdFx0XHRcdFx0XHRpZiAobGFzdE1vZGUgIT09ICdzd2FwJykge1xuXHRcdFx0XHRcdFx0XHRpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gb3B0aW9ucy5pbnZlcnRTd2FwIHx8IGRpZmZlcmVudExldmVsO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb24gPSBfZ2V0U3dhcERpcmVjdGlvbihldnQsIHRhcmdldCwgYXhpcyxcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5zd2FwVGhyZXNob2xkLCBvcHRpb25zLmludmVydGVkU3dhcFRocmVzaG9sZCA9PSBudWxsID8gb3B0aW9ucy5zd2FwVGhyZXNob2xkIDogb3B0aW9ucy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQsXG5cdFx0XHRcdFx0XHRcdGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQsXG5cdFx0XHRcdFx0XHRcdGxhc3RUYXJnZXQgPT09IHRhcmdldCk7XG5cdFx0XHRcdFx0XHRsYXN0TW9kZSA9ICdzd2FwJztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gSW5zZXJ0IGF0IHBvc2l0aW9uXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb24gPSBfZ2V0SW5zZXJ0RGlyZWN0aW9uKHRhcmdldCk7XG5cdFx0XHRcdFx0XHRsYXN0TW9kZSA9ICdpbnNlcnQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSAwKSByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcblxuXHRcdFx0XHRcdHJlYWxEcmFnRWxSZWN0ID0gbnVsbDtcblx0XHRcdFx0XHRsYXN0VGFyZ2V0ID0gdGFyZ2V0O1xuXG5cdFx0XHRcdFx0bGFzdERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuXHRcdFx0XHRcdHRhcmdldFJlY3QgPSBfZ2V0UmVjdCh0YXJnZXQpO1xuXG5cdFx0XHRcdFx0dmFyIG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyxcblx0XHRcdFx0XHRcdGFmdGVyID0gZmFsc2U7XG5cblx0XHRcdFx0XHRhZnRlciA9IGRpcmVjdGlvbiA9PT0gMTtcblxuXHRcdFx0XHRcdHZhciBtb3ZlVmVjdG9yID0gX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgYWZ0ZXIpO1xuXG5cdFx0XHRcdFx0aWYgKG1vdmVWZWN0b3IgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRpZiAobW92ZVZlY3RvciA9PT0gMSB8fCBtb3ZlVmVjdG9yID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRhZnRlciA9IChtb3ZlVmVjdG9yID09PSAxKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0X3NpbGVudCA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KF91bnNpbGVudCwgMzApO1xuXG5cdFx0XHRcdFx0XHRpZiAoaXNPd25lcikge1xuXHRcdFx0XHRcdFx0XHRhY3RpdmVTb3J0YWJsZS5faGlkZUNsb25lKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKHRoaXMpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoYWZ0ZXIgJiYgIW5leHRTaWJsaW5nKSB7XG5cdFx0XHRcdFx0XHRcdGVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBhZnRlciA/IG5leHRTaWJsaW5nIDogdGFyZ2V0KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gVW5kbyBjaHJvbWUncyBzY3JvbGwgYWRqdXN0bWVudFxuXHRcdFx0XHRcdFx0aWYgKHNjcm9sbGVkUGFzdFRvcCkge1xuXHRcdFx0XHRcdFx0XHRfc2Nyb2xsQnkoc2Nyb2xsZWRQYXN0VG9wLCAwLCBzY3JvbGxCZWZvcmUgLSBzY3JvbGxlZFBhc3RUb3Auc2Nyb2xsVG9wKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cGFyZW50RWwgPSBkcmFnRWwucGFyZW50Tm9kZTsgLy8gYWN0dWFsaXphdGlvblxuXG5cdFx0XHRcdFx0XHQvLyBtdXN0IGJlIGRvbmUgYmVmb3JlIGFuaW1hdGlvblxuXHRcdFx0XHRcdFx0aWYgKHRhcmdldEJlZm9yZUZpcnN0U3dhcCAhPT0gdW5kZWZpbmVkICYmICFpc0NpcmN1bXN0YW50aWFsSW52ZXJ0KSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldE1vdmVEaXN0YW5jZSA9IGFicyh0YXJnZXRCZWZvcmVGaXJzdFN3YXAgLSBfZ2V0UmVjdCh0YXJnZXQpW3NpZGUxXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjaGFuZ2VkKCk7XG5cblx0XHRcdFx0XHRcdHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGVsLmNvbnRhaW5zKGRyYWdFbCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdF9hbmltYXRlOiBmdW5jdGlvbiAocHJldlJlY3QsIHRhcmdldCkge1xuXHRcdFx0dmFyIG1zID0gdGhpcy5vcHRpb25zLmFuaW1hdGlvbjtcblxuXHRcdFx0aWYgKG1zKSB7XG5cdFx0XHRcdHZhciBjdXJyZW50UmVjdCA9IF9nZXRSZWN0KHRhcmdldCk7XG5cblx0XHRcdFx0aWYgKHRhcmdldCA9PT0gZHJhZ0VsKSB7XG5cdFx0XHRcdFx0cmVhbERyYWdFbFJlY3QgPSBjdXJyZW50UmVjdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwcmV2UmVjdC5ub2RlVHlwZSA9PT0gMSkge1xuXHRcdFx0XHRcdHByZXZSZWN0ID0gX2dldFJlY3QocHJldlJlY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2hlY2sgaWYgYWN0dWFsbHkgbW92aW5nIHBvc2l0aW9uXG5cdFx0XHRcdGlmICgocHJldlJlY3QubGVmdCArIHByZXZSZWN0LndpZHRoIC8gMikgIT09IChjdXJyZW50UmVjdC5sZWZ0ICsgY3VycmVudFJlY3Qud2lkdGggLyAyKVxuXHRcdFx0XHRcdHx8IChwcmV2UmVjdC50b3AgKyBwcmV2UmVjdC5oZWlnaHQgLyAyKSAhPT0gKGN1cnJlbnRSZWN0LnRvcCArIGN1cnJlbnRSZWN0LmhlaWdodCAvIDIpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHZhciBtYXRyaXggPSBfbWF0cml4KHRoaXMuZWwpLFxuXHRcdFx0XHRcdFx0c2NhbGVYID0gbWF0cml4ICYmIG1hdHJpeC5hLFxuXHRcdFx0XHRcdFx0c2NhbGVZID0gbWF0cml4ICYmIG1hdHJpeC5kO1xuXG5cdFx0XHRcdFx0X2Nzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJ25vbmUnKTtcblx0XHRcdFx0XHRfY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnXG5cdFx0XHRcdFx0XHQrIChwcmV2UmVjdC5sZWZ0IC0gY3VycmVudFJlY3QubGVmdCkgLyAoc2NhbGVYID8gc2NhbGVYIDogMSkgKyAncHgsJ1xuXHRcdFx0XHRcdFx0KyAocHJldlJlY3QudG9wIC0gY3VycmVudFJlY3QudG9wKSAvIChzY2FsZVkgPyBzY2FsZVkgOiAxKSArICdweCwwKSdcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0dGhpcy5fcmVwYWludCh0YXJnZXQpO1xuXHRcdFx0XHRcdF9jc3ModGFyZ2V0LCAndHJhbnNpdGlvbicsICd0cmFuc2Zvcm0gJyArIG1zICsgJ21zJyArICh0aGlzLm9wdGlvbnMuZWFzaW5nID8gJyAnICsgdGhpcy5vcHRpb25zLmVhc2luZyA6ICcnKSk7XG5cdFx0XHRcdFx0X2Nzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoMCwwLDApJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQodHlwZW9mIHRhcmdldC5hbmltYXRlZCA9PT0gJ251bWJlcicpICYmIGNsZWFyVGltZW91dCh0YXJnZXQuYW5pbWF0ZWQpO1xuXHRcdFx0XHR0YXJnZXQuYW5pbWF0ZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRfY3NzKHRhcmdldCwgJ3RyYW5zaXRpb24nLCAnJyk7XG5cdFx0XHRcdFx0X2Nzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAnJyk7XG5cdFx0XHRcdFx0dGFyZ2V0LmFuaW1hdGVkID0gZmFsc2U7XG5cdFx0XHRcdH0sIG1zKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0X3JlcGFpbnQ6IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdFx0cmV0dXJuIHRhcmdldC5vZmZzZXRXaWR0aDtcblx0XHR9LFxuXG5cdFx0X29mZk1vdmVFdmVudHM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0X29mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcblx0XHRcdF9vZmYoZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcblx0XHRcdF9vZmYoZG9jdW1lbnQsICdkcmFnb3ZlcicsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcblx0XHRcdF9vZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG5cdFx0XHRfb2ZmKGRvY3VtZW50LCAndG91Y2htb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuXHRcdH0sXG5cblx0XHRfb2ZmVXBFdmVudHM6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBvd25lckRvY3VtZW50ID0gdGhpcy5lbC5vd25lckRvY3VtZW50O1xuXG5cdFx0XHRfb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fb25Ecm9wKTtcblx0XHRcdF9vZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fb25Ecm9wKTtcblx0XHRcdF9vZmYob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX29uRHJvcCk7XG5cdFx0XHRfb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIHRoaXMuX29uRHJvcCk7XG5cdFx0XHRfb2ZmKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCB0aGlzKTtcblx0XHR9LFxuXG5cdFx0X29uRHJvcDogZnVuY3Rpb24gKC8qKkV2ZW50Ki9ldnQpIHtcblx0XHRcdHZhciBlbCA9IHRoaXMuZWwsXG5cdFx0XHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cdFx0XHRhd2FpdGluZ0RyYWdTdGFydGVkID0gZmFsc2U7XG5cdFx0XHRzY3JvbGxpbmcgPSBmYWxzZTtcblx0XHRcdGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQgPSBmYWxzZTtcblx0XHRcdHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlO1xuXG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMuX2xvb3BJZCk7XG5cblx0XHRcdGNsZWFySW50ZXJ2YWwocG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwpO1xuXHRcdFx0X2NsZWFyQXV0b1Njcm9sbHMoKTtcblx0XHRcdF9jYW5jZWxUaHJvdHRsZSgpO1xuXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5fZHJhZ1N0YXJ0VGltZXIpO1xuXG5cdFx0XHRfY2FuY2VsTmV4dFRpY2sodGhpcy5fY2xvbmVJZCk7XG5cdFx0XHRfY2FuY2VsTmV4dFRpY2sodGhpcy5fZHJhZ1N0YXJ0SWQpO1xuXG5cdFx0XHQvLyBVbmJpbmQgZXZlbnRzXG5cdFx0XHRfb2ZmKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuXG5cblx0XHRcdGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuXHRcdFx0XHRfb2ZmKGRvY3VtZW50LCAnZHJvcCcsIHRoaXMpO1xuXHRcdFx0XHRfb2ZmKGVsLCAnZHJhZ3N0YXJ0JywgdGhpcy5fb25EcmFnU3RhcnQpO1xuXHRcdFx0XHRfb2ZmKGRvY3VtZW50LCAnZHJhZ292ZXInLCB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKTtcblx0XHRcdFx0X29mZihkb2N1bWVudCwgJ2RyYWdvdmVyJywgX2NoZWNrQWxpZ25tZW50KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFNhZmFyaSkge1xuXHRcdFx0XHRfY3NzKGRvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICcnKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fb2ZmTW92ZUV2ZW50cygpO1xuXHRcdFx0dGhpcy5fb2ZmVXBFdmVudHMoKTtcblxuXHRcdFx0aWYgKGV2dCkge1xuXHRcdFx0XHRpZiAobW92ZWQpIHtcblx0XHRcdFx0XHRldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHQhb3B0aW9ucy5kcm9wQnViYmxlICYmIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGdob3N0RWwgJiYgZ2hvc3RFbC5wYXJlbnROb2RlICYmIGdob3N0RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnaG9zdEVsKTtcblxuXHRcdFx0XHRpZiAocm9vdEVsID09PSBwYXJlbnRFbCB8fCAocHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpKSB7XG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIGNsb25lXG5cdFx0XHRcdFx0Y2xvbmVFbCAmJiBjbG9uZUVsLnBhcmVudE5vZGUgJiYgY2xvbmVFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lRWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGRyYWdFbCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuXHRcdFx0XHRcdFx0X29mZihkcmFnRWwsICdkcmFnZW5kJywgdGhpcyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0X2Rpc2FibGVEcmFnZ2FibGUoZHJhZ0VsKTtcblx0XHRcdFx0XHRkcmFnRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcblxuXHRcdFx0XHRcdC8vIFJlbW92ZSBjbGFzcydzXG5cdFx0XHRcdFx0X3RvZ2dsZUNsYXNzKGRyYWdFbCwgcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MgOiB0aGlzLm9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuXHRcdFx0XHRcdF90b2dnbGVDbGFzcyhkcmFnRWwsIHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywgZmFsc2UpO1xuXG5cdFx0XHRcdFx0Ly8gRHJhZyBzdG9wIGV2ZW50XG5cdFx0XHRcdFx0X2Rpc3BhdGNoRXZlbnQodGhpcywgcm9vdEVsLCAndW5jaG9vc2UnLCBkcmFnRWwsIHBhcmVudEVsLCByb290RWwsIG9sZEluZGV4LCBudWxsLCBvbGREcmFnZ2FibGVJbmRleCwgbnVsbCwgZXZ0KTtcblxuXHRcdFx0XHRcdGlmIChyb290RWwgIT09IHBhcmVudEVsKSB7XG5cdFx0XHRcdFx0XHRuZXdJbmRleCA9IF9pbmRleChkcmFnRWwpO1xuXHRcdFx0XHRcdFx0bmV3RHJhZ2dhYmxlSW5kZXggPSBfaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG5cblx0XHRcdFx0XHRcdGlmIChuZXdJbmRleCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEFkZCBldmVudFxuXHRcdFx0XHRcdFx0XHRfZGlzcGF0Y2hFdmVudChudWxsLCBwYXJlbnRFbCwgJ2FkZCcsIGRyYWdFbCwgcGFyZW50RWwsIHJvb3RFbCwgb2xkSW5kZXgsIG5ld0luZGV4LCBvbGREcmFnZ2FibGVJbmRleCwgbmV3RHJhZ2dhYmxlSW5kZXgsIGV2dCk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIGV2ZW50XG5cdFx0XHRcdFx0XHRcdF9kaXNwYXRjaEV2ZW50KHRoaXMsIHJvb3RFbCwgJ3JlbW92ZScsIGRyYWdFbCwgcGFyZW50RWwsIHJvb3RFbCwgb2xkSW5kZXgsIG5ld0luZGV4LCBvbGREcmFnZ2FibGVJbmRleCwgbmV3RHJhZ2dhYmxlSW5kZXgsIGV2dCk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gZHJhZyBmcm9tIG9uZSBsaXN0IGFuZCBkcm9wIGludG8gYW5vdGhlclxuXHRcdFx0XHRcdFx0XHRfZGlzcGF0Y2hFdmVudChudWxsLCBwYXJlbnRFbCwgJ3NvcnQnLCBkcmFnRWwsIHBhcmVudEVsLCByb290RWwsIG9sZEluZGV4LCBuZXdJbmRleCwgb2xkRHJhZ2dhYmxlSW5kZXgsIG5ld0RyYWdnYWJsZUluZGV4LCBldnQpO1xuXHRcdFx0XHRcdFx0XHRfZGlzcGF0Y2hFdmVudCh0aGlzLCByb290RWwsICdzb3J0JywgZHJhZ0VsLCBwYXJlbnRFbCwgcm9vdEVsLCBvbGRJbmRleCwgbmV3SW5kZXgsIG9sZERyYWdnYWJsZUluZGV4LCBuZXdEcmFnZ2FibGVJbmRleCwgZXZ0KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUuc2F2ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChkcmFnRWwubmV4dFNpYmxpbmcgIT09IG5leHRFbCkge1xuXHRcdFx0XHRcdFx0XHQvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnRcblx0XHRcdFx0XHRcdFx0bmV3SW5kZXggPSBfaW5kZXgoZHJhZ0VsKTtcblx0XHRcdFx0XHRcdFx0bmV3RHJhZ2dhYmxlSW5kZXggPSBfaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKG5ld0luZGV4ID49IDApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBkcmFnICYgZHJvcCB3aXRoaW4gdGhlIHNhbWUgbGlzdFxuXHRcdFx0XHRcdFx0XHRcdF9kaXNwYXRjaEV2ZW50KHRoaXMsIHJvb3RFbCwgJ3VwZGF0ZScsIGRyYWdFbCwgcGFyZW50RWwsIHJvb3RFbCwgb2xkSW5kZXgsIG5ld0luZGV4LCBvbGREcmFnZ2FibGVJbmRleCwgbmV3RHJhZ2dhYmxlSW5kZXgsIGV2dCk7XG5cdFx0XHRcdFx0XHRcdFx0X2Rpc3BhdGNoRXZlbnQodGhpcywgcm9vdEVsLCAnc29ydCcsIGRyYWdFbCwgcGFyZW50RWwsIHJvb3RFbCwgb2xkSW5kZXgsIG5ld0luZGV4LCBvbGREcmFnZ2FibGVJbmRleCwgbmV3RHJhZ2dhYmxlSW5kZXgsIGV2dCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoU29ydGFibGUuYWN0aXZlKSB7XG5cdFx0XHRcdFx0XHQvKiBqc2hpbnQgZXFudWxsOnRydWUgKi9cblx0XHRcdFx0XHRcdGlmIChuZXdJbmRleCA9PSBudWxsIHx8IG5ld0luZGV4ID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRuZXdJbmRleCA9IG9sZEluZGV4O1xuXHRcdFx0XHRcdFx0XHRuZXdEcmFnZ2FibGVJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0X2Rpc3BhdGNoRXZlbnQodGhpcywgcm9vdEVsLCAnZW5kJywgZHJhZ0VsLCBwYXJlbnRFbCwgcm9vdEVsLCBvbGRJbmRleCwgbmV3SW5kZXgsIG9sZERyYWdnYWJsZUluZGV4LCBuZXdEcmFnZ2FibGVJbmRleCwgZXZ0KTtcblxuXHRcdFx0XHRcdFx0Ly8gU2F2ZSBzb3J0aW5nXG5cdFx0XHRcdFx0XHR0aGlzLnNhdmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdFx0dGhpcy5fbnVsbGluZygpO1xuXHRcdH0sXG5cblx0XHRfbnVsbGluZzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyb290RWwgPVxuXHRcdFx0ZHJhZ0VsID1cblx0XHRcdHBhcmVudEVsID1cblx0XHRcdGdob3N0RWwgPVxuXHRcdFx0bmV4dEVsID1cblx0XHRcdGNsb25lRWwgPVxuXHRcdFx0bGFzdERvd25FbCA9XG5cblx0XHRcdHNjcm9sbEVsID1cblx0XHRcdHNjcm9sbFBhcmVudEVsID1cblx0XHRcdGF1dG9TY3JvbGxzLmxlbmd0aCA9XG5cblx0XHRcdHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsID1cblx0XHRcdGxhc3RQb2ludGVyRWxlbVggPVxuXHRcdFx0bGFzdFBvaW50ZXJFbGVtWSA9XG5cblx0XHRcdHRhcEV2dCA9XG5cdFx0XHR0b3VjaEV2dCA9XG5cblx0XHRcdG1vdmVkID1cblx0XHRcdG5ld0luZGV4ID1cblx0XHRcdG9sZEluZGV4ID1cblxuXHRcdFx0bGFzdFRhcmdldCA9XG5cdFx0XHRsYXN0RGlyZWN0aW9uID1cblxuXHRcdFx0cmVhbERyYWdFbFJlY3QgPVxuXG5cdFx0XHRwdXRTb3J0YWJsZSA9XG5cdFx0XHRhY3RpdmVHcm91cCA9XG5cdFx0XHRTb3J0YWJsZS5hY3RpdmUgPSBudWxsO1xuXG5cdFx0XHRzYXZlZElucHV0Q2hlY2tlZC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0XHRlbC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzYXZlZElucHV0Q2hlY2tlZC5sZW5ndGggPSAwO1xuXHRcdH0sXG5cblx0XHRoYW5kbGVFdmVudDogZnVuY3Rpb24gKC8qKkV2ZW50Ki9ldnQpIHtcblx0XHRcdHN3aXRjaCAoZXZ0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSAnZHJvcCc6XG5cdFx0XHRcdGNhc2UgJ2RyYWdlbmQnOlxuXHRcdFx0XHRcdHRoaXMuX29uRHJvcChldnQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2RyYWdlbnRlcic6XG5cdFx0XHRcdGNhc2UgJ2RyYWdvdmVyJzpcblx0XHRcdFx0XHRpZiAoZHJhZ0VsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9vbkRyYWdPdmVyKGV2dCk7XG5cdFx0XHRcdFx0XHRfZ2xvYmFsRHJhZ092ZXIoZXZ0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnc2VsZWN0c3RhcnQnOlxuXHRcdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblxuXHRcdC8qKlxuXHRcdCAqIFNlcmlhbGl6ZXMgdGhlIGl0ZW0gaW50byBhbiBhcnJheSBvZiBzdHJpbmcuXG5cdFx0ICogQHJldHVybnMge1N0cmluZ1tdfVxuXHRcdCAqL1xuXHRcdHRvQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBvcmRlciA9IFtdLFxuXHRcdFx0XHRlbCxcblx0XHRcdFx0Y2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuLFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0biA9IGNoaWxkcmVuLmxlbmd0aCxcblx0XHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHRcdFx0Zm9yICg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0ZWwgPSBjaGlsZHJlbltpXTtcblx0XHRcdFx0aWYgKF9jbG9zZXN0KGVsLCBvcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5lbCwgZmFsc2UpKSB7XG5cdFx0XHRcdFx0b3JkZXIucHVzaChlbC5nZXRBdHRyaWJ1dGUob3B0aW9ucy5kYXRhSWRBdHRyKSB8fCBfZ2VuZXJhdGVJZChlbCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvcmRlcjtcblx0XHR9LFxuXG5cblx0XHQvKipcblx0XHQgKiBTb3J0cyB0aGUgZWxlbWVudHMgYWNjb3JkaW5nIHRvIHRoZSBhcnJheS5cblx0XHQgKiBAcGFyYW0gIHtTdHJpbmdbXX0gIG9yZGVyICBvcmRlciBvZiB0aGUgaXRlbXNcblx0XHQgKi9cblx0XHRzb3J0OiBmdW5jdGlvbiAob3JkZXIpIHtcblx0XHRcdHZhciBpdGVtcyA9IHt9LCByb290RWwgPSB0aGlzLmVsO1xuXG5cdFx0XHR0aGlzLnRvQXJyYXkoKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCwgaSkge1xuXHRcdFx0XHR2YXIgZWwgPSByb290RWwuY2hpbGRyZW5baV07XG5cblx0XHRcdFx0aWYgKF9jbG9zZXN0KGVsLCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCByb290RWwsIGZhbHNlKSkge1xuXHRcdFx0XHRcdGl0ZW1zW2lkXSA9IGVsO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKTtcblxuXHRcdFx0b3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdFx0aWYgKGl0ZW1zW2lkXSkge1xuXHRcdFx0XHRcdHJvb3RFbC5yZW1vdmVDaGlsZChpdGVtc1tpZF0pO1xuXHRcdFx0XHRcdHJvb3RFbC5hcHBlbmRDaGlsZChpdGVtc1tpZF0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cblx0XHQvKipcblx0XHQgKiBTYXZlIHRoZSBjdXJyZW50IHNvcnRpbmdcblx0XHQgKi9cblx0XHRzYXZlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgc3RvcmUgPSB0aGlzLm9wdGlvbnMuc3RvcmU7XG5cdFx0XHRzdG9yZSAmJiBzdG9yZS5zZXQgJiYgc3RvcmUuc2V0KHRoaXMpO1xuXHRcdH0sXG5cblxuXHRcdC8qKlxuXHRcdCAqIEZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIHNldCwgZ2V0IHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IgYnkgdGVzdGluZyB0aGUgZWxlbWVudCBpdHNlbGYgYW5kIHRyYXZlcnNpbmcgdXAgdGhyb3VnaCBpdHMgYW5jZXN0b3JzIGluIHRoZSBET00gdHJlZS5cblx0XHQgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICBlbFxuXHRcdCAqIEBwYXJhbSAgIHtTdHJpbmd9ICAgICAgIFtzZWxlY3Rvcl0gIGRlZmF1bHQ6IGBvcHRpb25zLmRyYWdnYWJsZWBcblx0XHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8bnVsbH1cblx0XHQgKi9cblx0XHRjbG9zZXN0OiBmdW5jdGlvbiAoZWwsIHNlbGVjdG9yKSB7XG5cdFx0XHRyZXR1cm4gX2Nsb3Nlc3QoZWwsIHNlbGVjdG9yIHx8IHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsIHRoaXMuZWwsIGZhbHNlKTtcblx0XHR9LFxuXG5cblx0XHQvKipcblx0XHQgKiBTZXQvZ2V0IG9wdGlvblxuXHRcdCAqIEBwYXJhbSAgIHtzdHJpbmd9IG5hbWVcblx0XHQgKiBAcGFyYW0gICB7Kn0gICAgICBbdmFsdWVdXG5cdFx0ICogQHJldHVybnMgeyp9XG5cdFx0ICovXG5cdFx0b3B0aW9uOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0XHRpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuXHRcdFx0XHRyZXR1cm4gb3B0aW9uc1tuYW1lXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcblxuXHRcdFx0XHRpZiAobmFtZSA9PT0gJ2dyb3VwJykge1xuXHRcdFx0XHRcdF9wcmVwYXJlR3JvdXAob3B0aW9ucyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cblx0XHQvKipcblx0XHQgKiBEZXN0cm95XG5cdFx0ICovXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGVsID0gdGhpcy5lbDtcblxuXHRcdFx0ZWxbZXhwYW5kb10gPSBudWxsO1xuXG5cdFx0XHRfb2ZmKGVsLCAnbW91c2Vkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG5cdFx0XHRfb2ZmKGVsLCAndG91Y2hzdGFydCcsIHRoaXMuX29uVGFwU3RhcnQpO1xuXHRcdFx0X29mZihlbCwgJ3BvaW50ZXJkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG5cblx0XHRcdGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuXHRcdFx0XHRfb2ZmKGVsLCAnZHJhZ292ZXInLCB0aGlzKTtcblx0XHRcdFx0X29mZihlbCwgJ2RyYWdlbnRlcicsIHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIGRyYWdnYWJsZSBhdHRyaWJ1dGVzXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkcmFnZ2FibGVdJyksIGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0XHRlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuX29uRHJvcCgpO1xuXG5cdFx0XHRzb3J0YWJsZXMuc3BsaWNlKHNvcnRhYmxlcy5pbmRleE9mKHRoaXMuZWwpLCAxKTtcblxuXHRcdFx0dGhpcy5lbCA9IGVsID0gbnVsbDtcblx0XHR9LFxuXG5cdFx0X2hpZGVDbG9uZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIWNsb25lRWwuY2xvbmVIaWRkZW4pIHtcblx0XHRcdFx0X2NzcyhjbG9uZUVsLCAnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHRcdGNsb25lRWwuY2xvbmVIaWRkZW4gPSB0cnVlO1xuXHRcdFx0XHRpZiAoY2xvbmVFbC5wYXJlbnROb2RlICYmIHRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSkge1xuXHRcdFx0XHRcdGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRfc2hvd0Nsb25lOiBmdW5jdGlvbihwdXRTb3J0YWJsZSkge1xuXHRcdFx0aWYgKHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlICE9PSAnY2xvbmUnKSB7XG5cdFx0XHRcdHRoaXMuX2hpZGVDbG9uZSgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjbG9uZUVsLmNsb25lSGlkZGVuKSB7XG5cdFx0XHRcdC8vIHNob3cgY2xvbmUgYXQgZHJhZ0VsIG9yIG9yaWdpbmFsIHBvc2l0aW9uXG5cdFx0XHRcdGlmIChyb290RWwuY29udGFpbnMoZHJhZ0VsKSAmJiAhdGhpcy5vcHRpb25zLmdyb3VwLnJldmVydENsb25lKSB7XG5cdFx0XHRcdFx0cm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBkcmFnRWwpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5leHRFbCkge1xuXHRcdFx0XHRcdHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgbmV4dEVsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyb290RWwuYXBwZW5kQ2hpbGQoY2xvbmVFbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmdyb3VwLnJldmVydENsb25lKSB7XG5cdFx0XHRcdFx0dGhpcy5fYW5pbWF0ZShkcmFnRWwsIGNsb25lRWwpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9jc3MoY2xvbmVFbCwgJ2Rpc3BsYXknLCAnJyk7XG5cdFx0XHRcdGNsb25lRWwuY2xvbmVIaWRkZW4gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0ZnVuY3Rpb24gX2Nsb3Nlc3QoLyoqSFRNTEVsZW1lbnQqL2VsLCAvKipTdHJpbmcqL3NlbGVjdG9yLCAvKipIVE1MRWxlbWVudCovY3R4LCBpbmNsdWRlQ1RYKSB7XG5cdFx0aWYgKGVsKSB7XG5cdFx0XHRjdHggPSBjdHggfHwgZG9jdW1lbnQ7XG5cblx0XHRcdGRvIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHNlbGVjdG9yICE9IG51bGwgJiZcblx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRzZWxlY3RvclswXSA9PT0gJz4nID9cblx0XHRcdFx0XHRcdGVsLnBhcmVudE5vZGUgPT09IGN0eCAmJiBfbWF0Y2hlcyhlbCwgc2VsZWN0b3IpIDpcblx0XHRcdFx0XHRcdF9tYXRjaGVzKGVsLCBzZWxlY3Rvcilcblx0XHRcdFx0XHQpIHx8XG5cdFx0XHRcdFx0aW5jbHVkZUNUWCAmJiBlbCA9PT0gY3R4XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiBlbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChlbCA9PT0gY3R4KSBicmVhaztcblx0XHRcdFx0LyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuXHRcdFx0fSB3aGlsZSAoZWwgPSBfZ2V0UGFyZW50T3JIb3N0KGVsKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXG5cdGZ1bmN0aW9uIF9nZXRQYXJlbnRPckhvc3QoZWwpIHtcblx0XHRyZXR1cm4gKGVsLmhvc3QgJiYgZWwgIT09IGRvY3VtZW50ICYmIGVsLmhvc3Qubm9kZVR5cGUpXG5cdFx0XHQ/IGVsLmhvc3Rcblx0XHRcdDogZWwucGFyZW50Tm9kZTtcblx0fVxuXG5cblx0ZnVuY3Rpb24gX2dsb2JhbERyYWdPdmVyKC8qKkV2ZW50Ki9ldnQpIHtcblx0XHRpZiAoZXZ0LmRhdGFUcmFuc2Zlcikge1xuXHRcdFx0ZXZ0LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuXHRcdH1cblx0XHRldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cblx0ZnVuY3Rpb24gX29uKGVsLCBldmVudCwgZm4pIHtcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgSUUxMU9yTGVzcyA/IGZhbHNlIDogY2FwdHVyZU1vZGUpO1xuXHR9XG5cblxuXHRmdW5jdGlvbiBfb2ZmKGVsLCBldmVudCwgZm4pIHtcblx0XHRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgSUUxMU9yTGVzcyA/IGZhbHNlIDogY2FwdHVyZU1vZGUpO1xuXHR9XG5cblxuXHRmdW5jdGlvbiBfdG9nZ2xlQ2xhc3MoZWwsIG5hbWUsIHN0YXRlKSB7XG5cdFx0aWYgKGVsICYmIG5hbWUpIHtcblx0XHRcdGlmIChlbC5jbGFzc0xpc3QpIHtcblx0XHRcdFx0ZWwuY2xhc3NMaXN0W3N0YXRlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dmFyIGNsYXNzTmFtZSA9ICgnICcgKyBlbC5jbGFzc05hbWUgKyAnICcpLnJlcGxhY2UoUl9TUEFDRSwgJyAnKS5yZXBsYWNlKCcgJyArIG5hbWUgKyAnICcsICcgJyk7XG5cdFx0XHRcdGVsLmNsYXNzTmFtZSA9IChjbGFzc05hbWUgKyAoc3RhdGUgPyAnICcgKyBuYW1lIDogJycpKS5yZXBsYWNlKFJfU1BBQ0UsICcgJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRmdW5jdGlvbiBfY3NzKGVsLCBwcm9wLCB2YWwpIHtcblx0XHR2YXIgc3R5bGUgPSBlbCAmJiBlbC5zdHlsZTtcblxuXHRcdGlmIChzdHlsZSkge1xuXHRcdFx0aWYgKHZhbCA9PT0gdm9pZCAwKSB7XG5cdFx0XHRcdGlmIChkb2N1bWVudC5kZWZhdWx0VmlldyAmJiBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRcdFx0dmFsID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKGVsLmN1cnJlbnRTdHlsZSkge1xuXHRcdFx0XHRcdHZhbCA9IGVsLmN1cnJlbnRTdHlsZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBwcm9wID09PSB2b2lkIDAgPyB2YWwgOiB2YWxbcHJvcF07XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKCEocHJvcCBpbiBzdHlsZSkgJiYgcHJvcC5pbmRleE9mKCd3ZWJraXQnKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwcm9wID0gJy13ZWJraXQtJyArIHByb3A7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdHlsZVtwcm9wXSA9IHZhbCArICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/ICcnIDogJ3B4Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gX21hdHJpeChlbCkge1xuXHRcdHZhciBhcHBsaWVkVHJhbnNmb3JtcyA9ICcnO1xuXHRcdGRvIHtcblx0XHRcdHZhciB0cmFuc2Zvcm0gPSBfY3NzKGVsLCAndHJhbnNmb3JtJyk7XG5cblx0XHRcdGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScpIHtcblx0XHRcdFx0YXBwbGllZFRyYW5zZm9ybXMgPSB0cmFuc2Zvcm0gKyAnICcgKyBhcHBsaWVkVHJhbnNmb3Jtcztcblx0XHRcdH1cblx0XHRcdC8qIGpzaGludCBib3NzOnRydWUgKi9cblx0XHR9IHdoaWxlIChlbCA9IGVsLnBhcmVudE5vZGUpO1xuXG5cdFx0aWYgKHdpbmRvdy5ET01NYXRyaXgpIHtcblx0XHRcdHJldHVybiBuZXcgRE9NTWF0cml4KGFwcGxpZWRUcmFuc2Zvcm1zKTtcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIHtcblx0XHRcdHJldHVybiBuZXcgV2ViS2l0Q1NTTWF0cml4KGFwcGxpZWRUcmFuc2Zvcm1zKTtcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5DU1NNYXRyaXgpIHtcblx0XHRcdHJldHVybiBuZXcgQ1NTTWF0cml4KGFwcGxpZWRUcmFuc2Zvcm1zKTtcblx0XHR9XG5cdH1cblxuXG5cdGZ1bmN0aW9uIF9maW5kKGN0eCwgdGFnTmFtZSwgaXRlcmF0b3IpIHtcblx0XHRpZiAoY3R4KSB7XG5cdFx0XHR2YXIgbGlzdCA9IGN0eC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSwgaSA9IDAsIG4gPSBsaXN0Lmxlbmd0aDtcblxuXHRcdFx0aWYgKGl0ZXJhdG9yKSB7XG5cdFx0XHRcdGZvciAoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdFx0aXRlcmF0b3IobGlzdFtpXSwgaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblxuXG5cdGZ1bmN0aW9uIF9kaXNwYXRjaEV2ZW50KFxuXHRcdHNvcnRhYmxlLCByb290RWwsIG5hbWUsXG5cdFx0dGFyZ2V0RWwsIHRvRWwsIGZyb21FbCxcblx0XHRzdGFydEluZGV4LCBuZXdJbmRleCxcblx0XHRzdGFydERyYWdnYWJsZUluZGV4LCBuZXdEcmFnZ2FibGVJbmRleCxcblx0XHRvcmlnaW5hbEV2dFxuXHQpIHtcblx0XHRzb3J0YWJsZSA9IChzb3J0YWJsZSB8fCByb290RWxbZXhwYW5kb10pO1xuXHRcdHZhciBldnQsXG5cdFx0XHRvcHRpb25zID0gc29ydGFibGUub3B0aW9ucyxcblx0XHRcdG9uTmFtZSA9ICdvbicgKyBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSk7XG5cdFx0Ly8gU3VwcG9ydCBmb3IgbmV3IEN1c3RvbUV2ZW50IGZlYXR1cmVcblx0XHRpZiAod2luZG93LkN1c3RvbUV2ZW50ICYmICFJRTExT3JMZXNzICYmICFFZGdlKSB7XG5cdFx0XHRldnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG5cdFx0XHRldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuXHRcdH1cblxuXHRcdGV2dC50byA9IHRvRWwgfHwgcm9vdEVsO1xuXHRcdGV2dC5mcm9tID0gZnJvbUVsIHx8IHJvb3RFbDtcblx0XHRldnQuaXRlbSA9IHRhcmdldEVsIHx8IHJvb3RFbDtcblx0XHRldnQuY2xvbmUgPSBjbG9uZUVsO1xuXG5cdFx0ZXZ0Lm9sZEluZGV4ID0gc3RhcnRJbmRleDtcblx0XHRldnQubmV3SW5kZXggPSBuZXdJbmRleDtcblxuXHRcdGV2dC5vbGREcmFnZ2FibGVJbmRleCA9IHN0YXJ0RHJhZ2dhYmxlSW5kZXg7XG5cdFx0ZXZ0Lm5ld0RyYWdnYWJsZUluZGV4ID0gbmV3RHJhZ2dhYmxlSW5kZXg7XG5cblx0XHRldnQub3JpZ2luYWxFdmVudCA9IG9yaWdpbmFsRXZ0O1xuXHRcdGV2dC5wdWxsTW9kZSA9IHB1dFNvcnRhYmxlID8gcHV0U29ydGFibGUubGFzdFB1dE1vZGUgOiB1bmRlZmluZWQ7XG5cblx0XHRpZiAocm9vdEVsKSB7XG5cdFx0XHRyb290RWwuZGlzcGF0Y2hFdmVudChldnQpO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25zW29uTmFtZV0pIHtcblx0XHRcdG9wdGlvbnNbb25OYW1lXS5jYWxsKHNvcnRhYmxlLCBldnQpO1xuXHRcdH1cblx0fVxuXG5cblx0ZnVuY3Rpb24gX29uTW92ZShmcm9tRWwsIHRvRWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldEVsLCB0YXJnZXRSZWN0LCBvcmlnaW5hbEV2dCwgd2lsbEluc2VydEFmdGVyKSB7XG5cdFx0dmFyIGV2dCxcblx0XHRcdHNvcnRhYmxlID0gZnJvbUVsW2V4cGFuZG9dLFxuXHRcdFx0b25Nb3ZlRm4gPSBzb3J0YWJsZS5vcHRpb25zLm9uTW92ZSxcblx0XHRcdHJldFZhbDtcblx0XHQvLyBTdXBwb3J0IGZvciBuZXcgQ3VzdG9tRXZlbnQgZmVhdHVyZVxuXHRcdGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgIUlFMTFPckxlc3MgJiYgIUVkZ2UpIHtcblx0XHRcdGV2dCA9IG5ldyBDdXN0b21FdmVudCgnbW92ZScsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXHRcdFx0ZXZ0LmluaXRFdmVudCgnbW92ZScsIHRydWUsIHRydWUpO1xuXHRcdH1cblxuXHRcdGV2dC50byA9IHRvRWw7XG5cdFx0ZXZ0LmZyb20gPSBmcm9tRWw7XG5cdFx0ZXZ0LmRyYWdnZWQgPSBkcmFnRWw7XG5cdFx0ZXZ0LmRyYWdnZWRSZWN0ID0gZHJhZ1JlY3Q7XG5cdFx0ZXZ0LnJlbGF0ZWQgPSB0YXJnZXRFbCB8fCB0b0VsO1xuXHRcdGV2dC5yZWxhdGVkUmVjdCA9IHRhcmdldFJlY3QgfHwgX2dldFJlY3QodG9FbCk7XG5cdFx0ZXZ0LndpbGxJbnNlcnRBZnRlciA9IHdpbGxJbnNlcnRBZnRlcjtcblxuXHRcdGV2dC5vcmlnaW5hbEV2ZW50ID0gb3JpZ2luYWxFdnQ7XG5cblx0XHRmcm9tRWwuZGlzcGF0Y2hFdmVudChldnQpO1xuXG5cdFx0aWYgKG9uTW92ZUZuKSB7XG5cdFx0XHRyZXRWYWwgPSBvbk1vdmVGbi5jYWxsKHNvcnRhYmxlLCBldnQsIG9yaWdpbmFsRXZ0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0VmFsO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2Rpc2FibGVEcmFnZ2FibGUoZWwpIHtcblx0XHRlbC5kcmFnZ2FibGUgPSBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIF91bnNpbGVudCgpIHtcblx0XHRfc2lsZW50ID0gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBudGggY2hpbGQgb2YgZWwsIGlnbm9yaW5nIGhpZGRlbiBjaGlsZHJlbiwgc29ydGFibGUncyBlbGVtZW50cyAoZG9lcyBub3QgaWdub3JlIGNsb25lIGlmIGl0J3MgdmlzaWJsZSlcblx0ICogYW5kIG5vbi1kcmFnZ2FibGUgZWxlbWVudHNcblx0ICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgIFRoZSBwYXJlbnQgZWxlbWVudFxuXHQgKiBAcGFyYW0gIHtOdW1iZXJ9IGNoaWxkTnVtICAgICAgVGhlIGluZGV4IG9mIHRoZSBjaGlsZFxuXHQgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgICAgICAgUGFyZW50IFNvcnRhYmxlJ3Mgb3B0aW9uc1xuXHQgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGNoaWxkIGF0IGluZGV4IGNoaWxkTnVtLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuXHQgKi9cblx0ZnVuY3Rpb24gX2dldENoaWxkKGVsLCBjaGlsZE51bSwgb3B0aW9ucykge1xuXHRcdHZhciBjdXJyZW50Q2hpbGQgPSAwLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuXG5cdFx0d2hpbGUgKGkgPCBjaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmXG5cdFx0XHRcdGNoaWxkcmVuW2ldICE9PSBnaG9zdEVsICYmXG5cdFx0XHRcdGNoaWxkcmVuW2ldICE9PSBkcmFnRWwgJiZcblx0XHRcdFx0X2Nsb3Nlc3QoY2hpbGRyZW5baV0sIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgZmFsc2UpXG5cdFx0XHQpIHtcblx0XHRcdFx0aWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGROdW0pIHtcblx0XHRcdFx0XHRyZXR1cm4gY2hpbGRyZW5baV07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudENoaWxkKys7XG5cdFx0XHR9XG5cblx0XHRcdGkrKztcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyB0aGUgbGFzdCBjaGlsZCBpbiB0aGUgZWwsIGlnbm9yaW5nIGdob3N0RWwgb3IgaW52aXNpYmxlIGVsZW1lbnRzIChjbG9uZXMpXG5cdCAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICAgICBQYXJlbnQgZWxlbWVudFxuXHQgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGxhc3QgY2hpbGQsIGlnbm9yaW5nIGdob3N0RWxcblx0ICovXG5cdGZ1bmN0aW9uIF9sYXN0Q2hpbGQoZWwpIHtcblx0XHR2YXIgbGFzdCA9IGVsLmxhc3RFbGVtZW50Q2hpbGQ7XG5cblx0XHR3aGlsZSAobGFzdCAmJiAobGFzdCA9PT0gZ2hvc3RFbCB8fCBfY3NzKGxhc3QsICdkaXNwbGF5JykgPT09ICdub25lJykpIHtcblx0XHRcdGxhc3QgPSBsYXN0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxhc3QgfHwgbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIF9naG9zdElzTGFzdChldnQsIGF4aXMsIGVsKSB7XG5cdFx0dmFyIGVsUmVjdCA9IF9nZXRSZWN0KF9sYXN0Q2hpbGQoZWwpKSxcblx0XHRcdG1vdXNlT25BeGlzID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IGV2dC5jbGllbnRZIDogZXZ0LmNsaWVudFgsXG5cdFx0XHRtb3VzZU9uT3BwQXhpcyA9IGF4aXMgPT09ICd2ZXJ0aWNhbCcgPyBldnQuY2xpZW50WCA6IGV2dC5jbGllbnRZLFxuXHRcdFx0dGFyZ2V0UzIgPSBheGlzID09PSAndmVydGljYWwnID8gZWxSZWN0LmJvdHRvbSA6IGVsUmVjdC5yaWdodCxcblx0XHRcdHRhcmdldFMxT3BwID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IGVsUmVjdC5sZWZ0IDogZWxSZWN0LnRvcCxcblx0XHRcdHRhcmdldFMyT3BwID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IGVsUmVjdC5yaWdodCA6IGVsUmVjdC5ib3R0b20sXG5cdFx0XHRzcGFjZXIgPSAxMDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHRheGlzID09PSAndmVydGljYWwnID9cblx0XHRcdFx0KG1vdXNlT25PcHBBeGlzID4gdGFyZ2V0UzJPcHAgKyBzcGFjZXIgfHwgbW91c2VPbk9wcEF4aXMgPD0gdGFyZ2V0UzJPcHAgJiYgbW91c2VPbkF4aXMgPiB0YXJnZXRTMiAmJiBtb3VzZU9uT3BwQXhpcyA+PSB0YXJnZXRTMU9wcCkgOlxuXHRcdFx0XHQobW91c2VPbkF4aXMgPiB0YXJnZXRTMiAmJiBtb3VzZU9uT3BwQXhpcyA+IHRhcmdldFMxT3BwIHx8IG1vdXNlT25BeGlzIDw9IHRhcmdldFMyICYmIG1vdXNlT25PcHBBeGlzID4gdGFyZ2V0UzJPcHAgKyBzcGFjZXIpXG5cdFx0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9nZXRTd2FwRGlyZWN0aW9uKGV2dCwgdGFyZ2V0LCBheGlzLCBzd2FwVGhyZXNob2xkLCBpbnZlcnRlZFN3YXBUaHJlc2hvbGQsIGludmVydFN3YXAsIGlzTGFzdFRhcmdldCkge1xuXHRcdHZhciB0YXJnZXRSZWN0ID0gX2dldFJlY3QodGFyZ2V0KSxcblx0XHRcdG1vdXNlT25BeGlzID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IGV2dC5jbGllbnRZIDogZXZ0LmNsaWVudFgsXG5cdFx0XHR0YXJnZXRMZW5ndGggPSBheGlzID09PSAndmVydGljYWwnID8gdGFyZ2V0UmVjdC5oZWlnaHQgOiB0YXJnZXRSZWN0LndpZHRoLFxuXHRcdFx0dGFyZ2V0UzEgPSBheGlzID09PSAndmVydGljYWwnID8gdGFyZ2V0UmVjdC50b3AgOiB0YXJnZXRSZWN0LmxlZnQsXG5cdFx0XHR0YXJnZXRTMiA9IGF4aXMgPT09ICd2ZXJ0aWNhbCcgPyB0YXJnZXRSZWN0LmJvdHRvbSA6IHRhcmdldFJlY3QucmlnaHQsXG5cdFx0XHRkcmFnUmVjdCA9IF9nZXRSZWN0KGRyYWdFbCksXG5cdFx0XHRpbnZlcnQgPSBmYWxzZTtcblxuXG5cdFx0aWYgKCFpbnZlcnRTd2FwKSB7XG5cdFx0XHQvLyBOZXZlciBpbnZlcnQgb3IgY3JlYXRlIGRyYWdFbCBzaGFkb3cgd2hlbiB0YXJnZXQgbW92ZW1lbmV0IGNhdXNlcyBtb3VzZSB0byBtb3ZlIHBhc3QgdGhlIGVuZCBvZiByZWd1bGFyIHN3YXBUaHJlc2hvbGRcblx0XHRcdGlmIChpc0xhc3RUYXJnZXQgJiYgdGFyZ2V0TW92ZURpc3RhbmNlIDwgdGFyZ2V0TGVuZ3RoICogc3dhcFRocmVzaG9sZCkgeyAvLyBtdWx0aXBsaWVkIG9ubHkgYnkgc3dhcFRocmVzaG9sZCBiZWNhdXNlIG1vdXNlIHdpbGwgYWxyZWFkeSBiZSBpbnNpZGUgdGFyZ2V0IGJ5ICgxIC0gdGhyZXNob2xkKSAqIHRhcmdldExlbmd0aCAvIDJcblx0XHRcdFx0Ly8gY2hlY2sgaWYgcGFzdCBmaXJzdCBpbnZlcnQgdGhyZXNob2xkIG9uIHNpZGUgb3Bwb3NpdGUgb2YgbGFzdERpcmVjdGlvblxuXHRcdFx0XHRpZiAoIXBhc3RGaXJzdEludmVydFRocmVzaCAmJlxuXHRcdFx0XHRcdChsYXN0RGlyZWN0aW9uID09PSAxID9cblx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0bW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDJcblx0XHRcdFx0XHRcdCkgOlxuXHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRtb3VzZU9uQXhpcyA8IHRhcmdldFMyIC0gdGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gcGFzdCBmaXJzdCBpbnZlcnQgdGhyZXNob2xkLCBkbyBub3QgcmVzdHJpY3QgaW52ZXJ0ZWQgdGhyZXNob2xkIHRvIGRyYWdFbCBzaGFkb3dcblx0XHRcdFx0XHRwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCFwYXN0Rmlyc3RJbnZlcnRUaHJlc2gpIHtcblx0XHRcdFx0XHR2YXIgZHJhZ1MxID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJyA/IGRyYWdSZWN0LnRvcCA6IGRyYWdSZWN0LmxlZnQsXG5cdFx0XHRcdFx0XHRkcmFnUzIgPSBheGlzID09PSAndmVydGljYWwnID8gZHJhZ1JlY3QuYm90dG9tIDogZHJhZ1JlY3QucmlnaHQ7XG5cdFx0XHRcdFx0Ly8gZHJhZ0VsIHNoYWRvdyAodGFyZ2V0IG1vdmUgZGlzdGFuY2Ugc2hhZG93KVxuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdGxhc3REaXJlY3Rpb24gPT09IDEgP1xuXHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRtb3VzZU9uQXhpcyA8IHRhcmdldFMxICsgdGFyZ2V0TW92ZURpc3RhbmNlIC8vIG92ZXIgZHJhZ0VsIHNoYWRvd1xuXHRcdFx0XHRcdFx0KSA6XG5cdFx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRcdG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSB0YXJnZXRNb3ZlRGlzdGFuY2Vcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxhc3REaXJlY3Rpb24gKiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW52ZXJ0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gUmVndWxhclxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bW91c2VPbkF4aXMgPiB0YXJnZXRTMSArICh0YXJnZXRMZW5ndGggKiAoMSAtIHN3YXBUaHJlc2hvbGQpIC8gMikgJiZcblx0XHRcdFx0XHRtb3VzZU9uQXhpcyA8IHRhcmdldFMyIC0gKHRhcmdldExlbmd0aCAqICgxIC0gc3dhcFRocmVzaG9sZCkgLyAyKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gX2dldEluc2VydERpcmVjdGlvbih0YXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aW52ZXJ0ID0gaW52ZXJ0IHx8IGludmVydFN3YXA7XG5cblx0XHRpZiAoaW52ZXJ0KSB7XG5cdFx0XHQvLyBJbnZlcnQgb2YgcmVndWxhclxuXHRcdFx0aWYgKFxuXHRcdFx0XHRtb3VzZU9uQXhpcyA8IHRhcmdldFMxICsgKHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIpIHx8XG5cdFx0XHRcdG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSAodGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMilcblx0XHRcdClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuICgobW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAvIDIpID8gMSA6IC0xKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBkaXJlY3Rpb24gZHJhZ0VsIG11c3QgYmUgc3dhcHBlZCByZWxhdGl2ZSB0byB0YXJnZXQgaW4gb3JkZXIgdG8gbWFrZSBpdFxuXHQgKiBzZWVtIHRoYXQgZHJhZ0VsIGhhcyBiZWVuIFwiaW5zZXJ0ZWRcIiBpbnRvIHRoYXQgZWxlbWVudCdzIHBvc2l0aW9uXG5cdCAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSB0YXJnZXQgICAgICAgVGhlIHRhcmdldCB3aG9zZSBwb3NpdGlvbiBkcmFnRWwgaXMgYmVpbmcgaW5zZXJ0ZWQgYXRcblx0ICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICBEaXJlY3Rpb24gZHJhZ0VsIG11c3QgYmUgc3dhcHBlZFxuXHQgKi9cblx0ZnVuY3Rpb24gX2dldEluc2VydERpcmVjdGlvbih0YXJnZXQpIHtcblx0XHR2YXIgZHJhZ0VsSW5kZXggPSBfaW5kZXgoZHJhZ0VsKSxcblx0XHRcdHRhcmdldEluZGV4ID0gX2luZGV4KHRhcmdldCk7XG5cblx0XHRpZiAoZHJhZ0VsSW5kZXggPCB0YXJnZXRJbmRleCkge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBpZFxuXHQgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9IGVsXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBfZ2VuZXJhdGVJZChlbCkge1xuXHRcdHZhciBzdHIgPSBlbC50YWdOYW1lICsgZWwuY2xhc3NOYW1lICsgZWwuc3JjICsgZWwuaHJlZiArIGVsLnRleHRDb250ZW50LFxuXHRcdFx0aSA9IHN0ci5sZW5ndGgsXG5cdFx0XHRzdW0gPSAwO1xuXG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0c3VtICs9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdW0udG9TdHJpbmcoMzYpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGluZGV4IG9mIGFuIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnQgZm9yIGEgc2VsZWN0ZWQgc2V0IG9mXG5cdCAqIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbFxuXHQgKiBAcGFyYW0gIHtzZWxlY3Rvcn0gc2VsZWN0b3Jcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKi9cblx0ZnVuY3Rpb24gX2luZGV4KGVsLCBzZWxlY3Rvcikge1xuXHRcdHZhciBpbmRleCA9IDA7XG5cblx0XHRpZiAoIWVsIHx8ICFlbC5wYXJlbnROb2RlKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGVsICYmIChlbCA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpKSB7XG5cdFx0XHRpZiAoKGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdURU1QTEFURScpICYmIGVsICE9PSBjbG9uZUVsICYmICghc2VsZWN0b3IgfHwgX21hdGNoZXMoZWwsIHNlbGVjdG9yKSkpIHtcblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH1cblxuXHRmdW5jdGlvbiBfbWF0Y2hlcygvKipIVE1MRWxlbWVudCovZWwsIC8qKlN0cmluZyovc2VsZWN0b3IpIHtcblx0XHRpZiAoIXNlbGVjdG9yKSByZXR1cm47XG5cblx0XHRzZWxlY3RvclswXSA9PT0gJz4nICYmIChzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cmluZygxKSk7XG5cblx0XHRpZiAoZWwpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChlbC5tYXRjaGVzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcblx0XHRcdFx0fSBlbHNlIGlmIChlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaChfKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgX3Rocm90dGxlVGltZW91dDtcblx0ZnVuY3Rpb24gX3Rocm90dGxlKGNhbGxiYWNrLCBtcykge1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoIV90aHJvdHRsZVRpbWVvdXQpIHtcblx0XHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMsXG5cdFx0XHRcdFx0X3RoaXMgPSB0aGlzO1xuXG5cdFx0XHRcdF90aHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwoX3RoaXMsIGFyZ3NbMF0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjay5hcHBseShfdGhpcywgYXJncyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0X3Rocm90dGxlVGltZW91dCA9IHZvaWQgMDtcblx0XHRcdFx0fSwgbXMpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBfY2FuY2VsVGhyb3R0bGUoKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KF90aHJvdHRsZVRpbWVvdXQpO1xuXHRcdF90aHJvdHRsZVRpbWVvdXQgPSB2b2lkIDA7XG5cdH1cblxuXHRmdW5jdGlvbiBfZXh0ZW5kKGRzdCwgc3JjKSB7XG5cdFx0aWYgKGRzdCAmJiBzcmMpIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBzcmMpIHtcblx0XHRcdFx0aWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0ZHN0W2tleV0gPSBzcmNba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBkc3Q7XG5cdH1cblxuXHRmdW5jdGlvbiBfY2xvbmUoZWwpIHtcblx0XHRpZiAoUG9seW1lciAmJiBQb2x5bWVyLmRvbSkge1xuXHRcdFx0cmV0dXJuIFBvbHltZXIuZG9tKGVsKS5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCQpIHtcblx0XHRcdHJldHVybiAkKGVsKS5jbG9uZSh0cnVlKVswXTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gZWwuY2xvbmVOb2RlKHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIF9zYXZlSW5wdXRDaGVja2VkU3RhdGUocm9vdCkge1xuXHRcdHNhdmVkSW5wdXRDaGVja2VkLmxlbmd0aCA9IDA7XG5cblx0XHR2YXIgaW5wdXRzID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcblx0XHR2YXIgaWR4ID0gaW5wdXRzLmxlbmd0aDtcblxuXHRcdHdoaWxlIChpZHgtLSkge1xuXHRcdFx0dmFyIGVsID0gaW5wdXRzW2lkeF07XG5cdFx0XHRlbC5jaGVja2VkICYmIHNhdmVkSW5wdXRDaGVja2VkLnB1c2goZWwpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIF9uZXh0VGljayhmbikge1xuXHRcdHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9jYW5jZWxOZXh0VGljayhpZCkge1xuXHRcdHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuXHR9XG5cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgXCJib3VuZGluZyBjbGllbnQgcmVjdFwiIG9mIGdpdmVuIGVsZW1lbnRcblx0ICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgICAgICAgICAgIFRoZSBlbGVtZW50IHdob3NlIGJvdW5kaW5nQ2xpZW50UmVjdCBpcyB3YW50ZWRcblx0ICogQHBhcmFtICB7W0hUTUxFbGVtZW50XX0gY29udGFpbmVyICAgICAgIHRoZSBwYXJlbnQgdGhlIGVsZW1lbnQgd2lsbCBiZSBwbGFjZWQgaW5cblx0ICogQHBhcmFtICB7W0Jvb2xlYW5dfSBhZGp1c3RGb3JUcmFuc2Zvcm0gIFdoZXRoZXIgdGhlIHJlY3Qgc2hvdWxkIGNvbXBlbnNhdGUgZm9yIHBhcmVudCdzIHRyYW5zZm9ybVxuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGJvdW5kaW5nQ2xpZW50UmVjdCBvZiBlbFxuXHQgKi9cblx0ZnVuY3Rpb24gX2dldFJlY3QoZWwsIGFkanVzdEZvclRyYW5zZm9ybSwgY29udGFpbmVyLCBhZGp1c3RGb3JGaXhlZCkge1xuXHRcdGlmICghZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIGVsICE9PSB3aW4pIHJldHVybjtcblxuXHRcdHZhciBlbFJlY3QsXG5cdFx0XHR0b3AsXG5cdFx0XHRsZWZ0LFxuXHRcdFx0Ym90dG9tLFxuXHRcdFx0cmlnaHQsXG5cdFx0XHRoZWlnaHQsXG5cdFx0XHR3aWR0aDtcblxuXHRcdGlmIChlbCAhPT0gd2luICYmIGVsICE9PSBfZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpKSB7XG5cdFx0XHRlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHRvcCA9IGVsUmVjdC50b3A7XG5cdFx0XHRsZWZ0ID0gZWxSZWN0LmxlZnQ7XG5cdFx0XHRib3R0b20gPSBlbFJlY3QuYm90dG9tO1xuXHRcdFx0cmlnaHQgPSBlbFJlY3QucmlnaHQ7XG5cdFx0XHRoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0O1xuXHRcdFx0d2lkdGggPSBlbFJlY3Qud2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvcCA9IDA7XG5cdFx0XHRsZWZ0ID0gMDtcblx0XHRcdGJvdHRvbSA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRcdHJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0XHRoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0XHR3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdH1cblxuXHRcdGlmIChhZGp1c3RGb3JGaXhlZCAmJiBlbCAhPT0gd2luKSB7XG5cdFx0XHQvLyBBZGp1c3QgZm9yIHRyYW5zbGF0ZSgpXG5cdFx0XHRjb250YWluZXIgPSBjb250YWluZXIgfHwgZWwucGFyZW50Tm9kZTtcblxuXHRcdFx0Ly8gc29sdmVzICMxMTIzIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNzk1MzgwNi82MDg4MzEyKVxuXHRcdFx0Ly8gTm90IG5lZWRlZCBvbiA8PSBJRTExXG5cdFx0XHRpZiAoIUlFMTFPckxlc3MpIHtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGlmIChjb250YWluZXIgJiYgY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiBfY3NzKGNvbnRhaW5lciwgJ3RyYW5zZm9ybScpICE9PSAnbm9uZScpIHtcblx0XHRcdFx0XHRcdHZhciBjb250YWluZXJSZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0XHRcdFx0XHQvLyBTZXQgcmVsYXRpdmUgdG8gZWRnZXMgb2YgcGFkZGluZyBib3ggb2YgY29udGFpbmVyXG5cdFx0XHRcdFx0XHR0b3AgLT0gY29udGFpbmVyUmVjdC50b3AgKyBwYXJzZUludChfY3NzKGNvbnRhaW5lciwgJ2JvcmRlci10b3Atd2lkdGgnKSk7XG5cdFx0XHRcdFx0XHRsZWZ0IC09IGNvbnRhaW5lclJlY3QubGVmdCArIHBhcnNlSW50KF9jc3MoY29udGFpbmVyLCAnYm9yZGVyLWxlZnQtd2lkdGgnKSk7XG5cdFx0XHRcdFx0XHRib3R0b20gPSB0b3AgKyBlbFJlY3QuaGVpZ2h0O1xuXHRcdFx0XHRcdFx0cmlnaHQgPSBsZWZ0ICsgZWxSZWN0LndpZHRoO1xuXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuXHRcdFx0XHR9IHdoaWxlIChjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGFkanVzdEZvclRyYW5zZm9ybSAmJiBlbCAhPT0gd2luKSB7XG5cdFx0XHQvLyBBZGp1c3QgZm9yIHNjYWxlKClcblx0XHRcdHZhciBtYXRyaXggPSBfbWF0cml4KGNvbnRhaW5lciB8fCBlbCksXG5cdFx0XHRcdHNjYWxlWCA9IG1hdHJpeCAmJiBtYXRyaXguYSxcblx0XHRcdFx0c2NhbGVZID0gbWF0cml4ICYmIG1hdHJpeC5kO1xuXG5cdFx0XHRpZiAobWF0cml4KSB7XG5cdFx0XHRcdHRvcCAvPSBzY2FsZVk7XG5cdFx0XHRcdGxlZnQgLz0gc2NhbGVYO1xuXG5cdFx0XHRcdHdpZHRoIC89IHNjYWxlWDtcblx0XHRcdFx0aGVpZ2h0IC89IHNjYWxlWTtcblxuXHRcdFx0XHRib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG5cdFx0XHRcdHJpZ2h0ID0gbGVmdCArIHdpZHRoO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IHRvcCxcblx0XHRcdGxlZnQ6IGxlZnQsXG5cdFx0XHRib3R0b206IGJvdHRvbSxcblx0XHRcdHJpZ2h0OiByaWdodCxcblx0XHRcdHdpZHRoOiB3aWR0aCxcblx0XHRcdGhlaWdodDogaGVpZ2h0XG5cdFx0fTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBhIHNpZGUgb2YgYW4gZWxlbWVudCBpcyBzY3JvbGxlZCBwYXN0IGEgc2lkZSBvZiBpdCdzIHBhcmVudHNcblx0ICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbCAgICAgICBUaGUgZWxlbWVudCB3aG8ncyBzaWRlIGJlaW5nIHNjcm9sbGVkIG91dCBvZiB2aWV3IGlzIGluIHF1ZXN0aW9uXG5cdCAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgc2lkZSAgICAgU2lkZSBvZiB0aGUgZWxlbWVudCBpbiBxdWVzdGlvbiAoJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0JywgJ2JvdHRvbScpXG5cdCAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAgICAgICAgICAgVGhlIHBhcmVudCBzY3JvbGwgZWxlbWVudCB0aGF0IHRoZSBlbCdzIHNpZGUgaXMgc2Nyb2xsZWQgcGFzdCwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzdWNoIGVsZW1lbnRcblx0ICovXG5cdGZ1bmN0aW9uIF9pc1Njcm9sbGVkUGFzdChlbCwgc2lkZSkge1xuXHRcdHZhciBwYXJlbnQgPSBfZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWwsIHRydWUpLFxuXHRcdFx0ZWxTaWRlID0gX2dldFJlY3QoZWwpW3NpZGVdO1xuXG5cdFx0LyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuXHRcdHdoaWxlIChwYXJlbnQpIHtcblx0XHRcdHZhciBwYXJlbnRTaWRlID0gX2dldFJlY3QocGFyZW50KVtzaWRlXSxcblx0XHRcdFx0dmlzaWJsZTtcblxuXHRcdFx0aWYgKHNpZGUgPT09ICd0b3AnIHx8IHNpZGUgPT09ICdsZWZ0Jykge1xuXHRcdFx0XHR2aXNpYmxlID0gZWxTaWRlID49IHBhcmVudFNpZGU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2aXNpYmxlID0gZWxTaWRlIDw9IHBhcmVudFNpZGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdmlzaWJsZSkgcmV0dXJuIHBhcmVudDtcblxuXHRcdFx0aWYgKHBhcmVudCA9PT0gX2dldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKSkgYnJlYWs7XG5cblx0XHRcdHBhcmVudCA9IF9nZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChwYXJlbnQsIGZhbHNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgc2Nyb2xsIG9mZnNldCBvZiB0aGUgZ2l2ZW4gZWxlbWVudCwgYWRkZWQgd2l0aCBhbGwgdGhlIHNjcm9sbCBvZmZzZXRzIG9mIHBhcmVudCBlbGVtZW50cy5cblx0ICogVGhlIHZhbHVlIGlzIHJldHVybmVkIGluIHJlYWwgcGl4ZWxzLlxuXHQgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcblx0ICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgIE9mZnNldHMgaW4gdGhlIGZvcm1hdCBvZiBbbGVmdCwgdG9wXVxuXHQgKi9cblx0ZnVuY3Rpb24gX2dldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0KGVsKSB7XG5cdFx0dmFyIG9mZnNldExlZnQgPSAwLFxuXHRcdFx0b2Zmc2V0VG9wID0gMCxcblx0XHRcdHdpblNjcm9sbGVyID0gX2dldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcblxuXHRcdGlmIChlbCkge1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHR2YXIgbWF0cml4ID0gX21hdHJpeChlbCksXG5cdFx0XHRcdFx0c2NhbGVYID0gbWF0cml4LmEsXG5cdFx0XHRcdFx0c2NhbGVZID0gbWF0cml4LmQ7XG5cblx0XHRcdFx0b2Zmc2V0TGVmdCArPSBlbC5zY3JvbGxMZWZ0ICogc2NhbGVYO1xuXHRcdFx0XHRvZmZzZXRUb3AgKz0gZWwuc2Nyb2xsVG9wICogc2NhbGVZO1xuXHRcdFx0fSB3aGlsZSAoZWwgIT09IHdpblNjcm9sbGVyICYmIChlbCA9IGVsLnBhcmVudE5vZGUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW29mZnNldExlZnQsIG9mZnNldFRvcF07XG5cdH1cblxuXHQvLyBGaXhlZCAjOTczOlxuXHRfb24oZG9jdW1lbnQsICd0b3VjaG1vdmUnLCBmdW5jdGlvbihldnQpIHtcblx0XHRpZiAoKFNvcnRhYmxlLmFjdGl2ZSB8fCBhd2FpdGluZ0RyYWdTdGFydGVkKSAmJiBldnQuY2FuY2VsYWJsZSkge1xuXHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9KTtcblxuXG5cdC8vIEV4cG9ydCB1dGlsc1xuXHRTb3J0YWJsZS51dGlscyA9IHtcblx0XHRvbjogX29uLFxuXHRcdG9mZjogX29mZixcblx0XHRjc3M6IF9jc3MsXG5cdFx0ZmluZDogX2ZpbmQsXG5cdFx0aXM6IGZ1bmN0aW9uIChlbCwgc2VsZWN0b3IpIHtcblx0XHRcdHJldHVybiAhIV9jbG9zZXN0KGVsLCBzZWxlY3RvciwgZWwsIGZhbHNlKTtcblx0XHR9LFxuXHRcdGV4dGVuZDogX2V4dGVuZCxcblx0XHR0aHJvdHRsZTogX3Rocm90dGxlLFxuXHRcdGNsb3Nlc3Q6IF9jbG9zZXN0LFxuXHRcdHRvZ2dsZUNsYXNzOiBfdG9nZ2xlQ2xhc3MsXG5cdFx0Y2xvbmU6IF9jbG9uZSxcblx0XHRpbmRleDogX2luZGV4LFxuXHRcdG5leHRUaWNrOiBfbmV4dFRpY2ssXG5cdFx0Y2FuY2VsTmV4dFRpY2s6IF9jYW5jZWxOZXh0VGljayxcblx0XHRkZXRlY3REaXJlY3Rpb246IF9kZXRlY3REaXJlY3Rpb24sXG5cdFx0Z2V0Q2hpbGQ6IF9nZXRDaGlsZFxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIENyZWF0ZSBzb3J0YWJsZSBpbnN0YW5jZVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAgZWxcblx0ICogQHBhcmFtIHtPYmplY3R9ICAgICAgW29wdGlvbnNdXG5cdCAqL1xuXHRTb3J0YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gbmV3IFNvcnRhYmxlKGVsLCBvcHRpb25zKTtcblx0fTtcblxuXG5cdC8vIEV4cG9ydFxuXHRTb3J0YWJsZS52ZXJzaW9uID0gJzEuOS4wJztcblx0cmV0dXJuIFNvcnRhYmxlO1xufSk7XG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\sortablejs\\Sortable.js","/..\\..\\..\\..\\node_modules\\sortablejs")
},{"6r38Q7":5,"buffer":3}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.6.5
  @link https://github.com/dollarshaveclub/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.stickybits = factory());
})(void 0, function () {
  'use strict';
  /*
    STICKYBITS 💉
    --------
    > a lightweight alternative to `position: sticky` polyfills 🍬
    --------
    - each method is documented above it our view the readme
    - Stickybits does not manage polymorphic functionality (position like properties)
    * polymorphic functionality: (in the context of describing Stickybits)
      means making things like `position: sticky` be loosely supported with position fixed.
      It also means that features like `useStickyClasses` takes on styles like `position: fixed`.
    --------
    defaults 🔌
    --------
    - version = `package.json` version
    - userAgent = viewer browser agent
    - target = DOM element selector
    - noStyles = boolean
    - offset = number
    - parentClass = 'string'
    - scrollEl = window || DOM element selector || DOM element
    - stickyClass = 'string'
    - stuckClass = 'string'
    - useStickyClasses = boolean
    - useFixed = boolean
    - useGetBoundingClientRect = boolean
    - verticalPosition = 'string'
    --------
    props🔌
    --------
    - p = props {object}
    --------
    instance note
    --------
    - stickybits parent methods return this
    - stickybits instance methods return an instance item
    --------
    nomenclature
    --------
    - target => el => e
    - props => o || p
    - instance => item => it
    --------
    methods
    --------
    - .definePosition = defines sticky or fixed
    - .addInstance = an array of objects for each Stickybits Target
    - .getClosestParent = gets the parent for non-window scroll
    - .getTopPosition = gets the element top pixel position from the viewport
    - .computeScrollOffsets = computes scroll position
    - .toggleClasses = older browser toggler
    - .manageState = manages sticky state
    - .removeClass = older browser support class remover
    - .removeInstance = removes an instance
    - .cleanup = removes all Stickybits instances and cleans up dom from stickybits
  */

  var Stickybits =
  /*#__PURE__*/
  function () {
    function Stickybits(target, obj) {
      var o = typeof obj !== 'undefined' ? obj : {};
      this.version = '3.6.5';
      this.userAgent = window.navigator.userAgent || 'no `userAgent` provided by the browser';
      this.props = {
        customStickyChangeNumber: o.customStickyChangeNumber || null,
        noStyles: o.noStyles || false,
        stickyBitStickyOffset: o.stickyBitStickyOffset || 0,
        parentClass: o.parentClass || 'js-stickybit-parent',
        scrollEl: typeof o.scrollEl === 'string' ? document.querySelector(o.scrollEl) : o.scrollEl || window,
        stickyClass: o.stickyClass || 'js-is-sticky',
        stuckClass: o.stuckClass || 'js-is-stuck',
        stickyChangeClass: o.stickyChangeClass || 'js-is-sticky--change',
        useStickyClasses: o.useStickyClasses || false,
        useFixed: o.useFixed || false,
        useGetBoundingClientRect: o.useGetBoundingClientRect || false,
        verticalPosition: o.verticalPosition || 'top'
        /*
          define positionVal
          ----
          -  uses a computed (`.definePosition()`)
          -  defined the position
        */

      };
      this.props.positionVal = this.definePosition() || 'fixed';
      this.instances = [];
      var _this$props = this.props,
          positionVal = _this$props.positionVal,
          verticalPosition = _this$props.verticalPosition,
          noStyles = _this$props.noStyles,
          stickyBitStickyOffset = _this$props.stickyBitStickyOffset,
          useStickyClasses = _this$props.useStickyClasses;
      var verticalPositionStyle = verticalPosition === 'top' && !noStyles ? stickyBitStickyOffset + "px" : '';
      var positionStyle = positionVal !== 'fixed' ? positionVal : '';
      this.els = typeof target === 'string' ? document.querySelectorAll(target) : target;
      if (!('length' in this.els)) this.els = [this.els];

      for (var i = 0; i < this.els.length; i++) {
        var el = this.els[i]; // set vertical position

        el.style[verticalPosition] = verticalPositionStyle;
        el.style.position = positionStyle;

        if (positionVal === 'fixed' || useStickyClasses) {
          // instances are an array of objects
          this.instances.push(this.addInstance(el, this.props));
        }
      }
    }
    /*
      setStickyPosition ✔️
      --------
      —  most basic thing stickybits does
      => checks to see if position sticky is supported
      => defined the position to be used
      => stickybits works accordingly
    */


    var _proto = Stickybits.prototype;

    _proto.definePosition = function definePosition() {
      var stickyProp;

      if (this.props.useFixed) {
        stickyProp = 'fixed';
      } else {
        var prefix = ['', '-o-', '-webkit-', '-moz-', '-ms-'];
        var test = document.head.style;

        for (var i = 0; i < prefix.length; i += 1) {
          test.position = prefix[i] + "sticky";
        }

        stickyProp = test.position ? test.position : 'fixed';
        test.position = '';
      }

      return stickyProp;
    }
    /*
      addInstance ✔️
      --------
      — manages instances of items
      - takes in an el and props
      - returns an item object
      ---
      - target = el
      - o = {object} = props
        - scrollEl = 'string' | object
        - verticalPosition = number
        - off = boolean
        - parentClass = 'string'
        - stickyClass = 'string'
        - stuckClass = 'string'
      ---
      - defined later
        - parent = dom element
        - state = 'string'
        - offset = number
        - stickyStart = number
        - stickyStop = number
      - returns an instance object
    */
    ;

    _proto.addInstance = function addInstance(el, props) {
      var _this = this;

      var item = {
        el: el,
        parent: el.parentNode,
        props: props
      };
      this.isWin = this.props.scrollEl === window;
      var se = this.isWin ? window : this.getClosestParent(item.el, item.props.scrollEl);
      this.computeScrollOffsets(item);
      item.parent.className += " " + props.parentClass;
      item.state = 'default';

      item.stateContainer = function () {
        return _this.manageState(item);
      };

      se.addEventListener('scroll', item.stateContainer);
      return item;
    }
    /*
      --------
      getParent 👨‍
      --------
      - a helper function that gets the target element's parent selected el
      - only used for non `window` scroll elements
      - supports older browsers
    */
    ;

    _proto.getClosestParent = function getClosestParent(el, match) {
      // p = parent element
      var p = match;
      var e = el;
      if (e.parentElement === p) return p; // traverse up the dom tree until we get to the parent

      while (e.parentElement !== p) {
        e = e.parentElement;
      } // return parent element


      return p;
    }
    /*
      --------
      getTopPosition
      --------
      - a helper function that gets the topPosition of a Stickybit element
      - from the top level of the DOM
    */
    ;

    _proto.getTopPosition = function getTopPosition(el) {
      if (this.props.useGetBoundingClientRect) {
        return el.getBoundingClientRect().top + (this.props.scrollEl.pageYOffset || document.documentElement.scrollTop);
      }

      var topPosition = 0;

      do {
        topPosition = el.offsetTop + topPosition;
      } while (el = el.offsetParent);

      return topPosition;
    }
    /*
      computeScrollOffsets 📊
      ---
      computeScrollOffsets for Stickybits
      - defines
        - offset
        - start
        - stop
    */
    ;

    _proto.computeScrollOffsets = function computeScrollOffsets(item) {
      var it = item;
      var p = it.props;
      var el = it.el;
      var parent = it.parent;
      var isCustom = !this.isWin && p.positionVal === 'fixed';
      var isTop = p.verticalPosition !== 'bottom';
      var scrollElOffset = isCustom ? this.getTopPosition(p.scrollEl) : 0;
      var stickyStart = isCustom ? this.getTopPosition(parent) - scrollElOffset : this.getTopPosition(parent);
      var stickyChangeOffset = p.customStickyChangeNumber !== null ? p.customStickyChangeNumber : el.offsetHeight;
      var parentBottom = stickyStart + parent.offsetHeight;
      it.offset = scrollElOffset + p.stickyBitStickyOffset;
      it.stickyStart = isTop ? stickyStart - it.offset : 0;
      it.stickyChange = it.stickyStart + stickyChangeOffset;
      it.stickyStop = isTop ? parentBottom - (el.offsetHeight + it.offset) : parentBottom - window.innerHeight;
    }
    /*
      toggleClasses ⚖️
      ---
      toggles classes (for older browser support)
      r = removed class
      a = added class
    */
    ;

    _proto.toggleClasses = function toggleClasses(el, r, a) {
      var e = el;
      var cArray = e.className.split(' ');
      if (a && cArray.indexOf(a) === -1) cArray.push(a);
      var rItem = cArray.indexOf(r);
      if (rItem !== -1) cArray.splice(rItem, 1);
      e.className = cArray.join(' ');
    }
    /*
      manageState 📝
      ---
      - defines the state
        - normal
        - sticky
        - stuck
    */
    ;

    _proto.manageState = function manageState(item) {
      // cache object
      var it = item;
      var e = it.el;
      var p = it.props;
      var state = it.state;
      var start = it.stickyStart;
      var change = it.stickyChange;
      var stop = it.stickyStop;
      var stl = e.style; // cache props

      var ns = p.noStyles;
      var pv = p.positionVal;
      var se = p.scrollEl;
      var sticky = p.stickyClass;
      var stickyChange = p.stickyChangeClass;
      var stuck = p.stuckClass;
      var vp = p.verticalPosition;
      var isTop = vp !== 'bottom';
      /*
        requestAnimationFrame
        ---
        - use rAF
        - or stub rAF
      */

      var rAFStub = function rAFDummy(f) {
        f();
      };

      var rAF = !this.isWin ? rAFStub : window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || rAFStub;
      /*
        define scroll vars
        ---
        - scroll
        - notSticky
        - isSticky
        - isStuck
      */

      var tC = this.toggleClasses;
      var scroll = this.isWin ? window.scrollY || window.pageYOffset : se.scrollTop;
      var notSticky = scroll > start && scroll < stop && (state === 'default' || state === 'stuck');
      var isSticky = isTop && scroll <= start && (state === 'sticky' || state === 'stuck');
      var isStuck = scroll >= stop && state === 'sticky';
      /*
        Unnamed arrow functions within this block
        ---
        - help wanted or discussion
        - view test.stickybits.js
          - `stickybits .manageState  `position: fixed` interface` for more awareness 👀
      */

      if (notSticky) {
        it.state = 'sticky';
        rAF(function () {
          tC(e, stuck, sticky);
          stl.position = pv;
          if (ns) return;
          stl.bottom = '';
          stl[vp] = p.stickyBitStickyOffset + "px";
        });
      } else if (isSticky) {
        it.state = 'default';
        rAF(function () {
          tC(e, sticky);
          tC(e, stuck);
          if (pv === 'fixed') stl.position = '';
        });
      } else if (isStuck) {
        it.state = 'stuck';
        rAF(function () {
          tC(e, sticky, stuck);
          if (pv !== 'fixed' || ns) return;
          stl.top = '';
          stl.bottom = '0';
          stl.position = 'absolute';
        });
      }

      var isStickyChange = scroll >= change && scroll <= stop;
      var isNotStickyChange = scroll < change / 2 || scroll > stop;
      var stub = 'stub'; // a stub css class to remove

      if (isNotStickyChange) {
        rAF(function () {
          tC(e, stickyChange);
        });
      } else if (isStickyChange) {
        rAF(function () {
          tC(e, stub, stickyChange);
        });
      }
    };

    _proto.update = function update(updatedProps) {
      if (updatedProps === void 0) {
        updatedProps = null;
      }

      for (var i = 0; i < this.instances.length; i += 1) {
        var instance = this.instances[i];
        this.computeScrollOffsets(instance);

        if (updatedProps) {
          for (var updatedProp in updatedProps) {
            instance.props[updatedProp] = updatedProps[updatedProp];
          }
        }
      }

      return this;
    }
    /*
      removes an instance 👋
      --------
      - cleanup instance
    */
    ;

    _proto.removeInstance = function removeInstance(instance) {
      var e = instance.el;
      var p = instance.props;
      var tC = this.toggleClasses;
      e.style.position = '';
      e.style[p.verticalPosition] = '';
      tC(e, p.stickyClass);
      tC(e, p.stuckClass);
      tC(e.parentNode, p.parentClass);
    }
    /*
      cleanup 🛁
      --------
      - cleans up each instance
      - clears instance
    */
    ;

    _proto.cleanup = function cleanup() {
      for (var i = 0; i < this.instances.length; i += 1) {
        var instance = this.instances[i];
        instance.props.scrollEl.removeEventListener('scroll', instance.stateContainer);
        this.removeInstance(instance);
      }

      this.manageState = false;
      this.instances = [];
    };

    return Stickybits;
  }();
  /*
    export
    --------
    exports StickBits to be used 🏁
  */


  function stickybits(target, o) {
    return new Stickybits(target, o);
  }

  return stickybits;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0aWNreWJpdHMuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJzZWxmIiwic3RpY2t5Yml0cyIsIlN0aWNreWJpdHMiLCJ0YXJnZXQiLCJvYmoiLCJvIiwidmVyc2lvbiIsInVzZXJBZ2VudCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInByb3BzIiwiY3VzdG9tU3RpY2t5Q2hhbmdlTnVtYmVyIiwibm9TdHlsZXMiLCJzdGlja3lCaXRTdGlja3lPZmZzZXQiLCJwYXJlbnRDbGFzcyIsInNjcm9sbEVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5Q2xhc3MiLCJzdHVja0NsYXNzIiwic3RpY2t5Q2hhbmdlQ2xhc3MiLCJ1c2VTdGlja3lDbGFzc2VzIiwidXNlRml4ZWQiLCJ1c2VHZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ2ZXJ0aWNhbFBvc2l0aW9uIiwicG9zaXRpb25WYWwiLCJkZWZpbmVQb3NpdGlvbiIsImluc3RhbmNlcyIsIl90aGlzJHByb3BzIiwidmVydGljYWxQb3NpdGlvblN0eWxlIiwicG9zaXRpb25TdHlsZSIsImVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiZWwiLCJzdHlsZSIsInBvc2l0aW9uIiwicHVzaCIsImFkZEluc3RhbmNlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwic3RpY2t5UHJvcCIsInByZWZpeCIsInRlc3QiLCJoZWFkIiwiX3RoaXMiLCJpdGVtIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImlzV2luIiwic2UiLCJnZXRDbG9zZXN0UGFyZW50IiwiY29tcHV0ZVNjcm9sbE9mZnNldHMiLCJjbGFzc05hbWUiLCJzdGF0ZSIsInN0YXRlQ29udGFpbmVyIiwibWFuYWdlU3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwibWF0Y2giLCJwIiwiZSIsInBhcmVudEVsZW1lbnQiLCJnZXRUb3BQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwidG9wUG9zaXRpb24iLCJvZmZzZXRUb3AiLCJvZmZzZXRQYXJlbnQiLCJpdCIsImlzQ3VzdG9tIiwiaXNUb3AiLCJzY3JvbGxFbE9mZnNldCIsInN0aWNreVN0YXJ0Iiwic3RpY2t5Q2hhbmdlT2Zmc2V0Iiwib2Zmc2V0SGVpZ2h0IiwicGFyZW50Qm90dG9tIiwib2Zmc2V0Iiwic3RpY2t5Q2hhbmdlIiwic3RpY2t5U3RvcCIsImlubmVySGVpZ2h0IiwidG9nZ2xlQ2xhc3NlcyIsInIiLCJhIiwiY0FycmF5Iiwic3BsaXQiLCJpbmRleE9mIiwickl0ZW0iLCJzcGxpY2UiLCJqb2luIiwic3RhcnQiLCJjaGFuZ2UiLCJzdG9wIiwic3RsIiwibnMiLCJwdiIsInN0aWNreSIsInN0dWNrIiwidnAiLCJyQUZTdHViIiwickFGRHVtbXkiLCJmIiwickFGIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0QyIsInNjcm9sbCIsInNjcm9sbFkiLCJub3RTdGlja3kiLCJpc1N0aWNreSIsImlzU3R1Y2siLCJib3R0b20iLCJpc1N0aWNreUNoYW5nZSIsImlzTm90U3RpY2t5Q2hhbmdlIiwic3R1YiIsInVwZGF0ZSIsInVwZGF0ZWRQcm9wcyIsImluc3RhbmNlIiwidXBkYXRlZFByb3AiLCJyZW1vdmVJbnN0YW5jZSIsImNsZWFudXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7QUFPQyxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtBQUMxQixVQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9DLE1BQVAsS0FBa0IsV0FBakQsR0FBK0RBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQkQsT0FBTyxFQUF2RixHQUNBLE9BQU9HLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0MsR0FBdkMsR0FBNkNELE1BQU0sQ0FBQ0gsT0FBRCxDQUFuRCxJQUNDRCxNQUFNLEdBQUdBLE1BQU0sSUFBSU0sSUFBbkIsRUFBeUJOLE1BQU0sQ0FBQ08sVUFBUCxHQUFvQk4sT0FBTyxFQURyRCxDQURBO0FBR0QsQ0FKQSxVQUlPLFlBQVk7QUFBRTtBQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsTUFBSU8sVUFBVTtBQUNkO0FBQ0EsY0FBWTtBQUNWLGFBQVNBLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixVQUFJQyxDQUFDLEdBQUcsT0FBT0QsR0FBUCxLQUFlLFdBQWYsR0FBNkJBLEdBQTdCLEdBQW1DLEVBQTNDO0FBQ0EsV0FBS0UsT0FBTCxHQUFlLE9BQWY7QUFDQSxXQUFLQyxTQUFMLEdBQWlCQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJGLFNBQWpCLElBQThCLHdDQUEvQztBQUNBLFdBQUtHLEtBQUwsR0FBYTtBQUNYQyxRQUFBQSx3QkFBd0IsRUFBRU4sQ0FBQyxDQUFDTSx3QkFBRixJQUE4QixJQUQ3QztBQUVYQyxRQUFBQSxRQUFRLEVBQUVQLENBQUMsQ0FBQ08sUUFBRixJQUFjLEtBRmI7QUFHWEMsUUFBQUEscUJBQXFCLEVBQUVSLENBQUMsQ0FBQ1EscUJBQUYsSUFBMkIsQ0FIdkM7QUFJWEMsUUFBQUEsV0FBVyxFQUFFVCxDQUFDLENBQUNTLFdBQUYsSUFBaUIscUJBSm5CO0FBS1hDLFFBQUFBLFFBQVEsRUFBRSxPQUFPVixDQUFDLENBQUNVLFFBQVQsS0FBc0IsUUFBdEIsR0FBaUNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QlosQ0FBQyxDQUFDVSxRQUF6QixDQUFqQyxHQUFzRVYsQ0FBQyxDQUFDVSxRQUFGLElBQWNQLE1BTG5GO0FBTVhVLFFBQUFBLFdBQVcsRUFBRWIsQ0FBQyxDQUFDYSxXQUFGLElBQWlCLGNBTm5CO0FBT1hDLFFBQUFBLFVBQVUsRUFBRWQsQ0FBQyxDQUFDYyxVQUFGLElBQWdCLGFBUGpCO0FBUVhDLFFBQUFBLGlCQUFpQixFQUFFZixDQUFDLENBQUNlLGlCQUFGLElBQXVCLHNCQVIvQjtBQVNYQyxRQUFBQSxnQkFBZ0IsRUFBRWhCLENBQUMsQ0FBQ2dCLGdCQUFGLElBQXNCLEtBVDdCO0FBVVhDLFFBQUFBLFFBQVEsRUFBRWpCLENBQUMsQ0FBQ2lCLFFBQUYsSUFBYyxLQVZiO0FBV1hDLFFBQUFBLHdCQUF3QixFQUFFbEIsQ0FBQyxDQUFDa0Isd0JBQUYsSUFBOEIsS0FYN0M7QUFZWEMsUUFBQUEsZ0JBQWdCLEVBQUVuQixDQUFDLENBQUNtQixnQkFBRixJQUFzQjtBQUN4Qzs7Ozs7OztBQWJXLE9BQWI7QUFxQkEsV0FBS2QsS0FBTCxDQUFXZSxXQUFYLEdBQXlCLEtBQUtDLGNBQUwsTUFBeUIsT0FBbEQ7QUFDQSxXQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsVUFBSUMsV0FBVyxHQUFHLEtBQUtsQixLQUF2QjtBQUFBLFVBQ0llLFdBQVcsR0FBR0csV0FBVyxDQUFDSCxXQUQ5QjtBQUFBLFVBRUlELGdCQUFnQixHQUFHSSxXQUFXLENBQUNKLGdCQUZuQztBQUFBLFVBR0laLFFBQVEsR0FBR2dCLFdBQVcsQ0FBQ2hCLFFBSDNCO0FBQUEsVUFJSUMscUJBQXFCLEdBQUdlLFdBQVcsQ0FBQ2YscUJBSnhDO0FBQUEsVUFLSVEsZ0JBQWdCLEdBQUdPLFdBQVcsQ0FBQ1AsZ0JBTG5DO0FBTUEsVUFBSVEscUJBQXFCLEdBQUdMLGdCQUFnQixLQUFLLEtBQXJCLElBQThCLENBQUNaLFFBQS9CLEdBQTBDQyxxQkFBcUIsR0FBRyxJQUFsRSxHQUF5RSxFQUFyRztBQUNBLFVBQUlpQixhQUFhLEdBQUdMLFdBQVcsS0FBSyxPQUFoQixHQUEwQkEsV0FBMUIsR0FBd0MsRUFBNUQ7QUFDQSxXQUFLTSxHQUFMLEdBQVcsT0FBTzVCLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJhLFFBQVEsQ0FBQ2dCLGdCQUFULENBQTBCN0IsTUFBMUIsQ0FBN0IsR0FBaUVBLE1BQTVFO0FBQ0EsVUFBSSxFQUFFLFlBQVksS0FBSzRCLEdBQW5CLENBQUosRUFBNkIsS0FBS0EsR0FBTCxHQUFXLENBQUMsS0FBS0EsR0FBTixDQUFYOztBQUU3QixXQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsR0FBTCxDQUFTRyxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN4QyxZQUFJRSxFQUFFLEdBQUcsS0FBS0osR0FBTCxDQUFTRSxDQUFULENBQVQsQ0FEd0MsQ0FDbEI7O0FBRXRCRSxRQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU1osZ0JBQVQsSUFBNkJLLHFCQUE3QjtBQUNBTSxRQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsUUFBVCxHQUFvQlAsYUFBcEI7O0FBRUEsWUFBSUwsV0FBVyxLQUFLLE9BQWhCLElBQTJCSixnQkFBL0IsRUFBaUQ7QUFDL0M7QUFDQSxlQUFLTSxTQUFMLENBQWVXLElBQWYsQ0FBb0IsS0FBS0MsV0FBTCxDQUFpQkosRUFBakIsRUFBcUIsS0FBS3pCLEtBQTFCLENBQXBCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Q7Ozs7Ozs7Ozs7QUFVQSxRQUFJOEIsTUFBTSxHQUFHdEMsVUFBVSxDQUFDdUMsU0FBeEI7O0FBRUFELElBQUFBLE1BQU0sQ0FBQ2QsY0FBUCxHQUF3QixTQUFTQSxjQUFULEdBQTBCO0FBQ2hELFVBQUlnQixVQUFKOztBQUVBLFVBQUksS0FBS2hDLEtBQUwsQ0FBV1ksUUFBZixFQUF5QjtBQUN2Qm9CLFFBQUFBLFVBQVUsR0FBRyxPQUFiO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSUMsTUFBTSxHQUFHLENBQUMsRUFBRCxFQUFLLEtBQUwsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE1BQWpDLENBQWI7QUFDQSxZQUFJQyxJQUFJLEdBQUc1QixRQUFRLENBQUM2QixJQUFULENBQWNULEtBQXpCOztBQUVBLGFBQUssSUFBSUgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1UsTUFBTSxDQUFDVCxNQUEzQixFQUFtQ0QsQ0FBQyxJQUFJLENBQXhDLEVBQTJDO0FBQ3pDVyxVQUFBQSxJQUFJLENBQUNQLFFBQUwsR0FBZ0JNLE1BQU0sQ0FBQ1YsQ0FBRCxDQUFOLEdBQVksUUFBNUI7QUFDRDs7QUFFRFMsUUFBQUEsVUFBVSxHQUFHRSxJQUFJLENBQUNQLFFBQUwsR0FBZ0JPLElBQUksQ0FBQ1AsUUFBckIsR0FBZ0MsT0FBN0M7QUFDQU8sUUFBQUEsSUFBSSxDQUFDUCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0Q7O0FBRUQsYUFBT0ssVUFBUDtBQUNEO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW5CQTs7QUE2Q0FGLElBQUFBLE1BQU0sQ0FBQ0QsV0FBUCxHQUFxQixTQUFTQSxXQUFULENBQXFCSixFQUFyQixFQUF5QnpCLEtBQXpCLEVBQWdDO0FBQ25ELFVBQUlvQyxLQUFLLEdBQUcsSUFBWjs7QUFFQSxVQUFJQyxJQUFJLEdBQUc7QUFDVFosUUFBQUEsRUFBRSxFQUFFQSxFQURLO0FBRVRhLFFBQUFBLE1BQU0sRUFBRWIsRUFBRSxDQUFDYyxVQUZGO0FBR1R2QyxRQUFBQSxLQUFLLEVBQUVBO0FBSEUsT0FBWDtBQUtBLFdBQUt3QyxLQUFMLEdBQWEsS0FBS3hDLEtBQUwsQ0FBV0ssUUFBWCxLQUF3QlAsTUFBckM7QUFDQSxVQUFJMkMsRUFBRSxHQUFHLEtBQUtELEtBQUwsR0FBYTFDLE1BQWIsR0FBc0IsS0FBSzRDLGdCQUFMLENBQXNCTCxJQUFJLENBQUNaLEVBQTNCLEVBQStCWSxJQUFJLENBQUNyQyxLQUFMLENBQVdLLFFBQTFDLENBQS9CO0FBQ0EsV0FBS3NDLG9CQUFMLENBQTBCTixJQUExQjtBQUNBQSxNQUFBQSxJQUFJLENBQUNDLE1BQUwsQ0FBWU0sU0FBWixJQUF5QixNQUFNNUMsS0FBSyxDQUFDSSxXQUFyQztBQUNBaUMsTUFBQUEsSUFBSSxDQUFDUSxLQUFMLEdBQWEsU0FBYjs7QUFFQVIsTUFBQUEsSUFBSSxDQUFDUyxjQUFMLEdBQXNCLFlBQVk7QUFDaEMsZUFBT1YsS0FBSyxDQUFDVyxXQUFOLENBQWtCVixJQUFsQixDQUFQO0FBQ0QsT0FGRDs7QUFJQUksTUFBQUEsRUFBRSxDQUFDTyxnQkFBSCxDQUFvQixRQUFwQixFQUE4QlgsSUFBSSxDQUFDUyxjQUFuQztBQUNBLGFBQU9ULElBQVA7QUFDRDtBQUNEOzs7Ozs7OztBQXJCQTs7QUErQkFQLElBQUFBLE1BQU0sQ0FBQ1ksZ0JBQVAsR0FBMEIsU0FBU0EsZ0JBQVQsQ0FBMEJqQixFQUExQixFQUE4QndCLEtBQTlCLEVBQXFDO0FBQzdEO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHRCxLQUFSO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHMUIsRUFBUjtBQUNBLFVBQUkwQixDQUFDLENBQUNDLGFBQUYsS0FBb0JGLENBQXhCLEVBQTJCLE9BQU9BLENBQVAsQ0FKa0MsQ0FJeEI7O0FBRXJDLGFBQU9DLENBQUMsQ0FBQ0MsYUFBRixLQUFvQkYsQ0FBM0IsRUFBOEI7QUFDNUJDLFFBQUFBLENBQUMsR0FBR0EsQ0FBQyxDQUFDQyxhQUFOO0FBQ0QsT0FSNEQsQ0FRM0Q7OztBQUdGLGFBQU9GLENBQVA7QUFDRDtBQUNEOzs7Ozs7O0FBYkE7O0FBc0JBcEIsSUFBQUEsTUFBTSxDQUFDdUIsY0FBUCxHQUF3QixTQUFTQSxjQUFULENBQXdCNUIsRUFBeEIsRUFBNEI7QUFDbEQsVUFBSSxLQUFLekIsS0FBTCxDQUFXYSx3QkFBZixFQUF5QztBQUN2QyxlQUFPWSxFQUFFLENBQUM2QixxQkFBSCxHQUEyQkMsR0FBM0IsSUFBa0MsS0FBS3ZELEtBQUwsQ0FBV0ssUUFBWCxDQUFvQm1ELFdBQXBCLElBQW1DbEQsUUFBUSxDQUFDbUQsZUFBVCxDQUF5QkMsU0FBOUYsQ0FBUDtBQUNEOztBQUVELFVBQUlDLFdBQVcsR0FBRyxDQUFsQjs7QUFFQSxTQUFHO0FBQ0RBLFFBQUFBLFdBQVcsR0FBR2xDLEVBQUUsQ0FBQ21DLFNBQUgsR0FBZUQsV0FBN0I7QUFDRCxPQUZELFFBRVNsQyxFQUFFLEdBQUdBLEVBQUUsQ0FBQ29DLFlBRmpCOztBQUlBLGFBQU9GLFdBQVA7QUFDRDtBQUNEOzs7Ozs7Ozs7QUFiQTs7QUF3QkE3QixJQUFBQSxNQUFNLENBQUNhLG9CQUFQLEdBQThCLFNBQVNBLG9CQUFULENBQThCTixJQUE5QixFQUFvQztBQUNoRSxVQUFJeUIsRUFBRSxHQUFHekIsSUFBVDtBQUNBLFVBQUlhLENBQUMsR0FBR1ksRUFBRSxDQUFDOUQsS0FBWDtBQUNBLFVBQUl5QixFQUFFLEdBQUdxQyxFQUFFLENBQUNyQyxFQUFaO0FBQ0EsVUFBSWEsTUFBTSxHQUFHd0IsRUFBRSxDQUFDeEIsTUFBaEI7QUFDQSxVQUFJeUIsUUFBUSxHQUFHLENBQUMsS0FBS3ZCLEtBQU4sSUFBZVUsQ0FBQyxDQUFDbkMsV0FBRixLQUFrQixPQUFoRDtBQUNBLFVBQUlpRCxLQUFLLEdBQUdkLENBQUMsQ0FBQ3BDLGdCQUFGLEtBQXVCLFFBQW5DO0FBQ0EsVUFBSW1ELGNBQWMsR0FBR0YsUUFBUSxHQUFHLEtBQUtWLGNBQUwsQ0FBb0JILENBQUMsQ0FBQzdDLFFBQXRCLENBQUgsR0FBcUMsQ0FBbEU7QUFDQSxVQUFJNkQsV0FBVyxHQUFHSCxRQUFRLEdBQUcsS0FBS1YsY0FBTCxDQUFvQmYsTUFBcEIsSUFBOEIyQixjQUFqQyxHQUFrRCxLQUFLWixjQUFMLENBQW9CZixNQUFwQixDQUE1RTtBQUNBLFVBQUk2QixrQkFBa0IsR0FBR2pCLENBQUMsQ0FBQ2pELHdCQUFGLEtBQStCLElBQS9CLEdBQXNDaUQsQ0FBQyxDQUFDakQsd0JBQXhDLEdBQW1Fd0IsRUFBRSxDQUFDMkMsWUFBL0Y7QUFDQSxVQUFJQyxZQUFZLEdBQUdILFdBQVcsR0FBRzVCLE1BQU0sQ0FBQzhCLFlBQXhDO0FBQ0FOLE1BQUFBLEVBQUUsQ0FBQ1EsTUFBSCxHQUFZTCxjQUFjLEdBQUdmLENBQUMsQ0FBQy9DLHFCQUEvQjtBQUNBMkQsTUFBQUEsRUFBRSxDQUFDSSxXQUFILEdBQWlCRixLQUFLLEdBQUdFLFdBQVcsR0FBR0osRUFBRSxDQUFDUSxNQUFwQixHQUE2QixDQUFuRDtBQUNBUixNQUFBQSxFQUFFLENBQUNTLFlBQUgsR0FBa0JULEVBQUUsQ0FBQ0ksV0FBSCxHQUFpQkMsa0JBQW5DO0FBQ0FMLE1BQUFBLEVBQUUsQ0FBQ1UsVUFBSCxHQUFnQlIsS0FBSyxHQUFHSyxZQUFZLElBQUk1QyxFQUFFLENBQUMyQyxZQUFILEdBQWtCTixFQUFFLENBQUNRLE1BQXpCLENBQWYsR0FBa0RELFlBQVksR0FBR3ZFLE1BQU0sQ0FBQzJFLFdBQTdGO0FBQ0Q7QUFDRDs7Ozs7OztBQWhCQTs7QUF5QkEzQyxJQUFBQSxNQUFNLENBQUM0QyxhQUFQLEdBQXVCLFNBQVNBLGFBQVQsQ0FBdUJqRCxFQUF2QixFQUEyQmtELENBQTNCLEVBQThCQyxDQUE5QixFQUFpQztBQUN0RCxVQUFJekIsQ0FBQyxHQUFHMUIsRUFBUjtBQUNBLFVBQUlvRCxNQUFNLEdBQUcxQixDQUFDLENBQUNQLFNBQUYsQ0FBWWtDLEtBQVosQ0FBa0IsR0FBbEIsQ0FBYjtBQUNBLFVBQUlGLENBQUMsSUFBSUMsTUFBTSxDQUFDRSxPQUFQLENBQWVILENBQWYsTUFBc0IsQ0FBQyxDQUFoQyxFQUFtQ0MsTUFBTSxDQUFDakQsSUFBUCxDQUFZZ0QsQ0FBWjtBQUNuQyxVQUFJSSxLQUFLLEdBQUdILE1BQU0sQ0FBQ0UsT0FBUCxDQUFlSixDQUFmLENBQVo7QUFDQSxVQUFJSyxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCSCxNQUFNLENBQUNJLE1BQVAsQ0FBY0QsS0FBZCxFQUFxQixDQUFyQjtBQUNsQjdCLE1BQUFBLENBQUMsQ0FBQ1AsU0FBRixHQUFjaUMsTUFBTSxDQUFDSyxJQUFQLENBQVksR0FBWixDQUFkO0FBQ0Q7QUFDRDs7Ozs7Ozs7QUFSQTs7QUFrQkFwRCxJQUFBQSxNQUFNLENBQUNpQixXQUFQLEdBQXFCLFNBQVNBLFdBQVQsQ0FBcUJWLElBQXJCLEVBQTJCO0FBQzlDO0FBQ0EsVUFBSXlCLEVBQUUsR0FBR3pCLElBQVQ7QUFDQSxVQUFJYyxDQUFDLEdBQUdXLEVBQUUsQ0FBQ3JDLEVBQVg7QUFDQSxVQUFJeUIsQ0FBQyxHQUFHWSxFQUFFLENBQUM5RCxLQUFYO0FBQ0EsVUFBSTZDLEtBQUssR0FBR2lCLEVBQUUsQ0FBQ2pCLEtBQWY7QUFDQSxVQUFJc0MsS0FBSyxHQUFHckIsRUFBRSxDQUFDSSxXQUFmO0FBQ0EsVUFBSWtCLE1BQU0sR0FBR3RCLEVBQUUsQ0FBQ1MsWUFBaEI7QUFDQSxVQUFJYyxJQUFJLEdBQUd2QixFQUFFLENBQUNVLFVBQWQ7QUFDQSxVQUFJYyxHQUFHLEdBQUduQyxDQUFDLENBQUN6QixLQUFaLENBVDhDLENBUzNCOztBQUVuQixVQUFJNkQsRUFBRSxHQUFHckMsQ0FBQyxDQUFDaEQsUUFBWDtBQUNBLFVBQUlzRixFQUFFLEdBQUd0QyxDQUFDLENBQUNuQyxXQUFYO0FBQ0EsVUFBSTBCLEVBQUUsR0FBR1MsQ0FBQyxDQUFDN0MsUUFBWDtBQUNBLFVBQUlvRixNQUFNLEdBQUd2QyxDQUFDLENBQUMxQyxXQUFmO0FBQ0EsVUFBSStELFlBQVksR0FBR3JCLENBQUMsQ0FBQ3hDLGlCQUFyQjtBQUNBLFVBQUlnRixLQUFLLEdBQUd4QyxDQUFDLENBQUN6QyxVQUFkO0FBQ0EsVUFBSWtGLEVBQUUsR0FBR3pDLENBQUMsQ0FBQ3BDLGdCQUFYO0FBQ0EsVUFBSWtELEtBQUssR0FBRzJCLEVBQUUsS0FBSyxRQUFuQjtBQUNBOzs7Ozs7O0FBT0EsVUFBSUMsT0FBTyxHQUFHLFNBQVNDLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ2pDQSxRQUFBQSxDQUFDO0FBQ0YsT0FGRDs7QUFJQSxVQUFJQyxHQUFHLEdBQUcsQ0FBQyxLQUFLdkQsS0FBTixHQUFjb0QsT0FBZCxHQUF3QjlGLE1BQU0sQ0FBQ2tHLHFCQUFQLElBQWdDbEcsTUFBTSxDQUFDbUcsd0JBQXZDLElBQW1FbkcsTUFBTSxDQUFDb0csMkJBQTFFLElBQXlHcEcsTUFBTSxDQUFDcUcsdUJBQWhILElBQTJJUCxPQUE3SztBQUNBOzs7Ozs7Ozs7QUFTQSxVQUFJUSxFQUFFLEdBQUcsS0FBSzFCLGFBQWQ7QUFDQSxVQUFJMkIsTUFBTSxHQUFHLEtBQUs3RCxLQUFMLEdBQWExQyxNQUFNLENBQUN3RyxPQUFQLElBQWtCeEcsTUFBTSxDQUFDMEQsV0FBdEMsR0FBb0RmLEVBQUUsQ0FBQ2lCLFNBQXBFO0FBQ0EsVUFBSTZDLFNBQVMsR0FBR0YsTUFBTSxHQUFHbEIsS0FBVCxJQUFrQmtCLE1BQU0sR0FBR2hCLElBQTNCLEtBQW9DeEMsS0FBSyxLQUFLLFNBQVYsSUFBdUJBLEtBQUssS0FBSyxPQUFyRSxDQUFoQjtBQUNBLFVBQUkyRCxRQUFRLEdBQUd4QyxLQUFLLElBQUlxQyxNQUFNLElBQUlsQixLQUFuQixLQUE2QnRDLEtBQUssS0FBSyxRQUFWLElBQXNCQSxLQUFLLEtBQUssT0FBN0QsQ0FBZjtBQUNBLFVBQUk0RCxPQUFPLEdBQUdKLE1BQU0sSUFBSWhCLElBQVYsSUFBa0J4QyxLQUFLLEtBQUssUUFBMUM7QUFDQTs7Ozs7Ozs7QUFRQSxVQUFJMEQsU0FBSixFQUFlO0FBQ2J6QyxRQUFBQSxFQUFFLENBQUNqQixLQUFILEdBQVcsUUFBWDtBQUNBa0QsUUFBQUEsR0FBRyxDQUFDLFlBQVk7QUFDZEssVUFBQUEsRUFBRSxDQUFDakQsQ0FBRCxFQUFJdUMsS0FBSixFQUFXRCxNQUFYLENBQUY7QUFDQUgsVUFBQUEsR0FBRyxDQUFDM0QsUUFBSixHQUFlNkQsRUFBZjtBQUNBLGNBQUlELEVBQUosRUFBUTtBQUNSRCxVQUFBQSxHQUFHLENBQUNvQixNQUFKLEdBQWEsRUFBYjtBQUNBcEIsVUFBQUEsR0FBRyxDQUFDSyxFQUFELENBQUgsR0FBVXpDLENBQUMsQ0FBQy9DLHFCQUFGLEdBQTBCLElBQXBDO0FBQ0QsU0FORSxDQUFIO0FBT0QsT0FURCxNQVNPLElBQUlxRyxRQUFKLEVBQWM7QUFDbkIxQyxRQUFBQSxFQUFFLENBQUNqQixLQUFILEdBQVcsU0FBWDtBQUNBa0QsUUFBQUEsR0FBRyxDQUFDLFlBQVk7QUFDZEssVUFBQUEsRUFBRSxDQUFDakQsQ0FBRCxFQUFJc0MsTUFBSixDQUFGO0FBQ0FXLFVBQUFBLEVBQUUsQ0FBQ2pELENBQUQsRUFBSXVDLEtBQUosQ0FBRjtBQUNBLGNBQUlGLEVBQUUsS0FBSyxPQUFYLEVBQW9CRixHQUFHLENBQUMzRCxRQUFKLEdBQWUsRUFBZjtBQUNyQixTQUpFLENBQUg7QUFLRCxPQVBNLE1BT0EsSUFBSThFLE9BQUosRUFBYTtBQUNsQjNDLFFBQUFBLEVBQUUsQ0FBQ2pCLEtBQUgsR0FBVyxPQUFYO0FBQ0FrRCxRQUFBQSxHQUFHLENBQUMsWUFBWTtBQUNkSyxVQUFBQSxFQUFFLENBQUNqRCxDQUFELEVBQUlzQyxNQUFKLEVBQVlDLEtBQVosQ0FBRjtBQUNBLGNBQUlGLEVBQUUsS0FBSyxPQUFQLElBQWtCRCxFQUF0QixFQUEwQjtBQUMxQkQsVUFBQUEsR0FBRyxDQUFDL0IsR0FBSixHQUFVLEVBQVY7QUFDQStCLFVBQUFBLEdBQUcsQ0FBQ29CLE1BQUosR0FBYSxHQUFiO0FBQ0FwQixVQUFBQSxHQUFHLENBQUMzRCxRQUFKLEdBQWUsVUFBZjtBQUNELFNBTkUsQ0FBSDtBQU9EOztBQUVELFVBQUlnRixjQUFjLEdBQUdOLE1BQU0sSUFBSWpCLE1BQVYsSUFBb0JpQixNQUFNLElBQUloQixJQUFuRDtBQUNBLFVBQUl1QixpQkFBaUIsR0FBR1AsTUFBTSxHQUFHakIsTUFBTSxHQUFHLENBQWxCLElBQXVCaUIsTUFBTSxHQUFHaEIsSUFBeEQ7QUFDQSxVQUFJd0IsSUFBSSxHQUFHLE1BQVgsQ0FsRjhDLENBa0YzQjs7QUFFbkIsVUFBSUQsaUJBQUosRUFBdUI7QUFDckJiLFFBQUFBLEdBQUcsQ0FBQyxZQUFZO0FBQ2RLLFVBQUFBLEVBQUUsQ0FBQ2pELENBQUQsRUFBSW9CLFlBQUosQ0FBRjtBQUNELFNBRkUsQ0FBSDtBQUdELE9BSkQsTUFJTyxJQUFJb0MsY0FBSixFQUFvQjtBQUN6QlosUUFBQUEsR0FBRyxDQUFDLFlBQVk7QUFDZEssVUFBQUEsRUFBRSxDQUFDakQsQ0FBRCxFQUFJMEQsSUFBSixFQUFVdEMsWUFBVixDQUFGO0FBQ0QsU0FGRSxDQUFIO0FBR0Q7QUFDRixLQTdGRDs7QUErRkF6QyxJQUFBQSxNQUFNLENBQUNnRixNQUFQLEdBQWdCLFNBQVNBLE1BQVQsQ0FBZ0JDLFlBQWhCLEVBQThCO0FBQzVDLFVBQUlBLFlBQVksS0FBSyxLQUFLLENBQTFCLEVBQTZCO0FBQzNCQSxRQUFBQSxZQUFZLEdBQUcsSUFBZjtBQUNEOztBQUVELFdBQUssSUFBSXhGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS04sU0FBTCxDQUFlTyxNQUFuQyxFQUEyQ0QsQ0FBQyxJQUFJLENBQWhELEVBQW1EO0FBQ2pELFlBQUl5RixRQUFRLEdBQUcsS0FBSy9GLFNBQUwsQ0FBZU0sQ0FBZixDQUFmO0FBQ0EsYUFBS29CLG9CQUFMLENBQTBCcUUsUUFBMUI7O0FBRUEsWUFBSUQsWUFBSixFQUFrQjtBQUNoQixlQUFLLElBQUlFLFdBQVQsSUFBd0JGLFlBQXhCLEVBQXNDO0FBQ3BDQyxZQUFBQSxRQUFRLENBQUNoSCxLQUFULENBQWVpSCxXQUFmLElBQThCRixZQUFZLENBQUNFLFdBQUQsQ0FBMUM7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7QUFDRDs7Ozs7QUFsQkE7O0FBeUJBbkYsSUFBQUEsTUFBTSxDQUFDb0YsY0FBUCxHQUF3QixTQUFTQSxjQUFULENBQXdCRixRQUF4QixFQUFrQztBQUN4RCxVQUFJN0QsQ0FBQyxHQUFHNkQsUUFBUSxDQUFDdkYsRUFBakI7QUFDQSxVQUFJeUIsQ0FBQyxHQUFHOEQsUUFBUSxDQUFDaEgsS0FBakI7QUFDQSxVQUFJb0csRUFBRSxHQUFHLEtBQUsxQixhQUFkO0FBQ0F2QixNQUFBQSxDQUFDLENBQUN6QixLQUFGLENBQVFDLFFBQVIsR0FBbUIsRUFBbkI7QUFDQXdCLE1BQUFBLENBQUMsQ0FBQ3pCLEtBQUYsQ0FBUXdCLENBQUMsQ0FBQ3BDLGdCQUFWLElBQThCLEVBQTlCO0FBQ0FzRixNQUFBQSxFQUFFLENBQUNqRCxDQUFELEVBQUlELENBQUMsQ0FBQzFDLFdBQU4sQ0FBRjtBQUNBNEYsTUFBQUEsRUFBRSxDQUFDakQsQ0FBRCxFQUFJRCxDQUFDLENBQUN6QyxVQUFOLENBQUY7QUFDQTJGLE1BQUFBLEVBQUUsQ0FBQ2pELENBQUMsQ0FBQ1osVUFBSCxFQUFlVyxDQUFDLENBQUM5QyxXQUFqQixDQUFGO0FBQ0Q7QUFDRDs7Ozs7O0FBVkE7O0FBa0JBMEIsSUFBQUEsTUFBTSxDQUFDcUYsT0FBUCxHQUFpQixTQUFTQSxPQUFULEdBQW1CO0FBQ2xDLFdBQUssSUFBSTVGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS04sU0FBTCxDQUFlTyxNQUFuQyxFQUEyQ0QsQ0FBQyxJQUFJLENBQWhELEVBQW1EO0FBQ2pELFlBQUl5RixRQUFRLEdBQUcsS0FBSy9GLFNBQUwsQ0FBZU0sQ0FBZixDQUFmO0FBQ0F5RixRQUFBQSxRQUFRLENBQUNoSCxLQUFULENBQWVLLFFBQWYsQ0FBd0IrRyxtQkFBeEIsQ0FBNEMsUUFBNUMsRUFBc0RKLFFBQVEsQ0FBQ2xFLGNBQS9EO0FBQ0EsYUFBS29FLGNBQUwsQ0FBb0JGLFFBQXBCO0FBQ0Q7O0FBRUQsV0FBS2pFLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxXQUFLOUIsU0FBTCxHQUFpQixFQUFqQjtBQUNELEtBVEQ7O0FBV0EsV0FBT3pCLFVBQVA7QUFDRCxHQTFYRCxFQUZBO0FBNlhBOzs7Ozs7O0FBT0EsV0FBU0QsVUFBVCxDQUFvQkUsTUFBcEIsRUFBNEJFLENBQTVCLEVBQStCO0FBQzdCLFdBQU8sSUFBSUgsVUFBSixDQUFlQyxNQUFmLEVBQXVCRSxDQUF2QixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0osVUFBUDtBQUVELENBdmNBLENBQUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgc3RpY2t5Yml0cyAtIFN0aWNreWJpdHMgaXMgYSBsaWdodHdlaWdodCBhbHRlcm5hdGl2ZSB0byBgcG9zaXRpb246IHN0aWNreWAgcG9seWZpbGxzXG4gIEB2ZXJzaW9uIHYzLjYuNVxuICBAbGluayBodHRwczovL2dpdGh1Yi5jb20vZG9sbGFyc2hhdmVjbHViL3N0aWNreWJpdHMjcmVhZG1lXG4gIEBhdXRob3IgSmVmZiBXYWlud3JpZ2h0IDx5b3dhaW53cmlnaHRAZ21haWwuY29tPiAoaHR0cHM6Ly9qZWZmcnkuaW4pXG4gIEBsaWNlbnNlIE1JVFxuKiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLnN0aWNreWJpdHMgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAvKlxuICAgIFNUSUNLWUJJVFMg8J+SiVxuICAgIC0tLS0tLS0tXG4gICAgPiBhIGxpZ2h0d2VpZ2h0IGFsdGVybmF0aXZlIHRvIGBwb3NpdGlvbjogc3RpY2t5YCBwb2x5ZmlsbHMg8J+NrFxuICAgIC0tLS0tLS0tXG4gICAgLSBlYWNoIG1ldGhvZCBpcyBkb2N1bWVudGVkIGFib3ZlIGl0IG91ciB2aWV3IHRoZSByZWFkbWVcbiAgICAtIFN0aWNreWJpdHMgZG9lcyBub3QgbWFuYWdlIHBvbHltb3JwaGljIGZ1bmN0aW9uYWxpdHkgKHBvc2l0aW9uIGxpa2UgcHJvcGVydGllcylcbiAgICAqIHBvbHltb3JwaGljIGZ1bmN0aW9uYWxpdHk6IChpbiB0aGUgY29udGV4dCBvZiBkZXNjcmliaW5nIFN0aWNreWJpdHMpXG4gICAgICBtZWFucyBtYWtpbmcgdGhpbmdzIGxpa2UgYHBvc2l0aW9uOiBzdGlja3lgIGJlIGxvb3NlbHkgc3VwcG9ydGVkIHdpdGggcG9zaXRpb24gZml4ZWQuXG4gICAgICBJdCBhbHNvIG1lYW5zIHRoYXQgZmVhdHVyZXMgbGlrZSBgdXNlU3RpY2t5Q2xhc3Nlc2AgdGFrZXMgb24gc3R5bGVzIGxpa2UgYHBvc2l0aW9uOiBmaXhlZGAuXG4gICAgLS0tLS0tLS1cbiAgICBkZWZhdWx0cyDwn5SMXG4gICAgLS0tLS0tLS1cbiAgICAtIHZlcnNpb24gPSBgcGFja2FnZS5qc29uYCB2ZXJzaW9uXG4gICAgLSB1c2VyQWdlbnQgPSB2aWV3ZXIgYnJvd3NlciBhZ2VudFxuICAgIC0gdGFyZ2V0ID0gRE9NIGVsZW1lbnQgc2VsZWN0b3JcbiAgICAtIG5vU3R5bGVzID0gYm9vbGVhblxuICAgIC0gb2Zmc2V0ID0gbnVtYmVyXG4gICAgLSBwYXJlbnRDbGFzcyA9ICdzdHJpbmcnXG4gICAgLSBzY3JvbGxFbCA9IHdpbmRvdyB8fCBET00gZWxlbWVudCBzZWxlY3RvciB8fCBET00gZWxlbWVudFxuICAgIC0gc3RpY2t5Q2xhc3MgPSAnc3RyaW5nJ1xuICAgIC0gc3R1Y2tDbGFzcyA9ICdzdHJpbmcnXG4gICAgLSB1c2VTdGlja3lDbGFzc2VzID0gYm9vbGVhblxuICAgIC0gdXNlRml4ZWQgPSBib29sZWFuXG4gICAgLSB1c2VHZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBib29sZWFuXG4gICAgLSB2ZXJ0aWNhbFBvc2l0aW9uID0gJ3N0cmluZydcbiAgICAtLS0tLS0tLVxuICAgIHByb3Bz8J+UjFxuICAgIC0tLS0tLS0tXG4gICAgLSBwID0gcHJvcHMge29iamVjdH1cbiAgICAtLS0tLS0tLVxuICAgIGluc3RhbmNlIG5vdGVcbiAgICAtLS0tLS0tLVxuICAgIC0gc3RpY2t5Yml0cyBwYXJlbnQgbWV0aG9kcyByZXR1cm4gdGhpc1xuICAgIC0gc3RpY2t5Yml0cyBpbnN0YW5jZSBtZXRob2RzIHJldHVybiBhbiBpbnN0YW5jZSBpdGVtXG4gICAgLS0tLS0tLS1cbiAgICBub21lbmNsYXR1cmVcbiAgICAtLS0tLS0tLVxuICAgIC0gdGFyZ2V0ID0+IGVsID0+IGVcbiAgICAtIHByb3BzID0+IG8gfHwgcFxuICAgIC0gaW5zdGFuY2UgPT4gaXRlbSA9PiBpdFxuICAgIC0tLS0tLS0tXG4gICAgbWV0aG9kc1xuICAgIC0tLS0tLS0tXG4gICAgLSAuZGVmaW5lUG9zaXRpb24gPSBkZWZpbmVzIHN0aWNreSBvciBmaXhlZFxuICAgIC0gLmFkZEluc3RhbmNlID0gYW4gYXJyYXkgb2Ygb2JqZWN0cyBmb3IgZWFjaCBTdGlja3liaXRzIFRhcmdldFxuICAgIC0gLmdldENsb3Nlc3RQYXJlbnQgPSBnZXRzIHRoZSBwYXJlbnQgZm9yIG5vbi13aW5kb3cgc2Nyb2xsXG4gICAgLSAuZ2V0VG9wUG9zaXRpb24gPSBnZXRzIHRoZSBlbGVtZW50IHRvcCBwaXhlbCBwb3NpdGlvbiBmcm9tIHRoZSB2aWV3cG9ydFxuICAgIC0gLmNvbXB1dGVTY3JvbGxPZmZzZXRzID0gY29tcHV0ZXMgc2Nyb2xsIHBvc2l0aW9uXG4gICAgLSAudG9nZ2xlQ2xhc3NlcyA9IG9sZGVyIGJyb3dzZXIgdG9nZ2xlclxuICAgIC0gLm1hbmFnZVN0YXRlID0gbWFuYWdlcyBzdGlja3kgc3RhdGVcbiAgICAtIC5yZW1vdmVDbGFzcyA9IG9sZGVyIGJyb3dzZXIgc3VwcG9ydCBjbGFzcyByZW1vdmVyXG4gICAgLSAucmVtb3ZlSW5zdGFuY2UgPSByZW1vdmVzIGFuIGluc3RhbmNlXG4gICAgLSAuY2xlYW51cCA9IHJlbW92ZXMgYWxsIFN0aWNreWJpdHMgaW5zdGFuY2VzIGFuZCBjbGVhbnMgdXAgZG9tIGZyb20gc3RpY2t5Yml0c1xuICAqL1xuICB2YXIgU3RpY2t5Yml0cyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0aWNreWJpdHModGFyZ2V0LCBvYmopIHtcbiAgICAgIHZhciBvID0gdHlwZW9mIG9iaiAhPT0gJ3VuZGVmaW5lZCcgPyBvYmogOiB7fTtcbiAgICAgIHRoaXMudmVyc2lvbiA9ICczLjYuNSc7XG4gICAgICB0aGlzLnVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICdubyBgdXNlckFnZW50YCBwcm92aWRlZCBieSB0aGUgYnJvd3Nlcic7XG4gICAgICB0aGlzLnByb3BzID0ge1xuICAgICAgICBjdXN0b21TdGlja3lDaGFuZ2VOdW1iZXI6IG8uY3VzdG9tU3RpY2t5Q2hhbmdlTnVtYmVyIHx8IG51bGwsXG4gICAgICAgIG5vU3R5bGVzOiBvLm5vU3R5bGVzIHx8IGZhbHNlLFxuICAgICAgICBzdGlja3lCaXRTdGlja3lPZmZzZXQ6IG8uc3RpY2t5Qml0U3RpY2t5T2Zmc2V0IHx8IDAsXG4gICAgICAgIHBhcmVudENsYXNzOiBvLnBhcmVudENsYXNzIHx8ICdqcy1zdGlja3liaXQtcGFyZW50JyxcbiAgICAgICAgc2Nyb2xsRWw6IHR5cGVvZiBvLnNjcm9sbEVsID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioby5zY3JvbGxFbCkgOiBvLnNjcm9sbEVsIHx8IHdpbmRvdyxcbiAgICAgICAgc3RpY2t5Q2xhc3M6IG8uc3RpY2t5Q2xhc3MgfHwgJ2pzLWlzLXN0aWNreScsXG4gICAgICAgIHN0dWNrQ2xhc3M6IG8uc3R1Y2tDbGFzcyB8fCAnanMtaXMtc3R1Y2snLFxuICAgICAgICBzdGlja3lDaGFuZ2VDbGFzczogby5zdGlja3lDaGFuZ2VDbGFzcyB8fCAnanMtaXMtc3RpY2t5LS1jaGFuZ2UnLFxuICAgICAgICB1c2VTdGlja3lDbGFzc2VzOiBvLnVzZVN0aWNreUNsYXNzZXMgfHwgZmFsc2UsXG4gICAgICAgIHVzZUZpeGVkOiBvLnVzZUZpeGVkIHx8IGZhbHNlLFxuICAgICAgICB1c2VHZXRCb3VuZGluZ0NsaWVudFJlY3Q6IG8udXNlR2V0Qm91bmRpbmdDbGllbnRSZWN0IHx8IGZhbHNlLFxuICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiBvLnZlcnRpY2FsUG9zaXRpb24gfHwgJ3RvcCdcbiAgICAgICAgLypcbiAgICAgICAgICBkZWZpbmUgcG9zaXRpb25WYWxcbiAgICAgICAgICAtLS0tXG4gICAgICAgICAgLSAgdXNlcyBhIGNvbXB1dGVkIChgLmRlZmluZVBvc2l0aW9uKClgKVxuICAgICAgICAgIC0gIGRlZmluZWQgdGhlIHBvc2l0aW9uXG4gICAgICAgICovXG5cbiAgICAgIH07XG4gICAgICB0aGlzLnByb3BzLnBvc2l0aW9uVmFsID0gdGhpcy5kZWZpbmVQb3NpdGlvbigpIHx8ICdmaXhlZCc7XG4gICAgICB0aGlzLmluc3RhbmNlcyA9IFtdO1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwb3NpdGlvblZhbCA9IF90aGlzJHByb3BzLnBvc2l0aW9uVmFsLFxuICAgICAgICAgIHZlcnRpY2FsUG9zaXRpb24gPSBfdGhpcyRwcm9wcy52ZXJ0aWNhbFBvc2l0aW9uLFxuICAgICAgICAgIG5vU3R5bGVzID0gX3RoaXMkcHJvcHMubm9TdHlsZXMsXG4gICAgICAgICAgc3RpY2t5Qml0U3RpY2t5T2Zmc2V0ID0gX3RoaXMkcHJvcHMuc3RpY2t5Qml0U3RpY2t5T2Zmc2V0LFxuICAgICAgICAgIHVzZVN0aWNreUNsYXNzZXMgPSBfdGhpcyRwcm9wcy51c2VTdGlja3lDbGFzc2VzO1xuICAgICAgdmFyIHZlcnRpY2FsUG9zaXRpb25TdHlsZSA9IHZlcnRpY2FsUG9zaXRpb24gPT09ICd0b3AnICYmICFub1N0eWxlcyA/IHN0aWNreUJpdFN0aWNreU9mZnNldCArIFwicHhcIiA6ICcnO1xuICAgICAgdmFyIHBvc2l0aW9uU3R5bGUgPSBwb3NpdGlvblZhbCAhPT0gJ2ZpeGVkJyA/IHBvc2l0aW9uVmFsIDogJyc7XG4gICAgICB0aGlzLmVscyA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpIDogdGFyZ2V0O1xuICAgICAgaWYgKCEoJ2xlbmd0aCcgaW4gdGhpcy5lbHMpKSB0aGlzLmVscyA9IFt0aGlzLmVsc107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsID0gdGhpcy5lbHNbaV07IC8vIHNldCB2ZXJ0aWNhbCBwb3NpdGlvblxuXG4gICAgICAgIGVsLnN0eWxlW3ZlcnRpY2FsUG9zaXRpb25dID0gdmVydGljYWxQb3NpdGlvblN0eWxlO1xuICAgICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9IHBvc2l0aW9uU3R5bGU7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uVmFsID09PSAnZml4ZWQnIHx8IHVzZVN0aWNreUNsYXNzZXMpIHtcbiAgICAgICAgICAvLyBpbnN0YW5jZXMgYXJlIGFuIGFycmF5IG9mIG9iamVjdHNcbiAgICAgICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKHRoaXMuYWRkSW5zdGFuY2UoZWwsIHRoaXMucHJvcHMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKlxuICAgICAgc2V0U3RpY2t5UG9zaXRpb24g4pyU77iPXG4gICAgICAtLS0tLS0tLVxuICAgICAg4oCUICBtb3N0IGJhc2ljIHRoaW5nIHN0aWNreWJpdHMgZG9lc1xuICAgICAgPT4gY2hlY2tzIHRvIHNlZSBpZiBwb3NpdGlvbiBzdGlja3kgaXMgc3VwcG9ydGVkXG4gICAgICA9PiBkZWZpbmVkIHRoZSBwb3NpdGlvbiB0byBiZSB1c2VkXG4gICAgICA9PiBzdGlja3liaXRzIHdvcmtzIGFjY29yZGluZ2x5XG4gICAgKi9cblxuXG4gICAgdmFyIF9wcm90byA9IFN0aWNreWJpdHMucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLmRlZmluZVBvc2l0aW9uID0gZnVuY3Rpb24gZGVmaW5lUG9zaXRpb24oKSB7XG4gICAgICB2YXIgc3RpY2t5UHJvcDtcblxuICAgICAgaWYgKHRoaXMucHJvcHMudXNlRml4ZWQpIHtcbiAgICAgICAgc3RpY2t5UHJvcCA9ICdmaXhlZCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJlZml4ID0gWycnLCAnLW8tJywgJy13ZWJraXQtJywgJy1tb3otJywgJy1tcy0nXTtcbiAgICAgICAgdmFyIHRlc3QgPSBkb2N1bWVudC5oZWFkLnN0eWxlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdGVzdC5wb3NpdGlvbiA9IHByZWZpeFtpXSArIFwic3RpY2t5XCI7XG4gICAgICAgIH1cblxuICAgICAgICBzdGlja3lQcm9wID0gdGVzdC5wb3NpdGlvbiA/IHRlc3QucG9zaXRpb24gOiAnZml4ZWQnO1xuICAgICAgICB0ZXN0LnBvc2l0aW9uID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGlja3lQcm9wO1xuICAgIH1cbiAgICAvKlxuICAgICAgYWRkSW5zdGFuY2Ug4pyU77iPXG4gICAgICAtLS0tLS0tLVxuICAgICAg4oCUIG1hbmFnZXMgaW5zdGFuY2VzIG9mIGl0ZW1zXG4gICAgICAtIHRha2VzIGluIGFuIGVsIGFuZCBwcm9wc1xuICAgICAgLSByZXR1cm5zIGFuIGl0ZW0gb2JqZWN0XG4gICAgICAtLS1cbiAgICAgIC0gdGFyZ2V0ID0gZWxcbiAgICAgIC0gbyA9IHtvYmplY3R9ID0gcHJvcHNcbiAgICAgICAgLSBzY3JvbGxFbCA9ICdzdHJpbmcnIHwgb2JqZWN0XG4gICAgICAgIC0gdmVydGljYWxQb3NpdGlvbiA9IG51bWJlclxuICAgICAgICAtIG9mZiA9IGJvb2xlYW5cbiAgICAgICAgLSBwYXJlbnRDbGFzcyA9ICdzdHJpbmcnXG4gICAgICAgIC0gc3RpY2t5Q2xhc3MgPSAnc3RyaW5nJ1xuICAgICAgICAtIHN0dWNrQ2xhc3MgPSAnc3RyaW5nJ1xuICAgICAgLS0tXG4gICAgICAtIGRlZmluZWQgbGF0ZXJcbiAgICAgICAgLSBwYXJlbnQgPSBkb20gZWxlbWVudFxuICAgICAgICAtIHN0YXRlID0gJ3N0cmluZydcbiAgICAgICAgLSBvZmZzZXQgPSBudW1iZXJcbiAgICAgICAgLSBzdGlja3lTdGFydCA9IG51bWJlclxuICAgICAgICAtIHN0aWNreVN0b3AgPSBudW1iZXJcbiAgICAgIC0gcmV0dXJucyBhbiBpbnN0YW5jZSBvYmplY3RcbiAgICAqL1xuICAgIDtcblxuICAgIF9wcm90by5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uIGFkZEluc3RhbmNlKGVsLCBwcm9wcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgIGVsOiBlbCxcbiAgICAgICAgcGFyZW50OiBlbC5wYXJlbnROb2RlLFxuICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgIH07XG4gICAgICB0aGlzLmlzV2luID0gdGhpcy5wcm9wcy5zY3JvbGxFbCA9PT0gd2luZG93O1xuICAgICAgdmFyIHNlID0gdGhpcy5pc1dpbiA/IHdpbmRvdyA6IHRoaXMuZ2V0Q2xvc2VzdFBhcmVudChpdGVtLmVsLCBpdGVtLnByb3BzLnNjcm9sbEVsKTtcbiAgICAgIHRoaXMuY29tcHV0ZVNjcm9sbE9mZnNldHMoaXRlbSk7XG4gICAgICBpdGVtLnBhcmVudC5jbGFzc05hbWUgKz0gXCIgXCIgKyBwcm9wcy5wYXJlbnRDbGFzcztcbiAgICAgIGl0ZW0uc3RhdGUgPSAnZGVmYXVsdCc7XG5cbiAgICAgIGl0ZW0uc3RhdGVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5tYW5hZ2VTdGF0ZShpdGVtKTtcbiAgICAgIH07XG5cbiAgICAgIHNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGl0ZW0uc3RhdGVDb250YWluZXIpO1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIC8qXG4gICAgICAtLS0tLS0tLVxuICAgICAgZ2V0UGFyZW50IPCfkajigI1cbiAgICAgIC0tLS0tLS0tXG4gICAgICAtIGEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0aGUgdGFyZ2V0IGVsZW1lbnQncyBwYXJlbnQgc2VsZWN0ZWQgZWxcbiAgICAgIC0gb25seSB1c2VkIGZvciBub24gYHdpbmRvd2Agc2Nyb2xsIGVsZW1lbnRzXG4gICAgICAtIHN1cHBvcnRzIG9sZGVyIGJyb3dzZXJzXG4gICAgKi9cbiAgICA7XG5cbiAgICBfcHJvdG8uZ2V0Q2xvc2VzdFBhcmVudCA9IGZ1bmN0aW9uIGdldENsb3Nlc3RQYXJlbnQoZWwsIG1hdGNoKSB7XG4gICAgICAvLyBwID0gcGFyZW50IGVsZW1lbnRcbiAgICAgIHZhciBwID0gbWF0Y2g7XG4gICAgICB2YXIgZSA9IGVsO1xuICAgICAgaWYgKGUucGFyZW50RWxlbWVudCA9PT0gcCkgcmV0dXJuIHA7IC8vIHRyYXZlcnNlIHVwIHRoZSBkb20gdHJlZSB1bnRpbCB3ZSBnZXQgdG8gdGhlIHBhcmVudFxuXG4gICAgICB3aGlsZSAoZS5wYXJlbnRFbGVtZW50ICE9PSBwKSB7XG4gICAgICAgIGUgPSBlLnBhcmVudEVsZW1lbnQ7XG4gICAgICB9IC8vIHJldHVybiBwYXJlbnQgZWxlbWVudFxuXG5cbiAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgICAvKlxuICAgICAgLS0tLS0tLS1cbiAgICAgIGdldFRvcFBvc2l0aW9uXG4gICAgICAtLS0tLS0tLVxuICAgICAgLSBhIGhlbHBlciBmdW5jdGlvbiB0aGF0IGdldHMgdGhlIHRvcFBvc2l0aW9uIG9mIGEgU3RpY2t5Yml0IGVsZW1lbnRcbiAgICAgIC0gZnJvbSB0aGUgdG9wIGxldmVsIG9mIHRoZSBET01cbiAgICAqL1xuICAgIDtcblxuICAgIF9wcm90by5nZXRUb3BQb3NpdGlvbiA9IGZ1bmN0aW9uIGdldFRvcFBvc2l0aW9uKGVsKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy51c2VHZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgcmV0dXJuIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArICh0aGlzLnByb3BzLnNjcm9sbEVsLnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG9wUG9zaXRpb24gPSAwO1xuXG4gICAgICBkbyB7XG4gICAgICAgIHRvcFBvc2l0aW9uID0gZWwub2Zmc2V0VG9wICsgdG9wUG9zaXRpb247XG4gICAgICB9IHdoaWxlIChlbCA9IGVsLm9mZnNldFBhcmVudCk7XG5cbiAgICAgIHJldHVybiB0b3BQb3NpdGlvbjtcbiAgICB9XG4gICAgLypcbiAgICAgIGNvbXB1dGVTY3JvbGxPZmZzZXRzIPCfk4pcbiAgICAgIC0tLVxuICAgICAgY29tcHV0ZVNjcm9sbE9mZnNldHMgZm9yIFN0aWNreWJpdHNcbiAgICAgIC0gZGVmaW5lc1xuICAgICAgICAtIG9mZnNldFxuICAgICAgICAtIHN0YXJ0XG4gICAgICAgIC0gc3RvcFxuICAgICovXG4gICAgO1xuXG4gICAgX3Byb3RvLmNvbXB1dGVTY3JvbGxPZmZzZXRzID0gZnVuY3Rpb24gY29tcHV0ZVNjcm9sbE9mZnNldHMoaXRlbSkge1xuICAgICAgdmFyIGl0ID0gaXRlbTtcbiAgICAgIHZhciBwID0gaXQucHJvcHM7XG4gICAgICB2YXIgZWwgPSBpdC5lbDtcbiAgICAgIHZhciBwYXJlbnQgPSBpdC5wYXJlbnQ7XG4gICAgICB2YXIgaXNDdXN0b20gPSAhdGhpcy5pc1dpbiAmJiBwLnBvc2l0aW9uVmFsID09PSAnZml4ZWQnO1xuICAgICAgdmFyIGlzVG9wID0gcC52ZXJ0aWNhbFBvc2l0aW9uICE9PSAnYm90dG9tJztcbiAgICAgIHZhciBzY3JvbGxFbE9mZnNldCA9IGlzQ3VzdG9tID8gdGhpcy5nZXRUb3BQb3NpdGlvbihwLnNjcm9sbEVsKSA6IDA7XG4gICAgICB2YXIgc3RpY2t5U3RhcnQgPSBpc0N1c3RvbSA/IHRoaXMuZ2V0VG9wUG9zaXRpb24ocGFyZW50KSAtIHNjcm9sbEVsT2Zmc2V0IDogdGhpcy5nZXRUb3BQb3NpdGlvbihwYXJlbnQpO1xuICAgICAgdmFyIHN0aWNreUNoYW5nZU9mZnNldCA9IHAuY3VzdG9tU3RpY2t5Q2hhbmdlTnVtYmVyICE9PSBudWxsID8gcC5jdXN0b21TdGlja3lDaGFuZ2VOdW1iZXIgOiBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgcGFyZW50Qm90dG9tID0gc3RpY2t5U3RhcnQgKyBwYXJlbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgaXQub2Zmc2V0ID0gc2Nyb2xsRWxPZmZzZXQgKyBwLnN0aWNreUJpdFN0aWNreU9mZnNldDtcbiAgICAgIGl0LnN0aWNreVN0YXJ0ID0gaXNUb3AgPyBzdGlja3lTdGFydCAtIGl0Lm9mZnNldCA6IDA7XG4gICAgICBpdC5zdGlja3lDaGFuZ2UgPSBpdC5zdGlja3lTdGFydCArIHN0aWNreUNoYW5nZU9mZnNldDtcbiAgICAgIGl0LnN0aWNreVN0b3AgPSBpc1RvcCA/IHBhcmVudEJvdHRvbSAtIChlbC5vZmZzZXRIZWlnaHQgKyBpdC5vZmZzZXQpIDogcGFyZW50Qm90dG9tIC0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICAvKlxuICAgICAgdG9nZ2xlQ2xhc3NlcyDimpbvuI9cbiAgICAgIC0tLVxuICAgICAgdG9nZ2xlcyBjbGFzc2VzIChmb3Igb2xkZXIgYnJvd3NlciBzdXBwb3J0KVxuICAgICAgciA9IHJlbW92ZWQgY2xhc3NcbiAgICAgIGEgPSBhZGRlZCBjbGFzc1xuICAgICovXG4gICAgO1xuXG4gICAgX3Byb3RvLnRvZ2dsZUNsYXNzZXMgPSBmdW5jdGlvbiB0b2dnbGVDbGFzc2VzKGVsLCByLCBhKSB7XG4gICAgICB2YXIgZSA9IGVsO1xuICAgICAgdmFyIGNBcnJheSA9IGUuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICBpZiAoYSAmJiBjQXJyYXkuaW5kZXhPZihhKSA9PT0gLTEpIGNBcnJheS5wdXNoKGEpO1xuICAgICAgdmFyIHJJdGVtID0gY0FycmF5LmluZGV4T2Yocik7XG4gICAgICBpZiAockl0ZW0gIT09IC0xKSBjQXJyYXkuc3BsaWNlKHJJdGVtLCAxKTtcbiAgICAgIGUuY2xhc3NOYW1lID0gY0FycmF5LmpvaW4oJyAnKTtcbiAgICB9XG4gICAgLypcbiAgICAgIG1hbmFnZVN0YXRlIPCfk51cbiAgICAgIC0tLVxuICAgICAgLSBkZWZpbmVzIHRoZSBzdGF0ZVxuICAgICAgICAtIG5vcm1hbFxuICAgICAgICAtIHN0aWNreVxuICAgICAgICAtIHN0dWNrXG4gICAgKi9cbiAgICA7XG5cbiAgICBfcHJvdG8ubWFuYWdlU3RhdGUgPSBmdW5jdGlvbiBtYW5hZ2VTdGF0ZShpdGVtKSB7XG4gICAgICAvLyBjYWNoZSBvYmplY3RcbiAgICAgIHZhciBpdCA9IGl0ZW07XG4gICAgICB2YXIgZSA9IGl0LmVsO1xuICAgICAgdmFyIHAgPSBpdC5wcm9wcztcbiAgICAgIHZhciBzdGF0ZSA9IGl0LnN0YXRlO1xuICAgICAgdmFyIHN0YXJ0ID0gaXQuc3RpY2t5U3RhcnQ7XG4gICAgICB2YXIgY2hhbmdlID0gaXQuc3RpY2t5Q2hhbmdlO1xuICAgICAgdmFyIHN0b3AgPSBpdC5zdGlja3lTdG9wO1xuICAgICAgdmFyIHN0bCA9IGUuc3R5bGU7IC8vIGNhY2hlIHByb3BzXG5cbiAgICAgIHZhciBucyA9IHAubm9TdHlsZXM7XG4gICAgICB2YXIgcHYgPSBwLnBvc2l0aW9uVmFsO1xuICAgICAgdmFyIHNlID0gcC5zY3JvbGxFbDtcbiAgICAgIHZhciBzdGlja3kgPSBwLnN0aWNreUNsYXNzO1xuICAgICAgdmFyIHN0aWNreUNoYW5nZSA9IHAuc3RpY2t5Q2hhbmdlQ2xhc3M7XG4gICAgICB2YXIgc3R1Y2sgPSBwLnN0dWNrQ2xhc3M7XG4gICAgICB2YXIgdnAgPSBwLnZlcnRpY2FsUG9zaXRpb247XG4gICAgICB2YXIgaXNUb3AgPSB2cCAhPT0gJ2JvdHRvbSc7XG4gICAgICAvKlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgLS0tXG4gICAgICAgIC0gdXNlIHJBRlxuICAgICAgICAtIG9yIHN0dWIgckFGXG4gICAgICAqL1xuXG4gICAgICB2YXIgckFGU3R1YiA9IGZ1bmN0aW9uIHJBRkR1bW15KGYpIHtcbiAgICAgICAgZigpO1xuICAgICAgfTtcblxuICAgICAgdmFyIHJBRiA9ICF0aGlzLmlzV2luID8gckFGU3R1YiA6IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByQUZTdHViO1xuICAgICAgLypcbiAgICAgICAgZGVmaW5lIHNjcm9sbCB2YXJzXG4gICAgICAgIC0tLVxuICAgICAgICAtIHNjcm9sbFxuICAgICAgICAtIG5vdFN0aWNreVxuICAgICAgICAtIGlzU3RpY2t5XG4gICAgICAgIC0gaXNTdHVja1xuICAgICAgKi9cblxuICAgICAgdmFyIHRDID0gdGhpcy50b2dnbGVDbGFzc2VzO1xuICAgICAgdmFyIHNjcm9sbCA9IHRoaXMuaXNXaW4gPyB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQgOiBzZS5zY3JvbGxUb3A7XG4gICAgICB2YXIgbm90U3RpY2t5ID0gc2Nyb2xsID4gc3RhcnQgJiYgc2Nyb2xsIDwgc3RvcCAmJiAoc3RhdGUgPT09ICdkZWZhdWx0JyB8fCBzdGF0ZSA9PT0gJ3N0dWNrJyk7XG4gICAgICB2YXIgaXNTdGlja3kgPSBpc1RvcCAmJiBzY3JvbGwgPD0gc3RhcnQgJiYgKHN0YXRlID09PSAnc3RpY2t5JyB8fCBzdGF0ZSA9PT0gJ3N0dWNrJyk7XG4gICAgICB2YXIgaXNTdHVjayA9IHNjcm9sbCA+PSBzdG9wICYmIHN0YXRlID09PSAnc3RpY2t5JztcbiAgICAgIC8qXG4gICAgICAgIFVubmFtZWQgYXJyb3cgZnVuY3Rpb25zIHdpdGhpbiB0aGlzIGJsb2NrXG4gICAgICAgIC0tLVxuICAgICAgICAtIGhlbHAgd2FudGVkIG9yIGRpc2N1c3Npb25cbiAgICAgICAgLSB2aWV3IHRlc3Quc3RpY2t5Yml0cy5qc1xuICAgICAgICAgIC0gYHN0aWNreWJpdHMgLm1hbmFnZVN0YXRlICBgcG9zaXRpb246IGZpeGVkYCBpbnRlcmZhY2VgIGZvciBtb3JlIGF3YXJlbmVzcyDwn5GAXG4gICAgICAqL1xuXG4gICAgICBpZiAobm90U3RpY2t5KSB7XG4gICAgICAgIGl0LnN0YXRlID0gJ3N0aWNreSc7XG4gICAgICAgIHJBRihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdEMoZSwgc3R1Y2ssIHN0aWNreSk7XG4gICAgICAgICAgc3RsLnBvc2l0aW9uID0gcHY7XG4gICAgICAgICAgaWYgKG5zKSByZXR1cm47XG4gICAgICAgICAgc3RsLmJvdHRvbSA9ICcnO1xuICAgICAgICAgIHN0bFt2cF0gPSBwLnN0aWNreUJpdFN0aWNreU9mZnNldCArIFwicHhcIjtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGlzU3RpY2t5KSB7XG4gICAgICAgIGl0LnN0YXRlID0gJ2RlZmF1bHQnO1xuICAgICAgICByQUYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRDKGUsIHN0aWNreSk7XG4gICAgICAgICAgdEMoZSwgc3R1Y2spO1xuICAgICAgICAgIGlmIChwdiA9PT0gJ2ZpeGVkJykgc3RsLnBvc2l0aW9uID0gJyc7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc1N0dWNrKSB7XG4gICAgICAgIGl0LnN0YXRlID0gJ3N0dWNrJztcbiAgICAgICAgckFGKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0QyhlLCBzdGlja3ksIHN0dWNrKTtcbiAgICAgICAgICBpZiAocHYgIT09ICdmaXhlZCcgfHwgbnMpIHJldHVybjtcbiAgICAgICAgICBzdGwudG9wID0gJyc7XG4gICAgICAgICAgc3RsLmJvdHRvbSA9ICcwJztcbiAgICAgICAgICBzdGwucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzU3RpY2t5Q2hhbmdlID0gc2Nyb2xsID49IGNoYW5nZSAmJiBzY3JvbGwgPD0gc3RvcDtcbiAgICAgIHZhciBpc05vdFN0aWNreUNoYW5nZSA9IHNjcm9sbCA8IGNoYW5nZSAvIDIgfHwgc2Nyb2xsID4gc3RvcDtcbiAgICAgIHZhciBzdHViID0gJ3N0dWInOyAvLyBhIHN0dWIgY3NzIGNsYXNzIHRvIHJlbW92ZVxuXG4gICAgICBpZiAoaXNOb3RTdGlja3lDaGFuZ2UpIHtcbiAgICAgICAgckFGKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0QyhlLCBzdGlja3lDaGFuZ2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTdGlja3lDaGFuZ2UpIHtcbiAgICAgICAgckFGKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0QyhlLCBzdHViLCBzdGlja3lDaGFuZ2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSh1cGRhdGVkUHJvcHMpIHtcbiAgICAgIGlmICh1cGRhdGVkUHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICB1cGRhdGVkUHJvcHMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaW5zdGFuY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW2ldO1xuICAgICAgICB0aGlzLmNvbXB1dGVTY3JvbGxPZmZzZXRzKGluc3RhbmNlKTtcblxuICAgICAgICBpZiAodXBkYXRlZFByb3BzKSB7XG4gICAgICAgICAgZm9yICh2YXIgdXBkYXRlZFByb3AgaW4gdXBkYXRlZFByb3BzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5wcm9wc1t1cGRhdGVkUHJvcF0gPSB1cGRhdGVkUHJvcHNbdXBkYXRlZFByb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLypcbiAgICAgIHJlbW92ZXMgYW4gaW5zdGFuY2Ug8J+Ri1xuICAgICAgLS0tLS0tLS1cbiAgICAgIC0gY2xlYW51cCBpbnN0YW5jZVxuICAgICovXG4gICAgO1xuXG4gICAgX3Byb3RvLnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24gcmVtb3ZlSW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICAgIHZhciBlID0gaW5zdGFuY2UuZWw7XG4gICAgICB2YXIgcCA9IGluc3RhbmNlLnByb3BzO1xuICAgICAgdmFyIHRDID0gdGhpcy50b2dnbGVDbGFzc2VzO1xuICAgICAgZS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgICAgZS5zdHlsZVtwLnZlcnRpY2FsUG9zaXRpb25dID0gJyc7XG4gICAgICB0QyhlLCBwLnN0aWNreUNsYXNzKTtcbiAgICAgIHRDKGUsIHAuc3R1Y2tDbGFzcyk7XG4gICAgICB0QyhlLnBhcmVudE5vZGUsIHAucGFyZW50Q2xhc3MpO1xuICAgIH1cbiAgICAvKlxuICAgICAgY2xlYW51cCDwn5uBXG4gICAgICAtLS0tLS0tLVxuICAgICAgLSBjbGVhbnMgdXAgZWFjaCBpbnN0YW5jZVxuICAgICAgLSBjbGVhcnMgaW5zdGFuY2VcbiAgICAqL1xuICAgIDtcblxuICAgIF9wcm90by5jbGVhbnVwID0gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pbnN0YW5jZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbaV07XG4gICAgICAgIGluc3RhbmNlLnByb3BzLnNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnN0YXRlQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5yZW1vdmVJbnN0YW5jZShpbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFuYWdlU3RhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5zdGFuY2VzID0gW107XG4gICAgfTtcblxuICAgIHJldHVybiBTdGlja3liaXRzO1xuICB9KCk7XG4gIC8qXG4gICAgZXhwb3J0XG4gICAgLS0tLS0tLS1cbiAgICBleHBvcnRzIFN0aWNrQml0cyB0byBiZSB1c2VkIPCfj4FcbiAgKi9cblxuXG4gIGZ1bmN0aW9uIHN0aWNreWJpdHModGFyZ2V0LCBvKSB7XG4gICAgcmV0dXJuIG5ldyBTdGlja3liaXRzKHRhcmdldCwgbyk7XG4gIH1cblxuICByZXR1cm4gc3RpY2t5Yml0cztcblxufSkpO1xuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\stickybits\\dist\\stickybits.js","/..\\..\\..\\..\\node_modules\\stickybits\\dist")
},{"6r38Q7":5,"buffer":3}]},{},[1])