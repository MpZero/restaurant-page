/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/WorkSans-VariableFont_wght.ttf */ \"./src/resources/WorkSans-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/WorkSans-Italic-VariableFont_wght.ttf */ \"./src/resources/WorkSans-Italic-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n\\n  font-family: 'Work Sans';\\n\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('ttf'),\\n\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('ttf');\\n\\n  font-weight: 500;\\n\\n  font-style: normal;\\n\\n}\\n\\n\\n\\nhtml {\\n  box-sizing: border-box;\\n}\\n\\n*, *::before, *::after {\\n  box-sizing: inherit; \\n}\\n\\nbody {\\n  margin: 0;\\n}\\n\\n\\n#content {\\n  display: grid;\\n  grid-template-rows: 0.1fr 2fr 0.1fr;\\n\\n  font-family: 'Roboto', sans-serif;\\n  font-family: 'Work Sans', sans-serif;\\n  line-height: 1.6;\\n}\\n\\n\\n\\n/* HEADER */\\n#nav {\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  \\n}\\n\\n#logo {\\n  display: flex;\\n  align-items: center;\\n  flex: 1;\\n  margin-left: 25px;\\n  border-right: 1px solid black;\\n  min-width: 500px;\\n  max-width: 100px;\\n}\\n\\n#logo > img {\\n  cursor: pointer;\\n\\n}\\n\\n#logo > h1 {\\n  padding: 30px;\\n  font-size: xx-large;\\n  cursor: pointer;\\n\\n}\\n\\nul {\\n  display: flex;\\n  align-items: center;\\n  flex: 1;\\n  margin: 0px;\\n}\\n\\nli {\\n  list-style: none;\\n  flex: 1;\\n  padding: 103px;\\n  text-align: center;\\n  font-size: large;\\n  font-weight: bold;\\n  border-bottom: 8px transparent inset;\\n\\n}\\n\\nli:hover {\\n  border-bottom: 8px black inset;\\n  cursor: pointer;\\n}\\n/* HEADER */\\n\\n/* HOME PAGE */\\n#main {\\n  background-color: black;\\n  color: white;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  min-height: 470px;\\n}\\n\\n#main-wrapper-left {\\n  display: grid;\\n  grid-template-rows: 2fr 1fr;\\n  grid-template-columns: 1fr;\\n  min-width: 400px;\\n  max-width: 500px;\\n  row-gap: 10px;\\n}\\n\\n#background-circle {\\n  background-color: burlywood;\\n  width: 270px;\\n  height: 270px;\\n  border-radius: 50%;\\n  position: absolute;\\n  z-index: 0;\\n   top: 320px;\\n  left: 200px; \\n\\n}\\n\\n.coffee-pack-png {\\n  height: 250px;\\n  position: absolute;\\n  left: 280px; \\n  top: 320px;\\n}\\n\\n.coffee-mug-png {\\n  height: 180px;\\n  position: absolute;\\n  left: 100px;\\n  top: 370px;\\n  grid-row: 1/2;\\n  \\n}\\n\\n#main-wrapper-right {\\n  text-align:center;\\n  margin: 20px;\\n  padding-right: 40px;\\n}\\n\\n.text-quote {\\n  margin: 0px;\\n  margin-top: 35px;\\n  margin-left: 80px;\\n  padding: 40px;\\n  grid-row: 2/3;\\n  z-index: 1;\\n  font-style: italic;\\n}\\n\\n.btn-learn-more {\\n  border: none;\\n  padding: 14px;\\n  border-radius: 25px;\\n  cursor: pointer;\\n  font-weight: bold;\\n}\\n/* HOME */\\n\\n\\n/* MENU PAGE */\\n  #menu-content {\\n    min-width: 100vw;\\n    background-color: black;\\n    color: white;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: repeat(6, auto);\\n    justify-content: center;\\n    align-items: center;\\n    text-align: center;\\n    align-self: end;\\n    justify-self: end;\\n    row-gap: 2rem;\\n  }\\n  \\n  #menu-content > div {\\n    padding: 40px;\\n    justify-self: center;\\n\\n  }\\n  #menu-content > div > img {\\n    max-height: 300px;\\n  }\\n\\n  #roasted-coffee,\\n  #chocolate {\\n    padding-right: 70px;\\n  }\\n/* MENU PAGE */\\n\\n\\n/* CONTACT PAGE */\\n#contact-content {\\n  background-color: black;\\n  display: grid;\\n  grid-template-columns: auto auto;\\n  color: white;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  gap: 2rem;\\n  padding: 0px 2rem;\\n  \\n}\\n\\n#contact-content > div {\\n    padding: 40px;\\n    max-width: 700px;\\n}\\n/* CONTACT PAGE */\\n\\n\\n/* FOOTER */\\n#footer-content{\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n#footer-content > p > a:link {\\n  color: black;\\n}\\n\\n#footer-content > p  {\\n  display: flex;\\njustify-content: space-around;\\nalign-items: center;\\nmin-width: 250px;\\n}\\n\\n#footer-content > p:nth-child(2) {\\nmin-width: 300px;\\n\\n}\\n\\n#footer-content > .first-p {\\n  min-width: 360px;\\n}\\n\\na:visited {\\n  color:cadetblue;\\n}\\n/* FOOTER */\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact-footer.js":
/*!*******************************!*\
  !*** ./src/contact-footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\n\n  const content = document.querySelector(\"#content\")\n\n  const footer = document.createElement(\"div\")\n  footer.setAttribute(\"id\", \"footer\")\n\n  content.appendChild(footer)\n\n  const footerContent = document.createElement(\"div\")\n  footerContent.setAttribute(\"id\", \"footer-content\")\n\n  footer.appendChild(footerContent)\n\n  function creditLeft() {\n    const p1 = document.createElement(\"p\")\n    const p2 = document.createElement(\"p\")\n    const a1 = document.createElement(\"a\")\n    const a2 = document.createElement(\"a\")\n\n    a1.innerText = \"Rosina Gavrilash\"\n    a2.innerText = \"Ouch!\"\n    a1.setAttribute(\"target\", \"_blank\")\n    a1.href = \"https://icons8.com/illustrations/author/HxMFjfKZdNq2\"\n    a2.setAttribute(\"target\", \"_blank\")\n    a2.href = \"https://icons8.com/illustrations\"\n\n    p2.innerText = \"from  \"\n    p1.innerText = \"Illustration by \"\n    p1.setAttribute(\"class\", \"first-p\")\n \n    footerContent.append(p1)\n    p1.append(a1, p2, a2)\n\n\n  }\n  creditLeft()\n\n  function creditRight() {\n    const p1 = document.createElement(\"p\")\n    const p2 = document.createElement(\"p\")\n    const a1 = document.createElement(\"a\")\n    const a2 = document.createElement(\"a\")\n\n    a1.setAttribute(\"target\", \"_blank\")\n    a2.setAttribute(\"target\", \"_blank\")\n    a1.innerText = \"Icons8\"\n    a2.innerText = \"Ouch!\"\n    a1.href = \"https://icons8.com/illustrations/author/zD2oqC8lLBBA\"\n    a2.href = \"https://icons8.com/illustrations\"\n\n    p1.innerText = \"Illustration by \"\n    p2.innerText = \"from \"\n\n    footerContent.append(p1)\n    p1.append(a1, p2, a2)\n\n  }\n\n  creditRight()\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact-footer.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _resources_group_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/group.png */ \"./src/resources/group.png\");\n/* harmony import */ var _resources_contact_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/contact.png */ \"./src/resources/contact.png\");\n\n\n\nfunction contact() {\nconst content = document.querySelector(\"#content\")\n\n  const contactContent = document.createElement(\"div\")\n  contactContent.setAttribute(\"id\", \"contact-content\")\n\n  content.appendChild(contactContent)\n\n\n  let div1 = document.createElement(\"div\")\n  let div2 = document.createElement(\"div\")\n  let div3 = document.createElement(\"div\")\n  let div4 = document.createElement(\"div\")\n\n  let img1 = document.createElement(\"img\")\n  img1.src = _resources_contact_png__WEBPACK_IMPORTED_MODULE_1__\n\n  let img2 = document.createElement(\"img\")\n  img2.src = _resources_group_png__WEBPACK_IMPORTED_MODULE_0__\n\n  contactContent.append(div1, div2, div3, div4)\n\n  div1.appendChild(img1)\n  div3.appendChild(img2)\n\n  \n  const title1 = document.createElement(\"h1\")\n  title1.innerText = \"Contact Us\"\n  \n\n  let p2 = document.createElement(\"p\")\n  p2.innerText = \"Buenos Aires, FakeStreet123.  Phone: 123-1234-1234\"\n  let p3 = document.createElement(\"p\")\n  p3.innerText = \"Medellín, FakeStreet123.  Phone: 123-1234-1234\"\n  let p4 = document.createElement(\"p\")\n  p4.innerText = \"Mexico D. F, FakeStreet123.  Phone: 123-1234-1234\" \n  let p5 = document.createElement(\"p\")\n  p5.innerText = \"Tokyo, FakeStreet123.  Phone: 123-1234-1234\" \n  let p6 = document.createElement(\"p\")\n  p6.innerText = \"New York, FakeStreet123.  Phone: 123-1234-1234\"\n  \n  div2.append(title1, p2, p3, p4, p5, p6)\n\n\n\n  const title2 = document.createElement(\"h2\")\n  title2.innerText = \"About Us\"\n\n  let p7 = document.createElement(\"p\")\n  p7.innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam quia ipsum nemo? Labore earum iusto facere? Explicabo eum, quaerat, ducimus tenetur dolore voluptatibus reprehenderit at commodi, similique tempora delectus \"\n\n  let p8 = document.createElement(\"p\")\n  p8.innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam quia ipsum nemo? Labore earum iusto facere? Explicabo eum, quaerat, ducimus tenetur dolore voluptatibus reprehenderit at commodi, similique tempora delectus \"\n\n  div4.append(title2, p7, p8)\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\n\n  const content = document.querySelector(\"#content\")\n\n  const footer = document.createElement(\"div\")\n  footer.setAttribute(\"id\", \"footer\")\n\n  content.appendChild(footer)\n\n  const footerContent = document.createElement(\"div\")\n  footerContent.setAttribute(\"id\", \"footer-content\")\n\n  footer.appendChild(footerContent)\n\n  function creditLeft() {\n    const p1 = document.createElement(\"p\")\n    const p2 = document.createElement(\"p\")\n    const a1 = document.createElement(\"a\")\n    const a2 = document.createElement(\"a\")\n\n    a1.innerText = \"Coffee Beans\"\n    a2.innerText = \"Icons8\"\n    a1.setAttribute(\"target\", \"_blank\")\n    a1.href = \"https://icons8.com/icon/0_t1ieKC4IKc/coffee-beans\"\n    a2.setAttribute(\"target\", \"_blank\")\n    a2.href = \"https://icons8.com\"\n\n    p2.innerText = \" icons by \"\n\n    footerContent.append(p1)\n    p1.append(a1, p2, a2)\n\n  }\n  creditLeft()\n\n  function creditRight() {\n    const p1 = document.createElement(\"p\")\n    const p2 = document.createElement(\"p\")\n    const a1 = document.createElement(\"a\")\n    const a2 = document.createElement(\"a\")\n\n    a1.setAttribute(\"target\", \"_blank\")\n    a2.setAttribute(\"target\", \"_blank\")\n    a1.innerText = \"Icons8\"\n    a2.innerText = \"Ouch!\"\n    a1.href = \"https://icons8.com/illustrations/author/zD2oqC8lLBBA\"\n    a2.href = \"https://icons8.com/illustrations\"\n\n    p1.innerText = \"Illustration by \"\n    p2.innerText = \"from \"\n\n    footerContent.append(p1)\n    p1.append(a1, p2, a2)\n\n  }\n\n  creditRight()\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _resources_beans_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/beans.png */ \"./src/resources/beans.png\");\n\n\nfunction header() {\n  const content = document.querySelector(\"#content\")\n\n  const header = document.createElement(\"div\")\n  header.setAttribute(\"id\", \"header\")\n  content.appendChild(header)\n\n  const nav = document.createElement(\"nav\")\n  nav.setAttribute(\"id\", \"nav\")\n  header.appendChild(nav)\n\n  const logo = document.createElement(\"div\")\n  logo.setAttribute(\"id\", \"logo\")\n  nav.appendChild(logo)\n\n  const img = document.createElement(\"img\")\n  img.src = _resources_beans_png__WEBPACK_IMPORTED_MODULE_0__\n  const h1 = document.createElement(\"h1\")\n  h1.innerText = \"KO-HI\"\n\n  logo.append(img, h1)\n\n  const ul = document.createElement(\"ul\")\n  nav.appendChild(ul)\n\n  let li1 = document.createElement(\"li\")\n  li1.setAttribute(\"id\", \"home\")\n  li1.innerText = \"HOME\"\n\n  let li2 = document.createElement(\"li\")\n  li2.setAttribute(\"id\", \"menu\")\n  li2.innerText = \"MENU\"\n\n  let li3 = document.createElement(\"li\")\n  li3.setAttribute(\"id\", \"contact\")\n  li3.innerText = \"CONTACT\"\n\n\n  ul.append(li1, li2, li3)\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _src_resources_coffee_pack_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/resources/coffee-pack.png */ \"./src/resources/coffee-pack.png\");\n/* harmony import */ var _resources_coffee_mug_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/coffee-mug.png */ \"./src/resources/coffee-mug.png\");\n\n\n\nfunction home() {\n  const content = document.querySelector(\"#content\")\n\n  const main = document.createElement(\"div\")\n  main.setAttribute(\"id\", \"main\")\n\n  content.appendChild(main)\n\n  const mainWrapperLeft = document.createElement(\"div\")\n  mainWrapperLeft.setAttribute(\"id\", \"main-wrapper-left\")\n\n  main.appendChild(mainWrapperLeft)\n\n  const backgroundCircle = document.createElement(\"div\")\n  backgroundCircle.setAttribute(\"id\", \"background-circle\")\n\n  const coffeePackImg = document.createElement(\"img\")\n  coffeePackImg.src = _src_resources_coffee_pack_png__WEBPACK_IMPORTED_MODULE_0__\n  coffeePackImg.setAttribute(\"class\", \"coffee-pack-png\")\n\n  const coffeeMugImg = document.createElement(\"img\")\n  coffeeMugImg.src = _resources_coffee_mug_png__WEBPACK_IMPORTED_MODULE_1__\n  coffeeMugImg.setAttribute(\"class\", \"coffee-mug-png\")\n\n  const textQuote = document.createElement(\"p\")\n  textQuote.innerText = '\"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\" -.Lorem'\n  textQuote.setAttribute(\"class\", \"text-quote\")\n\n  mainWrapperLeft.append(backgroundCircle, coffeePackImg, coffeeMugImg, textQuote)\n\n  const mainWrapperRight = document.createElement(\"div\")\n  mainWrapperRight.setAttribute(\"id\", \"main-wrapper-right\")\n\n  main.appendChild(mainWrapperRight)\n\n  const h1 = document.createElement(\"h1\")\n  h1.innerText = \"Welcome to KO-HI\"\n\n  const h2 = document.createElement(\"h2\")\n  h2.innerText = \"Where all your Coffee needs are meet\"\n\n  const p1 = document.createElement(\"p\")\n  p1.innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores sit, dicta id consectetur odio accusantium pariatur possimus, harum consequuntur blanditiis sint, quia voluptatum inventore quasi soluta earum doloribus doloremque!\"\n\n  const p2 = document.createElement(\"p\")\n  p2.innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum quasi iusto tenetur illum hic nulla! Nulla porro asperiores minus excepturi repudiandae enim nobis magnam, optio, tenetur dolorem illo nisi!\"\n\n  const btnLearnMore = document.createElement(\"button\")\n  btnLearnMore.setAttribute(\"class\", \"btn-learn-more\")\n  btnLearnMore.innerText = \"LEARN MORE\"\n\n  mainWrapperRight.append(h1, h2, p1, p2, btnLearnMore)\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _contact_footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-footer.js */ \"./src/contact-footer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\nlet currentPage = \"main\"\n\nfunction addEvents() {\n  const homeBtn = document.querySelector(\"#home\")\n  const menuBtn = document.querySelector(\"#menu\")\n  const contactBtn = document.querySelector(\"#contact\")\n\n  homeBtn.addEventListener(\"click\", renderHome)\n\n  menuBtn.addEventListener(\"click\", renderMenu)\n\n  contactBtn.addEventListener(\"click\", renderContact)\n\n}\n\n  addEvents()\n\n\nfunction renderHome() {\n\n  if(currentPage == \"main\") {\n    return\n  }\n\n  clearPage()\n\n  ;(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  ;(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  ;(0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n  addEvents()\n\n  currentPage = \"main\"\n\n}\n\n function renderMenu() {\n\n  if(currentPage == \"menu\") {\n    return\n  }\n\n\n  clearPage()\n\n  ;(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n  ;(0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n  addEvents()\n\n  currentPage = \"menu\"\n\n\n} \nfunction renderContact() {\n\n  if(currentPage == \"contact\") {\n    return\n  }\n\n  clearPage()\n\n  ;(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n  ;(0,_contact_footer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n  addEvents()\n\n  currentPage = \"contact\"\n\n\n}\n\n\nfunction clearPage() {\n\n  let content = document.querySelector(\"#content\")\n  \n  content.replaceChildren()\n  \n  \n}\n\n// let body = document.querySelector(\"body\")\n\n// let header = document.querySelector(\"#header\")\n// let main = document.querySelector(\"#main\")\n// let menuContent = document.querySelector(\"#menu-content\")\n// let contactContent = document.querySelector(\"#contact-content\")\n// let footer = document.querySelector(\"#footer\")\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _resources_coffee_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/coffee.png */ \"./src/resources/coffee.png\");\n/* harmony import */ var _resources_pancake_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/pancake.png */ \"./src/resources/pancake.png\");\n/* harmony import */ var _resources_donut_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/donut.png */ \"./src/resources/donut.png\");\n/* harmony import */ var _resources_cake_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/cake.png */ \"./src/resources/cake.png\");\n/* harmony import */ var _resources_chocolate_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/chocolate.png */ \"./src/resources/chocolate.png\");\n/* harmony import */ var _resources_roasted_coffee_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/roasted-coffee.png */ \"./src/resources/roasted-coffee.png\");\n\n\n\n\n\n\n\n\nfunction menu() {\n  const content = document.querySelector(\"#content\")\n\n  const menuContent = document.createElement(\"div\")\n  menuContent.setAttribute(\"id\", \"menu-content\")\n\n  content.appendChild(menuContent)\n\n\n  let div1 = document.createElement(\"div\")\n  let div2 = document.createElement(\"div\")\n  let div3 = document.createElement(\"div\")\n  let div4 = document.createElement(\"div\")\n  let div5 = document.createElement(\"div\")\n  let div6 = document.createElement(\"div\")\n  let div7 = document.createElement(\"div\")\n  let div8 = document.createElement(\"div\")\n  let div9 = document.createElement(\"div\")\n  let div10 = document.createElement(\"div\")\n  let div11 = document.createElement(\"div\")\n  let div12 = document.createElement(\"div\")\n\n  let img1 = document.createElement(\"img\")\n  let img2 = document.createElement(\"img\")\n  let img3 = document.createElement(\"img\")\n  let img4 = document.createElement(\"img\")\n  let img5 = document.createElement(\"img\")\n  let img6 = document.createElement(\"img\")\n\n  menuContent.append(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div12)\n\n  img1.src = _resources_coffee_png__WEBPACK_IMPORTED_MODULE_0__\n  img2.src = _resources_pancake_png__WEBPACK_IMPORTED_MODULE_1__\n  img3.src = _resources_donut_png__WEBPACK_IMPORTED_MODULE_2__\n  img4.src = _resources_cake_png__WEBPACK_IMPORTED_MODULE_3__\n  img5.src = _resources_chocolate_png__WEBPACK_IMPORTED_MODULE_4__\n  img6.src = _resources_roasted_coffee_png__WEBPACK_IMPORTED_MODULE_5__\n\n  div1.appendChild(img1)\n  div3.appendChild(img2)\n  div5.appendChild(img3)\n  div7.appendChild(img4)\n  div9.appendChild(img5)\n  div11.appendChild(img6)\n\n\n  let title1 = document.createElement(\"h1\")\n  let title2 = document.createElement(\"h2\")\n  let title3 = document.createElement(\"h2\")\n  let title4 = document.createElement(\"h2\")\n  let title5 = document.createElement(\"h2\")\n  let title6 = document.createElement(\"h2\")\n\n\n  let p1 = document.createElement(\"p\")\n  let p2 = document.createElement(\"p\")\n  let p3 = document.createElement(\"p\")\n  let p4 = document.createElement(\"p\")\n  let p5 = document.createElement(\"p\")\n  let p6 = document.createElement(\"p\")\n\n\n\n\n  title1.innerText = \"HOUSE COFFEE\"\n  title2.innerText = \"PANCAKES\"\n  title3.innerText = \"DONUTS\"\n  title4.innerText = \"CAKES\"\n  title5.innerText = \"CHOCOLATE\"\n  title6.innerText = \"ROASTED COFFEE\"\n\n  div2.append(title1, p1)\n  div4.append(title2, p2)\n  div6.append(title3, p3)\n  div8.append(title4, p4)\n  div10.append(title5, p5)\n  div12.append(title6, p6)\n\n  function fillParagraphs() {\n    const p = document.querySelectorAll(\"p\")\n\n    for (let i = 0; i < p.length; i++) {\n      p[i].innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam quia ipsum nemo? Labore earum iusto facere? Explicabo eum, quaerat, ducimus tenetur dolore voluptatibus reprehenderit at commodi, similique tempora delectus\"\n\n\n    }\n  }\n  fillParagraphs()\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/resources/WorkSans-Italic-VariableFont_wght.ttf":
/*!*************************************************************!*\
  !*** ./src/resources/WorkSans-Italic-VariableFont_wght.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"49fb6319f01c51a556f6.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/WorkSans-Italic-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/resources/WorkSans-VariableFont_wght.ttf":
/*!******************************************************!*\
  !*** ./src/resources/WorkSans-VariableFont_wght.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a334cdd18c435a867b49.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/WorkSans-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/resources/beans.png":
/*!*********************************!*\
  !*** ./src/resources/beans.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6198e34e6b664a582baf.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/beans.png?");

/***/ }),

/***/ "./src/resources/cake.png":
/*!********************************!*\
  !*** ./src/resources/cake.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd225c7b3fae45649807.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/cake.png?");

/***/ }),

/***/ "./src/resources/chocolate.png":
/*!*************************************!*\
  !*** ./src/resources/chocolate.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13ae05278aba8503015a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/chocolate.png?");

/***/ }),

/***/ "./src/resources/coffee-mug.png":
/*!**************************************!*\
  !*** ./src/resources/coffee-mug.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9925a8babdf28fd18060.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/coffee-mug.png?");

/***/ }),

/***/ "./src/resources/coffee-pack.png":
/*!***************************************!*\
  !*** ./src/resources/coffee-pack.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ff3a2031270e25d9078.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/coffee-pack.png?");

/***/ }),

/***/ "./src/resources/coffee.png":
/*!**********************************!*\
  !*** ./src/resources/coffee.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8225acf18e05b495bbb.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/coffee.png?");

/***/ }),

/***/ "./src/resources/contact.png":
/*!***********************************!*\
  !*** ./src/resources/contact.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6454025a2ad9820b322d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/contact.png?");

/***/ }),

/***/ "./src/resources/donut.png":
/*!*********************************!*\
  !*** ./src/resources/donut.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"40491e3791219cf6ce90.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/donut.png?");

/***/ }),

/***/ "./src/resources/group.png":
/*!*********************************!*\
  !*** ./src/resources/group.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07f61d50c19c1668b809.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/group.png?");

/***/ }),

/***/ "./src/resources/pancake.png":
/*!***********************************!*\
  !*** ./src/resources/pancake.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db69abd53b68471c1d44.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/pancake.png?");

/***/ }),

/***/ "./src/resources/roasted-coffee.png":
/*!******************************************!*\
  !*** ./src/resources/roasted-coffee.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aab6b14a1a8c2df79c0d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/resources/roasted-coffee.png?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;