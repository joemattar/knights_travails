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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Anton;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  --color-chessboard-black: black;\n  --color-chessboard-red: red;\n  --color-chessboard-white: white;\n}\n\nbody {\n  user-select: none;\n  font-family: Anton;\n\n  height: 100vh;\n\n  margin: 0;\n  padding: 0;\n\n  display: grid;\n  grid-template-rows: 4rem 5fr 1fr 1fr 8rem 2rem;\n  justify-content: center;\n  justify-items: center;\n}\n\n.header {\n  font-size: 2rem;\n\n  display: grid;\n  place-content: center;\n}\n\n.chessboard {\n  width: fit-content;\n  height: fit-content;\n\n  border-style: solid;\n  border-width: 0.25rem;\n\n  display: grid;\n  grid-template-rows: repeat(8, 1fr);\n}\n\n.chessboard .chessboard-row {\n  width: fit-content;\n  height: fit-content;\n\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.chessboard .square {\n  position: relative;\n\n  width: min(11vw, 6rem);\n  aspect-ratio: 1/1;\n\n  display: grid;\n  place-content: center;\n}\n\n.chessboard .square.black {\n  background-color: var(--color-chessboard-black);\n}\n\n.chessboard .square.white {\n  background-color: var(--color-chessboard-white);\n}\n\n.chessboard .square img{\n  width: min(7vw, 4rem);\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.chessboard .square img.dragging {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.chessboard .square img.draggable.target {\n  padding: 0.25rem;\n  border-style: solid;\n  border-width: 0.25rem;\n  border-radius: 1rem;\n  border-color: var(--color-chessboard-red);\n}\n\n.chessboard .square .move {\n  height: 2rem;\n  width: 2rem;\n\n  font-size: 1rem;\n  color: var(--color-chessboard-white);\n\n  background-color: var(--color-chessboard-red);\n\n  border-radius: 1rem;\n\n  display: grid;\n  place-content: center;\n}\n\n.moves {\n  margin: 0 5vw;\n\n  font-size: 1.25rem;\n  color: var(--color-chessboard-red);\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.instructions {\n  margin: 0 5vw;\n\n  font-size: 1.25rem;\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.legend {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n}\n\n.legend div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n\n}\n\n.legend img {\n  height: 4rem;\n}\n\n.legend p {\n  margin: 0;\n  padding: 0;\n}\n\n.footer {\n  font-size: 1.1rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.footer a {\n  color: var(--color-chessboard-black);\n\n  display: grid;\n  place-content: center;\n\n  text-decoration: none;\n}\n\n.footer img {\n  height: 1.25rem;\n\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,4CAAsC;AACxC;;AAEA;EACE,+BAA+B;EAC/B,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;;EAElB,aAAa;;EAEb,SAAS;EACT,UAAU;;EAEV,aAAa;EACb,8CAA8C;EAC9C,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,eAAe;;EAEf,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;;EAEnB,mBAAmB;EACnB,qBAAqB;;EAErB,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;;EAEnB,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,kBAAkB;;EAElB,sBAAsB;EACtB,iBAAiB;;EAEjB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,WAAW;;EAEX,eAAe;EACf,oCAAoC;;EAEpC,6CAA6C;;EAE7C,mBAAmB;;EAEnB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,aAAa;;EAEb,kBAAkB;EAClB,kCAAkC;EAClC,kBAAkB;;EAElB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;;EAEb,kBAAkB;EAClB,kBAAkB;;EAElB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;;AAEb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,oCAAoC;;EAEpC,aAAa;EACb,qBAAqB;;EAErB,qBAAqB;AACvB;;AAEA;EACE,eAAe;;AAEjB","sourcesContent":["@font-face {\n  font-family: Anton;\n  src: url(\"../fonts/Anton-Regular.ttf\");\n}\n\n:root {\n  --color-chessboard-black: black;\n  --color-chessboard-red: red;\n  --color-chessboard-white: white;\n}\n\nbody {\n  user-select: none;\n  font-family: Anton;\n\n  height: 100vh;\n\n  margin: 0;\n  padding: 0;\n\n  display: grid;\n  grid-template-rows: 4rem 5fr 1fr 1fr 8rem 2rem;\n  justify-content: center;\n  justify-items: center;\n}\n\n.header {\n  font-size: 2rem;\n\n  display: grid;\n  place-content: center;\n}\n\n.chessboard {\n  width: fit-content;\n  height: fit-content;\n\n  border-style: solid;\n  border-width: 0.25rem;\n\n  display: grid;\n  grid-template-rows: repeat(8, 1fr);\n}\n\n.chessboard .chessboard-row {\n  width: fit-content;\n  height: fit-content;\n\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.chessboard .square {\n  position: relative;\n\n  width: min(11vw, 6rem);\n  aspect-ratio: 1/1;\n\n  display: grid;\n  place-content: center;\n}\n\n.chessboard .square.black {\n  background-color: var(--color-chessboard-black);\n}\n\n.chessboard .square.white {\n  background-color: var(--color-chessboard-white);\n}\n\n.chessboard .square img{\n  width: min(7vw, 4rem);\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.chessboard .square img.dragging {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.chessboard .square img.draggable.target {\n  padding: 0.25rem;\n  border-style: solid;\n  border-width: 0.25rem;\n  border-radius: 1rem;\n  border-color: var(--color-chessboard-red);\n}\n\n.chessboard .square .move {\n  height: 2rem;\n  width: 2rem;\n\n  font-size: 1rem;\n  color: var(--color-chessboard-white);\n\n  background-color: var(--color-chessboard-red);\n\n  border-radius: 1rem;\n\n  display: grid;\n  place-content: center;\n}\n\n.moves {\n  margin: 0 5vw;\n\n  font-size: 1.25rem;\n  color: var(--color-chessboard-red);\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.instructions {\n  margin: 0 5vw;\n\n  font-size: 1.25rem;\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.legend {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n}\n\n.legend div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n\n}\n\n.legend img {\n  height: 4rem;\n}\n\n.legend p {\n  margin: 0;\n  padding: 0;\n}\n\n.footer {\n  font-size: 1.1rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.footer a {\n  color: var(--color-chessboard-black);\n\n  display: grid;\n  place-content: center;\n\n  text-decoration: none;\n}\n\n.footer img {\n  height: 1.25rem;\n\n}"],"sourceRoot":""}]);
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
movableStartingKnightImg.classList.add("start");
movableStartingKnightImg.draggable = true;
movableStartingKnightImg.src = _images_knight_gold_png__WEBPACK_IMPORTED_MODULE_2__;
movableStartingKnightImg.addEventListener("dragstart", knightDragStart);
movableStartingKnightImg.addEventListener("touchstart", knightDragStart);
const movableTargetKnightImg = document.createElement("img");
movableTargetKnightImg.classList.add("draggable");
movableTargetKnightImg.classList.add("target");
movableTargetKnightImg.draggable = true;
movableTargetKnightImg.src = _images_knight_green_png__WEBPACK_IMPORTED_MODULE_3__;
movableTargetKnightImg.addEventListener("dragstart", knightDragStart);
movableTargetKnightImg.addEventListener("touchstart", knightDragStart);

// Place initial knight pieces
placeKnight(movableStartingKnightImg, 4, 4);
placeKnight(movableTargetKnightImg, 6, 5);

// Create moves div element
const movesDiv = document.createElement("div");
movesDiv.classList.add("moves");
const movesTextDiv = document.createElement("div");
movesTextDiv.classList.add("moves-text");
movesTextDiv.textContent = "Shortest path number of moves: ";
const movesNumberDiv = document.createElement("div");
movesNumberDiv.classList.add("moves-number");
movesNumberDiv.textContent = "1";
document.body.appendChild(movesDiv);
movesDiv.appendChild(movesTextDiv);
movesDiv.appendChild(movesNumberDiv);

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

// Footer a2 element
const footerA2 = document.createElement("a");
footerA2.href = "https://www.flaticon.com/free-icons/knight";
footerA2.title = "knight icons";
footerA2.textContent = "Knight icons by BZZRINCANTATION";
footerA2.target = "_blank";
footer.appendChild(footerA2);

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
      newChessboardSquareDiv.addEventListener("touchend", knightDrop);
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

// Function to select a chessboard square div element
function getChessboardSquareDiv(row, column) {
  return document.querySelector(`[data-row="${row}"][data-column="${column}"]`);
}
// Function to place knightpiece
function placeKnight(knight, row, column) {
  getChessboardSquareDiv(row, column).appendChild(knight);
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
  dragged.classList.add("dragging");
  clearChessboard();
}

// Function for knight element drop event
function knightDrop(event) {
  dragged.classList.remove("dragging");
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (
    !event.target.hasChildNodes() &&
    !event.target.classList.contains("draggable")
  ) {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
    clearChessboard();
    displayMoves();
  } else {
    clearChessboard();
    displayMoves();
  }
}

// Function to fetch start knight coordinates
function getStartKnightsLocation() {
  const startKnight = document.querySelector(".draggable.start").parentNode;
  return [Number(startKnight.dataset.row), Number(startKnight.dataset.column)];
}

// Function to fetch target knight coordinates
function getTargetKnightsLocation() {
  const targetKnight = document.querySelector(".draggable.target").parentNode;
  return [
    Number(targetKnight.dataset.row),
    Number(targetKnight.dataset.column),
  ];
}

// Function to edit the path square divs
// Each square that represent an intermediate knight move
function modifySquareDiv(squareDiv, move) {
  const moveDiv = document.createElement("div");
  moveDiv.classList.add("move");
  moveDiv.textContent = move;
  squareDiv.appendChild(moveDiv);
}

// Function to perform the shortest path result DOM manipulations
// ie Display the intermediate knight moves
function displayMoves() {
  const pathArray = (0,_knights_travails_algorithm_js__WEBPACK_IMPORTED_MODULE_4__.shortestPath)(
    getStartKnightsLocation(),
    getTargetKnightsLocation()
  );
  if (pathArray.length === 2) {
    movesNumberDiv.textContent = "1";
  } else {
    for (let i = 1; i < pathArray.length - 1; i += 1) {
      let selectedSquareDiv = getChessboardSquareDiv(
        pathArray[i][0],
        pathArray[i][1]
      );
      modifySquareDiv(selectedSquareDiv, i);
      movesNumberDiv.textContent = pathArray.length - 1;
    }
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsdUJBQXVCLHlEQUF5RCxHQUFHLFdBQVcsb0NBQW9DLGdDQUFnQyxvQ0FBb0MsR0FBRyxVQUFVLHNCQUFzQix1QkFBdUIsb0JBQW9CLGdCQUFnQixlQUFlLG9CQUFvQixtREFBbUQsNEJBQTRCLDBCQUEwQixHQUFHLGFBQWEsb0JBQW9CLG9CQUFvQiwwQkFBMEIsR0FBRyxpQkFBaUIsdUJBQXVCLHdCQUF3QiwwQkFBMEIsMEJBQTBCLG9CQUFvQix1Q0FBdUMsR0FBRyxpQ0FBaUMsdUJBQXVCLHdCQUF3QixvQkFBb0IsMENBQTBDLEdBQUcseUJBQXlCLHVCQUF1Qiw2QkFBNkIsc0JBQXNCLG9CQUFvQiwwQkFBMEIsR0FBRywrQkFBK0Isb0RBQW9ELEdBQUcsK0JBQStCLG9EQUFvRCxHQUFHLDRCQUE0QiwwQkFBMEIseUJBQXlCLGlCQUFpQixHQUFHLHNDQUFzQyw2QkFBNkIscUJBQXFCLEdBQUcsOENBQThDLHFCQUFxQix3QkFBd0IsMEJBQTBCLHdCQUF3Qiw4Q0FBOEMsR0FBRywrQkFBK0IsaUJBQWlCLGdCQUFnQixzQkFBc0IseUNBQXlDLG9EQUFvRCwwQkFBMEIsb0JBQW9CLDBCQUEwQixHQUFHLFlBQVksa0JBQWtCLHlCQUF5Qix1Q0FBdUMsdUJBQXVCLG9CQUFvQix3QkFBd0IsNEJBQTRCLGNBQWMsR0FBRyxtQkFBbUIsa0JBQWtCLHlCQUF5Qix1QkFBdUIsb0JBQW9CLHdCQUF3Qiw0QkFBNEIsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0IsNEJBQTRCLGNBQWMsR0FBRyxpQkFBaUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLGdCQUFnQixLQUFLLGlCQUFpQixpQkFBaUIsR0FBRyxlQUFlLGNBQWMsZUFBZSxHQUFHLGFBQWEsc0JBQXNCLG9CQUFvQix3QkFBd0IsNEJBQTRCLGdCQUFnQixHQUFHLGVBQWUseUNBQXlDLG9CQUFvQiwwQkFBMEIsNEJBQTRCLEdBQUcsaUJBQWlCLG9CQUFvQixLQUFLLE9BQU8scUZBQXFGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxZQUFZLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxhQUFhLGNBQWMsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLGFBQWEsV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsc0NBQXNDLHVCQUF1Qiw2Q0FBNkMsR0FBRyxXQUFXLG9DQUFvQyxnQ0FBZ0Msb0NBQW9DLEdBQUcsVUFBVSxzQkFBc0IsdUJBQXVCLG9CQUFvQixnQkFBZ0IsZUFBZSxvQkFBb0IsbURBQW1ELDRCQUE0QiwwQkFBMEIsR0FBRyxhQUFhLG9CQUFvQixvQkFBb0IsMEJBQTBCLEdBQUcsaUJBQWlCLHVCQUF1Qix3QkFBd0IsMEJBQTBCLDBCQUEwQixvQkFBb0IsdUNBQXVDLEdBQUcsaUNBQWlDLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDBDQUEwQyxHQUFHLHlCQUF5Qix1QkFBdUIsNkJBQTZCLHNCQUFzQixvQkFBb0IsMEJBQTBCLEdBQUcsK0JBQStCLG9EQUFvRCxHQUFHLCtCQUErQixvREFBb0QsR0FBRyw0QkFBNEIsMEJBQTBCLHlCQUF5QixpQkFBaUIsR0FBRyxzQ0FBc0MsNkJBQTZCLHFCQUFxQixHQUFHLDhDQUE4QyxxQkFBcUIsd0JBQXdCLDBCQUEwQix3QkFBd0IsOENBQThDLEdBQUcsK0JBQStCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHlDQUF5QyxvREFBb0QsMEJBQTBCLG9CQUFvQiwwQkFBMEIsR0FBRyxZQUFZLGtCQUFrQix5QkFBeUIsdUNBQXVDLHVCQUF1QixvQkFBb0Isd0JBQXdCLDRCQUE0QixjQUFjLEdBQUcsbUJBQW1CLGtCQUFrQix5QkFBeUIsdUJBQXVCLG9CQUFvQix3QkFBd0IsNEJBQTRCLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLDRCQUE0QixjQUFjLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixnQkFBZ0IsS0FBSyxpQkFBaUIsaUJBQWlCLEdBQUcsZUFBZSxjQUFjLGVBQWUsR0FBRyxhQUFhLHNCQUFzQixvQkFBb0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsR0FBRyxlQUFlLHlDQUF5QyxvQkFBb0IsMEJBQTBCLDRCQUE0QixHQUFHLGlCQUFpQixvQkFBb0IsS0FBSyxtQkFBbUI7QUFDbDVOO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCLDRCQUE0QixnREFBSTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUN6RXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmbUM7O0FBRW5ELHVCQUF1Qiw0REFBVTs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFEeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ3lCO0FBQ1E7QUFDRDtBQUNLOztBQUUvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvREFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFpQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxREFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFXO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLElBQUksa0JBQWtCLE9BQU87QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEVBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvY3NzL3N0eWxlcy5jc3M/OTlhMyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvZ3JhcGhfY2hlc3Nib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vc3JjL2dyYXBoX25vZGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL3NyYy9rbmlnaHRzX3RyYXZhaWxzX2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0FudG9uLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogQW50b247XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItY2hlc3Nib2FyZC1ibGFjazogYmxhY2s7XFxuICAtLWNvbG9yLWNoZXNzYm9hcmQtcmVkOiByZWQ7XFxuICAtLWNvbG9yLWNoZXNzYm9hcmQtd2hpdGU6IHdoaXRlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC1mYW1pbHk6IEFudG9uO1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDVmciAxZnIgMWZyIDhyZW0gMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVzc2JvYXJkIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjI1cmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5jaGVzc2JvYXJkLXJvdyB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgd2lkdGg6IG1pbigxMXZ3LCA2cmVtKTtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZS5ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLWJsYWNrKTtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZS53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXdoaXRlKTtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZSBpbWd7XFxuICB3aWR0aDogbWluKDd2dywgNHJlbSk7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZSBpbWcuZHJhZ2dpbmcge1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZSBpbWcuZHJhZ2dhYmxlLnRhcmdldCB7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMC4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZXNzYm9hcmQtcmVkKTtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZSAubW92ZSB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXdoaXRlKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNoZXNzYm9hcmQtcmVkKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubW92ZXMge1xcbiAgbWFyZ2luOiAwIDV2dztcXG5cXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXJlZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gIG1hcmdpbjogMCA1dnc7XFxuXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVyZW07XFxufVxcblxcbi5sZWdlbmQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuXFxufVxcblxcbi5sZWdlbmQgaW1nIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLmxlZ2VuZCBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY2hlc3Nib2FyZC1ibGFjayk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcblxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBc0M7QUFDeEM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLGFBQWE7O0VBRWIsU0FBUztFQUNULFVBQVU7O0VBRVYsYUFBYTtFQUNiLDhDQUE4QztFQUM5Qyx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTs7RUFFZixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjs7RUFFckIsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxrQkFBa0I7O0VBRWxCLHNCQUFzQjtFQUN0QixpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0VBRVgsZUFBZTtFQUNmLG9DQUFvQzs7RUFFcEMsNkNBQTZDOztFQUU3QyxtQkFBbUI7O0VBRW5CLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhOztFQUViLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsa0JBQWtCOztFQUVsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhOztFQUViLGtCQUFrQjtFQUNsQixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7O0VBRXBDLGFBQWE7RUFDYixxQkFBcUI7O0VBRXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7O0FBRWpCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEFudG9uO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0FudG9uLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItY2hlc3Nib2FyZC1ibGFjazogYmxhY2s7XFxuICAtLWNvbG9yLWNoZXNzYm9hcmQtcmVkOiByZWQ7XFxuICAtLWNvbG9yLWNoZXNzYm9hcmQtd2hpdGU6IHdoaXRlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC1mYW1pbHk6IEFudG9uO1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDVmciAxZnIgMWZyIDhyZW0gMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVzc2JvYXJkIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjI1cmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5jaGVzc2JvYXJkLXJvdyB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgd2lkdGg6IG1pbigxMXZ3LCA2cmVtKTtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZS5ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLWJsYWNrKTtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZS53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXdoaXRlKTtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZSBpbWd7XFxuICB3aWR0aDogbWluKDd2dywgNHJlbSk7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZSBpbWcuZHJhZ2dpbmcge1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZSBpbWcuZHJhZ2dhYmxlLnRhcmdldCB7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMC4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZXNzYm9hcmQtcmVkKTtcXG59XFxuXFxuLmNoZXNzYm9hcmQgLnNxdWFyZSAubW92ZSB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXdoaXRlKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNoZXNzYm9hcmQtcmVkKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubW92ZXMge1xcbiAgbWFyZ2luOiAwIDV2dztcXG5cXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXJlZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gIG1hcmdpbjogMCA1dnc7XFxuXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVyZW07XFxufVxcblxcbi5sZWdlbmQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuXFxufVxcblxcbi5sZWdlbmQgaW1nIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLmxlZ2VuZCBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY2hlc3Nib2FyZC1ibGFjayk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcblxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ncmFwaF9ub2RlLmpzXCI7XG5cbmNsYXNzIENoZXNzYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBDcmVhdGUgYSBsaXN0IHdpdGggYWxsIHBvc3NpYmxlIGtuaWdodCBtb3ZlbWVudHNcbiAgICAvLyBBIG1vdmVtZW50IGlzIGFuIGFycmF5IGNvbnNpc3Rpbmcgb2Ygcm93IGFuZCBjb2x1bW4gdHJhbnNsYXRpb25cbiAgICB0aGlzLmtuaWdodE1vdmVtZW50TGlzdCA9IFtcbiAgICAgIFstMiwgLTFdLFxuICAgICAgWy0yLCAxXSxcbiAgICAgIFstMSwgLTJdLFxuICAgICAgWy0xLCAyXSxcbiAgICAgIFsxLCAtMl0sXG4gICAgICBbMSwgMl0sXG4gICAgICBbMiwgLTFdLFxuICAgICAgWzIsIDFdLFxuICAgIF07XG5cbiAgICAvLyBDcmVhdGUgYSBsaXN0IG9mIGFsbCBjaGVzc2JvYXJkIG5vZGVzXG4gICAgdGhpcy5jaGVzc2JvYXJkTm9kZUxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoaSwgaik7XG4gICAgICAgIHRoaXMuY2hlc3Nib2FyZE5vZGVMaXN0LnB1c2gobmV3Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXNzaWduIGtuaWdodCBtb3ZlbWVudCBuZWlnaGJvdXIgZm9yIGVhY2ggY2hlc3Nib2FyZCBub2RlXG4gICAgZm9yIChsZXQgY2hlc3Nib2FyTm9kZSBvZiB0aGlzLmNoZXNzYm9hcmROb2RlTGlzdCkge1xuICAgICAgZm9yIChsZXQga25pZ2h0TW92ZW1lbnQgb2YgdGhpcy5rbmlnaHRNb3ZlbWVudExpc3QpIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyUm93ID0gY2hlc3Nib2FyTm9kZS5yb3cgKyBrbmlnaHRNb3ZlbWVudFswXTtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyQ29sdW1uID0gY2hlc3Nib2FyTm9kZS5jb2x1bW4gKyBrbmlnaHRNb3ZlbWVudFsxXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIDEgPD0gbmVpZ2hib3VyUm93ICYmXG4gICAgICAgICAgbmVpZ2hib3VyUm93IDw9IDggJiZcbiAgICAgICAgICAxIDw9IG5laWdoYm91ckNvbHVtbiAmJlxuICAgICAgICAgIG5laWdoYm91ckNvbHVtbiA8PSA4XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IG5laWdoYm91ck5vZGUgPSB0aGlzLmdldENoZXNzYm9hcmROb2RlKFxuICAgICAgICAgICAgbmVpZ2hib3VyUm93LFxuICAgICAgICAgICAgbmVpZ2hib3VyQ29sdW1uXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoY2hlc3Nib2FyTm9kZS5uZWlnaGJvdXJzLmluY2x1ZGVzKG5laWdoYm91ck5vZGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY2hlc3Nib2FyTm9kZS5hZGROZWlnaGJvdXIobmVpZ2hib3VyTm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTWV0aG9kIHRvIGdldCBhIHRhcmdldCBub2RlIGdpdmVuIGl0cyByb3cgYW5kIGNvbHVtbiBudW1iZXJcbiAgZ2V0Q2hlc3Nib2FyZE5vZGUocm93LCBjb2x1bW4pIHtcbiAgICBmb3IgKGxldCBjaGVzc2JvYXJOb2RlIG9mIHRoaXMuY2hlc3Nib2FyZE5vZGVMaXN0KSB7XG4gICAgICBpZiAoY2hlc3Nib2FyTm9kZS5yb3cgPT09IHJvdyAmJiBjaGVzc2JvYXJOb2RlLmNvbHVtbiA9PT0gY29sdW1uKSB7XG4gICAgICAgIHJldHVybiBjaGVzc2JvYXJOb2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE1ldGhvZCB0byByZXNldCB0aGUgcHJldmlvdXMgYXR0cmlidXRlIG9mIGFsbCBub2Rlc1xuICByZXNldE5vZGVzUHJldmlvdXMoKSB7XG4gICAgZm9yIChsZXQgY2hlc3Nib2FyZE5vZGUgb2YgdGhpcy5jaGVzc2JvYXJkTm9kZUxpc3QpIHtcbiAgICAgIGNoZXNzYm9hcmROb2RlLnByZXZpb3VzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBNZXRob2QgdG8gcmVzdCB0aGUgdmlzaXRlZCBhdHRyaWJ1dGUgb2YgYWxsIG5vZGVzXG4gIHJlc2V0Tm9kZXNWaXNpdGVkKCkge1xuICAgIGZvciAobGV0IGNoZXNzYm9hcmROb2RlIG9mIHRoaXMuY2hlc3Nib2FyZE5vZGVMaXN0KSB7XG4gICAgICBjaGVzc2JvYXJkTm9kZS52aXNpdGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IENoZXNzYm9hcmQgfTtcbiIsImNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcihyb3csIGNvbHVtbikge1xuICAgIHRoaXMucm93ID0gcm93O1xuICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMuaWQgPSBbcm93LCBjb2x1bW5dO1xuICAgIHRoaXMucHJldmlvdXMgPSBudWxsO1xuICAgIHRoaXMubmVpZ2hib3VycyA9IFtdO1xuICAgIHRoaXMudmlzaXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgYWRkTmVpZ2hib3VyKG5vZGUpIHtcbiAgICB0aGlzLm5laWdoYm91cnMucHVzaChub2RlKTtcbiAgfVxufVxuXG5leHBvcnQgeyBOb2RlIH07XG4iLCJpbXBvcnQgeyBDaGVzc2JvYXJkIH0gZnJvbSBcIi4vZ3JhcGhfY2hlc3Nib2FyZC5qc1wiO1xuXG5jb25zdCBjaGVzc2JvYXJkID0gbmV3IENoZXNzYm9hcmQoKTtcblxuZnVuY3Rpb24gc2hvcnRlc3RQYXRoKFtzdGFydFJvdywgc3RhcnRDb2x1bW5dLCBbZW5kUm93LCBlbmRDb2x1bW5dKSB7XG4gIGNvbnN0IHN0YXJ0Tm9kZSA9IGNoZXNzYm9hcmQuZ2V0Q2hlc3Nib2FyZE5vZGUoc3RhcnRSb3csIHN0YXJ0Q29sdW1uKTtcbiAgY29uc3QgZW5kTm9kZSA9IGNoZXNzYm9hcmQuZ2V0Q2hlc3Nib2FyZE5vZGUoZW5kUm93LCBlbmRDb2x1bW4pO1xuXG4gIC8vIFJlc2V0IGNoZXNzYm9hcmQgbm9kZSB2aXNpdGVkIGFuZCBwcmV2aW91cyBhdHRyaWJ1dGVzXG4gIGNoZXNzYm9hcmQucmVzZXROb2Rlc1ByZXZpb3VzKCk7XG4gIGNoZXNzYm9hcmQucmVzZXROb2Rlc1Zpc2l0ZWQoKTtcblxuICAvLyBDcmVhdGUgcXVldWVcbiAgbGV0IHF1ZXVlID0gW107XG5cbiAgLy8gVmlzaXQgYW5kIGFkZCB0aGUgc3RhcnQgbm9kZSB0byB0aGUgcXVldWVcbiAgc3RhcnROb2RlLnZpc2l0ZWQgPSB0cnVlO1xuICBxdWV1ZS5wdXNoKHN0YXJ0Tm9kZSk7XG5cbiAgLy8gQkZTIHVudGlsIHF1ZXVlIGlzIGVtcHR5XG4gIHdoaWxlTG9vcDogd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAvLyBQb3AgYSBub2RlIGZyb20gcXVldWUgZm9yIHNlYXJjaCBvcGVyYXRpb25cbiAgICBsZXQgY3VycmVudE5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIG5laWdoYm9ycyBub2RlcyB0byBmaW5kIHRoZSAnZW5kJyBub2RlXG4gICAgZm9yIChsZXQgbmVpZ2hib3VyTm9kZSBvZiBjdXJyZW50Tm9kZS5uZWlnaGJvdXJzKSB7XG4gICAgICBpZiAobmVpZ2hib3VyTm9kZS52aXNpdGVkID09PSBmYWxzZSkge1xuICAgICAgICAvLyB2aXNpdCBhbmQgYWRkIG5laWdoYm9ycyBub2RlcyB0byB0aGUgcXVldWVcbiAgICAgICAgbmVpZ2hib3VyTm9kZS52aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgcXVldWUucHVzaChuZWlnaGJvdXJOb2RlKTtcbiAgICAgICAgLy8gdXBkYXRlIGl0cyBwcmVjZWRpbmcgbm9kZVxuICAgICAgICBuZWlnaGJvdXJOb2RlLnByZXZpb3VzID0gY3VycmVudE5vZGU7XG4gICAgICAgIC8vIHN0b3AgQkZTIGlmIHRoZSB2aXNpdGVkIG5vZGUgaXMgdGhlIGVuZCBub2RlXG4gICAgICAgIGlmIChuZWlnaGJvdXJOb2RlID09PSBlbmROb2RlKSB7XG4gICAgICAgICAgLy8gcXVldWUgPSBbXTtcbiAgICAgICAgICBicmVhayB3aGlsZUxvb3A7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byB0cmFjZSB0aGUgcm91dGUgdXNpbmcgcHJldmlvdXMgbm9kZXNcbiAgbGV0IGN1cnJlbnROb2RlID0gZW5kTm9kZTtcbiAgY29uc3Qgcm91dGUgPSBbXTtcblxuICAvLyBzdGFydCBub2RlIGhhcyBubyBwcmVjZWRpbmcgbm9kZVxuICAvLyBzbyBsb29wIHVudGlsIG5vZGUtPnByZXZpb3VzIGlzIG51bGxcbiAgd2hpbGUgKGN1cnJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgcm91dGUucHVzaChjdXJyZW50Tm9kZS5pZCk7XG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wcmV2aW91cztcbiAgfVxuICAvLyByZXZlcnNlIHRoZSByb3V0ZSBicmluZyBzdGFydCB0byB0aGUgZnJvbnRcbiAgcm91dGUucmV2ZXJzZSgpO1xuICAvLyBvdXRwdXQgcm91dGVcblxuICByZXR1cm4gcm91dGU7XG59XG5cbmV4cG9ydCB7IHNob3J0ZXN0UGF0aCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vY3NzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBnaXRodWJJbWFnZSBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViX2xvZ28ucG5nXCI7XG5pbXBvcnQgc3RhcnRpbmdLbmlnaHRJbWFnZSBmcm9tIFwiLi9pbWFnZXMva25pZ2h0LWdvbGQucG5nXCI7XG5pbXBvcnQgdGFyZ2V0S25pZ2h0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2tuaWdodC1ncmVlbi5wbmdcIjtcbmltcG9ydCB7IHNob3J0ZXN0UGF0aCB9IGZyb20gXCIuL2tuaWdodHNfdHJhdmFpbHNfYWxnb3JpdGhtLmpzXCI7XG5cbmxldCBkcmFnZ2VkO1xuXG4vLyBDcmVhdGUgaGVhZGVyIGVsZW1lbnRcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbmhlYWRlci50ZXh0Q29udGVudCA9IFwiS25pZ2h0cyBUcmF2YWlsc1wiO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4vLyBDcmVhdGUgY2hlc3Nib2FyZCBkaXYgZWxlbWVudFxuY29uc3QgY2hlc3Nib2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jaGVzc2JvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJjaGVzc2JvYXJkXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjaGVzc2JvYXJkRGl2KTtcblxuLy8gQ3JlYXRlIGNoZXNzYm9hcmQgc3F1YXJlc1xuY3JlYXRlQ2hlc3Nib2FyZCgpO1xuXG4vLyBDcmVhdGUgaW50ZXJhY3RpdmUga25pZ2h0IHBpZWNlc1xuY29uc3QgbW92YWJsZVN0YXJ0aW5nS25pZ2h0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbm1vdmFibGVTdGFydGluZ0tuaWdodEltZy5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dhYmxlXCIpO1xubW92YWJsZVN0YXJ0aW5nS25pZ2h0SW1nLmNsYXNzTGlzdC5hZGQoXCJzdGFydFwiKTtcbm1vdmFibGVTdGFydGluZ0tuaWdodEltZy5kcmFnZ2FibGUgPSB0cnVlO1xubW92YWJsZVN0YXJ0aW5nS25pZ2h0SW1nLnNyYyA9IHN0YXJ0aW5nS25pZ2h0SW1hZ2U7XG5tb3ZhYmxlU3RhcnRpbmdLbmlnaHRJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBrbmlnaHREcmFnU3RhcnQpO1xubW92YWJsZVN0YXJ0aW5nS25pZ2h0SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGtuaWdodERyYWdTdGFydCk7XG5jb25zdCBtb3ZhYmxlVGFyZ2V0S25pZ2h0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbm1vdmFibGVUYXJnZXRLbmlnaHRJbWcuY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcbm1vdmFibGVUYXJnZXRLbmlnaHRJbWcuY2xhc3NMaXN0LmFkZChcInRhcmdldFwiKTtcbm1vdmFibGVUYXJnZXRLbmlnaHRJbWcuZHJhZ2dhYmxlID0gdHJ1ZTtcbm1vdmFibGVUYXJnZXRLbmlnaHRJbWcuc3JjID0gdGFyZ2V0S25pZ2h0SW1hZ2U7XG5tb3ZhYmxlVGFyZ2V0S25pZ2h0SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwga25pZ2h0RHJhZ1N0YXJ0KTtcbm1vdmFibGVUYXJnZXRLbmlnaHRJbWcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwga25pZ2h0RHJhZ1N0YXJ0KTtcblxuLy8gUGxhY2UgaW5pdGlhbCBrbmlnaHQgcGllY2VzXG5wbGFjZUtuaWdodChtb3ZhYmxlU3RhcnRpbmdLbmlnaHRJbWcsIDQsIDQpO1xucGxhY2VLbmlnaHQobW92YWJsZVRhcmdldEtuaWdodEltZywgNiwgNSk7XG5cbi8vIENyZWF0ZSBtb3ZlcyBkaXYgZWxlbWVudFxuY29uc3QgbW92ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubW92ZXNEaXYuY2xhc3NMaXN0LmFkZChcIm1vdmVzXCIpO1xuY29uc3QgbW92ZXNUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1vdmVzVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwibW92ZXMtdGV4dFwiKTtcbm1vdmVzVGV4dERpdi50ZXh0Q29udGVudCA9IFwiU2hvcnRlc3QgcGF0aCBudW1iZXIgb2YgbW92ZXM6IFwiO1xuY29uc3QgbW92ZXNOdW1iZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubW92ZXNOdW1iZXJEaXYuY2xhc3NMaXN0LmFkZChcIm1vdmVzLW51bWJlclwiKTtcbm1vdmVzTnVtYmVyRGl2LnRleHRDb250ZW50ID0gXCIxXCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vdmVzRGl2KTtcbm1vdmVzRGl2LmFwcGVuZENoaWxkKG1vdmVzVGV4dERpdik7XG5tb3Zlc0Rpdi5hcHBlbmRDaGlsZChtb3Zlc051bWJlckRpdik7XG5cbi8vIENyZWF0ZSBpbnN0cnVjdGlvbnMgZGl2IGVsZW1lbnRcbmNvbnN0IGluc3RydWN0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5pbnN0cnVjdGlvbnNEaXYuY2xhc3NMaXN0LmFkZChcImluc3RydWN0aW9uc1wiKTtcbmluc3RydWN0aW9uc0Rpdi50ZXh0Q29udGVudCA9XG4gIFwiVXNlIHRoZSBtb3VzZSB0byBkcmFnIHRoZSBrbmlnaHRzIHRvIHRoZWlyIHN0YXJ0aW5nIGFuZCB0YXJnZXQgcG9zaXRpb25zXCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluc3RydWN0aW9uc0Rpdik7XG5cbi8vIENyZWF0ZSBsZWdlbmQgZGl2IGVsZW1lbnRcbmNvbnN0IGxlZ2VuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZWdlbmREaXYuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGVnZW5kRGl2KTtcblxuLy8gQ3JlYXRlIGxlZ2VuZCBjb250ZW50XG5jb25zdCBzdGFydGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZWdlbmREaXYuYXBwZW5kQ2hpbGQoc3RhcnRpbmdEaXYpO1xuY29uc3Qgc3RhcnRpbmdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuc3RhcnRpbmdJbWcuc3JjID0gc3RhcnRpbmdLbmlnaHRJbWFnZTtcbnN0YXJ0aW5nRGl2LmFwcGVuZENoaWxkKHN0YXJ0aW5nSW1nKTtcbmNvbnN0IHN0YXJ0aW5nUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuc3RhcnRpbmdQLnRleHRDb250ZW50ID0gXCJTdGFydGluZyBLbmlnaHRcIjtcbnN0YXJ0aW5nRGl2LmFwcGVuZENoaWxkKHN0YXJ0aW5nUCk7XG5jb25zdCB0YXJnZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGVnZW5kRGl2LmFwcGVuZENoaWxkKHRhcmdldERpdik7XG5jb25zdCB0YXJnZXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xudGFyZ2V0SW1nLnNyYyA9IHRhcmdldEtuaWdodEltYWdlO1xudGFyZ2V0RGl2LmFwcGVuZENoaWxkKHRhcmdldEltZyk7XG5jb25zdCB0YXJnZXRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG50YXJnZXRQLnRleHRDb250ZW50ID0gXCJUYXJnZXQgS25pZ2h0XCI7XG50YXJnZXREaXYuYXBwZW5kQ2hpbGQodGFyZ2V0UCk7XG5cbi8vIENyZWF0ZSBmb290ZXIgZWxlbWVudFxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbmZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4vLyBGb290ZXIgdGV4dCBlbGVtZW50XG5jb25zdCBmb290ZXJUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvb3RlclRleHREaXYudGV4dENvbnRlbnQgPSBcIlRoZSBPZGluIFByb2plY3QgLSBqb2VtYXR0YXJcIjtcbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0RGl2KTtcblxuLy8gRm9vdGVyIGEgZWxlbWVudFxuY29uc3QgZm9vdGVyQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuZm9vdGVyQS5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vam9lbWF0dGFyXCI7XG5mb290ZXJBLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5mb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQSk7XG5cbi8vIEZvb3RlciBpbWcgZWxlbWVudFxuY29uc3QgZm9vdGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmZvb3RlckltZy5zcmMgPSBnaXRodWJJbWFnZTtcbmZvb3RlckEuYXBwZW5kQ2hpbGQoZm9vdGVySW1nKTtcblxuLy8gRm9vdGVyIGEyIGVsZW1lbnRcbmNvbnN0IGZvb3RlckEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5mb290ZXJBMi5ocmVmID0gXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9rbmlnaHRcIjtcbmZvb3RlckEyLnRpdGxlID0gXCJrbmlnaHQgaWNvbnNcIjtcbmZvb3RlckEyLnRleHRDb250ZW50ID0gXCJLbmlnaHQgaWNvbnMgYnkgQlpaUklOQ0FOVEFUSU9OXCI7XG5mb290ZXJBMi50YXJnZXQgPSBcIl9ibGFua1wiO1xuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckEyKTtcblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlL2NsZWFyIGNoZXNzYm9hcmRcbmZ1bmN0aW9uIGNyZWF0ZUNoZXNzYm9hcmQoKSB7XG4gIGNoZXNzYm9hcmREaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICBsZXQgayA9IDA7XG4gIGZvciAobGV0IGkgPSA4OyBpID49IDE7IGkgLT0gMSkge1xuICAgIC8vIENyZWF0ZSByb3cgZGl2XG4gICAgY29uc3QgbmV3Q2hlc3Nib2FyZFJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3Q2hlc3Nib2FyZFJvd0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2hlc3Nib2FyZC1yb3dcIik7XG4gICAgY2hlc3Nib2FyZERpdi5hcHBlbmRDaGlsZChuZXdDaGVzc2JvYXJkUm93RGl2KTtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSA4OyBqICs9IDEpIHtcbiAgICAgIC8vIENyZWF0ZSBzcXVhcmUgZGl2XG4gICAgICBjb25zdCBuZXdDaGVzc2JvYXJkU3F1YXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0NoZXNzYm9hcmRTcXVhcmVEaXYuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgIG5ld0NoZXNzYm9hcmRTcXVhcmVEaXYuZGF0YXNldC5yb3cgPSBpO1xuICAgICAgbmV3Q2hlc3Nib2FyZFNxdWFyZURpdi5kYXRhc2V0LmNvbHVtbiA9IGo7XG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIERSQUdPVkVSIGV2ZW50XG4gICAgICBuZXdDaGVzc2JvYXJkU3F1YXJlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHRvIGFsbG93IGRyb3BcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuICAgICAgbmV3Q2hlc3Nib2FyZFNxdWFyZURpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBrbmlnaHREcm9wKTtcbiAgICAgIG5ld0NoZXNzYm9hcmRTcXVhcmVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGtuaWdodERyb3ApO1xuICAgICAgaWYgKGsgJSAyID09PSAwKSB7XG4gICAgICAgIG5ld0NoZXNzYm9hcmRTcXVhcmVEaXYuY2xhc3NMaXN0LmFkZChcIndoaXRlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Q2hlc3Nib2FyZFNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwiYmxhY2tcIik7XG4gICAgICB9XG4gICAgICBrICs9IDE7XG4gICAgICBuZXdDaGVzc2JvYXJkUm93RGl2LmFwcGVuZENoaWxkKG5ld0NoZXNzYm9hcmRTcXVhcmVEaXYpO1xuICAgIH1cbiAgICBrICs9IDE7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gc2VsZWN0IGEgY2hlc3Nib2FyZCBzcXVhcmUgZGl2IGVsZW1lbnRcbmZ1bmN0aW9uIGdldENoZXNzYm9hcmRTcXVhcmVEaXYocm93LCBjb2x1bW4pIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29sdW1ufVwiXWApO1xufVxuLy8gRnVuY3Rpb24gdG8gcGxhY2Uga25pZ2h0cGllY2VcbmZ1bmN0aW9uIHBsYWNlS25pZ2h0KGtuaWdodCwgcm93LCBjb2x1bW4pIHtcbiAgZ2V0Q2hlc3Nib2FyZFNxdWFyZURpdihyb3csIGNvbHVtbikuYXBwZW5kQ2hpbGQoa25pZ2h0KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2xlYXIgY2hlc3Nib2FyZCBmcm9tIGV2ZXJ5dGhpbmcgZXhjZXB0IGtuaWdodHNcbmZ1bmN0aW9uIGNsZWFyQ2hlc3Nib2FyZCgpIHtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuICBmb3IgKGxldCBzcXVhcmUgb2Ygc3F1YXJlcykge1xuICAgIGlmIChcbiAgICAgIHNxdWFyZS5oYXNDaGlsZE5vZGVzKCkgJiZcbiAgICAgICFzcXVhcmUuZmlyc3RDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcmFnZ2FibGVcIilcbiAgICApIHtcbiAgICAgIHNxdWFyZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuICB9XG59XG5cbi8vIEZ1bmN0aW9uIGZvciBrbmlnaHQgZWxlbWVudCBkcmFnIHN0YXJ0IGV2ZW50XG5mdW5jdGlvbiBrbmlnaHREcmFnU3RhcnQoZXZlbnQpIHtcbiAgLy8gc3RvcmUgYSByZWYuIG9uIHRoZSBkcmFnZ2VkIGVsZW1cbiAgZHJhZ2dlZCA9IGV2ZW50LnRhcmdldDtcbiAgZHJhZ2dlZC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG4gIGNsZWFyQ2hlc3Nib2FyZCgpO1xufVxuXG4vLyBGdW5jdGlvbiBmb3Iga25pZ2h0IGVsZW1lbnQgZHJvcCBldmVudFxuZnVuY3Rpb24ga25pZ2h0RHJvcChldmVudCkge1xuICBkcmFnZ2VkLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnZ2luZ1wiKTtcbiAgLy8gcHJldmVudCBkZWZhdWx0IGFjdGlvbiAob3BlbiBhcyBsaW5rIGZvciBzb21lIGVsZW1lbnRzKVxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBtb3ZlIGRyYWdnZWQgZWxlbWVudCB0byB0aGUgc2VsZWN0ZWQgZHJvcCB0YXJnZXRcbiAgaWYgKFxuICAgICFldmVudC50YXJnZXQuaGFzQ2hpbGROb2RlcygpICYmXG4gICAgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcmFnZ2FibGVcIilcbiAgKSB7XG4gICAgZHJhZ2dlZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWQpO1xuICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcbiAgICBjbGVhckNoZXNzYm9hcmQoKTtcbiAgICBkaXNwbGF5TW92ZXMoKTtcbiAgfSBlbHNlIHtcbiAgICBjbGVhckNoZXNzYm9hcmQoKTtcbiAgICBkaXNwbGF5TW92ZXMoKTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBmZXRjaCBzdGFydCBrbmlnaHQgY29vcmRpbmF0ZXNcbmZ1bmN0aW9uIGdldFN0YXJ0S25pZ2h0c0xvY2F0aW9uKCkge1xuICBjb25zdCBzdGFydEtuaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dhYmxlLnN0YXJ0XCIpLnBhcmVudE5vZGU7XG4gIHJldHVybiBbTnVtYmVyKHN0YXJ0S25pZ2h0LmRhdGFzZXQucm93KSwgTnVtYmVyKHN0YXJ0S25pZ2h0LmRhdGFzZXQuY29sdW1uKV07XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZldGNoIHRhcmdldCBrbmlnaHQgY29vcmRpbmF0ZXNcbmZ1bmN0aW9uIGdldFRhcmdldEtuaWdodHNMb2NhdGlvbigpIHtcbiAgY29uc3QgdGFyZ2V0S25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmFnZ2FibGUudGFyZ2V0XCIpLnBhcmVudE5vZGU7XG4gIHJldHVybiBbXG4gICAgTnVtYmVyKHRhcmdldEtuaWdodC5kYXRhc2V0LnJvdyksXG4gICAgTnVtYmVyKHRhcmdldEtuaWdodC5kYXRhc2V0LmNvbHVtbiksXG4gIF07XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGVkaXQgdGhlIHBhdGggc3F1YXJlIGRpdnNcbi8vIEVhY2ggc3F1YXJlIHRoYXQgcmVwcmVzZW50IGFuIGludGVybWVkaWF0ZSBrbmlnaHQgbW92ZVxuZnVuY3Rpb24gbW9kaWZ5U3F1YXJlRGl2KHNxdWFyZURpdiwgbW92ZSkge1xuICBjb25zdCBtb3ZlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW92ZURpdi5jbGFzc0xpc3QuYWRkKFwibW92ZVwiKTtcbiAgbW92ZURpdi50ZXh0Q29udGVudCA9IG1vdmU7XG4gIHNxdWFyZURpdi5hcHBlbmRDaGlsZChtb3ZlRGl2KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gcGVyZm9ybSB0aGUgc2hvcnRlc3QgcGF0aCByZXN1bHQgRE9NIG1hbmlwdWxhdGlvbnNcbi8vIGllIERpc3BsYXkgdGhlIGludGVybWVkaWF0ZSBrbmlnaHQgbW92ZXNcbmZ1bmN0aW9uIGRpc3BsYXlNb3ZlcygpIHtcbiAgY29uc3QgcGF0aEFycmF5ID0gc2hvcnRlc3RQYXRoKFxuICAgIGdldFN0YXJ0S25pZ2h0c0xvY2F0aW9uKCksXG4gICAgZ2V0VGFyZ2V0S25pZ2h0c0xvY2F0aW9uKClcbiAgKTtcbiAgaWYgKHBhdGhBcnJheS5sZW5ndGggPT09IDIpIHtcbiAgICBtb3Zlc051bWJlckRpdi50ZXh0Q29udGVudCA9IFwiMVwiO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aEFycmF5Lmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgbGV0IHNlbGVjdGVkU3F1YXJlRGl2ID0gZ2V0Q2hlc3Nib2FyZFNxdWFyZURpdihcbiAgICAgICAgcGF0aEFycmF5W2ldWzBdLFxuICAgICAgICBwYXRoQXJyYXlbaV1bMV1cbiAgICAgICk7XG4gICAgICBtb2RpZnlTcXVhcmVEaXYoc2VsZWN0ZWRTcXVhcmVEaXYsIGkpO1xuICAgICAgbW92ZXNOdW1iZXJEaXYudGV4dENvbnRlbnQgPSBwYXRoQXJyYXkubGVuZ3RoIC0gMTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==