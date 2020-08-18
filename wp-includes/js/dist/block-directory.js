this["wp"] = this["wp"] || {}; this["wp"]["blockDirectory"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
<<<<<<< HEAD
/******/ 	return __webpack_require__(__webpack_require__.s = 443);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 429);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

<<<<<<< HEAD
/***/ 100:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["notices"]; }());

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
 // Disable reason: JSDoc linter doesn't seem to parse the union (`&`) correctly.

/* eslint-disable jsdoc/valid-types */

/** @typedef {{icon: JSX.Element, size?: number} & import('react').ComponentPropsWithoutRef<'SVG'>} IconProps */

/* eslint-enable jsdoc/valid-types */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["icon", "size"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(icon, _objectSpread({
    width: size,
    height: size
  }, props));
}

/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),

/***/ 14:
=======
/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 20:
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

<<<<<<< HEAD
// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
<<<<<<< HEAD
var unsupportedIterableToArray = __webpack_require__(29);
=======
var unsupportedIterableToArray = __webpack_require__(27);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
<<<<<<< HEAD
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c




function _slicedToArray(arr, i) {
  return Object(arrayWithHoles["a" /* default */])(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || Object(nonIterableRest["a" /* default */])();
}

/***/ }),

<<<<<<< HEAD
/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 24:
=======
/***/ 23:
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

<<<<<<< HEAD
/***/ 26:
=======
/***/ 25:
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

<<<<<<< HEAD
/***/ 262:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editPost"]; }());

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var starFilled = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ __webpack_exports__["a"] = (starFilled);


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var starEmpty = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["a"] = (starEmpty);


/***/ }),

/***/ 29:
=======
/***/ 27:
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
<<<<<<< HEAD
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
=======
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
<<<<<<< HEAD
  if (n === "Map" || n === "Set") return Array.from(o);
=======
  if (n === "Map" || n === "Set") return Array.from(n);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

<<<<<<< HEAD
/***/ 36:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dataControls"]; }());

/***/ }),

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

<<<<<<< HEAD
/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-directory/build-module/store/selectors.js
=======
/***/ 42:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "isRequestingDownloadableBlocks", function() { return isRequestingDownloadableBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getDownloadableBlocks", function() { return selectors_getDownloadableBlocks; });
<<<<<<< HEAD
__webpack_require__.d(selectors_namespaceObject, "getInstalledBlockTypes", function() { return getInstalledBlockTypes; });
__webpack_require__.d(selectors_namespaceObject, "getNewBlockTypes", function() { return getNewBlockTypes; });
__webpack_require__.d(selectors_namespaceObject, "getUnusedBlockTypes", function() { return getUnusedBlockTypes; });
__webpack_require__.d(selectors_namespaceObject, "isInstalling", function() { return isInstalling; });
__webpack_require__.d(selectors_namespaceObject, "getErrorNotices", function() { return getErrorNotices; });
__webpack_require__.d(selectors_namespaceObject, "getErrorNoticeForBlock", function() { return getErrorNoticeForBlock; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-directory/build-module/store/actions.js
=======
__webpack_require__.d(selectors_namespaceObject, "hasInstallBlocksPermission", function() { return selectors_hasInstallBlocksPermission; });
__webpack_require__.d(selectors_namespaceObject, "getInstalledBlockTypes", function() { return getInstalledBlockTypes; });
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "fetchDownloadableBlocks", function() { return fetchDownloadableBlocks; });
__webpack_require__.d(actions_namespaceObject, "receiveDownloadableBlocks", function() { return receiveDownloadableBlocks; });
<<<<<<< HEAD
__webpack_require__.d(actions_namespaceObject, "installBlockType", function() { return actions_installBlockType; });
__webpack_require__.d(actions_namespaceObject, "uninstallBlockType", function() { return actions_uninstallBlockType; });
__webpack_require__.d(actions_namespaceObject, "addInstalledBlockType", function() { return addInstalledBlockType; });
__webpack_require__.d(actions_namespaceObject, "removeInstalledBlockType", function() { return removeInstalledBlockType; });
__webpack_require__.d(actions_namespaceObject, "setIsInstalling", function() { return setIsInstalling; });
__webpack_require__.d(actions_namespaceObject, "setErrorNotice", function() { return setErrorNotice; });
__webpack_require__.d(actions_namespaceObject, "clearErrorNotice", function() { return clearErrorNotice; });

// EXTERNAL MODULE: external {"this":["wp","notices"]}
var external_this_wp_notices_ = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);
=======
__webpack_require__.d(actions_namespaceObject, "setInstallBlocksPermission", function() { return setInstallBlocksPermission; });
__webpack_require__.d(actions_namespaceObject, "downloadBlock", function() { return actions_downloadBlock; });
__webpack_require__.d(actions_namespaceObject, "installBlock", function() { return actions_installBlock; });
__webpack_require__.d(actions_namespaceObject, "uninstallBlock", function() { return uninstallBlock; });
__webpack_require__.d(actions_namespaceObject, "addInstalledBlockType", function() { return addInstalledBlockType; });
__webpack_require__.d(actions_namespaceObject, "removeInstalledBlockType", function() { return removeInstalledBlockType; });
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(4);

<<<<<<< HEAD
// EXTERNAL MODULE: external {"this":["wp","dataControls"]}
var external_this_wp_dataControls_ = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(18);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);
=======
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/reducer.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
<<<<<<< HEAD
 * External dependencies
 */

/**
 * WordPress dependencies
 */


=======
 * WordPress dependencies
 */

>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/**
 * Reducer returning an array of downloadable blocks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var reducer_downloadableBlocks = function downloadableBlocks() {
<<<<<<< HEAD
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
=======
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    results: {},
    filterValue: undefined,
    isRequestingDownloadableBlocks: true
  };
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_DOWNLOADABLE_BLOCKS':
<<<<<<< HEAD
      return _objectSpread({}, state, Object(defineProperty["a" /* default */])({}, action.filterValue, {
        isRequesting: true
      }));

    case 'RECEIVE_DOWNLOADABLE_BLOCKS':
      return _objectSpread({}, state, Object(defineProperty["a" /* default */])({}, action.filterValue, {
        results: action.downloadableBlocks,
        isRequesting: false
      }));
=======
      return _objectSpread({}, state, {
        isRequestingDownloadableBlocks: true
      });

    case 'RECEIVE_DOWNLOADABLE_BLOCKS':
      return _objectSpread({}, state, {
        results: Object.assign({}, state.results, Object(defineProperty["a" /* default */])({}, action.filterValue, action.downloadableBlocks)),
        isRequestingDownloadableBlocks: false
      });
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  }

  return state;
};
/**
 * Reducer managing the installation and deletion of blocks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var reducer_blockManagement = function blockManagement() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
<<<<<<< HEAD
    installedBlockTypes: [],
    isInstalling: {}
=======
    installedBlockTypes: []
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_INSTALLED_BLOCK_TYPE':
      return _objectSpread({}, state, {
        installedBlockTypes: [].concat(Object(toConsumableArray["a" /* default */])(state.installedBlockTypes), [action.item])
      });

    case 'REMOVE_INSTALLED_BLOCK_TYPE':
      return _objectSpread({}, state, {
        installedBlockTypes: state.installedBlockTypes.filter(function (blockType) {
          return blockType.name !== action.item.name;
        })
      });
<<<<<<< HEAD

    case 'SET_INSTALLING_BLOCK':
      return _objectSpread({}, state, {
        isInstalling: _objectSpread({}, state.isInstalling, Object(defineProperty["a" /* default */])({}, action.blockId, action.isInstalling))
      });
=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  }

  return state;
};
/**
<<<<<<< HEAD
 * Reducer returning an object of error notices.
=======
 * Reducer returns whether the user can install blocks.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

<<<<<<< HEAD
var reducer_errorNotices = function errorNotices() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_ERROR_NOTICE':
      return _objectSpread({}, state, Object(defineProperty["a" /* default */])({}, action.blockId, {
        message: action.message,
        isFatal: action.isFatal
      }));

    case 'CLEAR_ERROR_NOTICE':
      return Object(external_this_lodash_["omit"])(state, action.blockId);
  }

  return state;
};
/* harmony default export */ var reducer = (Object(external_this_wp_data_["combineReducers"])({
  downloadableBlocks: reducer_downloadableBlocks,
  blockManagement: reducer_blockManagement,
  errorNotices: reducer_errorNotices
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/utils/has-block-type.js
/**
 * Check if a block list contains a specific block type. Recursively searches
 * through `innerBlocks` if they exist.
 *
 * @param {Object} blockType A block object to search for.
 * @param {Object[]} blocks  The list of blocks to look through.
 *
 * @return {boolean} Whether the blockType is found.
 */
function hasBlockType(blockType) {
  var blocks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!blocks.length) {
    return false;
  }

  if (blocks.some(function (_ref) {
    var name = _ref.name;
    return name === blockType.name;
  })) {
    return true;
  }

  for (var i = 0; i < blocks.length; i++) {
    if (hasBlockType(blockType, blocks[i].innerBlocks)) {
      return true;
    }
  }

  return false;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/selectors.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Returns true if application is requesting for downloadable blocks.
 *
 * @param {Object} state Global application state.
 * @param {string} filterValue Search string.
 *
 *
 * @return {Array} Downloadable blocks
 */

function isRequestingDownloadableBlocks(state, filterValue) {
  if (!state.downloadableBlocks[filterValue] || !state.downloadableBlocks[filterValue].isRequesting) {
    return false;
  }

  return state.downloadableBlocks[filterValue].isRequesting;
=======
function reducer_hasPermission() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'SET_INSTALL_BLOCKS_PERMISSION') {
    return action.hasPermission;
  }

  return state;
}
/* harmony default export */ var reducer = (Object(external_this_wp_data_["combineReducers"])({
  downloadableBlocks: reducer_downloadableBlocks,
  blockManagement: reducer_blockManagement,
  hasPermission: reducer_hasPermission
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/selectors.js
/**
 * Returns true if application is requesting for downloadable blocks.
 *
 * @param {Object} state       Global application state.
 *
 * @return {Array} Downloadable blocks
 */
function isRequestingDownloadableBlocks(state) {
  return state.downloadableBlocks.isRequestingDownloadableBlocks;
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
}
/**
 * Returns the available uninstalled blocks
 *
 * @param {Object} state       Global application state.
 * @param {string} filterValue Search string.
 *
 * @return {Array} Downloadable blocks
 */

function selectors_getDownloadableBlocks(state, filterValue) {
<<<<<<< HEAD
  if (!state.downloadableBlocks[filterValue] || !state.downloadableBlocks[filterValue].results) {
    return [];
  }

  return state.downloadableBlocks[filterValue].results;
}
/**
 * Returns the block types that have been installed on the server.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */

function getInstalledBlockTypes(state) {
  return state.blockManagement.installedBlockTypes;
}
/**
 * Returns block types that have been installed on the server and used in the
 * current post.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */

var getNewBlockTypes = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var usedBlockTree = select('core/block-editor').getBlocks();
    var installedBlockTypes = getInstalledBlockTypes(state);
    var newBlockTypes = [];
    installedBlockTypes.forEach(function (blockType) {
      if (hasBlockType(blockType, usedBlockTree)) {
        newBlockTypes.push(blockType);
      }
    });
    return newBlockTypes;
  };
});
/**
 * Returns the block types that have been installed on the server but are not
 * used in the current post.
=======
  if (!state.downloadableBlocks.results[filterValue]) {
    return [];
  }

  return state.downloadableBlocks.results[filterValue];
}
/**
 * Returns true if user has permission to install blocks.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} User has permission to install blocks.
 */

function selectors_hasInstallBlocksPermission(state) {
  return state.hasPermission;
}
/**
 * Returns the block types that have been installed on the server.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */

<<<<<<< HEAD
var getUnusedBlockTypes = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var usedBlockTree = select('core/block-editor').getBlocks();
    var installedBlockTypes = getInstalledBlockTypes(state);
    var newBlockTypes = [];
    installedBlockTypes.forEach(function (blockType) {
      if (!hasBlockType(blockType, usedBlockTree)) {
        newBlockTypes.push(blockType);
      }
    });
    return newBlockTypes;
  };
});
/**
 * Returns true if application is calling install endpoint.
 *
 * @param {Object} state Global application state.
 * @param {string} blockId Id of the block.
 *
 * @return {boolean} Whether its currently installing
 */

function isInstalling(state, blockId) {
  return state.blockManagement.isInstalling[blockId] || false;
}
/**
 * Returns the error notices
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Object with error notices.
 */

function getErrorNotices(state) {
  return state.errorNotices;
}
/**
 * Returns the error notice for a given block.
 *
 * @param {Object} state   Global application state.
 * @param {string} blockId The ID of the block plugin. eg: my-block
 *
 * @return {string|boolean} The error text, or false if no error.
 */

function getErrorNoticeForBlock(state, blockId) {
  return state.errorNotices[blockId];
}

// EXTERNAL MODULE: external {"this":"regeneratorRuntime"}
var external_this_regeneratorRuntime_ = __webpack_require__(24);
var external_this_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_this_regeneratorRuntime_);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50);

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(45);
=======
function getInstalledBlockTypes(state) {
  return state.blockManagement.installedBlockTypes;
}

// EXTERNAL MODULE: external {"this":"regeneratorRuntime"}
var external_this_regeneratorRuntime_ = __webpack_require__(23);
var external_this_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_this_regeneratorRuntime_);

// EXTERNAL MODULE: external {"this":["wp","blocks"]}
var external_this_wp_blocks_ = __webpack_require__(10);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(42);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/controls.js



<<<<<<< HEAD
=======

function controls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function controls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { controls_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { controls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(loadAssets);

/**
 * External dependencies
 */

>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/**
 * WordPress dependencies
 */

<<<<<<< HEAD
/**
 * Load an asset for a block.
 *
 * This function returns a Promise that will resolve once the asset is loaded,
 * or in the case of Stylesheets and Inline Javascript, will resolve immediately.
 *
 * @param {HTMLElement} el A HTML Element asset to inject.
 *
 * @return {Promise} Promise which will resolve when the asset is loaded.
 */

var loadAsset = function loadAsset(el) {
  return new Promise(function (resolve, reject) {
    /*
     * Reconstruct the passed element, this is required as inserting the Node directly
     * won't always fire the required onload events, even if the asset wasn't already loaded.
     */
    var newNode = document.createElement(el.nodeName);
    ['id', 'rel', 'src', 'href', 'type'].forEach(function (attr) {
      if (el[attr]) {
        newNode[attr] = el[attr];
      }
    }); // Append inline <script> contents.

    if (el.innerHTML) {
      newNode.appendChild(document.createTextNode(el.innerHTML));
    }

    newNode.onload = function () {
      return resolve(true);
    };

    newNode.onerror = function () {
      return reject(new Error('Error loading asset.'));
    };

    document.body.appendChild(newNode); // Resolve Stylesheets and Inline JavaScript immediately.

    if ('link' === newNode.nodeName.toLowerCase() || 'script' === newNode.nodeName.toLowerCase() && !newNode.src) {
      resolve();
    }
  });
};
/**
 * Load the asset files for a block
 *
 * @param {Array} assets A collection of URLs for the assets.
=======


/**
 * Calls a selector using the current state.
 *
 * @param {string} storeName    Store name.
 * @param {string} selectorName Selector name.
 * @param {Array}  args         Selector arguments.
 *
 * @return {Object} Control descriptor.
 */

function controls_select(storeName, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return {
    type: 'SELECT',
    storeName: storeName,
    selectorName: selectorName,
    args: args
  };
}
/**
 * Calls a dispatcher using the current state.
 *
 * @param {string} storeName      Store name.
 * @param {string} dispatcherName Dispatcher name.
 * @param {Array}  args           Selector arguments.
 *
 * @return {Object} Control descriptor.
 */

function controls_dispatch(storeName, dispatcherName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return {
    type: 'DISPATCH',
    storeName: storeName,
    dispatcherName: dispatcherName,
    args: args
  };
}
/**
 * Trigger an API Fetch request.
 *
 * @param {Object} request API Fetch Request Object.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 *
 * @return {Object} Control descriptor.
 */

<<<<<<< HEAD
function loadAssets(assets) {
  return {
    type: 'LOAD_ASSETS',
    assets: assets
  };
}
var controls = {
  LOAD_ASSETS: function LOAD_ASSETS() {
    /*
     * Fetch the current URL (post-new.php, or post.php?post=1&action=edit) and compare the
     * Javascript and CSS assets loaded between the pages. This imports the required assets
     * for the block into the current page while not requiring that we know them up-front.
     * In the future this can be improved by reliance upon block.json and/or a script-loader
     * dependancy API.
     */
    return external_this_wp_apiFetch_default()({
      url: document.location.href,
      parse: false
    }).then(function (response) {
      return response.text();
    }).then(function (data) {
      var doc = new window.DOMParser().parseFromString(data, 'text/html');
      var newAssets = Array.from(doc.querySelectorAll('link[rel="stylesheet"],script')).filter(function (asset) {
        return asset.id && !document.getElementById(asset.id);
      });
      return new Promise( /*#__PURE__*/function () {
        var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(function _callee(resolve, reject) {
          var i;
          return external_this_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = external_this_regeneratorRuntime_default.a.keys(newAssets);

                case 1:
                  if ((_context.t1 = _context.t0()).done) {
                    _context.next = 13;
                    break;
                  }

                  i = _context.t1.value;
                  _context.prev = 3;
                  _context.next = 6;
                  return loadAsset(newAssets[i]);

                case 6:
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t2 = _context["catch"](3);
                  reject(_context.t2);

                case 11:
                  _context.next = 1;
                  break;

                case 13:
                  resolve();

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[3, 8]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }
};
/* harmony default export */ var store_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/utils/get-plugin-url.js
/**
 * Get the plugin's direct API link out of a block-directory response.
 *
 * @param {Object} block The block object
 *
 * @return {string} The plugin URL, if exists.
 */
function getPluginUrl(block) {
  if (!block) {
    return false;
  }

  var link = block.links['wp:plugin'] || block.links.self;

  if (link && link.length) {
    return link[0].href;
  }

  return false;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/actions.js



var _marked = /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(actions_installBlockType),
    _marked2 = /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(actions_uninstallBlockType);

function actions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function actions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { actions_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { actions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
=======
function apiFetch(request) {
  return {
    type: 'API_FETCH',
    request: request
  };
}
/**
 * Loads JavaScript
 *
 * @param {Array}    asset   The url for the JavaScript.
 * @param {Function} onLoad  Callback function on success.
 * @param {Function} onError Callback function on failure.
 */

var loadScript = function loadScript(asset, onLoad, onError) {
  if (!asset) {
    return;
  }

  var existing = document.querySelector("script[src=\"".concat(asset.src, "\"]"));

  if (existing) {
    existing.parentNode.removeChild(existing);
  }

  var script = document.createElement('script');
  script.src = typeof asset === 'string' ? asset : asset.src;
  script.onload = onLoad;
  script.onerror = onError;
  document.body.appendChild(script);
};
/**
 * Loads CSS file.
 *
 * @param {*} asset the url for the CSS file.
 */


var loadStyle = function loadStyle(asset) {
  if (!asset) {
    return;
  }

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = typeof asset === 'string' ? asset : asset.src;
  document.body.appendChild(link);
};
/**
 * Load the asset files for a block
 *
 * @param {Array} assets A collection of URL for the assets.
 *
 * @return {Object} Control descriptor.
 */


function loadAssets(assets) {
  return external_this_regeneratorRuntime_default.a.wrap(function loadAssets$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            type: 'LOAD_ASSETS',
            assets: assets
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
var controls = {
  SELECT: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
    return function (_ref) {
      var _registry$select;

      var storeName = _ref.storeName,
          selectorName = _ref.selectorName,
          args = _ref.args;
      return (_registry$select = registry.select(storeName))[selectorName].apply(_registry$select, Object(toConsumableArray["a" /* default */])(args));
    };
  }),
  DISPATCH: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
    return function (_ref2) {
      var _registry$dispatch;

      var storeName = _ref2.storeName,
          dispatcherName = _ref2.dispatcherName,
          args = _ref2.args;
      return (_registry$dispatch = registry.dispatch(storeName))[dispatcherName].apply(_registry$dispatch, Object(toConsumableArray["a" /* default */])(args));
    };
  }),
  API_FETCH: function API_FETCH(_ref3) {
    var request = _ref3.request;
    return external_this_wp_apiFetch_default()(controls_objectSpread({}, request));
  },
  LOAD_ASSETS: function LOAD_ASSETS(_ref4) {
    var assets = _ref4.assets;
    return new Promise(function (resolve, reject) {
      if (Array.isArray(assets)) {
        var scriptsCount = 0;
        Object(external_this_lodash_["forEach"])(assets, function (asset) {
          if (asset.match(/\.js$/) !== null) {
            scriptsCount++;
            loadScript(asset, function () {
              scriptsCount--;

              if (scriptsCount === 0) {
                return resolve(scriptsCount);
              }
            }, reject);
          } else {
            loadStyle(asset);
          }
        });
      } else {
        loadScript(assets.editor_script, function () {
          return resolve(0);
        }, reject);
        loadStyle(assets.style);
      }
    });
  }
};
/* harmony default export */ var store_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/actions.js


var actions_marked =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_downloadBlock),
    _marked2 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_installBlock),
    _marked3 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(uninstallBlock);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

/**
 * WordPress dependencies
 */

<<<<<<< HEAD

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/**
 * Internal dependencies
 */


<<<<<<< HEAD

/**
 * Returns an action object used in signalling that the downloadable blocks
 * have been requested and is loading.
 *
 * @param {string} filterValue Search string.
=======
/**
 * Returns an action object used in signalling that the downloadable blocks have been requested and is loading.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 *
 * @return {Object} Action object.
 */

<<<<<<< HEAD
function fetchDownloadableBlocks(filterValue) {
  return {
    type: 'FETCH_DOWNLOADABLE_BLOCKS',
    filterValue: filterValue
  };
}
/**
 * Returns an action object used in signalling that the downloadable blocks
 * have been updated.
 *
 * @param {Array}  downloadableBlocks Downloadable blocks.
 * @param {string} filterValue        Search string.
=======
function fetchDownloadableBlocks() {
  return {
    type: 'FETCH_DOWNLOADABLE_BLOCKS'
  };
}
/**
 * Returns an action object used in signalling that the downloadable blocks have been updated.
 *
 * @param {Array} downloadableBlocks Downloadable blocks.
 * @param {string} filterValue Search string.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 *
 * @return {Object} Action object.
 */

function receiveDownloadableBlocks(downloadableBlocks, filterValue) {
  return {
    type: 'RECEIVE_DOWNLOADABLE_BLOCKS',
    downloadableBlocks: downloadableBlocks,
    filterValue: filterValue
  };
}
/**
<<<<<<< HEAD
 * Action triggered to install a block plugin.
 *
 * @param {Object} block The block item returned by search.
 *
 * @return {boolean} Whether the block was successfully installed & loaded.
 */

function actions_installBlockType(block) {
  var id, assets, success, url, links, response, registeredBlocks, message, isFatal, fatalAPIErrors;
  return external_this_regeneratorRuntime_default.a.wrap(function installBlockType$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = block.id, assets = block.assets;
          success = false;
          _context.next = 4;
          return clearErrorNotice(id);

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return setIsInstalling(block.id, true);

        case 7:
          // If we have a wp:plugin link, the plugin is installed but inactive.
          url = getPluginUrl(block);
          links = {};

          if (!url) {
            _context.next = 14;
            break;
          }

          _context.next = 12;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            url: url,
            data: {
              status: 'active'
            },
            method: 'PUT'
          });

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.next = 16;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: 'wp/v2/plugins',
            data: {
              slug: block.id,
              status: 'active'
=======
 * Returns an action object used in signalling that the user does not have permission to install blocks.
 *
 @param {boolean} hasPermission User has permission to install blocks.
 *
 * @return {Object} Action object.
 */

function setInstallBlocksPermission(hasPermission) {
  return {
    type: 'SET_INSTALL_BLOCKS_PERMISSION',
    hasPermission: hasPermission
  };
}
/**
 * Action triggered to download block assets.
 *
 * @param {Object} item The selected block item
 * @param {Function} onSuccess The callback function when the action has succeeded.
 * @param {Function} onError The callback function when the action has failed.
 */

function actions_downloadBlock(item, onSuccess, onError) {
  var registeredBlocks;
  return external_this_regeneratorRuntime_default.a.wrap(function downloadBlock$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (item.assets.length) {
            _context.next = 3;
            break;
          }

          throw new Error('Block has no assets');

        case 3:
          _context.next = 5;
          return loadAssets(item.assets);

        case 5:
          registeredBlocks = Object(external_this_wp_blocks_["getBlockTypes"])();

          if (!registeredBlocks.length) {
            _context.next = 10;
            break;
          }

          onSuccess(item);
          _context.next = 11;
          break;

        case 10:
          throw new Error('Unable to get block types');

        case 11:
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          _context.next = 17;
          return onError(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, actions_marked, null, [[0, 13]]);
}
/**
 * Action triggered to install a block plugin.
 *
 * @param {string} item The block item returned by search.
 * @param {Function} onSuccess The callback function when the action has succeeded.
 * @param {Function} onError The callback function when the action has failed.
 *
 */

function actions_installBlock(_ref, onSuccess, onError) {
  var id, name, response;
  return external_this_regeneratorRuntime_default.a.wrap(function installBlock$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = _ref.id, name = _ref.name;
          _context2.prev = 1;
          _context2.next = 4;
          return apiFetch({
            path: '__experimental/block-directory/install',
            data: {
              slug: id
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
            },
            method: 'POST'
          });

<<<<<<< HEAD
        case 16:
          response = _context.sent;
          // Add the `self` link for newly-installed blocks.
          links = response._links;

        case 18:
          _context.next = 20;
          return addInstalledBlockType(actions_objectSpread({}, block, {
            links: actions_objectSpread({}, block.links, {}, links)
          }));

        case 20:
          _context.next = 22;
          return loadAssets(assets);

        case 22:
          _context.next = 24;
          return Object(external_this_wp_dataControls_["select"])('core/blocks', 'getBlockTypes');

        case 24:
          registeredBlocks = _context.sent;

          if (!(!registeredBlocks.length || !registeredBlocks.filter(function (i) {
            return i.name === block.name;
          }).length)) {
            _context.next = 27;
            break;
          }

          throw new Error(Object(external_this_wp_i18n_["__"])('Error registering block. Try reloading the page.'));

        case 27:
          success = true;
          _context.next = 38;
          break;

        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](4);
          message = _context.t0.message || Object(external_this_wp_i18n_["__"])('An error occurred.'); // Errors we throw are fatal

          isFatal = _context.t0 instanceof Error; // Specific API errors that are fatal

          fatalAPIErrors = {
            folder_exists: Object(external_this_wp_i18n_["__"])('This block is already installed. Try reloading the page.'),
            unable_to_connect_to_filesystem: Object(external_this_wp_i18n_["__"])('Error installing block. You can reload the page and try again.')
          };

          if (fatalAPIErrors[_context.t0.code]) {
            isFatal = true;
            message = fatalAPIErrors[_context.t0.code];
          }

          _context.next = 38;
          return setErrorNotice(id, message, isFatal);

        case 38:
          _context.next = 40;
          return setIsInstalling(block.id, false);

        case 40:
          return _context.abrupt("return", success);

        case 41:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[4, 30]]);
=======
        case 4:
          response = _context2.sent;

          if (!(response.success === false)) {
            _context2.next = 7;
            break;
          }

          throw new Error(response.errorMessage);

        case 7:
          _context2.next = 9;
          return addInstalledBlockType({
            id: id,
            name: name
          });

        case 9:
          onSuccess();
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          onError(_context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 12]]);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
}
/**
 * Action triggered to uninstall a block plugin.
 *
<<<<<<< HEAD
 * @param {Object} block The blockType object.
 */

function actions_uninstallBlockType(block) {
  return external_this_regeneratorRuntime_default.a.wrap(function uninstallBlockType$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            url: getPluginUrl(block),
            data: {
              status: 'inactive'
            },
            method: 'PUT'
          });

        case 3:
          _context2.next = 5;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            url: getPluginUrl(block),
            method: 'DELETE'
          });

        case 5:
          _context2.next = 7;
          return removeInstalledBlockType(block);

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
          return Object(external_this_wp_dataControls_["dispatch"])('core/notices', 'createErrorNotice', _context2.t0.message || Object(external_this_wp_i18n_["__"])('An error occurred.'));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
=======
 * @param {string} item The block item returned by search.
 * @param {Function} onSuccess The callback function when the action has succeeded.
 * @param {Function} onError The callback function when the action has failed.
 *
 */

function uninstallBlock(_ref2, onSuccess, onError) {
  var id, name, response;
  return external_this_regeneratorRuntime_default.a.wrap(function uninstallBlock$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = _ref2.id, name = _ref2.name;
          _context3.prev = 1;
          _context3.next = 4;
          return apiFetch({
            path: '__experimental/block-directory/uninstall',
            data: {
              slug: id
            },
            method: 'DELETE'
          });

        case 4:
          response = _context3.sent;

          if (!(response.success === false)) {
            _context3.next = 7;
            break;
          }

          throw new Error(response.errorMessage);

        case 7:
          _context3.next = 9;
          return removeInstalledBlockType({
            id: id,
            name: name
          });

        case 9:
          onSuccess();
          _context3.next = 15;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](1);
          onError(_context3.t0);

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 12]]);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
}
/**
 * Returns an action object used to add a newly installed block type.
 *
<<<<<<< HEAD
 * @param {Object} item The block item with the block id and name.
=======
 * @param {string} item The block item with the block id and name.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 *
 * @return {Object} Action object.
 */

function addInstalledBlockType(item) {
  return {
    type: 'ADD_INSTALLED_BLOCK_TYPE',
    item: item
  };
}
/**
 * Returns an action object used to remove a newly installed block type.
 *
 * @param {string} item The block item with the block id and name.
 *
 * @return {Object} Action object.
 */

function removeInstalledBlockType(item) {
  return {
    type: 'REMOVE_INSTALLED_BLOCK_TYPE',
    item: item
  };
}
<<<<<<< HEAD
/**
 * Returns an action object used to indicate install in progress
 *
 * @param {string} blockId
 * @param {boolean} isInstalling
 *
 * @return {Object} Action object.
 */

function setIsInstalling(blockId, isInstalling) {
  return {
    type: 'SET_INSTALLING_BLOCK',
    blockId: blockId,
    isInstalling: isInstalling
  };
}
/**
 * Sets an error notice string to be displayed to the user
 *
 * @param {string} blockId The ID of the block plugin. eg: my-block
 * @param {string} message  The message shown in the notice.
 * @param {boolean} isFatal Whether the user can recover from the error
 *
 * @return {Object} Action object.
 */

function setErrorNotice(blockId, message) {
  var isFatal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: 'SET_ERROR_NOTICE',
    blockId: blockId,
    message: message,
    isFatal: isFatal
  };
}
/**
 * Sets the error notice to empty for specific block
 *
 * @param {string} blockId The ID of the block plugin. eg: my-block
 *
 * @return {Object} Action object.
 */

function clearErrorNotice(blockId) {
  return {
    type: 'CLEAR_ERROR_NOTICE',
    blockId: blockId
  };
}
=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/resolvers.js


/**
 * External dependencies
 */

/**
<<<<<<< HEAD
 * WordPress dependencies
 */


/**
=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 * Internal dependencies
 */


<<<<<<< HEAD
/* harmony default export */ var resolvers = ({
  getDownloadableBlocks: /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(function getDownloadableBlocks(filterValue) {
=======

/* harmony default export */ var resolvers = ({
  getDownloadableBlocks:
  /*#__PURE__*/
  external_this_regeneratorRuntime_default.a.mark(function getDownloadableBlocks(filterValue) {
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
    var results, blocks;
    return external_this_regeneratorRuntime_default.a.wrap(function getDownloadableBlocks$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (filterValue) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetchDownloadableBlocks(filterValue);

          case 5:
            _context.next = 7;
<<<<<<< HEAD
            return Object(external_this_wp_dataControls_["apiFetch"])({
              path: "wp/v2/block-directory/search?term=".concat(filterValue)
=======
            return apiFetch({
              path: "__experimental/block-directory/search?term=".concat(filterValue)
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
            });

          case 7:
            results = _context.sent;
            blocks = results.map(function (result) {
              return Object(external_this_lodash_["mapKeys"])(result, function (value, key) {
                return Object(external_this_lodash_["camelCase"])(key);
              });
            });
            _context.next = 11;
            return receiveDownloadableBlocks(blocks, filterValue);

          case 11:
<<<<<<< HEAD
            _context.next = 15;
=======
            _context.next = 18;
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);

<<<<<<< HEAD
          case 15:
=======
            if (!(_context.t0.code === 'rest_user_cannot_view')) {
              _context.next = 18;
              break;
            }

            _context.next = 18;
            return setInstallBlocksPermission(false);

          case 18:
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
          case "end":
            return _context.stop();
        }
      }
    }, getDownloadableBlocks, null, [[2, 13]]);
<<<<<<< HEAD
  })
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/index.js


function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

=======
  }),
  hasInstallBlocksPermission:
  /*#__PURE__*/
  external_this_regeneratorRuntime_default.a.mark(function hasInstallBlocksPermission() {
    return external_this_regeneratorRuntime_default.a.wrap(function hasInstallBlocksPermission$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return apiFetch({
              path: "__experimental/block-directory/search?term="
            });

          case 3:
            _context2.next = 5;
            return setInstallBlocksPermission(true);

          case 5:
            _context2.next = 12;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);

            if (!(_context2.t0.code === 'rest_user_cannot_view')) {
              _context2.next = 12;
              break;
            }

            _context2.next = 12;
            return setInstallBlocksPermission(false);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, hasInstallBlocksPermission, null, [[0, 7]]);
  })
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/index.js
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/**
 * WordPress dependencies
 */

<<<<<<< HEAD

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/**
 * Internal dependencies
 */






/**
 * Module Constants
 */

var MODULE_KEY = 'core/block-directory';
/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
 *
 * @type {Object}
 */

var storeConfig = {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject,
<<<<<<< HEAD
  controls: store_objectSpread({}, external_this_wp_dataControls_["controls"], {}, store_controls),
=======
  controls: store_controls,
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  resolvers: resolvers
};
var store = Object(external_this_wp_data_["registerStore"])(MODULE_KEY, storeConfig);
/* harmony default export */ var build_module_store = (store);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","plugins"]}
<<<<<<< HEAD
var external_this_wp_plugins_ = __webpack_require__(76);

// EXTERNAL MODULE: external {"this":["wp","blocks"]}
var external_this_wp_blocks_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/auto-block-uninstaller/index.js
/**
 * WordPress dependencies
 */



function AutoBlockUninstaller() {
  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-directory'),
      uninstallBlockType = _useDispatch.uninstallBlockType;

  var shouldRemoveBlockTypes = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/editor'),
        isAutosavingPost = _select.isAutosavingPost,
        isSavingPost = _select.isSavingPost;

    return isSavingPost() && !isAutosavingPost();
  }, []);
  var unusedBlockTypes = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-directory').getUnusedBlockTypes();
  }, []);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (shouldRemoveBlockTypes && unusedBlockTypes.length) {
      unusedBlockTypes.forEach(function (blockType) {
        uninstallBlockType(blockType);
        Object(external_this_wp_blocks_["unregisterBlockType"])(blockType.name);
      });
    }
  }, [shouldRemoveBlockTypes]);
  return null;
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(14);

// EXTERNAL MODULE: external {"this":["wp","blockEditor"]}
var external_this_wp_blockEditor_ = __webpack_require__(7);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(9);
=======
var external_this_wp_plugins_ = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(20);

// EXTERNAL MODULE: external {"this":["wp","blockEditor"]}
var external_this_wp_blockEditor_ = __webpack_require__(6);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(8);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(3);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-author-info/index.js


/**
 * WordPress dependencies
 */



function DownloadableBlockAuthorInfo(_ref) {
  var author = _ref.author,
      authorBlockCount = _ref.authorBlockCount,
      authorBlockRating = _ref.authorBlockRating;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content-author"
  }, Object(external_this_wp_i18n_["sprintf"])(
  /* translators: %s: author name. */
  Object(external_this_wp_i18n_["__"])('Authored by %s'), author)), Object(external_this_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content"
  }, authorBlockRating > 0 ? Object(external_this_wp_i18n_["sprintf"])(
  /* translators: 1: number of blocks. 2: average rating. */
  Object(external_this_wp_i18n_["_n"])('This author has %1$d block, with an average rating of %2$d.', 'This author has %1$d blocks, with an average rating of %2$d.', authorBlockCount), authorBlockCount, authorBlockRating) : Object(external_this_wp_i18n_["sprintf"])(
  /* translators: 1: number of blocks. */
  Object(external_this_wp_i18n_["_n"])('This author has %1$d block.', 'This author has %1$d blocks.', authorBlockCount), authorBlockCount)));
}

/* harmony default export */ var downloadable_block_author_info = (DownloadableBlockAuthorInfo);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var build_module_icon = __webpack_require__(137);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-filled.js
var star_filled = __webpack_require__(285);

// EXTERNAL MODULE: external {"this":["wp","primitives"]}
var external_this_wp_primitives_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/star-half.js


/**
 * WordPress dependencies
 */

var starHalf = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M9.518 8.783a.25.25 0 00.188-.137l2.069-4.192a.25.25 0 01.448 0l2.07 4.192a.25.25 0 00.187.137l4.626.672a.25.25 0 01.139.427l-3.347 3.262a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.363.264l-4.137-2.176a.25.25 0 00-.233 0l-4.138 2.175a.25.25 0 01-.362-.263l.79-4.607a.25.25 0 00-.072-.222L4.753 9.882a.25.25 0 01.14-.427l4.625-.672zM12 14.533c.28 0 .559.067.814.2l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39v7.143z"
}));
/* harmony default export */ var star_half = (starHalf);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-empty.js
var star_empty = __webpack_require__(286);

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/block-ratings/stars.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function Stars(_ref) {
  var rating = _ref.rating;
  var stars = Math.round(rating / 0.5) * 0.5;
  var fullStarCount = Math.floor(rating);
  var halfStarCount = Math.ceil(rating - fullStarCount);
  var emptyStarCount = 5 - (fullStarCount + halfStarCount);
  return Object(external_this_wp_element_["createElement"])("div", {
<<<<<<< HEAD
    "aria-label": Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: number of stars. */
    Object(external_this_wp_i18n_["__"])('%s out of 5 stars'), stars)
  }, Object(external_this_lodash_["times"])(fullStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
      key: "full_stars_".concat(i),
      icon: star_filled["a" /* default */],
      size: 16
    });
  }), Object(external_this_lodash_["times"])(halfStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
      key: "half_stars_".concat(i),
      icon: star_half,
      size: 16
    });
  }), Object(external_this_lodash_["times"])(emptyStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
      key: "empty_stars_".concat(i),
      icon: star_empty["a" /* default */],
=======
    "aria-label": Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%s out of 5 stars'), stars)
  }, Object(external_this_lodash_["times"])(fullStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
      key: "full_stars_".concat(i),
      icon: "star-filled",
      size: 16
    });
  }), Object(external_this_lodash_["times"])(halfStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
      key: "half_stars_".concat(i),
      icon: "star-half",
      size: 16
    });
  }), Object(external_this_lodash_["times"])(emptyStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
      key: "empty_stars_".concat(i),
      icon: "star-empty",
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
      size: 16
    });
  }));
}

/* harmony default export */ var block_ratings_stars = (Stars);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/block-ratings/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var block_ratings_BlockRatings = function BlockRatings(_ref) {
  var rating = _ref.rating,
      ratingCount = _ref.ratingCount;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-block-ratings"
  }, Object(external_this_wp_element_["createElement"])(block_ratings_stars, {
    rating: rating
  }), Object(external_this_wp_element_["createElement"])("span", {
    className: "block-directory-block-ratings__rating-count",
<<<<<<< HEAD
    "aria-label": Object(external_this_wp_i18n_["sprintf"])( // translators: %d: number of ratings (number).
    Object(external_this_wp_i18n_["_n"])('%d total rating', '%d total ratings', ratingCount), ratingCount)
=======
    "aria-label": // translators: %d: number of ratings (number).
    Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%d total rating', '%d total ratings', ratingCount), ratingCount)
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  }, "(", ratingCount, ")"));
};
/* harmony default export */ var block_ratings = (block_ratings_BlockRatings);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-icon/index.js


/**
 * WordPress dependencies
 */



function DownloadableBlockIcon(_ref) {
  var icon = _ref.icon,
      title = _ref.title;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-icon"
  }, icon.match(/\.(jpeg|jpg|gif|png|svg)(?:\?.*)?$/) !== null ? Object(external_this_wp_element_["createElement"])("img", {
    src: icon,
    alt: Object(external_this_wp_i18n_["sprintf"])( // translators: %s: Name of the plugin e.g: "Akismet".
    Object(external_this_wp_i18n_["__"])('%s block icon'), title)
  }) : Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
    icon: icon,
    showColors: true
  }));
}

/* harmony default export */ var downloadable_block_icon = (DownloadableBlockIcon);

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-header/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function DownloadableBlockHeader(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      rating = _ref.rating,
      ratingCount = _ref.ratingCount,
<<<<<<< HEAD
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$isInstallable = _ref.isInstallable,
      isInstallable = _ref$isInstallable === void 0 ? true : _ref$isInstallable,
      _onClick = _ref.onClick;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-header__row"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_icon, {
    icon: icon,
    title: title
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-header__column"
  }, Object(external_this_wp_element_["createElement"])("h2", {
=======
      _onClick = _ref.onClick;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-header__row"
  }, icon.match(/\.(jpeg|jpg|gif|png)(?:\?.*)?$/) !== null ? // translators: %s: Name of the plugin e.g: "Akismet".
  Object(external_this_wp_element_["createElement"])("img", {
    src: icon,
    alt: Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%s block icon'), title)
  }) : Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
    icon: icon,
    showColors: true
  })), Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-header__column"
  }, Object(external_this_wp_element_["createElement"])("span", {
    role: "heading",
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
    className: "block-directory-downloadable-block-header__title"
  }, title), Object(external_this_wp_element_["createElement"])(block_ratings, {
    rating: rating,
    ratingCount: ratingCount
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
<<<<<<< HEAD
    isSecondary: true,
    isBusy: isLoading,
    disabled: isLoading || !isInstallable,
    onClick: function onClick(event) {
      event.preventDefault();

      if (!isLoading && isInstallable) {
        _onClick();
      }
    }
  }, isLoading ? Object(external_this_wp_i18n_["__"])('Adding…') : Object(external_this_wp_i18n_["__"])('Add block')));
=======
    isDefault: true,
    onClick: function onClick(event) {
      event.preventDefault();

      _onClick();
    }
  }, Object(external_this_wp_i18n_["__"])('Add block')));
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
}

/* harmony default export */ var downloadable_block_header = (DownloadableBlockHeader);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/chart-line.js
=======
// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-author-info/index.js
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c


/**
 * WordPress dependencies
 */

<<<<<<< HEAD
var chartLine = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18 3.5c0 .62-.38 1.16-.92 1.38v13.11H1.99l4.22-6.73c-.13-.23-.21-.48-.21-.76C6 9.67 6.67 9 7.5 9S9 9.67 9 10.5c0 .13-.02.25-.05.37l1.44.63c.27-.3.67-.5 1.11-.5.18 0 .35.04.51.09l3.58-6.41c-.36-.27-.59-.7-.59-1.18 0-.83.67-1.5 1.5-1.5.19 0 .36.04.53.1l.05-.09v.11c.54.22.92.76.92 1.38zm-1.92 13.49V5.85l-3.29 5.89c.13.23.21.48.21.76 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5l.01-.07-1.63-.72c-.25.18-.55.29-.88.29-.18 0-.35-.04-.51-.1l-3.2 5.09h12.29z"
}));
/* harmony default export */ var chart_line = (chartLine);
=======


function DownloadableBlockAuthorInfo(_ref) {
  var author = _ref.author,
      authorBlockCount = _ref.authorBlockCount,
      authorBlockRating = _ref.authorBlockRating;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content-author"
  }, Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Authored by %s'), author)), Object(external_this_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content"
  }, Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('This author has %d block, with an average rating of %d.', 'This author has %d blocks, with an average rating of %d.', authorBlockCount), authorBlockCount, authorBlockRating)));
}

/* harmony default export */ var downloadable_block_author_info = (DownloadableBlockAuthorInfo);

// EXTERNAL MODULE: external {"this":["wp","primitives"]}
var external_this_wp_primitives_ = __webpack_require__(9);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/update.js


/**
 * WordPress dependencies
 */

var update = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"
}));
/* harmony default export */ var library_update = (update);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-info/index.js


/**
 * WordPress dependencies
 */




<<<<<<< HEAD
=======

>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
function DownloadableBlockInfo(_ref) {
  var description = _ref.description,
      activeInstalls = _ref.activeInstalls,
      humanizedUpdated = _ref.humanizedUpdated;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("p", {
    className: "block-directory-downloadable-block-info__content"
  }, description), Object(external_this_wp_element_["createElement"])("div", {
<<<<<<< HEAD
    className: "block-directory-downloadable-block-info__meta"
  }, Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    className: "block-directory-downloadable-block-info__icon",
    icon: chart_line
  }), Object(external_this_wp_i18n_["sprintf"])(
  /* translators: %s: number of active installations. */
  Object(external_this_wp_i18n_["_n"])('%d active installation', '%d active installations', activeInstalls), activeInstalls)), Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-info__meta"
  }, Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    className: "block-directory-downloadable-block-info__icon",
    icon: library_update
  }), // translators: %s: Humanized date of last update e.g: "2 months ago".
  Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Updated %s'), humanizedUpdated)));
=======
    className: "block-directory-downloadable-block-info__row"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-info__column"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
    icon: "chart-line"
  }), Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%d active installation', '%d active installations', activeInstalls), activeInstalls)), Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-info__column"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
    icon: library_update
  }), // translators: %s: Humanized date of last update e.g: "2 months ago".
  Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Updated %s'), humanizedUpdated))));
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
}

/* harmony default export */ var downloadable_block_info = (DownloadableBlockInfo);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-notice/index.js


/**
 * WordPress dependencies
 */



var downloadable_block_notice_DownloadableBlockNotice = function DownloadableBlockNotice(_ref) {
  var block = _ref.block,
      _onClick = _ref.onClick;
  var errorNotice = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-directory').getErrorNoticeForBlock(block.id);
  }, [block]);

  if (!errorNotice) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Notice"], {
    status: "error",
    isDismissible: false,
    className: "block-directory-downloadable-block-notice"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-notice__content"
  }, errorNotice.message), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isSmall: true,
    isPrimary: true,
    onClick: function onClick() {
      if (errorNotice.isFatal) {
        window.location.reload();
        return false;
      }

      _onClick(block);
    }
  }, errorNotice.isFatal ? Object(external_this_wp_i18n_["__"])('Reload') : Object(external_this_wp_i18n_["__"])('Retry')));
};
/* harmony default export */ var downloadable_block_notice = (downloadable_block_notice_DownloadableBlockNotice);

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-list-item/index.js


/**
<<<<<<< HEAD
 * WordPress dependencies
 */

/**
=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 * Internal dependencies
 */




<<<<<<< HEAD

function DownloadableBlockListItem(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-directory'),
        isInstalling = _select.isInstalling,
        getErrorNoticeForBlock = _select.getErrorNoticeForBlock;

    var notice = getErrorNoticeForBlock(item.id);
    var hasFatal = notice && notice.isFatal;
    return {
      isLoading: isInstalling(item.id),
      isInstallable: !hasFatal
    };
  }, [item]),
      isLoading = _useSelect.isLoading,
      isInstallable = _useSelect.isInstallable;

=======
function DownloadableBlockListItem(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  var icon = item.icon,
      title = item.title,
      description = item.description,
      rating = item.rating,
      activeInstalls = item.activeInstalls,
      ratingCount = item.ratingCount,
      author = item.author,
      humanizedUpdated = item.humanizedUpdated,
      authorBlockCount = item.authorBlockCount,
      authorBlockRating = item.authorBlockRating;
  return Object(external_this_wp_element_["createElement"])("li", {
    className: "block-directory-downloadable-block-list-item"
  }, Object(external_this_wp_element_["createElement"])("article", {
    className: "block-directory-downloadable-block-list-item__panel"
  }, Object(external_this_wp_element_["createElement"])("header", {
    className: "block-directory-downloadable-block-list-item__header"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_header, {
    icon: icon,
    onClick: onClick,
    title: title,
    rating: rating,
<<<<<<< HEAD
    ratingCount: ratingCount,
    isLoading: isLoading,
    isInstallable: isInstallable
  })), Object(external_this_wp_element_["createElement"])("section", {
    className: "block-directory-downloadable-block-list-item__body"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_notice, {
    onClick: onClick,
    block: item
  }), Object(external_this_wp_element_["createElement"])(downloadable_block_info, {
=======
    ratingCount: ratingCount
  })), Object(external_this_wp_element_["createElement"])("section", {
    className: "block-directory-downloadable-block-list-item__body"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_info, {
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
    activeInstalls: activeInstalls,
    description: description,
    humanizedUpdated: humanizedUpdated
  })), Object(external_this_wp_element_["createElement"])("footer", {
    className: "block-directory-downloadable-block-list-item__footer"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_author_info, {
    author: author,
    authorBlockCount: authorBlockCount,
    authorBlockRating: authorBlockRating
  }))));
}

<<<<<<< HEAD
=======
/* harmony default export */ var downloadable_block_list_item = (DownloadableBlockListItem);

>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-list/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


<<<<<<< HEAD
=======



>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/**
 * Internal dependencies
 */


<<<<<<< HEAD
=======
var DOWNLOAD_ERROR_NOTICE_ID = 'block-download-error';
var INSTALL_ERROR_NOTICE_ID = 'block-install-error';
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

function DownloadableBlocksList(_ref) {
  var items = _ref.items,
      _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? external_this_lodash_["noop"] : _ref$onHover,
<<<<<<< HEAD
      onSelect = _ref.onSelect;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-directory'),
      installBlockType = _useDispatch.installBlockType;

  if (!items.length) {
    return null;
  }

=======
      children = _ref.children,
      downloadAndInstallBlock = _ref.downloadAndInstallBlock;
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(external_this_wp_element_["createElement"])("ul", {
      role: "list",
      className: "block-directory-downloadable-blocks-list"
<<<<<<< HEAD
    }, items.map(function (item) {
      return Object(external_this_wp_element_["createElement"])(DownloadableBlockListItem, {
        key: item.id,
        onClick: function onClick() {
          installBlockType(item).then(function (success) {
            if (success) {
              onSelect(item);
            }
          });
          onHover(null);
        },
        item: item
      });
    }))
=======
    }, items && items.map(function (item) {
      return Object(external_this_wp_element_["createElement"])(downloadable_block_list_item, {
        key: item.id,
        className: Object(external_this_wp_blocks_["getBlockMenuDefaultClassName"])(item.id),
        icons: item.icons,
        onClick: function onClick() {
          downloadAndInstallBlock(item);
          onHover(null);
        },
        onFocus: function onFocus() {
          return onHover(item);
        },
        onMouseEnter: function onMouseEnter() {
          return onHover(item);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(null);
        },
        onBlur: function onBlur() {
          return onHover(null);
        },
        item: item
      });
    }), children)
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

<<<<<<< HEAD
/* harmony default export */ var downloadable_blocks_list = (DownloadableBlocksList);
=======
/* harmony default export */ var downloadable_blocks_list = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withDispatch"])(function (dispatch, props) {
  var _dispatch = dispatch('core/block-directory'),
      installBlock = _dispatch.installBlock,
      downloadBlock = _dispatch.downloadBlock;

  var _dispatch2 = dispatch('core/notices'),
      createErrorNotice = _dispatch2.createErrorNotice,
      removeNotice = _dispatch2.removeNotice;

  var _dispatch3 = dispatch('core/block-editor'),
      removeBlocks = _dispatch3.removeBlocks;

  var onSelect = props.onSelect;
  return {
    downloadAndInstallBlock: function downloadAndInstallBlock(item) {
      var onDownloadError = function onDownloadError() {
        createErrorNotice(Object(external_this_wp_i18n_["__"])('Block previews can’t load.'), {
          id: DOWNLOAD_ERROR_NOTICE_ID,
          actions: [{
            label: Object(external_this_wp_i18n_["__"])('Retry'),
            onClick: function onClick() {
              removeNotice(DOWNLOAD_ERROR_NOTICE_ID);
              downloadBlock(item, onSuccess, onDownloadError);
            }
          }]
        });
      };

      var onSuccess = function onSuccess() {
        var createdBlock = onSelect(item);

        var onInstallBlockError = function onInstallBlockError() {
          createErrorNotice(Object(external_this_wp_i18n_["__"])("Block previews can't install."), {
            id: INSTALL_ERROR_NOTICE_ID,
            actions: [{
              label: Object(external_this_wp_i18n_["__"])('Retry'),
              onClick: function onClick() {
                removeNotice(INSTALL_ERROR_NOTICE_ID);
                installBlock(item, external_this_lodash_["noop"], onInstallBlockError);
              }
            }, {
              label: Object(external_this_wp_i18n_["__"])('Remove'),
              onClick: function onClick() {
                removeNotice(INSTALL_ERROR_NOTICE_ID);
                removeBlocks(createdBlock.clientId);
                Object(external_this_wp_blocks_["unregisterBlockType"])(item.name);
              }
            }]
          });
        };

        installBlock(item, external_this_lodash_["noop"], onInstallBlockError);
      };

      downloadBlock(item, onSuccess, onDownloadError);
    }
  };
}))(DownloadableBlocksList));
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function DownloadableBlocksPanel(_ref) {
  var downloadableItems = _ref.downloadableItems,
      onSelect = _ref.onSelect,
      onHover = _ref.onHover,
      hasPermission = _ref.hasPermission,
      isLoading = _ref.isLoading,
      isWaiting = _ref.isWaiting,
      debouncedSpeak = _ref.debouncedSpeak;

<<<<<<< HEAD
  if (false === hasPermission) {
    debouncedSpeak(Object(external_this_wp_i18n_["__"])('No blocks found in your library.'));
    return Object(external_this_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_this_wp_i18n_["__"])('No blocks found in your library.'));
  }

  if (typeof hasPermission === 'undefined' || isLoading || isWaiting) {
=======
  if (!hasPermission) {
    debouncedSpeak(Object(external_this_wp_i18n_["__"])('No blocks found in your library. Please contact your site administrator to install new blocks.'));
    return Object(external_this_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_this_wp_i18n_["__"])('No blocks found in your library.'), Object(external_this_wp_element_["createElement"])("br", null), Object(external_this_wp_i18n_["__"])('Please contact your site administrator to install new blocks.'));
  }

  if (isLoading || isWaiting) {
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
    return Object(external_this_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null));
  }

  if (!downloadableItems.length) {
    return Object(external_this_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_this_wp_i18n_["__"])('No blocks found in your library.'));
  }

<<<<<<< HEAD
  var resultsFoundMessage = Object(external_this_wp_i18n_["sprintf"])(
  /* translators: %s: number of available blocks. */
  Object(external_this_wp_i18n_["_n"])('No blocks found in your library. We did find %d block available for download.', 'No blocks found in your library. We did find %d blocks available for download.', downloadableItems.length), downloadableItems.length);
=======
  var resultsFoundMessage = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('No blocks found in your library. We did find %d block available for download.', 'No blocks found in your library. We did find %d blocks available for download.', downloadableItems.length), downloadableItems.length);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  debouncedSpeak(resultsFoundMessage);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("p", {
    className: "block-directory-downloadable-blocks-panel__description"
  }, Object(external_this_wp_i18n_["__"])('No blocks found in your library. These blocks can be downloaded and installed:')), Object(external_this_wp_element_["createElement"])(downloadable_blocks_list, {
    items: downloadableItems,
    onSelect: onSelect,
    onHover: onHover
  }));
}

/* harmony default export */ var downloadable_blocks_panel = (Object(external_this_wp_compose_["compose"])([external_this_wp_components_["withSpokenMessages"], Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var filterValue = _ref2.filterValue;

  var _select = select('core/block-directory'),
      getDownloadableBlocks = _select.getDownloadableBlocks,
<<<<<<< HEAD
      isRequestingDownloadableBlocks = _select.isRequestingDownloadableBlocks;

  var hasPermission = select('core').canUser('read', 'block-directory/search');
  var downloadableItems = hasPermission ? getDownloadableBlocks(filterValue) : [];
  var isLoading = isRequestingDownloadableBlocks(filterValue);
=======
      hasInstallBlocksPermission = _select.hasInstallBlocksPermission,
      isRequestingDownloadableBlocks = _select.isRequestingDownloadableBlocks;

  var hasPermission = hasInstallBlocksPermission();
  var downloadableItems = hasPermission ? getDownloadableBlocks(filterValue) : [];
  var isLoading = isRequestingDownloadableBlocks();
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  return {
    downloadableItems: downloadableItems,
    hasPermission: hasPermission,
    isLoading: isLoading
  };
})])(DownloadableBlocksPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/inserter-menu-downloadable-blocks-panel/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function InserterMenuDownloadableBlocksPanel() {
  var _useState = Object(external_this_wp_element_["useState"])(''),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      debouncedFilterValue = _useState2[0],
      setFilterValue = _useState2[1];

  var debouncedSetFilterValue = Object(external_this_lodash_["debounce"])(setFilterValue, 400);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalInserterMenuExtension"], null, function (_ref) {
    var onSelect = _ref.onSelect,
        onHover = _ref.onHover,
        filterValue = _ref.filterValue,
        hasItems = _ref.hasItems;

    if (hasItems || !filterValue) {
      return null;
    }

    if (debouncedFilterValue !== filterValue) {
      debouncedSetFilterValue(filterValue);
    }

    return Object(external_this_wp_element_["createElement"])(downloadable_blocks_panel, {
      onSelect: onSelect,
      onHover: onHover,
      filterValue: debouncedFilterValue,
      isWaiting: filterValue !== debouncedFilterValue
    });
  });
}

/* harmony default export */ var inserter_menu_downloadable_blocks_panel = (InserterMenuDownloadableBlocksPanel);

<<<<<<< HEAD
// EXTERNAL MODULE: external {"this":["wp","editPost"]}
var external_this_wp_editPost_ = __webpack_require__(262);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/compact-list/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function CompactList(_ref) {
  var items = _ref.items;

  if (!items.length) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])("ul", {
    className: "block-directory-compact-list"
  }, items.map(function (_ref2) {
    var icon = _ref2.icon,
        id = _ref2.id,
        title = _ref2.title,
        author = _ref2.author;
    return Object(external_this_wp_element_["createElement"])("li", {
      key: id,
      className: "block-directory-compact-list__item"
    }, Object(external_this_wp_element_["createElement"])(downloadable_block_icon, {
      icon: icon,
      title: title
    }), Object(external_this_wp_element_["createElement"])("div", {
      className: "block-directory-compact-list__item-details"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "block-directory-compact-list__item-title"
    }, title), Object(external_this_wp_element_["createElement"])("div", {
      className: "block-directory-compact-list__item-author"
    }, Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: Name of the block author. */
    Object(external_this_wp_i18n_["__"])('By %s'), author))));
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/installed-blocks-pre-publish-panel/index.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function InstalledBlocksPrePublishPanel() {
  var newBlockTypes = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-directory').getNewBlockTypes();
  }, []);

  if (!newBlockTypes.length) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_editPost_["PluginPrePublishPanel"], {
    icon: "block-default",
    title: Object(external_this_wp_i18n_["sprintf"])( // translators: %d: number of blocks (number).
    Object(external_this_wp_i18n_["_n"])('Added: %d block', 'Added: %d blocks', newBlockTypes.length), newBlockTypes.length),
    initialOpen: true
  }, Object(external_this_wp_element_["createElement"])("p", {
    className: "installed-blocks-pre-publish-panel__copy"
  }, Object(external_this_wp_i18n_["_n"])('The following block has been added to your site.', 'The following blocks have been added to your site.', newBlockTypes.length)), Object(external_this_wp_element_["createElement"])(CompactList, {
    items: newBlockTypes
  }));
}

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


<<<<<<< HEAD


Object(external_this_wp_plugins_["registerPlugin"])('block-directory', {
  render: function render() {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(AutoBlockUninstaller, null), Object(external_this_wp_element_["createElement"])(inserter_menu_downloadable_blocks_panel, null), Object(external_this_wp_element_["createElement"])(InstalledBlocksPrePublishPanel, null));
=======
Object(external_this_wp_plugins_["registerPlugin"])('block-directory', {
  render: function render() {
    return Object(external_this_wp_element_["createElement"])(inserter_menu_downloadable_blocks_panel, null);
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
  }
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/index.js
/**
<<<<<<< HEAD
 * WordPress dependencies
 */

/**
=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 * Internal dependencies
 */




<<<<<<< HEAD

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

<<<<<<< HEAD
/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["primitives"]; }());

/***/ }),

/***/ 7:
=======
/***/ 55:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ }),

/***/ 6:
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

<<<<<<< HEAD
/***/ 76:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());
=======
/***/ 8:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

<<<<<<< HEAD
(function() { module.exports = this["wp"]["compose"]; }());
=======
(function() { module.exports = this["wp"]["primitives"]; }());
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

/***/ })

/******/ });