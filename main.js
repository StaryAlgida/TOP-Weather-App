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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://rsms.me/inter/inter.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Inter\";\n}\n\n.hot {\n  color: #ff665c;\n}\n.warm {\n  color: #ffe55c;\n}\n.near-cold {\n  color: #90ff5c;\n}\n.cold {\n  color: #89c6ff;\n}\n.color-white {\n  color: white;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 100px repeat(3, 1fr);\n  gap: 50px;\n  /* background-color: grey; */\n  height: 100vh;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  background-color: aquamarine;\n  padding: 40px 100px;\n}\n\n#today-info {\n  display: grid;\n  grid-template-columns: 400px 1fr;\n  gap: 100px;\n  padding-left: 150px;\n  padding-right: 100px;\n}\n\n.bold {\n  font-weight: 900;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: #00000060;\n}\n\n#today-main-info {\n  display: flex;\n  background-color: #6bdcff;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n}\n\n#main-more-info {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 20px;\n\n  height: 130px;\n  background-color: #bff0ff;\n  align-content: space-around;\n\n  padding: 15px 20px 0 20px;\n  border-radius: 10px;\n}\n\n.more-info-section {\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n}\n\n#temp-img {\n  display: flex;\n  align-items: center;\n}\n\n.main-info-text {\n  font-size: 1.3rem;\n  font-weight: 900;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: #00000060;\n}\n\n/* .main-info-text:nth-child(-n + 4) {\n  margin-left: 35px;\n} */\n\n#today-hours-info {\n  display: grid;\n  grid-template-columns: repeat(25, 140px);\n  align-items: center;\n  gap: 30px;\n\n  padding-left: 20px;\n  padding-right: 20px;\n\n  overflow: hidden;\n  overflow-x: auto;\n  background-color: #6bdcff;\n  border-radius: 10px;\n}\n\n#today-hours-info::-webkit-scrollbar {\n  border: none;\n  width: 20px;\n}\n#today-hours-info::-webkit-scrollbar-thumb {\n  background-image: linear-gradient(to right, #bfff6b, #00ffdd);\n  border-radius: 10px;\n}\n\n.hour-el {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background-color: #bff0ff;\n  border-radius: 10px;\n\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  font-size: 1.3rem;\n  color: white;\n  font-weight: 900;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: #00000060;\n\n  transition-duration: 0.5s;\n}\n\n.hour-el:hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 24px 0px #0084ff;\n}\n\n#main-sunrise {\n  color: #ffdb5c;\n}\n\n#main-sunset {\n  color: #9cc4ff;\n}\n\n.bold {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.temp-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.temp-icon img {\n  margin-left: -10px;\n}\n\n.rain-snow-container {\n  display: flex;\n  gap: 10px;\n}\n\n.rain-snow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#extra-info {\n  padding-left: 150px;\n  padding-right: 100px;\n}\n\n#extra-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n\n  padding: 20px;\n\n  background-color: #0084ff9f;\n  border-radius: 10px;\n}\n\n#extra-contnet {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 30px;\n}\n\n#extra-contnet div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n\n  border-radius: 15px;\n\n  padding: 8px;\n\n  background-color: #aceeff;\n  font-weight: 900;\n  font-size: 1.2rem;\n  color: white;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: #00000060;\n}\n\n#extra-hour {\n  color: white;\n  font-size: 1.6rem;\n  font-weight: bold;\n  background-color: #aceeff;\n  padding: 5px;\n  border-radius: 10px;\n\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: #00000060;\n}\n\n#week-info {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.days-title {\n  display: grid;\n  grid-template-columns: repeat(5, 150px);\n  border-bottom: 1px solid grey;\n  /* justify-items: center; */\n}\n\n.days-title:nth-child(n + 3) {\n  justify-items: center;\n}\n\n.days-title-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#days-day {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  justify-content: center;\n}\n\n.day-container:first-child {\n  border-top: 1px solid grey;\n}\n\n.day-container {\n  display: grid;\n  grid-template-columns: repeat(5, 150px);\n  grid-auto-rows: 1fr;\n  align-items: center;\n  border-bottom: 1px solid grey;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: white;\n\n  background-color: black;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api_data_renders/extraInfo/extraInfoRender.ts":
/*!***********************************************************!*\
  !*** ./src/api_data_renders/extraInfo/extraInfoRender.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction extraInfoRender(data) {\n    const hour = document.getElementById(\"extra-hour\");\n    const feel = document.getElementById(\"extra-feel\");\n    const wind = document.getElementById(\"extra-wind\");\n    const windDegree = document.getElementById(\"extra-wind-degree\");\n    const windDir = document.getElementById(\"extra-wind-dir\");\n    const press = document.getElementById(\"extra-press\");\n    const precip = document.getElementById(\"extra-precip\");\n    const humid = document.getElementById(\"extra-humid\");\n    const cloud = document.getElementById(\"extra-cloud\");\n    const vis = document.getElementById(\"extra-vis\");\n    const uv = document.getElementById(\"extra-uv\");\n    if (hour &&\n        feel &&\n        wind &&\n        windDegree &&\n        windDir &&\n        press &&\n        precip &&\n        humid &&\n        cloud &&\n        vis &&\n        uv) {\n        hour.innerText = `${data.time.split(\" \")[1]}`;\n        feel.innerText = `${data.feelslike_c}°C`;\n        wind.innerText = `${data.wind_kph}kph`;\n        windDegree.innerText = `${data.wind_degree}`;\n        windDir.innerText = `${data.wind_dir}`;\n        press.innerText = `${data.pressure_mb}`;\n        precip.innerText = `${data.precip_mm}mm`;\n        humid.innerText = `${data.humidity}%`;\n        cloud.innerText = `${data.cloud}%`;\n        vis.innerText = `${data.vis_km}km`;\n        uv.innerText = `${data.uv}`;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extraInfoRender);\n\n\n//# sourceURL=webpack://top-weather-app/./src/api_data_renders/extraInfo/extraInfoRender.ts?");

/***/ }),

/***/ "./src/api_data_renders/today_info/hourElement.ts":
/*!********************************************************!*\
  !*** ./src/api_data_renders/today_info/hourElement.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _listeners_hourListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../listeners/hourListener */ \"./src/listeners/hourListener.ts\");\n\nfunction hourElement(dataHour) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"hour-el\");\n    const time = hour(dataHour.time.split(\" \")[1]);\n    const tempIcon = tempAndIcon(dataHour.temp_c, dataHour.condition.icon);\n    const chanceRainSnow = rainSnow(dataHour.chance_of_rain, dataHour.chance_of_snow);\n    div.appendChild(time);\n    div.appendChild(tempIcon);\n    div.appendChild(chanceRainSnow);\n    (0,_listeners_hourListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(div, dataHour);\n    return div;\n}\nfunction hour(time) {\n    const dayHour = document.createElement(\"span\");\n    dayHour.innerText = `${time}`;\n    return dayHour;\n}\nfunction tempAndIcon(temp, icon) {\n    const div = document.createElement(\"div\");\n    const hTemp = document.createElement(\"span\");\n    const hIcon = document.createElement(\"img\");\n    hTemp.innerHTML = `${temp}°C`;\n    hIcon.src = `${icon}`;\n    div.appendChild(hTemp);\n    div.appendChild(hIcon);\n    div.classList.add(\"temp-icon\");\n    return div;\n}\nfunction rainSnow(rain, snow) {\n    const divMainContainer = document.createElement(\"div\");\n    divMainContainer.classList.add(\"rain-snow-container\");\n    const span = document.createElement(\"span\");\n    span.innerText = `Chance of:`;\n    const container1 = document.createElement(\"div\");\n    container1.innerHTML = `\n    <span>Rain</span>\n    <span>${rain}%</span>\n    `;\n    container1.classList.add(\"rain-snow\");\n    const container2 = document.createElement(\"div\");\n    container2.innerHTML = `\n    <span>Snow</span>\n    <span>${snow}%</span>`;\n    container2.classList.add(\"rain-snow\");\n    divMainContainer.appendChild(container1);\n    divMainContainer.appendChild(container2);\n    return divMainContainer;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hourElement);\n\n\n//# sourceURL=webpack://top-weather-app/./src/api_data_renders/today_info/hourElement.ts?");

/***/ }),

/***/ "./src/api_data_renders/today_info/mainInfo.ts":
/*!*****************************************************!*\
  !*** ./src/api_data_renders/today_info/mainInfo.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction mainInfo(data, current, forecast) {\n    const city = document.getElementById(\"city\");\n    const mainTemp = document.getElementById(\"main-temp\");\n    const mainWeatherImg = document.getElementById(\"main-weather-img\");\n    const mainDate = document.getElementById(\"main-date\");\n    if (city && mainTemp && mainWeatherImg && mainDate) {\n        city.innerText = `${data.name}`;\n        mainTemp.innerText = `${current.temp_c}°C`;\n        setTempColor(mainTemp, current.temp_c);\n        mainWeatherImg.src = `${current.condition.icon}`;\n        mainWeatherImg.alt = `${current.condition.text}`;\n        mainDate.innerText = `${current.last_updated}`;\n    }\n    mainMoreInfo(forecast, current);\n}\nfunction mainMoreInfo(forecast, current) {\n    const mainMinTemp = document.getElementById(\"main-min-temp\");\n    const mainMaxTemp = document.getElementById(\"main-max-temp\");\n    const mainFeelsTemp = document.getElementById(\"main-feels-temp\");\n    const mainWind = document.getElementById(\"main-wind\");\n    const mainUv = document.getElementById(\"main-uv\");\n    const mainSunries = document.getElementById(\"main-sunrise\");\n    const mainSunset = document.getElementById(\"main-sunset\");\n    const mainDirection = document.getElementById(\"main-direction\");\n    if (mainDirection &&\n        mainFeelsTemp &&\n        mainMinTemp &&\n        mainMaxTemp &&\n        mainWind &&\n        mainUv &&\n        mainSunries &&\n        mainSunset) {\n        mainMinTemp.innerText = `Min: ${forecast.forecastday[0].day.mintemp_c}°C`;\n        setTempColor(mainMinTemp, forecast.forecastday[0].day.mintemp_c);\n        mainMaxTemp.innerText = `Max: ${forecast.forecastday[0].day.maxtemp_c}°C`;\n        setTempColor(mainMaxTemp, forecast.forecastday[0].day.maxtemp_c);\n        mainFeelsTemp.innerText = `Feels: ${current.feelslike_c}°C`;\n        setTempColor(mainFeelsTemp, current.feelslike_c);\n        mainWind.innerText = `Wind: ${forecast.forecastday[0].day.maxwind_kph}kph`;\n        mainUv.innerText = `UV: ${forecast.forecastday[0].day.uv}`;\n        mainSunries.innerText = `Sunrise: ${forecast.forecastday[0].astro.sunrise}`;\n        mainSunset.innerText = `Sunset: ${forecast.forecastday[0].astro.sunset}`;\n        mainDirection.innerText = `Direction: ${current.wind_dir}`;\n    }\n}\nfunction setTempColor(el, temp) {\n    if (temp >= 25.0) {\n        el.classList.add(\"hot\");\n    }\n    else if (temp < 25.0 && temp >= 18.0) {\n        el.classList.add(\"warm\");\n    }\n    else if (temp < 18.0 && temp >= 13.0) {\n        el.classList.add(\"near-cold\");\n    }\n    else {\n        el.classList.add(\"cold\");\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainInfo);\n\n\n//# sourceURL=webpack://top-weather-app/./src/api_data_renders/today_info/mainInfo.ts?");

/***/ }),

/***/ "./src/api_data_renders/today_info/renderDayHours.ts":
/*!***********************************************************!*\
  !*** ./src/api_data_renders/today_info/renderDayHours.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _extra_checkTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extra/checkTime */ \"./src/extra/checkTime.ts\");\n/* harmony import */ var _extra_checkTimeLower__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../extra/checkTimeLower */ \"./src/extra/checkTimeLower.ts\");\n/* harmony import */ var _extra_getCurrentDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../extra/getCurrentDate */ \"./src/extra/getCurrentDate.ts\");\n/* harmony import */ var _hourElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hourElement */ \"./src/api_data_renders/today_info/hourElement.ts\");\n\n\n\n\nfunction renderDayHours(hoursData) {\n    const todayHoursInfo = document.getElementById(\"today-hours-info\");\n    if (todayHoursInfo) {\n        const currentTime = (0,_extra_getCurrentDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        hoursData.forecastday[0].hour.forEach((el) => {\n            if ((0,_extra_checkTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el.time.split(\" \")[1], currentTime))\n                todayHoursInfo.appendChild((0,_hourElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el));\n        });\n        hoursData.forecastday[1].hour.forEach((el) => {\n            if ((0,_extra_checkTimeLower__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el.time.split(\" \")[1], currentTime))\n                todayHoursInfo.appendChild((0,_hourElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el));\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderDayHours);\n\n\n//# sourceURL=webpack://top-weather-app/./src/api_data_renders/today_info/renderDayHours.ts?");

/***/ }),

/***/ "./src/api_data_renders/weekInfo/singleDay.ts":
/*!****************************************************!*\
  !*** ./src/api_data_renders/weekInfo/singleDay.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction singleDay(data) {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"day-container\");\n    container.innerHTML = `\n    <span>${getDayName(data.date)}</span>\n    <img src=\"${data.day.condition.icon}\" alt=\"${data.day.condition.text}\">\n    <span class=\"days-title-container\">${data.day.daily_chance_of_rain}%</span>\n    <span class=\"days-title-container\">${data.day.avghumidity}%</span>\n    <div class=\"days-title-container\">\n      <span>${data.day.mintemp_c}°C</span>\n      <span>${data.day.maxtemp_c}°C</span>\n    </div>\n    \n    `;\n    return container;\n}\nfunction getDayName(dateString) {\n    let dayName = [\n        \"Sunday\",\n        \"Monday\",\n        \"Tuesday\",\n        \"Wednesday\",\n        \"Thursday\",\n        \"Friday\",\n        \"Saturday\",\n    ][new Date(dateString).getDay()];\n    return dayName;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleDay);\n\n\n//# sourceURL=webpack://top-weather-app/./src/api_data_renders/weekInfo/singleDay.ts?");

/***/ }),

/***/ "./src/api_data_renders/weekInfo/tenDays.ts":
/*!**************************************************!*\
  !*** ./src/api_data_renders/weekInfo/tenDays.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _extra_getCurrentDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extra/getCurrentDate */ \"./src/extra/getCurrentDate.ts\");\n/* harmony import */ var _singleDay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleDay */ \"./src/api_data_renders/weekInfo/singleDay.ts\");\n\n\nfunction tenDaysInfo(data) {\n    const weekInfo = document.getElementById(\"week-info\");\n    const currentDate = date();\n    if (weekInfo) {\n        weekInfo.innerHTML = `\n    <div class=\"days-title\">\n      <span id=\"days-day\">Day</span>\n      <span class=\"days-title-container\">Chance of rain</span>\n      <span class=\"days-title-container\">Humidyty</span>\n      <span class=\"days-title-container\">Temperature(min/max)</span>\n    </div>`;\n        data.forecastday.forEach((el) => {\n            if (el.date !== currentDate) {\n                console.log(el);\n                weekInfo.appendChild((0,_singleDay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el));\n            }\n        });\n    }\n}\nfunction date() {\n    const currentDate = (0,_extra_getCurrentDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    let currentDay = String(currentDate.getDate()).padStart(2, \"0\");\n    let currentMonth = String(currentDate.getMonth() + 1).padStart(2, \"0\");\n    let currentYear = currentDate.getFullYear();\n    let finalDate = `${currentYear}-${currentMonth}-${currentDay}`;\n    return finalDate;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tenDaysInfo);\n\n\n//# sourceURL=webpack://top-weather-app/./src/api_data_renders/weekInfo/tenDays.ts?");

/***/ }),

/***/ "./src/extra/checkEqulaTime.ts":
/*!*************************************!*\
  !*** ./src/extra/checkEqulaTime.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _parseTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseTime */ \"./src/extra/parseTime.ts\");\n\nfunction checkEqulaTime(time, currentTime) {\n    const parsedTime = (0,_parseTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time, currentTime);\n    return parsedTime.getHours() === currentTime.getHours();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkEqulaTime);\n\n\n//# sourceURL=webpack://top-weather-app/./src/extra/checkEqulaTime.ts?");

/***/ }),

/***/ "./src/extra/checkTime.ts":
/*!********************************!*\
  !*** ./src/extra/checkTime.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _parseTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseTime */ \"./src/extra/parseTime.ts\");\n\nfunction checkTime(time, currentTime) {\n    const parsedTime = (0,_parseTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time, currentTime);\n    return parsedTime >= currentTime;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTime);\n\n\n//# sourceURL=webpack://top-weather-app/./src/extra/checkTime.ts?");

/***/ }),

/***/ "./src/extra/checkTimeLower.ts":
/*!*************************************!*\
  !*** ./src/extra/checkTimeLower.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _parseTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseTime */ \"./src/extra/parseTime.ts\");\n\nfunction checkTimeLower(time, currentTime) {\n    const parsedTime = (0,_parseTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time, currentTime);\n    return parsedTime <= currentTime;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTimeLower);\n\n\n//# sourceURL=webpack://top-weather-app/./src/extra/checkTimeLower.ts?");

/***/ }),

/***/ "./src/extra/getCurrentDate.ts":
/*!*************************************!*\
  !*** ./src/extra/getCurrentDate.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getCurrentDate() {\n    const currentTime = new Date();\n    currentTime.setMinutes(0);\n    currentTime.setSeconds(0);\n    currentTime.setMilliseconds(0);\n    return currentTime;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentDate);\n\n\n//# sourceURL=webpack://top-weather-app/./src/extra/getCurrentDate.ts?");

/***/ }),

/***/ "./src/extra/parseTime.ts":
/*!********************************!*\
  !*** ./src/extra/parseTime.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction parseTime(time, currentTime) {\n    let [inputHours, inputMinutes] = time.split(\":\").map(Number);\n    const parsedTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), inputHours, inputMinutes);\n    return parsedTime;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseTime);\n\n\n//# sourceURL=webpack://top-weather-app/./src/extra/parseTime.ts?");

/***/ }),

/***/ "./src/getData.ts":
/*!************************!*\
  !*** ./src/getData.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _presentData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentData */ \"./src/presentData.ts\");\n/* harmony import */ var _handleError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleError */ \"./src/handleError.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nfunction getData(city, days) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const key = \"cfde3a7a2bea4578b33151247232408&q\";\n        callApi(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}&aqi=no&alerts=no&t=${Math.random()}`);\n    });\n}\nfunction callApi(link) {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const apiResponse = yield fetch(link, { mode: \"cors\" });\n            const data = yield apiResponse.json();\n            if (data.error) {\n                (0,_handleError__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.error.message);\n            }\n            else {\n                (0,_presentData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.location, data.current, data.forecast);\n            }\n        }\n        catch (err) {\n            console.log(err);\n        }\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://top-weather-app/./src/getData.ts?");

/***/ }),

/***/ "./src/handleError.ts":
/*!****************************!*\
  !*** ./src/handleError.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction handleError(error) {\n    console.log(error);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleError);\n\n\n//# sourceURL=webpack://top-weather-app/./src/handleError.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/getData.ts\");\n/* harmony import */ var _webInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webInit */ \"./src/webInit.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nwindow.onload = () => {\n    (0,_webInit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"london\", 10);\n};\n\n\n//# sourceURL=webpack://top-weather-app/./src/index.ts?");

/***/ }),

/***/ "./src/listeners/hourListener.ts":
/*!***************************************!*\
  !*** ./src/listeners/hourListener.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_data_renders_extraInfo_extraInfoRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api_data_renders/extraInfo/extraInfoRender */ \"./src/api_data_renders/extraInfo/extraInfoRender.ts\");\n\nfunction hourListener(el, data) {\n    el.addEventListener(\"click\", () => {\n        (0,_api_data_renders_extraInfo_extraInfoRender__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hourListener);\n\n\n//# sourceURL=webpack://top-weather-app/./src/listeners/hourListener.ts?");

/***/ }),

/***/ "./src/presentData.ts":
/*!****************************!*\
  !*** ./src/presentData.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_data_renders_extraInfo_extraInfoRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_data_renders/extraInfo/extraInfoRender */ \"./src/api_data_renders/extraInfo/extraInfoRender.ts\");\n/* harmony import */ var _api_data_renders_today_info_mainInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api_data_renders/today_info/mainInfo */ \"./src/api_data_renders/today_info/mainInfo.ts\");\n/* harmony import */ var _api_data_renders_today_info_renderDayHours__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_data_renders/today_info/renderDayHours */ \"./src/api_data_renders/today_info/renderDayHours.ts\");\n/* harmony import */ var _api_data_renders_weekInfo_tenDays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api_data_renders/weekInfo/tenDays */ \"./src/api_data_renders/weekInfo/tenDays.ts\");\n/* harmony import */ var _extra_checkEqulaTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extra/checkEqulaTime */ \"./src/extra/checkEqulaTime.ts\");\n/* harmony import */ var _extra_getCurrentDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extra/getCurrentDate */ \"./src/extra/getCurrentDate.ts\");\n\n\n\n\n\n\nfunction presentData(location, current, forecast) {\n    (0,_api_data_renders_today_info_mainInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(location, current, forecast);\n    (0,_api_data_renders_today_info_renderDayHours__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(forecast);\n    const currentTime = (0,_extra_getCurrentDate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    forecast.forecastday[0].hour.forEach((el) => {\n        if ((0,_extra_checkEqulaTime__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(el.time.split(\" \")[1], currentTime)) {\n            (0,_api_data_renders_extraInfo_extraInfoRender__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el);\n        }\n    });\n    (0,_api_data_renders_weekInfo_tenDays__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(forecast);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (presentData);\n\n\n//# sourceURL=webpack://top-weather-app/./src/presentData.ts?");

/***/ }),

/***/ "./src/webInit.ts":
/*!************************!*\
  !*** ./src/webInit.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/getData.ts\");\n\nfunction webInit() {\n    const content = document.querySelector(\"#content\");\n    if (content) {\n        content.innerHTML = `\n    <header>\n        <img alt=\"logo\">\n        <div>\n            <input type=\"text\" id=\"search-input\">\n            <button id=\"search\">szukaj</button>\n        </div>\n        <button id=\"change-temp-scale\">F/C</button>\n    </header>\n    <section id=\"today-info\">\n        <div id=\"today-main-info\">\n            <h1 id=\"city\" class=\"bold color-white\"></h1>\n            <div id=\"temp-img\">\n              <span id=\"main-temp\" class=\"bold\"></span>\n              <img id=\"main-weather-img\">\n            </div>\n            <div id=\"main-more-info\">\n              <div class=\"more-info-section\">\n                <span id=\"main-min-temp\" class=\"main-info-text\"></span>\n                <span id=\"main-max-temp\" class=\"main-info-text\"></span>\n                <span id=\"main-feels-temp\" class=\"main-info-text\"\"></span>\n                <span id=\"main-wind\" class=\"main-info-text color-white\"></span>\n              </div>\n              <div class=\"more-info-section\">\n                <span id=\"main-uv\" class=\"main-info-text color-white\"></span>\n                <span id=\"main-sunrise\" class=\"main-info-text\"></span>\n                <span id=\"main-sunset\" class=\"main-info-text\"></span>\n                <span id=\"main-direction\" class=\"main-info-text color-white\"></span>\n              </div>  \n            </div>\n            <span id=\"main-date\" class=\"main-info-text color-white\"></span>\n        </div>\n        <div id=\"today-hours-info\"></div>\n    </section>\n    <section id=\"extra-info\">\n    <div id=\"extra-container\">\n      <h2 id=\"extra-hour\"></h2>\n      <div id=\"extra-contnet\">\n        <div>\n          <span class=\"extra-title\">Feels like</span>\n          <span id=\"extra-feel\"></span>\n        </div>\n        <div>\n          <span class=\"extra-title\">Wind</span>\n          <span id=\"extra-wind\"></span>\n        </div>\n        <div>\n          <span class=\"extra-title\">Wind degree</span>\n          <span id=\"extra-wind-degree\"></span>\n        </div>\n        <div>\n          <span class=\"extra-title\">Wind direction</span>\n          <span id=\"extra-wind-dir\"></span>\n        </div>\n        <div>\n          <span class=\"extra-title\">Pressure</span>\n          <span id=\"extra-press\"></span>\n        </div>\n        <div>\n          <span class=\"extra-title\">Precipitation</span>\n          <span id=\"extra-precip\"></span>\n        </div>\n        <div>\n          <span class=\"extra-title\">humidity</span>\n          <span id=\"extra-humid\"></span>\n        </div>\n        <div>\n          <span class=\"extra-title\">Cloud</span>\n          <span id=\"extra-cloud\"></span>\n        </div>\n        <div>\n          <span class=\"extra-title\">Visibility</span>\n          <span id=\"extra-vis\"></span>\n        </div>\n        <div>\n          <span class=\"extra-title\">UV</span>\n          <span id=\"extra-uv\"></span>\n        </div>\n      </div>\n    </div>\n    </section>\n    <section id=\"week-info\"></section>\n    <footer><span>Created by StaryAlgida</span></footer>`;\n    }\n    inputListner();\n}\nfunction inputListner() {\n    const input = document.getElementById(\"search-input\");\n    const inputButton = document.getElementById(\"search\");\n    if (input && inputButton) {\n        inputButton.addEventListener(\"click\", () => {\n            const value = input.value;\n            console.log(value);\n            webInit();\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value, 10);\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (webInit);\n\n\n//# sourceURL=webpack://top-weather-app/./src/webInit.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;