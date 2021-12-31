/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: whitesmoke\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\naside {\r\n    box-sizing: border-box;\r\n    height: 100vh;\r\n    width: 25%;\r\n    background-color: #fff;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    padding-right: 20px;\r\n}\r\n\r\n#top {\r\n\r\n}\r\n\r\nmain {\r\n    width: 75%;\r\n    margin-left: 25%;\r\n}\r\n\r\n#logo {\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n}\r\n\r\n#logo span {\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    margin-left: 10px;\r\n}\r\n\r\n#logo i {\r\n    font-size: medium;\r\n    color: #000;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    padding-left: 5px;\r\n}\r\n\r\n#logo em {\r\n    font-size: small;\r\n    color: #000;\r\n    display: block;\r\n    font-weight: normal;\r\n    padding-left: 35px;\r\n}\r\n\r\n.desktop-info-area,\r\n.mobile-info-area {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.desktop-info-area div {\r\n    margin: 0 10px;\r\n    position: inherit;\r\n}\r\n\r\n.mobile-info-area div {\r\n    margin: 0 15px;\r\n    position: inherit;\r\n}\r\n\r\n#user-dropdown-desktop {\r\n    width:80%;\r\n    margin: auto;\r\n    max-width: 230px;\r\n    position: relative;\r\n    height: 0px;\r\n}\r\n\r\n#user-dropdown-mobile {\r\n    width:100%;\r\n    margin: 0;\r\n    position: relative;\r\n    left: 0px;\r\n}\r\n\r\n#user-dropdown-desktop ul {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 1px 2px 5px 1px #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    width: 120px;\r\n    right: -1px;\r\n}\r\n\r\n#user-dropdown-mobile ul {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 1px 2px 5px 1px #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    width: 120px;\r\n    right: 60px;\r\n    \r\n}\r\n\r\n#user-dropdown-desktop ul li {\r\n    padding: 10px;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n#user-dropdown-desktop ul li:hover {\r\n   background-color: beige;\r\n}\r\n\r\n#user-dropdown-mobile ul li {\r\n    padding: 6px;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n#fixed-top {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.user {\r\n    cursor: pointer;\r\n}\r\n\r\n#shopping-basket-desktop {\r\n    position: relative;\r\n    height: 0;\r\n}\r\n\r\n#shopping-basket-desktop ul {\r\n    background-color: white;\r\n    box-shadow: 1px 2px 5px 1px #ccc;\r\n    position: absolute;\r\n    right: -150px;\r\n    width: 350px;\r\n    z-index: 200;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n#shopping-basket-mobile ul {\r\n    box-shadow: 1px 2px 5px 1px #999;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    right: 0px;\r\n    width: 100%;\r\n    max-width: 350px;\r\n    z-index: 200;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.cart {\r\n    cursor: pointer;\r\n}\r\n\r\n#product-categories-heading {\r\n    text-align: right;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#search-bar-desktop {\r\n    display: flex;\r\n    border: solid 3px #000;\r\n    width: 90%;\r\n    margin: 20px  auto;\r\n    border-radius: 9px;\r\n    position: relative;\r\n}\r\n\r\n#search-bar-desktop span {\r\n    cursor: pointer;\r\n}\r\n\r\n#search-bar-desktop input {\r\n    border: none;\r\n    border-radius: 9px;\r\n    display: inline-block;\r\n    width: 90%;\r\n    height: 20px;\r\n    line-height: 24px;\r\n    outline: none;\r\n}\r\n\r\n#product-categories-heading p {\r\n    text-align: right;\r\n}\r\n\r\n#category-list ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#category-list li {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\n#category-list a {\r\n    display: flex;\r\n    text-decoration: none;\r\n    color: #000;\r\n    font-size: 1.2em;\r\n    padding: 1px 10px;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n#grid {\r\n    padding: 5px;\r\n}\r\n\r\n#grid .product-item {\r\n    padding: 10px;\r\n    background-color:#fff;\r\n    margin: 10px 5px;\r\n}\r\n\r\n#grid .product-item img {\r\n    width: 100%;\r\n}\r\n\r\n#grid .product-item button {\r\n    padding: 10px 7px;\r\n    cursor: pointer;\r\n    float: right;\r\n    border: none;\r\n    color: #fff;\r\n    background-color: #000;\r\n    border-radius: 6px;\r\n}\r\n\r\n.rounded {\r\n    display: inline-block;\r\n    width: 35px;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    border-radius: 50%;\r\n    background-color: #000;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.arrow-span {\r\n    display: inline-block;\r\n    color: #000;\r\n    font-size: xx-large;\r\n    background-color: #000;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    width: 15px;\r\n    position: relative;\r\n    right: -30px;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n\r\n@media screen and (max-width: 480px){\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '1 .column.size-1of1';\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 481px) and (max-width: 768px) {\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '2 .column.size-1of2';\r\n\t}\r\n}\r\n@media screen and (min-width: 769px) {\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '3 .column.size-1of3';\r\n\t}\r\n}\r\n\r\n.column { float: left; }\r\n.size-1of1 { width: 100%; }\r\n.size-1of2 { width: 50%; }\r\n.size-1of3 { width: 33.333%; }", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"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","sourcesContent":["html,\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: whitesmoke\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\naside {\r\n    box-sizing: border-box;\r\n    height: 100vh;\r\n    width: 25%;\r\n    background-color: #fff;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    padding-right: 20px;\r\n}\r\n\r\n#top {\r\n\r\n}\r\n\r\nmain {\r\n    width: 75%;\r\n    margin-left: 25%;\r\n}\r\n\r\n#logo {\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n}\r\n\r\n#logo span {\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    margin-left: 10px;\r\n}\r\n\r\n#logo i {\r\n    font-size: medium;\r\n    color: #000;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    padding-left: 5px;\r\n}\r\n\r\n#logo em {\r\n    font-size: small;\r\n    color: #000;\r\n    display: block;\r\n    font-weight: normal;\r\n    padding-left: 35px;\r\n}\r\n\r\n.desktop-info-area,\r\n.mobile-info-area {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.desktop-info-area div {\r\n    margin: 0 10px;\r\n    position: inherit;\r\n}\r\n\r\n.mobile-info-area div {\r\n    margin: 0 15px;\r\n    position: inherit;\r\n}\r\n\r\n#user-dropdown-desktop {\r\n    width:80%;\r\n    margin: auto;\r\n    max-width: 230px;\r\n    position: relative;\r\n    height: 0px;\r\n}\r\n\r\n#user-dropdown-mobile {\r\n    width:100%;\r\n    margin: 0;\r\n    position: relative;\r\n    left: 0px;\r\n}\r\n\r\n#user-dropdown-desktop ul {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 1px 2px 5px 1px #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    width: 120px;\r\n    right: -1px;\r\n}\r\n\r\n#user-dropdown-mobile ul {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 1px 2px 5px 1px #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    width: 120px;\r\n    right: 60px;\r\n    \r\n}\r\n\r\n#user-dropdown-desktop ul li {\r\n    padding: 10px;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n#user-dropdown-desktop ul li:hover {\r\n   background-color: beige;\r\n}\r\n\r\n#user-dropdown-mobile ul li {\r\n    padding: 6px;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n#fixed-top {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.user {\r\n    cursor: pointer;\r\n}\r\n\r\n#shopping-basket-desktop {\r\n    position: relative;\r\n    height: 0;\r\n}\r\n\r\n#shopping-basket-desktop ul {\r\n    background-color: white;\r\n    box-shadow: 1px 2px 5px 1px #ccc;\r\n    position: absolute;\r\n    right: -150px;\r\n    width: 350px;\r\n    z-index: 200;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n#shopping-basket-mobile ul {\r\n    box-shadow: 1px 2px 5px 1px #999;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    right: 0px;\r\n    width: 100%;\r\n    max-width: 350px;\r\n    z-index: 200;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.cart {\r\n    cursor: pointer;\r\n}\r\n\r\n#product-categories-heading {\r\n    text-align: right;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#search-bar-desktop {\r\n    display: flex;\r\n    border: solid 3px #000;\r\n    width: 90%;\r\n    margin: 20px  auto;\r\n    border-radius: 9px;\r\n    position: relative;\r\n}\r\n\r\n#search-bar-desktop span {\r\n    cursor: pointer;\r\n}\r\n\r\n#search-bar-desktop input {\r\n    border: none;\r\n    border-radius: 9px;\r\n    display: inline-block;\r\n    width: 90%;\r\n    height: 20px;\r\n    line-height: 24px;\r\n    outline: none;\r\n}\r\n\r\n#product-categories-heading p {\r\n    text-align: right;\r\n}\r\n\r\n#category-list ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#category-list li {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\n#category-list a {\r\n    display: flex;\r\n    text-decoration: none;\r\n    color: #000;\r\n    font-size: 1.2em;\r\n    padding: 1px 10px;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n#grid {\r\n    padding: 5px;\r\n}\r\n\r\n#grid .product-item {\r\n    padding: 10px;\r\n    background-color:#fff;\r\n    margin: 10px 5px;\r\n}\r\n\r\n#grid .product-item img {\r\n    width: 100%;\r\n}\r\n\r\n#grid .product-item button {\r\n    padding: 10px 7px;\r\n    cursor: pointer;\r\n    float: right;\r\n    border: none;\r\n    color: #fff;\r\n    background-color: #000;\r\n    border-radius: 6px;\r\n}\r\n\r\n.rounded {\r\n    display: inline-block;\r\n    width: 35px;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    border-radius: 50%;\r\n    background-color: #000;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.arrow-span {\r\n    display: inline-block;\r\n    color: #000;\r\n    font-size: xx-large;\r\n    background-color: #000;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    width: 15px;\r\n    position: relative;\r\n    right: -30px;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n\r\n@media screen and (max-width: 480px){\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '1 .column.size-1of1';\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 481px) and (max-width: 768px) {\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '2 .column.size-1of2';\r\n\t}\r\n}\r\n@media screen and (min-width: 769px) {\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '3 .column.size-1of3';\r\n\t}\r\n}\r\n\r\n.column { float: left; }\r\n.size-1of1 { width: 100%; }\r\n.size-1of2 { width: 50%; }\r\n.size-1of3 { width: 33.333%; }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/mobile-tablet.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/mobile-tablet.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 900px) {\r\n    body {\r\n      display: block;\r\n      padding-top: 50px;\r\n    }\r\n\r\n    aside {\r\n        display: none;\r\n    }\r\n\r\n    main {\r\n        width: 100%;\r\n        margin-left: 0;\r\n    }\r\n\r\n    #fixed-top {\r\n        background-color: white;\r\n        display: block;\r\n        box-shadow: 1px 1px 5px 1px #ccc;\r\n        position: fixed;\r\n        width: 101%;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    #mobile-menu {\r\n        height: 40px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/css/mobile-tablet.css"],"names":[],"mappings":"AAAA;IACI;MACE,cAAc;MACd,iBAAiB;IACnB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,WAAW;QACX,cAAc;IAClB;;IAEA;QACI,uBAAuB;QACvB,cAAc;QACd,gCAAgC;QAChC,eAAe;QACf,WAAW;QACX,MAAM;QACN,OAAO;IACX;;IAEA;QACI,YAAY;IAChB;AACJ","sourcesContent":["@media only screen and (max-width: 900px) {\r\n    body {\r\n      display: block;\r\n      padding-top: 50px;\r\n    }\r\n\r\n    aside {\r\n        display: none;\r\n    }\r\n\r\n    main {\r\n        width: 100%;\r\n        margin-left: 0;\r\n    }\r\n\r\n    #fixed-top {\r\n        background-color: white;\r\n        display: block;\r\n        box-shadow: 1px 1px 5px 1px #ccc;\r\n        position: fixed;\r\n        width: 101%;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    #mobile-menu {\r\n        height: 40px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/mobile-tablet.css":
/*!***********************************!*\
  !*** ./src/css/mobile-tablet.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mobile_tablet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mobile-tablet.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/mobile-tablet.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mobile_tablet_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mobile_tablet_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mobile_tablet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mobile_tablet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/data/products.js":
/*!******************************!*\
  !*** ./src/data/products.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const products = 
[
    {
        id: "yuy6t7654",
        name: "Sweet Banana",
        description: "Best in class cooking oil for tasty soup and stew",
        category: "Fruits",
        category_id: "uuy87645",
        price_type: "multi",
        price: [
            { 
                Sweet_Banana_10kg: 150
            },
            { 
                Sweet_Banana_20kg: 250
            },
            { 
                Sweet_Banana_30kg: 250
            },
            { 
                Sweet_Banana_50kg: 350
            }
        ],
        largeImage: "https://i.postimg.cc/q78w6CdH/banana.jpg",
        availability: "In stock"
    },
    {
        id: "pouy6t7654",
        name: "Unriped Plantain",
        description: "This is the same unriped plantain that Adam and eve ate in the garden",
        category: "Vegetable",
        stars: "5",
        total_sold: "23",
        category_id: "uuy65235",
        price_type: "multi",
        price: [
            { 
                Unriped_Plantain_10kg: "150"
            },
            { 
                Unriped_Plantain_20kg: "250"
            },
            { 
                Unriped_Plantain_30kg: "350"
            },
            { 
                Unriped_Plantain_50kg: "450"
            }
        ],
        largeImage: "https://i.postimg.cc/wBJf5GLP/plantain.jpg",
        availability: "In stock"

    },
    {
        id: "yuyip6t7654",
        name: "Palm Oil",
        description: "Best in class cooking oil for tasty soup and stew",
        category: "Oil and condiments",
        stars: "4",
        total_sold: "123",
        category_id: "uuy65235",
        price_type: "multi",
        price: [
            { 
                Unriped_Plantain_10kg: "150"
            },
            { 
                Unriped_Plantain_20kg: "250"
            },
            { 
                Unriped_Plantain_30kg: "350"
            },
            { 
                Unriped_Plantain_50kg: "450"
            }
        ],
        largeImage: "https://i.postimg.cc/sD6N3S3n/condensed-palm-oil.jpg",
        availability: "In stock"

    },
    {
        id: "yuyew6top54",
        name: "Onions",
        description: "Sweet aroma onions for the best cooking flavour",
        category: "Vegetable",
        stars: "5",
        total_sold: "23",
        category_id: "uuy65235",
        price_type: "multi",
        price: [
            { 
                Unriped_Plantain_10kg: "150"
            },
            { 
                Unriped_Plantain_20kg: "250"
            },
            { 
                Unriped_Plantain_30kg: "350"
            },
            { 
                Unriped_Plantain_50kg: "450"
            }
        ],
        largeImage: "https://i.postimg.cc/76kBKnNL/onions.jpg",
        availability: "In stock"

    },
    {
        id: "ew6t76j54",
        name: "Beef",
        description: "Special beef from the normadic Fulani herdman",
        category: "Vegetable",
        stars: "5",
        total_sold: "23",
        category_id: "uuy65235",
        price_type: "multi",
        price: [
            { 
                Unriped_Plantain_10kg: "150"
            },
            { 
                Unriped_Plantain_20kg: "250"
            },
            { 
                Unriped_Plantain_30kg: "350"
            },
            { 
                Unriped_Plantain_50kg: "450"
            }
        ],
        largeImage: "https://i.postimg.cc/C5Ks2Pnw/beef.jpg",
        availability: "In stock"

    },
    {
        id: "uyewiu6t76j54",
        name: "Okra",
        description: "Sweet okra for a delicious 'draw' soup",
        category: "Vegetable",
        stars: "5",
        total_sold: "23",
        category_id: "uuy65235",
        price_type: "multi",
        price: [
            { 
                Unriped_Plantain_10kg: "150"
            },
            { 
                Unriped_Plantain_20kg: "250"
            },
            { 
                Unriped_Plantain_30kg: "350"
            },
            { 
                Unriped_Plantain_50kg: "450"
            }
        ],
        largeImage: "https://i.postimg.cc/3NLnJ5Qy/okra.jpg",
        availability: "In stock"

    },
    {
        id: "uyeloij6j54",
        name: "Ginger",
        description: "Ginger up your life with finest ginger havested on demand",
        category: "Vegetable",
        stars: "5",
        total_sold: "23",
        category_id: "uuy65235",
        price_type: "multi",
        price: [
            { 
                Unriped_Plantain_10kg: "150"
            },
            { 
                Unriped_Plantain_20kg: "250"
            },
            { 
                Unriped_Plantain_30kg: "350"
            },
            { 
                Unriped_Plantain_50kg: "450"
            }
        ],
        largeImage: "https://i.postimg.cc/52DKCVYL/ginger.jpg",
        availability: "In stock"

    },
    {
        id: "u000loij6j54",
        name: "curry Powder",
        description: "Curry Powder fuit thefrshest brred",
        category: "Spices",
        stars: "5",
        total_sold: "23",
        category_id: "uuy6oj5235",
        price_type: "multi",
        price: [
            { 
                Unriped_Plantain_10kg: "150"
            },
            { 
                Unriped_Plantain_20kg: "250"
            },
            { 
                Unriped_Plantain_30kg: "350"
            },
            { 
                Unriped_Plantain_50kg: "450"
            }
        ],
        largeImage: "https://i.postimg.cc/QdFnCttj/curry-powder.jpg",
        availability: "In stock"

    },
    {
        id: "uyeloij6j54",
        name: "curry Powder",
        description: "Curry Powder fuit thefrshest brred",
        category: "Spices",
        stars: "5",
        total_sold: "23",
        category_id: "uuy65235",
        price_type: "multi",
        price: [
            { 
                Unriped_Plantain_10kg: "150"
            },
            { 
                Unriped_Plantain_20kg: "250"
            },
            { 
                Unriped_Plantain_30kg: "350"
            },
            { 
                Unriped_Plantain_50kg: "450"
            }
        ],
        largeImage: "https://i.postimg.cc/QdFnCttj/curry-powder.jpg",
        availability: "In stock"

    }
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/js/dom.js");
/* harmony import */ var _salvattore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salvattore.js */ "./src/js/salvattore.js");
/* harmony import */ var _salvattore_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_salvattore_js__WEBPACK_IMPORTED_MODULE_2__);






const App = (() => {

    const display = () => {
        const elements = [
            'chevron-down', 
            'chevron-up',
            'chevron-down-mobile', 
            'chevron-up-mobile', 
            'user-dropdown-desktop',
            'user-dropdown-mobile'
        ];

        _dom_js__WEBPACK_IMPORTED_MODULE_1__.userIcons.forEach( 
            icon => icon.addEventListener("click", () => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.toggleUserInfo)(elements) )
        );

        const shoppingBaskets = [
            'shopping-basket-desktop',
            'shopping-basket-mobile'
        ]

        _dom_js__WEBPACK_IMPORTED_MODULE_1__.shoppingCartIcons.forEach( 
            icon => icon.addEventListener("click", () => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.toggleShoppingCarts)(shoppingBaskets) )
        )
        
        ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayCategories)();
        
        const everyProduct = String(window.location.hash).replace(/#/, '').replace(/_/gi, ' ')
        if (!window.location.hash || everyProduct.toLocaleLowerCase() === "all products") {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayAllProducts)();
            _salvattore_js__WEBPACK_IMPORTED_MODULE_2___default().rescanMediaQueries();
        } else {
            const thisCategory = window.location.hash.replace(/#/, '').replace(/_/gi, ' ');
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getProductOfSelectedCategory)(thisCategory);
            _salvattore_js__WEBPACK_IMPORTED_MODULE_2___default().rescanMediaQueries();
        }

        window.addEventListener('hashchange', function() {
            const thisCategory = window.location.hash.replace(/#/, '').replace(/_/gi, ' ');
            
            if (!window.location.hash || String(thisCategory).trim().toLocaleLowerCase() === "all products") {
                
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayAllProducts)();
                _salvattore_js__WEBPACK_IMPORTED_MODULE_2___default().rescanMediaQueries();
                return
            } else {
                
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getProductOfSelectedCategory)(thisCategory);
                _salvattore_js__WEBPACK_IMPORTED_MODULE_2___default().rescanMediaQueries();            
            }

        }, false);
    }

    return {
        display,
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shoppingCartIcons": () => (/* binding */ shoppingCartIcons),
/* harmony export */   "userIcons": () => (/* binding */ userIcons),
/* harmony export */   "categoryLinks": () => (/* binding */ categoryLinks)
/* harmony export */ });
const shoppingCartIcons = document.querySelectorAll(".cart")
const userIcons = document.querySelectorAll(".user");
const categoryLinks = () => document.querySelectorAll('#category-list ul li')


/***/ }),

/***/ "./src/js/salvattore.js":
/*!******************************!*\
  !*** ./src/js/salvattore.js ***!
  \******************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Salvattore 1.0.9 by @rnmp and @ppold
 * https://github.com/rnmp/salvattore
 */
(function(root, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {} //else {
    //   root.salvattore = factory();
    // }
  }(this, function() {
  /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
  
  if (!window.matchMedia) {
      window.matchMedia = function() {
          "use strict";
  
          // For browsers that support matchMedium api such as IE 9 and webkit
          var styleMedia = (window.styleMedia || window.media);
  
          // For those that don't support matchMedium
          if (!styleMedia) {
              var style       = document.createElement('style'),
                  script      = document.getElementsByTagName('script')[0],
                  info        = null;
  
              style.type  = 'text/css';
              style.id    = 'matchmediajs-test';
  
              script.parentNode.insertBefore(style, script);
  
              // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
              info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;
  
              styleMedia = {
                  matchMedium: function(media) {
                      var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';
  
                      // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                      if (style.styleSheet) {
                          style.styleSheet.cssText = text;
                      } else {
                          style.textContent = text;
                      }
  
                      // Test if media query is true or false
                      return info.width === '1px';
                  }
              };
          }
  
          return function(media) {
              return {
                  matches: styleMedia.matchMedium(media || 'all'),
                  media: media || 'all'
              };
          };
      }();
  }
  
  /*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
  (function(){
      "use strict";
  
      // Bail out for browsers that have addListener support
      if (window.matchMedia && window.matchMedia('all').addListener) {
          return false;
      }
  
      var localMatchMedia = window.matchMedia,
          hasMediaQueries = localMatchMedia('only all').matches,
          isListening     = false,
          timeoutID       = 0,    // setTimeout for debouncing 'handleChange'
          queries         = [],   // Contains each 'mql' and associated 'listeners' if 'addListener' is used
          handleChange    = function(evt) {
              // Debounce
              clearTimeout(timeoutID);
  
              timeoutID = setTimeout(function() {
                  for (var i = 0, il = queries.length; i < il; i++) {
                      var mql         = queries[i].mql,
                          listeners   = queries[i].listeners || [],
                          matches     = localMatchMedia(mql.media).matches;
  
                      // Update mql.matches value and call listeners
                      // Fire listeners only if transitioning to or from matched state
                      if (matches !== mql.matches) {
                          mql.matches = matches;
  
                          for (var j = 0, jl = listeners.length; j < jl; j++) {
                              listeners[j].call(window, mql);
                          }
                      }
                  }
              }, 30);
          };
  
      window.matchMedia = function(media) {
          var mql         = localMatchMedia(media),
              listeners   = [],
              index       = 0;
  
          mql.addListener = function(listener) {
              // Changes would not occur to css media type so return now (Affects IE <= 8)
              if (!hasMediaQueries) {
                  return;
              }
  
              // Set up 'resize' listener for browsers that support CSS3 media queries (Not for IE <= 8)
              // There should only ever be 1 resize listener running for performance
              if (!isListening) {
                  isListening = true;
                  window.addEventListener('resize', handleChange, true);
              }
  
              // Push object only if it has not been pushed already
              if (index === 0) {
                  index = queries.push({
                      mql         : mql,
                      listeners   : listeners
                  });
              }
  
              listeners.push(listener);
          };
  
          mql.removeListener = function(listener) {
              for (var i = 0, il = listeners.length; i < il; i++){
                  if (listeners[i] === listener){
                      listeners.splice(i, 1);
                  }
              }
          };
  
          return mql;
      };
  }());
  
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
  
  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
  
  // MIT license
  
  (function() {
      "use strict";
  
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] ||
              window[vendors[x]+'CancelRequestAnimationFrame'];
      }
  
      if (!window.requestAnimationFrame)
          window.requestAnimationFrame = function(callback, element) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
              lastTime = currTime + timeToCall;
              return id;
          };
  
      if (!window.cancelAnimationFrame)
          window.cancelAnimationFrame = function(id) {
              clearTimeout(id);
          };
  }());
  
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
  
  if (typeof window.CustomEvent !== "function") {
    (function() {
      "use strict";
      function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
       }
  
      CustomEvent.prototype = window.Event.prototype;
  
      window.CustomEvent = CustomEvent;
    })();
  }
  
  /* jshint laxcomma: true */
  var salvattore = (function (global, document, undefined) {
  "use strict";
  
  var self = {},
      grids = [],
      mediaRules = [],
      mediaQueries = [],
      add_to_dataset = function(element, key, value) {
        // uses dataset function or a fallback for <ie10
        if (element.dataset) {
          element.dataset[key] = value;
        } else {
          element.setAttribute("data-" + key, value);
        }
        return;
      };
  
  self.obtainGridSettings = function obtainGridSettings(element) {
    // returns the number of columns and the classes a column should have,
    // from computing the style of the ::before pseudo-element of the grid.
  
    var computedStyle = global.getComputedStyle(element, ":before")
      , content = computedStyle.getPropertyValue("content").slice(1, -1)
      , matchResult = content.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/)
      , numberOfColumns = 1
      , columnClasses = []
    ;
  
    if (matchResult) {
      numberOfColumns = matchResult[1];
      columnClasses = matchResult[2];
      columnClasses = columnClasses? columnClasses.split(".") : ["column"];
    } else {
      matchResult = content.match(/^\s*\.(.+)\s+(\d+)\s*$/);
      if (matchResult) {
        columnClasses = matchResult[1];
        numberOfColumns = matchResult[2];
        if (numberOfColumns) {
              numberOfColumns = numberOfColumns.split(".");
        }
      }
    }
  
    return {
      numberOfColumns: numberOfColumns,
      columnClasses: columnClasses
    };
  };
  
  
  self.addColumns = function addColumns(grid, items) {
    // from the settings obtained, it creates columns with
    // the configured classes and adds to them a list of items.
  
    var settings = self.obtainGridSettings(grid)
      , numberOfColumns = settings.numberOfColumns
      , columnClasses = settings.columnClasses
      , columnsItems = new Array(+numberOfColumns)
      , columnsFragment = document.createDocumentFragment()
      , i = numberOfColumns
      , selector
    ;
  
    while (i-- !== 0) {
      selector = "[data-columns] > *:nth-child(" + numberOfColumns + "n-" + i + ")";
      columnsItems.push(items.querySelectorAll(selector));
    }
  
    columnsItems.forEach(function append_to_grid_fragment(rows) {
      var column = document.createElement("div")
        , rowsFragment = document.createDocumentFragment()
      ;
  
      column.className = columnClasses.join(" ");
  
      Array.prototype.forEach.call(rows, function append_to_column(row) {
        rowsFragment.appendChild(row);
      });
      column.appendChild(rowsFragment);
      columnsFragment.appendChild(column);
    });
  
    grid.appendChild(columnsFragment);
    add_to_dataset(grid, 'columns', numberOfColumns);
  };
  
  
  self.removeColumns = function removeColumns(grid) {
    // removes all the columns from a grid, and returns a list
    // of items sorted by the ordering of columns.
  
    var range = document.createRange();
    range.selectNodeContents(grid);
  
    var columns = Array.prototype.filter.call(range.extractContents().childNodes, function filter_elements(node) {
      return node instanceof global.HTMLElement;
    });
  
    var numberOfColumns = columns.length
      , numberOfRowsInFirstColumn = columns[0].childNodes.length
      , sortedRows = new Array(numberOfRowsInFirstColumn * numberOfColumns)
    ;
  
    Array.prototype.forEach.call(columns, function iterate_columns(column, columnIndex) {
      Array.prototype.forEach.call(column.children, function iterate_rows(row, rowIndex) {
        sortedRows[rowIndex * numberOfColumns + columnIndex] = row;
      });
    });
  
    var container = document.createElement("div");
    add_to_dataset(container, 'columns', 0);
  
    sortedRows.filter(function filter_non_null(child) {
      return !!child;
    }).forEach(function append_row(child) {
      container.appendChild(child);
    });
  
    return container;
  };
  
  
  self.recreateColumns = function recreateColumns(grid) {
    // removes all the columns from the grid, and adds them again,
    // it is used when the number of columns change.
  
    global.requestAnimationFrame(function render_after_css_mediaQueryChange() {
      self.addColumns(grid, self.removeColumns(grid));
      var columnsChange = new CustomEvent("columnsChange");
      grid.dispatchEvent(columnsChange);
    });
  };
  
  
  self.mediaQueryChange = function mediaQueryChange(mql) {
    // recreates the columns when a media query matches the current state
    // of the browser.
  
    if (mql.matches) {
      Array.prototype.forEach.call(grids, self.recreateColumns);
    }
  };
  
  
  self.getCSSRules = function getCSSRules(stylesheet) {
    // returns a list of css rules from a stylesheet
  
    var cssRules;
    try {
      cssRules = stylesheet.sheet.cssRules || stylesheet.sheet.rules;
    } catch (e) {
      return [];
    }
  
    return cssRules || [];
  };
  
  
  self.getStylesheets = function getStylesheets() {
    // returns a list of all the styles in the document (that are accessible).
  
    var inlineStyleBlocks = Array.prototype.slice.call(document.querySelectorAll("style"));
    inlineStyleBlocks.forEach(function(stylesheet, idx) {
      if (stylesheet.type !== 'text/css' && stylesheet.type !== '') {
        inlineStyleBlocks.splice(idx, 1);
      }
    });
  
    return Array.prototype.concat.call(
      inlineStyleBlocks,
      Array.prototype.slice.call(document.querySelectorAll("link[rel='stylesheet']"))
    );
  };
  
  
  self.mediaRuleHasColumnsSelector = function mediaRuleHasColumnsSelector(rules) {
    // checks if a media query css rule has in its contents a selector that
    // styles the grid.
  
    var i, rule;
  
    try {
      i = rules.length;
    }
    catch (e) {
      i = 0;
    }
  
    while (i--) {
      rule = rules[i];
      if (rule.selectorText && rule.selectorText.match(/\[data-columns\](.*)::?before$/)) {
        return true;
      }
    }
  
    return false;
  };
  
  
  self.scanMediaQueries = function scanMediaQueries() {
    // scans all the stylesheets for selectors that style grids,
    // if the matchMedia API is supported.
  
    var newMediaRules = [];
  
    if (!global.matchMedia) {
      return;
    }
  
    self.getStylesheets().forEach(function extract_rules(stylesheet) {
      Array.prototype.forEach.call(self.getCSSRules(stylesheet), function filter_by_column_selector(rule) {
        // rule.media throws an 'not implemented error' in ie9 for import rules occasionally
        try {
          if (rule.media && rule.cssRules && self.mediaRuleHasColumnsSelector(rule.cssRules)) {
            newMediaRules.push(rule);
          }
        } catch (e) {}
      });
    });
  
    // remove matchMedia listeners from the old rules
    var oldRules = mediaRules.filter(function (el) {
        return newMediaRules.indexOf(el) === -1;
    });
    mediaQueries.filter(function (el) {
      return oldRules.indexOf(el.rule) !== -1;
    }).forEach(function (el) {
        el.mql.removeListener(self.mediaQueryChange);
    });
    mediaQueries = mediaQueries.filter(function (el) {
      return oldRules.indexOf(el.rule) === -1;
    });
  
    // add matchMedia listeners to the new rules
    newMediaRules.filter(function (el) {
      return mediaRules.indexOf(el) == -1;
    }).forEach(function (rule) {
        var mql = global.matchMedia(rule.media.mediaText);
        mql.addListener(self.mediaQueryChange);
        mediaQueries.push({rule: rule, mql:mql});
    });
  
    // swap mediaRules with the new set
    mediaRules.length = 0;
    mediaRules = newMediaRules;
  };
  
  
  self.rescanMediaQueries = function rescanMediaQueries() {
      self.scanMediaQueries();
      Array.prototype.forEach.call(grids, self.recreateColumns);
  };
  
  
  self.nextElementColumnIndex = function nextElementColumnIndex(grid, fragments) {
    // returns the index of the column where the given element must be added.
  
    var children = grid.children
      , m = children.length
      , lowestRowCount = 0
      , child
      , currentRowCount
      , i
      , index = 0
    ;
    for (i = 0; i < m; i++) {
      child = children[i];
      currentRowCount = child.children.length + (fragments[i].children || fragments[i].childNodes).length;
    if(lowestRowCount === 0) {
      lowestRowCount = currentRowCount;
    }
      if(currentRowCount < lowestRowCount) {
        index = i;
        lowestRowCount = currentRowCount;
      }
    }
  
    return index;
  };
  
  
  self.createFragmentsList = function createFragmentsList(quantity) {
    // returns a list of fragments
  
    var fragments = new Array(quantity)
      , i = 0
    ;
  
    while (i !== quantity) {
      fragments[i] = document.createDocumentFragment();
      i++;
    }
  
    return fragments;
  };
  
  
  self.appendElements = function appendElements(grid, elements) {
    // adds a list of elements to the end of a grid
  
    var columns = grid.children
      , numberOfColumns = columns.length
      , fragments = self.createFragmentsList(numberOfColumns)
    ;
  
    Array.prototype.forEach.call(elements, function append_to_next_fragment(element) {
      var columnIndex = self.nextElementColumnIndex(grid, fragments);
      fragments[columnIndex].appendChild(element);
    });
  
    Array.prototype.forEach.call(columns, function insert_column(column, index) {
      column.appendChild(fragments[index]);
    });
  };
  
  
  self.prependElements = function prependElements(grid, elements) {
    // adds a list of elements to the start of a grid
  
    var columns = grid.children
      , numberOfColumns = columns.length
      , fragments = self.createFragmentsList(numberOfColumns)
      , columnIndex = numberOfColumns - 1
    ;
  
    elements.forEach(function append_to_next_fragment(element) {
      var fragment = fragments[columnIndex];
      fragment.insertBefore(element, fragment.firstChild);
      if (columnIndex === 0) {
        columnIndex = numberOfColumns - 1;
      } else {
        columnIndex--;
      }
    });
  
    Array.prototype.forEach.call(columns, function insert_column(column, index) {
      column.insertBefore(fragments[index], column.firstChild);
    });
  
    // populates a fragment with n columns till the right
    var fragment = document.createDocumentFragment()
      , numberOfColumnsToExtract = elements.length % numberOfColumns
    ;
  
    while (numberOfColumnsToExtract-- !== 0) {
      fragment.appendChild(grid.lastChild);
    }
  
    // adds the fragment to the left
    grid.insertBefore(fragment, grid.firstChild);
  };
  
  
  self.registerGrid = function registerGrid (grid) {
    if (global.getComputedStyle(grid).display === "none") {
      return;
    }
  
    // retrieve the list of items from the grid itself
    var range = document.createRange();
    range.selectNodeContents(grid);
  
    var items = document.createElement("div");
    items.appendChild(range.extractContents());
  
  
    add_to_dataset(items, 'columns', 0);
    self.addColumns(grid, items);
    grids.push(grid);
  };
  
  
  self.init = function init() {
    // adds required CSS rule to hide 'content' based
    // configuration.
  
    var css = document.createElement("style");
    css.innerHTML = "[data-columns]::before{display:block;visibility:hidden;position:absolute;font-size:1px;}";
    document.head.appendChild(css);
  
    // scans all the grids in the document and generates
    // columns from their configuration.
  
    var gridElements = document.querySelectorAll("[data-columns]");
    Array.prototype.forEach.call(gridElements, self.registerGrid);
    self.scanMediaQueries();
  };
  
  self.init();
  
  return {
    appendElements: self.appendElements,
    prependElements: self.prependElements,
    registerGrid: self.registerGrid,
    recreateColumns: self.recreateColumns,
    rescanMediaQueries: self.rescanMediaQueries,
    init: self.init,
  
    // maintains backwards compatibility with underscore style method names
    append_elements: self.appendElements,
    prepend_elements: self.prependElements,
    register_grid: self.registerGrid,
    recreate_columns: self.recreateColumns,
    rescan_media_queries: self.rescanMediaQueries
  };
  
  })(window, window.document);
  
  return salvattore;
  }));

  //export default salvattore

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleUserInfo": () => (/* binding */ toggleUserInfo),
/* harmony export */   "toggleShoppingCarts": () => (/* binding */ toggleShoppingCarts),
/* harmony export */   "displayCategories": () => (/* binding */ displayCategories),
/* harmony export */   "displayAllProducts": () => (/* binding */ displayAllProducts),
/* harmony export */   "getProductOfSelectedCategory": () => (/* binding */ getProductOfSelectedCategory)
/* harmony export */ });
/* harmony import */ var _data_products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/products.js */ "./src/data/products.js");


const toggleUserInfo = (elements) => {

    const shoppingBaskets = [
        'shopping-basket-desktop',
        'shopping-basket-mobile'
    ]
       // hide shopping baskets if open
    if (!document.getElementById(`${shoppingBaskets[0]}`).classList.contains('hidden')) {
        const shoppingCartIcons = document.querySelectorAll(".cart");
        [...shoppingCartIcons][0].click();
    }
      
    elements.forEach( (item) => {
        const thisSelector = document.getElementById(`${item}`);
        thisSelector.classList.toggle('hidden');
    })

}

const toggleShoppingCarts = (shoppingBaskets) => {

    const userInfo = [
        'user-dropdown-desktop',
        'user-dropdown-mobile'
    ]

    // hide userInfo if open
    if (!document.getElementById(`${userInfo[0]}`).classList.contains('hidden')) {
        const userIcons = document.querySelectorAll(".user");
        [...userIcons][0].click();
    }

    shoppingBaskets.forEach( (basket) => {
        const thisBasket = document.getElementById(`${basket}`);
        thisBasket.classList.toggle("hidden");
    })


}

const displayCategories = () => {
    const allCategories = new Set([..._data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"].map( item => item.category)])
    const categoryUL = document.querySelector('#category-list ul')
    let listOfCategories = `<li>
        <a href="#All_products"> 
            <i> 
                <span class="rounded"> 
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="16" height="16" fill="currentColor" 
                    class="bi bi-shop" viewBox="0 0 16 16">
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                    </svg>
                </span> 
                <span> All Products </span>
            </i>
            <span class="arrow-span invisible">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </span> 
        </a> 
    </li>`;

    for ( let value of allCategories.values() ) {
        listOfCategories+= `
        <li>
            <a href="#${value.replace(/ /gi, '_')}">
                <i>
                    <span class="rounded"> ${value[0]} </span>
                    <span>${value}</span>
                </i>
                <span class="arrow-span  invisible"">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span>
            </a>
        </li>
        `
    }

    categoryUL.innerHTML = listOfCategories;
}

const displayAllProducts = () => {
    const grid = document.getElementById('grid');
 
    const listOfProducts = _data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"].map(item => `
    <div>
        <div class="product-item">
            <img src="${item.largeImage}" alt="">
            <h2><i>${item.name}</i></h2>
            <p>
                <i>${item.description}</i>
            </p>
            <button id="${item.id}"> SHOP NOW </button>
            <p class="clear"></p>
        </div>
    </div>
    ` ).join("");

    grid.innerHTML = listOfProducts;
    
}

const getProductOfSelectedCategory = (category) => {
   const productsOfCategory = _data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter( item => item.category === category )
   const grid = document.getElementById('grid');

   const listOfProducts = productsOfCategory.map(item => `
   <div>
       <div class="product-item">
           <img src="${item.largeImage}" alt="">
           <p>
           <h2> <i> ${item.name} </i> </h2>
                <i> ${item.description} </i>
           </p>
           <button id="${item.id}"> SHOP NOW </button>
           <p class="clear"></p>
       </div>
   </div>
   ` ).join("");

   grid.innerHTML = listOfProducts;
}

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_mobile_tablet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/mobile-tablet.css */ "./src/css/mobile-tablet.css");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");




document.addEventListener("DOMContentLoaded", () => _js_app_js__WEBPACK_IMPORTED_MODULE_2__["default"].display() );

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxjQUFjLGtCQUFrQixrQkFBa0IsZUFBZTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNWxCMEM7QUFDMUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxLQUFLO0FBQzdEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsWUFBWTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELE9BQU87QUFDN0Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHNDQUFzQyw2REFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQSw2Q0FBNkMsVUFBVTtBQUN2RCw0QkFBNEIsTUFBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwyQkFBMkIsNkRBQVk7QUFDdkM7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEMscUJBQXFCLFVBQVU7QUFDL0I7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0EsMEJBQTBCLFFBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw4QkFBOEIsZ0VBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQSxzQkFBc0IsV0FBVztBQUNqQyxzQkFBc0Isa0JBQWtCO0FBQ3hDO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2hJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndCO0FBQ1M7QUFDRjtBQUMvQjtBQUNBLG9EQUFvRCwwREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtldGl6ZS8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vc3JjL2Nzcy9tb2JpbGUtdGFibGV0LmNzcyIsIndlYnBhY2s6Ly9tYXJrZXRpemUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21hcmtldGl6ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21hcmtldGl6ZS8uL3NyYy9jc3MvbWFpbi5jc3M/MmM5ZiIsIndlYnBhY2s6Ly9tYXJrZXRpemUvLi9zcmMvY3NzL21vYmlsZS10YWJsZXQuY3NzP2UzNmQiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21hcmtldGl6ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21hcmtldGl6ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tYXJrZXRpemUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tYXJrZXRpemUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYXJrZXRpemUvLi9zcmMvZGF0YS9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9tYXJrZXRpemUvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL21hcmtldGl6ZS8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vc3JjL2pzL3NhbHZhdHRvcmUuanMiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovL21hcmtldGl6ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYXJrZXRpemUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWFya2V0aXplL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXJrZXRpemUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXJrZXRpemUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXJrZXRpemUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2VcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiN0b3Age1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyBzcGFuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyBpIHtcXHJcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNrdG9wLWluZm8tYXJlYSxcXHJcXG4ubW9iaWxlLWluZm8tYXJlYSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5kZXNrdG9wLWluZm8tYXJlYSBkaXYge1xcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtaW5mby1hcmVhIGRpdiB7XFxyXFxuICAgIG1hcmdpbjogMCAxNXB4O1xcclxcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItZHJvcGRvd24tZGVza3RvcCB7XFxyXFxuICAgIHdpZHRoOjgwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDIzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1kcm9wZG93bi1tb2JpbGUge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1kcm9wZG93bi1kZXNrdG9wIHVsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAxcHggI2NjYztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgcmlnaHQ6IC0xcHg7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWRyb3Bkb3duLW1vYmlsZSB1bCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMXB4ICNjY2M7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIHJpZ2h0OiA2MHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItZHJvcGRvd24tZGVza3RvcCB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWRyb3Bkb3duLWRlc2t0b3AgdWwgbGk6aG92ZXIge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1kcm9wZG93bi1tb2JpbGUgdWwgbGkge1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNmaXhlZC10b3Age1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaG9wcGluZy1iYXNrZXQtZGVza3RvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvcHBpbmctYmFza2V0LWRlc2t0b3AgdWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMXB4ICNjY2M7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IC0xNTBweDtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3BwaW5nLWJhc2tldC1tb2JpbGUgdWwge1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAxcHggIzk5OTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gICAgei1pbmRleDogMjAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1jYXRlZ29yaWVzLWhlYWRpbmcge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhci1kZXNrdG9wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggIzAwMDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiAyMHB4ICBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXItZGVza3RvcCBzcGFuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhci1kZXNrdG9wIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2R1Y3QtY2F0ZWdvcmllcy1oZWFkaW5nIHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3J5LWxpc3QgdWwge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yeS1saXN0IGxpIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY2F0ZWdvcnktbGlzdCBhIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgcGFkZGluZzogMXB4IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQgLnByb2R1Y3QtaXRlbSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQgLnByb2R1Y3QtaXRlbSBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQgLnByb2R1Y3QtaXRlbSBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDdweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdW5kZWQge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcnJvdy1zcGFuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzVweDtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcmlnaHQ6IC0zMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyIHtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcXHJcXG5cXHQjZ3JpZFtkYXRhLWNvbHVtbnNdOjpiZWZvcmUge1xcclxcblxcdFxcdGNvbnRlbnQ6ICcxIC5jb2x1bW4uc2l6ZS0xb2YxJztcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHQjZ3JpZFtkYXRhLWNvbHVtbnNdOjpiZWZvcmUge1xcclxcblxcdFxcdGNvbnRlbnQ6ICcyIC5jb2x1bW4uc2l6ZS0xb2YyJztcXHJcXG5cXHR9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxyXFxuXFx0I2dyaWRbZGF0YS1jb2x1bW5zXTo6YmVmb3JlIHtcXHJcXG5cXHRcXHRjb250ZW50OiAnMyAuY29sdW1uLnNpemUtMW9mMyc7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uY29sdW1uIHsgZmxvYXQ6IGxlZnQ7IH1cXHJcXG4uc2l6ZS0xb2YxIHsgd2lkdGg6IDEwMCU7IH1cXHJcXG4uc2l6ZS0xb2YyIHsgd2lkdGg6IDUwJTsgfVxcclxcbi5zaXplLTFvZjMgeyB3aWR0aDogMzMuMzMzJTsgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxtQkFBbUI7QUFDdkI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFEQUFxRDtJQUNyRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMs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bnRcIjpbXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2VcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiN0b3Age1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyBzcGFuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyBpIHtcXHJcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNrdG9wLWluZm8tYXJlYSxcXHJcXG4ubW9iaWxlLWluZm8tYXJlYSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5kZXNrdG9wLWluZm8tYXJlYSBkaXYge1xcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtaW5mby1hcmVhIGRpdiB7XFxyXFxuICAgIG1hcmdpbjogMCAxNXB4O1xcclxcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItZHJvcGRvd24tZGVza3RvcCB7XFxyXFxuICAgIHdpZHRoOjgwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDIzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1kcm9wZG93bi1tb2JpbGUge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1kcm9wZG93bi1kZXNrdG9wIHVsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAxcHggI2NjYztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgcmlnaHQ6IC0xcHg7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWRyb3Bkb3duLW1vYmlsZSB1bCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMXB4ICNjY2M7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIHJpZ2h0OiA2MHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItZHJvcGRvd24tZGVza3RvcCB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWRyb3Bkb3duLWRlc2t0b3AgdWwgbGk6aG92ZXIge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1kcm9wZG93bi1tb2JpbGUgdWwgbGkge1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNmaXhlZC10b3Age1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaG9wcGluZy1iYXNrZXQtZGVza3RvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvcHBpbmctYmFza2V0LWRlc2t0b3AgdWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMXB4ICNjY2M7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IC0xNTBweDtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3BwaW5nLWJhc2tldC1tb2JpbGUgdWwge1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAxcHggIzk5OTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gICAgei1pbmRleDogMjAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1jYXRlZ29yaWVzLWhlYWRpbmcge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhci1kZXNrdG9wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggIzAwMDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiAyMHB4ICBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXItZGVza3RvcCBzcGFuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhci1kZXNrdG9wIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2R1Y3QtY2F0ZWdvcmllcy1oZWFkaW5nIHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3J5LWxpc3QgdWwge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yeS1saXN0IGxpIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY2F0ZWdvcnktbGlzdCBhIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgcGFkZGluZzogMXB4IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQgLnByb2R1Y3QtaXRlbSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQgLnByb2R1Y3QtaXRlbSBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQgLnByb2R1Y3QtaXRlbSBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDdweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdW5kZWQge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcnJvdy1zcGFuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzVweDtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcmlnaHQ6IC0zMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyIHtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcXHJcXG5cXHQjZ3JpZFtkYXRhLWNvbHVtbnNdOjpiZWZvcmUge1xcclxcblxcdFxcdGNvbnRlbnQ6ICcxIC5jb2x1bW4uc2l6ZS0xb2YxJztcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHQjZ3JpZFtkYXRhLWNvbHVtbnNdOjpiZWZvcmUge1xcclxcblxcdFxcdGNvbnRlbnQ6ICcyIC5jb2x1bW4uc2l6ZS0xb2YyJztcXHJcXG5cXHR9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxyXFxuXFx0I2dyaWRbZGF0YS1jb2x1bW5zXTo6YmVmb3JlIHtcXHJcXG5cXHRcXHRjb250ZW50OiAnMyAuY29sdW1uLnNpemUtMW9mMyc7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uY29sdW1uIHsgZmxvYXQ6IGxlZnQ7IH1cXHJcXG4uc2l6ZS0xb2YxIHsgd2lkdGg6IDEwMCU7IH1cXHJcXG4uc2l6ZS0xb2YyIHsgd2lkdGg6IDUwJTsgfVxcclxcbi5zaXplLTFvZjMgeyB3aWR0aDogMzMuMzMzJTsgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYXNpZGUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2ZpeGVkLXRvcCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4ICNjY2M7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICB3aWR0aDogMTAxJTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI21vYmlsZS1tZW51IHtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21vYmlsZS10YWJsZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7TUFDRSxjQUFjO01BQ2QsaUJBQWlCO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxnQ0FBZ0M7UUFDaEMsZUFBZTtRQUNmLFdBQVc7UUFDWCxNQUFNO1FBQ04sT0FBTztJQUNYOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYXNpZGUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2ZpeGVkLXRvcCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4ICNjY2M7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICB3aWR0aDogMTAxJTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI21vYmlsZS1tZW51IHtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2JpbGUtdGFibGV0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9iaWxlLXRhYmxldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcHJvZHVjdHMgPSBcclxuW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiBcInl1eTZ0NzY1NFwiLFxyXG4gICAgICAgIG5hbWU6IFwiU3dlZXQgQmFuYW5hXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQmVzdCBpbiBjbGFzcyBjb29raW5nIG9pbCBmb3IgdGFzdHkgc291cCBhbmQgc3Rld1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZydWl0c1wiLFxyXG4gICAgICAgIGNhdGVnb3J5X2lkOiBcInV1eTg3NjQ1XCIsXHJcbiAgICAgICAgcHJpY2VfdHlwZTogXCJtdWx0aVwiLFxyXG4gICAgICAgIHByaWNlOiBbXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBTd2VldF9CYW5hbmFfMTBrZzogMTUwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBTd2VldF9CYW5hbmFfMjBrZzogMjUwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBTd2VldF9CYW5hbmFfMzBrZzogMjUwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBTd2VldF9CYW5hbmFfNTBrZzogMzUwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhcmdlSW1hZ2U6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvcTc4dzZDZEgvYmFuYW5hLmpwZ1wiLFxyXG4gICAgICAgIGF2YWlsYWJpbGl0eTogXCJJbiBzdG9ja1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcInBvdXk2dDc2NTRcIixcclxuICAgICAgICBuYW1lOiBcIlVucmlwZWQgUGxhbnRhaW5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBzYW1lIHVucmlwZWQgcGxhbnRhaW4gdGhhdCBBZGFtIGFuZCBldmUgYXRlIGluIHRoZSBnYXJkZW5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJWZWdldGFibGVcIixcclxuICAgICAgICBzdGFyczogXCI1XCIsXHJcbiAgICAgICAgdG90YWxfc29sZDogXCIyM1wiLFxyXG4gICAgICAgIGNhdGVnb3J5X2lkOiBcInV1eTY1MjM1XCIsXHJcbiAgICAgICAgcHJpY2VfdHlwZTogXCJtdWx0aVwiLFxyXG4gICAgICAgIHByaWNlOiBbXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBVbnJpcGVkX1BsYW50YWluXzEwa2c6IFwiMTUwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIFVucmlwZWRfUGxhbnRhaW5fMjBrZzogXCIyNTBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgVW5yaXBlZF9QbGFudGFpbl8zMGtnOiBcIjM1MFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBVbnJpcGVkX1BsYW50YWluXzUwa2c6IFwiNDUwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFyZ2VJbWFnZTogXCJodHRwczovL2kucG9zdGltZy5jYy93QkpmNUdMUC9wbGFudGFpbi5qcGdcIixcclxuICAgICAgICBhdmFpbGFiaWxpdHk6IFwiSW4gc3RvY2tcIlxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwieXV5aXA2dDc2NTRcIixcclxuICAgICAgICBuYW1lOiBcIlBhbG0gT2lsXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQmVzdCBpbiBjbGFzcyBjb29raW5nIG9pbCBmb3IgdGFzdHkgc291cCBhbmQgc3Rld1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIk9pbCBhbmQgY29uZGltZW50c1wiLFxyXG4gICAgICAgIHN0YXJzOiBcIjRcIixcclxuICAgICAgICB0b3RhbF9zb2xkOiBcIjEyM1wiLFxyXG4gICAgICAgIGNhdGVnb3J5X2lkOiBcInV1eTY1MjM1XCIsXHJcbiAgICAgICAgcHJpY2VfdHlwZTogXCJtdWx0aVwiLFxyXG4gICAgICAgIHByaWNlOiBbXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBVbnJpcGVkX1BsYW50YWluXzEwa2c6IFwiMTUwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIFVucmlwZWRfUGxhbnRhaW5fMjBrZzogXCIyNTBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgVW5yaXBlZF9QbGFudGFpbl8zMGtnOiBcIjM1MFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBVbnJpcGVkX1BsYW50YWluXzUwa2c6IFwiNDUwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFyZ2VJbWFnZTogXCJodHRwczovL2kucG9zdGltZy5jYy9zRDZOM1Mzbi9jb25kZW5zZWQtcGFsbS1vaWwuanBnXCIsXHJcbiAgICAgICAgYXZhaWxhYmlsaXR5OiBcIkluIHN0b2NrXCJcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcInl1eWV3NnRvcDU0XCIsXHJcbiAgICAgICAgbmFtZTogXCJPbmlvbnNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTd2VldCBhcm9tYSBvbmlvbnMgZm9yIHRoZSBiZXN0IGNvb2tpbmcgZmxhdm91clwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlZlZ2V0YWJsZVwiLFxyXG4gICAgICAgIHN0YXJzOiBcIjVcIixcclxuICAgICAgICB0b3RhbF9zb2xkOiBcIjIzXCIsXHJcbiAgICAgICAgY2F0ZWdvcnlfaWQ6IFwidXV5NjUyMzVcIixcclxuICAgICAgICBwcmljZV90eXBlOiBcIm11bHRpXCIsXHJcbiAgICAgICAgcHJpY2U6IFtcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIFVucmlwZWRfUGxhbnRhaW5fMTBrZzogXCIxNTBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgVW5yaXBlZF9QbGFudGFpbl8yMGtnOiBcIjI1MFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBVbnJpcGVkX1BsYW50YWluXzMwa2c6IFwiMzUwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIFVucmlwZWRfUGxhbnRhaW5fNTBrZzogXCI0NTBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYXJnZUltYWdlOiBcImh0dHBzOi8vaS5wb3N0aW1nLmNjLzc2a0JLbk5ML29uaW9ucy5qcGdcIixcclxuICAgICAgICBhdmFpbGFiaWxpdHk6IFwiSW4gc3RvY2tcIlxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiZXc2dDc2ajU0XCIsXHJcbiAgICAgICAgbmFtZTogXCJCZWVmXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3BlY2lhbCBiZWVmIGZyb20gdGhlIG5vcm1hZGljIEZ1bGFuaSBoZXJkbWFuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiVmVnZXRhYmxlXCIsXHJcbiAgICAgICAgc3RhcnM6IFwiNVwiLFxyXG4gICAgICAgIHRvdGFsX3NvbGQ6IFwiMjNcIixcclxuICAgICAgICBjYXRlZ29yeV9pZDogXCJ1dXk2NTIzNVwiLFxyXG4gICAgICAgIHByaWNlX3R5cGU6IFwibXVsdGlcIixcclxuICAgICAgICBwcmljZTogW1xyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgVW5yaXBlZF9QbGFudGFpbl8xMGtnOiBcIjE1MFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBVbnJpcGVkX1BsYW50YWluXzIwa2c6IFwiMjUwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIFVucmlwZWRfUGxhbnRhaW5fMzBrZzogXCIzNTBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgVW5yaXBlZF9QbGFudGFpbl81MGtnOiBcIjQ1MFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhcmdlSW1hZ2U6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvQzVLczJQbncvYmVlZi5qcGdcIixcclxuICAgICAgICBhdmFpbGFiaWxpdHk6IFwiSW4gc3RvY2tcIlxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwidXlld2l1NnQ3Nmo1NFwiLFxyXG4gICAgICAgIG5hbWU6IFwiT2tyYVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlN3ZWV0IG9rcmEgZm9yIGEgZGVsaWNpb3VzICdkcmF3JyBzb3VwXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiVmVnZXRhYmxlXCIsXHJcbiAgICAgICAgc3RhcnM6IFwiNVwiLFxyXG4gICAgICAgIHRvdGFsX3NvbGQ6IFwiMjNcIixcclxuICAgICAgICBjYXRlZ29yeV9pZDogXCJ1dXk2NTIzNVwiLFxyXG4gICAgICAgIHByaWNlX3R5cGU6IFwibXVsdGlcIixcclxuICAgICAgICBwcmljZTogW1xyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgVW5yaXBlZF9QbGFudGFpbl8xMGtnOiBcIjE1MFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBVbnJpcGVkX1BsYW50YWluXzIwa2c6IFwiMjUwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIFVucmlwZWRfUGxhbnRhaW5fMzBrZzogXCIzNTBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgVW5yaXBlZF9QbGFudGFpbl81MGtnOiBcIjQ1MFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhcmdlSW1hZ2U6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvM05Mbko1UXkvb2tyYS5qcGdcIixcclxuICAgICAgICBhdmFpbGFiaWxpdHk6IFwiSW4gc3RvY2tcIlxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwidXllbG9pajZqNTRcIixcclxuICAgICAgICBuYW1lOiBcIkdpbmdlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkdpbmdlciB1cCB5b3VyIGxpZmUgd2l0aCBmaW5lc3QgZ2luZ2VyIGhhdmVzdGVkIG9uIGRlbWFuZFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlZlZ2V0YWJsZVwiLFxyXG4gICAgICAgIHN0YXJzOiBcIjVcIixcclxuICAgICAgICB0b3RhbF9zb2xkOiBcIjIzXCIsXHJcbiAgICAgICAgY2F0ZWdvcnlfaWQ6IFwidXV5NjUyMzVcIixcclxuICAgICAgICBwcmljZV90eXBlOiBcIm11bHRpXCIsXHJcbiAgICAgICAgcHJpY2U6IFtcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIFVucmlwZWRfUGxhbnRhaW5fMTBrZzogXCIxNTBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgVW5yaXBlZF9QbGFudGFpbl8yMGtnOiBcIjI1MFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBVbnJpcGVkX1BsYW50YWluXzMwa2c6IFwiMzUwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIFVucmlwZWRfUGxhbnRhaW5fNTBrZzogXCI0NTBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYXJnZUltYWdlOiBcImh0dHBzOi8vaS5wb3N0aW1nLmNjLzUyREtDVllML2dpbmdlci5qcGdcIixcclxuICAgICAgICBhdmFpbGFiaWxpdHk6IFwiSW4gc3RvY2tcIlxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwidTAwMGxvaWo2ajU0XCIsXHJcbiAgICAgICAgbmFtZTogXCJjdXJyeSBQb3dkZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyeSBQb3dkZXIgZnVpdCB0aGVmcnNoZXN0IGJycmVkXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiU3BpY2VzXCIsXHJcbiAgICAgICAgc3RhcnM6IFwiNVwiLFxyXG4gICAgICAgIHRvdGFsX3NvbGQ6IFwiMjNcIixcclxuICAgICAgICBjYXRlZ29yeV9pZDogXCJ1dXk2b2o1MjM1XCIsXHJcbiAgICAgICAgcHJpY2VfdHlwZTogXCJtdWx0aVwiLFxyXG4gICAgICAgIHByaWNlOiBbXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBVbnJpcGVkX1BsYW50YWluXzEwa2c6IFwiMTUwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIFVucmlwZWRfUGxhbnRhaW5fMjBrZzogXCIyNTBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgVW5yaXBlZF9QbGFudGFpbl8zMGtnOiBcIjM1MFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBVbnJpcGVkX1BsYW50YWluXzUwa2c6IFwiNDUwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFyZ2VJbWFnZTogXCJodHRwczovL2kucG9zdGltZy5jYy9RZEZuQ3R0ai9jdXJyeS1wb3dkZXIuanBnXCIsXHJcbiAgICAgICAgYXZhaWxhYmlsaXR5OiBcIkluIHN0b2NrXCJcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcInV5ZWxvaWo2ajU0XCIsXHJcbiAgICAgICAgbmFtZTogXCJjdXJyeSBQb3dkZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyeSBQb3dkZXIgZnVpdCB0aGVmcnNoZXN0IGJycmVkXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiU3BpY2VzXCIsXHJcbiAgICAgICAgc3RhcnM6IFwiNVwiLFxyXG4gICAgICAgIHRvdGFsX3NvbGQ6IFwiMjNcIixcclxuICAgICAgICBjYXRlZ29yeV9pZDogXCJ1dXk2NTIzNVwiLFxyXG4gICAgICAgIHByaWNlX3R5cGU6IFwibXVsdGlcIixcclxuICAgICAgICBwcmljZTogW1xyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgVW5yaXBlZF9QbGFudGFpbl8xMGtnOiBcIjE1MFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBVbnJpcGVkX1BsYW50YWluXzIwa2c6IFwiMjUwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIFVucmlwZWRfUGxhbnRhaW5fMzBrZzogXCIzNTBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgVW5yaXBlZF9QbGFudGFpbl81MGtnOiBcIjQ1MFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhcmdlSW1hZ2U6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvUWRGbkN0dGovY3VycnktcG93ZGVyLmpwZ1wiLFxyXG4gICAgICAgIGF2YWlsYWJpbGl0eTogXCJJbiBzdG9ja1wiXHJcblxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0cyIsImltcG9ydCB7IFxyXG4gICAgdG9nZ2xlVXNlckluZm8sIFxyXG4gICAgdG9nZ2xlU2hvcHBpbmdDYXJ0cyxcclxuICAgIGRpc3BsYXlDYXRlZ29yaWVzLFxyXG4gICAgZGlzcGxheUFsbFByb2R1Y3RzLFxyXG4gICAgZ2V0UHJvZHVjdE9mU2VsZWN0ZWRDYXRlZ29yeSxcclxuXHJcbn0gZnJvbSAnLi91dGlscy5qcyc7XHJcblxyXG5pbXBvcnQgeyBcclxuICAgIHNob3BwaW5nQ2FydEljb25zLCBcclxuICAgIHVzZXJJY29ucyxcclxuICAgIGNhdGVnb3J5TGlua3MsXHJcblxyXG59IGZyb20gJy4vZG9tLmpzJztcclxuXHJcbmltcG9ydCAgc2FsdmF0dG9yZSBmcm9tICcuL3NhbHZhdHRvcmUuanMnO1xyXG5cclxuY29uc3QgQXBwID0gKCgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gW1xyXG4gICAgICAgICAgICAnY2hldnJvbi1kb3duJywgXHJcbiAgICAgICAgICAgICdjaGV2cm9uLXVwJyxcclxuICAgICAgICAgICAgJ2NoZXZyb24tZG93bi1tb2JpbGUnLCBcclxuICAgICAgICAgICAgJ2NoZXZyb24tdXAtbW9iaWxlJywgXHJcbiAgICAgICAgICAgICd1c2VyLWRyb3Bkb3duLWRlc2t0b3AnLFxyXG4gICAgICAgICAgICAndXNlci1kcm9wZG93bi1tb2JpbGUnXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdXNlckljb25zLmZvckVhY2goIFxyXG4gICAgICAgICAgICBpY29uID0+IGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRvZ2dsZVVzZXJJbmZvKGVsZW1lbnRzKSApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvcHBpbmdCYXNrZXRzID0gW1xyXG4gICAgICAgICAgICAnc2hvcHBpbmctYmFza2V0LWRlc2t0b3AnLFxyXG4gICAgICAgICAgICAnc2hvcHBpbmctYmFza2V0LW1vYmlsZSdcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIHNob3BwaW5nQ2FydEljb25zLmZvckVhY2goIFxyXG4gICAgICAgICAgICBpY29uID0+IGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRvZ2dsZVNob3BwaW5nQ2FydHMoc2hvcHBpbmdCYXNrZXRzKSApXHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXlDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZXZlcnlQcm9kdWN0ID0gU3RyaW5nKHdpbmRvdy5sb2NhdGlvbi5oYXNoKS5yZXBsYWNlKC8jLywgJycpLnJlcGxhY2UoL18vZ2ksICcgJylcclxuICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5oYXNoIHx8IGV2ZXJ5UHJvZHVjdC50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBcImFsbCBwcm9kdWN0c1wiKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlBbGxQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICBzYWx2YXR0b3JlLnJlc2Nhbk1lZGlhUXVlcmllcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXNDYXRlZ29yeSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoLyMvLCAnJykucmVwbGFjZSgvXy9naSwgJyAnKTtcclxuICAgICAgICAgICAgZ2V0UHJvZHVjdE9mU2VsZWN0ZWRDYXRlZ29yeSh0aGlzQ2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICBzYWx2YXR0b3JlLnJlc2Nhbk1lZGlhUXVlcmllcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3QgdGhpc0NhdGVnb3J5ID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvIy8sICcnKS5yZXBsYWNlKC9fL2dpLCAnICcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCF3aW5kb3cubG9jYXRpb24uaGFzaCB8fCBTdHJpbmcodGhpc0NhdGVnb3J5KS50cmltKCkudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gXCJhbGwgcHJvZHVjdHNcIikge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5QWxsUHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHNhbHZhdHRvcmUucmVzY2FuTWVkaWFRdWVyaWVzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZ2V0UHJvZHVjdE9mU2VsZWN0ZWRDYXRlZ29yeSh0aGlzQ2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICAgICAgc2FsdmF0dG9yZS5yZXNjYW5NZWRpYVF1ZXJpZXMoKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkaXNwbGF5LFxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImV4cG9ydCBjb25zdCBzaG9wcGluZ0NhcnRJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FydFwiKVxyXG5leHBvcnQgY29uc3QgdXNlckljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51c2VyXCIpO1xyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlMaW5rcyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXRlZ29yeS1saXN0IHVsIGxpJylcclxuIiwiLyohXHJcbiAqIFNhbHZhdHRvcmUgMS4wLjkgYnkgQHJubXAgYW5kIEBwcG9sZFxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcm5tcC9zYWx2YXR0b3JlXHJcbiAqL1xyXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcbiAgICB9IC8vZWxzZSB7XHJcbiAgICAvLyAgIHJvb3Quc2FsdmF0dG9yZSA9IGZhY3RvcnkoKTtcclxuICAgIC8vIH1cclxuICB9KHRoaXMsIGZ1bmN0aW9uKCkge1xyXG4gIC8qISBtYXRjaE1lZGlhKCkgcG9seWZpbGwgLSBUZXN0IGEgQ1NTIG1lZGlhIHR5cGUvcXVlcnkgaW4gSlMuIEF1dGhvcnMgJiBjb3B5cmlnaHQgKGMpIDIwMTI6IFNjb3R0IEplaGwsIFBhdWwgSXJpc2gsIE5pY2hvbGFzIFpha2FzLCBEYXZpZCBLbmlnaHQuIER1YWwgTUlUL0JTRCBsaWNlbnNlICovXHJcbiAgXHJcbiAgaWYgKCF3aW5kb3cubWF0Y2hNZWRpYSkge1xyXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgXHJcbiAgICAgICAgICAvLyBGb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IG1hdGNoTWVkaXVtIGFwaSBzdWNoIGFzIElFIDkgYW5kIHdlYmtpdFxyXG4gICAgICAgICAgdmFyIHN0eWxlTWVkaWEgPSAod2luZG93LnN0eWxlTWVkaWEgfHwgd2luZG93Lm1lZGlhKTtcclxuICBcclxuICAgICAgICAgIC8vIEZvciB0aG9zZSB0aGF0IGRvbid0IHN1cHBvcnQgbWF0Y2hNZWRpdW1cclxuICAgICAgICAgIGlmICghc3R5bGVNZWRpYSkge1xyXG4gICAgICAgICAgICAgIHZhciBzdHlsZSAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyksXHJcbiAgICAgICAgICAgICAgICAgIHNjcmlwdCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdLFxyXG4gICAgICAgICAgICAgICAgICBpbmZvICAgICAgICA9IG51bGw7XHJcbiAgXHJcbiAgICAgICAgICAgICAgc3R5bGUudHlwZSAgPSAndGV4dC9jc3MnO1xyXG4gICAgICAgICAgICAgIHN0eWxlLmlkICAgID0gJ21hdGNobWVkaWFqcy10ZXN0JztcclxuICBcclxuICAgICAgICAgICAgICBzY3JpcHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3R5bGUsIHNjcmlwdCk7XHJcbiAgXHJcbiAgICAgICAgICAgICAgLy8gJ3N0eWxlLmN1cnJlbnRTdHlsZScgaXMgdXNlZCBieSBJRSA8PSA4IGFuZCAnd2luZG93LmdldENvbXB1dGVkU3R5bGUnIGZvciBhbGwgb3RoZXIgYnJvd3NlcnNcclxuICAgICAgICAgICAgICBpbmZvID0gKCdnZXRDb21wdXRlZFN0eWxlJyBpbiB3aW5kb3cpICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN0eWxlLCBudWxsKSB8fCBzdHlsZS5jdXJyZW50U3R5bGU7XHJcbiAgXHJcbiAgICAgICAgICAgICAgc3R5bGVNZWRpYSA9IHtcclxuICAgICAgICAgICAgICAgICAgbWF0Y2hNZWRpdW06IGZ1bmN0aW9uKG1lZGlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9ICdAbWVkaWEgJyArIG1lZGlhICsgJ3sgI21hdGNobWVkaWFqcy10ZXN0IHsgd2lkdGg6IDFweDsgfSB9JztcclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICdzdHlsZS5zdHlsZVNoZWV0JyBpcyB1c2VkIGJ5IElFIDw9IDggYW5kICdzdHlsZS50ZXh0Q29udGVudCcgZm9yIGFsbCBvdGhlciBicm93c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBUZXN0IGlmIG1lZGlhIHF1ZXJ5IGlzIHRydWUgb3IgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmZvLndpZHRoID09PSAnMXB4JztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24obWVkaWEpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICBtYXRjaGVzOiBzdHlsZU1lZGlhLm1hdGNoTWVkaXVtKG1lZGlhIHx8ICdhbGwnKSxcclxuICAgICAgICAgICAgICAgICAgbWVkaWE6IG1lZGlhIHx8ICdhbGwnXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIH0oKTtcclxuICB9XHJcbiAgXHJcbiAgLyohIG1hdGNoTWVkaWEoKSBwb2x5ZmlsbCBhZGRMaXN0ZW5lci9yZW1vdmVMaXN0ZW5lciBleHRlbnNpb24uIEF1dGhvciAmIGNvcHlyaWdodCAoYykgMjAxMjogU2NvdHQgSmVobC4gRHVhbCBNSVQvQlNEIGxpY2Vuc2UgKi9cclxuICAoZnVuY3Rpb24oKXtcclxuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgXHJcbiAgICAgIC8vIEJhaWwgb3V0IGZvciBicm93c2VycyB0aGF0IGhhdmUgYWRkTGlzdGVuZXIgc3VwcG9ydFxyXG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJ2FsbCcpLmFkZExpc3RlbmVyKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdmFyIGxvY2FsTWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhLFxyXG4gICAgICAgICAgaGFzTWVkaWFRdWVyaWVzID0gbG9jYWxNYXRjaE1lZGlhKCdvbmx5IGFsbCcpLm1hdGNoZXMsXHJcbiAgICAgICAgICBpc0xpc3RlbmluZyAgICAgPSBmYWxzZSxcclxuICAgICAgICAgIHRpbWVvdXRJRCAgICAgICA9IDAsICAgIC8vIHNldFRpbWVvdXQgZm9yIGRlYm91bmNpbmcgJ2hhbmRsZUNoYW5nZSdcclxuICAgICAgICAgIHF1ZXJpZXMgICAgICAgICA9IFtdLCAgIC8vIENvbnRhaW5zIGVhY2ggJ21xbCcgYW5kIGFzc29jaWF0ZWQgJ2xpc3RlbmVycycgaWYgJ2FkZExpc3RlbmVyJyBpcyB1c2VkXHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UgICAgPSBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAvLyBEZWJvdW5jZVxyXG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xyXG4gIFxyXG4gICAgICAgICAgICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHF1ZXJpZXMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG1xbCAgICAgICAgID0gcXVlcmllc1tpXS5tcWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgPSBxdWVyaWVzW2ldLmxpc3RlbmVycyB8fCBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzICAgICA9IGxvY2FsTWF0Y2hNZWRpYShtcWwubWVkaWEpLm1hdGNoZXM7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgbXFsLm1hdGNoZXMgdmFsdWUgYW5kIGNhbGwgbGlzdGVuZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlIGxpc3RlbmVycyBvbmx5IGlmIHRyYW5zaXRpb25pbmcgdG8gb3IgZnJvbSBtYXRjaGVkIHN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPT0gbXFsLm1hdGNoZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtcWwubWF0Y2hlcyA9IG1hdGNoZXM7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsID0gbGlzdGVuZXJzLmxlbmd0aDsgaiA8IGpsOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzW2pdLmNhbGwod2luZG93LCBtcWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sIDMwKTtcclxuICAgICAgICAgIH07XHJcbiAgXHJcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhID0gZnVuY3Rpb24obWVkaWEpIHtcclxuICAgICAgICAgIHZhciBtcWwgICAgICAgICA9IGxvY2FsTWF0Y2hNZWRpYShtZWRpYSksXHJcbiAgICAgICAgICAgICAgbGlzdGVuZXJzICAgPSBbXSxcclxuICAgICAgICAgICAgICBpbmRleCAgICAgICA9IDA7XHJcbiAgXHJcbiAgICAgICAgICBtcWwuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgIC8vIENoYW5nZXMgd291bGQgbm90IG9jY3VyIHRvIGNzcyBtZWRpYSB0eXBlIHNvIHJldHVybiBub3cgKEFmZmVjdHMgSUUgPD0gOClcclxuICAgICAgICAgICAgICBpZiAoIWhhc01lZGlhUXVlcmllcykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgIC8vIFNldCB1cCAncmVzaXplJyBsaXN0ZW5lciBmb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IENTUzMgbWVkaWEgcXVlcmllcyAoTm90IGZvciBJRSA8PSA4KVxyXG4gICAgICAgICAgICAgIC8vIFRoZXJlIHNob3VsZCBvbmx5IGV2ZXIgYmUgMSByZXNpemUgbGlzdGVuZXIgcnVubmluZyBmb3IgcGVyZm9ybWFuY2VcclxuICAgICAgICAgICAgICBpZiAoIWlzTGlzdGVuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlzTGlzdGVuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZUNoYW5nZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgIC8vIFB1c2ggb2JqZWN0IG9ubHkgaWYgaXQgaGFzIG5vdCBiZWVuIHB1c2hlZCBhbHJlYWR5XHJcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGluZGV4ID0gcXVlcmllcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1xbCAgICAgICAgIDogbXFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgOiBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgICBtcWwucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBpbDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgICByZXR1cm4gbXFsO1xyXG4gICAgICB9O1xyXG4gIH0oKSk7XHJcbiAgXHJcbiAgLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cclxuICAvLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXHJcbiAgXHJcbiAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxyXG4gIFxyXG4gIC8vIE1JVCBsaWNlbnNlXHJcbiAgXHJcbiAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICBcInVzZSBzdHJpY3RcIjtcclxuICBcclxuICAgICAgdmFyIGxhc3RUaW1lID0gMDtcclxuICAgICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xyXG4gICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcclxuICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcbiAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxyXG4gICAgICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXHJcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcclxuICAgICAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTsgfSxcclxuICAgICAgICAgICAgICAgIHRpbWVUb0NhbGwpO1xyXG4gICAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG4gICAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICAgIH07XHJcbiAgXHJcbiAgICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxyXG4gICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICAgICAgfTtcclxuICB9KCkpO1xyXG4gIFxyXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudFxyXG4gIFxyXG4gIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH07XHJcbiAgICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG4gICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XHJcbiAgICAgICAgcmV0dXJuIGV2dDtcclxuICAgICAgIH1cclxuICBcclxuICAgICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcclxuICBcclxuICAgICAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XHJcbiAgICB9KSgpO1xyXG4gIH1cclxuICBcclxuICAvKiBqc2hpbnQgbGF4Y29tbWE6IHRydWUgKi9cclxuICB2YXIgc2FsdmF0dG9yZSA9IChmdW5jdGlvbiAoZ2xvYmFsLCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgXHJcbiAgdmFyIHNlbGYgPSB7fSxcclxuICAgICAgZ3JpZHMgPSBbXSxcclxuICAgICAgbWVkaWFSdWxlcyA9IFtdLFxyXG4gICAgICBtZWRpYVF1ZXJpZXMgPSBbXSxcclxuICAgICAgYWRkX3RvX2RhdGFzZXQgPSBmdW5jdGlvbihlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgLy8gdXNlcyBkYXRhc2V0IGZ1bmN0aW9uIG9yIGEgZmFsbGJhY2sgZm9yIDxpZTEwXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuZGF0YXNldCkge1xyXG4gICAgICAgICAgZWxlbWVudC5kYXRhc2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfTtcclxuICBcclxuICBzZWxmLm9idGFpbkdyaWRTZXR0aW5ncyA9IGZ1bmN0aW9uIG9idGFpbkdyaWRTZXR0aW5ncyhlbGVtZW50KSB7XHJcbiAgICAvLyByZXR1cm5zIHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgdGhlIGNsYXNzZXMgYSBjb2x1bW4gc2hvdWxkIGhhdmUsXHJcbiAgICAvLyBmcm9tIGNvbXB1dGluZyB0aGUgc3R5bGUgb2YgdGhlIDo6YmVmb3JlIHBzZXVkby1lbGVtZW50IG9mIHRoZSBncmlkLlxyXG4gIFxyXG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnbG9iYWwuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBcIjpiZWZvcmVcIilcclxuICAgICAgLCBjb250ZW50ID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29udGVudFwiKS5zbGljZSgxLCAtMSlcclxuICAgICAgLCBtYXRjaFJlc3VsdCA9IGNvbnRlbnQubWF0Y2goL15cXHMqKFxcZCspKD86XFxzP1xcLiguKykpP1xccyokLylcclxuICAgICAgLCBudW1iZXJPZkNvbHVtbnMgPSAxXHJcbiAgICAgICwgY29sdW1uQ2xhc3NlcyA9IFtdXHJcbiAgICA7XHJcbiAgXHJcbiAgICBpZiAobWF0Y2hSZXN1bHQpIHtcclxuICAgICAgbnVtYmVyT2ZDb2x1bW5zID0gbWF0Y2hSZXN1bHRbMV07XHJcbiAgICAgIGNvbHVtbkNsYXNzZXMgPSBtYXRjaFJlc3VsdFsyXTtcclxuICAgICAgY29sdW1uQ2xhc3NlcyA9IGNvbHVtbkNsYXNzZXM/IGNvbHVtbkNsYXNzZXMuc3BsaXQoXCIuXCIpIDogW1wiY29sdW1uXCJdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWF0Y2hSZXN1bHQgPSBjb250ZW50Lm1hdGNoKC9eXFxzKlxcLiguKylcXHMrKFxcZCspXFxzKiQvKTtcclxuICAgICAgaWYgKG1hdGNoUmVzdWx0KSB7XHJcbiAgICAgICAgY29sdW1uQ2xhc3NlcyA9IG1hdGNoUmVzdWx0WzFdO1xyXG4gICAgICAgIG51bWJlck9mQ29sdW1ucyA9IG1hdGNoUmVzdWx0WzJdO1xyXG4gICAgICAgIGlmIChudW1iZXJPZkNvbHVtbnMpIHtcclxuICAgICAgICAgICAgICBudW1iZXJPZkNvbHVtbnMgPSBudW1iZXJPZkNvbHVtbnMuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbnVtYmVyT2ZDb2x1bW5zOiBudW1iZXJPZkNvbHVtbnMsXHJcbiAgICAgIGNvbHVtbkNsYXNzZXM6IGNvbHVtbkNsYXNzZXNcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBcclxuICBzZWxmLmFkZENvbHVtbnMgPSBmdW5jdGlvbiBhZGRDb2x1bW5zKGdyaWQsIGl0ZW1zKSB7XHJcbiAgICAvLyBmcm9tIHRoZSBzZXR0aW5ncyBvYnRhaW5lZCwgaXQgY3JlYXRlcyBjb2x1bW5zIHdpdGhcclxuICAgIC8vIHRoZSBjb25maWd1cmVkIGNsYXNzZXMgYW5kIGFkZHMgdG8gdGhlbSBhIGxpc3Qgb2YgaXRlbXMuXHJcbiAgXHJcbiAgICB2YXIgc2V0dGluZ3MgPSBzZWxmLm9idGFpbkdyaWRTZXR0aW5ncyhncmlkKVxyXG4gICAgICAsIG51bWJlck9mQ29sdW1ucyA9IHNldHRpbmdzLm51bWJlck9mQ29sdW1uc1xyXG4gICAgICAsIGNvbHVtbkNsYXNzZXMgPSBzZXR0aW5ncy5jb2x1bW5DbGFzc2VzXHJcbiAgICAgICwgY29sdW1uc0l0ZW1zID0gbmV3IEFycmF5KCtudW1iZXJPZkNvbHVtbnMpXHJcbiAgICAgICwgY29sdW1uc0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXHJcbiAgICAgICwgaSA9IG51bWJlck9mQ29sdW1uc1xyXG4gICAgICAsIHNlbGVjdG9yXHJcbiAgICA7XHJcbiAgXHJcbiAgICB3aGlsZSAoaS0tICE9PSAwKSB7XHJcbiAgICAgIHNlbGVjdG9yID0gXCJbZGF0YS1jb2x1bW5zXSA+ICo6bnRoLWNoaWxkKFwiICsgbnVtYmVyT2ZDb2x1bW5zICsgXCJuLVwiICsgaSArIFwiKVwiO1xyXG4gICAgICBjb2x1bW5zSXRlbXMucHVzaChpdGVtcy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb2x1bW5zSXRlbXMuZm9yRWFjaChmdW5jdGlvbiBhcHBlbmRfdG9fZ3JpZF9mcmFnbWVudChyb3dzKSB7XHJcbiAgICAgIHZhciBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgLCByb3dzRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcclxuICAgICAgO1xyXG4gIFxyXG4gICAgICBjb2x1bW4uY2xhc3NOYW1lID0gY29sdW1uQ2xhc3Nlcy5qb2luKFwiIFwiKTtcclxuICBcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChyb3dzLCBmdW5jdGlvbiBhcHBlbmRfdG9fY29sdW1uKHJvdykge1xyXG4gICAgICAgIHJvd3NGcmFnbWVudC5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29sdW1uLmFwcGVuZENoaWxkKHJvd3NGcmFnbWVudCk7XHJcbiAgICAgIGNvbHVtbnNGcmFnbWVudC5hcHBlbmRDaGlsZChjb2x1bW4pO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBncmlkLmFwcGVuZENoaWxkKGNvbHVtbnNGcmFnbWVudCk7XHJcbiAgICBhZGRfdG9fZGF0YXNldChncmlkLCAnY29sdW1ucycsIG51bWJlck9mQ29sdW1ucyk7XHJcbiAgfTtcclxuICBcclxuICBcclxuICBzZWxmLnJlbW92ZUNvbHVtbnMgPSBmdW5jdGlvbiByZW1vdmVDb2x1bW5zKGdyaWQpIHtcclxuICAgIC8vIHJlbW92ZXMgYWxsIHRoZSBjb2x1bW5zIGZyb20gYSBncmlkLCBhbmQgcmV0dXJucyBhIGxpc3RcclxuICAgIC8vIG9mIGl0ZW1zIHNvcnRlZCBieSB0aGUgb3JkZXJpbmcgb2YgY29sdW1ucy5cclxuICBcclxuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZ3JpZCk7XHJcbiAgXHJcbiAgICB2YXIgY29sdW1ucyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChyYW5nZS5leHRyYWN0Q29udGVudHMoKS5jaGlsZE5vZGVzLCBmdW5jdGlvbiBmaWx0ZXJfZWxlbWVudHMobm9kZSkge1xyXG4gICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIGdsb2JhbC5IVE1MRWxlbWVudDtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgdmFyIG51bWJlck9mQ29sdW1ucyA9IGNvbHVtbnMubGVuZ3RoXHJcbiAgICAgICwgbnVtYmVyT2ZSb3dzSW5GaXJzdENvbHVtbiA9IGNvbHVtbnNbMF0uY2hpbGROb2Rlcy5sZW5ndGhcclxuICAgICAgLCBzb3J0ZWRSb3dzID0gbmV3IEFycmF5KG51bWJlck9mUm93c0luRmlyc3RDb2x1bW4gKiBudW1iZXJPZkNvbHVtbnMpXHJcbiAgICA7XHJcbiAgXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNvbHVtbnMsIGZ1bmN0aW9uIGl0ZXJhdGVfY29sdW1ucyhjb2x1bW4sIGNvbHVtbkluZGV4KSB7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY29sdW1uLmNoaWxkcmVuLCBmdW5jdGlvbiBpdGVyYXRlX3Jvd3Mocm93LCByb3dJbmRleCkge1xyXG4gICAgICAgIHNvcnRlZFJvd3Nbcm93SW5kZXggKiBudW1iZXJPZkNvbHVtbnMgKyBjb2x1bW5JbmRleF0gPSByb3c7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZF90b19kYXRhc2V0KGNvbnRhaW5lciwgJ2NvbHVtbnMnLCAwKTtcclxuICBcclxuICAgIHNvcnRlZFJvd3MuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlcl9ub25fbnVsbChjaGlsZCkge1xyXG4gICAgICByZXR1cm4gISFjaGlsZDtcclxuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gYXBwZW5kX3JvdyhjaGlsZCkge1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiAgc2VsZi5yZWNyZWF0ZUNvbHVtbnMgPSBmdW5jdGlvbiByZWNyZWF0ZUNvbHVtbnMoZ3JpZCkge1xyXG4gICAgLy8gcmVtb3ZlcyBhbGwgdGhlIGNvbHVtbnMgZnJvbSB0aGUgZ3JpZCwgYW5kIGFkZHMgdGhlbSBhZ2FpbixcclxuICAgIC8vIGl0IGlzIHVzZWQgd2hlbiB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgY2hhbmdlLlxyXG4gIFxyXG4gICAgZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiByZW5kZXJfYWZ0ZXJfY3NzX21lZGlhUXVlcnlDaGFuZ2UoKSB7XHJcbiAgICAgIHNlbGYuYWRkQ29sdW1ucyhncmlkLCBzZWxmLnJlbW92ZUNvbHVtbnMoZ3JpZCkpO1xyXG4gICAgICB2YXIgY29sdW1uc0NoYW5nZSA9IG5ldyBDdXN0b21FdmVudChcImNvbHVtbnNDaGFuZ2VcIik7XHJcbiAgICAgIGdyaWQuZGlzcGF0Y2hFdmVudChjb2x1bW5zQ2hhbmdlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiAgc2VsZi5tZWRpYVF1ZXJ5Q2hhbmdlID0gZnVuY3Rpb24gbWVkaWFRdWVyeUNoYW5nZShtcWwpIHtcclxuICAgIC8vIHJlY3JlYXRlcyB0aGUgY29sdW1ucyB3aGVuIGEgbWVkaWEgcXVlcnkgbWF0Y2hlcyB0aGUgY3VycmVudCBzdGF0ZVxyXG4gICAgLy8gb2YgdGhlIGJyb3dzZXIuXHJcbiAgXHJcbiAgICBpZiAobXFsLm1hdGNoZXMpIHtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChncmlkcywgc2VsZi5yZWNyZWF0ZUNvbHVtbnMpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiAgc2VsZi5nZXRDU1NSdWxlcyA9IGZ1bmN0aW9uIGdldENTU1J1bGVzKHN0eWxlc2hlZXQpIHtcclxuICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGNzcyBydWxlcyBmcm9tIGEgc3R5bGVzaGVldFxyXG4gIFxyXG4gICAgdmFyIGNzc1J1bGVzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY3NzUnVsZXMgPSBzdHlsZXNoZWV0LnNoZWV0LmNzc1J1bGVzIHx8IHN0eWxlc2hlZXQuc2hlZXQucnVsZXM7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBjc3NSdWxlcyB8fCBbXTtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHNlbGYuZ2V0U3R5bGVzaGVldHMgPSBmdW5jdGlvbiBnZXRTdHlsZXNoZWV0cygpIHtcclxuICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGFsbCB0aGUgc3R5bGVzIGluIHRoZSBkb2N1bWVudCAodGhhdCBhcmUgYWNjZXNzaWJsZSkuXHJcbiAgXHJcbiAgICB2YXIgaW5saW5lU3R5bGVCbG9ja3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVcIikpO1xyXG4gICAgaW5saW5lU3R5bGVCbG9ja3MuZm9yRWFjaChmdW5jdGlvbihzdHlsZXNoZWV0LCBpZHgpIHtcclxuICAgICAgaWYgKHN0eWxlc2hlZXQudHlwZSAhPT0gJ3RleHQvY3NzJyAmJiBzdHlsZXNoZWV0LnR5cGUgIT09ICcnKSB7XHJcbiAgICAgICAgaW5saW5lU3R5bGVCbG9ja3Muc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuY2FsbChcclxuICAgICAgaW5saW5lU3R5bGVCbG9ja3MsXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD0nc3R5bGVzaGVldCddXCIpKVxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHNlbGYubWVkaWFSdWxlSGFzQ29sdW1uc1NlbGVjdG9yID0gZnVuY3Rpb24gbWVkaWFSdWxlSGFzQ29sdW1uc1NlbGVjdG9yKHJ1bGVzKSB7XHJcbiAgICAvLyBjaGVja3MgaWYgYSBtZWRpYSBxdWVyeSBjc3MgcnVsZSBoYXMgaW4gaXRzIGNvbnRlbnRzIGEgc2VsZWN0b3IgdGhhdFxyXG4gICAgLy8gc3R5bGVzIHRoZSBncmlkLlxyXG4gIFxyXG4gICAgdmFyIGksIHJ1bGU7XHJcbiAgXHJcbiAgICB0cnkge1xyXG4gICAgICBpID0gcnVsZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgaSA9IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIHJ1bGUgPSBydWxlc1tpXTtcclxuICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JUZXh0ICYmIHJ1bGUuc2VsZWN0b3JUZXh0Lm1hdGNoKC9cXFtkYXRhLWNvbHVtbnNcXF0oLiopOjo/YmVmb3JlJC8pKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHNlbGYuc2Nhbk1lZGlhUXVlcmllcyA9IGZ1bmN0aW9uIHNjYW5NZWRpYVF1ZXJpZXMoKSB7XHJcbiAgICAvLyBzY2FucyBhbGwgdGhlIHN0eWxlc2hlZXRzIGZvciBzZWxlY3RvcnMgdGhhdCBzdHlsZSBncmlkcyxcclxuICAgIC8vIGlmIHRoZSBtYXRjaE1lZGlhIEFQSSBpcyBzdXBwb3J0ZWQuXHJcbiAgXHJcbiAgICB2YXIgbmV3TWVkaWFSdWxlcyA9IFtdO1xyXG4gIFxyXG4gICAgaWYgKCFnbG9iYWwubWF0Y2hNZWRpYSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZWxmLmdldFN0eWxlc2hlZXRzKCkuZm9yRWFjaChmdW5jdGlvbiBleHRyYWN0X3J1bGVzKHN0eWxlc2hlZXQpIHtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzZWxmLmdldENTU1J1bGVzKHN0eWxlc2hlZXQpLCBmdW5jdGlvbiBmaWx0ZXJfYnlfY29sdW1uX3NlbGVjdG9yKHJ1bGUpIHtcclxuICAgICAgICAvLyBydWxlLm1lZGlhIHRocm93cyBhbiAnbm90IGltcGxlbWVudGVkIGVycm9yJyBpbiBpZTkgZm9yIGltcG9ydCBydWxlcyBvY2Nhc2lvbmFsbHlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKHJ1bGUubWVkaWEgJiYgcnVsZS5jc3NSdWxlcyAmJiBzZWxmLm1lZGlhUnVsZUhhc0NvbHVtbnNTZWxlY3RvcihydWxlLmNzc1J1bGVzKSkge1xyXG4gICAgICAgICAgICBuZXdNZWRpYVJ1bGVzLnB1c2gocnVsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIHJlbW92ZSBtYXRjaE1lZGlhIGxpc3RlbmVycyBmcm9tIHRoZSBvbGQgcnVsZXNcclxuICAgIHZhciBvbGRSdWxlcyA9IG1lZGlhUnVsZXMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIHJldHVybiBuZXdNZWRpYVJ1bGVzLmluZGV4T2YoZWwpID09PSAtMTtcclxuICAgIH0pO1xyXG4gICAgbWVkaWFRdWVyaWVzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgcmV0dXJuIG9sZFJ1bGVzLmluZGV4T2YoZWwucnVsZSkgIT09IC0xO1xyXG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBlbC5tcWwucmVtb3ZlTGlzdGVuZXIoc2VsZi5tZWRpYVF1ZXJ5Q2hhbmdlKTtcclxuICAgIH0pO1xyXG4gICAgbWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgcmV0dXJuIG9sZFJ1bGVzLmluZGV4T2YoZWwucnVsZSkgPT09IC0xO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyBhZGQgbWF0Y2hNZWRpYSBsaXN0ZW5lcnMgdG8gdGhlIG5ldyBydWxlc1xyXG4gICAgbmV3TWVkaWFSdWxlcy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgIHJldHVybiBtZWRpYVJ1bGVzLmluZGV4T2YoZWwpID09IC0xO1xyXG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgIHZhciBtcWwgPSBnbG9iYWwubWF0Y2hNZWRpYShydWxlLm1lZGlhLm1lZGlhVGV4dCk7XHJcbiAgICAgICAgbXFsLmFkZExpc3RlbmVyKHNlbGYubWVkaWFRdWVyeUNoYW5nZSk7XHJcbiAgICAgICAgbWVkaWFRdWVyaWVzLnB1c2goe3J1bGU6IHJ1bGUsIG1xbDptcWx9KTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gc3dhcCBtZWRpYVJ1bGVzIHdpdGggdGhlIG5ldyBzZXRcclxuICAgIG1lZGlhUnVsZXMubGVuZ3RoID0gMDtcclxuICAgIG1lZGlhUnVsZXMgPSBuZXdNZWRpYVJ1bGVzO1xyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiAgc2VsZi5yZXNjYW5NZWRpYVF1ZXJpZXMgPSBmdW5jdGlvbiByZXNjYW5NZWRpYVF1ZXJpZXMoKSB7XHJcbiAgICAgIHNlbGYuc2Nhbk1lZGlhUXVlcmllcygpO1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGdyaWRzLCBzZWxmLnJlY3JlYXRlQ29sdW1ucyk7XHJcbiAgfTtcclxuICBcclxuICBcclxuICBzZWxmLm5leHRFbGVtZW50Q29sdW1uSW5kZXggPSBmdW5jdGlvbiBuZXh0RWxlbWVudENvbHVtbkluZGV4KGdyaWQsIGZyYWdtZW50cykge1xyXG4gICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGNvbHVtbiB3aGVyZSB0aGUgZ2l2ZW4gZWxlbWVudCBtdXN0IGJlIGFkZGVkLlxyXG4gIFxyXG4gICAgdmFyIGNoaWxkcmVuID0gZ3JpZC5jaGlsZHJlblxyXG4gICAgICAsIG0gPSBjaGlsZHJlbi5sZW5ndGhcclxuICAgICAgLCBsb3dlc3RSb3dDb3VudCA9IDBcclxuICAgICAgLCBjaGlsZFxyXG4gICAgICAsIGN1cnJlbnRSb3dDb3VudFxyXG4gICAgICAsIGlcclxuICAgICAgLCBpbmRleCA9IDBcclxuICAgIDtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBtOyBpKyspIHtcclxuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgY3VycmVudFJvd0NvdW50ID0gY2hpbGQuY2hpbGRyZW4ubGVuZ3RoICsgKGZyYWdtZW50c1tpXS5jaGlsZHJlbiB8fCBmcmFnbWVudHNbaV0uY2hpbGROb2RlcykubGVuZ3RoO1xyXG4gICAgaWYobG93ZXN0Um93Q291bnQgPT09IDApIHtcclxuICAgICAgbG93ZXN0Um93Q291bnQgPSBjdXJyZW50Um93Q291bnQ7XHJcbiAgICB9XHJcbiAgICAgIGlmKGN1cnJlbnRSb3dDb3VudCA8IGxvd2VzdFJvd0NvdW50KSB7XHJcbiAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgIGxvd2VzdFJvd0NvdW50ID0gY3VycmVudFJvd0NvdW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfTtcclxuICBcclxuICBcclxuICBzZWxmLmNyZWF0ZUZyYWdtZW50c0xpc3QgPSBmdW5jdGlvbiBjcmVhdGVGcmFnbWVudHNMaXN0KHF1YW50aXR5KSB7XHJcbiAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBmcmFnbWVudHNcclxuICBcclxuICAgIHZhciBmcmFnbWVudHMgPSBuZXcgQXJyYXkocXVhbnRpdHkpXHJcbiAgICAgICwgaSA9IDBcclxuICAgIDtcclxuICBcclxuICAgIHdoaWxlIChpICE9PSBxdWFudGl0eSkge1xyXG4gICAgICBmcmFnbWVudHNbaV0gPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBmcmFnbWVudHM7XHJcbiAgfTtcclxuICBcclxuICBcclxuICBzZWxmLmFwcGVuZEVsZW1lbnRzID0gZnVuY3Rpb24gYXBwZW5kRWxlbWVudHMoZ3JpZCwgZWxlbWVudHMpIHtcclxuICAgIC8vIGFkZHMgYSBsaXN0IG9mIGVsZW1lbnRzIHRvIHRoZSBlbmQgb2YgYSBncmlkXHJcbiAgXHJcbiAgICB2YXIgY29sdW1ucyA9IGdyaWQuY2hpbGRyZW5cclxuICAgICAgLCBudW1iZXJPZkNvbHVtbnMgPSBjb2x1bW5zLmxlbmd0aFxyXG4gICAgICAsIGZyYWdtZW50cyA9IHNlbGYuY3JlYXRlRnJhZ21lbnRzTGlzdChudW1iZXJPZkNvbHVtbnMpXHJcbiAgICA7XHJcbiAgXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiBhcHBlbmRfdG9fbmV4dF9mcmFnbWVudChlbGVtZW50KSB7XHJcbiAgICAgIHZhciBjb2x1bW5JbmRleCA9IHNlbGYubmV4dEVsZW1lbnRDb2x1bW5JbmRleChncmlkLCBmcmFnbWVudHMpO1xyXG4gICAgICBmcmFnbWVudHNbY29sdW1uSW5kZXhdLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNvbHVtbnMsIGZ1bmN0aW9uIGluc2VydF9jb2x1bW4oY29sdW1uLCBpbmRleCkge1xyXG4gICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoZnJhZ21lbnRzW2luZGV4XSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHNlbGYucHJlcGVuZEVsZW1lbnRzID0gZnVuY3Rpb24gcHJlcGVuZEVsZW1lbnRzKGdyaWQsIGVsZW1lbnRzKSB7XHJcbiAgICAvLyBhZGRzIGEgbGlzdCBvZiBlbGVtZW50cyB0byB0aGUgc3RhcnQgb2YgYSBncmlkXHJcbiAgXHJcbiAgICB2YXIgY29sdW1ucyA9IGdyaWQuY2hpbGRyZW5cclxuICAgICAgLCBudW1iZXJPZkNvbHVtbnMgPSBjb2x1bW5zLmxlbmd0aFxyXG4gICAgICAsIGZyYWdtZW50cyA9IHNlbGYuY3JlYXRlRnJhZ21lbnRzTGlzdChudW1iZXJPZkNvbHVtbnMpXHJcbiAgICAgICwgY29sdW1uSW5kZXggPSBudW1iZXJPZkNvbHVtbnMgLSAxXHJcbiAgICA7XHJcbiAgXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIGFwcGVuZF90b19uZXh0X2ZyYWdtZW50KGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGZyYWdtZW50ID0gZnJhZ21lbnRzW2NvbHVtbkluZGV4XTtcclxuICAgICAgZnJhZ21lbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGZyYWdtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICBpZiAoY29sdW1uSW5kZXggPT09IDApIHtcclxuICAgICAgICBjb2x1bW5JbmRleCA9IG51bWJlck9mQ29sdW1ucyAtIDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uSW5kZXgtLTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNvbHVtbnMsIGZ1bmN0aW9uIGluc2VydF9jb2x1bW4oY29sdW1uLCBpbmRleCkge1xyXG4gICAgICBjb2x1bW4uaW5zZXJ0QmVmb3JlKGZyYWdtZW50c1tpbmRleF0sIGNvbHVtbi5maXJzdENoaWxkKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gcG9wdWxhdGVzIGEgZnJhZ21lbnQgd2l0aCBuIGNvbHVtbnMgdGlsbCB0aGUgcmlnaHRcclxuICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxyXG4gICAgICAsIG51bWJlck9mQ29sdW1uc1RvRXh0cmFjdCA9IGVsZW1lbnRzLmxlbmd0aCAlIG51bWJlck9mQ29sdW1uc1xyXG4gICAgO1xyXG4gIFxyXG4gICAgd2hpbGUgKG51bWJlck9mQ29sdW1uc1RvRXh0cmFjdC0tICE9PSAwKSB7XHJcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGdyaWQubGFzdENoaWxkKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIGFkZHMgdGhlIGZyYWdtZW50IHRvIHRoZSBsZWZ0XHJcbiAgICBncmlkLmluc2VydEJlZm9yZShmcmFnbWVudCwgZ3JpZC5maXJzdENoaWxkKTtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHNlbGYucmVnaXN0ZXJHcmlkID0gZnVuY3Rpb24gcmVnaXN0ZXJHcmlkIChncmlkKSB7XHJcbiAgICBpZiAoZ2xvYmFsLmdldENvbXB1dGVkU3R5bGUoZ3JpZCkuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gcmV0cmlldmUgdGhlIGxpc3Qgb2YgaXRlbXMgZnJvbSB0aGUgZ3JpZCBpdHNlbGZcclxuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZ3JpZCk7XHJcbiAgXHJcbiAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaXRlbXMuYXBwZW5kQ2hpbGQocmFuZ2UuZXh0cmFjdENvbnRlbnRzKCkpO1xyXG4gIFxyXG4gIFxyXG4gICAgYWRkX3RvX2RhdGFzZXQoaXRlbXMsICdjb2x1bW5zJywgMCk7XHJcbiAgICBzZWxmLmFkZENvbHVtbnMoZ3JpZCwgaXRlbXMpO1xyXG4gICAgZ3JpZHMucHVzaChncmlkKTtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHNlbGYuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvLyBhZGRzIHJlcXVpcmVkIENTUyBydWxlIHRvIGhpZGUgJ2NvbnRlbnQnIGJhc2VkXHJcbiAgICAvLyBjb25maWd1cmF0aW9uLlxyXG4gIFxyXG4gICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgIGNzcy5pbm5lckhUTUwgPSBcIltkYXRhLWNvbHVtbnNdOjpiZWZvcmV7ZGlzcGxheTpibG9jazt2aXNpYmlsaXR5OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTtmb250LXNpemU6MXB4O31cIjtcclxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoY3NzKTtcclxuICBcclxuICAgIC8vIHNjYW5zIGFsbCB0aGUgZ3JpZHMgaW4gdGhlIGRvY3VtZW50IGFuZCBnZW5lcmF0ZXNcclxuICAgIC8vIGNvbHVtbnMgZnJvbSB0aGVpciBjb25maWd1cmF0aW9uLlxyXG4gIFxyXG4gICAgdmFyIGdyaWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jb2x1bW5zXVwiKTtcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZ3JpZEVsZW1lbnRzLCBzZWxmLnJlZ2lzdGVyR3JpZCk7XHJcbiAgICBzZWxmLnNjYW5NZWRpYVF1ZXJpZXMoKTtcclxuICB9O1xyXG4gIFxyXG4gIHNlbGYuaW5pdCgpO1xyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICBhcHBlbmRFbGVtZW50czogc2VsZi5hcHBlbmRFbGVtZW50cyxcclxuICAgIHByZXBlbmRFbGVtZW50czogc2VsZi5wcmVwZW5kRWxlbWVudHMsXHJcbiAgICByZWdpc3RlckdyaWQ6IHNlbGYucmVnaXN0ZXJHcmlkLFxyXG4gICAgcmVjcmVhdGVDb2x1bW5zOiBzZWxmLnJlY3JlYXRlQ29sdW1ucyxcclxuICAgIHJlc2Nhbk1lZGlhUXVlcmllczogc2VsZi5yZXNjYW5NZWRpYVF1ZXJpZXMsXHJcbiAgICBpbml0OiBzZWxmLmluaXQsXHJcbiAgXHJcbiAgICAvLyBtYWludGFpbnMgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCB1bmRlcnNjb3JlIHN0eWxlIG1ldGhvZCBuYW1lc1xyXG4gICAgYXBwZW5kX2VsZW1lbnRzOiBzZWxmLmFwcGVuZEVsZW1lbnRzLFxyXG4gICAgcHJlcGVuZF9lbGVtZW50czogc2VsZi5wcmVwZW5kRWxlbWVudHMsXHJcbiAgICByZWdpc3Rlcl9ncmlkOiBzZWxmLnJlZ2lzdGVyR3JpZCxcclxuICAgIHJlY3JlYXRlX2NvbHVtbnM6IHNlbGYucmVjcmVhdGVDb2x1bW5zLFxyXG4gICAgcmVzY2FuX21lZGlhX3F1ZXJpZXM6IHNlbGYucmVzY2FuTWVkaWFRdWVyaWVzXHJcbiAgfTtcclxuICBcclxuICB9KSh3aW5kb3csIHdpbmRvdy5kb2N1bWVudCk7XHJcbiAgXHJcbiAgcmV0dXJuIHNhbHZhdHRvcmU7XHJcbiAgfSkpO1xyXG5cclxuICAvL2V4cG9ydCBkZWZhdWx0IHNhbHZhdHRvcmUiLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vZGF0YS9wcm9kdWN0cy5qcydcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVVc2VySW5mbyA9IChlbGVtZW50cykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHNob3BwaW5nQmFza2V0cyA9IFtcclxuICAgICAgICAnc2hvcHBpbmctYmFza2V0LWRlc2t0b3AnLFxyXG4gICAgICAgICdzaG9wcGluZy1iYXNrZXQtbW9iaWxlJ1xyXG4gICAgXVxyXG4gICAgICAgLy8gaGlkZSBzaG9wcGluZyBiYXNrZXRzIGlmIG9wZW5cclxuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c2hvcHBpbmdCYXNrZXRzWzBdfWApLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgICBjb25zdCBzaG9wcGluZ0NhcnRJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FydFwiKTtcclxuICAgICAgICBbLi4uc2hvcHBpbmdDYXJ0SWNvbnNdWzBdLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgZWxlbWVudHMuZm9yRWFjaCggKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB0aGlzU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpdGVtfWApO1xyXG4gICAgICAgIHRoaXNTZWxlY3Rvci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlU2hvcHBpbmdDYXJ0cyA9IChzaG9wcGluZ0Jhc2tldHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB1c2VySW5mbyA9IFtcclxuICAgICAgICAndXNlci1kcm9wZG93bi1kZXNrdG9wJyxcclxuICAgICAgICAndXNlci1kcm9wZG93bi1tb2JpbGUnXHJcbiAgICBdXHJcblxyXG4gICAgLy8gaGlkZSB1c2VySW5mbyBpZiBvcGVuXHJcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3VzZXJJbmZvWzBdfWApLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgICBjb25zdCB1c2VySWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVzZXJcIik7XHJcbiAgICAgICAgWy4uLnVzZXJJY29uc11bMF0uY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG9wcGluZ0Jhc2tldHMuZm9yRWFjaCggKGJhc2tldCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRoaXNCYXNrZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtiYXNrZXR9YCk7XHJcbiAgICAgICAgdGhpc0Jhc2tldC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgfSlcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUNhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gbmV3IFNldChbLi4ucHJvZHVjdHMubWFwKCBpdGVtID0+IGl0ZW0uY2F0ZWdvcnkpXSlcclxuICAgIGNvbnN0IGNhdGVnb3J5VUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnktbGlzdCB1bCcpXHJcbiAgICBsZXQgbGlzdE9mQ2F0ZWdvcmllcyA9IGA8bGk+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNBbGxfcHJvZHVjdHNcIj4gXHJcbiAgICAgICAgICAgIDxpPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicm91bmRlZFwiPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiaSBiaS1zaG9wXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMi45NyAxLjM1QTEgMSAwIDAgMSAzLjczIDFoOC41NGExIDEgMCAwIDEgLjc2LjM1bDIuNjA5IDMuMDQ0QTEuNSAxLjUgMCAwIDEgMTYgNS4zN3YuMjU1YTIuMzc1IDIuMzc1IDAgMCAxLTQuMjUgMS40NThBMi4zNzEgMi4zNzEgMCAwIDEgOS44NzUgOCAyLjM3IDIuMzcgMCAwIDEgOCA3LjA4MyAyLjM3IDIuMzcgMCAwIDEgNi4xMjUgOGEyLjM3IDIuMzcgMCAwIDEtMS44NzUtLjkxN0EyLjM3NSAyLjM3NSAwIDAgMSAwIDUuNjI1VjUuMzdhMS41IDEuNSAwIDAgMSAuMzYxLS45NzZsMi42MS0zLjA0NXptMS43OCA0LjI3NWExLjM3NSAxLjM3NSAwIDAgMCAyLjc1IDAgLjUuNSAwIDAgMSAxIDAgMS4zNzUgMS4zNzUgMCAwIDAgMi43NSAwIC41LjUgMCAwIDEgMSAwIDEuMzc1IDEuMzc1IDAgMSAwIDIuNzUgMFY1LjM3YS41LjUgMCAwIDAtLjEyLS4zMjVMMTIuMjcgMkgzLjczTDEuMTIgNS4wNDVBLjUuNSAwIDAgMCAxIDUuMzd2LjI1NWExLjM3NSAxLjM3NSAwIDAgMCAyLjc1IDAgLjUuNSAwIDAgMSAxIDB6TTEuNSA4LjVBLjUuNSAwIDAgMSAyIDl2Nmgxdi01YTEgMSAwIDAgMSAxLTFoM2ExIDEgMCAwIDEgMSAxdjVoNlY5YS41LjUgMCAwIDEgMSAwdjZoLjVhLjUuNSAwIDAgMSAwIDFILjVhLjUuNSAwIDAgMSAwLTFIMVY5YS41LjUgMCAwIDEgLjUtLjV6TTQgMTVoM3YtNUg0djV6bTUtNWExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMXYzYTEgMSAwIDAgMS0xIDFoLTJhMSAxIDAgMCAxLTEtMXYtM3ptMyAwaC0ydjNoMnYtM3pcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+IEFsbCBQcm9kdWN0cyA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcnJvdy1zcGFuIGludmlzaWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktY2hldnJvbi1kb3VibGUtcmlnaHRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMy42NDYgMS42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEgMCAuNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4LS43MDhMOS4yOTMgOCAzLjY0NiAyLjM1NGEuNS41IDAgMCAxIDAtLjcwOHpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNy42NDYgMS42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEgMCAuNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTMuMjkzIDggNy42NDYgMi4zNTRhLjUuNSAwIDAgMSAwLS43MDh6XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj4gXHJcbiAgICAgICAgPC9hPiBcclxuICAgIDwvbGk+YDtcclxuXHJcbiAgICBmb3IgKCBsZXQgdmFsdWUgb2YgYWxsQ2F0ZWdvcmllcy52YWx1ZXMoKSApIHtcclxuICAgICAgICBsaXN0T2ZDYXRlZ29yaWVzKz0gYFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMke3ZhbHVlLnJlcGxhY2UoLyAvZ2ksICdfJyl9XCI+XHJcbiAgICAgICAgICAgICAgICA8aT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJvdW5kZWRcIj4gJHt2YWx1ZVswXX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dmFsdWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcnJvdy1zcGFuICBpbnZpc2libGVcIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWNoZXZyb24tZG91YmxlLXJpZ2h0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0zLjY0NiAxLjY0NmEuNS41IDAgMCAxIC43MDggMGw2IDZhLjUuNSAwIDAgMSAwIC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDgtLjcwOEw5LjI5MyA4IDMuNjQ2IDIuMzU0YS41LjUgMCAwIDEgMC0uNzA4elwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNy42NDYgMS42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEgMCAuNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTMuMjkzIDggNy42NDYgMi4zNTRhLjUuNSAwIDAgMSAwLS43MDh6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgY2F0ZWdvcnlVTC5pbm5lckhUTUwgPSBsaXN0T2ZDYXRlZ29yaWVzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUFsbFByb2R1Y3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkJyk7XHJcbiBcclxuICAgIGNvbnN0IGxpc3RPZlByb2R1Y3RzID0gcHJvZHVjdHMubWFwKGl0ZW0gPT4gYFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmxhcmdlSW1hZ2V9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDxoMj48aT4ke2l0ZW0ubmFtZX08L2k+PC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8aT4ke2l0ZW0uZGVzY3JpcHRpb259PC9pPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke2l0ZW0uaWR9XCI+IFNIT1AgTk9XIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNsZWFyXCI+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgICkuam9pbihcIlwiKTtcclxuXHJcbiAgICBncmlkLmlubmVySFRNTCA9IGxpc3RPZlByb2R1Y3RzO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0T2ZTZWxlY3RlZENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgIGNvbnN0IHByb2R1Y3RzT2ZDYXRlZ29yeSA9IHByb2R1Y3RzLmZpbHRlciggaXRlbSA9PiBpdGVtLmNhdGVnb3J5ID09PSBjYXRlZ29yeSApXHJcbiAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZCcpO1xyXG5cclxuICAgY29uc3QgbGlzdE9mUHJvZHVjdHMgPSBwcm9kdWN0c09mQ2F0ZWdvcnkubWFwKGl0ZW0gPT4gYFxyXG4gICA8ZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaXRlbVwiPlxyXG4gICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmxhcmdlSW1hZ2V9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgPGgyPiA8aT4gJHtpdGVtLm5hbWV9IDwvaT4gPC9oMj5cclxuICAgICAgICAgICAgICAgIDxpPiAke2l0ZW0uZGVzY3JpcHRpb259IDwvaT5cclxuICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7aXRlbS5pZH1cIj4gU0hPUCBOT1cgPC9idXR0b24+XHJcbiAgICAgICAgICAgPHAgY2xhc3M9XCJjbGVhclwiPjwvcD5cclxuICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgYCApLmpvaW4oXCJcIik7XHJcblxyXG4gICBncmlkLmlubmVySFRNTCA9IGxpc3RPZlByb2R1Y3RzO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4vY3NzL21vYmlsZS10YWJsZXQuY3NzJztcclxuaW1wb3J0IEFwcCAgZnJvbSAnLi9qcy9hcHAuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gQXBwLmRpc3BsYXkoKSApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=