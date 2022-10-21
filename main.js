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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDRFQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vc3JjL2dyYXBoX2NoZXNzYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy8uL3NyYy9ncmFwaF9ub2RlLmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvLi9zcmMva25pZ2h0c190cmF2YWlsc19hbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9BbnRvbi1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEFudG9uO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLWNoZXNzYm9hcmQtYmxhY2s6IGJsYWNrO1xcbiAgLS1jb2xvci1jaGVzc2JvYXJkLXJlZDogcmVkO1xcbiAgLS1jb2xvci1jaGVzc2JvYXJkLXdoaXRlOiB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBBbnRvbjtcXG5cXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSA1ZnIgMWZyIDFmciA4cmVtIDJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2hlc3Nib2FyZCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMC4yNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG5cXG4uY2hlc3Nib2FyZCAuY2hlc3Nib2FyZC1yb3cge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG5cXG4uY2hlc3Nib2FyZCAuc3F1YXJlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIHdpZHRoOiBtaW4oMTF2dywgNnJlbSk7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUuYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2hlc3Nib2FyZC1ibGFjayk7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUud2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2hlc3Nib2FyZC13aGl0ZSk7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUgaW1ne1xcbiAgd2lkdGg6IG1pbig3dncsIDRyZW0pO1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUgaW1nLmRyYWdnaW5nIHtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUgaW1nLmRyYWdnYWJsZS50YXJnZXQge1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDAuMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXJlZCk7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUgLm1vdmUge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuXFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY2hlc3Nib2FyZC13aGl0ZSk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXJlZCk7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1vdmVzIHtcXG4gIG1hcmdpbjogMCA1dnc7XFxuXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY2hlc3Nib2FyZC1yZWQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICBtYXJnaW46IDAgNXZ3O1xcblxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxlZ2VuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4ubGVnZW5kIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcblxcbn1cXG5cXG4ubGVnZW5kIGltZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5sZWdlbmQgcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWNoZXNzYm9hcmQtYmxhY2spO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsNENBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQixhQUFhOztFQUViLFNBQVM7RUFDVCxVQUFVOztFQUVWLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7O0VBRWYsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLG1CQUFtQjtFQUNuQixxQkFBcUI7O0VBRXJCLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixzQkFBc0I7RUFDdEIsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXOztFQUVYLGVBQWU7RUFDZixvQ0FBb0M7O0VBRXBDLDZDQUE2Qzs7RUFFN0MsbUJBQW1COztFQUVuQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXOztBQUViOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DOztFQUVwQyxhQUFhO0VBQ2IscUJBQXFCOztFQUVyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlOztBQUVqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBBbnRvbjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9BbnRvbi1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLWNoZXNzYm9hcmQtYmxhY2s6IGJsYWNrO1xcbiAgLS1jb2xvci1jaGVzc2JvYXJkLXJlZDogcmVkO1xcbiAgLS1jb2xvci1jaGVzc2JvYXJkLXdoaXRlOiB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBBbnRvbjtcXG5cXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSA1ZnIgMWZyIDFmciA4cmVtIDJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2hlc3Nib2FyZCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMC4yNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG5cXG4uY2hlc3Nib2FyZCAuY2hlc3Nib2FyZC1yb3cge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG5cXG4uY2hlc3Nib2FyZCAuc3F1YXJlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIHdpZHRoOiBtaW4oMTF2dywgNnJlbSk7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUuYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2hlc3Nib2FyZC1ibGFjayk7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUud2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2hlc3Nib2FyZC13aGl0ZSk7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUgaW1ne1xcbiAgd2lkdGg6IG1pbig3dncsIDRyZW0pO1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUgaW1nLmRyYWdnaW5nIHtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUgaW1nLmRyYWdnYWJsZS50YXJnZXQge1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDAuMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXJlZCk7XFxufVxcblxcbi5jaGVzc2JvYXJkIC5zcXVhcmUgLm1vdmUge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuXFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY2hlc3Nib2FyZC13aGl0ZSk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVzc2JvYXJkLXJlZCk7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1vdmVzIHtcXG4gIG1hcmdpbjogMCA1dnc7XFxuXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY2hlc3Nib2FyZC1yZWQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICBtYXJnaW46IDAgNXZ3O1xcblxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxlZ2VuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4ubGVnZW5kIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcblxcbn1cXG5cXG4ubGVnZW5kIGltZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5sZWdlbmQgcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWNoZXNzYm9hcmQtYmxhY2spO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vZ3JhcGhfbm9kZS5qc1wiO1xuXG5jbGFzcyBDaGVzc2JvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gQ3JlYXRlIGEgbGlzdCB3aXRoIGFsbCBwb3NzaWJsZSBrbmlnaHQgbW92ZW1lbnRzXG4gICAgLy8gQSBtb3ZlbWVudCBpcyBhbiBhcnJheSBjb25zaXN0aW5nIG9mIHJvdyBhbmQgY29sdW1uIHRyYW5zbGF0aW9uXG4gICAgdGhpcy5rbmlnaHRNb3ZlbWVudExpc3QgPSBbXG4gICAgICBbLTIsIC0xXSxcbiAgICAgIFstMiwgMV0sXG4gICAgICBbLTEsIC0yXSxcbiAgICAgIFstMSwgMl0sXG4gICAgICBbMSwgLTJdLFxuICAgICAgWzEsIDJdLFxuICAgICAgWzIsIC0xXSxcbiAgICAgIFsyLCAxXSxcbiAgICBdO1xuXG4gICAgLy8gQ3JlYXRlIGEgbGlzdCBvZiBhbGwgY2hlc3Nib2FyZCBub2Rlc1xuICAgIHRoaXMuY2hlc3Nib2FyZE5vZGVMaXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSA4OyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGksIGopO1xuICAgICAgICB0aGlzLmNoZXNzYm9hcmROb2RlTGlzdC5wdXNoKG5ld05vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFzc2lnbiBrbmlnaHQgbW92ZW1lbnQgbmVpZ2hib3VyIGZvciBlYWNoIGNoZXNzYm9hcmQgbm9kZVxuICAgIGZvciAobGV0IGNoZXNzYm9hck5vZGUgb2YgdGhpcy5jaGVzc2JvYXJkTm9kZUxpc3QpIHtcbiAgICAgIGZvciAobGV0IGtuaWdodE1vdmVtZW50IG9mIHRoaXMua25pZ2h0TW92ZW1lbnRMaXN0KSB7XG4gICAgICAgIGNvbnN0IG5laWdoYm91clJvdyA9IGNoZXNzYm9hck5vZGUucm93ICsga25pZ2h0TW92ZW1lbnRbMF07XG4gICAgICAgIGNvbnN0IG5laWdoYm91ckNvbHVtbiA9IGNoZXNzYm9hck5vZGUuY29sdW1uICsga25pZ2h0TW92ZW1lbnRbMV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICAxIDw9IG5laWdoYm91clJvdyAmJlxuICAgICAgICAgIG5laWdoYm91clJvdyA8PSA4ICYmXG4gICAgICAgICAgMSA8PSBuZWlnaGJvdXJDb2x1bW4gJiZcbiAgICAgICAgICBuZWlnaGJvdXJDb2x1bW4gPD0gOFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBuZWlnaGJvdXJOb2RlID0gdGhpcy5nZXRDaGVzc2JvYXJkTm9kZShcbiAgICAgICAgICAgIG5laWdoYm91clJvdyxcbiAgICAgICAgICAgIG5laWdoYm91ckNvbHVtblxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGNoZXNzYm9hck5vZGUubmVpZ2hib3Vycy5pbmNsdWRlcyhuZWlnaGJvdXJOb2RlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNoZXNzYm9hck5vZGUuYWRkTmVpZ2hib3VyKG5laWdoYm91ck5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE1ldGhvZCB0byBnZXQgYSB0YXJnZXQgbm9kZSBnaXZlbiBpdHMgcm93IGFuZCBjb2x1bW4gbnVtYmVyXG4gIGdldENoZXNzYm9hcmROb2RlKHJvdywgY29sdW1uKSB7XG4gICAgZm9yIChsZXQgY2hlc3Nib2FyTm9kZSBvZiB0aGlzLmNoZXNzYm9hcmROb2RlTGlzdCkge1xuICAgICAgaWYgKGNoZXNzYm9hck5vZGUucm93ID09PSByb3cgJiYgY2hlc3Nib2FyTm9kZS5jb2x1bW4gPT09IGNvbHVtbikge1xuICAgICAgICByZXR1cm4gY2hlc3Nib2FyTm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBNZXRob2QgdG8gcmVzZXQgdGhlIHByZXZpb3VzIGF0dHJpYnV0ZSBvZiBhbGwgbm9kZXNcbiAgcmVzZXROb2Rlc1ByZXZpb3VzKCkge1xuICAgIGZvciAobGV0IGNoZXNzYm9hcmROb2RlIG9mIHRoaXMuY2hlc3Nib2FyZE5vZGVMaXN0KSB7XG4gICAgICBjaGVzc2JvYXJkTm9kZS5wcmV2aW91cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gTWV0aG9kIHRvIHJlc3QgdGhlIHZpc2l0ZWQgYXR0cmlidXRlIG9mIGFsbCBub2Rlc1xuICByZXNldE5vZGVzVmlzaXRlZCgpIHtcbiAgICBmb3IgKGxldCBjaGVzc2JvYXJkTm9kZSBvZiB0aGlzLmNoZXNzYm9hcmROb2RlTGlzdCkge1xuICAgICAgY2hlc3Nib2FyZE5vZGUudmlzaXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBDaGVzc2JvYXJkIH07XG4iLCJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3Iocm93LCBjb2x1bW4pIHtcbiAgICB0aGlzLnJvdyA9IHJvdztcbiAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICB0aGlzLmlkID0gW3JvdywgY29sdW1uXTtcbiAgICB0aGlzLnByZXZpb3VzID0gbnVsbDtcbiAgICB0aGlzLm5laWdoYm91cnMgPSBbXTtcbiAgICB0aGlzLnZpc2l0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZE5laWdoYm91cihub2RlKSB7XG4gICAgdGhpcy5uZWlnaGJvdXJzLnB1c2gobm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgTm9kZSB9O1xuIiwiaW1wb3J0IHsgQ2hlc3Nib2FyZCB9IGZyb20gXCIuL2dyYXBoX2NoZXNzYm9hcmQuanNcIjtcblxuY29uc3QgY2hlc3Nib2FyZCA9IG5ldyBDaGVzc2JvYXJkKCk7XG5cbmZ1bmN0aW9uIHNob3J0ZXN0UGF0aChbc3RhcnRSb3csIHN0YXJ0Q29sdW1uXSwgW2VuZFJvdywgZW5kQ29sdW1uXSkge1xuICBjb25zdCBzdGFydE5vZGUgPSBjaGVzc2JvYXJkLmdldENoZXNzYm9hcmROb2RlKHN0YXJ0Um93LCBzdGFydENvbHVtbik7XG4gIGNvbnN0IGVuZE5vZGUgPSBjaGVzc2JvYXJkLmdldENoZXNzYm9hcmROb2RlKGVuZFJvdywgZW5kQ29sdW1uKTtcblxuICAvLyBSZXNldCBjaGVzc2JvYXJkIG5vZGUgdmlzaXRlZCBhbmQgcHJldmlvdXMgYXR0cmlidXRlc1xuICBjaGVzc2JvYXJkLnJlc2V0Tm9kZXNQcmV2aW91cygpO1xuICBjaGVzc2JvYXJkLnJlc2V0Tm9kZXNWaXNpdGVkKCk7XG5cbiAgLy8gQ3JlYXRlIHF1ZXVlXG4gIGxldCBxdWV1ZSA9IFtdO1xuXG4gIC8vIFZpc2l0IGFuZCBhZGQgdGhlIHN0YXJ0IG5vZGUgdG8gdGhlIHF1ZXVlXG4gIHN0YXJ0Tm9kZS52aXNpdGVkID0gdHJ1ZTtcbiAgcXVldWUucHVzaChzdGFydE5vZGUpO1xuXG4gIC8vIEJGUyB1bnRpbCBxdWV1ZSBpcyBlbXB0eVxuICB3aGlsZUxvb3A6IHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgLy8gUG9wIGEgbm9kZSBmcm9tIHF1ZXVlIGZvciBzZWFyY2ggb3BlcmF0aW9uXG4gICAgbGV0IGN1cnJlbnROb2RlID0gcXVldWUuc2hpZnQoKTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBuZWlnaGJvcnMgbm9kZXMgdG8gZmluZCB0aGUgJ2VuZCcgbm9kZVxuICAgIGZvciAobGV0IG5laWdoYm91ck5vZGUgb2YgY3VycmVudE5vZGUubmVpZ2hib3Vycykge1xuICAgICAgaWYgKG5laWdoYm91ck5vZGUudmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gdmlzaXQgYW5kIGFkZCBuZWlnaGJvcnMgbm9kZXMgdG8gdGhlIHF1ZXVlXG4gICAgICAgIG5laWdoYm91ck5vZGUudmlzaXRlZCA9IHRydWU7XG4gICAgICAgIHF1ZXVlLnB1c2gobmVpZ2hib3VyTm9kZSk7XG4gICAgICAgIC8vIHVwZGF0ZSBpdHMgcHJlY2VkaW5nIG5vZGVcbiAgICAgICAgbmVpZ2hib3VyTm9kZS5wcmV2aW91cyA9IGN1cnJlbnROb2RlO1xuICAgICAgICAvLyBzdG9wIEJGUyBpZiB0aGUgdmlzaXRlZCBub2RlIGlzIHRoZSBlbmQgbm9kZVxuICAgICAgICBpZiAobmVpZ2hib3VyTm9kZSA9PT0gZW5kTm9kZSkge1xuICAgICAgICAgIC8vIHF1ZXVlID0gW107XG4gICAgICAgICAgYnJlYWsgd2hpbGVMb29wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gdHJhY2UgdGhlIHJvdXRlIHVzaW5nIHByZXZpb3VzIG5vZGVzXG4gIGxldCBjdXJyZW50Tm9kZSA9IGVuZE5vZGU7XG4gIGNvbnN0IHJvdXRlID0gW107XG5cbiAgLy8gc3RhcnQgbm9kZSBoYXMgbm8gcHJlY2VkaW5nIG5vZGVcbiAgLy8gc28gbG9vcCB1bnRpbCBub2RlLT5wcmV2aW91cyBpcyBudWxsXG4gIHdoaWxlIChjdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHJvdXRlLnB1c2goY3VycmVudE5vZGUuaWQpO1xuICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucHJldmlvdXM7XG4gIH1cbiAgLy8gcmV2ZXJzZSB0aGUgcm91dGUgYnJpbmcgc3RhcnQgdG8gdGhlIGZyb250XG4gIHJvdXRlLnJldmVyc2UoKTtcbiAgLy8gb3V0cHV0IHJvdXRlXG5cbiAgcmV0dXJuIHJvdXRlO1xufVxuXG5leHBvcnQgeyBzaG9ydGVzdFBhdGggfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgZ2l0aHViSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2dpdGh1Yl9sb2dvLnBuZ1wiO1xuaW1wb3J0IHN0YXJ0aW5nS25pZ2h0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2tuaWdodC1nb2xkLnBuZ1wiO1xuaW1wb3J0IHRhcmdldEtuaWdodEltYWdlIGZyb20gXCIuL2ltYWdlcy9rbmlnaHQtZ3JlZW4ucG5nXCI7XG5pbXBvcnQgeyBzaG9ydGVzdFBhdGggfSBmcm9tIFwiLi9rbmlnaHRzX3RyYXZhaWxzX2FsZ29yaXRobS5qc1wiO1xuXG5sZXQgZHJhZ2dlZDtcblxuLy8gQ3JlYXRlIGhlYWRlciBlbGVtZW50XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5oZWFkZXIudGV4dENvbnRlbnQgPSBcIktuaWdodHMgVHJhdmFpbHNcIjtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuLy8gQ3JlYXRlIGNoZXNzYm9hcmQgZGl2IGVsZW1lbnRcbmNvbnN0IGNoZXNzYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY2hlc3Nib2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiY2hlc3Nib2FyZFwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2hlc3Nib2FyZERpdik7XG5cbi8vIENyZWF0ZSBjaGVzc2JvYXJkIHNxdWFyZXNcbmNyZWF0ZUNoZXNzYm9hcmQoKTtcblxuLy8gQ3JlYXRlIGludGVyYWN0aXZlIGtuaWdodCBwaWVjZXNcbmNvbnN0IG1vdmFibGVTdGFydGluZ0tuaWdodEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5tb3ZhYmxlU3RhcnRpbmdLbmlnaHRJbWcuY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcbm1vdmFibGVTdGFydGluZ0tuaWdodEltZy5jbGFzc0xpc3QuYWRkKFwic3RhcnRcIik7XG5tb3ZhYmxlU3RhcnRpbmdLbmlnaHRJbWcuZHJhZ2dhYmxlID0gdHJ1ZTtcbm1vdmFibGVTdGFydGluZ0tuaWdodEltZy5zcmMgPSBzdGFydGluZ0tuaWdodEltYWdlO1xubW92YWJsZVN0YXJ0aW5nS25pZ2h0SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwga25pZ2h0RHJhZ1N0YXJ0KTtcbm1vdmFibGVTdGFydGluZ0tuaWdodEltZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBrbmlnaHREcmFnU3RhcnQpO1xuY29uc3QgbW92YWJsZVRhcmdldEtuaWdodEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5tb3ZhYmxlVGFyZ2V0S25pZ2h0SW1nLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2FibGVcIik7XG5tb3ZhYmxlVGFyZ2V0S25pZ2h0SW1nLmNsYXNzTGlzdC5hZGQoXCJ0YXJnZXRcIik7XG5tb3ZhYmxlVGFyZ2V0S25pZ2h0SW1nLmRyYWdnYWJsZSA9IHRydWU7XG5tb3ZhYmxlVGFyZ2V0S25pZ2h0SW1nLnNyYyA9IHRhcmdldEtuaWdodEltYWdlO1xubW92YWJsZVRhcmdldEtuaWdodEltZy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGtuaWdodERyYWdTdGFydCk7XG5cbi8vIFBsYWNlIGluaXRpYWwga25pZ2h0IHBpZWNlc1xucGxhY2VLbmlnaHQobW92YWJsZVN0YXJ0aW5nS25pZ2h0SW1nLCA0LCA0KTtcbnBsYWNlS25pZ2h0KG1vdmFibGVUYXJnZXRLbmlnaHRJbWcsIDYsIDUpO1xuXG4vLyBDcmVhdGUgbW92ZXMgZGl2IGVsZW1lbnRcbmNvbnN0IG1vdmVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1vdmVzRGl2LmNsYXNzTGlzdC5hZGQoXCJtb3Zlc1wiKTtcbmNvbnN0IG1vdmVzVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tb3Zlc1RleHREaXYuY2xhc3NMaXN0LmFkZChcIm1vdmVzLXRleHRcIik7XG5tb3Zlc1RleHREaXYudGV4dENvbnRlbnQgPSBcIlNob3J0ZXN0IHBhdGggbnVtYmVyIG9mIG1vdmVzOiBcIjtcbmNvbnN0IG1vdmVzTnVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1vdmVzTnVtYmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJtb3Zlcy1udW1iZXJcIik7XG5tb3Zlc051bWJlckRpdi50ZXh0Q29udGVudCA9IFwiMVwiO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb3Zlc0Rpdik7XG5tb3Zlc0Rpdi5hcHBlbmRDaGlsZChtb3Zlc1RleHREaXYpO1xubW92ZXNEaXYuYXBwZW5kQ2hpbGQobW92ZXNOdW1iZXJEaXYpO1xuXG4vLyBDcmVhdGUgaW5zdHJ1Y3Rpb25zIGRpdiBlbGVtZW50XG5jb25zdCBpbnN0cnVjdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaW5zdHJ1Y3Rpb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJpbnN0cnVjdGlvbnNcIik7XG5pbnN0cnVjdGlvbnNEaXYudGV4dENvbnRlbnQgPVxuICBcIlVzZSB0aGUgbW91c2UgdG8gZHJhZyB0aGUga25pZ2h0cyB0byB0aGVpciBzdGFydGluZyBhbmQgdGFyZ2V0IHBvc2l0aW9uc1wiO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnNEaXYpO1xuXG4vLyBDcmVhdGUgbGVnZW5kIGRpdiBlbGVtZW50XG5jb25zdCBsZWdlbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGVnZW5kRGl2LmNsYXNzTGlzdC5hZGQoXCJsZWdlbmRcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxlZ2VuZERpdik7XG5cbi8vIENyZWF0ZSBsZWdlbmQgY29udGVudFxuY29uc3Qgc3RhcnRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGVnZW5kRGl2LmFwcGVuZENoaWxkKHN0YXJ0aW5nRGl2KTtcbmNvbnN0IHN0YXJ0aW5nSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbnN0YXJ0aW5nSW1nLnNyYyA9IHN0YXJ0aW5nS25pZ2h0SW1hZ2U7XG5zdGFydGluZ0Rpdi5hcHBlbmRDaGlsZChzdGFydGluZ0ltZyk7XG5jb25zdCBzdGFydGluZ1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnN0YXJ0aW5nUC50ZXh0Q29udGVudCA9IFwiU3RhcnRpbmcgS25pZ2h0XCI7XG5zdGFydGluZ0Rpdi5hcHBlbmRDaGlsZChzdGFydGluZ1ApO1xuY29uc3QgdGFyZ2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxlZ2VuZERpdi5hcHBlbmRDaGlsZCh0YXJnZXREaXYpO1xuY29uc3QgdGFyZ2V0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbnRhcmdldEltZy5zcmMgPSB0YXJnZXRLbmlnaHRJbWFnZTtcbnRhcmdldERpdi5hcHBlbmRDaGlsZCh0YXJnZXRJbWcpO1xuY29uc3QgdGFyZ2V0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xudGFyZ2V0UC50ZXh0Q29udGVudCA9IFwiVGFyZ2V0IEtuaWdodFwiO1xudGFyZ2V0RGl2LmFwcGVuZENoaWxkKHRhcmdldFApO1xuXG4vLyBDcmVhdGUgZm9vdGVyIGVsZW1lbnRcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5mb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuLy8gRm9vdGVyIHRleHQgZWxlbWVudFxuY29uc3QgZm9vdGVyVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5mb290ZXJUZXh0RGl2LnRleHRDb250ZW50ID0gXCJUaGUgT2RpbiBQcm9qZWN0IC0gam9lbWF0dGFyXCI7XG5mb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dERpdik7XG5cbi8vIEZvb3RlciBhIGVsZW1lbnRcbmNvbnN0IGZvb3RlckEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbmZvb3RlckEuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvZW1hdHRhclwiO1xuZm9vdGVyQS50YXJnZXQgPSBcIl9ibGFua1wiO1xuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckEpO1xuXG4vLyBGb290ZXIgaW1nIGVsZW1lbnRcbmNvbnN0IGZvb3RlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5mb290ZXJJbWcuc3JjID0gZ2l0aHViSW1hZ2U7XG5mb290ZXJBLmFwcGVuZENoaWxkKGZvb3RlckltZyk7XG5cbi8vIEZvb3RlciBhMiBlbGVtZW50XG5jb25zdCBmb290ZXJBMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuZm9vdGVyQTIuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMva25pZ2h0XCI7XG5mb290ZXJBMi50aXRsZSA9IFwia25pZ2h0IGljb25zXCI7XG5mb290ZXJBMi50ZXh0Q29udGVudCA9IFwiS25pZ2h0IGljb25zIGJ5IEJaWlJJTkNBTlRBVElPTlwiO1xuZm9vdGVyQTIudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJBMik7XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZS9jbGVhciBjaGVzc2JvYXJkXG5mdW5jdGlvbiBjcmVhdGVDaGVzc2JvYXJkKCkge1xuICBjaGVzc2JvYXJkRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgbGV0IGsgPSAwO1xuICBmb3IgKGxldCBpID0gODsgaSA+PSAxOyBpIC09IDEpIHtcbiAgICAvLyBDcmVhdGUgcm93IGRpdlxuICAgIGNvbnN0IG5ld0NoZXNzYm9hcmRSb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0NoZXNzYm9hcmRSb3dEaXYuY2xhc3NMaXN0LmFkZChcImNoZXNzYm9hcmQtcm93XCIpO1xuICAgIGNoZXNzYm9hcmREaXYuYXBwZW5kQ2hpbGQobmV3Q2hlc3Nib2FyZFJvd0Rpdik7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gODsgaiArPSAxKSB7XG4gICAgICAvLyBDcmVhdGUgc3F1YXJlIGRpdlxuICAgICAgY29uc3QgbmV3Q2hlc3Nib2FyZFNxdWFyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdDaGVzc2JvYXJkU3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICBuZXdDaGVzc2JvYXJkU3F1YXJlRGl2LmRhdGFzZXQucm93ID0gaTtcbiAgICAgIG5ld0NoZXNzYm9hcmRTcXVhcmVEaXYuZGF0YXNldC5jb2x1bW4gPSBqO1xuICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBEUkFHT1ZFUiBldmVudFxuICAgICAgbmV3Q2hlc3Nib2FyZFNxdWFyZURpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB0byBhbGxvdyBkcm9wXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcbiAgICAgIG5ld0NoZXNzYm9hcmRTcXVhcmVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwga25pZ2h0RHJvcCk7XG4gICAgICBpZiAoayAlIDIgPT09IDApIHtcbiAgICAgICAgbmV3Q2hlc3Nib2FyZFNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwid2hpdGVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdDaGVzc2JvYXJkU3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoXCJibGFja1wiKTtcbiAgICAgIH1cbiAgICAgIGsgKz0gMTtcbiAgICAgIG5ld0NoZXNzYm9hcmRSb3dEaXYuYXBwZW5kQ2hpbGQobmV3Q2hlc3Nib2FyZFNxdWFyZURpdik7XG4gICAgfVxuICAgIGsgKz0gMTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBzZWxlY3QgYSBjaGVzc2JvYXJkIHNxdWFyZSBkaXYgZWxlbWVudFxuZnVuY3Rpb24gZ2V0Q2hlc3Nib2FyZFNxdWFyZURpdihyb3csIGNvbHVtbikge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYCk7XG59XG4vLyBGdW5jdGlvbiB0byBwbGFjZSBrbmlnaHRwaWVjZVxuZnVuY3Rpb24gcGxhY2VLbmlnaHQoa25pZ2h0LCByb3csIGNvbHVtbikge1xuICBnZXRDaGVzc2JvYXJkU3F1YXJlRGl2KHJvdywgY29sdW1uKS5hcHBlbmRDaGlsZChrbmlnaHQpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjbGVhciBjaGVzc2JvYXJkIGZyb20gZXZlcnl0aGluZyBleGNlcHQga25pZ2h0c1xuZnVuY3Rpb24gY2xlYXJDaGVzc2JvYXJkKCkge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVcIik7XG4gIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzKSB7XG4gICAgaWYgKFxuICAgICAgc3F1YXJlLmhhc0NoaWxkTm9kZXMoKSAmJlxuICAgICAgIXNxdWFyZS5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImRyYWdnYWJsZVwiKVxuICAgICkge1xuICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gZm9yIGtuaWdodCBlbGVtZW50IGRyYWcgc3RhcnQgZXZlbnRcbmZ1bmN0aW9uIGtuaWdodERyYWdTdGFydChldmVudCkge1xuICAvLyBzdG9yZSBhIHJlZi4gb24gdGhlIGRyYWdnZWQgZWxlbVxuICBkcmFnZ2VkID0gZXZlbnQudGFyZ2V0O1xuICBkcmFnZ2VkLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgY2xlYXJDaGVzc2JvYXJkKCk7XG59XG5cbi8vIEZ1bmN0aW9uIGZvciBrbmlnaHQgZWxlbWVudCBkcm9wIGV2ZW50XG5mdW5jdGlvbiBrbmlnaHREcm9wKGV2ZW50KSB7XG4gIGRyYWdnZWQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpO1xuICAvLyBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIChvcGVuIGFzIGxpbmsgZm9yIHNvbWUgZWxlbWVudHMpXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIG1vdmUgZHJhZ2dlZCBlbGVtZW50IHRvIHRoZSBzZWxlY3RlZCBkcm9wIHRhcmdldFxuICBpZiAoXG4gICAgIWV2ZW50LnRhcmdldC5oYXNDaGlsZE5vZGVzKCkgJiZcbiAgICAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRyYWdnYWJsZVwiKVxuICApIHtcbiAgICBkcmFnZ2VkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZCk7XG4gICAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdnZWQpO1xuICAgIGRpc3BsYXlNb3ZlcygpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyQ2hlc3Nib2FyZCgpO1xuICAgIGRpc3BsYXlNb3ZlcygpO1xuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZldGNoIHN0YXJ0IGtuaWdodCBjb29yZGluYXRlc1xuZnVuY3Rpb24gZ2V0U3RhcnRLbmlnaHRzTG9jYXRpb24oKSB7XG4gIGNvbnN0IHN0YXJ0S25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmFnZ2FibGUuc3RhcnRcIikucGFyZW50Tm9kZTtcbiAgcmV0dXJuIFtOdW1iZXIoc3RhcnRLbmlnaHQuZGF0YXNldC5yb3cpLCBOdW1iZXIoc3RhcnRLbmlnaHQuZGF0YXNldC5jb2x1bW4pXTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmV0Y2ggdGFyZ2V0IGtuaWdodCBjb29yZGluYXRlc1xuZnVuY3Rpb24gZ2V0VGFyZ2V0S25pZ2h0c0xvY2F0aW9uKCkge1xuICBjb25zdCB0YXJnZXRLbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnYWJsZS50YXJnZXRcIikucGFyZW50Tm9kZTtcbiAgcmV0dXJuIFtcbiAgICBOdW1iZXIodGFyZ2V0S25pZ2h0LmRhdGFzZXQucm93KSxcbiAgICBOdW1iZXIodGFyZ2V0S25pZ2h0LmRhdGFzZXQuY29sdW1uKSxcbiAgXTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZWRpdCB0aGUgcGF0aCBzcXVhcmUgZGl2c1xuLy8gRWFjaCBzcXVhcmUgdGhhdCByZXByZXNlbnQgYW4gaW50ZXJtZWRpYXRlIGtuaWdodCBtb3ZlXG5mdW5jdGlvbiBtb2RpZnlTcXVhcmVEaXYoc3F1YXJlRGl2LCBtb3ZlKSB7XG4gIGNvbnN0IG1vdmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb3ZlRGl2LmNsYXNzTGlzdC5hZGQoXCJtb3ZlXCIpO1xuICBtb3ZlRGl2LnRleHRDb250ZW50ID0gbW92ZTtcbiAgc3F1YXJlRGl2LmFwcGVuZENoaWxkKG1vdmVEaXYpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBwZXJmb3JtIHRoZSBzaG9ydGVzdCBwYXRoIHJlc3VsdCBET00gbWFuaXB1bGF0aW9uc1xuZnVuY3Rpb24gZGlzcGxheU1vdmVzKCkge1xuICBjb25zdCBwYXRoQXJyYXkgPSBzaG9ydGVzdFBhdGgoXG4gICAgZ2V0U3RhcnRLbmlnaHRzTG9jYXRpb24oKSxcbiAgICBnZXRUYXJnZXRLbmlnaHRzTG9jYXRpb24oKVxuICApO1xuICBpZiAocGF0aEFycmF5Lmxlbmd0aCA9PT0gMikge1xuICAgIG1vdmVzTnVtYmVyRGl2LnRleHRDb250ZW50ID0gXCIxXCI7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoQXJyYXkubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRTcXVhcmVEaXYgPSBnZXRDaGVzc2JvYXJkU3F1YXJlRGl2KFxuICAgICAgICBwYXRoQXJyYXlbaV1bMF0sXG4gICAgICAgIHBhdGhBcnJheVtpXVsxXVxuICAgICAgKTtcbiAgICAgIG1vZGlmeVNxdWFyZURpdihzZWxlY3RlZFNxdWFyZURpdiwgaSk7XG4gICAgICBtb3Zlc051bWJlckRpdi50ZXh0Q29udGVudCA9IHBhdGhBcnJheS5sZW5ndGggLSAxO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9