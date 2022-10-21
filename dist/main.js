/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Anton-Regular.ttf */ "./src/fonts/Anton-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Anton;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  --color-chessboard-black: black;\n  --color-chessboard-red: red;\n  --color-chessboard-white: white;\n}\n\nbody {\n  user-select: none;\n  font-family: Anton;\n\n  height: 100vh;\n\n  margin: 0;\n  padding: 0;\n\n  display: grid;\n  grid-template-rows: 4rem 5fr 1fr 8rem 2rem;\n  justify-content: center;\n  justify-items: center;\n}\n\n.header {\n  font-size: 2rem;\n\n  display: grid;\n  place-content: center;\n}\n\n.chessboard {\n  width: fit-content;\n  height: fit-content;\n\n  border-style: solid;\n  border-width: 0.25rem;\n\n  display: grid;\n  grid-template-rows: repeat(8, 1fr);\n}\n\n.chessboard .chessboard-row {\n  width: fit-content;\n  height: fit-content;\n\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.chessboard .square {\n  position: relative;\n\n  width: min(11vw, 6rem);\n  aspect-ratio: 1/1;\n\n  display: grid;\n  place-content: center;\n}\n\n.chessboard .square.black {\n  background-color: var(--color-chessboard-black);\n}\n\n.chessboard .square.white {\n  background-color: var(--color-chessboard-white);\n}\n\n.chessboard .square img{\n  width: min(7vw, 4rem);\n}\n\n.chessboard .square img.draggable.target {\n  padding: 0.25rem;\n  border-style: solid;\n  border-width: 0.25rem;\n  border-radius: 1rem;\n  border-color: var(--color-chessboard-red);\n}\n\n.instructions {\n  margin: 0 5vw;\n\n  font-size: 1.25rem;\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.legend {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n}\n\n.legend div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n\n}\n\n.legend img {\n  height: 4rem;\n}\n\n.legend p {\n  margin: 0;\n  padding: 0;\n}\n\n.footer {\n  font-size: 1.1rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.footer a {\n  display: grid;\n  place-content: center;\n}\n\n.footer img {\n  height: 1.25rem;\n\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,4CAAsC;AACxC;;AAEA;EACE,+BAA+B;EAC/B,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;;EAElB,aAAa;;EAEb,SAAS;EACT,UAAU;;EAEV,aAAa;EACb,0CAA0C;EAC1C,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,eAAe;;EAEf,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;;EAEnB,mBAAmB;EACnB,qBAAqB;;EAErB,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;;EAEnB,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,kBAAkB;;EAElB,sBAAsB;EACtB,iBAAiB;;EAEjB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;;EAEb,kBAAkB;EAClB,kBAAkB;;EAElB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;;AAEb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,eAAe;;AAEjB","sourcesContent":["@font-face {\n  font-family: Anton;\n  src: url(\"../fonts/Anton-Regular.ttf\");\n}\n\n:root {\n  --color-chessboard-black: black;\n  --color-chessboard-red: red;\n  --color-chessboard-white: white;\n}\n\nbody {\n  user-select: none;\n  font-family: Anton;\n\n  height: 100vh;\n\n  margin: 0;\n  padding: 0;\n\n  display: grid;\n  grid-template-rows: 4rem 5fr 1fr 8rem 2rem;\n  justify-content: center;\n  justify-items: center;\n}\n\n.header {\n  font-size: 2rem;\n\n  display: grid;\n  place-content: center;\n}\n\n.chessboard {\n  width: fit-content;\n  height: fit-content;\n\n  border-style: solid;\n  border-width: 0.25rem;\n\n  display: grid;\n  grid-template-rows: repeat(8, 1fr);\n}\n\n.chessboard .chessboard-row {\n  width: fit-content;\n  height: fit-content;\n\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.chessboard .square {\n  position: relative;\n\n  width: min(11vw, 6rem);\n  aspect-ratio: 1/1;\n\n  display: grid;\n  place-content: center;\n}\n\n.chessboard .square.black {\n  background-color: var(--color-chessboard-black);\n}\n\n.chessboard .square.white {\n  background-color: var(--color-chessboard-white);\n}\n\n.chessboard .square img{\n  width: min(7vw, 4rem);\n}\n\n.chessboard .square img.draggable.target {\n  padding: 0.25rem;\n  border-style: solid;\n  border-width: 0.25rem;\n  border-radius: 1rem;\n  border-color: var(--color-chessboard-red);\n}\n\n.instructions {\n  margin: 0 5vw;\n\n  font-size: 1.25rem;\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.legend {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n}\n\n.legend div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n\n}\n\n.legend img {\n  height: 4rem;\n}\n\n.legend p {\n  margin: 0;\n  padding: 0;\n}\n\n.footer {\n  font-size: 1.1rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.footer a {\n  display: grid;\n  place-content: center;\n}\n\n.footer img {\n  height: 1.25rem;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/graph_chessboard.js":
/*!*********************************!*\
  !*** ./src/graph_chessboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chessboard": () => (/* binding */ Chessboard)
/* harmony export */ });
/* harmony import */ var _graph_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph_node.js */ "./src/graph_node.js");


class Chessboard {
  constructor() {
    // Create a list with all possible knight movements
    // A movement is an array consisting of row and column translation
    this.knightMovementList = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    // Create a list of all chessboard nodes
    this.chessboardNodeList = [];
    for (let i = 1; i <= 8; i += 1) {
      for (let j = 1; j <= 8; j += 1) {
        const newNode = new _graph_node_js__WEBPACK_IMPORTED_MODULE_0__.Node(i, j);
        this.chessboardNodeList.push(newNode);
      }
    }

    // Assign knight movement neighbour for each chessboard node
    for (let chessboarNode of this.chessboardNodeList) {
      for (let knightMovement of this.knightMovementList) {
        const neighbourRow = chessboarNode.row + knightMovement[0];
        const neighbourColumn = chessboarNode.column + knightMovement[1];
        if (
          1 <= neighbourRow &&
          neighbourRow <= 8 &&
          1 <= neighbourColumn &&
          neighbourColumn <= 8
        ) {
          const neighbourNode = this.getChessboardNode(
            neighbourRow,
            neighbourColumn
          );
          if (chessboarNode.neighbours.includes(neighbourNode) === false) {
            chessboarNode.addNeighbour(neighbourNode);
          }
        }
      }
    }
  }

  // Method to get a target node given its row and column number
  getChessboardNode(row, column) {
    for (let chessboarNode of this.chessboardNodeList) {
      if (chessboarNode.row === row && chessboarNode.column === column) {
        return chessboarNode;
      }
    }
  }

  // Method to reset the previous attribute of all nodes
  resetNodesPrevious() {
    for (let chessboardNode of this.chessboardNodeList) {
      chessboardNode.previous = null;
    }
  }

  // Method to rest the visited attribute of all nodes
  resetNodesVisited() {
    for (let chessboardNode of this.chessboardNodeList) {
      chessboardNode.visited = false;
    }
  }
}




/***/ }),

/***/ "./src/graph_node.js":
/*!***************************!*\
  !*** ./src/graph_node.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.id = [row, column];
    this.previous = null;
    this.neighbours = [];
    this.visited = false;
  }

  addNeighbour(node) {
    this.neighbours.push(node);
  }
}




/***/ }),

/***/ "./src/knights_travails_algorithm.js":
/*!*******************************************!*\
  !*** ./src/knights_travails_algorithm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shortestPath": () => (/* binding */ shortestPath)
/* harmony export */ });
/* harmony import */ var _graph_chessboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph_chessboard.js */ "./src/graph_chessboard.js");


const chessboard = new _graph_chessboard_js__WEBPACK_IMPORTED_MODULE_0__.Chessboard();

function shortestPath([startRow, startColumn], [endRow, endColumn]) {
  const startNode = chessboard.getChessboardNode(startRow, startColumn);
  const endNode = chessboard.getChessboardNode(endRow, endColumn);

  // Reset chessboard node visited and previous attributes
  chessboard.resetNodesPrevious();
  chessboard.resetNodesVisited();

  // Create queue
  let queue = [];

  // Visit and add the start node to the queue
  startNode.visited = true;
  queue.push(startNode);

  // BFS until queue is empty
  whileLoop: while (queue.length > 0) {
    // Pop a node from queue for search operation
    let currentNode = queue.shift();

    // Loop through neighbors nodes to find the 'end' node
    for (let neighbourNode of currentNode.neighbours) {
      if (neighbourNode.visited === false) {
        // visit and add neighbors nodes to the queue
        neighbourNode.visited = true;
        queue.push(neighbourNode);
        // update its preceding node
        neighbourNode.previous = currentNode;
        // stop BFS if the visited node is the end node
        if (neighbourNode === endNode) {
          // queue = [];
          break whileLoop;
        }
      }
    }
  }

  // Function to trace the route using previous nodes
  let currentNode = endNode;
  const route = [];

  // start node has no preceding node
  // so loop until node->previous is null
  while (currentNode !== null) {
    route.push(currentNode.id);
    currentNode = currentNode.previous;
  }
  // reverse the route bring start to the front
  route.reverse();
  // output route

  return route;
}




/***/ }),

/***/ "./src/fonts/Anton-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Anton-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "170b842f9a8cd6150a0d.ttf";

/***/ }),

/***/ "./src/images/github_logo.png":
/*!************************************!*\
  !*** ./src/images/github_logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31ae5af2eb8f5a195706.png";

/***/ }),

/***/ "./src/images/knight-gold.png":
/*!************************************!*\
  !*** ./src/images/knight-gold.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c94771cc1219e6806178.png";

/***/ }),

/***/ "./src/images/knight-green.png":
/*!*************************************!*\
  !*** ./src/images/knight-green.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d719b487cb89f06a4f2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _images_github_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/github_logo.png */ "./src/images/github_logo.png");
/* harmony import */ var _images_knight_gold_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/knight-gold.png */ "./src/images/knight-gold.png");
/* harmony import */ var _images_knight_green_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/knight-green.png */ "./src/images/knight-green.png");
/* harmony import */ var _knights_travails_algorithm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./knights_travails_algorithm.js */ "./src/knights_travails_algorithm.js");






let dragged;

// Create header element
const header = document.createElement("header");
header.classList.add("header");
header.textContent = "Knights Travails";
document.body.appendChild(header);

// Create chessboard div element
const chessboardDiv = document.createElement("div");
chessboardDiv.classList.add("chessboard");
document.body.appendChild(chessboardDiv);

// Create chessboard squares
createChessboard();

// Create interactive knight pieces
const movableStartingKnightImg = document.createElement("img");
movableStartingKnightImg.classList.add("draggable");
movableStartingKnightImg.draggable = true;
movableStartingKnightImg.src = _images_knight_gold_png__WEBPACK_IMPORTED_MODULE_2__;
movableStartingKnightImg.addEventListener("dragstart", knightDragStart);
const movableTargetKnightImg = document.createElement("img");
movableTargetKnightImg.classList.add("draggable");
movableTargetKnightImg.classList.add("target");
movableTargetKnightImg.draggable = true;
movableTargetKnightImg.src = _images_knight_green_png__WEBPACK_IMPORTED_MODULE_3__;
movableTargetKnightImg.addEventListener("dragstart", knightDragStart);

// Place initial knight pieces
placeKnight(movableStartingKnightImg, 4, 4);
placeKnight(movableTargetKnightImg, 6, 5);

// Create instructions div element
const instructionsDiv = document.createElement("div");
instructionsDiv.classList.add("instructions");
instructionsDiv.textContent =
  "Use the mouse to drag the knights to their starting and target positions";
document.body.appendChild(instructionsDiv);

// Create legend div element
const legendDiv = document.createElement("div");
legendDiv.classList.add("legend");
document.body.appendChild(legendDiv);

// Create legend content
const startingDiv = document.createElement("div");
legendDiv.appendChild(startingDiv);
const startingImg = document.createElement("img");
startingImg.src = _images_knight_gold_png__WEBPACK_IMPORTED_MODULE_2__;
startingDiv.appendChild(startingImg);
const startingP = document.createElement("p");
startingP.textContent = "Starting Knight";
startingDiv.appendChild(startingP);
const targetDiv = document.createElement("div");
legendDiv.appendChild(targetDiv);
const targetImg = document.createElement("img");
targetImg.src = _images_knight_green_png__WEBPACK_IMPORTED_MODULE_3__;
targetDiv.appendChild(targetImg);
const targetP = document.createElement("p");
targetP.textContent = "Target Knight";
targetDiv.appendChild(targetP);

// Create footer element
const footer = document.createElement("footer");
footer.classList.add("footer");
document.body.appendChild(footer);

// Footer text element
const footerTextDiv = document.createElement("div");
footerTextDiv.textContent = "The Odin Project - joemattar";
footer.appendChild(footerTextDiv);

// Footer a element
const footerA = document.createElement("a");
footerA.href = "https://github.com/joemattar";
footerA.target = "_blank";
footer.appendChild(footerA);

// Footer img element
const footerImg = document.createElement("img");
footerImg.src = _images_github_logo_png__WEBPACK_IMPORTED_MODULE_1__;
footerA.appendChild(footerImg);

// Function to create/clear chessboard
function createChessboard() {
  chessboardDiv.textContent = "";
  let k = 0;
  for (let i = 8; i >= 1; i -= 1) {
    // Create row div
    const newChessboardRowDiv = document.createElement("div");
    newChessboardRowDiv.classList.add("chessboard-row");
    chessboardDiv.appendChild(newChessboardRowDiv);
    for (let j = 1; j <= 8; j += 1) {
      // Create square div
      const newChessboardSquareDiv = document.createElement("div");
      newChessboardSquareDiv.classList.add("square");
      newChessboardSquareDiv.dataset.row = i;
      newChessboardSquareDiv.dataset.column = j;
      // Add event listener for DRAGOVER event
      newChessboardSquareDiv.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
      });
      newChessboardSquareDiv.addEventListener("drop", knightDrop);
      if (k % 2 === 0) {
        newChessboardSquareDiv.classList.add("white");
      } else {
        newChessboardSquareDiv.classList.add("black");
      }
      k += 1;
      newChessboardRowDiv.appendChild(newChessboardSquareDiv);
    }
    k += 1;
  }
}

// Function to place knightpiece
function placeKnight(knight, row, column) {
  const selectedSquareDiv = document.querySelector(
    `[data-row="${row}"][data-column="${column}"]`
  );
  selectedSquareDiv.appendChild(knight);
}

// Function to clear chessboard from everything except knights
function clearChessboard() {
  const squares = document.querySelectorAll(".square");
  for (let square of squares) {
    if (
      square.hasChildNodes() &&
      !square.firstChild.classList.contains("draggable")
    ) {
      square.textContent = "";
    }
  }
}

// Function for knight element drag start event
function knightDragStart(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  clearChessboard();
}

// Function for knight element drop event
function knightDrop(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (
    !event.target.hasChildNodes() &&
    !event.target.classList.contains("draggable")
  ) {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
}

// <a href="https://www.flaticon.com/free-icons/knight" title="knight icons">Knight icons created by BZZRINCANTATION - Flaticon</a>

console.log((0,_knights_travails_algorithm_js__WEBPACK_IMPORTED_MODULE_4__.shortestPath)([4, 2], [6, 6]));

console.log((0,_knights_travails_algorithm_js__WEBPACK_IMPORTED_MODULE_4__.shortestPath)([2, 1], [6, 6]));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFXO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksa0JBQWtCLE9BQU87QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsWUFBWSw0RUFBWTs7QUFFeEIsWUFBWSw0RUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvY3NzL3N0eWxlcy5jc3M/OTlhMyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvZ3JhcGhfY2hlc3Nib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vc3JjL2dyYXBoX25vZGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL3NyYy9rbmlnaHRzX3RyYXZhaWxzX2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0FudG9uLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogQW50b247XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItY2hlc3Nib2FyZC1ibGFjazogYmxhY2s7XFxuICAtLWNvbG9yLWNoZXNzYm9hcmQtcmVkOiByZWQ7XFxuICAtLWNvbG9yLWNoZXNzYm9hcmQtd2hpdGU6IHdoaXRlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC1mYW1pbHk6IEFudG9uO1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDVmciAxZnIgOHJlbSAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZXNzYm9hcmQge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDAuMjVyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLmNoZXNzYm9hcmQtcm93IHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICB3aWR0aDogbWluKDExdncsIDZyZW0pO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2hlc3Nib2FyZCAuc3F1YXJlLmJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNoZXNzYm9hcmQtYmxhY2spO1xcbn1cXG5cXG4uY2hlc3Nib2FyZCAuc3F1YXJlLndoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNoZXNzYm9hcmQtd2hpdGUpO1xcbn1cXG5cXG4uY2hlc3Nib2FyZCAuc3F1YXJlIGltZ3tcXG4gIHdpZHRoOiBtaW4oN3Z3LCA0cmVtKTtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZSBpbWcuZHJhZ2dhYmxlLnRhcmdldCB7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMC4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZXNzYm9hcmQtcmVkKTtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICBtYXJnaW46IDAgNXZ3O1xcblxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxlZ2VuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4ubGVnZW5kIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcblxcbn1cXG5cXG4ubGVnZW5kIGltZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5sZWdlbmQgcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsNENBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQixhQUFhOztFQUViLFNBQVM7RUFDVCxVQUFVOztFQUVWLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7O0VBRWYsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLG1CQUFtQjtFQUNuQixxQkFBcUI7O0VBRXJCLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixzQkFBc0I7RUFDdEIsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7O0VBRWIsa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlOztBQUVqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBBbnRvbjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9BbnRvbi1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLWNoZXNzYm9hcmQtYmxhY2s6IGJsYWNrO1xcbiAgLS1jb2xvci1jaGVzc2JvYXJkLXJlZDogcmVkO1xcbiAgLS1jb2xvci1jaGVzc2JvYXJkLXdoaXRlOiB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBBbnRvbjtcXG5cXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSA1ZnIgMWZyIDhyZW0gMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVzc2JvYXJkIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjI1cmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5jaGVzc2JvYXJkLXJvdyB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgd2lkdGg6IG1pbigxMXZ3LCA2cmVtKTtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZS5ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLWJsYWNrKTtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZS53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXdoaXRlKTtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZSBpbWd7XFxuICB3aWR0aDogbWluKDd2dywgNHJlbSk7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUgaW1nLmRyYWdnYWJsZS50YXJnZXQge1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDAuMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXJlZCk7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgbWFyZ2luOiAwIDV2dztcXG5cXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5sZWdlbmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuLmxlZ2VuZCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG5cXG59XFxuXFxuLmxlZ2VuZCBpbWcge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4ubGVnZW5kIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL2dyYXBoX25vZGUuanNcIjtcblxuY2xhc3MgQ2hlc3Nib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIENyZWF0ZSBhIGxpc3Qgd2l0aCBhbGwgcG9zc2libGUga25pZ2h0IG1vdmVtZW50c1xuICAgIC8vIEEgbW92ZW1lbnQgaXMgYW4gYXJyYXkgY29uc2lzdGluZyBvZiByb3cgYW5kIGNvbHVtbiB0cmFuc2xhdGlvblxuICAgIHRoaXMua25pZ2h0TW92ZW1lbnRMaXN0ID0gW1xuICAgICAgWy0yLCAtMV0sXG4gICAgICBbLTIsIDFdLFxuICAgICAgWy0xLCAtMl0sXG4gICAgICBbLTEsIDJdLFxuICAgICAgWzEsIC0yXSxcbiAgICAgIFsxLCAyXSxcbiAgICAgIFsyLCAtMV0sXG4gICAgICBbMiwgMV0sXG4gICAgXTtcblxuICAgIC8vIENyZWF0ZSBhIGxpc3Qgb2YgYWxsIGNoZXNzYm9hcmQgbm9kZXNcbiAgICB0aGlzLmNoZXNzYm9hcmROb2RlTGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gODsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShpLCBqKTtcbiAgICAgICAgdGhpcy5jaGVzc2JvYXJkTm9kZUxpc3QucHVzaChuZXdOb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBc3NpZ24ga25pZ2h0IG1vdmVtZW50IG5laWdoYm91ciBmb3IgZWFjaCBjaGVzc2JvYXJkIG5vZGVcbiAgICBmb3IgKGxldCBjaGVzc2JvYXJOb2RlIG9mIHRoaXMuY2hlc3Nib2FyZE5vZGVMaXN0KSB7XG4gICAgICBmb3IgKGxldCBrbmlnaHRNb3ZlbWVudCBvZiB0aGlzLmtuaWdodE1vdmVtZW50TGlzdCkge1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJSb3cgPSBjaGVzc2JvYXJOb2RlLnJvdyArIGtuaWdodE1vdmVtZW50WzBdO1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJDb2x1bW4gPSBjaGVzc2JvYXJOb2RlLmNvbHVtbiArIGtuaWdodE1vdmVtZW50WzFdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgMSA8PSBuZWlnaGJvdXJSb3cgJiZcbiAgICAgICAgICBuZWlnaGJvdXJSb3cgPD0gOCAmJlxuICAgICAgICAgIDEgPD0gbmVpZ2hib3VyQ29sdW1uICYmXG4gICAgICAgICAgbmVpZ2hib3VyQ29sdW1uIDw9IDhcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmVpZ2hib3VyTm9kZSA9IHRoaXMuZ2V0Q2hlc3Nib2FyZE5vZGUoXG4gICAgICAgICAgICBuZWlnaGJvdXJSb3csXG4gICAgICAgICAgICBuZWlnaGJvdXJDb2x1bW5cbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChjaGVzc2JvYXJOb2RlLm5laWdoYm91cnMuaW5jbHVkZXMobmVpZ2hib3VyTm9kZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjaGVzc2JvYXJOb2RlLmFkZE5laWdoYm91cihuZWlnaGJvdXJOb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBNZXRob2QgdG8gZ2V0IGEgdGFyZ2V0IG5vZGUgZ2l2ZW4gaXRzIHJvdyBhbmQgY29sdW1uIG51bWJlclxuICBnZXRDaGVzc2JvYXJkTm9kZShyb3csIGNvbHVtbikge1xuICAgIGZvciAobGV0IGNoZXNzYm9hck5vZGUgb2YgdGhpcy5jaGVzc2JvYXJkTm9kZUxpc3QpIHtcbiAgICAgIGlmIChjaGVzc2JvYXJOb2RlLnJvdyA9PT0gcm93ICYmIGNoZXNzYm9hck5vZGUuY29sdW1uID09PSBjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIGNoZXNzYm9hck5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTWV0aG9kIHRvIHJlc2V0IHRoZSBwcmV2aW91cyBhdHRyaWJ1dGUgb2YgYWxsIG5vZGVzXG4gIHJlc2V0Tm9kZXNQcmV2aW91cygpIHtcbiAgICBmb3IgKGxldCBjaGVzc2JvYXJkTm9kZSBvZiB0aGlzLmNoZXNzYm9hcmROb2RlTGlzdCkge1xuICAgICAgY2hlc3Nib2FyZE5vZGUucHJldmlvdXMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1ldGhvZCB0byByZXN0IHRoZSB2aXNpdGVkIGF0dHJpYnV0ZSBvZiBhbGwgbm9kZXNcbiAgcmVzZXROb2Rlc1Zpc2l0ZWQoKSB7XG4gICAgZm9yIChsZXQgY2hlc3Nib2FyZE5vZGUgb2YgdGhpcy5jaGVzc2JvYXJkTm9kZUxpc3QpIHtcbiAgICAgIGNoZXNzYm9hcmROb2RlLnZpc2l0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgQ2hlc3Nib2FyZCB9O1xuIiwiY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJvdywgY29sdW1uKSB7XG4gICAgdGhpcy5yb3cgPSByb3c7XG4gICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy5pZCA9IFtyb3csIGNvbHVtbl07XG4gICAgdGhpcy5wcmV2aW91cyA9IG51bGw7XG4gICAgdGhpcy5uZWlnaGJvdXJzID0gW107XG4gICAgdGhpcy52aXNpdGVkID0gZmFsc2U7XG4gIH1cblxuICBhZGROZWlnaGJvdXIobm9kZSkge1xuICAgIHRoaXMubmVpZ2hib3Vycy5wdXNoKG5vZGUpO1xuICB9XG59XG5cbmV4cG9ydCB7IE5vZGUgfTtcbiIsImltcG9ydCB7IENoZXNzYm9hcmQgfSBmcm9tIFwiLi9ncmFwaF9jaGVzc2JvYXJkLmpzXCI7XG5cbmNvbnN0IGNoZXNzYm9hcmQgPSBuZXcgQ2hlc3Nib2FyZCgpO1xuXG5mdW5jdGlvbiBzaG9ydGVzdFBhdGgoW3N0YXJ0Um93LCBzdGFydENvbHVtbl0sIFtlbmRSb3csIGVuZENvbHVtbl0pIHtcbiAgY29uc3Qgc3RhcnROb2RlID0gY2hlc3Nib2FyZC5nZXRDaGVzc2JvYXJkTm9kZShzdGFydFJvdywgc3RhcnRDb2x1bW4pO1xuICBjb25zdCBlbmROb2RlID0gY2hlc3Nib2FyZC5nZXRDaGVzc2JvYXJkTm9kZShlbmRSb3csIGVuZENvbHVtbik7XG5cbiAgLy8gUmVzZXQgY2hlc3Nib2FyZCBub2RlIHZpc2l0ZWQgYW5kIHByZXZpb3VzIGF0dHJpYnV0ZXNcbiAgY2hlc3Nib2FyZC5yZXNldE5vZGVzUHJldmlvdXMoKTtcbiAgY2hlc3Nib2FyZC5yZXNldE5vZGVzVmlzaXRlZCgpO1xuXG4gIC8vIENyZWF0ZSBxdWV1ZVxuICBsZXQgcXVldWUgPSBbXTtcblxuICAvLyBWaXNpdCBhbmQgYWRkIHRoZSBzdGFydCBub2RlIHRvIHRoZSBxdWV1ZVxuICBzdGFydE5vZGUudmlzaXRlZCA9IHRydWU7XG4gIHF1ZXVlLnB1c2goc3RhcnROb2RlKTtcblxuICAvLyBCRlMgdW50aWwgcXVldWUgaXMgZW1wdHlcbiAgd2hpbGVMb29wOiB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgIC8vIFBvcCBhIG5vZGUgZnJvbSBxdWV1ZSBmb3Igc2VhcmNoIG9wZXJhdGlvblxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XG5cbiAgICAvLyBMb29wIHRocm91Z2ggbmVpZ2hib3JzIG5vZGVzIHRvIGZpbmQgdGhlICdlbmQnIG5vZGVcbiAgICBmb3IgKGxldCBuZWlnaGJvdXJOb2RlIG9mIGN1cnJlbnROb2RlLm5laWdoYm91cnMpIHtcbiAgICAgIGlmIChuZWlnaGJvdXJOb2RlLnZpc2l0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHZpc2l0IGFuZCBhZGQgbmVpZ2hib3JzIG5vZGVzIHRvIHRoZSBxdWV1ZVxuICAgICAgICBuZWlnaGJvdXJOb2RlLnZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICBxdWV1ZS5wdXNoKG5laWdoYm91ck5vZGUpO1xuICAgICAgICAvLyB1cGRhdGUgaXRzIHByZWNlZGluZyBub2RlXG4gICAgICAgIG5laWdoYm91ck5vZGUucHJldmlvdXMgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgLy8gc3RvcCBCRlMgaWYgdGhlIHZpc2l0ZWQgbm9kZSBpcyB0aGUgZW5kIG5vZGVcbiAgICAgICAgaWYgKG5laWdoYm91ck5vZGUgPT09IGVuZE5vZGUpIHtcbiAgICAgICAgICAvLyBxdWV1ZSA9IFtdO1xuICAgICAgICAgIGJyZWFrIHdoaWxlTG9vcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIHRyYWNlIHRoZSByb3V0ZSB1c2luZyBwcmV2aW91cyBub2Rlc1xuICBsZXQgY3VycmVudE5vZGUgPSBlbmROb2RlO1xuICBjb25zdCByb3V0ZSA9IFtdO1xuXG4gIC8vIHN0YXJ0IG5vZGUgaGFzIG5vIHByZWNlZGluZyBub2RlXG4gIC8vIHNvIGxvb3AgdW50aWwgbm9kZS0+cHJldmlvdXMgaXMgbnVsbFxuICB3aGlsZSAoY3VycmVudE5vZGUgIT09IG51bGwpIHtcbiAgICByb3V0ZS5wdXNoKGN1cnJlbnROb2RlLmlkKTtcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnByZXZpb3VzO1xuICB9XG4gIC8vIHJldmVyc2UgdGhlIHJvdXRlIGJyaW5nIHN0YXJ0IHRvIHRoZSBmcm9udFxuICByb3V0ZS5yZXZlcnNlKCk7XG4gIC8vIG91dHB1dCByb3V0ZVxuXG4gIHJldHVybiByb3V0ZTtcbn1cblxuZXhwb3J0IHsgc2hvcnRlc3RQYXRoIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9jc3Mvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGdpdGh1YkltYWdlIGZyb20gXCIuL2ltYWdlcy9naXRodWJfbG9nby5wbmdcIjtcbmltcG9ydCBzdGFydGluZ0tuaWdodEltYWdlIGZyb20gXCIuL2ltYWdlcy9rbmlnaHQtZ29sZC5wbmdcIjtcbmltcG9ydCB0YXJnZXRLbmlnaHRJbWFnZSBmcm9tIFwiLi9pbWFnZXMva25pZ2h0LWdyZWVuLnBuZ1wiO1xuaW1wb3J0IHsgc2hvcnRlc3RQYXRoIH0gZnJvbSBcIi4va25pZ2h0c190cmF2YWlsc19hbGdvcml0aG0uanNcIjtcblxubGV0IGRyYWdnZWQ7XG5cbi8vIENyZWF0ZSBoZWFkZXIgZWxlbWVudFxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuaGVhZGVyLnRleHRDb250ZW50ID0gXCJLbmlnaHRzIFRyYXZhaWxzXCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbi8vIENyZWF0ZSBjaGVzc2JvYXJkIGRpdiBlbGVtZW50XG5jb25zdCBjaGVzc2JvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNoZXNzYm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImNoZXNzYm9hcmRcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNoZXNzYm9hcmREaXYpO1xuXG4vLyBDcmVhdGUgY2hlc3Nib2FyZCBzcXVhcmVzXG5jcmVhdGVDaGVzc2JvYXJkKCk7XG5cbi8vIENyZWF0ZSBpbnRlcmFjdGl2ZSBrbmlnaHQgcGllY2VzXG5jb25zdCBtb3ZhYmxlU3RhcnRpbmdLbmlnaHRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xubW92YWJsZVN0YXJ0aW5nS25pZ2h0SW1nLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2FibGVcIik7XG5tb3ZhYmxlU3RhcnRpbmdLbmlnaHRJbWcuZHJhZ2dhYmxlID0gdHJ1ZTtcbm1vdmFibGVTdGFydGluZ0tuaWdodEltZy5zcmMgPSBzdGFydGluZ0tuaWdodEltYWdlO1xubW92YWJsZVN0YXJ0aW5nS25pZ2h0SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwga25pZ2h0RHJhZ1N0YXJ0KTtcbmNvbnN0IG1vdmFibGVUYXJnZXRLbmlnaHRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xubW92YWJsZVRhcmdldEtuaWdodEltZy5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dhYmxlXCIpO1xubW92YWJsZVRhcmdldEtuaWdodEltZy5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0XCIpO1xubW92YWJsZVRhcmdldEtuaWdodEltZy5kcmFnZ2FibGUgPSB0cnVlO1xubW92YWJsZVRhcmdldEtuaWdodEltZy5zcmMgPSB0YXJnZXRLbmlnaHRJbWFnZTtcbm1vdmFibGVUYXJnZXRLbmlnaHRJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBrbmlnaHREcmFnU3RhcnQpO1xuXG4vLyBQbGFjZSBpbml0aWFsIGtuaWdodCBwaWVjZXNcbnBsYWNlS25pZ2h0KG1vdmFibGVTdGFydGluZ0tuaWdodEltZywgNCwgNCk7XG5wbGFjZUtuaWdodChtb3ZhYmxlVGFyZ2V0S25pZ2h0SW1nLCA2LCA1KTtcblxuLy8gQ3JlYXRlIGluc3RydWN0aW9ucyBkaXYgZWxlbWVudFxuY29uc3QgaW5zdHJ1Y3Rpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmluc3RydWN0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW5zdHJ1Y3Rpb25zXCIpO1xuaW5zdHJ1Y3Rpb25zRGl2LnRleHRDb250ZW50ID1cbiAgXCJVc2UgdGhlIG1vdXNlIHRvIGRyYWcgdGhlIGtuaWdodHMgdG8gdGhlaXIgc3RhcnRpbmcgYW5kIHRhcmdldCBwb3NpdGlvbnNcIjtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zRGl2KTtcblxuLy8gQ3JlYXRlIGxlZ2VuZCBkaXYgZWxlbWVudFxuY29uc3QgbGVnZW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxlZ2VuZERpdi5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsZWdlbmREaXYpO1xuXG4vLyBDcmVhdGUgbGVnZW5kIGNvbnRlbnRcbmNvbnN0IHN0YXJ0aW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxlZ2VuZERpdi5hcHBlbmRDaGlsZChzdGFydGluZ0Rpdik7XG5jb25zdCBzdGFydGluZ0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5zdGFydGluZ0ltZy5zcmMgPSBzdGFydGluZ0tuaWdodEltYWdlO1xuc3RhcnRpbmdEaXYuYXBwZW5kQ2hpbGQoc3RhcnRpbmdJbWcpO1xuY29uc3Qgc3RhcnRpbmdQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5zdGFydGluZ1AudGV4dENvbnRlbnQgPSBcIlN0YXJ0aW5nIEtuaWdodFwiO1xuc3RhcnRpbmdEaXYuYXBwZW5kQ2hpbGQoc3RhcnRpbmdQKTtcbmNvbnN0IHRhcmdldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZWdlbmREaXYuYXBwZW5kQ2hpbGQodGFyZ2V0RGl2KTtcbmNvbnN0IHRhcmdldEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG50YXJnZXRJbWcuc3JjID0gdGFyZ2V0S25pZ2h0SW1hZ2U7XG50YXJnZXREaXYuYXBwZW5kQ2hpbGQodGFyZ2V0SW1nKTtcbmNvbnN0IHRhcmdldFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRhcmdldFAudGV4dENvbnRlbnQgPSBcIlRhcmdldCBLbmlnaHRcIjtcbnRhcmdldERpdi5hcHBlbmRDaGlsZCh0YXJnZXRQKTtcblxuLy8gQ3JlYXRlIGZvb3RlciBlbGVtZW50XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbi8vIEZvb3RlciB0ZXh0IGVsZW1lbnRcbmNvbnN0IGZvb3RlclRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9vdGVyVGV4dERpdi50ZXh0Q29udGVudCA9IFwiVGhlIE9kaW4gUHJvamVjdCAtIGpvZW1hdHRhclwiO1xuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHREaXYpO1xuXG4vLyBGb290ZXIgYSBlbGVtZW50XG5jb25zdCBmb290ZXJBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5mb290ZXJBLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb2VtYXR0YXJcIjtcbmZvb3RlckEudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJBKTtcblxuLy8gRm9vdGVyIGltZyBlbGVtZW50XG5jb25zdCBmb290ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZm9vdGVySW1nLnNyYyA9IGdpdGh1YkltYWdlO1xuZm9vdGVyQS5hcHBlbmRDaGlsZChmb290ZXJJbWcpO1xuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUvY2xlYXIgY2hlc3Nib2FyZFxuZnVuY3Rpb24gY3JlYXRlQ2hlc3Nib2FyZCgpIHtcbiAgY2hlc3Nib2FyZERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGxldCBrID0gMDtcbiAgZm9yIChsZXQgaSA9IDg7IGkgPj0gMTsgaSAtPSAxKSB7XG4gICAgLy8gQ3JlYXRlIHJvdyBkaXZcbiAgICBjb25zdCBuZXdDaGVzc2JvYXJkUm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdDaGVzc2JvYXJkUm93RGl2LmNsYXNzTGlzdC5hZGQoXCJjaGVzc2JvYXJkLXJvd1wiKTtcbiAgICBjaGVzc2JvYXJkRGl2LmFwcGVuZENoaWxkKG5ld0NoZXNzYm9hcmRSb3dEaXYpO1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDg7IGogKz0gMSkge1xuICAgICAgLy8gQ3JlYXRlIHNxdWFyZSBkaXZcbiAgICAgIGNvbnN0IG5ld0NoZXNzYm9hcmRTcXVhcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3Q2hlc3Nib2FyZFNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgbmV3Q2hlc3Nib2FyZFNxdWFyZURpdi5kYXRhc2V0LnJvdyA9IGk7XG4gICAgICBuZXdDaGVzc2JvYXJkU3F1YXJlRGl2LmRhdGFzZXQuY29sdW1uID0gajtcbiAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3IgRFJBR09WRVIgZXZlbnRcbiAgICAgIG5ld0NoZXNzYm9hcmRTcXVhcmVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgdG8gYWxsb3cgZHJvcFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG4gICAgICBuZXdDaGVzc2JvYXJkU3F1YXJlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGtuaWdodERyb3ApO1xuICAgICAgaWYgKGsgJSAyID09PSAwKSB7XG4gICAgICAgIG5ld0NoZXNzYm9hcmRTcXVhcmVEaXYuY2xhc3NMaXN0LmFkZChcIndoaXRlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Q2hlc3Nib2FyZFNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwiYmxhY2tcIik7XG4gICAgICB9XG4gICAgICBrICs9IDE7XG4gICAgICBuZXdDaGVzc2JvYXJkUm93RGl2LmFwcGVuZENoaWxkKG5ld0NoZXNzYm9hcmRTcXVhcmVEaXYpO1xuICAgIH1cbiAgICBrICs9IDE7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gcGxhY2Uga25pZ2h0cGllY2VcbmZ1bmN0aW9uIHBsYWNlS25pZ2h0KGtuaWdodCwgcm93LCBjb2x1bW4pIHtcbiAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2x1bW49XCIke2NvbHVtbn1cIl1gXG4gICk7XG4gIHNlbGVjdGVkU3F1YXJlRGl2LmFwcGVuZENoaWxkKGtuaWdodCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNsZWFyIGNoZXNzYm9hcmQgZnJvbSBldmVyeXRoaW5nIGV4Y2VwdCBrbmlnaHRzXG5mdW5jdGlvbiBjbGVhckNoZXNzYm9hcmQoKSB7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNxdWFyZVwiKTtcbiAgZm9yIChsZXQgc3F1YXJlIG9mIHNxdWFyZXMpIHtcbiAgICBpZiAoXG4gICAgICBzcXVhcmUuaGFzQ2hpbGROb2RlcygpICYmXG4gICAgICAhc3F1YXJlLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJhZ2dhYmxlXCIpXG4gICAgKSB7XG4gICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH1cbiAgfVxufVxuXG4vLyBGdW5jdGlvbiBmb3Iga25pZ2h0IGVsZW1lbnQgZHJhZyBzdGFydCBldmVudFxuZnVuY3Rpb24ga25pZ2h0RHJhZ1N0YXJ0KGV2ZW50KSB7XG4gIC8vIHN0b3JlIGEgcmVmLiBvbiB0aGUgZHJhZ2dlZCBlbGVtXG4gIGRyYWdnZWQgPSBldmVudC50YXJnZXQ7XG4gIGNsZWFyQ2hlc3Nib2FyZCgpO1xufVxuXG4vLyBGdW5jdGlvbiBmb3Iga25pZ2h0IGVsZW1lbnQgZHJvcCBldmVudFxuZnVuY3Rpb24ga25pZ2h0RHJvcChldmVudCkge1xuICAvLyBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIChvcGVuIGFzIGxpbmsgZm9yIHNvbWUgZWxlbWVudHMpXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIG1vdmUgZHJhZ2dlZCBlbGVtZW50IHRvIHRoZSBzZWxlY3RlZCBkcm9wIHRhcmdldFxuICBpZiAoXG4gICAgIWV2ZW50LnRhcmdldC5oYXNDaGlsZE5vZGVzKCkgJiZcbiAgICAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRyYWdnYWJsZVwiKVxuICApIHtcbiAgICBkcmFnZ2VkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZCk7XG4gICAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdnZWQpO1xuICB9XG59XG5cbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9rbmlnaHRcIiB0aXRsZT1cImtuaWdodCBpY29uc1wiPktuaWdodCBpY29ucyBjcmVhdGVkIGJ5IEJaWlJJTkNBTlRBVElPTiAtIEZsYXRpY29uPC9hPlxuXG5jb25zb2xlLmxvZyhzaG9ydGVzdFBhdGgoWzQsIDJdLCBbNiwgNl0pKTtcblxuY29uc29sZS5sb2coc2hvcnRlc3RQYXRoKFsyLCAxXSwgWzYsIDZdKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=