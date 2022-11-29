/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./static/fonts/stratosskyengweb-regular.woff2 */ "./static/fonts/stratosskyengweb-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./static/fonts/stratosskyengweb-regular.woff */ "./static/fonts/stratosskyengweb-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  /* stylelint-disable-next-line font-family-name-quotes */\n  font-family: \"StratosSkyeng\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background: #004980;\n  display: flex;\n  align-items: center;\n  height: 100vh;\n  box-sizing: border-box;\n  justify-content: center;\n  font-family: \"StratosSkyeng\", sans-serif;\n  font-weight: 400;\n  text-align: center;\n}\n\n/* ЭКРАН ВЫБОРА УРОВНЯ */\n\n.choose-level-page {\n  width: 30vw;\n  height: 60vh;\n  background: #c2f5ff;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n}\n.choose-level-page_hidden {\n  display: none;\n}\n\n.choose-level-page__field {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.choose-level-page__title {\n  color: #004980;\n  font-size: 40px;\n  line-height: 48px;\n}\n.choose-level-page__buttons {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n}\n.choose-level-page__button {\n  cursor: pointer;\n  width: 6vw;\n  height: 6vw;\n  background: #fff;\n  border-radius: 12px;\n  color: #0080c1;\n  font-family: \"StratosSkyeng\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n  border: none;\n}\n\n.choose-level-page__button:focus {\n  border: 3px solid #013e6d;\n}\n\n.choose-level-page__start-button {\n  cursor: pointer;\n  background: #7ac100;\n  border-radius: 12px;\n  color: #fff;\n  font-family: \"StratosSkyeng\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  width: 15vw;\n  border: none;\n  padding: 1vh;\n}\n\n.choose-level-page__start-button:hover {\n  background: #659f02;\n  transition: all 0.3s;\n}\n\n/* ИГРОВОЕ ПОЛЕ */\n\n.card-field__display-area {\n  display: flex;\n  position: fixed;\n  top: 5vh;\n  align-items: center;\n  width: 60vw;\n  justify-content: space-between;\n}\n\n.card-field__again-button {\n  width: 246px;\n  height: 50px;\n  background: #7ac100;\n  border-radius: 12px;\n  color: #fff;\n  font-family: \"StratosSkyeng\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  cursor: pointer;\n}\n.card-field__again-button:hover {\n  background: #659f02;\n  transition: all 0.3s;\n}\n.card-field__timer {\n  position: relative;\n  font-size: 64px;\n  line-height: 72px;\n  color: #fff;\n}\n.card-field__timer::after {\n  content: \"min\";\n  font-size: 16px;\n  line-height: 32px;\n  position: absolute;\n  left: 39px;\n  top: -20px;\n}\n.card-field__timer::before{\n  content: \"sek\";\n  font-size: 16px;\n  line-height: 32px;\n  position: absolute; \n  right: 5px;\n  top: -20px;\n}\n.card-field__cards,\n.card-field__cards-back {\n  position: fixed;\n}\n.card-field {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card-field__cards,\n.card-field__cards-back {\n  margin-top: 10vh;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 3vw;\n}\n.card-field__card_hidden {\n  opacity: 0;\n}\n.card-field__card_in-couple {\n  pointer-events: none;\n}\n.card-field__card:hover {\n  cursor: pointer;\n  scale: 1.03;\n  transition: all 0.2s;\n}\n.card-field_hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA;EACE,wDAAwD;EACxD,4BAA4B;EAC5B;0DACoE;AACtE;AACA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,wCAAwC;EACxC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,wBAAwB;;AAExB;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;AAC/B;AACA;EACE,eAAe;EACf,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;EACd,wCAAwC;EACxC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,4BAA4B;EAC5B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,mBAAmB;EACnB,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,4BAA4B;EAC5B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,WAAW;AACb;AACA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,UAAU;AACZ;AACA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,UAAU;AACZ;AACA;;EAEE,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;;EAEE,gBAAgB;EAChB,aAAa;EACb,qCAAqC;EACrC,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,UAAU;AACZ;AACA;EACE,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,WAAW;EACX,oBAAoB;AACtB;AACA;EACE,aAAa;AACf","sourcesContent":["@font-face {\n  /* stylelint-disable-next-line font-family-name-quotes */\n  font-family: \"StratosSkyeng\";\n  src: url(\"./static/fonts/stratosskyengweb-regular.woff2\") format(\"woff2\"),\n    url(\"./static/fonts/stratosskyengweb-regular.woff\") format(\"woff\");\n}\n* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background: #004980;\n  display: flex;\n  align-items: center;\n  height: 100vh;\n  box-sizing: border-box;\n  justify-content: center;\n  font-family: \"StratosSkyeng\", sans-serif;\n  font-weight: 400;\n  text-align: center;\n}\n\n/* ЭКРАН ВЫБОРА УРОВНЯ */\n\n.choose-level-page {\n  width: 30vw;\n  height: 60vh;\n  background: #c2f5ff;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n}\n.choose-level-page_hidden {\n  display: none;\n}\n\n.choose-level-page__field {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.choose-level-page__title {\n  color: #004980;\n  font-size: 40px;\n  line-height: 48px;\n}\n.choose-level-page__buttons {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n}\n.choose-level-page__button {\n  cursor: pointer;\n  width: 6vw;\n  height: 6vw;\n  background: #fff;\n  border-radius: 12px;\n  color: #0080c1;\n  font-family: \"StratosSkyeng\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n  border: none;\n}\n\n.choose-level-page__button:focus {\n  border: 3px solid #013e6d;\n}\n\n.choose-level-page__start-button {\n  cursor: pointer;\n  background: #7ac100;\n  border-radius: 12px;\n  color: #fff;\n  font-family: \"StratosSkyeng\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  width: 15vw;\n  border: none;\n  padding: 1vh;\n}\n\n.choose-level-page__start-button:hover {\n  background: #659f02;\n  transition: all 0.3s;\n}\n\n/* ИГРОВОЕ ПОЛЕ */\n\n.card-field__display-area {\n  display: flex;\n  position: fixed;\n  top: 5vh;\n  align-items: center;\n  width: 60vw;\n  justify-content: space-between;\n}\n\n.card-field__again-button {\n  width: 246px;\n  height: 50px;\n  background: #7ac100;\n  border-radius: 12px;\n  color: #fff;\n  font-family: \"StratosSkyeng\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  cursor: pointer;\n}\n.card-field__again-button:hover {\n  background: #659f02;\n  transition: all 0.3s;\n}\n.card-field__timer {\n  position: relative;\n  font-size: 64px;\n  line-height: 72px;\n  color: #fff;\n}\n.card-field__timer::after {\n  content: \"min\";\n  font-size: 16px;\n  line-height: 32px;\n  position: absolute;\n  left: 39px;\n  top: -20px;\n}\n.card-field__timer::before{\n  content: \"sek\";\n  font-size: 16px;\n  line-height: 32px;\n  position: absolute; \n  right: 5px;\n  top: -20px;\n}\n.card-field__cards,\n.card-field__cards-back {\n  position: fixed;\n}\n.card-field {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card-field__cards,\n.card-field__cards-back {\n  margin-top: 10vh;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 3vw;\n}\n.card-field__card_hidden {\n  opacity: 0;\n}\n.card-field__card_in-couple {\n  pointer-events: none;\n}\n.card-field__card:hover {\n  cursor: pointer;\n  scale: 1.03;\n  transition: all 0.2s;\n}\n.card-field_hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/application.ts":
/*!****************************!*\
  !*** ./src/application.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
window.application = {
    gameLevels: { 1: 6, 2: 12, 3: 18 },
    chosenCards: [],
    chosenCardsQuantity: 0,
    points: 0,
    gameResultFunction: function () {
        window.application.points ===
            window.application.chosenCardsQuantity / 2
            ? alert("Вы выиграли")
            : alert("Вы проиграли");
    },
};



/***/ }),

/***/ "./src/card-field.ts":
/*!***************************!*\
  !*** ./src/card-field.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateCardFieldFunction": () => (/* binding */ generateCardFieldFunction)
/* harmony export */ });
/* harmony import */ var _lib_template_engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/template-engine.js */ "./src/lib/template-engine.js");
/* harmony import */ var _card_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-src */ "./src/card-src.ts");

var cardField = document.querySelector(".card-field");

function generateCardFieldFunction(cardsQuantity) {
    cardField.classList.remove("card-field_hidden");
    createCardField(cardsQuantity);
    window.setTimeout(starGame, 5000);
}
var starGame = function () {
    hideCards();
    createCardBack(window.application.gameLevels[window.application.chosenLevel]);
    findACardCoupleFunction();
};
var createCardBack = function (cardsQuantity) {
    for (var index = 0; index < cardsQuantity; index++) {
        var cardBacks = document
            .querySelector(".card-field__cards-back");
        cardBacks.appendChild((0,_lib_template_engine_js__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(cardsTemplateFunction("static/img/Card_back.png", true)));
    }
};
var createCardField = function (cardsQuantity) {
    var newHalfRandomCardArray = [];
    for (var index = 0; index < cardsQuantity / 2; index++) {
        console.log(cardsQuantity);
        newHalfRandomCardArray.push(_card_src__WEBPACK_IMPORTED_MODULE_1__.cardsSrc[createRandomNumberForCard()]);
    }
    var newRandomCardArray = newHalfRandomCardArray.concat(newHalfRandomCardArray);
    shuffle(newRandomCardArray);
    for (var index = 0; index < newRandomCardArray.length; index++) {
        var cardSrc = newRandomCardArray[index];
        var cardFieldCards = cardField
            .querySelector(".card-field__cards");
        cardFieldCards.appendChild((0,_lib_template_engine_js__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(cardsTemplateFunction(cardSrc, false)));
    }
};
var createRandomNumberForCard = function () {
    var randomNumber;
    randomNumber = Math.round(Math.random() * 35);
    return randomNumber;
};
var shuffle = function (array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
};
var hideCards = function () {
    var renderedCardsArray = document.querySelectorAll(".card-field__card");
    renderedCardsArray.forEach(function (card) {
        card.classList.add("card-field__card_hidden");
    });
};
var cardsTemplateFunction = function (cardSrc, isCardBack) { return ({
    tag: "img",
    attrs: { src: cardSrc, id: cardSrc.slice(12, -4) },
    cls: [isCardBack ? "card-field__card-back" : "card-field__card"],
}); };
var findACardCoupleFunction = function () {
    window.application.gameStatus === "Game";
    var cardFieldCards = cardField
        .querySelector(".card-field__cards");
    cardFieldCards.addEventListener("click", function (event) {
        var target = event.target;
        if (!target.classList.contains("card-field__card")) {
            return;
        }
        window.application.chosenCardsQuantity =
            window.application.chosenCardsQuantity + 1;
        window.application.chosenCards.push(target.id);
        target.classList.remove("card-field__card_hidden");
        target.classList.add("card-field__card_in-couple");
        if (window.application.chosenCards[1] === undefined) {
            return;
        }
        if (window.application.chosenCards[0] === window.application.chosenCards[1]) {
            window.application.points = window.application.points + 1;
            console.log(window.application.points);
            window.application.chosenCards = [];
        }
        else {
            window.application.gameStatus === "Result", window.application.gameResultFunction();
        }
        if (window.application.chosenCardsQuantity ===
            window.application.gameLevels[window.application.chosenLevel]) {
            window.application.gameStatus === "Result", window.application.gameResultFunction();
        }
    });
};


/***/ }),

/***/ "./src/card-src.ts":
/*!*************************!*\
  !*** ./src/card-src.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardsSrc": () => (/* binding */ cardsSrc)
/* harmony export */ });
/* eslint-disable prettier/prettier */
var cardsSrc = [
    "/static/img/6_Clubs.png",
    "/static/img/7_Clubs.png",
    "/static/img/8_Clubs.png",
    "/static/img/9_Clubs.png",
    "/static/img/10_Clubs.png",
    "/static/img/J_Clubs.png",
    "/static/img/Q_Clubs.png",
    "/static/img/K_Clubs.png",
    "/static/img/A_Clubs.png",
    "/static/img/6_Diamonds.png",
    "/static/img/7_Diamonds.png",
    "/static/img/8_Diamonds.png",
    "/static/img/9_Diamonds.png",
    "/static/img/10_Diamonds.png",
    "/static/img/J_Diamonds.png",
    "/static/img/Q_Diamonds.png",
    "/static/img/K_Diamonds.png",
    "/static/img/A_Diamonds.png",
    "/static/img/6_Hearts.png",
    "/static/img/7_Hearts.png",
    "/static/img/8_Hearts.png",
    "/static/img/9_Hearts.png",
    "/static/img/10_Hearts.png",
    "/static/img/J_Hearts.png",
    "/static/img/Q_Hearts.png",
    "/static/img/A_Hearts.png",
    "/static/img/A_Hearts.png",
    "/static/img/6_Spades.png",
    "/static/img/7_Spades.png",
    "/static/img/8_Spades.png",
    "/static/img/9_Spades.png",
    "/static/img/10_Spades.png",
    "/static/img/J_Spades.png",
    "/static/img/Q_Spades.png",
    "/static/img/K_Spades.png",
    "/static/img/A_Spades.png",
];


/***/ }),

/***/ "./src/choose-level.ts":
/*!*****************************!*\
  !*** ./src/choose-level.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateChooseLevelField": () => (/* binding */ generateChooseLevelField)
/* harmony export */ });
/* harmony import */ var _lib_template_engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/template-engine.js */ "./src/lib/template-engine.js");
/* harmony import */ var _card_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-field */ "./src/card-field.ts");


var chooseLevelPage = document.querySelector(".choose-level-page");
var chooseLevelPageElement = chooseLevelPage;
function generateChooseLevelField() {
    window.application.gameStatus === "Choose level";
    renderChooseLevelField(chooseLevelPageElement);
    chooseLevelPageElement.addEventListener("click", chooseLevelFunctionToGenerateCardField);
}
var renderChooseLevelField = function (div) {
    div.appendChild((0,_lib_template_engine_js__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(chooseLevelTemplate));
};
var chooseLevelFunctionToGenerateCardField = function (event) {
    event.preventDefault();
    var target = event.target;
    if (target.classList.contains("choose-level-page__button")) {
        window.application.chosenLevel = Number(target.dataset.level);
    }
    if (target.classList.contains("choose-level-page__start-button") &&
        window.application.chosenLevel) {
        chooseLevelPageElement.classList.add("choose-level-page_hidden");
        (0,_card_field__WEBPACK_IMPORTED_MODULE_1__.generateCardFieldFunction)(window.application.gameLevels[window.application.chosenLevel]);
    }
};
var chooseLevelTemplate = {
    tag: "div",
    cls: "choose-level-page__field",
    content: [
        {
            tag: "p",
            cls: "choose-level-page__title",
            content: "Выбери сложность",
        },
        {
            tag: "div",
            cls: "choose-level-page__buttons",
            content: [
                {
                    tag: "button",
                    cls: ["choose-level-page__button", "choose-level-page__button_1"],
                    content: "1",
                    attrs: { "data-level": "1" },
                },
                {
                    tag: "button",
                    cls: ["choose-level-page__button", "choose-level-page__button_2"],
                    content: "2",
                    attrs: { "data-level": "2" },
                },
                {
                    tag: "button",
                    cls: ["choose-level-page__button", "choose-level-page__button_3"],
                    content: "3",
                    attrs: { "data-level": "3" },
                },
            ],
        },
        {
            tag: "button",
            cls: ["choose-level-page__start-button"],
            content: "Старт",
        },
    ],
};


/***/ }),

/***/ "./src/lib/template-engine.js":
/*!************************************!*\
  !*** ./src/lib/template-engine.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateEngine": () => (/* binding */ templateEngine)
/* harmony export */ });
function templateEngine(block) {
  if (block === undefined || block === null || block === false) {
    return document.createTextNode("");
  }

  if (typeof block === "string" || typeof block === "number") {
    return document.createTextNode(block);
  }

  const result = document.createElement(block.tag);

  if (Array.isArray(block)) {
    const fragment = document.createDocumentFragment();

    block.forEach((element) => {
      fragment.appendChild(templateEngine(element));
    });

    return fragment;
  }

  const content = templateEngine(block.content);

  if (block.cls) {
    const classes = [].concat(block.cls);
    classes.forEach((cls) => {
      result.classList.add(cls);
    });
  }

  if (block.attrs) {
    const keys = Object.keys(block.attrs);

    keys.forEach((key) => {
      result.setAttribute(key, block.attrs[key]);
    });
  }

  result.appendChild(content);

  return result;
}


/***/ }),

/***/ "./static/fonts/stratosskyengweb-regular.woff":
/*!****************************************************!*\
  !*** ./static/fonts/stratosskyengweb-regular.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7d99bd522cf2d77ce4a.woff";

/***/ }),

/***/ "./static/fonts/stratosskyengweb-regular.woff2":
/*!*****************************************************!*\
  !*** ./static/fonts/stratosskyengweb-regular.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce93393e831d32412096.woff2";

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
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_choose_level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/choose-level */ "./src/choose-level.ts");
/* harmony import */ var _src_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/application */ "./src/application.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* eslint-disable prettier/prettier */



(0,_src_choose_level__WEBPACK_IMPORTED_MODULE_0__.generateChooseLevelField)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map