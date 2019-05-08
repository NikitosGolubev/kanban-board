(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var _router = _interopRequireDefault(require("../../router"));

var _nullModel = _interopRequireDefault(require("../../models/null-model"));

var _recordsController = _interopRequireDefault(require("../../controllers/records-controller"));

var _columnsController = _interopRequireDefault(require("../../controllers/columns-controller"));

var _addRecordForm = _interopRequireDefault(require("../../views/content/add-record-form"));

var _removeAddRecordForm = _interopRequireDefault(require("../../views/content/remove-add-record-form"));

var _removeElement = _interopRequireDefault(require("../../views/layouts/remove-element"));

var _emptyColumn = _interopRequireDefault(require("../../views/content/empty-column"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @fileOverview Attaches events to appropriate methods on index page
 * @namespace NikitosGolubev\Bootstrap\Routers
 */
// Models
// Controllers
// Views
// DOM elements
var body = document.querySelector('.js-page-body'); // Attaching events

body.addEventListener('click', showAddRecordForm);
body.addEventListener('click', hideAddRecordForm);
body.addEventListener('click', removeEmptyColumn);
body.addEventListener('click', createEmptyColumn); // Event functions

function showAddRecordForm(event) {
  var model = new _nullModel["default"]();
  var view = new _addRecordForm["default"](model);
  var controller = new _recordsController["default"](model, view);

  _router["default"].run({
    event: event
  }, controller, 'create');
}

function hideAddRecordForm(event) {
  var model = new _nullModel["default"]();
  var view = new _removeAddRecordForm["default"](model);
  var controller = new _recordsController["default"](model, view);

  _router["default"].run({
    event: event
  }, controller, 'hideCreate');
}

function removeEmptyColumn(event) {
  var view = new _removeElement["default"]();
  var controller = new _columnsController["default"](false, view);

  _router["default"].run({
    event: event
  }, controller, 'destroyEmptyColumn');
}

function createEmptyColumn(event) {
  var model = new _nullModel["default"]();
  var view = new _emptyColumn["default"](model);
  var controller = new _columnsController["default"](model, view);

  _router["default"].run({
    event: event
  }, controller, 'createEmptyColumn');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYjU0YWJiMDcuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93QWRkUmVjb3JkRm9ybSIsImhpZGVBZGRSZWNvcmRGb3JtIiwicmVtb3ZlRW1wdHlDb2x1bW4iLCJjcmVhdGVFbXB0eUNvbHVtbiIsImV2ZW50IiwibW9kZWwiLCJOdWxsTW9kZWwiLCJ2aWV3IiwiQWRkUmVjb3JkRm9ybSIsImNvbnRyb2xsZXIiLCJSZWNvcmRzQ29udHJvbGxlciIsIlJvdXRlciIsInJ1biIsIlJlbW92ZUFkZFJlY29yZEZvcm0iLCJSZW1vdmVFbGVtZW50IiwiQ29sdW1uc0NvbnRyb2xsZXIiLCJFbXB0eUNvbHVtbiJdLCJtYXBwaW5ncyI6Ijs7QUFLQTs7QUFHQTs7QUFHQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQWxCQTs7OztBQU9BO0FBR0E7QUFJQTtBQU1BO0FBQ0EsSUFBSUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBWCxDLENBRUE7O0FBQ0FGLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JDLGlCQUEvQjtBQUNBSixJQUFJLENBQUNHLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCRSxpQkFBL0I7QUFDQUwsSUFBSSxDQUFDRyxnQkFBTCxDQUFzQixPQUF0QixFQUErQkcsaUJBQS9CO0FBQ0FOLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JJLGlCQUEvQixFLENBRUE7O0FBQ0EsU0FBU0gsaUJBQVQsQ0FBMkJJLEtBQTNCLEVBQWtDO0FBQzlCLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxxQkFBSixFQUFkO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlDLHlCQUFKLENBQWtCSCxLQUFsQixDQUFiO0FBQ0EsTUFBTUksVUFBVSxHQUFHLElBQUlDLDZCQUFKLENBQXNCTCxLQUF0QixFQUE2QkUsSUFBN0IsQ0FBbkI7O0FBRUFJLHFCQUFPQyxHQUFQLENBQVc7QUFBQ1IsSUFBQUEsS0FBSyxFQUFFQTtBQUFSLEdBQVgsRUFBMkJLLFVBQTNCLEVBQXVDLFFBQXZDO0FBQ0g7O0FBRUQsU0FBU1IsaUJBQVQsQ0FBMkJHLEtBQTNCLEVBQWtDO0FBQzlCLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxxQkFBSixFQUFkO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlNLCtCQUFKLENBQXdCUixLQUF4QixDQUFiO0FBQ0EsTUFBTUksVUFBVSxHQUFHLElBQUlDLDZCQUFKLENBQXNCTCxLQUF0QixFQUE2QkUsSUFBN0IsQ0FBbkI7O0FBRUFJLHFCQUFPQyxHQUFQLENBQVc7QUFBQ1IsSUFBQUEsS0FBSyxFQUFFQTtBQUFSLEdBQVgsRUFBMkJLLFVBQTNCLEVBQXVDLFlBQXZDO0FBQ0g7O0FBRUQsU0FBU1AsaUJBQVQsQ0FBMkJFLEtBQTNCLEVBQWtDO0FBQzlCLE1BQU1HLElBQUksR0FBRyxJQUFJTyx5QkFBSixFQUFiO0FBQ0EsTUFBTUwsVUFBVSxHQUFHLElBQUlNLDZCQUFKLENBQXNCLEtBQXRCLEVBQTZCUixJQUE3QixDQUFuQjs7QUFFQUkscUJBQU9DLEdBQVAsQ0FBVztBQUFDUixJQUFBQSxLQUFLLEVBQUVBO0FBQVIsR0FBWCxFQUEyQkssVUFBM0IsRUFBdUMsb0JBQXZDO0FBQ0g7O0FBRUQsU0FBU04saUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQzlCLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxxQkFBSixFQUFkO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlTLHVCQUFKLENBQWdCWCxLQUFoQixDQUFiO0FBQ0EsTUFBTUksVUFBVSxHQUFHLElBQUlNLDZCQUFKLENBQXNCVixLQUF0QixFQUE2QkUsSUFBN0IsQ0FBbkI7O0FBRUFJLHFCQUFPQyxHQUFQLENBQVc7QUFBQ1IsSUFBQUEsS0FBSyxFQUFFQTtBQUFSLEdBQVgsRUFBMkJLLFVBQTNCLEVBQXVDLG1CQUF2QztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQXR0YWNoZXMgZXZlbnRzIHRvIGFwcHJvcHJpYXRlIG1ldGhvZHMgb24gaW5kZXggcGFnZVxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxCb290c3RyYXBcXFJvdXRlcnNcclxuICovXHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4uLy4uL3JvdXRlcic7XHJcblxyXG4vLyBNb2RlbHNcclxuaW1wb3J0IE51bGxNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvbnVsbC1tb2RlbCc7XHJcblxyXG4vLyBDb250cm9sbGVyc1xyXG5pbXBvcnQgUmVjb3Jkc0NvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvcmVjb3Jkcy1jb250cm9sbGVyJztcclxuaW1wb3J0IENvbHVtbnNDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL2NvbHVtbnMtY29udHJvbGxlcic7XHJcblxyXG4vLyBWaWV3c1xyXG5pbXBvcnQgQWRkUmVjb3JkRm9ybSBmcm9tICcuLi8uLi92aWV3cy9jb250ZW50L2FkZC1yZWNvcmQtZm9ybSc7XHJcbmltcG9ydCBSZW1vdmVBZGRSZWNvcmRGb3JtIGZyb20gJy4uLy4uL3ZpZXdzL2NvbnRlbnQvcmVtb3ZlLWFkZC1yZWNvcmQtZm9ybSc7XHJcbmltcG9ydCBSZW1vdmVFbGVtZW50IGZyb20gXCIuLi8uLi92aWV3cy9sYXlvdXRzL3JlbW92ZS1lbGVtZW50XCI7XHJcbmltcG9ydCBFbXB0eUNvbHVtbiBmcm9tICcuLi8uLi92aWV3cy9jb250ZW50L2VtcHR5LWNvbHVtbic7XHJcblxyXG4vLyBET00gZWxlbWVudHNcclxubGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcGFnZS1ib2R5Jyk7XHJcblxyXG4vLyBBdHRhY2hpbmcgZXZlbnRzXHJcbmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWRkUmVjb3JkRm9ybSk7XHJcbmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlQWRkUmVjb3JkRm9ybSk7XHJcbmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVFbXB0eUNvbHVtbik7XHJcbmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVFbXB0eUNvbHVtbik7XHJcblxyXG4vLyBFdmVudCBmdW5jdGlvbnNcclxuZnVuY3Rpb24gc2hvd0FkZFJlY29yZEZvcm0oZXZlbnQpIHtcclxuICAgIGNvbnN0IG1vZGVsID0gbmV3IE51bGxNb2RlbCgpO1xyXG4gICAgY29uc3QgdmlldyA9IG5ldyBBZGRSZWNvcmRGb3JtKG1vZGVsKTtcclxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgUmVjb3Jkc0NvbnRyb2xsZXIobW9kZWwsIHZpZXcpO1xyXG5cclxuICAgIFJvdXRlci5ydW4oe2V2ZW50OiBldmVudH0sIGNvbnRyb2xsZXIsICdjcmVhdGUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUFkZFJlY29yZEZvcm0oZXZlbnQpIHtcclxuICAgIGNvbnN0IG1vZGVsID0gbmV3IE51bGxNb2RlbCgpO1xyXG4gICAgY29uc3QgdmlldyA9IG5ldyBSZW1vdmVBZGRSZWNvcmRGb3JtKG1vZGVsKTtcclxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgUmVjb3Jkc0NvbnRyb2xsZXIobW9kZWwsIHZpZXcpO1xyXG5cclxuICAgIFJvdXRlci5ydW4oe2V2ZW50OiBldmVudH0sIGNvbnRyb2xsZXIsICdoaWRlQ3JlYXRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUVtcHR5Q29sdW1uKGV2ZW50KSB7XHJcbiAgICBjb25zdCB2aWV3ID0gbmV3IFJlbW92ZUVsZW1lbnQoKTtcclxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29sdW1uc0NvbnRyb2xsZXIoZmFsc2UsIHZpZXcpO1xyXG5cclxuICAgIFJvdXRlci5ydW4oe2V2ZW50OiBldmVudH0sIGNvbnRyb2xsZXIsICdkZXN0cm95RW1wdHlDb2x1bW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRW1wdHlDb2x1bW4oZXZlbnQpIHtcclxuICAgIGNvbnN0IG1vZGVsID0gbmV3IE51bGxNb2RlbCgpO1xyXG4gICAgY29uc3QgdmlldyA9IG5ldyBFbXB0eUNvbHVtbihtb2RlbCk7XHJcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbHVtbnNDb250cm9sbGVyKG1vZGVsLCB2aWV3KTtcclxuXHJcbiAgICBSb3V0ZXIucnVuKHtldmVudDogZXZlbnR9LCBjb250cm9sbGVyLCAnY3JlYXRlRW1wdHlDb2x1bW4nKTtcclxufSJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_b54abb07.js","/")
},{"../../controllers/columns-controller":2,"../../controllers/records-controller":4,"../../models/null-model":9,"../../router":11,"../../views/content/add-record-form":28,"../../views/content/empty-column":29,"../../views/content/remove-add-record-form":30,"../../views/layouts/remove-element":32,"6r38Q7":38,"buffer":36}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = _interopRequireDefault(require("./controller"));

var _printView = _interopRequireDefault(require("../use-cases/print-view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends Controller
 */
var ColumnsController =
/*#__PURE__*/
function (_Controller) {
  _inherits(ColumnsController, _Controller);

  function ColumnsController(model, view) {
    _classCallCheck(this, ColumnsController);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColumnsController).call(this, model, view));
  }
  /**
   * Destroys columns which was created but no filled with data.
   * @param {object} data Expects: {event: eventObj}
   */


  _createClass(ColumnsController, [{
    key: "destroyEmptyColumn",
    value: function destroyEmptyColumn(data) {
      var destroyElemTriggered = this.dom.findParentByClassName(data.event.target, 'js-remove-empty-column');

      if (destroyElemTriggered) {
        var columnToDestroy = this.dom.findParentByClassName(destroyElemTriggered, 'js-column_wrap');
        (0, _printView["default"])(this.view, {
          element: columnToDestroy
        });
      }
    }
    /**
     * Creates empty column
     * @param {object} data Expects: {event: eventObj}
     */

  }, {
    key: "createEmptyColumn",
    value: function createEmptyColumn(data) {
      var elemTriggered = this.dom.findParentByClassName(data.event.target, 'js-create-empty-column');

      if (elemTriggered) {
        (0, _printView["default"])(this.view);
      }
    }
  }]);

  return ColumnsController;
}(_controller["default"]);

var _default = ColumnsController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbnMtY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJDb2x1bW5zQ29udHJvbGxlciIsIm1vZGVsIiwidmlldyIsImRhdGEiLCJkZXN0cm95RWxlbVRyaWdnZXJlZCIsImRvbSIsImZpbmRQYXJlbnRCeUNsYXNzTmFtZSIsImV2ZW50IiwidGFyZ2V0IiwiY29sdW1uVG9EZXN0cm95IiwiZWxlbWVudCIsImVsZW1UcmlnZ2VyZWQiLCJDb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGlCOzs7OztBQUNGLDZCQUFZQyxLQUFaLEVBQW1CQyxJQUFuQixFQUF5QjtBQUFBOztBQUFBLDBGQUNmRCxLQURlLEVBQ1JDLElBRFE7QUFFeEI7QUFFRDs7Ozs7Ozs7dUNBSW1CQyxJLEVBQU07QUFDckIsVUFBSUMsb0JBQW9CLEdBQUcsS0FBS0MsR0FBTCxDQUFTQyxxQkFBVCxDQUErQkgsSUFBSSxDQUFDSSxLQUFMLENBQVdDLE1BQTFDLEVBQWtELHdCQUFsRCxDQUEzQjs7QUFDQSxVQUFJSixvQkFBSixFQUEwQjtBQUN0QixZQUFJSyxlQUFlLEdBQUcsS0FBS0osR0FBTCxDQUFTQyxxQkFBVCxDQUErQkYsb0JBQS9CLEVBQXFELGdCQUFyRCxDQUF0QjtBQUNBLG1DQUFLLEtBQUtGLElBQVYsRUFBZ0I7QUFBQ1EsVUFBQUEsT0FBTyxFQUFFRDtBQUFWLFNBQWhCO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7O3NDQUlrQk4sSSxFQUFNO0FBQ3BCLFVBQUlRLGFBQWEsR0FBRyxLQUFLTixHQUFMLENBQVNDLHFCQUFULENBQStCSCxJQUFJLENBQUNJLEtBQUwsQ0FBV0MsTUFBMUMsRUFBa0Qsd0JBQWxELENBQXBCOztBQUNBLFVBQUlHLGFBQUosRUFBbUI7QUFDZixtQ0FBSyxLQUFLVCxJQUFWO0FBQ0g7QUFDSjs7OztFQTFCMkJVLHNCOztlQTZCakJaLGlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgUmVzcG9uc2libGUgZm9yIG1hbmFnaW5nIGNvbHVtbnNcclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcQ29udHJvbGxlcnNcclxuICovXHJcblxyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyXCI7XHJcbmltcG9ydCB2aWV3IGZyb20gXCIuLi91c2UtY2FzZXMvcHJpbnQtdmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIEBleHRlbmRzIENvbnRyb2xsZXJcclxuICovXHJcbmNsYXNzIENvbHVtbnNDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgdmlldykge1xyXG4gICAgICAgIHN1cGVyKG1vZGVsLCB2aWV3KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc3Ryb3lzIGNvbHVtbnMgd2hpY2ggd2FzIGNyZWF0ZWQgYnV0IG5vIGZpbGxlZCB3aXRoIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBFeHBlY3RzOiB7ZXZlbnQ6IGV2ZW50T2JqfVxyXG4gICAgICovXHJcbiAgICBkZXN0cm95RW1wdHlDb2x1bW4oZGF0YSkge1xyXG4gICAgICAgIGxldCBkZXN0cm95RWxlbVRyaWdnZXJlZCA9IHRoaXMuZG9tLmZpbmRQYXJlbnRCeUNsYXNzTmFtZShkYXRhLmV2ZW50LnRhcmdldCwgJ2pzLXJlbW92ZS1lbXB0eS1jb2x1bW4nKTtcclxuICAgICAgICBpZiAoZGVzdHJveUVsZW1UcmlnZ2VyZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtblRvRGVzdHJveSA9IHRoaXMuZG9tLmZpbmRQYXJlbnRCeUNsYXNzTmFtZShkZXN0cm95RWxlbVRyaWdnZXJlZCwgJ2pzLWNvbHVtbl93cmFwJyk7XHJcbiAgICAgICAgICAgIHZpZXcodGhpcy52aWV3LCB7ZWxlbWVudDogY29sdW1uVG9EZXN0cm95fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBlbXB0eSBjb2x1bW5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIEV4cGVjdHM6IHtldmVudDogZXZlbnRPYmp9XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUVtcHR5Q29sdW1uKGRhdGEpIHtcclxuICAgICAgICBsZXQgZWxlbVRyaWdnZXJlZCA9IHRoaXMuZG9tLmZpbmRQYXJlbnRCeUNsYXNzTmFtZShkYXRhLmV2ZW50LnRhcmdldCwgJ2pzLWNyZWF0ZS1lbXB0eS1jb2x1bW4nKTtcclxuICAgICAgICBpZiAoZWxlbVRyaWdnZXJlZCkge1xyXG4gICAgICAgICAgICB2aWV3KHRoaXMudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW5zQ29udHJvbGxlcjtcclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\controllers\\columns-controller.js","/..\\..\\controllers")
},{"../use-cases/print-view":27,"./controller":3,"6r38Q7":38,"buffer":36}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dom = _interopRequireDefault(require("../helpers/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller(model, view) {
  _classCallCheck(this, Controller);

  this.model = model;
  this.view = view;
  this.dom = new _dom["default"]();
};

var _default = Controller;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIm1vZGVsIiwidmlldyIsImRvbSIsIkRPTSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7Ozs7SUFFTUEsVSxHQUNGLG9CQUFZQyxLQUFaLEVBQW1CQyxJQUFuQixFQUF5QjtBQUFBOztBQUNyQixPQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxHQUFMLEdBQVcsSUFBSUMsZUFBSixFQUFYO0FBQ0gsQzs7ZUFHVUosVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IEJhc2UgQ29udHJvbGxlclxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxDb250cm9sbGVyc1xyXG4gKi9cclxuXHJcbmltcG9ydCBET00gZnJvbSAnLi4vaGVscGVycy9kb20nO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgdmlldykge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMuZG9tID0gbmV3IERPTTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\controllers\\controller.js","/..\\..\\controllers")
},{"../helpers/dom":7,"6r38Q7":38,"buffer":36}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = _interopRequireDefault(require("./controller"));

var _printView = _interopRequireDefault(require("../use-cases/print-view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends Controller
 */
var RecordsController =
/*#__PURE__*/
function (_Controller) {
  _inherits(RecordsController, _Controller);

  function RecordsController(model, view) {
    _classCallCheck(this, RecordsController);

    return _possibleConstructorReturn(this, _getPrototypeOf(RecordsController).call(this, model, view));
  }
  /**
   * Create record form
   * @param {object} data Expects: {event: eventObj}
   */


  _createClass(RecordsController, [{
    key: "create",
    value: function create(data) {
      var createElem = this.dom.findParentByClassName(data.event.target, 'js-show-add-record-form');

      if (createElem) {
        (0, _printView["default"])(this.view, {
          createElem: createElem
        });
      }
    }
    /**
     * Hides create record form.
     * @param {object} data Expects: {event, eventObj}
     */

  }, {
    key: "hideCreate",
    value: function hideCreate(data) {
      var closeElem = this.dom.findParentByClassName(event.target, 'js-close-add-record-form');

      if (closeElem) {
        var addForm = this.dom.findParentByClassName(closeElem, 'js-add-form');
        (0, _printView["default"])(this.view, {
          addForm: addForm
        });
      }
    }
  }]);

  return RecordsController;
}(_controller["default"]);

var _default = RecordsController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHMtY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJSZWNvcmRzQ29udHJvbGxlciIsIm1vZGVsIiwidmlldyIsImRhdGEiLCJjcmVhdGVFbGVtIiwiZG9tIiwiZmluZFBhcmVudEJ5Q2xhc3NOYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZUVsZW0iLCJhZGRGb3JtIiwiQ29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxpQjs7Ozs7QUFDRiw2QkFBWUMsS0FBWixFQUFtQkMsSUFBbkIsRUFBeUI7QUFBQTs7QUFBQSwwRkFDZkQsS0FEZSxFQUNSQyxJQURRO0FBRXhCO0FBRUQ7Ozs7Ozs7OzJCQUlPQyxJLEVBQU07QUFDVCxVQUFJQyxVQUFVLEdBQUcsS0FBS0MsR0FBTCxDQUFTQyxxQkFBVCxDQUErQkgsSUFBSSxDQUFDSSxLQUFMLENBQVdDLE1BQTFDLEVBQWtELHlCQUFsRCxDQUFqQjs7QUFDQSxVQUFJSixVQUFKLEVBQWdCO0FBQ1osbUNBQUssS0FBS0YsSUFBVixFQUFnQjtBQUFDRSxVQUFBQSxVQUFVLEVBQUVBO0FBQWIsU0FBaEI7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7K0JBSVdELEksRUFBTTtBQUNiLFVBQUlNLFNBQVMsR0FBRyxLQUFLSixHQUFMLENBQVNDLHFCQUFULENBQStCQyxLQUFLLENBQUNDLE1BQXJDLEVBQTZDLDBCQUE3QyxDQUFoQjs7QUFDQSxVQUFJQyxTQUFKLEVBQWU7QUFDWCxZQUFJQyxPQUFPLEdBQUcsS0FBS0wsR0FBTCxDQUFTQyxxQkFBVCxDQUErQkcsU0FBL0IsRUFBMEMsYUFBMUMsQ0FBZDtBQUNBLG1DQUFLLEtBQUtQLElBQVYsRUFBZ0I7QUFBQ1EsVUFBQUEsT0FBTyxFQUFFQTtBQUFWLFNBQWhCO0FBQ0g7QUFDSjs7OztFQTFCMkJDLHNCOztlQTZCakJYLGlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgUmVzcG9uc2libGUgZm9yIG1hbmFnaW5nIHJlY29yZHNcclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcQ29udHJvbGxlcnNcclxuICovXHJcblxyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyXCI7XHJcbmltcG9ydCB2aWV3IGZyb20gXCIuLi91c2UtY2FzZXMvcHJpbnQtdmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIEBleHRlbmRzIENvbnRyb2xsZXJcclxuICovXHJcbmNsYXNzIFJlY29yZHNDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgdmlldykge1xyXG4gICAgICAgIHN1cGVyKG1vZGVsLCB2aWV3KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSByZWNvcmQgZm9ybVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgRXhwZWN0czoge2V2ZW50OiBldmVudE9ian1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKGRhdGEpIHtcclxuICAgICAgICBsZXQgY3JlYXRlRWxlbSA9IHRoaXMuZG9tLmZpbmRQYXJlbnRCeUNsYXNzTmFtZShkYXRhLmV2ZW50LnRhcmdldCwgJ2pzLXNob3ctYWRkLXJlY29yZC1mb3JtJyk7XHJcbiAgICAgICAgaWYgKGNyZWF0ZUVsZW0pIHtcclxuICAgICAgICAgICAgdmlldyh0aGlzLnZpZXcsIHtjcmVhdGVFbGVtOiBjcmVhdGVFbGVtfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZXMgY3JlYXRlIHJlY29yZCBmb3JtLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgRXhwZWN0czoge2V2ZW50LCBldmVudE9ian1cclxuICAgICAqL1xyXG4gICAgaGlkZUNyZWF0ZShkYXRhKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlRWxlbSA9IHRoaXMuZG9tLmZpbmRQYXJlbnRCeUNsYXNzTmFtZShldmVudC50YXJnZXQsICdqcy1jbG9zZS1hZGQtcmVjb3JkLWZvcm0nKTtcclxuICAgICAgICBpZiAoY2xvc2VFbGVtKSB7XHJcbiAgICAgICAgICAgIGxldCBhZGRGb3JtID0gdGhpcy5kb20uZmluZFBhcmVudEJ5Q2xhc3NOYW1lKGNsb3NlRWxlbSwgJ2pzLWFkZC1mb3JtJyk7XHJcbiAgICAgICAgICAgIHZpZXcodGhpcy52aWV3LCB7YWRkRm9ybTogYWRkRm9ybX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjb3Jkc0NvbnRyb2xsZXI7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\controllers\\records-controller.js","/..\\..\\controllers")
},{"../use-cases/print-view":27,"./controller":3,"6r38Q7":38,"buffer":36}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _handler = _interopRequireDefault(require("./handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Provides default approach on handle exceptions at the application.
 * @implements Handler
 */
var DefaultHandler =
/*#__PURE__*/
function (_Handler) {
  _inherits(DefaultHandler, _Handler);

  function DefaultHandler() {
    _classCallCheck(this, DefaultHandler);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultHandler).apply(this, arguments));
  }

  _createClass(DefaultHandler, [{
    key: "handle",

    /**
     * @see Handler.handle()
     * @param exception
     */
    value: function handle(exception) {// There exceptions could be handled
    }
  }]);

  return DefaultHandler;
}(_handler["default"]);

var _default = DefaultHandler;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtaGFuZGxlci5qcyJdLCJuYW1lcyI6WyJEZWZhdWx0SGFuZGxlciIsImV4Y2VwdGlvbiIsIkhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSU1BLGM7Ozs7Ozs7Ozs7Ozs7O0FBQ0Y7Ozs7MkJBSU9DLFMsRUFBVyxDQUNkO0FBQ0g7Ozs7RUFQd0JDLG1COztlQVVkRixjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgRGVmYXVsdCBoYW5kbGVyXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXEhhbmRsZXJzXHJcbiAqL1xyXG5cclxuaW1wb3J0IEhhbmRsZXIgZnJvbSAnLi9oYW5kbGVyJztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBkZWZhdWx0IGFwcHJvYWNoIG9uIGhhbmRsZSBleGNlcHRpb25zIGF0IHRoZSBhcHBsaWNhdGlvbi5cclxuICogQGltcGxlbWVudHMgSGFuZGxlclxyXG4gKi9cclxuY2xhc3MgRGVmYXVsdEhhbmRsZXIgZXh0ZW5kcyBIYW5kbGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBIYW5kbGVyLmhhbmRsZSgpXHJcbiAgICAgKiBAcGFyYW0gZXhjZXB0aW9uXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZShleGNlcHRpb24pIHtcclxuICAgICAgICAvLyBUaGVyZSBleGNlcHRpb25zIGNvdWxkIGJlIGhhbmRsZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdEhhbmRsZXI7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\handlers\\default-handler.js","/..\\..\\handlers")
},{"./handler":6,"6r38Q7":38,"buffer":36}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview Handler Interface
 * @namespace NikitosGolubev\Handlers
 */

/**
 * Describes API on how to handle exceptions
 * @interface
 */
var Handler =
/*#__PURE__*/
function () {
  function Handler() {
    _classCallCheck(this, Handler);
  }

  _createClass(Handler, [{
    key: "handle",

    /**
     * Method which handles the exceptions some way.
     * @param exception
     */
    value: function handle(exception) {
      throw "It's abstract method which requires implementation.";
    }
  }]);

  return Handler;
}();

var _default = Handler;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmRsZXIuanMiXSwibmFtZXMiOlsiSGFuZGxlciIsImV4Y2VwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBOzs7O0lBSU1BLE87Ozs7Ozs7Ozs7QUFDRjs7OzsyQkFJT0MsUyxFQUFXO0FBQ2QsWUFBTSxxREFBTjtBQUNIOzs7Ozs7ZUFHVUQsTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IEhhbmRsZXIgSW50ZXJmYWNlXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXEhhbmRsZXJzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyBBUEkgb24gaG93IHRvIGhhbmRsZSBleGNlcHRpb25zXHJcbiAqIEBpbnRlcmZhY2VcclxuICovXHJcbmNsYXNzIEhhbmRsZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2Qgd2hpY2ggaGFuZGxlcyB0aGUgZXhjZXB0aW9ucyBzb21lIHdheS5cclxuICAgICAqIEBwYXJhbSBleGNlcHRpb25cclxuICAgICAqL1xyXG4gICAgaGFuZGxlKGV4Y2VwdGlvbikge1xyXG4gICAgICAgIHRocm93IFwiSXQncyBhYnN0cmFjdCBtZXRob2Qgd2hpY2ggcmVxdWlyZXMgaW1wbGVtZW50YXRpb24uXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhbmRsZXI7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\handlers\\handler.js","/..\\..\\handlers")
},{"6r38Q7":38,"buffer":36}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview Provides some helpful API to manipulate DOM
 * @namespace NikitosGolubev\Helpers
 */
var DOM =
/*#__PURE__*/
function () {
  function DOM() {
    _classCallCheck(this, DOM);
  }

  _createClass(DOM, [{
    key: "findParentByClassName",

    /**
     * Finding particular parent by its className and its child
     *
     * @param  {Object} childElement
     * @param  {String} parentClassName
     * @return {Object|Boolean} DOM element OR FALSE(not found)
     */
    value: function findParentByClassName(childElement, parentClassName) {
      // If given child IS the element that should be found. (when unaware of if it's child elem or not)
      if (childElement.classList.contains(parentClassName)) return childElement;
      var parentResult = childElement.parentNode; // Getting first parent of child
      // Starting loop
      // If element doesnt contain needed className so loop next

      while (!parentResult.classList.contains(parentClassName)) {
        // If html is our parent so its something wrong here, == nothing found
        if (parentResult.tagName === "HTML") return false; // Getting next parent element

        parentResult = parentResult.parentNode;
      }

      return parentResult;
    }
  }]);

  return DOM;
}();

var _default = DOM;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbS5qcyJdLCJuYW1lcyI6WyJET00iLCJjaGlsZEVsZW1lbnQiLCJwYXJlbnRDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudFJlc3VsdCIsInBhcmVudE5vZGUiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFLTUEsRzs7Ozs7Ozs7OztBQUNGOzs7Ozs7OzBDQU9zQkMsWSxFQUFjQyxlLEVBQWlCO0FBQ2pEO0FBQ0EsVUFBSUQsWUFBWSxDQUFDRSxTQUFiLENBQXVCQyxRQUF2QixDQUFnQ0YsZUFBaEMsQ0FBSixFQUFzRCxPQUFPRCxZQUFQO0FBRXRELFVBQUlJLFlBQVksR0FBR0osWUFBWSxDQUFDSyxVQUFoQyxDQUppRCxDQUlMO0FBQzVDO0FBQ0E7O0FBQ0EsYUFBTyxDQUFDRCxZQUFZLENBQUNGLFNBQWIsQ0FBdUJDLFFBQXZCLENBQWdDRixlQUFoQyxDQUFSLEVBQTBEO0FBQ3REO0FBQ0EsWUFBSUcsWUFBWSxDQUFDRSxPQUFiLEtBQXlCLE1BQTdCLEVBQXFDLE9BQU8sS0FBUCxDQUZpQixDQUd0RDs7QUFDQUYsUUFBQUEsWUFBWSxHQUFHQSxZQUFZLENBQUNDLFVBQTVCO0FBQ0g7O0FBQ0QsYUFBT0QsWUFBUDtBQUNIOzs7Ozs7ZUFJVUwsRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IFByb3ZpZGVzIHNvbWUgaGVscGZ1bCBBUEkgdG8gbWFuaXB1bGF0ZSBET01cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcSGVscGVyc1xyXG4gKi9cclxuXHJcbmNsYXNzIERPTSB7XHJcbiAgICAvKipcclxuICAgICAqIEZpbmRpbmcgcGFydGljdWxhciBwYXJlbnQgYnkgaXRzIGNsYXNzTmFtZSBhbmQgaXRzIGNoaWxkXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjaGlsZEVsZW1lbnRcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gcGFyZW50Q2xhc3NOYW1lXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R8Qm9vbGVhbn0gRE9NIGVsZW1lbnQgT1IgRkFMU0Uobm90IGZvdW5kKVxyXG4gICAgICovXHJcbiAgICBmaW5kUGFyZW50QnlDbGFzc05hbWUoY2hpbGRFbGVtZW50LCBwYXJlbnRDbGFzc05hbWUpIHtcclxuICAgICAgICAvLyBJZiBnaXZlbiBjaGlsZCBJUyB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBmb3VuZC4gKHdoZW4gdW5hd2FyZSBvZiBpZiBpdCdzIGNoaWxkIGVsZW0gb3Igbm90KVxyXG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHBhcmVudENsYXNzTmFtZSkpIHJldHVybiBjaGlsZEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGxldCBwYXJlbnRSZXN1bHQgPSBjaGlsZEVsZW1lbnQucGFyZW50Tm9kZTsgLy8gR2V0dGluZyBmaXJzdCBwYXJlbnQgb2YgY2hpbGRcclxuICAgICAgICAvLyBTdGFydGluZyBsb29wXHJcbiAgICAgICAgLy8gSWYgZWxlbWVudCBkb2VzbnQgY29udGFpbiBuZWVkZWQgY2xhc3NOYW1lIHNvIGxvb3AgbmV4dFxyXG4gICAgICAgIHdoaWxlICghcGFyZW50UmVzdWx0LmNsYXNzTGlzdC5jb250YWlucyhwYXJlbnRDbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGh0bWwgaXMgb3VyIHBhcmVudCBzbyBpdHMgc29tZXRoaW5nIHdyb25nIGhlcmUsID09IG5vdGhpbmcgZm91bmRcclxuICAgICAgICAgICAgaWYgKHBhcmVudFJlc3VsdC50YWdOYW1lID09PSBcIkhUTUxcIikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBHZXR0aW5nIG5leHQgcGFyZW50IGVsZW1lbnRcclxuICAgICAgICAgICAgcGFyZW50UmVzdWx0ID0gcGFyZW50UmVzdWx0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJlbnRSZXN1bHQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBET007XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\helpers\\dom.js","/..\\..\\helpers")
},{"6r38Q7":38,"buffer":36}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _subject = _interopRequireDefault(require("./subject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Interface which provides API(facade) for interacting with some data storage.
 * (CRUD)
 * @abstract
 * @extends Subject
 */
var Model =
/*#__PURE__*/
function (_Subject) {
  _inherits(Model, _Subject);

  function Model() {
    var _this;

    _classCallCheck(this, Model);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Model).call(this));
    _this.storage = _this.getDefaultStorageName();
    return _this;
  }
  /**
   * Gets default storage name which is based on class name.
   *
   * (Active record) If class name is "apple", than storage is "apples"
   *
   * @returns {string}
   */


  _createClass(Model, [{
    key: "getDefaultStorageName",
    value: function getDefaultStorageName() {
      return this.constructor.name.toLowerCase() + "s";
    }
    /**
     * Adds data to some storage.
     * @abstract
     */

  }, {
    key: "add",
    value: function add(data) {
      console.error("It's an abstract method which requires implementation!");
      throw "It's an abstract method which requires implementation!";
    }
    /**
     * Gets all the data from some storage.
     * @abstract
     */

  }, {
    key: "get",
    value: function get() {
      console.error("It's an abstract method which requires implementation!");
      throw "It's an abstract method which requires implementation!";
    }
    /*
     * As project develops, it's reasonable to include:
     * UPDATE, DELETE, WHERE methods.
     * But as they are not really required, I omit them.
     */

  }]);

  return Model;
}(_subject["default"]);

var _default = Model;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmpzIl0sIm5hbWVzIjpbIk1vZGVsIiwic3RvcmFnZSIsImdldERlZmF1bHRTdG9yYWdlTmFtZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsIlN1YmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTUEsSzs7Ozs7QUFDRixtQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtDLHFCQUFMLEVBQWY7QUFGVTtBQUdiO0FBRUQ7Ozs7Ozs7Ozs7OzRDQU93QjtBQUNwQixhQUFPLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCQyxXQUF0QixLQUFvQyxHQUEzQztBQUNIO0FBRUQ7Ozs7Ozs7d0JBSUlDLEksRUFBTTtBQUNOQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyx3REFBZDtBQUNBLFlBQU0sd0RBQU47QUFDSDtBQUVEOzs7Ozs7OzBCQUlNO0FBQ0ZELE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLHdEQUFkO0FBQ0EsWUFBTSx3REFBTjtBQUNIO0FBRUQ7Ozs7Ozs7OztFQW5DZ0JDLG1COztlQTBDTFQsSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IEJhc2UgTW9kZWxcclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcTW9kZWxzXHJcbiAqL1xyXG5cclxuaW1wb3J0IFN1YmplY3QgZnJvbSAnLi9zdWJqZWN0JztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2Ugd2hpY2ggcHJvdmlkZXMgQVBJKGZhY2FkZSkgZm9yIGludGVyYWN0aW5nIHdpdGggc29tZSBkYXRhIHN0b3JhZ2UuXHJcbiAqIChDUlVEKVxyXG4gKiBAYWJzdHJhY3RcclxuICogQGV4dGVuZHMgU3ViamVjdFxyXG4gKi9cclxuY2xhc3MgTW9kZWwgZXh0ZW5kcyBTdWJqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gdGhpcy5nZXREZWZhdWx0U3RvcmFnZU5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgZGVmYXVsdCBzdG9yYWdlIG5hbWUgd2hpY2ggaXMgYmFzZWQgb24gY2xhc3MgbmFtZS5cclxuICAgICAqXHJcbiAgICAgKiAoQWN0aXZlIHJlY29yZCkgSWYgY2xhc3MgbmFtZSBpcyBcImFwcGxlXCIsIHRoYW4gc3RvcmFnZSBpcyBcImFwcGxlc1wiXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0RGVmYXVsdFN0b3JhZ2VOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKStcInNcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgZGF0YSB0byBzb21lIHN0b3JhZ2UuXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqL1xyXG4gICAgYWRkKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiSXQncyBhbiBhYnN0cmFjdCBtZXRob2Qgd2hpY2ggcmVxdWlyZXMgaW1wbGVtZW50YXRpb24hXCIpO1xyXG4gICAgICAgIHRocm93IFwiSXQncyBhbiBhYnN0cmFjdCBtZXRob2Qgd2hpY2ggcmVxdWlyZXMgaW1wbGVtZW50YXRpb24hXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGFsbCB0aGUgZGF0YSBmcm9tIHNvbWUgc3RvcmFnZS5cclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICovXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkl0J3MgYW4gYWJzdHJhY3QgbWV0aG9kIHdoaWNoIHJlcXVpcmVzIGltcGxlbWVudGF0aW9uIVwiKTtcclxuICAgICAgICB0aHJvdyBcIkl0J3MgYW4gYWJzdHJhY3QgbWV0aG9kIHdoaWNoIHJlcXVpcmVzIGltcGxlbWVudGF0aW9uIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBBcyBwcm9qZWN0IGRldmVsb3BzLCBpdCdzIHJlYXNvbmFibGUgdG8gaW5jbHVkZTpcclxuICAgICAqIFVQREFURSwgREVMRVRFLCBXSEVSRSBtZXRob2RzLlxyXG4gICAgICogQnV0IGFzIHRoZXkgYXJlIG5vdCByZWFsbHkgcmVxdWlyZWQsIEkgb21pdCB0aGVtLlxyXG4gICAgICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\models\\model.js","/..\\..\\models")
},{"./subject":10,"6r38Q7":38,"buffer":36}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends Model
 */
var NullModel =
/*#__PURE__*/
function (_Model) {
  _inherits(NullModel, _Model);

  function NullModel() {
    _classCallCheck(this, NullModel);

    return _possibleConstructorReturn(this, _getPrototypeOf(NullModel).call(this));
  }

  _createClass(NullModel, [{
    key: "add",
    value: function add(data) {}
  }, {
    key: "get",
    value: function get() {}
  }]);

  return NullModel;
}(_model["default"]);

var _default = NullModel;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bGwtbW9kZWwuanMiXSwibmFtZXMiOlsiTnVsbE1vZGVsIiwiZGF0YSIsIk1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLFM7Ozs7O0FBQ0YsdUJBQWM7QUFBQTs7QUFBQTtBQUViOzs7O3dCQUVHQyxJLEVBQU0sQ0FBRTs7OzBCQUNOLENBQUU7Ozs7RUFOWUMsaUI7O2VBU1RGLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBOdWxsIG9iamVjdCBmb3IgbW9kZWwgKG1vY2sgd2hlbiBtb2RlbCBpcyBhY3R1YWxseSBub3QgbmVlZGVkKVxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxNb2RlbHNcclxuICovXHJcblxyXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XHJcblxyXG4vKipcclxuICogQGV4dGVuZHMgTW9kZWxcclxuICovXHJcbmNsYXNzIE51bGxNb2RlbCBleHRlbmRzIE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKGRhdGEpIHt9XHJcbiAgICBnZXQoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdWxsTW9kZWw7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\models\\null-model.js","/..\\..\\models")
},{"./model":8,"6r38Q7":38,"buffer":36}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview Subject - part of observer pattern
 * @namespace NikitosGolubev\Models
 */

/**
 * Implements API to be able to notify objects about events.
 */
var Subject =
/*#__PURE__*/
function () {
  function Subject() {
    _classCallCheck(this, Subject);

    this.observers = [];
  }

  _createClass(Subject, [{
    key: "registerObserver",
    value: function registerObserver(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "removeObserver",
    value: function removeObserver(observer) {
      // searching for given observer
      var observerIndex = this.observers.indexOf(observer);

      if (observerIndex > -1) {
        this.observers.splice(observerIndex, 1);
      }
    }
  }, {
    key: "notifyObservers",
    value: function notifyObservers(data) {
      for (var i = 0; i < this.observers.length; i++) {
        this.observers[i].update(data);
      }
    }
  }]);

  return Subject;
}();

var _default = Subject;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmplY3QuanMiXSwibmFtZXMiOlsiU3ViamVjdCIsIm9ic2VydmVycyIsIm9ic2VydmVyIiwicHVzaCIsIm9ic2VydmVySW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLQTs7O0lBR01BLE87OztBQUNGLHFCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNIOzs7O3FDQUVnQkMsUSxFQUFVO0FBQ3ZCLFdBQUtELFNBQUwsQ0FBZUUsSUFBZixDQUFvQkQsUUFBcEI7QUFDSDs7O21DQUVjQSxRLEVBQVU7QUFDckI7QUFDQSxVQUFJRSxhQUFhLEdBQUcsS0FBS0gsU0FBTCxDQUFlSSxPQUFmLENBQXVCSCxRQUF2QixDQUFwQjs7QUFDQSxVQUFJRSxhQUFhLEdBQUcsQ0FBQyxDQUFyQixFQUF3QjtBQUNwQixhQUFLSCxTQUFMLENBQWVLLE1BQWYsQ0FBc0JGLGFBQXRCLEVBQXFDLENBQXJDO0FBQ0g7QUFDSjs7O29DQUVlRyxJLEVBQU07QUFDbEIsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtQLFNBQUwsQ0FBZVEsTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7QUFDNUMsYUFBS1AsU0FBTCxDQUFlTyxDQUFmLEVBQWtCRSxNQUFsQixDQUF5QkgsSUFBekI7QUFDSDtBQUNKOzs7Ozs7ZUFHVVAsTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IFN1YmplY3QgLSBwYXJ0IG9mIG9ic2VydmVyIHBhdHRlcm5cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcTW9kZWxzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudHMgQVBJIHRvIGJlIGFibGUgdG8gbm90aWZ5IG9iamVjdHMgYWJvdXQgZXZlbnRzLlxyXG4gKi9cclxuY2xhc3MgU3ViamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVPYnNlcnZlcihvYnNlcnZlcikge1xyXG4gICAgICAgIC8vIHNlYXJjaGluZyBmb3IgZ2l2ZW4gb2JzZXJ2ZXJcclxuICAgICAgICBsZXQgb2JzZXJ2ZXJJbmRleCA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xyXG4gICAgICAgIGlmIChvYnNlcnZlckluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuc3BsaWNlKG9ic2VydmVySW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBub3RpZnlPYnNlcnZlcnMoZGF0YSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vYnNlcnZlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNbaV0udXBkYXRlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ViamVjdDtcclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\models\\subject.js","/..\\..\\models")
},{"6r38Q7":38,"buffer":36}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _handler = _interopRequireDefault(require("./handlers/handler"));

var _defaultHandler = _interopRequireDefault(require("./handlers/default-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Provides some common API for all routers
 * @use NikitosGolubev\Handlers\Handler
 * @use NikitosGolubev\Handlers\DefaultHandler
 */
var Router =
/*#__PURE__*/
function () {
  function Router() {
    _classCallCheck(this, Router);
  }

  _createClass(Router, null, [{
    key: "run",

    /**
     * Default method which wraps the calls to logic.
     *
     * @param data
     * @param controllerObj
     * @param method
     * @param $handler
     */
    value: function run(data, controllerObj, method) {
      var $handler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (!($handler instanceof _handler["default"])) $handler = new _defaultHandler["default"]();

      try {
        controllerObj[method](data);
      } catch (e) {
        $handler.handle(e);
      }
    }
  }]);

  return Router;
}();

var _default = Router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJkYXRhIiwiY29udHJvbGxlck9iaiIsIm1ldGhvZCIsIiRoYW5kbGVyIiwiSGFuZGxlciIsIkRlZmF1bHRIYW5kbGVyIiwiZSIsImhhbmRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS01BLE07Ozs7Ozs7Ozs7QUFDRjs7Ozs7Ozs7d0JBUVdDLEksRUFBTUMsYSxFQUFlQyxNLEVBQTBCO0FBQUEsVUFBbEJDLFFBQWtCLHVFQUFQLEtBQU87QUFDdEQsVUFBSSxFQUFFQSxRQUFRLFlBQVlDLG1CQUF0QixDQUFKLEVBQW9DRCxRQUFRLEdBQUcsSUFBSUUsMEJBQUosRUFBWDs7QUFFcEMsVUFBSTtBQUNBSixRQUFBQSxhQUFhLENBQUNDLE1BQUQsQ0FBYixDQUFzQkYsSUFBdEI7QUFDSCxPQUZELENBRUUsT0FBT00sQ0FBUCxFQUFVO0FBQ1JILFFBQUFBLFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQkQsQ0FBaEI7QUFDSDtBQUNKOzs7Ozs7ZUFHVVAsTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IEJhc2Ugcm91dGVyLlxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XHJcbiAqL1xyXG5cclxuaW1wb3J0IEhhbmRsZXIgZnJvbSAnLi9oYW5kbGVycy9oYW5kbGVyJztcclxuaW1wb3J0IERlZmF1bHRIYW5kbGVyIGZyb20gJy4vaGFuZGxlcnMvZGVmYXVsdC1oYW5kbGVyJztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBzb21lIGNvbW1vbiBBUEkgZm9yIGFsbCByb3V0ZXJzXHJcbiAqIEB1c2UgTmlraXRvc0dvbHViZXZcXEhhbmRsZXJzXFxIYW5kbGVyXHJcbiAqIEB1c2UgTmlraXRvc0dvbHViZXZcXEhhbmRsZXJzXFxEZWZhdWx0SGFuZGxlclxyXG4gKi9cclxuY2xhc3MgUm91dGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBtZXRob2Qgd2hpY2ggd3JhcHMgdGhlIGNhbGxzIHRvIGxvZ2ljLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gY29udHJvbGxlck9ialxyXG4gICAgICogQHBhcmFtIG1ldGhvZFxyXG4gICAgICogQHBhcmFtICRoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBydW4oZGF0YSwgY29udHJvbGxlck9iaiwgbWV0aG9kLCAkaGFuZGxlciA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKCEoJGhhbmRsZXIgaW5zdGFuY2VvZiBIYW5kbGVyKSkgJGhhbmRsZXIgPSBuZXcgRGVmYXVsdEhhbmRsZXIoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29udHJvbGxlck9ialttZXRob2RdKGRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgJGhhbmRsZXIuaGFuZGxlKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\router.js","/..\\..")
},{"./handlers/default-handler":5,"./handlers/handler":6,"6r38Q7":38,"buffer":36}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

var _addSvgImgFactory = _interopRequireDefault(require("./add-svg-img-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends UiFactory
 */
var AddButtonFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(AddButtonFactory, _UiFactory);

  function AddButtonFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, AddButtonFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddButtonFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data {content: buttonSign} expected
   */


  _createClass(AddButtonFactory, [{
    key: "build",
    value: function build(data) {
      var btnContainer = document.createElement('div');
      btnContainer.classList.add('add-btn'); // add img

      var addImgContainer = document.createElement('div');
      var svgAddImg = this.uiObjects.get('addImg').get();
      svgAddImg.classList.add('add-btn__img');
      addImgContainer.appendChild(svgAddImg); // button sign

      var contentContainer = document.createElement('div');
      contentContainer.innerText = data.content;
      btnContainer.appendChild(addImgContainer);
      btnContainer.appendChild(contentContainer);
      return btnContainer;
    }
    /**
     * @see UiFactory.uiObjectsFactory()
     * @return {Map<any, UiFactory>}
     */

  }, {
    key: "uiObjectsFactory",
    value: function uiObjectsFactory() {
      return new Map([['addImg', new _addSvgImgFactory["default"]()]]);
    }
  }]);

  return AddButtonFactory;
}(_uiFactory["default"]);

var _default = AddButtonFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1idXR0b24tZmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJBZGRCdXR0b25GYWN0b3J5IiwiJGRhdGEiLCJkYXRhIiwiYnRuQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkSW1nQ29udGFpbmVyIiwic3ZnQWRkSW1nIiwidWlPYmplY3RzIiwiZ2V0IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50Q29udGFpbmVyIiwiaW5uZXJUZXh0IiwiY29udGVudCIsIk1hcCIsIkFkZFN2Z0ltZ0ZhY3RvcnkiLCJVaUZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsZ0I7Ozs7O0FBQ0YsOEJBQTJCO0FBQUEsUUFBZkMsS0FBZSx1RUFBUCxLQUFPOztBQUFBOztBQUFBLHlGQUNqQkEsS0FEaUI7QUFFMUI7QUFFRDs7Ozs7Ozs7MEJBSU1DLEksRUFBTTtBQUNSLFVBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0FGLE1BQUFBLFlBQVksQ0FBQ0csU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsU0FBM0IsRUFGUSxDQUlSOztBQUNBLFVBQUlDLGVBQWUsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXRCO0FBQ0EsVUFBSUksU0FBUyxHQUFHLEtBQUtDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixRQUFuQixFQUE2QkEsR0FBN0IsRUFBaEI7QUFDQUYsTUFBQUEsU0FBUyxDQUFDSCxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixjQUF4QjtBQUNBQyxNQUFBQSxlQUFlLENBQUNJLFdBQWhCLENBQTRCSCxTQUE1QixFQVJRLENBVVI7O0FBQ0EsVUFBSUksZ0JBQWdCLEdBQUdULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF2QjtBQUNBUSxNQUFBQSxnQkFBZ0IsQ0FBQ0MsU0FBakIsR0FBNkJaLElBQUksQ0FBQ2EsT0FBbEM7QUFFQVosTUFBQUEsWUFBWSxDQUFDUyxXQUFiLENBQXlCSixlQUF6QjtBQUNBTCxNQUFBQSxZQUFZLENBQUNTLFdBQWIsQ0FBeUJDLGdCQUF6QjtBQUVBLGFBQU9WLFlBQVA7QUFDSDtBQUVEOzs7Ozs7O3VDQUltQjtBQUNmLGFBQU8sSUFBSWEsR0FBSixDQUFRLENBQ1osQ0FBQyxRQUFELEVBQVcsSUFBSUMsNEJBQUosRUFBWCxDQURZLENBQVIsQ0FBUDtBQUdIOzs7O0VBckMwQkMscUI7O2VBd0NoQmxCLGdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQ3JlYXRlcyBhZGQgYnV0dG9uLlxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxVaUZhY3Rvcmllc1xcU2ltcGxlXHJcbiAqL1xyXG5cclxuaW1wb3J0IFVpRmFjdG9yeSBmcm9tICcuL3VpLWZhY3RvcnknO1xyXG4vLyBVSSBkZXBlbmRlbmNpZXNcclxuaW1wb3J0IEFkZFN2Z0ltZ0ZhY3RvcnkgZnJvbSBcIi4vYWRkLXN2Zy1pbWctZmFjdG9yeVwiO1xyXG5cclxuLyoqXHJcbiAqIEBleHRlbmRzIFVpRmFjdG9yeVxyXG4gKi9cclxuY2xhc3MgQWRkQnV0dG9uRmFjdG9yeSBleHRlbmRzIFVpRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZGF0YSA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoJGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBVaUZhY3RvcnkuYnVpbGQoKVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEge2NvbnRlbnQ6IGJ1dHRvblNpZ259IGV4cGVjdGVkXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKGRhdGEpIHtcclxuICAgICAgICBsZXQgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZC1idG4nKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGltZ1xyXG4gICAgICAgIGxldCBhZGRJbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgc3ZnQWRkSW1nID0gdGhpcy51aU9iamVjdHMuZ2V0KCdhZGRJbWcnKS5nZXQoKTtcclxuICAgICAgICBzdmdBZGRJbWcuY2xhc3NMaXN0LmFkZCgnYWRkLWJ0bl9faW1nJyk7XHJcbiAgICAgICAgYWRkSW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKHN2Z0FkZEltZyk7XHJcblxyXG4gICAgICAgIC8vIGJ1dHRvbiBzaWduXHJcbiAgICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmlubmVyVGV4dCA9IGRhdGEuY29udGVudDtcclxuXHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEltZ0NvbnRhaW5lcik7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gYnRuQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBVaUZhY3RvcnkudWlPYmplY3RzRmFjdG9yeSgpXHJcbiAgICAgKiBAcmV0dXJuIHtNYXA8YW55LCBVaUZhY3Rvcnk+fVxyXG4gICAgICovXHJcbiAgICB1aU9iamVjdHNGYWN0b3J5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWFwKFtcclxuICAgICAgICAgICBbJ2FkZEltZycsIG5ldyBBZGRTdmdJbWdGYWN0b3J5KCldXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZEJ1dHRvbkZhY3Rvcnk7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\add-button-factory.js","/..\\..\\ui-factories\\simple")
},{"./add-svg-img-factory":16,"./ui-factory":26,"6r38Q7":38,"buffer":36}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends UiFactory
 */
var AddFormContainerFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(AddFormContainerFactory, _UiFactory);

  function AddFormContainerFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, AddFormContainerFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddFormContainerFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data nothing expected
   */


  _createClass(AddFormContainerFactory, [{
    key: "build",
    value: function build(data) {
      var formContainer = document.createElement('div');
      formContainer.classList.add('js-add-form');
      formContainer.classList.add('add-form');
      formContainer.classList.add('column__panel');
      return formContainer;
    }
  }]);

  return AddFormContainerFactory;
}(_uiFactory["default"]);

var _default = AddFormContainerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1mb3JtLWNvbnRhaW5lci1mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkFkZEZvcm1Db250YWluZXJGYWN0b3J5IiwiJGRhdGEiLCJkYXRhIiwiZm9ybUNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIlVpRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSx1Qjs7Ozs7QUFDRixxQ0FBMkI7QUFBQSxRQUFmQyxLQUFlLHVFQUFQLEtBQU87O0FBQUE7O0FBQUEsZ0dBQ2pCQSxLQURpQjtBQUUxQjtBQUVEOzs7Ozs7OzswQkFJTUMsSSxFQUFNO0FBQ1IsVUFBSUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQUYsTUFBQUEsYUFBYSxDQUFDRyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixhQUE1QjtBQUNBSixNQUFBQSxhQUFhLENBQUNHLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFVBQTVCO0FBQ0FKLE1BQUFBLGFBQWEsQ0FBQ0csU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsZUFBNUI7QUFDQSxhQUFPSixhQUFQO0FBQ0g7Ozs7RUFmaUNLLHFCOztlQWtCdkJSLHVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQ3JlYXRlcyBhZGQgZm9ybSBjb250YWluZXIuXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFVpRmFjdG9yaWVzXFxTaW1wbGVcclxuICovXHJcblxyXG5pbXBvcnQgVWlGYWN0b3J5IGZyb20gJy4vdWktZmFjdG9yeSc7XHJcblxyXG4vKipcclxuICogQGV4dGVuZHMgVWlGYWN0b3J5XHJcbiAqL1xyXG5jbGFzcyBBZGRGb3JtQ29udGFpbmVyRmFjdG9yeSBleHRlbmRzIFVpRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZGF0YSA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoJGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBVaUZhY3RvcnkuYnVpbGQoKVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgbm90aGluZyBleHBlY3RlZFxyXG4gICAgICovXHJcbiAgICBidWlsZChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2pzLWFkZC1mb3JtJyk7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtZm9ybScpO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sdW1uX19wYW5lbCcpO1xyXG4gICAgICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRGb3JtQ29udGFpbmVyRmFjdG9yeTtcclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\add-form-container-factory.js","/..\\..\\ui-factories\\simple")
},{"./ui-factory":26,"6r38Q7":38,"buffer":36}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

var _addButtonFactory = _interopRequireDefault(require("./add-button-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends UiFactory
 */
var AddRecordButtonFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(AddRecordButtonFactory, _UiFactory);

  function AddRecordButtonFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, AddRecordButtonFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddRecordButtonFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data nothing expected
   */


  _createClass(AddRecordButtonFactory, [{
    key: "build",
    value: function build(data) {
      var addBtn = this.uiObjects.get('addBtn').get();
      addBtn.classList.add('js-show-add-record-form');
      addBtn.classList.add('column__panel');
      return addBtn;
    }
    /**
     * @see UiFactory.uiObjectsFactory()
     * @return {Map<any, UiFactory>}
     */

  }, {
    key: "uiObjectsFactory",
    value: function uiObjectsFactory() {
      return new Map([['addBtn', new _addButtonFactory["default"]({
        content: 'Добавить ещё одну карточку'
      })]]);
    }
  }]);

  return AddRecordButtonFactory;
}(_uiFactory["default"]);

var _default = AddRecordButtonFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1yZWNvcmQtYnV0dG9uLWZhY3RvcnkuanMiXSwibmFtZXMiOlsiQWRkUmVjb3JkQnV0dG9uRmFjdG9yeSIsIiRkYXRhIiwiZGF0YSIsImFkZEJ0biIsInVpT2JqZWN0cyIsImdldCIsImNsYXNzTGlzdCIsImFkZCIsIk1hcCIsIkFkZEJ1dHRvbkZhY3RvcnkiLCJjb250ZW50IiwiVWlGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLHNCOzs7OztBQUNGLG9DQUEyQjtBQUFBLFFBQWZDLEtBQWUsdUVBQVAsS0FBTzs7QUFBQTs7QUFBQSwrRkFDakJBLEtBRGlCO0FBRTFCO0FBRUQ7Ozs7Ozs7OzBCQUlNQyxJLEVBQU07QUFDUixVQUFJQyxNQUFNLEdBQUcsS0FBS0MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CLEVBQTZCQSxHQUE3QixFQUFiO0FBQ0FGLE1BQUFBLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIseUJBQXJCO0FBQ0FKLE1BQUFBLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsZUFBckI7QUFDQSxhQUFPSixNQUFQO0FBQ0g7QUFFRDs7Ozs7Ozt1Q0FJbUI7QUFDZixhQUFPLElBQUlLLEdBQUosQ0FBUSxDQUNaLENBQUMsUUFBRCxFQUFXLElBQUlDLDRCQUFKLENBQXFCO0FBQUNDLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQXJCLENBQVgsQ0FEWSxDQUFSLENBQVA7QUFHSDs7OztFQXhCZ0NDLHFCOztlQTJCdEJYLHNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQ3JlYXRlcyBhZGQgcmVjb3JkIGJ1dHRvbi5cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVWlGYWN0b3JpZXNcXFNpbXBsZVxyXG4gKi9cclxuXHJcbmltcG9ydCBVaUZhY3RvcnkgZnJvbSAnLi91aS1mYWN0b3J5JztcclxuLy8gVUkgZGVwZW5kZW5jaWVzXHJcbmltcG9ydCBBZGRCdXR0b25GYWN0b3J5IGZyb20gJy4vYWRkLWJ1dHRvbi1mYWN0b3J5JztcclxuXHJcbi8qKlxyXG4gKiBAZXh0ZW5kcyBVaUZhY3RvcnlcclxuICovXHJcbmNsYXNzIEFkZFJlY29yZEJ1dHRvbkZhY3RvcnkgZXh0ZW5kcyBVaUZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IoJGRhdGEgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCRkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVWlGYWN0b3J5LmJ1aWxkKClcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIG5vdGhpbmcgZXhwZWN0ZWRcclxuICAgICAqL1xyXG4gICAgYnVpbGQoZGF0YSkge1xyXG4gICAgICAgIGxldCBhZGRCdG4gPSB0aGlzLnVpT2JqZWN0cy5nZXQoJ2FkZEJ0bicpLmdldCgpO1xyXG4gICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdqcy1zaG93LWFkZC1yZWNvcmQtZm9ybScpO1xyXG4gICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdjb2x1bW5fX3BhbmVsJyk7XHJcbiAgICAgICAgcmV0dXJuIGFkZEJ0bjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVWlGYWN0b3J5LnVpT2JqZWN0c0ZhY3RvcnkoKVxyXG4gICAgICogQHJldHVybiB7TWFwPGFueSwgVWlGYWN0b3J5Pn1cclxuICAgICAqL1xyXG4gICAgdWlPYmplY3RzRmFjdG9yeSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hcChbXHJcbiAgICAgICAgICAgWydhZGRCdG4nLCBuZXcgQWRkQnV0dG9uRmFjdG9yeSh7Y29udGVudDogJ9CU0L7QsdCw0LLQuNGC0Ywg0LXRidGRINC+0LTQvdGDINC60LDRgNGC0L7Rh9C60YMnfSldXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFJlY29yZEJ1dHRvbkZhY3Rvcnk7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\add-record-button-factory.js","/..\\..\\ui-factories\\simple")
},{"./add-button-factory":12,"./ui-factory":26,"6r38Q7":38,"buffer":36}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

var _addFormContainerFactory = _interopRequireDefault(require("./add-form-container-factory"));

var _textareaFactory = _interopRequireDefault(require("./textarea-factory"));

var _formControlsContainerFactory = _interopRequireDefault(require("./form-controls-container-factory"));

var _buttonFactory = _interopRequireDefault(require("./button-factory"));

var _closeBtnFactory = _interopRequireDefault(require("./close-btn-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 *
 * @extends UiFactory
 */
var AddRecordFormFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(AddRecordFormFactory, _UiFactory);

  /**
   * @see UiFactory.uiObjects
   */
  function AddRecordFormFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, AddRecordFormFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddRecordFormFactory).call(this, $data));
  }
  /**
   * @see UiFactory.uiObjectsFactory()
   * @return {Map<any, UiFactory>}
   */


  _createClass(AddRecordFormFactory, [{
    key: "uiObjectsFactory",
    value: function uiObjectsFactory() {
      return new Map([['formContainer', new _addFormContainerFactory["default"]()], ['textarea', new _textareaFactory["default"]({
        placeholder: 'Введите название карточки'
      })], ['formControlsContainer', new _formControlsContainerFactory["default"]()], ['addBtn', new _buttonFactory["default"]({
        content: 'Добавить карточку'
      })], ['closeBtn', new _closeBtnFactory["default"]()]]);
    }
    /**
     * @see UiFactory.build()
     * @param {object} data nothing expected
     */

  }, {
    key: "build",
    value: function build(data) {
      var formContainer = this.uiObjects.get('formContainer').get();
      var textareaContainer = document.createElement('div');
      var textarea = this.uiObjects.get('textarea').get(); // Textarea

      textareaContainer.appendChild(textarea);
      var formControlsContainer = this.uiObjects.get('formControlsContainer').get(); // Div for controls
      // Controls

      var addBtn = this.getAddBtn();
      var closeBtn = this.getCloseBtn();
      formControlsContainer.appendChild(addBtn);
      formControlsContainer.appendChild(closeBtn);
      formContainer.appendChild(textareaContainer);
      formContainer.appendChild(formControlsContainer);
      return formContainer;
    }
    /**
     * @private
     * @return {HTMLDivElement}
     */

  }, {
    key: "getAddBtn",
    value: function getAddBtn() {
      var addBtn = document.createElement('div');
      var btn = this.uiObjects.get('addBtn').get();
      addBtn.appendChild(btn);
      return addBtn;
    }
    /**
     * @private
     * @return {HTMLDivElement}
     */

  }, {
    key: "getCloseBtn",
    value: function getCloseBtn() {
      var closeBtnContainer = document.createElement('div');
      var closeBtn = this.uiObjects.get('closeBtn').get();
      closeBtn.classList.add('add-form__close-img');
      closeBtn.classList.add('js-close-add-record-form');
      closeBtnContainer.appendChild(closeBtn);
      return closeBtnContainer;
    }
  }]);

  return AddRecordFormFactory;
}(_uiFactory["default"]);

var _default = AddRecordFormFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1yZWNvcmQtZm9ybS1mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkFkZFJlY29yZEZvcm1GYWN0b3J5IiwiJGRhdGEiLCJNYXAiLCJBZGRGb3JtQ29udGFpbmVyRmFjdG9yeSIsIlRleHRhcmVhRmFjdG9yeSIsInBsYWNlaG9sZGVyIiwiRm9ybUNvbnRyb2xzQ29udGFpbmVyRmFjdG9yeSIsIkJ1dHRvbkZhY3RvcnkiLCJjb250ZW50IiwiQ2xvc2VCdG5GYWN0b3J5IiwiZGF0YSIsImZvcm1Db250YWluZXIiLCJ1aU9iamVjdHMiLCJnZXQiLCJ0ZXh0YXJlYUNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRhcmVhIiwiYXBwZW5kQ2hpbGQiLCJmb3JtQ29udHJvbHNDb250YWluZXIiLCJhZGRCdG4iLCJnZXRBZGRCdG4iLCJjbG9zZUJ0biIsImdldENsb3NlQnRuIiwiYnRuIiwiY2xvc2VCdG5Db250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJVaUZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7O0lBSU1BLG9COzs7OztBQUNGOzs7QUFHQSxrQ0FBMkI7QUFBQSxRQUFmQyxLQUFlLHVFQUFQLEtBQU87O0FBQUE7O0FBQUEsNkZBQ2pCQSxLQURpQjtBQUUxQjtBQUVEOzs7Ozs7Ozt1Q0FJbUI7QUFDZixhQUFPLElBQUlDLEdBQUosQ0FBUSxDQUNYLENBQUMsZUFBRCxFQUFrQixJQUFJQyxtQ0FBSixFQUFsQixDQURXLEVBRVgsQ0FBQyxVQUFELEVBQWEsSUFBSUMsMkJBQUosQ0FBb0I7QUFBQ0MsUUFBQUEsV0FBVyxFQUFFO0FBQWQsT0FBcEIsQ0FBYixDQUZXLEVBR1gsQ0FBQyx1QkFBRCxFQUEwQixJQUFJQyx3Q0FBSixFQUExQixDQUhXLEVBSVgsQ0FBQyxRQUFELEVBQVcsSUFBSUMseUJBQUosQ0FBa0I7QUFBQ0MsUUFBQUEsT0FBTyxFQUFFO0FBQVYsT0FBbEIsQ0FBWCxDQUpXLEVBS1gsQ0FBQyxVQUFELEVBQWEsSUFBSUMsMkJBQUosRUFBYixDQUxXLENBQVIsQ0FBUDtBQU9IO0FBRUQ7Ozs7Ozs7MEJBSU1DLEksRUFBTTtBQUNSLFVBQUlDLGFBQWEsR0FBRyxLQUFLQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsZUFBbkIsRUFBb0NBLEdBQXBDLEVBQXBCO0FBRUEsVUFBSUMsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF4QjtBQUNBLFVBQUlDLFFBQVEsR0FBRyxLQUFLTCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBbkIsRUFBK0JBLEdBQS9CLEVBQWYsQ0FKUSxDQUk2Qzs7QUFDckRDLE1BQUFBLGlCQUFpQixDQUFDSSxXQUFsQixDQUE4QkQsUUFBOUI7QUFFQSxVQUFJRSxxQkFBcUIsR0FBRyxLQUFLUCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsdUJBQW5CLEVBQTRDQSxHQUE1QyxFQUE1QixDQVBRLENBT3VFO0FBRS9FOztBQUNBLFVBQUlPLE1BQU0sR0FBRyxLQUFLQyxTQUFMLEVBQWI7QUFDQSxVQUFJQyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQUFmO0FBRUFKLE1BQUFBLHFCQUFxQixDQUFDRCxXQUF0QixDQUFrQ0UsTUFBbEM7QUFDQUQsTUFBQUEscUJBQXFCLENBQUNELFdBQXRCLENBQWtDSSxRQUFsQztBQUVBWCxNQUFBQSxhQUFhLENBQUNPLFdBQWQsQ0FBMEJKLGlCQUExQjtBQUNBSCxNQUFBQSxhQUFhLENBQUNPLFdBQWQsQ0FBMEJDLHFCQUExQjtBQUVBLGFBQU9SLGFBQVA7QUFDSDtBQUVEOzs7Ozs7O2dDQUlZO0FBQ1IsVUFBSVMsTUFBTSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBLFVBQUlRLEdBQUcsR0FBRyxLQUFLWixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsUUFBbkIsRUFBNkJBLEdBQTdCLEVBQVY7QUFDQU8sTUFBQUEsTUFBTSxDQUFDRixXQUFQLENBQW1CTSxHQUFuQjtBQUNBLGFBQU9KLE1BQVA7QUFDSDtBQUVEOzs7Ozs7O2tDQUljO0FBQ1YsVUFBSUssaUJBQWlCLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF4QjtBQUNBLFVBQUlNLFFBQVEsR0FBRyxLQUFLVixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBbkIsRUFBK0JBLEdBQS9CLEVBQWY7QUFDQVMsTUFBQUEsUUFBUSxDQUFDSSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixxQkFBdkI7QUFDQUwsTUFBQUEsUUFBUSxDQUFDSSxTQUFULENBQW1CQyxHQUFuQixDQUF1QiwwQkFBdkI7QUFDQUYsTUFBQUEsaUJBQWlCLENBQUNQLFdBQWxCLENBQThCSSxRQUE5QjtBQUNBLGFBQU9HLGlCQUFQO0FBQ0g7Ozs7RUF0RThCRyxxQjs7ZUF5RXBCNUIsb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBDcmVhdGVzIGFkZCByZWNvcmQgZm9ybS5cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVWlGYWN0b3JpZXNcXFNpbXBsZVxyXG4gKi9cclxuXHJcbmltcG9ydCBVaUZhY3RvcnkgZnJvbSAnLi91aS1mYWN0b3J5JztcclxuLy8gU21hbGxlciBVSSBwYXJ0c1xyXG5pbXBvcnQgQWRkRm9ybUNvbnRhaW5lckZhY3RvcnkgZnJvbSBcIi4vYWRkLWZvcm0tY29udGFpbmVyLWZhY3RvcnlcIjtcclxuaW1wb3J0IFRleHRhcmVhRmFjdG9yeSBmcm9tICcuL3RleHRhcmVhLWZhY3RvcnknO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xzQ29udGFpbmVyRmFjdG9yeSBmcm9tICcuL2Zvcm0tY29udHJvbHMtY29udGFpbmVyLWZhY3RvcnknO1xyXG5pbXBvcnQgQnV0dG9uRmFjdG9yeSBmcm9tIFwiLi9idXR0b24tZmFjdG9yeVwiO1xyXG5pbXBvcnQgQ2xvc2VCdG5GYWN0b3J5IGZyb20gXCIuL2Nsb3NlLWJ0bi1mYWN0b3J5XCI7XHJcblxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBleHRlbmRzIFVpRmFjdG9yeVxyXG4gKi9cclxuY2xhc3MgQWRkUmVjb3JkRm9ybUZhY3RvcnkgZXh0ZW5kcyBVaUZhY3Rvcnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAc2VlIFVpRmFjdG9yeS51aU9iamVjdHNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoJGRhdGEgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCRkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVWlGYWN0b3J5LnVpT2JqZWN0c0ZhY3RvcnkoKVxyXG4gICAgICogQHJldHVybiB7TWFwPGFueSwgVWlGYWN0b3J5Pn1cclxuICAgICAqL1xyXG4gICAgdWlPYmplY3RzRmFjdG9yeSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFsnZm9ybUNvbnRhaW5lcicsIG5ldyBBZGRGb3JtQ29udGFpbmVyRmFjdG9yeSgpXSxcclxuICAgICAgICAgICAgWyd0ZXh0YXJlYScsIG5ldyBUZXh0YXJlYUZhY3Rvcnkoe3BsYWNlaG9sZGVyOiAn0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDQutCw0YDRgtC+0YfQutC4J30pXSxcclxuICAgICAgICAgICAgWydmb3JtQ29udHJvbHNDb250YWluZXInLCBuZXcgRm9ybUNvbnRyb2xzQ29udGFpbmVyRmFjdG9yeSgpXSxcclxuICAgICAgICAgICAgWydhZGRCdG4nLCBuZXcgQnV0dG9uRmFjdG9yeSh7Y29udGVudDogJ9CU0L7QsdCw0LLQuNGC0Ywg0LrQsNGA0YLQvtGH0LrRgyd9KV0sXHJcbiAgICAgICAgICAgIFsnY2xvc2VCdG4nLCBuZXcgQ2xvc2VCdG5GYWN0b3J5KCldXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc2VlIFVpRmFjdG9yeS5idWlsZCgpXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBub3RoaW5nIGV4cGVjdGVkXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKGRhdGEpIHtcclxuICAgICAgICBsZXQgZm9ybUNvbnRhaW5lciA9IHRoaXMudWlPYmplY3RzLmdldCgnZm9ybUNvbnRhaW5lcicpLmdldCgpO1xyXG5cclxuICAgICAgICBsZXQgdGV4dGFyZWFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgdGV4dGFyZWEgPSB0aGlzLnVpT2JqZWN0cy5nZXQoJ3RleHRhcmVhJykuZ2V0KCk7IC8vIFRleHRhcmVhXHJcbiAgICAgICAgdGV4dGFyZWFDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG5cclxuICAgICAgICBsZXQgZm9ybUNvbnRyb2xzQ29udGFpbmVyID0gdGhpcy51aU9iamVjdHMuZ2V0KCdmb3JtQ29udHJvbHNDb250YWluZXInKS5nZXQoKTsgLy8gRGl2IGZvciBjb250cm9sc1xyXG5cclxuICAgICAgICAvLyBDb250cm9sc1xyXG4gICAgICAgIGxldCBhZGRCdG4gPSB0aGlzLmdldEFkZEJ0bigpO1xyXG4gICAgICAgIGxldCBjbG9zZUJ0biA9IHRoaXMuZ2V0Q2xvc2VCdG4oKTtcclxuXHJcbiAgICAgICAgZm9ybUNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XHJcbiAgICAgICAgZm9ybUNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0YXJlYUNvbnRhaW5lcik7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udHJvbHNDb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgZ2V0QWRkQnRuKCkge1xyXG4gICAgICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgYnRuID0gdGhpcy51aU9iamVjdHMuZ2V0KCdhZGRCdG4nKS5nZXQoKTtcclxuICAgICAgICBhZGRCdG4uYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICByZXR1cm4gYWRkQnRuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm4ge0hUTUxEaXZFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBnZXRDbG9zZUJ0bigpIHtcclxuICAgICAgICBsZXQgY2xvc2VCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgY2xvc2VCdG4gPSB0aGlzLnVpT2JqZWN0cy5nZXQoJ2Nsb3NlQnRuJykuZ2V0KCk7XHJcbiAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWZvcm1fX2Nsb3NlLWltZycpO1xyXG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2pzLWNsb3NlLWFkZC1yZWNvcmQtZm9ybScpO1xyXG4gICAgICAgIGNsb3NlQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgICByZXR1cm4gY2xvc2VCdG5Db250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFJlY29yZEZvcm1GYWN0b3J5O1xyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\add-record-form-factory.js","/..\\..\\ui-factories\\simple")
},{"./add-form-container-factory":13,"./button-factory":17,"./close-btn-factory":18,"./form-controls-container-factory":23,"./textarea-factory":25,"./ui-factory":26,"6r38Q7":38,"buffer":36}],16:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends UiFactory
 */
var AddSvgImgFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(AddSvgImgFactory, _UiFactory);

  function AddSvgImgFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, AddSvgImgFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddSvgImgFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data nothing expected
   */


  _createClass(AddSvgImgFactory, [{
    key: "build",
    value: function build(data) {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 15 15');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('fill-rule', 'evenodd');
      path.setAttribute('clip-rule', 'evenodd');
      path.setAttribute('d', 'M14.1412 6.64122H8.35878V0.858779C8.35878 0.400763 7.95802 0 7.5 0C7.04198 0 6.64122 0.400763 6.64122 0.858779V6.64122H0.858779C0.400763 6.64122 0 7.04198 0 7.5C0 7.95801 0.400763 8.35878 0.858779 8.35878H6.64122V14.1412C6.64122 14.5992 7.04198 15 7.5 15C7.95802 15 8.35878 14.5992 8.35878 14.1412V8.35878H14.1412C14.5992 8.35878 15 7.95801 15 7.5C15 7.04198 14.5992 6.64122 14.1412 6.64122Z');
      svg.appendChild(path);
      return svg;
    }
  }]);

  return AddSvgImgFactory;
}(_uiFactory["default"]);

var _default = AddSvgImgFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdmctaW1nLWZhY3RvcnkuanMiXSwibmFtZXMiOlsiQWRkU3ZnSW1nRmFjdG9yeSIsIiRkYXRhIiwiZGF0YSIsInN2ZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlIiwicGF0aCIsImFwcGVuZENoaWxkIiwiVWlGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGdCOzs7OztBQUNGLDhCQUEyQjtBQUFBLFFBQWZDLEtBQWUsdUVBQVAsS0FBTzs7QUFBQTs7QUFBQSx5RkFDakJBLEtBRGlCO0FBRTFCO0FBRUQ7Ozs7Ozs7OzBCQUlNQyxJLEVBQU07QUFDUixVQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5Qiw0QkFBekIsRUFBdUQsS0FBdkQsQ0FBVjtBQUNBRixNQUFBQSxHQUFHLENBQUNHLFlBQUosQ0FBaUIsU0FBakIsRUFBNEIsV0FBNUI7QUFFQSxVQUFJQyxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsZUFBVCxDQUF5Qiw0QkFBekIsRUFBc0QsTUFBdEQsQ0FBWDtBQUNBRSxNQUFBQSxJQUFJLENBQUNELFlBQUwsQ0FBa0IsV0FBbEIsRUFBK0IsU0FBL0I7QUFDQUMsTUFBQUEsSUFBSSxDQUFDRCxZQUFMLENBQWtCLFdBQWxCLEVBQStCLFNBQS9CO0FBQ0FDLE1BQUFBLElBQUksQ0FBQ0QsWUFBTCxDQUFrQixHQUFsQixFQUF1Qix5WUFBdkI7QUFFQUgsTUFBQUEsR0FBRyxDQUFDSyxXQUFKLENBQWdCRCxJQUFoQjtBQUNBLGFBQU9KLEdBQVA7QUFDSDs7OztFQXBCMEJNLHFCOztlQXVCaEJULGdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQ3JlYXRlcyBhZGQgc3ZnIGltYWdlLlxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxVaUZhY3Rvcmllc1xcU2ltcGxlXHJcbiAqL1xyXG5cclxuaW1wb3J0IFVpRmFjdG9yeSBmcm9tICcuL3VpLWZhY3RvcnknO1xyXG5cclxuLyoqXHJcbiAqIEBleHRlbmRzIFVpRmFjdG9yeVxyXG4gKi9cclxuY2xhc3MgQWRkU3ZnSW1nRmFjdG9yeSBleHRlbmRzIFVpRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZGF0YSA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoJGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBVaUZhY3RvcnkuYnVpbGQoKVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgbm90aGluZyBleHBlY3RlZFxyXG4gICAgICovXHJcbiAgICBidWlsZChkYXRhKSB7XHJcbiAgICAgICAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMTUgMTUnKTtcclxuXHJcbiAgICAgICAgbGV0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywncGF0aCcpO1xyXG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdmaWxsLXJ1bGUnLCAnZXZlbm9kZCcpO1xyXG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdjbGlwLXJ1bGUnLCAnZXZlbm9kZCcpO1xyXG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgJ00xNC4xNDEyIDYuNjQxMjJIOC4zNTg3OFYwLjg1ODc3OUM4LjM1ODc4IDAuNDAwNzYzIDcuOTU4MDIgMCA3LjUgMEM3LjA0MTk4IDAgNi42NDEyMiAwLjQwMDc2MyA2LjY0MTIyIDAuODU4Nzc5VjYuNjQxMjJIMC44NTg3NzlDMC40MDA3NjMgNi42NDEyMiAwIDcuMDQxOTggMCA3LjVDMCA3Ljk1ODAxIDAuNDAwNzYzIDguMzU4NzggMC44NTg3NzkgOC4zNTg3OEg2LjY0MTIyVjE0LjE0MTJDNi42NDEyMiAxNC41OTkyIDcuMDQxOTggMTUgNy41IDE1QzcuOTU4MDIgMTUgOC4zNTg3OCAxNC41OTkyIDguMzU4NzggMTQuMTQxMlY4LjM1ODc4SDE0LjE0MTJDMTQuNTk5MiA4LjM1ODc4IDE1IDcuOTU4MDEgMTUgNy41QzE1IDcuMDQxOTggMTQuNTk5MiA2LjY0MTIyIDE0LjE0MTIgNi42NDEyMlonKTtcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xyXG4gICAgICAgIHJldHVybiBzdmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFN2Z0ltZ0ZhY3Rvcnk7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\add-svg-img-factory.js","/..\\..\\ui-factories\\simple")
},{"./ui-factory":26,"6r38Q7":38,"buffer":36}],17:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends UiFactory
 */
var ButtonFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(ButtonFactory, _UiFactory);

  function ButtonFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, ButtonFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data {content: buttonSign} expected
   */


  _createClass(ButtonFactory, [{
    key: "build",
    value: function build(data) {
      var btn = document.createElement('button');
      btn.classList.add('btn');
      btn.classList.add('btn_primary');
      btn.innerText = data.content;
      return btn;
    }
  }]);

  return ButtonFactory;
}(_uiFactory["default"]);

var _default = ButtonFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkJ1dHRvbkZhY3RvcnkiLCIkZGF0YSIsImRhdGEiLCJidG4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJjb250ZW50IiwiVWlGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGE7Ozs7O0FBQ0YsMkJBQTJCO0FBQUEsUUFBZkMsS0FBZSx1RUFBUCxLQUFPOztBQUFBOztBQUFBLHNGQUNqQkEsS0FEaUI7QUFFMUI7QUFFRDs7Ozs7Ozs7MEJBSU1DLEksRUFBTTtBQUNSLFVBQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVY7QUFDQUYsTUFBQUEsR0FBRyxDQUFDRyxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsS0FBbEI7QUFDQUosTUFBQUEsR0FBRyxDQUFDRyxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsYUFBbEI7QUFDQUosTUFBQUEsR0FBRyxDQUFDSyxTQUFKLEdBQWdCTixJQUFJLENBQUNPLE9BQXJCO0FBQ0EsYUFBT04sR0FBUDtBQUNIOzs7O0VBZnVCTyxxQjs7ZUFrQmJWLGEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBDcmVhdGVzIGJ1dHRvbi5cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVWlGYWN0b3JpZXNcXFNpbXBsZVxyXG4gKi9cclxuXHJcbmltcG9ydCBVaUZhY3RvcnkgZnJvbSAnLi91aS1mYWN0b3J5JztcclxuXHJcbi8qKlxyXG4gKiBAZXh0ZW5kcyBVaUZhY3RvcnlcclxuICovXHJcbmNsYXNzIEJ1dHRvbkZhY3RvcnkgZXh0ZW5kcyBVaUZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IoJGRhdGEgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCRkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVWlGYWN0b3J5LmJ1aWxkKClcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIHtjb250ZW50OiBidXR0b25TaWdufSBleHBlY3RlZFxyXG4gICAgICovXHJcbiAgICBidWlsZChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuX3ByaW1hcnknKTtcclxuICAgICAgICBidG4uaW5uZXJUZXh0ID0gZGF0YS5jb250ZW50O1xyXG4gICAgICAgIHJldHVybiBidG47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkZhY3Rvcnk7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\button-factory.js","/..\\..\\ui-factories\\simple")
},{"./ui-factory":26,"6r38Q7":38,"buffer":36}],18:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends UiFactory
 */
var CloseBtnFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(CloseBtnFactory, _UiFactory);

  function CloseBtnFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, CloseBtnFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloseBtnFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data nothing expected
   */


  _createClass(CloseBtnFactory, [{
    key: "build",
    value: function build(data) {
      var closeBtnSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      closeBtnSvg.setAttribute('viewBox', '0 0 15 15');
      closeBtnSvg.setAttribute('fill', 'none');
      var closeBtnPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      closeBtnPath.setAttribute('fill-rule', 'evenodd');
      closeBtnPath.setAttribute('clip-rule', 'evenodd');
      closeBtnPath.setAttribute('d', 'M7.5 6.71875L14.2188 0L15 0.78125L8.28125 7.5L15 14.2188L14.2188 15L7.5 8.28125L0.78125 15L0 14.2188L6.71875 7.5L0 0.78125L0.78125 0L7.5 6.71875Z');
      closeBtnSvg.appendChild(closeBtnPath);
      return closeBtnSvg;
    }
  }]);

  return CloseBtnFactory;
}(_uiFactory["default"]);

var _default = CloseBtnFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3NlLWJ0bi1mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkNsb3NlQnRuRmFjdG9yeSIsIiRkYXRhIiwiZGF0YSIsImNsb3NlQnRuU3ZnIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGUiLCJjbG9zZUJ0blBhdGgiLCJhcHBlbmRDaGlsZCIsIlVpRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxlOzs7OztBQUNGLDZCQUEyQjtBQUFBLFFBQWZDLEtBQWUsdUVBQVAsS0FBTzs7QUFBQTs7QUFBQSx3RkFDakJBLEtBRGlCO0FBRTFCO0FBRUQ7Ozs7Ozs7OzBCQUlNQyxJLEVBQU07QUFDUixVQUFJQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5Qiw0QkFBekIsRUFBdUQsS0FBdkQsQ0FBbEI7QUFDQUYsTUFBQUEsV0FBVyxDQUFDRyxZQUFaLENBQXlCLFNBQXpCLEVBQW9DLFdBQXBDO0FBQ0FILE1BQUFBLFdBQVcsQ0FBQ0csWUFBWixDQUF5QixNQUF6QixFQUFpQyxNQUFqQztBQUVBLFVBQUlDLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxlQUFULENBQXlCLDRCQUF6QixFQUFzRCxNQUF0RCxDQUFuQjtBQUNBRSxNQUFBQSxZQUFZLENBQUNELFlBQWIsQ0FBMEIsV0FBMUIsRUFBdUMsU0FBdkM7QUFDQUMsTUFBQUEsWUFBWSxDQUFDRCxZQUFiLENBQTBCLFdBQTFCLEVBQXVDLFNBQXZDO0FBQ0FDLE1BQUFBLFlBQVksQ0FBQ0QsWUFBYixDQUEwQixHQUExQixFQUErQixtSkFBL0I7QUFFQUgsTUFBQUEsV0FBVyxDQUFDSyxXQUFaLENBQXdCRCxZQUF4QjtBQUNBLGFBQU9KLFdBQVA7QUFDSDs7OztFQXJCeUJNLHFCOztlQXdCZlQsZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IENyZWF0ZXMgY2xvc2UgYnRuLlxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxVaUZhY3Rvcmllc1xcU2ltcGxlXHJcbiAqL1xyXG5cclxuaW1wb3J0IFVpRmFjdG9yeSBmcm9tICcuL3VpLWZhY3RvcnknO1xyXG5cclxuLyoqXHJcbiAqIEBleHRlbmRzIFVpRmFjdG9yeVxyXG4gKi9cclxuY2xhc3MgQ2xvc2VCdG5GYWN0b3J5IGV4dGVuZHMgVWlGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKCRkYXRhID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcigkZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc2VlIFVpRmFjdG9yeS5idWlsZCgpXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBub3RoaW5nIGV4cGVjdGVkXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKGRhdGEpIHtcclxuICAgICAgICBsZXQgY2xvc2VCdG5TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gICAgICAgIGNsb3NlQnRuU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMTUgMTUnKTtcclxuICAgICAgICBjbG9zZUJ0blN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xyXG5cclxuICAgICAgICBsZXQgY2xvc2VCdG5QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3BhdGgnKTtcclxuICAgICAgICBjbG9zZUJ0blBhdGguc2V0QXR0cmlidXRlKCdmaWxsLXJ1bGUnLCAnZXZlbm9kZCcpO1xyXG4gICAgICAgIGNsb3NlQnRuUGF0aC5zZXRBdHRyaWJ1dGUoJ2NsaXAtcnVsZScsICdldmVub2RkJyk7XHJcbiAgICAgICAgY2xvc2VCdG5QYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNNy41IDYuNzE4NzVMMTQuMjE4OCAwTDE1IDAuNzgxMjVMOC4yODEyNSA3LjVMMTUgMTQuMjE4OEwxNC4yMTg4IDE1TDcuNSA4LjI4MTI1TDAuNzgxMjUgMTVMMCAxNC4yMTg4TDYuNzE4NzUgNy41TDAgMC43ODEyNUwwLjc4MTI1IDBMNy41IDYuNzE4NzVaJyk7XHJcblxyXG4gICAgICAgIGNsb3NlQnRuU3ZnLmFwcGVuZENoaWxkKGNsb3NlQnRuUGF0aCk7XHJcbiAgICAgICAgcmV0dXJuIGNsb3NlQnRuU3ZnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbG9zZUJ0bkZhY3Rvcnk7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\close-btn-factory.js","/..\\..\\ui-factories\\simple")
},{"./ui-factory":26,"6r38Q7":38,"buffer":36}],19:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends UiFactory
 */
var ColumnFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(ColumnFactory, _UiFactory);

  function ColumnFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, ColumnFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColumnFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data {children: [DOMchild1, DOMchild2, ...]} <- Optional
   */


  _createClass(ColumnFactory, [{
    key: "build",
    value: function build(data) {
      // column wrap
      var column = document.createElement('section');
      column.classList.add('js-column_wrap');
      column.classList.add('column_wrap'); // column body

      var columnBody = document.createElement('div');
      columnBody.classList.add('js-column');
      columnBody.classList.add('column'); // pasting children to column if they are provided

      if (Array.isArray(data.children)) {
        for (var i = 0; i < data.children.length; i++) {
          columnBody.appendChild(data.children[i]);
        }
      }

      column.appendChild(columnBody);
      return column;
    }
  }]);

  return ColumnFactory;
}(_uiFactory["default"]);

var _default = ColumnFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbi1mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkNvbHVtbkZhY3RvcnkiLCIkZGF0YSIsImRhdGEiLCJjb2x1bW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb2x1bW5Cb2R5IiwiQXJyYXkiLCJpc0FycmF5IiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIiwiYXBwZW5kQ2hpbGQiLCJVaUZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYTs7Ozs7QUFDRiwyQkFBMkI7QUFBQSxRQUFmQyxLQUFlLHVFQUFQLEtBQU87O0FBQUE7O0FBQUEsc0ZBQ2pCQSxLQURpQjtBQUUxQjtBQUVEOzs7Ozs7OzswQkFJTUMsSSxFQUFNO0FBQ1I7QUFDQSxVQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFiO0FBQ0FGLE1BQUFBLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsZ0JBQXJCO0FBQ0FKLE1BQUFBLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsYUFBckIsRUFKUSxDQU1SOztBQUNBLFVBQUlDLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWpCO0FBQ0FHLE1BQUFBLFVBQVUsQ0FBQ0YsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsV0FBekI7QUFDQUMsTUFBQUEsVUFBVSxDQUFDRixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixRQUF6QixFQVRRLENBV1I7O0FBQ0EsVUFBSUUsS0FBSyxDQUFDQyxPQUFOLENBQWNSLElBQUksQ0FBQ1MsUUFBbkIsQ0FBSixFQUFrQztBQUM5QixhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdWLElBQUksQ0FBQ1MsUUFBTCxDQUFjRSxNQUFsQyxFQUEwQ0QsQ0FBQyxFQUEzQyxFQUErQztBQUMzQ0osVUFBQUEsVUFBVSxDQUFDTSxXQUFYLENBQXVCWixJQUFJLENBQUNTLFFBQUwsQ0FBY0MsQ0FBZCxDQUF2QjtBQUNIO0FBQ0o7O0FBRURULE1BQUFBLE1BQU0sQ0FBQ1csV0FBUCxDQUFtQk4sVUFBbkI7QUFDQSxhQUFPTCxNQUFQO0FBQ0g7Ozs7RUE3QnVCWSxxQjs7ZUFnQ2JmLGEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBDcmVhdGVzIGJhc2ljIGZvdW5kYXRpb24gZm9yIGNvbHVtbi5cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVWlGYWN0b3JpZXNcXFNpbXBsZVxyXG4gKi9cclxuXHJcbmltcG9ydCBVaUZhY3RvcnkgZnJvbSAnLi91aS1mYWN0b3J5JztcclxuXHJcbi8qKlxyXG4gKiBAZXh0ZW5kcyBVaUZhY3RvcnlcclxuICovXHJcbmNsYXNzIENvbHVtbkZhY3RvcnkgZXh0ZW5kcyBVaUZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IoJGRhdGEgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCRkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVWlGYWN0b3J5LmJ1aWxkKClcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIHtjaGlsZHJlbjogW0RPTWNoaWxkMSwgRE9NY2hpbGQyLCAuLi5dfSA8LSBPcHRpb25hbFxyXG4gICAgICovXHJcbiAgICBidWlsZChkYXRhKSB7XHJcbiAgICAgICAgLy8gY29sdW1uIHdyYXBcclxuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKCdqcy1jb2x1bW5fd3JhcCcpO1xyXG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2x1bW5fd3JhcCcpO1xyXG5cclxuICAgICAgICAvLyBjb2x1bW4gYm9keVxyXG4gICAgICAgIGxldCBjb2x1bW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29sdW1uQm9keS5jbGFzc0xpc3QuYWRkKCdqcy1jb2x1bW4nKTtcclxuICAgICAgICBjb2x1bW5Cb2R5LmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicpO1xyXG5cclxuICAgICAgICAvLyBwYXN0aW5nIGNoaWxkcmVuIHRvIGNvbHVtbiBpZiB0aGV5IGFyZSBwcm92aWRlZFxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uQm9keS5hcHBlbmRDaGlsZChkYXRhLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNvbHVtbkJvZHkpO1xyXG4gICAgICAgIHJldHVybiBjb2x1bW47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbHVtbkZhY3Rvcnk7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\column-factory.js","/..\\..\\ui-factories\\simple")
},{"./ui-factory":26,"6r38Q7":38,"buffer":36}],20:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends UiFactory
 */
var ColumnFooterFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(ColumnFooterFactory, _UiFactory);

  function ColumnFooterFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, ColumnFooterFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColumnFooterFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data {children: [DOMchild1, DOMchild2, ...]} <- Optional
   */


  _createClass(ColumnFooterFactory, [{
    key: "build",
    value: function build(data) {
      // footer
      var footer = document.createElement('footer');
      footer.classList.add('js-column__panel_wrap');
      footer.classList.add('column__panel_wrap'); // pasting children if they are provided

      if (Array.isArray(data.children)) {
        for (var i = 0; i < data.children.length; i++) {
          footer.appendChild(data.children[i]);
        }
      }

      return footer;
    }
  }]);

  return ColumnFooterFactory;
}(_uiFactory["default"]);

var _default = ColumnFooterFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbi1mb290ZXItZmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJDb2x1bW5Gb290ZXJGYWN0b3J5IiwiJGRhdGEiLCJkYXRhIiwiZm9vdGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiQXJyYXkiLCJpc0FycmF5IiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIiwiYXBwZW5kQ2hpbGQiLCJVaUZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsbUI7Ozs7O0FBQ0YsaUNBQTJCO0FBQUEsUUFBZkMsS0FBZSx1RUFBUCxLQUFPOztBQUFBOztBQUFBLDRGQUNqQkEsS0FEaUI7QUFFMUI7QUFFRDs7Ozs7Ozs7MEJBSU1DLEksRUFBTTtBQUNSO0FBQ0EsVUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRixNQUFBQSxNQUFNLENBQUNHLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLHVCQUFyQjtBQUNBSixNQUFBQSxNQUFNLENBQUNHLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLG9CQUFyQixFQUpRLENBT1I7O0FBQ0EsVUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNQLElBQUksQ0FBQ1EsUUFBbkIsQ0FBSixFQUFrQztBQUM5QixhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdULElBQUksQ0FBQ1EsUUFBTCxDQUFjRSxNQUFsQyxFQUEwQ0QsQ0FBQyxFQUEzQyxFQUErQztBQUMzQ1IsVUFBQUEsTUFBTSxDQUFDVSxXQUFQLENBQW1CWCxJQUFJLENBQUNRLFFBQUwsQ0FBY0MsQ0FBZCxDQUFuQjtBQUNIO0FBQ0o7O0FBRUQsYUFBT1IsTUFBUDtBQUNIOzs7O0VBeEI2QlcscUI7O2VBMkJuQmQsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBDcmVhdGVzIGNvbHVtbiBmb290ZXIgZm91bmRhdGlvbi5cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVWlGYWN0b3JpZXNcXFNpbXBsZVxyXG4gKi9cclxuXHJcbmltcG9ydCBVaUZhY3RvcnkgZnJvbSAnLi91aS1mYWN0b3J5JztcclxuXHJcbi8qKlxyXG4gKiBAZXh0ZW5kcyBVaUZhY3RvcnlcclxuICovXHJcbmNsYXNzIENvbHVtbkZvb3RlckZhY3RvcnkgZXh0ZW5kcyBVaUZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IoJGRhdGEgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCRkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVWlGYWN0b3J5LmJ1aWxkKClcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIHtjaGlsZHJlbjogW0RPTWNoaWxkMSwgRE9NY2hpbGQyLCAuLi5dfSA8LSBPcHRpb25hbFxyXG4gICAgICovXHJcbiAgICBidWlsZChkYXRhKSB7XHJcbiAgICAgICAgLy8gZm9vdGVyXHJcbiAgICAgICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdqcy1jb2x1bW5fX3BhbmVsX3dyYXAnKTtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnY29sdW1uX19wYW5lbF93cmFwJyk7XHJcblxyXG5cclxuICAgICAgICAvLyBwYXN0aW5nIGNoaWxkcmVuIGlmIHRoZXkgYXJlIHByb3ZpZGVkXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5jaGlsZHJlbikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGF0YS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmb290ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbHVtbkZvb3RlckZhY3Rvcnk7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\column-footer-factory.js","/..\\..\\ui-factories\\simple")
},{"./ui-factory":26,"6r38Q7":38,"buffer":36}],21:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

var _addFormContainerFactory = _interopRequireDefault(require("./add-form-container-factory"));

var _textInputFactory = _interopRequireDefault(require("./text-input-factory"));

var _formControlsContainerFactory = _interopRequireDefault(require("./form-controls-container-factory"));

var _buttonFactory = _interopRequireDefault(require("./button-factory"));

var _closeBtnFactory = _interopRequireDefault(require("./close-btn-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 *
 * @extends UiFactory
 */
var CreateColumnFormFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(CreateColumnFormFactory, _UiFactory);

  /**
   * @see UiFactory.uiObjects
   */
  function CreateColumnFormFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, CreateColumnFormFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(CreateColumnFormFactory).call(this, $data));
  }
  /**
   * @see UiFactory.uiObjectsFactory()
   * @return {Map<any, UiFactory>}
   */


  _createClass(CreateColumnFormFactory, [{
    key: "uiObjectsFactory",
    value: function uiObjectsFactory() {
      return new Map([['formContainer', new _addFormContainerFactory["default"]()], ['input', new _textInputFactory["default"]({
        placeholder: 'Введите название колонки'
      })], ['formControlsContainer', new _formControlsContainerFactory["default"]()], ['addBtn', new _buttonFactory["default"]({
        content: 'Добавить колонку'
      })], ['closeBtn', new _closeBtnFactory["default"]()]]);
    }
    /**
     * @see UiFactory.build()
     * @param {object} data nothing expected
     */

  }, {
    key: "build",
    value: function build(data) {
      var formContainer = this.uiObjects.get('formContainer').get();
      var inputContainer = document.createElement('div');
      var input = this.uiObjects.get('input').get(); // Textarea

      inputContainer.appendChild(input);
      var formControlsContainer = this.uiObjects.get('formControlsContainer').get(); // Div for controls
      // Controls

      var addBtn = this.getAddBtn();
      var closeBtn = this.getCloseBtn();
      formControlsContainer.appendChild(addBtn);
      formControlsContainer.appendChild(closeBtn);
      formContainer.appendChild(inputContainer);
      formContainer.appendChild(formControlsContainer);
      return formContainer;
    }
    /**
     * @private
     * @return {HTMLDivElement}
     */

  }, {
    key: "getAddBtn",
    value: function getAddBtn() {
      var addBtn = document.createElement('div');
      var btn = this.uiObjects.get('addBtn').get();
      addBtn.appendChild(btn);
      return addBtn;
    }
    /**
     * @private
     * @return {HTMLDivElement}
     */

  }, {
    key: "getCloseBtn",
    value: function getCloseBtn() {
      var closeBtnContainer = document.createElement('div');
      var closeBtn = this.uiObjects.get('closeBtn').get();
      closeBtn.classList.add('add-form__close-img');
      closeBtn.classList.add('js-remove-empty-column');
      closeBtnContainer.appendChild(closeBtn);
      return closeBtnContainer;
    }
  }]);

  return CreateColumnFormFactory;
}(_uiFactory["default"]);

var _default = CreateColumnFormFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jb2x1bW4tZm9ybS1mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkNyZWF0ZUNvbHVtbkZvcm1GYWN0b3J5IiwiJGRhdGEiLCJNYXAiLCJBZGRGb3JtQ29udGFpbmVyRmFjdG9yeSIsIlRleHRJbnB1dEZhY3RvcnkiLCJwbGFjZWhvbGRlciIsIkZvcm1Db250cm9sc0NvbnRhaW5lckZhY3RvcnkiLCJCdXR0b25GYWN0b3J5IiwiY29udGVudCIsIkNsb3NlQnRuRmFjdG9yeSIsImRhdGEiLCJmb3JtQ29udGFpbmVyIiwidWlPYmplY3RzIiwiZ2V0IiwiaW5wdXRDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbnB1dCIsImFwcGVuZENoaWxkIiwiZm9ybUNvbnRyb2xzQ29udGFpbmVyIiwiYWRkQnRuIiwiZ2V0QWRkQnRuIiwiY2xvc2VCdG4iLCJnZXRDbG9zZUJ0biIsImJ0biIsImNsb3NlQnRuQ29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiVWlGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7OztJQUlNQSx1Qjs7Ozs7QUFDRjs7O0FBR0EscUNBQTJCO0FBQUEsUUFBZkMsS0FBZSx1RUFBUCxLQUFPOztBQUFBOztBQUFBLGdHQUNqQkEsS0FEaUI7QUFFMUI7QUFFRDs7Ozs7Ozs7dUNBSW1CO0FBQ2YsYUFBTyxJQUFJQyxHQUFKLENBQVEsQ0FDWCxDQUFDLGVBQUQsRUFBa0IsSUFBSUMsbUNBQUosRUFBbEIsQ0FEVyxFQUVYLENBQUMsT0FBRCxFQUFVLElBQUlDLDRCQUFKLENBQXFCO0FBQUNDLFFBQUFBLFdBQVcsRUFBRTtBQUFkLE9BQXJCLENBQVYsQ0FGVyxFQUdYLENBQUMsdUJBQUQsRUFBMEIsSUFBSUMsd0NBQUosRUFBMUIsQ0FIVyxFQUlYLENBQUMsUUFBRCxFQUFXLElBQUlDLHlCQUFKLENBQWtCO0FBQUNDLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWxCLENBQVgsQ0FKVyxFQUtYLENBQUMsVUFBRCxFQUFhLElBQUlDLDJCQUFKLEVBQWIsQ0FMVyxDQUFSLENBQVA7QUFPSDtBQUVEOzs7Ozs7OzBCQUlNQyxJLEVBQU07QUFDUixVQUFJQyxhQUFhLEdBQUcsS0FBS0MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGVBQW5CLEVBQW9DQSxHQUFwQyxFQUFwQjtBQUVBLFVBQUlDLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLEtBQUtMLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixPQUFuQixFQUE0QkEsR0FBNUIsRUFBWixDQUpRLENBSXVDOztBQUMvQ0MsTUFBQUEsY0FBYyxDQUFDSSxXQUFmLENBQTJCRCxLQUEzQjtBQUVBLFVBQUlFLHFCQUFxQixHQUFHLEtBQUtQLFNBQUwsQ0FBZUMsR0FBZixDQUFtQix1QkFBbkIsRUFBNENBLEdBQTVDLEVBQTVCLENBUFEsQ0FPdUU7QUFFL0U7O0FBQ0EsVUFBSU8sTUFBTSxHQUFHLEtBQUtDLFNBQUwsRUFBYjtBQUNBLFVBQUlDLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBQWY7QUFFQUosTUFBQUEscUJBQXFCLENBQUNELFdBQXRCLENBQWtDRSxNQUFsQztBQUNBRCxNQUFBQSxxQkFBcUIsQ0FBQ0QsV0FBdEIsQ0FBa0NJLFFBQWxDO0FBRUFYLE1BQUFBLGFBQWEsQ0FBQ08sV0FBZCxDQUEwQkosY0FBMUI7QUFDQUgsTUFBQUEsYUFBYSxDQUFDTyxXQUFkLENBQTBCQyxxQkFBMUI7QUFFQSxhQUFPUixhQUFQO0FBQ0g7QUFFRDs7Ozs7OztnQ0FJWTtBQUNSLFVBQUlTLE1BQU0sR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQSxVQUFJUSxHQUFHLEdBQUcsS0FBS1osU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CLEVBQTZCQSxHQUE3QixFQUFWO0FBQ0FPLE1BQUFBLE1BQU0sQ0FBQ0YsV0FBUCxDQUFtQk0sR0FBbkI7QUFDQSxhQUFPSixNQUFQO0FBQ0g7QUFFRDs7Ozs7OztrQ0FJYztBQUNWLFVBQUlLLGlCQUFpQixHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBeEI7QUFDQSxVQUFJTSxRQUFRLEdBQUcsS0FBS1YsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQW5CLEVBQStCQSxHQUEvQixFQUFmO0FBQ0FTLE1BQUFBLFFBQVEsQ0FBQ0ksU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIscUJBQXZCO0FBQ0FMLE1BQUFBLFFBQVEsQ0FBQ0ksU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsd0JBQXZCO0FBQ0FGLE1BQUFBLGlCQUFpQixDQUFDUCxXQUFsQixDQUE4QkksUUFBOUI7QUFDQSxhQUFPRyxpQkFBUDtBQUNIOzs7O0VBdEVpQ0cscUI7O2VBeUV2QjVCLHVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQ3JlYXRlcyBhZGQgY29sdW1uIGZvcm0uXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFVpRmFjdG9yaWVzXFxTaW1wbGVcclxuICovXHJcblxyXG5pbXBvcnQgVWlGYWN0b3J5IGZyb20gJy4vdWktZmFjdG9yeSc7XHJcbi8vIFNtYWxsZXIgVUkgcGFydHNcclxuaW1wb3J0IEFkZEZvcm1Db250YWluZXJGYWN0b3J5IGZyb20gXCIuL2FkZC1mb3JtLWNvbnRhaW5lci1mYWN0b3J5XCI7XHJcbmltcG9ydCBUZXh0SW5wdXRGYWN0b3J5IGZyb20gJy4vdGV4dC1pbnB1dC1mYWN0b3J5JztcclxuaW1wb3J0IEZvcm1Db250cm9sc0NvbnRhaW5lckZhY3RvcnkgZnJvbSAnLi9mb3JtLWNvbnRyb2xzLWNvbnRhaW5lci1mYWN0b3J5JztcclxuaW1wb3J0IEJ1dHRvbkZhY3RvcnkgZnJvbSBcIi4vYnV0dG9uLWZhY3RvcnlcIjtcclxuaW1wb3J0IENsb3NlQnRuRmFjdG9yeSBmcm9tIFwiLi9jbG9zZS1idG4tZmFjdG9yeVwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAZXh0ZW5kcyBVaUZhY3RvcnlcclxuICovXHJcbmNsYXNzIENyZWF0ZUNvbHVtbkZvcm1GYWN0b3J5IGV4dGVuZHMgVWlGYWN0b3J5IHtcclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBVaUZhY3RvcnkudWlPYmplY3RzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCRkYXRhID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcigkZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc2VlIFVpRmFjdG9yeS51aU9iamVjdHNGYWN0b3J5KClcclxuICAgICAqIEByZXR1cm4ge01hcDxhbnksIFVpRmFjdG9yeT59XHJcbiAgICAgKi9cclxuICAgIHVpT2JqZWN0c0ZhY3RvcnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbJ2Zvcm1Db250YWluZXInLCBuZXcgQWRkRm9ybUNvbnRhaW5lckZhY3RvcnkoKV0sXHJcbiAgICAgICAgICAgIFsnaW5wdXQnLCBuZXcgVGV4dElucHV0RmFjdG9yeSh7cGxhY2Vob2xkZXI6ICfQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INC60L7Qu9C+0L3QutC4J30pXSxcclxuICAgICAgICAgICAgWydmb3JtQ29udHJvbHNDb250YWluZXInLCBuZXcgRm9ybUNvbnRyb2xzQ29udGFpbmVyRmFjdG9yeSgpXSxcclxuICAgICAgICAgICAgWydhZGRCdG4nLCBuZXcgQnV0dG9uRmFjdG9yeSh7Y29udGVudDogJ9CU0L7QsdCw0LLQuNGC0Ywg0LrQvtC70L7QvdC60YMnfSldLFxyXG4gICAgICAgICAgICBbJ2Nsb3NlQnRuJywgbmV3IENsb3NlQnRuRmFjdG9yeSgpXVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBVaUZhY3RvcnkuYnVpbGQoKVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgbm90aGluZyBleHBlY3RlZFxyXG4gICAgICovXHJcbiAgICBidWlsZChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGZvcm1Db250YWluZXIgPSB0aGlzLnVpT2JqZWN0cy5nZXQoJ2Zvcm1Db250YWluZXInKS5nZXQoKTtcclxuXHJcbiAgICAgICAgbGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gdGhpcy51aU9iamVjdHMuZ2V0KCdpbnB1dCcpLmdldCgpOyAvLyBUZXh0YXJlYVxyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm1Db250cm9sc0NvbnRhaW5lciA9IHRoaXMudWlPYmplY3RzLmdldCgnZm9ybUNvbnRyb2xzQ29udGFpbmVyJykuZ2V0KCk7IC8vIERpdiBmb3IgY29udHJvbHNcclxuXHJcbiAgICAgICAgLy8gQ29udHJvbHNcclxuICAgICAgICBsZXQgYWRkQnRuID0gdGhpcy5nZXRBZGRCdG4oKTtcclxuICAgICAgICBsZXQgY2xvc2VCdG4gPSB0aGlzLmdldENsb3NlQnRuKCk7XHJcblxyXG4gICAgICAgIGZvcm1Db250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG4gICAgICAgIGZvcm1Db250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcblxyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRyb2xzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcm1Db250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybiB7SFRNTERpdkVsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIGdldEFkZEJ0bigpIHtcclxuICAgICAgICBsZXQgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGJ0biA9IHRoaXMudWlPYmplY3RzLmdldCgnYWRkQnRuJykuZ2V0KCk7XHJcbiAgICAgICAgYWRkQnRuLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgcmV0dXJuIGFkZEJ0bjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgZ2V0Q2xvc2VCdG4oKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGNsb3NlQnRuID0gdGhpcy51aU9iamVjdHMuZ2V0KCdjbG9zZUJ0bicpLmdldCgpO1xyXG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1mb3JtX19jbG9zZS1pbWcnKTtcclxuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdqcy1yZW1vdmUtZW1wdHktY29sdW1uJyk7XHJcbiAgICAgICAgY2xvc2VCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gICAgICAgIHJldHVybiBjbG9zZUJ0bkNvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQ29sdW1uRm9ybUZhY3Rvcnk7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\create-column-form-factory.js","/..\\..\\ui-factories\\simple")
},{"./add-form-container-factory":13,"./button-factory":17,"./close-btn-factory":18,"./form-controls-container-factory":23,"./text-input-factory":24,"./ui-factory":26,"6r38Q7":38,"buffer":36}],22:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

var _createColumnFormFactory = _interopRequireDefault(require("./create-column-form-factory"));

var _columnFooterFactory = _interopRequireDefault(require("./column-footer-factory"));

var _columnFactory = _interopRequireDefault(require("./column-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 *
 * @extends UiFactory
 */
var EmptyColumnFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(EmptyColumnFactory, _UiFactory);

  /**
   * @see UiFactory.uiObjects
   */
  function EmptyColumnFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, EmptyColumnFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(EmptyColumnFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data nothing expected
   */


  _createClass(EmptyColumnFactory, [{
    key: "build",
    value: function build(data) {
      var form = new _createColumnFormFactory["default"]();
      form = form.get();
      var footer = new _columnFooterFactory["default"]({
        children: [form]
      });
      footer = footer.get();
      var column = new _columnFactory["default"]({
        children: [footer]
      });
      column = column.get();
      return column;
    }
  }]);

  return EmptyColumnFactory;
}(_uiFactory["default"]);

var _default = EmptyColumnFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5LWNvbHVtbi1mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkVtcHR5Q29sdW1uRmFjdG9yeSIsIiRkYXRhIiwiZGF0YSIsImZvcm0iLCJDcmVhdGVDb2x1bW5Gb3JtRmFjdG9yeSIsImdldCIsImZvb3RlciIsIkNvbHVtbkZvb3RlckZhY3RvcnkiLCJjaGlsZHJlbiIsImNvbHVtbiIsIkNvbHVtbkZhY3RvcnkiLCJVaUZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSU1BLGtCOzs7OztBQUNGOzs7QUFHQSxnQ0FBMkI7QUFBQSxRQUFmQyxLQUFlLHVFQUFQLEtBQU87O0FBQUE7O0FBQUEsMkZBQ2pCQSxLQURpQjtBQUUxQjtBQUVEOzs7Ozs7OzswQkFJTUMsSSxFQUFNO0FBQ1IsVUFBSUMsSUFBSSxHQUFHLElBQUlDLG1DQUFKLEVBQVg7QUFDQUQsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNFLEdBQUwsRUFBUDtBQUNBLFVBQUlDLE1BQU0sR0FBRyxJQUFJQywrQkFBSixDQUF3QjtBQUFDQyxRQUFBQSxRQUFRLEVBQUUsQ0FBQ0wsSUFBRDtBQUFYLE9BQXhCLENBQWI7QUFDQUcsTUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNELEdBQVAsRUFBVDtBQUNBLFVBQUlJLE1BQU0sR0FBRyxJQUFJQyx5QkFBSixDQUFrQjtBQUFDRixRQUFBQSxRQUFRLEVBQUUsQ0FBQ0YsTUFBRDtBQUFYLE9BQWxCLENBQWI7QUFDQUcsTUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNKLEdBQVAsRUFBVDtBQUVBLGFBQU9JLE1BQVA7QUFDSDs7OztFQXJCNEJFLHFCOztlQXdCbEJYLGtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQ3JlYXRlcyBlbXB0eSBjb2x1bW4uXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFVpRmFjdG9yaWVzXFxTaW1wbGVcclxuICovXHJcblxyXG5pbXBvcnQgVWlGYWN0b3J5IGZyb20gJy4vdWktZmFjdG9yeSc7XHJcbmltcG9ydCBDcmVhdGVDb2x1bW5Gb3JtRmFjdG9yeSBmcm9tIFwiLi9jcmVhdGUtY29sdW1uLWZvcm0tZmFjdG9yeVwiO1xyXG5pbXBvcnQgQ29sdW1uRm9vdGVyRmFjdG9yeSBmcm9tIFwiLi9jb2x1bW4tZm9vdGVyLWZhY3RvcnlcIjtcclxuaW1wb3J0IENvbHVtbkZhY3RvcnkgZnJvbSBcIi4vY29sdW1uLWZhY3RvcnlcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAZXh0ZW5kcyBVaUZhY3RvcnlcclxuICovXHJcbmNsYXNzIEVtcHR5Q29sdW1uRmFjdG9yeSBleHRlbmRzIFVpRmFjdG9yeSB7XHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVWlGYWN0b3J5LnVpT2JqZWN0c1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigkZGF0YSA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoJGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBVaUZhY3RvcnkuYnVpbGQoKVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgbm90aGluZyBleHBlY3RlZFxyXG4gICAgICovXHJcbiAgICBidWlsZChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBuZXcgQ3JlYXRlQ29sdW1uRm9ybUZhY3RvcnkoKTtcclxuICAgICAgICBmb3JtID0gZm9ybS5nZXQoKTtcclxuICAgICAgICBsZXQgZm9vdGVyID0gbmV3IENvbHVtbkZvb3RlckZhY3Rvcnkoe2NoaWxkcmVuOiBbZm9ybV19KTtcclxuICAgICAgICBmb290ZXIgPSBmb290ZXIuZ2V0KCk7XHJcbiAgICAgICAgbGV0IGNvbHVtbiA9IG5ldyBDb2x1bW5GYWN0b3J5KHtjaGlsZHJlbjogW2Zvb3Rlcl19KTtcclxuICAgICAgICBjb2x1bW4gPSBjb2x1bW4uZ2V0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb2x1bW47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcHR5Q29sdW1uRmFjdG9yeTtcclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\empty-column-factory.js","/..\\..\\ui-factories\\simple")
},{"./column-factory":19,"./column-footer-factory":20,"./create-column-form-factory":21,"./ui-factory":26,"6r38Q7":38,"buffer":36}],23:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends UiFactory
 */
var FormControlsContainerFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(FormControlsContainerFactory, _UiFactory);

  function FormControlsContainerFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, FormControlsContainerFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormControlsContainerFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data nothing expected
   */


  _createClass(FormControlsContainerFactory, [{
    key: "build",
    value: function build(data) {
      var formControlsContainer = document.createElement('div');
      formControlsContainer.classList.add('add-form__controls');
      return formControlsContainer;
    }
  }]);

  return FormControlsContainerFactory;
}(_uiFactory["default"]);

var _default = FormControlsContainerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tY29udHJvbHMtY29udGFpbmVyLWZhY3RvcnkuanMiXSwibmFtZXMiOlsiRm9ybUNvbnRyb2xzQ29udGFpbmVyRmFjdG9yeSIsIiRkYXRhIiwiZGF0YSIsImZvcm1Db250cm9sc0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIlVpRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSw0Qjs7Ozs7QUFDRiwwQ0FBMkI7QUFBQSxRQUFmQyxLQUFlLHVFQUFQLEtBQU87O0FBQUE7O0FBQUEscUdBQ2pCQSxLQURpQjtBQUUxQjtBQUVEOzs7Ozs7OzswQkFJTUMsSSxFQUFNO0FBQ1IsVUFBSUMscUJBQXFCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUE1QjtBQUNBRixNQUFBQSxxQkFBcUIsQ0FBQ0csU0FBdEIsQ0FBZ0NDLEdBQWhDLENBQW9DLG9CQUFwQztBQUVBLGFBQU9KLHFCQUFQO0FBQ0g7Ozs7RUFkc0NLLHFCOztlQWlCNUJSLDRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQ3JlYXRlcyBmb3JtIGNvbnRyb2xzIGNvbnRhaW5lci5cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVWlGYWN0b3JpZXNcXFNpbXBsZVxyXG4gKi9cclxuXHJcbmltcG9ydCBVaUZhY3RvcnkgZnJvbSAnLi91aS1mYWN0b3J5JztcclxuXHJcbi8qKlxyXG4gKiBAZXh0ZW5kcyBVaUZhY3RvcnlcclxuICovXHJcbmNsYXNzIEZvcm1Db250cm9sc0NvbnRhaW5lckZhY3RvcnkgZXh0ZW5kcyBVaUZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IoJGRhdGEgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCRkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVWlGYWN0b3J5LmJ1aWxkKClcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIG5vdGhpbmcgZXhwZWN0ZWRcclxuICAgICAqL1xyXG4gICAgYnVpbGQoZGF0YSkge1xyXG4gICAgICAgIGxldCBmb3JtQ29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb3JtQ29udHJvbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLWZvcm1fX2NvbnRyb2xzJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtQ29udHJvbHNDb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sc0NvbnRhaW5lckZhY3Rvcnk7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\form-controls-container-factory.js","/..\\..\\ui-factories\\simple")
},{"./ui-factory":26,"6r38Q7":38,"buffer":36}],24:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends UiFactory
 */
var TextInputFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(TextInputFactory, _UiFactory);

  function TextInputFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, TextInputFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextInputFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data {placeholder: value} expected
   */


  _createClass(TextInputFactory, [{
    key: "build",
    value: function build(data) {
      var input = document.createElement('input');
      input.classList.add('field');
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', data.placeholder);
      return input;
    }
  }]);

  return TextInputFactory;
}(_uiFactory["default"]);

var _default = TextInputFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtaW5wdXQtZmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJUZXh0SW5wdXRGYWN0b3J5IiwiJGRhdGEiLCJkYXRhIiwiaW5wdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJwbGFjZWhvbGRlciIsIlVpRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxnQjs7Ozs7QUFDRiw4QkFBMkI7QUFBQSxRQUFmQyxLQUFlLHVFQUFQLEtBQU87O0FBQUE7O0FBQUEseUZBQ2pCQSxLQURpQjtBQUUxQjtBQUVEOzs7Ozs7OzswQkFJTUMsSSxFQUFNO0FBQ1IsVUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBRixNQUFBQSxLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCO0FBQ0FKLE1BQUFBLEtBQUssQ0FBQ0ssWUFBTixDQUFtQixNQUFuQixFQUEyQixNQUEzQjtBQUNBTCxNQUFBQSxLQUFLLENBQUNLLFlBQU4sQ0FBbUIsYUFBbkIsRUFBa0NOLElBQUksQ0FBQ08sV0FBdkM7QUFFQSxhQUFPTixLQUFQO0FBQ0g7Ozs7RUFoQjBCTyxxQjs7ZUFtQmhCVixnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IENyZWF0ZXMgdGV4dCBpbnB1dC5cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVWlGYWN0b3JpZXNcXFNpbXBsZVxyXG4gKi9cclxuXHJcbmltcG9ydCBVaUZhY3RvcnkgZnJvbSAnLi91aS1mYWN0b3J5JztcclxuXHJcbi8qKlxyXG4gKiBAZXh0ZW5kcyBVaUZhY3RvcnlcclxuICovXHJcbmNsYXNzIFRleHRJbnB1dEZhY3RvcnkgZXh0ZW5kcyBVaUZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IoJGRhdGEgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCRkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVWlGYWN0b3J5LmJ1aWxkKClcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIHtwbGFjZWhvbGRlcjogdmFsdWV9IGV4cGVjdGVkXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKGRhdGEpIHtcclxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgZGF0YS5wbGFjZWhvbGRlcik7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0RmFjdG9yeTtcclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\text-input-factory.js","/..\\..\\ui-factories\\simple")
},{"./ui-factory":26,"6r38Q7":38,"buffer":36}],25:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uiFactory = _interopRequireDefault(require("./ui-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends UiFactory
 */
var TextareaFactory =
/*#__PURE__*/
function (_UiFactory) {
  _inherits(TextareaFactory, _UiFactory);

  function TextareaFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, TextareaFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextareaFactory).call(this, $data));
  }
  /**
   * @see UiFactory.build()
   * @param {object} data {placeholder: value} expected
   */


  _createClass(TextareaFactory, [{
    key: "build",
    value: function build(data) {
      var textarea = document.createElement('textarea');
      textarea.classList.add('field');
      textarea.setAttribute('placeholder', data.placeholder);
      return textarea;
    }
  }]);

  return TextareaFactory;
}(_uiFactory["default"]);

var _default = TextareaFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRhcmVhLWZhY3RvcnkuanMiXSwibmFtZXMiOlsiVGV4dGFyZWFGYWN0b3J5IiwiJGRhdGEiLCJkYXRhIiwidGV4dGFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJwbGFjZWhvbGRlciIsIlVpRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxlOzs7OztBQUNGLDZCQUEyQjtBQUFBLFFBQWZDLEtBQWUsdUVBQVAsS0FBTzs7QUFBQTs7QUFBQSx3RkFDakJBLEtBRGlCO0FBRTFCO0FBRUQ7Ozs7Ozs7OzBCQUlNQyxJLEVBQU07QUFDUixVQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFmO0FBQ0FGLE1BQUFBLFFBQVEsQ0FBQ0csU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsT0FBdkI7QUFDQUosTUFBQUEsUUFBUSxDQUFDSyxZQUFULENBQXNCLGFBQXRCLEVBQXFDTixJQUFJLENBQUNPLFdBQTFDO0FBRUEsYUFBT04sUUFBUDtBQUNIOzs7O0VBZnlCTyxxQjs7ZUFrQmZWLGUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBDcmVhdGVzIHRleHRhcmVhLlxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxVaUZhY3Rvcmllc1xcU2ltcGxlXHJcbiAqL1xyXG5cclxuaW1wb3J0IFVpRmFjdG9yeSBmcm9tICcuL3VpLWZhY3RvcnknO1xyXG5cclxuLyoqXHJcbiAqIEBleHRlbmRzIFVpRmFjdG9yeVxyXG4gKi9cclxuY2xhc3MgVGV4dGFyZWFGYWN0b3J5IGV4dGVuZHMgVWlGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKCRkYXRhID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcigkZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc2VlIFVpRmFjdG9yeS5idWlsZCgpXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSB7cGxhY2Vob2xkZXI6IHZhbHVlfSBleHBlY3RlZFxyXG4gICAgICovXHJcbiAgICBidWlsZChkYXRhKSB7XHJcbiAgICAgICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xyXG4gICAgICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBkYXRhLnBsYWNlaG9sZGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHRhcmVhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYUZhY3Rvcnk7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\textarea-factory.js","/..\\..\\ui-factories\\simple")
},{"./ui-factory":26,"6r38Q7":38,"buffer":36}],26:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview Simple factory interface
 * @namespace NikitosGolubev\UiFactories\Simple
 */

/**
 * Interface for simple factories of user interface
 * @abstract
 */
var UiFactory =
/*#__PURE__*/
function () {
  /**
   *  @param {object|boolean} $data Params which may be received to build object more accurately.
   */
  function UiFactory() {
    var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, UiFactory);

    /**
     * UI dependencies.
     * @type {Map<any, UiFactory>}
     */
    // IMPORTANT!!! THIS PROPERTY MUST BE DECLARED BEFORE this.build();
    this.uiObjects = this.uiObjectsFactory();
    this.elem = this.build($data);
  }
  /**
   * @return {object|null} Created DOM(ui) element
   */


  _createClass(UiFactory, [{
    key: "get",
    value: function get() {
      return this.elem;
    }
    /**
     * Creates a UI element
     *
     * @abstract
     * @protected
     * @param data
     * @return {object} DOM element
     */

  }, {
    key: "build",
    value: function build(data) {
      console.error("It's an abstract method which requires implementation!");
      throw "It's an abstract method which requires implementation!";
    }
    /**
     * Objects for defining other UI dependencies to build more complex elements.
     * Should be overridden when necessary.
     * @protected
     * @return {Map<any, UiFactory>}
     */

  }, {
    key: "uiObjectsFactory",
    value: function uiObjectsFactory() {
      return new Map();
    }
  }]);

  return UiFactory;
}();

var _default = UiFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLWZhY3RvcnkuanMiXSwibmFtZXMiOlsiVWlGYWN0b3J5IiwiJGRhdGEiLCJ1aU9iamVjdHMiLCJ1aU9iamVjdHNGYWN0b3J5IiwiZWxlbSIsImJ1aWxkIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsIk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBOzs7O0lBSU1BLFM7OztBQUNGOzs7QUFHQSx1QkFBMkI7QUFBQSxRQUFmQyxLQUFlLHVFQUFQLEtBQU87O0FBQUE7O0FBQ3ZCOzs7O0FBSUE7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtDLGdCQUFMLEVBQWpCO0FBRUEsU0FBS0MsSUFBTCxHQUFZLEtBQUtDLEtBQUwsQ0FBV0osS0FBWCxDQUFaO0FBQ0g7QUFFRDs7Ozs7OzswQkFHTTtBQUFFLGFBQU8sS0FBS0csSUFBWjtBQUFtQjtBQUUzQjs7Ozs7Ozs7Ozs7MEJBUU1FLEksRUFBTTtBQUNSQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyx3REFBZDtBQUNBLFlBQU0sd0RBQU47QUFDSDtBQUVEOzs7Ozs7Ozs7dUNBTW1CO0FBQ2YsYUFBTyxJQUFJQyxHQUFKLEVBQVA7QUFDSDs7Ozs7O2VBR1VULFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBTaW1wbGUgZmFjdG9yeSBpbnRlcmZhY2VcclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVWlGYWN0b3JpZXNcXFNpbXBsZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHNpbXBsZSBmYWN0b3JpZXMgb2YgdXNlciBpbnRlcmZhY2VcclxuICogQGFic3RyYWN0XHJcbiAqL1xyXG5jbGFzcyBVaUZhY3Rvcnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiAgQHBhcmFtIHtvYmplY3R8Ym9vbGVhbn0gJGRhdGEgUGFyYW1zIHdoaWNoIG1heSBiZSByZWNlaXZlZCB0byBidWlsZCBvYmplY3QgbW9yZSBhY2N1cmF0ZWx5LlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigkZGF0YSA9IGZhbHNlKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVUkgZGVwZW5kZW5jaWVzLlxyXG4gICAgICAgICAqIEB0eXBlIHtNYXA8YW55LCBVaUZhY3Rvcnk+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIElNUE9SVEFOVCEhISBUSElTIFBST1BFUlRZIE1VU1QgQkUgREVDTEFSRUQgQkVGT1JFIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICB0aGlzLnVpT2JqZWN0cyA9IHRoaXMudWlPYmplY3RzRmFjdG9yeSgpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW0gPSB0aGlzLmJ1aWxkKCRkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4ge29iamVjdHxudWxsfSBDcmVhdGVkIERPTSh1aSkgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBnZXQoKSB7IHJldHVybiB0aGlzLmVsZW07IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBVSSBlbGVtZW50XHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBET00gZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBidWlsZChkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkl0J3MgYW4gYWJzdHJhY3QgbWV0aG9kIHdoaWNoIHJlcXVpcmVzIGltcGxlbWVudGF0aW9uIVwiKTtcclxuICAgICAgICB0aHJvdyBcIkl0J3MgYW4gYWJzdHJhY3QgbWV0aG9kIHdoaWNoIHJlcXVpcmVzIGltcGxlbWVudGF0aW9uIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JqZWN0cyBmb3IgZGVmaW5pbmcgb3RoZXIgVUkgZGVwZW5kZW5jaWVzIHRvIGJ1aWxkIG1vcmUgY29tcGxleCBlbGVtZW50cy5cclxuICAgICAqIFNob3VsZCBiZSBvdmVycmlkZGVuIHdoZW4gbmVjZXNzYXJ5LlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHJldHVybiB7TWFwPGFueSwgVWlGYWN0b3J5Pn1cclxuICAgICAqL1xyXG4gICAgdWlPYmplY3RzRmFjdG9yeSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVaUZhY3Rvcnk7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\ui-factories\\simple\\ui-factory.js","/..\\..\\ui-factories\\simple")
},{"6r38Q7":38,"buffer":36}],27:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
function view(view) {
  var $data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return view.main($data);
}

var _default = view;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LXZpZXcuanMiXSwibmFtZXMiOlsidmlldyIsIiRkYXRhIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7OztBQUtBOzs7Ozs7O0FBT0EsU0FBU0EsSUFBVCxDQUFjQSxJQUFkLEVBQW1DO0FBQUEsTUFBZkMsS0FBZSx1RUFBUCxLQUFPO0FBQy9CLFNBQU9ELElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxLQUFWLENBQVA7QUFDSDs7ZUFFY0QsSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IFByaW50cyB2aWV3XHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFVzZUNhc2VzXFxQcmludFZpZXdcclxuICovXHJcblxyXG4vKipcclxuICogUHJpbnRzIHZpZXdcclxuICpcclxuICogQHBhcmFtIHZpZXcgVmlldyBvYmplY3Qgd2hpY2ggc2hvdWxkIHByaW50IHNvbWUgY29udGVudC5cclxuICogQHBhcmFtICRkYXRhIERhdGEgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHZpZXcuXHJcbiAqIEByZXR1cm5zIHsqfHZvaWR9XHJcbiAqL1xyXG5mdW5jdGlvbiB2aWV3KHZpZXcsICRkYXRhID0gZmFsc2UpIHtcclxuICAgIHJldHVybiB2aWV3Lm1haW4oJGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2aWV3O1xyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\use-cases\\print-view.js","/..\\..\\use-cases")
},{"6r38Q7":38,"buffer":36}],28:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../view"));

var _removeElement = _interopRequireDefault(require("../layouts/remove-element"));

var _addRecordFormFactory = _interopRequireDefault(require("../../ui-factories/simple/add-record-form-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @implements View, Observer
 */
var AddRecordForm =
/*#__PURE__*/
function (_View) {
  _inherits(AddRecordForm, _View);

  function AddRecordForm(model) {
    _classCallCheck(this, AddRecordForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddRecordForm).call(this, model));
  }
  /**
   * @see Observer.update()
   */


  _createClass(AddRecordForm, [{
    key: "update",
    value: function update(data) {}
    /**
     * @see View.main()
     *
     * @param {object} $data Expected: {createElem: DOMElemTriggeredWithEvent}
     */

  }, {
    key: "main",
    value: function main() {
      var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var controlsContainer = $data.createElem.parentNode;
      this.removeElement($data.createElem);
      var form = this.createAddRecordForm();
      controlsContainer.appendChild(form);
    }
    /**
     * @private
     * @return {Object} DOM
     */

  }, {
    key: "createAddRecordForm",
    value: function createAddRecordForm() {
      var formFactory = new _addRecordFormFactory["default"]();
      return formFactory.get();
    }
    /**
     * @private
     * @param {object} elementToRemove DOM
     */

  }, {
    key: "removeElement",
    value: function removeElement(elementToRemove) {
      var removeElementLayout = new _removeElement["default"]();
      removeElementLayout.main({
        element: elementToRemove
      });
    }
  }]);

  return AddRecordForm;
}(_view["default"]);

var _default = AddRecordForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1yZWNvcmQtZm9ybS5qcyJdLCJuYW1lcyI6WyJBZGRSZWNvcmRGb3JtIiwibW9kZWwiLCJkYXRhIiwiJGRhdGEiLCJjb250cm9sc0NvbnRhaW5lciIsImNyZWF0ZUVsZW0iLCJwYXJlbnROb2RlIiwicmVtb3ZlRWxlbWVudCIsImZvcm0iLCJjcmVhdGVBZGRSZWNvcmRGb3JtIiwiYXBwZW5kQ2hpbGQiLCJmb3JtRmFjdG9yeSIsIkFkZFJlY29yZEZvcm1GYWN0b3J5IiwiZ2V0IiwiZWxlbWVudFRvUmVtb3ZlIiwicmVtb3ZlRWxlbWVudExheW91dCIsIlJlbW92ZUVsZW1lbnQiLCJtYWluIiwiZWxlbWVudCIsIlZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFHQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYTs7Ozs7QUFDRix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNGQUNUQSxLQURTO0FBRWxCO0FBRUQ7Ozs7Ozs7MkJBR09DLEksRUFBTSxDQUFFO0FBRWY7Ozs7Ozs7OzJCQUtvQjtBQUFBLFVBQWZDLEtBQWUsdUVBQVAsS0FBTztBQUNoQixVQUFJQyxpQkFBaUIsR0FBR0QsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxVQUF6QztBQUVBLFdBQUtDLGFBQUwsQ0FBbUJKLEtBQUssQ0FBQ0UsVUFBekI7QUFFQSxVQUFJRyxJQUFJLEdBQUcsS0FBS0MsbUJBQUwsRUFBWDtBQUVBTCxNQUFBQSxpQkFBaUIsQ0FBQ00sV0FBbEIsQ0FBOEJGLElBQTlCO0FBQ0g7QUFFRDs7Ozs7OzswQ0FJc0I7QUFDbEIsVUFBSUcsV0FBVyxHQUFHLElBQUlDLGdDQUFKLEVBQWxCO0FBQ0EsYUFBT0QsV0FBVyxDQUFDRSxHQUFaLEVBQVA7QUFDSDtBQUVEOzs7Ozs7O2tDQUljQyxlLEVBQWlCO0FBQzNCLFVBQUlDLG1CQUFtQixHQUFHLElBQUlDLHlCQUFKLEVBQTFCO0FBQ0FELE1BQUFBLG1CQUFtQixDQUFDRSxJQUFwQixDQUF5QjtBQUFDQyxRQUFBQSxPQUFPLEVBQUVKO0FBQVYsT0FBekI7QUFDSDs7OztFQXpDdUJLLGdCOztlQTRDYm5CLGEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBQYXN0ZXMgYWRkIHJlY29yZCBmb3JtIHRvIHRlbXBsYXRlLlxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxWaWV3c1xcQ29udGVudFxyXG4gKi9cclxuXHJcbmltcG9ydCBWaWV3IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxuLyogTGF5b3V0cyAqL1xyXG5pbXBvcnQgUmVtb3ZlRWxlbWVudCBmcm9tICcuLi9sYXlvdXRzL3JlbW92ZS1lbGVtZW50JztcclxuXHJcbi8qIFVJIGZhY3RvcmllcyAqL1xyXG5pbXBvcnQgQWRkUmVjb3JkRm9ybUZhY3RvcnkgZnJvbSAnLi4vLi4vdWktZmFjdG9yaWVzL3NpbXBsZS9hZGQtcmVjb3JkLWZvcm0tZmFjdG9yeSc7XHJcblxyXG4vKipcclxuICogQGltcGxlbWVudHMgVmlldywgT2JzZXJ2ZXJcclxuICovXHJcbmNsYXNzIEFkZFJlY29yZEZvcm0gZXh0ZW5kcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIobW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBPYnNlcnZlci51cGRhdGUoKVxyXG4gICAgICovXHJcbiAgICB1cGRhdGUoZGF0YSkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVmlldy5tYWluKClcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gJGRhdGEgRXhwZWN0ZWQ6IHtjcmVhdGVFbGVtOiBET01FbGVtVHJpZ2dlcmVkV2l0aEV2ZW50fVxyXG4gICAgICovXHJcbiAgICBtYWluKCRkYXRhID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgY29udHJvbHNDb250YWluZXIgPSAkZGF0YS5jcmVhdGVFbGVtLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlRWxlbWVudCgkZGF0YS5jcmVhdGVFbGVtKTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm0gPSB0aGlzLmNyZWF0ZUFkZFJlY29yZEZvcm0oKTtcclxuXHJcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBET01cclxuICAgICAqL1xyXG4gICAgY3JlYXRlQWRkUmVjb3JkRm9ybSgpIHtcclxuICAgICAgICBsZXQgZm9ybUZhY3RvcnkgPSBuZXcgQWRkUmVjb3JkRm9ybUZhY3Rvcnk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1GYWN0b3J5LmdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50VG9SZW1vdmUgRE9NXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUVsZW1lbnQoZWxlbWVudFRvUmVtb3ZlKSB7XHJcbiAgICAgICAgbGV0IHJlbW92ZUVsZW1lbnRMYXlvdXQgPSBuZXcgUmVtb3ZlRWxlbWVudCgpO1xyXG4gICAgICAgIHJlbW92ZUVsZW1lbnRMYXlvdXQubWFpbih7ZWxlbWVudDogZWxlbWVudFRvUmVtb3ZlfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFJlY29yZEZvcm07XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\content\\add-record-form.js","/..\\..\\views\\content")
},{"../../ui-factories/simple/add-record-form-factory":15,"../layouts/remove-element":32,"../view":34,"6r38Q7":38,"buffer":36}],29:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../view"));

var _emptyColumnFactory = _interopRequireDefault(require("../../ui-factories/simple/empty-column-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @implements View, Observer
 */
var EmptyColumn =
/*#__PURE__*/
function (_View) {
  _inherits(EmptyColumn, _View);

  function EmptyColumn(model) {
    _classCallCheck(this, EmptyColumn);

    return _possibleConstructorReturn(this, _getPrototypeOf(EmptyColumn).call(this, model));
  }
  /**
   * @see Observer.update()
   */


  _createClass(EmptyColumn, [{
    key: "update",
    value: function update(data) {}
    /**
     * @see View.main()
     *
     * @param {object} $data Expected: Nothing
     */

  }, {
    key: "main",
    value: function main() {
      var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var column = new _emptyColumnFactory["default"]();
      column = column.get();
      var serviceColumn = document.querySelector('.js-last-service-column');
      var parent = serviceColumn.parentNode;
      parent.insertBefore(column, serviceColumn);
    }
  }]);

  return EmptyColumn;
}(_view["default"]);

var _default = EmptyColumn;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5LWNvbHVtbi5qcyJdLCJuYW1lcyI6WyJFbXB0eUNvbHVtbiIsIm1vZGVsIiwiZGF0YSIsIiRkYXRhIiwiY29sdW1uIiwiRW1wdHlDb2x1bW5GYWN0b3J5IiwiZ2V0Iiwic2VydmljZUNvbHVtbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudCIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7O0lBR01BLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvRkFDVEEsS0FEUztBQUVsQjtBQUVEOzs7Ozs7OzJCQUdPQyxJLEVBQU0sQ0FBRTtBQUVmOzs7Ozs7OzsyQkFLb0I7QUFBQSxVQUFmQyxLQUFlLHVFQUFQLEtBQU87QUFDaEIsVUFBSUMsTUFBTSxHQUFHLElBQUlDLDhCQUFKLEVBQWI7QUFDQUQsTUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNFLEdBQVAsRUFBVDtBQUNBLFVBQUlDLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDQUFwQjtBQUNBLFVBQUlDLE1BQU0sR0FBSUgsYUFBYSxDQUFDSSxVQUE1QjtBQUNBRCxNQUFBQSxNQUFNLENBQUNFLFlBQVAsQ0FBb0JSLE1BQXBCLEVBQTRCRyxhQUE1QjtBQUNIOzs7O0VBckJxQk0sZ0I7O2VBd0JYYixXIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQ3JlYXRlcyBuZXcgZW1wdHkgY29sdW1uIHdoaWNoIHVzZXIgbWF5IGZpbGwgd2l0aCBkYXRhIGluIGZ1dHVyZS5cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVmlld3NcXENvbnRlbnRcclxuICovXHJcblxyXG5pbXBvcnQgVmlldyBmcm9tICcuLi92aWV3JztcclxuXHJcbi8qIExheW91dHMgKi9cclxuXHJcbi8qIFVJIGZhY3RvcmllcyAqL1xyXG5pbXBvcnQgRW1wdHlDb2x1bW5GYWN0b3J5IGZyb20gXCIuLi8uLi91aS1mYWN0b3JpZXMvc2ltcGxlL2VtcHR5LWNvbHVtbi1mYWN0b3J5XCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBpbXBsZW1lbnRzIFZpZXcsIE9ic2VydmVyXHJcbiAqL1xyXG5jbGFzcyBFbXB0eUNvbHVtbiBleHRlbmRzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IobW9kZWwpIHtcclxuICAgICAgICBzdXBlcihtb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc2VlIE9ic2VydmVyLnVwZGF0ZSgpXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZShkYXRhKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBWaWV3Lm1haW4oKVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSAkZGF0YSBFeHBlY3RlZDogTm90aGluZ1xyXG4gICAgICovXHJcbiAgICBtYWluKCRkYXRhID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgY29sdW1uID0gbmV3IEVtcHR5Q29sdW1uRmFjdG9yeSgpO1xyXG4gICAgICAgIGNvbHVtbiA9IGNvbHVtbi5nZXQoKTtcclxuICAgICAgICBsZXQgc2VydmljZUNvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sYXN0LXNlcnZpY2UtY29sdW1uJyk7XHJcbiAgICAgICAgbGV0IHBhcmVudCAgPSBzZXJ2aWNlQ29sdW1uLnBhcmVudE5vZGU7XHJcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjb2x1bW4sIHNlcnZpY2VDb2x1bW4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXB0eUNvbHVtbjtcclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\content\\empty-column.js","/..\\..\\views\\content")
},{"../../ui-factories/simple/empty-column-factory":22,"../view":34,"6r38Q7":38,"buffer":36}],30:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../view"));

var _removeElement = _interopRequireDefault(require("../layouts/remove-element"));

var _addRecordButtonFactory = _interopRequireDefault(require("../../ui-factories/simple/add-record-button-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @implements View, Observer
 */
var RemoveAddRecordForm =
/*#__PURE__*/
function (_View) {
  _inherits(RemoveAddRecordForm, _View);

  function RemoveAddRecordForm(model) {
    _classCallCheck(this, RemoveAddRecordForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(RemoveAddRecordForm).call(this, model));
  }
  /**
   * @see Observer.update()
   */


  _createClass(RemoveAddRecordForm, [{
    key: "update",
    value: function update(data) {}
    /**
     * @see View.main()
     *
     * @param {object} $data Expected: {addForm: DOMElement}
     */

  }, {
    key: "main",
    value: function main() {
      var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var controlsContainer = $data.addForm.parentNode;
      this.removeElement($data.addForm);
      var button = this.createAddRecordButton();
      controlsContainer.appendChild(button);
    }
    /**
     * @private
     * @return {Object} DOM
     */

  }, {
    key: "createAddRecordButton",
    value: function createAddRecordButton() {
      var buttonFactory = new _addRecordButtonFactory["default"]();
      return buttonFactory.get();
    }
    /**
     * @private
     * @param {object} elementToRemove DOM
     */

  }, {
    key: "removeElement",
    value: function removeElement(elementToRemove) {
      var removeElementLayout = new _removeElement["default"]();
      removeElementLayout.main({
        element: elementToRemove
      });
    }
  }]);

  return RemoveAddRecordForm;
}(_view["default"]);

var _default = RemoveAddRecordForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW92ZS1hZGQtcmVjb3JkLWZvcm0uanMiXSwibmFtZXMiOlsiUmVtb3ZlQWRkUmVjb3JkRm9ybSIsIm1vZGVsIiwiZGF0YSIsIiRkYXRhIiwiY29udHJvbHNDb250YWluZXIiLCJhZGRGb3JtIiwicGFyZW50Tm9kZSIsInJlbW92ZUVsZW1lbnQiLCJidXR0b24iLCJjcmVhdGVBZGRSZWNvcmRCdXR0b24iLCJhcHBlbmRDaGlsZCIsImJ1dHRvbkZhY3RvcnkiLCJBZGRSZWNvcmRCdXR0b25GYWN0b3J5IiwiZ2V0IiwiZWxlbWVudFRvUmVtb3ZlIiwicmVtb3ZlRWxlbWVudExheW91dCIsIlJlbW92ZUVsZW1lbnQiLCJtYWluIiwiZWxlbWVudCIsIlZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFHQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsbUI7Ozs7O0FBQ0YsK0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0RkFDVEEsS0FEUztBQUVsQjtBQUVEOzs7Ozs7OzJCQUdPQyxJLEVBQU0sQ0FBRTtBQUVmOzs7Ozs7OzsyQkFLb0I7QUFBQSxVQUFmQyxLQUFlLHVFQUFQLEtBQU87QUFDaEIsVUFBSUMsaUJBQWlCLEdBQUdELEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxVQUF0QztBQUVBLFdBQUtDLGFBQUwsQ0FBbUJKLEtBQUssQ0FBQ0UsT0FBekI7QUFFQSxVQUFJRyxNQUFNLEdBQUcsS0FBS0MscUJBQUwsRUFBYjtBQUVBTCxNQUFBQSxpQkFBaUIsQ0FBQ00sV0FBbEIsQ0FBOEJGLE1BQTlCO0FBQ0g7QUFFRDs7Ozs7Ozs0Q0FJd0I7QUFDcEIsVUFBSUcsYUFBYSxHQUFHLElBQUlDLGtDQUFKLEVBQXBCO0FBQ0EsYUFBT0QsYUFBYSxDQUFDRSxHQUFkLEVBQVA7QUFDSDtBQUVEOzs7Ozs7O2tDQUljQyxlLEVBQWlCO0FBQzNCLFVBQUlDLG1CQUFtQixHQUFHLElBQUlDLHlCQUFKLEVBQTFCO0FBQ0FELE1BQUFBLG1CQUFtQixDQUFDRSxJQUFwQixDQUF5QjtBQUFDQyxRQUFBQSxPQUFPLEVBQUVKO0FBQVYsT0FBekI7QUFDSDs7OztFQXpDNkJLLGdCOztlQTRDbkJuQixtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IFBhc3RlcyBhZGQgcmVjb3JkIGJ1dHRvbiBhbmQgaGlkZXMgYWRkIHJlY29yZCBmb3JtLlxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxWaWV3c1xcQ29udGVudFxyXG4gKi9cclxuXHJcbmltcG9ydCBWaWV3IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxuLyogTGF5b3V0cyAqL1xyXG5pbXBvcnQgUmVtb3ZlRWxlbWVudCBmcm9tICcuLi9sYXlvdXRzL3JlbW92ZS1lbGVtZW50JztcclxuXHJcbi8qIFVJIGZhY3RvcmllcyAqL1xyXG5pbXBvcnQgQWRkUmVjb3JkQnV0dG9uRmFjdG9yeSBmcm9tIFwiLi4vLi4vdWktZmFjdG9yaWVzL3NpbXBsZS9hZGQtcmVjb3JkLWJ1dHRvbi1mYWN0b3J5XCI7XHJcblxyXG4vKipcclxuICogQGltcGxlbWVudHMgVmlldywgT2JzZXJ2ZXJcclxuICovXHJcbmNsYXNzIFJlbW92ZUFkZFJlY29yZEZvcm0gZXh0ZW5kcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIobW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBPYnNlcnZlci51cGRhdGUoKVxyXG4gICAgICovXHJcbiAgICB1cGRhdGUoZGF0YSkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVmlldy5tYWluKClcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gJGRhdGEgRXhwZWN0ZWQ6IHthZGRGb3JtOiBET01FbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBtYWluKCRkYXRhID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgY29udHJvbHNDb250YWluZXIgPSAkZGF0YS5hZGRGb3JtLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlRWxlbWVudCgkZGF0YS5hZGRGb3JtKTtcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IHRoaXMuY3JlYXRlQWRkUmVjb3JkQnV0dG9uKCk7XHJcblxyXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBET01cclxuICAgICAqL1xyXG4gICAgY3JlYXRlQWRkUmVjb3JkQnV0dG9uKCkge1xyXG4gICAgICAgIGxldCBidXR0b25GYWN0b3J5ID0gbmV3IEFkZFJlY29yZEJ1dHRvbkZhY3RvcnkoKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uRmFjdG9yeS5nZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFRvUmVtb3ZlIERPTVxyXG4gICAgICovXHJcbiAgICByZW1vdmVFbGVtZW50KGVsZW1lbnRUb1JlbW92ZSkge1xyXG4gICAgICAgIGxldCByZW1vdmVFbGVtZW50TGF5b3V0ID0gbmV3IFJlbW92ZUVsZW1lbnQoKTtcclxuICAgICAgICByZW1vdmVFbGVtZW50TGF5b3V0Lm1haW4oe2VsZW1lbnQ6IGVsZW1lbnRUb1JlbW92ZX0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW1vdmVBZGRSZWNvcmRGb3JtO1xyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\content\\remove-add-record-form.js","/..\\..\\views\\content")
},{"../../ui-factories/simple/add-record-button-factory":14,"../layouts/remove-element":32,"../view":34,"6r38Q7":38,"buffer":36}],31:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("./view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Provides interface for ONLY UI CHANGES, CONTACT WITH MODEL IS NOT ALLOWED.
 * @abstract
 */
var Layout =
/*#__PURE__*/
function (_View) {
  _inherits(Layout, _View);

  /**
   * There is no place for model
   * @param model is not used
   */
  function Layout(model) {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, false));
  }
  /**
   * Implementing Observer interface. FINAL, MUST NOT BE OVERRIDDEN.
   * @param data
   */


  _createClass(Layout, [{
    key: "update",
    value: function update(data) {}
  }]);

  return Layout;
}(_view["default"]);

var _default = Layout;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJtb2RlbCIsImRhdGEiLCJWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlNQSxNOzs7OztBQUNGOzs7O0FBSUEsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrRUFDVCxLQURTO0FBRWxCO0FBRUQ7Ozs7Ozs7OzJCQUlPQyxJLEVBQU0sQ0FBRTs7OztFQWJFQyxnQjs7ZUFnQk5ILE0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBMYXlvdXQgaW50ZXJmYWNlLCBubyBtb2RlbCBjb21tdW5pY2F0aW9uLlxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxWaWV3c1xyXG4gKi9cclxuXHJcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgaW50ZXJmYWNlIGZvciBPTkxZIFVJIENIQU5HRVMsIENPTlRBQ1QgV0lUSCBNT0RFTCBJUyBOT1QgQUxMT1dFRC5cclxuICogQGFic3RyYWN0XHJcbiAqL1xyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBWaWV3IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlcmUgaXMgbm8gcGxhY2UgZm9yIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0gbW9kZWwgaXMgbm90IHVzZWRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobW9kZWwpIHtcclxuICAgICAgICBzdXBlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRpbmcgT2JzZXJ2ZXIgaW50ZXJmYWNlLiBGSU5BTCwgTVVTVCBOT1QgQkUgT1ZFUlJJRERFTi5cclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZShkYXRhKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\layout.js","/..\\..\\views")
},{"./view":34,"6r38Q7":38,"buffer":36}],32:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _layout = _interopRequireDefault(require("../layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Removes particular element from DOM
 */
var RemoveElement =
/*#__PURE__*/
function (_Layout) {
  _inherits(RemoveElement, _Layout);

  function RemoveElement() {
    _classCallCheck(this, RemoveElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(RemoveElement).call(this));
  }
  /**
   * Removes element from DOM.
   * @param $data Expects {element: DOMElemToRemove}
   */


  _createClass(RemoveElement, [{
    key: "main",
    value: function main() {
      var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var parent = $data.element.parentNode;
      parent.removeChild($data.element);
    }
  }]);

  return RemoveElement;
}(_layout["default"]);

var _default = RemoveElement;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW92ZS1lbGVtZW50LmpzIl0sIm5hbWVzIjpbIlJlbW92ZUVsZW1lbnQiLCIkZGF0YSIsInBhcmVudCIsImVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYTs7Ozs7QUFDRiwyQkFBYztBQUFBOztBQUFBO0FBRWI7QUFFRDs7Ozs7Ozs7MkJBSW9CO0FBQUEsVUFBZkMsS0FBZSx1RUFBUCxLQUFPO0FBQ2hCLFVBQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxPQUFOLENBQWNDLFVBQTNCO0FBQ0FGLE1BQUFBLE1BQU0sQ0FBQ0csV0FBUCxDQUFtQkosS0FBSyxDQUFDRSxPQUF6QjtBQUNIOzs7O0VBWnVCRyxrQjs7ZUFlYk4sYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IFJlbW92ZSBlbGVtZW50IGxheW91dC5cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVmlld3NcXExheW91dHNcclxuICovXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9sYXlvdXRcIjtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHBhcnRpY3VsYXIgZWxlbWVudCBmcm9tIERPTVxyXG4gKi9cclxuY2xhc3MgUmVtb3ZlRWxlbWVudCBleHRlbmRzIExheW91dCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBlbGVtZW50IGZyb20gRE9NLlxyXG4gICAgICogQHBhcmFtICRkYXRhIEV4cGVjdHMge2VsZW1lbnQ6IERPTUVsZW1Ub1JlbW92ZX1cclxuICAgICAqL1xyXG4gICAgbWFpbigkZGF0YSA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9ICRkYXRhLmVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoJGRhdGEuZWxlbWVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbW92ZUVsZW1lbnQ7XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\layouts\\remove-element.js","/..\\..\\views\\layouts")
},{"../layout":31,"6r38Q7":38,"buffer":36}],33:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview Observer interface
 * @namespace NikitosGolubev\Views
 */

/**
 * @abstract
 */
var Observer =
/*#__PURE__*/
function () {
  function Observer(model) {
    _classCallCheck(this, Observer);

    if (model !== false) {
      this.model = model;
      this.model.registerObserver(this);
    }
  }
  /**
   * Updates the view about changes in particular way
   * @param data
   * @abstract
   */


  _createClass(Observer, [{
    key: "update",
    value: function update(data) {
      console.error("It's an abstract method which requires implementation!");
      throw "It's an abstract method which requires implementation!";
    }
  }]);

  return Observer;
}();

var _default = Observer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmVyLmpzIl0sIm5hbWVzIjpbIk9ic2VydmVyIiwibW9kZWwiLCJyZWdpc3Rlck9ic2VydmVyIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBOzs7SUFHTUEsUTs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDZixRQUFJQSxLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUNqQixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLQSxLQUFMLENBQVdDLGdCQUFYLENBQTRCLElBQTVCO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7Ozs7MkJBS09DLEksRUFBTTtBQUNUQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyx3REFBZDtBQUNBLFlBQU0sd0RBQU47QUFDSDs7Ozs7O2VBR1VMLFEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBPYnNlcnZlciBpbnRlcmZhY2VcclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVmlld3NcclxuICovXHJcblxyXG4vKipcclxuICogQGFic3RyYWN0XHJcbiAqL1xyXG5jbGFzcyBPYnNlcnZlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xyXG4gICAgICAgIGlmIChtb2RlbCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnJlZ2lzdGVyT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgdmlldyBhYm91dCBjaGFuZ2VzIGluIHBhcnRpY3VsYXIgd2F5XHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZShkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkl0J3MgYW4gYWJzdHJhY3QgbWV0aG9kIHdoaWNoIHJlcXVpcmVzIGltcGxlbWVudGF0aW9uIVwiKTtcclxuICAgICAgICB0aHJvdyBcIkl0J3MgYW4gYWJzdHJhY3QgbWV0aG9kIHdoaWNoIHJlcXVpcmVzIGltcGxlbWVudGF0aW9uIVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZlcjtcclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\observer.js","/..\\..\\views")
},{"6r38Q7":38,"buffer":36}],34:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _observer = _interopRequireDefault(require("./observer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @extends Observer interface
 * @abstract
 * @interface
 */
var View =
/*#__PURE__*/
function (_Observer) {
  _inherits(View, _Observer);

  function View(model) {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).call(this, model));
  }
  /**
   * Performs all the UI changes.
   * @param $data Some data upon which changes should be done.
   */


  _createClass(View, [{
    key: "main",
    value: function main() {
      var $data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      console.error("It's an abstract method which requires implementation!");
      throw "It's an abstract method which requires implementation!";
    }
  }]);

  return View;
}(_observer["default"]);

var _default = View;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsIm1vZGVsIiwiJGRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJPYnNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS01BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2RUFDVEEsS0FEUztBQUVsQjtBQUVEOzs7Ozs7OzsyQkFJb0I7QUFBQSxVQUFmQyxLQUFlLHVFQUFQLEtBQU87QUFDaEJDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLHdEQUFkO0FBQ0EsWUFBTSx3REFBTjtBQUNIOzs7O0VBWmNDLG9COztlQWVKTCxJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQmFzZSB2aWV3XHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFZpZXdzXHJcbiAqL1xyXG5cclxuaW1wb3J0IE9ic2VydmVyIGZyb20gJy4vb2JzZXJ2ZXInO1xyXG5cclxuLyoqXHJcbiAqIEBleHRlbmRzIE9ic2VydmVyIGludGVyZmFjZVxyXG4gKiBAYWJzdHJhY3RcclxuICogQGludGVyZmFjZVxyXG4gKi9cclxuY2xhc3MgVmlldyBleHRlbmRzIE9ic2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIobW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybXMgYWxsIHRoZSBVSSBjaGFuZ2VzLlxyXG4gICAgICogQHBhcmFtICRkYXRhIFNvbWUgZGF0YSB1cG9uIHdoaWNoIGNoYW5nZXMgc2hvdWxkIGJlIGRvbmUuXHJcbiAgICAgKi9cclxuICAgIG1haW4oJGRhdGEgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJdCdzIGFuIGFic3RyYWN0IG1ldGhvZCB3aGljaCByZXF1aXJlcyBpbXBsZW1lbnRhdGlvbiFcIik7XHJcbiAgICAgICAgdGhyb3cgXCJJdCdzIGFuIGFic3RyYWN0IG1ldGhvZCB3aGljaCByZXF1aXJlcyBpbXBsZW1lbnRhdGlvbiFcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlldztcclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\view.js","/..\\..\\views")
},{"./observer":33,"6r38Q7":38,"buffer":36}],35:[function(require,module,exports){
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
},{"6r38Q7":38,"buffer":36}],36:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJhc2U2NCIsInJlcXVpcmUiLCJpZWVlNzU0IiwiZXhwb3J0cyIsIkJ1ZmZlciIsIlNsb3dCdWZmZXIiLCJJTlNQRUNUX01BWF9CWVRFUyIsInBvb2xTaXplIiwiX3VzZVR5cGVkQXJyYXlzIiwiYnVmIiwiQXJyYXlCdWZmZXIiLCJhcnIiLCJVaW50OEFycmF5IiwiZm9vIiwic3ViYXJyYXkiLCJlIiwic3ViamVjdCIsImVuY29kaW5nIiwibm9aZXJvIiwidHlwZSIsInN0cmluZ3RyaW0iLCJsZW5ndGgiLCJjb2VyY2UiLCJieXRlTGVuZ3RoIiwiRXJyb3IiLCJfYXVnbWVudCIsIl9pc0J1ZmZlciIsImkiLCJfc2V0IiwiaXNBcnJheWlzaCIsImlzQnVmZmVyIiwicmVhZFVJbnQ4Iiwid3JpdGUiLCJpc0VuY29kaW5nIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJiIiwidW5kZWZpbmVkIiwic3RyIiwicmV0IiwidXRmOFRvQnl0ZXMiLCJiYXNlNjRUb0J5dGVzIiwiY29uY2F0IiwibGlzdCIsInRvdGFsTGVuZ3RoIiwiYXNzZXJ0IiwiaXNBcnJheSIsInBvcyIsIml0ZW0iLCJjb3B5IiwiX2hleFdyaXRlIiwic3RyaW5nIiwib2Zmc2V0IiwiTnVtYmVyIiwicmVtYWluaW5nIiwic3RyTGVuIiwiYnl0ZSIsInBhcnNlSW50Iiwic3Vic3RyIiwiaXNOYU4iLCJfY2hhcnNXcml0dGVuIiwiX3V0ZjhXcml0ZSIsImNoYXJzV3JpdHRlbiIsImJsaXRCdWZmZXIiLCJfYXNjaWlXcml0ZSIsImFzY2lpVG9CeXRlcyIsIl9iaW5hcnlXcml0ZSIsIl9iYXNlNjRXcml0ZSIsIl91dGYxNmxlV3JpdGUiLCJ1dGYxNmxlVG9CeXRlcyIsInByb3RvdHlwZSIsImlzRmluaXRlIiwic3dhcCIsInRvU3RyaW5nIiwic3RhcnQiLCJlbmQiLCJzZWxmIiwiX2hleFNsaWNlIiwiX3V0ZjhTbGljZSIsIl9hc2NpaVNsaWNlIiwiX2JpbmFyeVNsaWNlIiwiX2Jhc2U2NFNsaWNlIiwiX3V0ZjE2bGVTbGljZSIsInRvSlNPTiIsImRhdGEiLCJBcnJheSIsInNsaWNlIiwiY2FsbCIsIl9hcnIiLCJ0YXJnZXQiLCJ0YXJnZXRfc3RhcnQiLCJzb3VyY2UiLCJsZW4iLCJmcm9tQnl0ZUFycmF5IiwicmVzIiwidG1wIiwiTWF0aCIsIm1pbiIsImRlY29kZVV0ZjhDaGFyIiwiZnJvbUNoYXJDb2RlIiwib3V0IiwidG9IZXgiLCJieXRlcyIsImNsYW1wIiwic2xpY2VMZW4iLCJuZXdCdWYiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwic2V0IiwidiIsIndyaXRlVUludDgiLCJub0Fzc2VydCIsIl9yZWFkVUludDE2IiwibGl0dGxlRW5kaWFuIiwidmFsIiwicmVhZFVJbnQxNkxFIiwicmVhZFVJbnQxNkJFIiwiX3JlYWRVSW50MzIiLCJyZWFkVUludDMyTEUiLCJyZWFkVUludDMyQkUiLCJyZWFkSW50OCIsIm5lZyIsIl9yZWFkSW50MTYiLCJyZWFkSW50MTZMRSIsInJlYWRJbnQxNkJFIiwiX3JlYWRJbnQzMiIsInJlYWRJbnQzMkxFIiwicmVhZEludDMyQkUiLCJfcmVhZEZsb2F0IiwicmVhZCIsInJlYWRGbG9hdExFIiwicmVhZEZsb2F0QkUiLCJfcmVhZERvdWJsZSIsInJlYWREb3VibGVMRSIsInJlYWREb3VibGVCRSIsInZhbHVlIiwidmVyaWZ1aW50IiwiX3dyaXRlVUludDE2IiwiaiIsIndyaXRlVUludDE2TEUiLCJ3cml0ZVVJbnQxNkJFIiwiX3dyaXRlVUludDMyIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVUludDMyQkUiLCJ3cml0ZUludDgiLCJ2ZXJpZnNpbnQiLCJfd3JpdGVJbnQxNiIsIndyaXRlSW50MTZMRSIsIndyaXRlSW50MTZCRSIsIl93cml0ZUludDMyIiwid3JpdGVJbnQzMkxFIiwid3JpdGVJbnQzMkJFIiwiX3dyaXRlRmxvYXQiLCJ2ZXJpZklFRUU3NTQiLCJ3cml0ZUZsb2F0TEUiLCJ3cml0ZUZsb2F0QkUiLCJfd3JpdGVEb3VibGUiLCJ3cml0ZURvdWJsZUxFIiwid3JpdGVEb3VibGVCRSIsImZpbGwiLCJjaGFyQ29kZUF0IiwiaW5zcGVjdCIsImpvaW4iLCJ0b0FycmF5QnVmZmVyIiwiYnVmZmVyIiwidHJpbSIsInJlcGxhY2UiLCJCUCIsIl9nZXQiLCJ0b0xvY2FsZVN0cmluZyIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwiY2VpbCIsIk9iamVjdCIsIm4iLCJieXRlQXJyYXkiLCJwdXNoIiwiaCIsImVuY29kZVVSSUNvbXBvbmVudCIsInNwbGl0IiwiYyIsImhpIiwibG8iLCJ0b0J5dGVBcnJheSIsInNyYyIsImRzdCIsImRlY29kZVVSSUNvbXBvbmVudCIsImVyciIsIm1heCIsImZsb29yIiwidGVzdCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O0FBT0EsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUFwQjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUVBRSxPQUFPLENBQUNDLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0FELE9BQU8sQ0FBQ0UsVUFBUixHQUFxQkQsTUFBckI7QUFDQUQsT0FBTyxDQUFDRyxpQkFBUixHQUE0QixFQUE1QjtBQUNBRixNQUFNLENBQUNHLFFBQVAsR0FBa0IsSUFBbEI7QUFFQTs7Ozs7O0FBS0FILE1BQU0sQ0FBQ0ksZUFBUCxHQUEwQixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJO0FBQ0YsUUFBSUMsR0FBRyxHQUFHLElBQUlDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBVjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxJQUFJQyxVQUFKLENBQWVILEdBQWYsQ0FBVjs7QUFDQUUsSUFBQUEsR0FBRyxDQUFDRSxHQUFKLEdBQVUsWUFBWTtBQUFFLGFBQU8sRUFBUDtBQUFXLEtBQW5DOztBQUNBLFdBQU8sT0FBT0YsR0FBRyxDQUFDRSxHQUFKLEVBQVAsSUFDSCxPQUFPRixHQUFHLENBQUNHLFFBQVgsS0FB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TSxDQUFDLE9BQU8yRixLQUFQLEtBQWlCLFFBQWxCLEVBQTRCLHVDQUE1QixDQUFOO0FBQ0EzRixFQUFBQSxNQUFNLENBQUMyRixLQUFLLElBQUlxRCxHQUFWLEVBQWUseUNBQWYsQ0FBTjtBQUNBaEosRUFBQUEsTUFBTSxDQUFDMkYsS0FBSyxJQUFJdkMsR0FBVixFQUFlLDBDQUFmLENBQU47QUFDRDs7QUFFRCxTQUFTcEQsTUFBVCxDQUFpQmtKLElBQWpCLEVBQXVCQyxPQUF2QixFQUFnQztBQUM5QixNQUFJLENBQUNELElBQUwsRUFBVyxNQUFNLElBQUl2SyxLQUFKLENBQVV3SyxPQUFPLElBQUksa0JBQXJCLENBQU47QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTJcblxuLyoqXG4gKiBJZiBgQnVmZmVyLl91c2VUeXBlZEFycmF5c2A6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChjb21wYXRpYmxlIGRvd24gdG8gSUU2KVxuICovXG5CdWZmZXIuX3VzZVR5cGVkQXJyYXlzID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gRGV0ZWN0IGlmIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWQgQXJyYXlzLiBTdXBwb3J0ZWQgYnJvd3NlcnMgYXJlIElFIDEwKywgRmlyZWZveCA0KyxcbiAgLy8gQ2hyb21lIDcrLCBTYWZhcmkgNS4xKywgT3BlcmEgMTEuNissIGlPUyA0LjIrLiBJZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFkZGluZ1xuICAvLyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsIHRoZW4gdGhhdCdzIHRoZSBzYW1lIGFzIG5vIGBVaW50OEFycmF5YCBzdXBwb3J0XG4gIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGFkZCBhbGwgdGhlIG5vZGUgQnVmZmVyIEFQSSBtZXRob2RzLiBUaGlzIGlzIGFuIGlzc3VlXG4gIC8vIGluIEZpcmVmb3ggNC0yOS4gTm93IGZpeGVkOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzhcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgLy8gQ2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIFdvcmthcm91bmQ6IG5vZGUncyBiYXNlNjQgaW1wbGVtZW50YXRpb24gYWxsb3dzIGZvciBub24tcGFkZGVkIHN0cmluZ3NcbiAgLy8gd2hpbGUgYmFzZTY0LWpzIGRvZXMgbm90LlxuICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnICYmIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgc3ViamVjdCA9IHN0cmluZ3RyaW0oc3ViamVjdClcbiAgICB3aGlsZSAoc3ViamVjdC5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgICBzdWJqZWN0ID0gc3ViamVjdCArICc9J1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdClcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0Lmxlbmd0aCkgLy8gYXNzdW1lIHRoYXQgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgZWxzZVxuICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbmVlZHMgdG8gYmUgYSBudW1iZXIsIGFycmF5IG9yIHN0cmluZy4nKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgICAgZWxzZVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0W2ldXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbi8vIFNUQVRJQyBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT09IG51bGwgJiYgYiAhPT0gdW5kZWZpbmVkICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAvIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBhc3NlcnQoaXNBcnJheShsaXN0KSwgJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3QsIFt0b3RhbExlbmd0aF0pXFxuJyArXG4gICAgICAnbGlzdCBzaG91bGQgYmUgYW4gQXJyYXkuJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdG90YWxMZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuLy8gQlVGRkVSIElOU1RBTkNFIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIF9oZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGFzc2VydChzdHJMZW4gJSAyID09PSAwLCAnSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgYXNzZXJ0KCFpc05hTihieXRlKSwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIEJ1ZmZlci5fY2hhcnNXcml0dGVuID0gaSAqIDJcbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gX3V0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBfYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG4gIHN0YXJ0ID0gTnVtYmVyKHN0YXJ0KSB8fCAwXG4gIGVuZCA9IChlbmQgIT09IHVuZGVmaW5lZClcbiAgICA/IE51bWJlcihlbmQpXG4gICAgOiBlbmQgPSBzZWxmLmxlbmd0aFxuXG4gIC8vIEZhc3RwYXRoIGVtcHR5IHN0cmluZ3NcbiAgaWYgKGVuZCA9PT0gc3RhcnQpXG4gICAgcmV0dXJuICcnXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBhc3NlcnQodGFyZ2V0X3N0YXJ0ID49IDAgJiYgdGFyZ2V0X3N0YXJ0IDwgdGFyZ2V0Lmxlbmd0aCxcbiAgICAgICd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCBzb3VyY2UubGVuZ3RoLCAnc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gc291cmNlLmxlbmd0aCwgJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwIHx8ICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gX3V0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBfYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspXG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBfYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIF9oZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2krMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gY2xhbXAoc3RhcnQsIGxlbiwgMClcbiAgZW5kID0gY2xhbXAoZW5kLCBsZW4sIGxlbilcblxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAyXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gICAgdmFsIHw9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldCArIDNdIDw8IDI0ID4+PiAwKVxuICB9IGVsc2Uge1xuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDFdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDJdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgM11cbiAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldF0gPDwgMjQgPj4+IDApXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLFxuICAgICAgICAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgdmFyIG5lZyA9IHRoaXNbb2Zmc2V0XSAmIDB4ODBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MTYoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDMyKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDAwMDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmZmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEZsb2F0IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRG91YmxlIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZilcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmZmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmLCAtMHg4MClcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgdGhpcy53cml0ZVVJbnQ4KHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgdGhpcy53cml0ZVVJbnQ4KDB4ZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZiwgLTB4ODAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQxNihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MTYoYnVmLCAweGZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MzIoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgMHhmZmZmZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsXG4gICAgICAgICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUuY2hhckNvZGVBdCgwKVxuICB9XG5cbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKSwgJ3ZhbHVlIGlzIG5vdCBhIG51bWJlcicpXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHRoaXMubGVuZ3RoLCAnc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gdGhpcy5sZW5ndGgsICdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICB0aGlzW2ldID0gdmFsdWVcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXQgPSBbXVxuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpXSA9IHRvSGV4KHRoaXNbaV0pXG4gICAgaWYgKGkgPT09IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMpIHtcbiAgICAgIG91dFtpICsgMV0gPSAnLi4uJ1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBvdXQuam9pbignICcpICsgJz4nXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKVxuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbi8vIHNsaWNlKHN0YXJ0LCBlbmQpXG5mdW5jdGlvbiBjbGFtcCAoaW5kZXgsIGxlbiwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIGluZGV4ID0gfn5pbmRleDsgIC8vIENvZXJjZSB0byBpbnRlZ2VyLlxuICBpZiAoaW5kZXggPj0gbGVuKSByZXR1cm4gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgaW5kZXggKz0gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gY29lcmNlIChsZW5ndGgpIHtcbiAgLy8gQ29lcmNlIGxlbmd0aCB0byBhIG51bWJlciAocG9zc2libHkgTmFOKSwgcm91bmQgdXBcbiAgLy8gaW4gY2FzZSBpdCdzIGZyYWN0aW9uYWwgKGUuZy4gMTIzLjQ1NikgdGhlbiBkbyBhXG4gIC8vIGRvdWJsZSBuZWdhdGUgdG8gY29lcmNlIGEgTmFOIHRvIDAuIEVhc3ksIHJpZ2h0P1xuICBsZW5ndGggPSB+fk1hdGguY2VpbCgrbGVuZ3RoKVxuICByZXR1cm4gbGVuZ3RoIDwgMCA/IDAgOiBsZW5ndGhcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoc3ViamVjdCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHN1YmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN1YmplY3QpID09PSAnW29iamVjdCBBcnJheV0nXG4gIH0pKHN1YmplY3QpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpXG4gICAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSlcbiAgICBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspXG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIHBvc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cblxuLypcbiAqIFdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGlzIGEgdmFsaWQgaW50ZWdlci4gVGhpcyBtZWFucyB0aGF0IGl0XG4gKiBpcyBub24tbmVnYXRpdmUuIEl0IGhhcyBubyBmcmFjdGlvbmFsIGNvbXBvbmVudCBhbmQgdGhhdCBpdCBkb2VzIG5vdFxuICogZXhjZWVkIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHZlcmlmdWludCAodmFsdWUsIG1heCkge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPj0gMCwgJ3NwZWNpZmllZCBhIG5lZ2F0aXZlIHZhbHVlIGZvciB3cml0aW5nIGFuIHVuc2lnbmVkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGlzIGxhcmdlciB0aGFuIG1heGltdW0gdmFsdWUgZm9yIHR5cGUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZnNpbnQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZklFRUU3NTQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxufVxuXG5mdW5jdGlvbiBhc3NlcnQgKHRlc3QsIG1lc3NhZ2UpIHtcbiAgaWYgKCF0ZXN0KSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAnRmFpbGVkIGFzc2VydGlvbicpXG59XG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\buffer\\index.js","/..\\..\\..\\..\\node_modules\\buffer")
},{"6r38Q7":38,"base64-js":35,"buffer":36,"ieee754":37}],37:[function(require,module,exports){
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
},{"6r38Q7":38,"buffer":36}],38:[function(require,module,exports){
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
},{"6r38Q7":38,"buffer":36}]},{},[1])