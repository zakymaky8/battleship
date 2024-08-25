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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n}\nbody {\n    background: #000000;\n    color: aliceblue;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.all {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 30px;\n    justify-content: center;\n}\n.grid-container {\n    display: grid;\n    grid-template-columns: repeat(10, 45px);\n    grid-template-rows: repeat(10, 45px);\n    border: 10px groove rgb(106, 119, 106);\n    width: fit-content;\n    padding: 10px;\n    border-radius: 25px;\n    background: rgb(5, 188, 224, 0.8);\n    outline: 1px groove white;\n    height: fit-content;\n}\n\n.dradro {\n    display: grid;\n    border: 10px groove rgb(4, 109, 34);\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(2, 1fr);\n    padding: 20px;\n    gap: 30px;\n    align-self: center;\n}\n\n.dradro > div {\n    display: grid;\n    grid-auto-flow: column;\n    background: rgb(81, 70, 8);\n    width: fit-content;\n    height: fit-content;\n}\n.dradro > div > div {\n    border: 2px groove rgb(4, 61, 61);\n    width: 45px;\n    height: 45px;\n}\n\n.sq {\n    border: 1px solid rgb(0, 0, 0, 0.02);\n}\n\n#missed{\n    width: 15px;\n    height: 15px;\n    position: relative;\n    border-radius: 50%;\n    top: 50%;\n    left: 50%;\n    background: red;\n    transform: translate(-50%, -50%);\n}\n#get {\n    width: 31px;\n    height: 31px;\n    position: relative;\n    border-radius: 10px;\n    top: 50%;\n    left: 50%;\n    background: rgb(248, 229, 10);\n    transform: translate(-50%, -50%);\n    box-shadow: 2px 2px 17px 3px rgb(255, 200, 0);\n}\n.sq:hover {\n    background: rgb(5, 237, 237);\n}\n.enemy {\n    user-select: none;\n}\n.intro {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    gap: 100px;\n}\n\n#game-name {\n    color: rgb(2, 15, 13);\n    font-size: 60px;\n    -webkit-text-stroke: 1.5px aqua;\n}\n#welcom {\n    font-size: 50px;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-weight: 400;\n    color: aqua;\n    -webkit-text-stroke: 1.5px rgb(15, 59, 59);\n}\n\n#trigger, .goto, #play-again {\n    height: fit-content;\n    width: fit-content;\n    background: aqua;\n    color: rgb(24, 243, 255);\n    font-size: 28px;\n    border-radius: 20px;\n    border: 1px rgb(2, 183, 150) groove;\n    padding: 10px;\n    align-self: center;\n    font-weight: 1000;\n    -webkit-text-stroke: 1px rgb(0, 0, 0);\n}\n#trigger:active, .goto:active {\n    background: #b39c28;\n}\n.main-board {\n    display: none;\n    margin: 20px;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.preferences {\n    align-self: center;\n}\nselect {\n    height: 40px;\n    font-size: 20px;\n    padding: 5px;\n    color: rgb(19, 175, 37);\n    background: black;\n    border: none;\n    border: 1px solid rgb(36, 56, 8);\n    margin-right: 20px;\n    font-family: 'Courier New', Courier, monospace;\n}\n.fields {\n    display: flex;\n    justify-content: space-evenly;\n    padding: 15px;\n    gap: 20px;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.game-field {\n    display: none;\n    flex-direction: column;\n\n}\n.notice {\n    align-self: center;\n    margin: 15px;\n    height: 20px;\n}\n\ndialog {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.8);\n    border: 10px groove rgb(0, 0, 255, 0.5);\n    padding: 30px;\n    color: rgb(255, 204, 204);\n    font-size: 20px;\n    color: greenyellow;\n}\ndialog::backdrop {\n    background-color: rgb(0, 0, 0, 0.7);\n}\n\nli {\n    list-style-type: circle;\n}\n.infos {\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n    align-items: center;\n    margin-right: 100px;\n}\n\n#play-again {\n    align-self: center;\n    margin-top: -10px;\n    padding: 7px;\n    font-size: 15px;\n    margin-top: 40px;\n    margin-bottom: -20px;\n    float: right;\n}\n#play-again:hover {\n    background: rgb(68, 148, 148);\n}\n#play-again:active {\n    background: rgb(0, 39, 39);\n}\n\n.dp {\n    font-size: 10px;\n     background: darkblue;\n\n}\nsup {\n    font-size: 10px;\n}\nh1 {\n    margin-bottom: 25px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/app-logic-util.js */ \"./utilities/app-logic-util.js\");\n\n\n\nclass Gameboard {\n    constructor() {\n        this.allPtsOnBoard = [];\n        this.allTargetShip = [];\n        this.isHit = false;\n        this.missedShot = [];\n        this.allSunk = false; // look here\n    }\n\n    placeShips(theShip, crdsArr) {\n        if (!(0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_0__.areCollapsed)(crdsArr, this.allPtsOnBoard) && (0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_0__.isNormalFLow)((0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_0__.toNumberArray)(crdsArr), theShip.orientation)) {\n            for (let pt of crdsArr) {\n                if (theShip.crdLiedOn.includes(pt) || theShip.length !== crdsArr.length) break\n                else {\n                    theShip.crdLiedOn.push(pt)\n                    this.allPtsOnBoard.push(pt)\n                }\n            }\n            theShip.crdLiedOn.length ? this.allTargetShip.push(theShip) : null\n        }\n    }\n\n    recieveAttack(crd) {\n        this.isHit = false;\n\n        for (let ship of this.allTargetShip) {\n            if (ship.isSunk()) continue;\n            else {\n                if (ship.crdLiedOn.includes(crd) && !ship.hitCrds.includes(crd)) {\n                    ship.hit()\n                    ship.hitCrds.push(crd)\n                    this.isHit = true;\n                    break\n                }\n                else continue\n            }\n        }\n        !this.isHit  ? this.missedShot.push(crd) : null\n    }\n    doesAllSunk() {\n        return this.allTargetShip.every(e => e.isSunk())\n    }\n    sunkShips() {\n        let sunk = 0;\n        for (let ship of this.allTargetShip) ship.isSunk() ?  sunk += 1 : null\n        return sunk\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length, position) {\n        this.length = length\n        this.hits = 0;\n        this.crdLiedOn = [];\n        this.hitCrds = []\n        this.orientation = position;\n    }\n\n    hit() {\n        this.hits = this.hits + 1\n    }\n    isSunk() {\n        if (this.length === this.hits) return true;\n        else return false;\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/dom-util.js */ \"./utilities/dom-util.js\");\n/* harmony import */ var _utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/app-logic-util.js */ \"./utilities/app-logic-util.js\");\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n//  selecting DOM elements\nconst selEl = selctr => document.querySelector(selctr);\n\nconst [intro, welcom, gameName, trigger] = [selEl(\".intro\"), selEl(\"#welcom\"), selEl(\"#game-name\"), selEl(\"#trigger\")]\nconst [mainBoard, dradro, gotoField] = [selEl(\".main-board\"), selEl(\".dradro\"), selEl(\".goto\")]\nconst [setting, friend, enemy] = [selEl('.maintain'), selEl('.friend'), selEl('.enemy')]\nconst [pref, dir, len] = [selEl('#pref'), selEl('#dir'), selEl('#len')]\nconst [notice, dialog, frSnkShp, enSnkShp] = [selEl('.notice'), selEl('dialog'), selEl('#fr-snk'), selEl('#en-snk')]\nconst [gameField, timeEl] = [selEl(\".game-field\"), selEl(\"#times\")]\n\nconst [friendGB, enemyGB] = [new _Gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard(), new _Gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard()]\n\n;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(gameName, \"Battleship Game\", 100);\n(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(welcom, \"Welcome to the battle!\", 100);\n(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(trigger, \"Get into it\", 100);\n\n// creating grids squares\n[setting, friend, enemy].forEach(i=>(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.createBoard)(i))\n\nwindow.addEventListener('DOMContentLoaded', ()=> giveRandforComp(enemyGB))\n\ntrigger.onclick = () => {\n    intro.style.display = 'none'\n    setTimeout(()=>mainBoard.style.display = 'flex', 500)\n}\n\nlet timer;\n\ngotoField.onclick = () => {\n    if (friendGB.allTargetShip.length === 5) {\n        mainBoard.style.display = 'none'\n        gameField.style.display = 'flex'\n        ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(notice, _utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.statusUpdate.start, 30)\n        timer = setInterval(()=> timeEl.textContent = +timeEl.textContent + 1, 1000)\n    }\n}\npref.onchange = () => {\n    if (pref.value === 'ran') {\n        giveRandforComp(friendGB)\n        ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.drawUsingArray)(friend, friendGB.allPtsOnBoard)\n        ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.drawUsingArray)(setting, friendGB.allPtsOnBoard)\n    }\n     else if (pref.value==='dad') {\n        dradro.style.pointerEvents = \"auto\"\n        EnabledragAndDropFeature()\n    }\n}\n\n//  Hover-click placement as default feature\n\nArray.from(setting.children).map(sq => {\n    sq.addEventListener('click', () => {\n        if (friendGB.allTargetShip.length < 5 && pref.value=== 'hac') {\n\n            let lengths = [2, 3, 3, 4, 5];\n            let ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_3__.Ship(+len.value, dir.value);\n\n            friendGB.placeShips(ship, (0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_1__.strArr)((0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_1__.generateAllPoints)(sq.crd, +len.value, dir.value)))\n\n            len.value = lengths[friendGB.allTargetShip.length]\n\n            ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.drawUsingArray)(setting, ship.crdLiedOn)\n            ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.drawUsingArray)(friend, ship.crdLiedOn)\n            ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.createFocus)(ship, dradro)\n        }\n    })\n})\n\nArray.from(enemy.children).map(c => c.onclick=()=> {\n    if (c.innerHTML === '' && !(enemyGB.doesAllSunk() || friendGB.doesAllSunk())) {\n        enemyGB.recieveAttack((0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_1__.sglStr)(c.crd))\n        enemyGB.isHit ? (0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(notice, _utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.statusUpdate.friendShot, 25) : (0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(notice, _utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.statusUpdate.friendMissed, 25)\n        c.innerHTML = enemyGB.allPtsOnBoard.includes((0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_1__.sglStr)(c.crd)) ? '<div id=\"get\"></div>' : '<div id=\"missed\"></div>'\n        ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.markSunkShip)(enemy, enemyGB)\n        enSnkShp.textContent = enemyGB.sunkShips()\n        enemyBrdAppearance(\"none\", \"70%\", \"blur(2px)\")\n        checkWinner()\n        setTimeout(()=> (0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(notice, _utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.statusUpdate.enemyTurn, 25), 1000)\n        setTimeout (()=> doEnemyTurnActivity(), 2000)\n    }\n})\n\n// game logic\nfunction doEnemyTurnActivity() {\n    computerHits();\n    friendGB.isHit ? (0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(notice, _utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.statusUpdate.enemyShot, 25) : (0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(notice, _utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.statusUpdate.enemyMissed, 25);\n    checkWinner();\n    (0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.markSunkShip)(friend, friendGB);\n    frSnkShp.textContent = friendGB.sunkShips()\n    setTimeout(()=>{\n        ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(notice, _utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.statusUpdate.friendTurn, 25)\n        enemyBrdAppearance(\"auto\", \"100%\", \"blur(0px)\")\n    } , 800)\n}\nfunction enemyBrdAppearance(pE, opa, fil) {\n    enemy.style.pointerEvents = pE\n    enemy.style.opacity = opa\n    enemy.style.filter = fil\n}\n\nfunction computerHits() {\n    let ran = Math.floor(Math.random()*100)\n    let ranPt = friend.children[ran]\n    if (ranPt.innerHTML) {\n        computerHits()\n    } else  {\n        ranPt.innerHTML = friendGB.allPtsOnBoard.includes((0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_1__.sglStr)(ranPt.crd)) ?  '<div id=\"get\"></div>' : '<div id=\"missed\"></div>'\n        friendGB.recieveAttack((0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_1__.sglStr)(ranPt.crd))\n    }\n}\n\nfunction checkWinner() {\n    if (enemyGB.doesAllSunk()) {\n        clearInterval(timer)\n        ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(notice, \"You won!\", 25)\n        dialog.innerHTML =`<div>You got all enemy's ship sunk, Kudos!</div><br>\n                           <ul><li>You Missed: ${enemyGB.missedShot.length} shoots.</li><li>It costed you ${timeEl.textContent} seconds to accomplish.</li></ul>\n                           <button id=\"play-again\" onclick=\"document.location.reload()\">Play Again</button>\n                           `\n        dialog.showModal()\n    } else if (friendGB.doesAllSunk()) {\n        clearInterval(timer)\n        ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.doWriting)(notice, \"You Lost!\", 25)\n        dialog.innerHTML =`<div>Enemy got all your ship sunk!</div><br>\n                           <ul><li>Enemy Missed: ${friendGB.missedShot.length} shoots</li><li>It costed him ${timeEl.textContent} seconds to accomplish</li></ul>\n                           <button id=\"play-again\" onclick=\"document.location.reload()\">Play Again</button>`\n        dialog.showModal()\n    }\n}\n\n\nfunction giveRandforComp(brdLgc) {\n    while (brdLgc.allTargetShip.length < 5) {\n        let [i, j] = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)]\n        const [dirr, lens] = [['hor', 'ver'], [2, 3, 3, 4, 5]]\n        let ind = Math.floor(Math.random()*2)\n        const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_3__.Ship(lens[brdLgc.allTargetShip.length], dirr[ind])\n        brdLgc.placeShips(ship, (0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_1__.strArr)((0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_1__.generateAllPoints)([i, j], lens[brdLgc.allTargetShip.length], dirr[ind])))\n    }\n}\n\nfunction EnabledragAndDropFeature () {\n    if (pref.value === 'dad') {\n        dradro.style.pointerEvents = 'auto'\n        Array.from(dradro.children).forEach(el=>el.addEventListener('dragstart', e => e.dataTransfer.setData(\"text/plain\", el.children.length)))\n        Array.from(setting.children).map(sq => sq.addEventListener('dragover', e => e.preventDefault()))\n\n        Array.from(setting.children).map(sq => {\n            sq.addEventListener('drop', e => {\n                e.preventDefault()\n                if (friendGB.allTargetShip.length < 5 ) {\n                    let len = e.dataTransfer.getData(\"text/plain\")\n                    let ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_3__.Ship(+len, dir.value);\n                    friendGB.placeShips(ship, (0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_1__.strArr)((0,_utilities_app_logic_util_js__WEBPACK_IMPORTED_MODULE_1__.generateAllPoints)(sq.crd, +len, dir.value)))\n                    ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.drawUsingArray)(setting, ship.crdLiedOn)\n                    ;(0,_utilities_dom_util_js__WEBPACK_IMPORTED_MODULE_0__.drawUsingArray)(friend, ship.crdLiedOn)\n                }\n                let a = friendGB.allTargetShip.filter(e=> e.crdLiedOn.length > 0)\n                for (let i of a)\n                    for (let j of Array.from(dradro.children))\n                        if (i.length === j.children.length) {\n                            j.style.display = 'none'\n                            break\n                        }\n            })\n        })\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./utilities/app-logic-util.js":
/*!*************************************!*\
  !*** ./utilities/app-logic-util.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   areCollapsed: () => (/* binding */ areCollapsed),\n/* harmony export */   areConsecutive: () => (/* binding */ areConsecutive),\n/* harmony export */   generateAllPoints: () => (/* binding */ generateAllPoints),\n/* harmony export */   isNormalFLow: () => (/* binding */ isNormalFLow),\n/* harmony export */   isPossibleThere: () => (/* binding */ isPossibleThere),\n/* harmony export */   sglNumArr: () => (/* binding */ sglNumArr),\n/* harmony export */   sglStr: () => (/* binding */ sglStr),\n/* harmony export */   strArr: () => (/* binding */ strArr),\n/* harmony export */   toNumberArray: () => (/* binding */ toNumberArray)\n/* harmony export */ });\n\n\nconst areConsecutive = arr => {\n    let indices = []\n    for (let i = 0; i< arr.length -1 ; i++) indices.push([i, i+1]) // consecutive indices\n    return indices.every(e => arr[e[0]]-arr[e[1]] === -1)\n}\n\nconst toNumberArray  = arr =>  arr.map(i => i = i.split('').map(e=>+e))\n\nconst strArr = arr => arr.map(e=>e.join(''))\n\nconst sglStr = arr => arr.join('')\n\nconst sglNumArr = arr => arr.split('').map(e=>+e)\n\nconst isNormalFLow = (points, position) => {\n    if (position == 'hor') return points.every(e=> e[0] === points[0][0]) && areConsecutive(points.map(e=> e[1]))\n    else if (position == 'ver') return points.every(e=> e[1] === points[0][1]) && areConsecutive(points.map(e=> e[0]))\n}\n\nconst areCollapsed = (arr1, arr2) => {\n    let bool = false;\n    for (let i of arr1)\n        for (let j of arr2) {\n            if (i === j) bool = true\n            continue\n        }\n    return bool\n}\n\nconst isPossibleThere = (position, coord, length ) => {\n    if (position == 'ver') return coord[0] + length <= 10\n    else if (position=='hor') return coord[1] + length <= 10\n}\n\nconst generateAllPoints = (point, length, position) => {\n    let allPoints = []\n    if (isPossibleThere(position, point, length)) {\n        for (let i=0; i<length; i++) {\n            if (position === 'hor') allPoints.push([point[0], point[1] + i])\n            else if (position === 'ver') allPoints.push([point[0] + i, point[1]])\n        }\n        return allPoints;\n    }\n    return allPoints\n}\n\n\n//# sourceURL=webpack://battleship/./utilities/app-logic-util.js?");

/***/ }),

/***/ "./utilities/dom-util.js":
/*!*******************************!*\
  !*** ./utilities/dom-util.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBoard: () => (/* binding */ createBoard),\n/* harmony export */   createFocus: () => (/* binding */ createFocus),\n/* harmony export */   doWriting: () => (/* binding */ doWriting),\n/* harmony export */   drawUsingArray: () => (/* binding */ drawUsingArray),\n/* harmony export */   markSunkShip: () => (/* binding */ markSunkShip),\n/* harmony export */   statusUpdate: () => (/* binding */ statusUpdate)\n/* harmony export */ });\n/* harmony import */ var _app_logic_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-logic-util.js */ \"./utilities/app-logic-util.js\");\n\n\nconst doWriting = (domEl, phrase, interval) => {\n    domEl.innerHTML = '';\n    if (phrase.length) {\n        let i = 0\n        let int = setInterval(()=> {\n            if (i===phrase.length-1) clearInterval(int)\n            domEl.innerHTML += phrase[i]; i++;\n        }, interval)\n    }\n}\n\nconst statusUpdate = {\n    start: \"Everything is set up. Be the icebreaker!\",\n    enemyTurn: \"Enemy is aiming!\",\n    enemyMissed: \"Enemy lost his target!\",\n    enemyShot: 'Enemy hit your ship!',\n    friendTurn: \"Your turn!\",\n    friendMissed: \"You lost your target!\",\n    friendShot: \"You hit enemy's ship!\"\n}\n\n\nconst createFocus = (ship, domEl) => {\n    Array.from(domEl.children).forEach(e=> e.style.filter = e.children.length===ship.crdLiedOn.length ? 'blur(5px)': \"blur(0px)\")\n}\n\nconst  createBoard = container => {\n    container.innerHTML = ''\n    container.classList.add('grid-container')\n    const [row, column] = [[0,1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8,9]]\n    for (let r of row) {\n        for (let c of column) {\n            const node = document.createElement('div')\n            node.className = \"sq\"\n            node.crd = [r, c]\n            node.title = `${r}, ${c}`\n            container.appendChild(node)\n        }\n    }\n}\n\nconst drawUsingArray  = (brd, arr) => {\n    const [r, g, b] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]\n    Array.from(brd.children).map(sq=> {\n        if (arr.includes((0,_app_logic_util_js__WEBPACK_IMPORTED_MODULE_0__.sglStr)(sq.crd))) {\n            sq.style.background = 'rgb(81, 70, 8)'\n            sq.style.border = `2px groove rgb(${r}, ${g}, ${b})`\n        }\n    })\n}\n\n\n\nconst markSunkShip = (brdUI, brdLgc) => {\n    const [r, g, b] = [Math.floor(Math.random() * 256),\n                       Math.floor(Math.random() * 256),\n                       Math.floor(Math.random() * 256)];\n    brdLgc.allTargetShip.forEach( s => {\n        if (s.isSunk() && !s.markedBlur) {\n            Array.from(brdUI.children).forEach( e => {\n                if (s.crdLiedOn.includes((0,_app_logic_util_js__WEBPACK_IMPORTED_MODULE_0__.sglStr)(e.crd))) {\n                    e.style.background = `rgb(${r}, ${g}, ${b})`\n                    e.style.opacity = '30%'\n                }\n            })\n            s.markedBlur = true\n        }\n    })\n}\n\n//# sourceURL=webpack://battleship/./utilities/dom-util.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;