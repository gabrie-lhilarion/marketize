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
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: whitesmoke\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\naside {\r\n    box-sizing: border-box;\r\n    height: 100vh;\r\n    width: 25%;\r\n    background-color: #fff;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    padding-right: 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\nmain {\r\n    width: 75%;\r\n    margin-left: 25%;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n#logo {\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n}\r\n\r\n#logo span {\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    margin-left: 10px;\r\n}\r\n\r\n#logo i {\r\n    font-size: medium;\r\n    color: #000;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    padding-left: 5px;\r\n}\r\n\r\n#logo em {\r\n    font-size: small;\r\n    color: #000;\r\n    display: block;\r\n    font-weight: normal;\r\n    padding-left: 35px;\r\n}\r\n\r\n.desktop-info-area,\r\n.mobile-info-area {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.desktop-info-area div {\r\n    margin: 0 10px;\r\n    position: inherit;\r\n}\r\n\r\n.mobile-info-area div {\r\n    margin: 0 15px;\r\n    position: inherit;\r\n}\r\n\r\n#user-dropdown-desktop {\r\n    width:80%;\r\n    margin: auto;\r\n    max-width: 230px;\r\n    position: relative;\r\n    height: 0px;\r\n}\r\n\r\n#user-dropdown-mobile {\r\n    width:100%;\r\n    margin: 0;\r\n    position: relative;\r\n    left: 0px;\r\n}\r\n\r\n#user-dropdown-desktop ul {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 1px 2px 5px 1px #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    width: 120px;\r\n    right: -1px;\r\n}\r\n\r\n#user-dropdown-mobile ul {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 1px 2px 5px 1px #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    width: 120px;\r\n    right: 60px;\r\n    \r\n}\r\n\r\n#user-dropdown-desktop ul li {\r\n    padding: 10px;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n#user-dropdown-desktop ul li:hover {\r\n   background-color: beige;\r\n}\r\n\r\n#user-dropdown-mobile ul li {\r\n    padding: 6px;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n#fixed-top {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.user {\r\n    cursor: pointer;\r\n}\r\n\r\n#shopping-basket-desktop {\r\n    position: relative;\r\n    height: 0;\r\n}\r\n\r\n#shopping-basket-desktop ul {\r\n    background-color: white;\r\n    box-shadow: 1px 1px 5px 1px #666;\r\n    position: absolute;\r\n    right: -150px;\r\n    width: 350px;\r\n    max-height: 450px;\r\n    overflow-y: auto;\r\n    z-index: 200;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n#shopping-basket-mobile ul {\r\n    box-shadow: 1px 2px 5px 1px #999;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    right: 0px;\r\n    width: 100%;\r\n    max-width: 350px;\r\n    max-height: 450px;\r\n    overflow-y: auto;\r\n    z-index: 200;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.cart {\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.total-in-cart {\r\n    font-size: small;\r\n    font-weight: bolder;\r\n    position: absolute;\r\n    right: 7px;\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    display: inline-block;\r\n    min-width: 12px;\r\n    padding: 1px;\r\n    text-align: center;\r\n}\r\n\r\n.empty-cart {\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    height: 100px;\r\n    line-height: 100px;\r\n}\r\n\r\n.item-image {\r\n    padding: 12px;\r\n}\r\n\r\n#cart-items-mobile li.cart-item,\r\n#cart-items-desktop li.cart-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-top: dotted 1px #ccc;\r\n}\r\n\r\n.cart-item-details {\r\n    padding: 3px 10px;\r\n}\r\n\r\n.cart-more-details {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.cart-more-details i {\r\n    display: inline-block;\r\n    padding: 4px;\r\n}\r\n\r\n#cart-items-mobile li.cart-item img,\r\n#cart-items-desktop li.cart-item img {\r\n    width: 80px;\r\n}\r\n\r\n#product-categories-heading {\r\n    text-align: right;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#search-bar-desktop {\r\n    display: flex;\r\n    border: solid 3px #000;\r\n    width: 90%;\r\n    margin: 20px  auto;\r\n    border-radius: 9px;\r\n    position: relative;\r\n}\r\n\r\n#search-bar-desktop span {\r\n    cursor: pointer;\r\n    margin-top: 4px;\r\n}\r\n\r\n#search-bar-desktop input {\r\n    border: none;\r\n    border-radius: 9px;\r\n    display: inline-block;\r\n    width: 90%;\r\n    height: 20px;\r\n    line-height: 24px;\r\n    outline: none;\r\n}\r\n\r\n#product-categories-heading p {\r\n    text-align: right;\r\n}\r\n\r\n#category-wrapper {\r\n    max-height: 380px;\r\n    overflow-y: auto;\r\n    -ms-overflow-style: none;  /* IE and Edge */\r\n    scrollbar-width: none;  /* Firefox */\r\n}\r\n\r\n#category-wrapper::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n#category-list ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#category-list li {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\n#category-list a {\r\n    display: flex;\r\n    text-decoration: none;\r\n    color: #000;\r\n    font-size: 1.2em;\r\n    padding: 1px 10px;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n#grid {\r\n    padding: 5px;\r\n}\r\n\r\n#grid .product-item {\r\n    padding: 10px;\r\n    background-color:#fff;\r\n    margin: 10px 5px;\r\n}\r\n\r\n#grid .product-item img {\r\n    width: 100%;\r\n}\r\n\r\n#grid .product-item button.shop-now {\r\n    padding: 10px 7px;\r\n    cursor: pointer;\r\n    float: right;\r\n    border: none;\r\n    color: #fff;\r\n    background-color: #000;\r\n    border-radius: 6px;\r\n}\r\n\r\n.rounded {\r\n    display: inline-block;\r\n    width: 35px;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    border-radius: 50%;\r\n    background-color: #000;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.arrow-span {\r\n    display: inline-block;\r\n    color: #000;\r\n    font-size: xx-large;\r\n    background-color: #000;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    width: 15px;\r\n    position: relative;\r\n    right: -30px;\r\n}\r\n\r\n.item-list {\r\n    border-top: dotted 0.5px #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.item-list p {\r\n    padding: 5px 0;\r\n    margin: 0;\r\n}\r\n\r\n.price-add-to-cart {\r\n    display: flex;\r\n    justify-content: space-between; \r\n}\r\n\r\n.add-to-cart { \r\n    background-color: #000;\r\n    color: #fff;\r\n    padding: 5px; \r\n    border: solid 1px #fff;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n}\r\n\r\n.qtty {\r\n    width: 35px;\r\n    display: inline-block;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}\r\n\r\n.add-to-cart:hover { \r\n    background-color: #fff;\r\n    color: #000;\r\n    padding: 5px; \r\n    border: solid 1px #000;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n}\r\n\r\n.item_name {\r\n    font-size: larger;\r\n    font-weight: bolder;\r\n}\r\n\r\n.price {\r\n    color: #000; \r\n    font-weight: bolder;\r\n}\r\n\r\n.quantity {\r\n    color: #000; \r\n    font-weight: bolder;\r\n}\r\n\r\n.item-total {\r\n    color: #000; \r\n    font-weight: bolder;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n\r\n.foot {\r\n    background-color: #333;\r\n    position: relative;\r\n    bottom: 0;\r\n    text-decoration: italicize;\r\n}\r\n\r\n.social {\r\n    background-color: #fff;\r\n    color: #aaa;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    height: 35px;\r\n    align-items: baseline;\r\n}\r\n\r\n#phone-number {\r\n    color: #000;\r\n    margin-bottom: 5px;\r\n    font-weight: bolder;\r\n    font-size: 1.2em;\r\n    display: inline-block;\r\n}\r\n\r\n.social span {\r\n    display: inline-block;\r\n    margin: 8px;\r\n}\r\n\r\n.useful-links {\r\n    color: #fff;\r\n}\r\n\r\n.css-spapped-arrow-all {\r\n    display: inline-block;\r\n    min-width: 30px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    font-size: small;\r\n    font-weight: bolder;\r\n    background-color: #aaa;\r\n    color:rgb(255, 255, 255);\r\n    position: relative;\r\n    margin-left: 15px;\r\n}\r\n\r\n.css-spapped-arrow {\r\n    display: inline-block;\r\n    width: 23px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    font-size: small;\r\n    font-weight: bolder;\r\n    background-color: #aaa;\r\n    color:rgb(255, 255, 255);\r\n    position: relative;\r\n    border-radius: 3px;\r\n    margin-left: 15px;\r\n}\r\n\r\n.css-spapped-arrow-all:before,\r\n.css-spapped-arrow:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: 80%;\r\n    top: 0px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 10px solid transparent;\r\n    border-right: 10px solid #aaa;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n\r\n.company-info {\r\n    padding: 6px;\r\n    display: flex;\r\n    color:#888;\r\n    justify-content: space-around;\r\n}\r\n\r\n.company-location {\r\n    padding: 8px;\r\n    color: #888;\r\n    text-align: center;\r\n}\r\n\r\n.current-category {\r\n \r\n}\r\n\r\n@media screen and (max-width: 1160px){\r\n    .rounded {\r\n        display: none;\r\n        font-size: small;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 999px){\r\n    .name-of-product{\r\n        font-size: smaller;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px){\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '1 .column.size-1of1';\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 481px) and (max-width: 768px) {\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '2 .column.size-1of2';\r\n\t}\r\n}\r\n@media screen and (min-width: 769px) {\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '3 .column.size-1of3';\r\n\t}\r\n}\r\n\r\n.column { float: left; }\r\n.size-1of1 { width: 100%; }\r\n.size-1of2 { width: 50%; }\r\n.size-1of3 { width: 33.333%; }", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"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","sourcesContent":["html,\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: whitesmoke\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\naside {\r\n    box-sizing: border-box;\r\n    height: 100vh;\r\n    width: 25%;\r\n    background-color: #fff;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    padding-right: 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\nmain {\r\n    width: 75%;\r\n    margin-left: 25%;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n#logo {\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n}\r\n\r\n#logo span {\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    margin-left: 10px;\r\n}\r\n\r\n#logo i {\r\n    font-size: medium;\r\n    color: #000;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    padding-left: 5px;\r\n}\r\n\r\n#logo em {\r\n    font-size: small;\r\n    color: #000;\r\n    display: block;\r\n    font-weight: normal;\r\n    padding-left: 35px;\r\n}\r\n\r\n.desktop-info-area,\r\n.mobile-info-area {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.desktop-info-area div {\r\n    margin: 0 10px;\r\n    position: inherit;\r\n}\r\n\r\n.mobile-info-area div {\r\n    margin: 0 15px;\r\n    position: inherit;\r\n}\r\n\r\n#user-dropdown-desktop {\r\n    width:80%;\r\n    margin: auto;\r\n    max-width: 230px;\r\n    position: relative;\r\n    height: 0px;\r\n}\r\n\r\n#user-dropdown-mobile {\r\n    width:100%;\r\n    margin: 0;\r\n    position: relative;\r\n    left: 0px;\r\n}\r\n\r\n#user-dropdown-desktop ul {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 1px 2px 5px 1px #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    width: 120px;\r\n    right: -1px;\r\n}\r\n\r\n#user-dropdown-mobile ul {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 1px 2px 5px 1px #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    width: 120px;\r\n    right: 60px;\r\n    \r\n}\r\n\r\n#user-dropdown-desktop ul li {\r\n    padding: 10px;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n#user-dropdown-desktop ul li:hover {\r\n   background-color: beige;\r\n}\r\n\r\n#user-dropdown-mobile ul li {\r\n    padding: 6px;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n#fixed-top {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.user {\r\n    cursor: pointer;\r\n}\r\n\r\n#shopping-basket-desktop {\r\n    position: relative;\r\n    height: 0;\r\n}\r\n\r\n#shopping-basket-desktop ul {\r\n    background-color: white;\r\n    box-shadow: 1px 1px 5px 1px #666;\r\n    position: absolute;\r\n    right: -150px;\r\n    width: 350px;\r\n    max-height: 450px;\r\n    overflow-y: auto;\r\n    z-index: 200;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n#shopping-basket-mobile ul {\r\n    box-shadow: 1px 2px 5px 1px #999;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    right: 0px;\r\n    width: 100%;\r\n    max-width: 350px;\r\n    max-height: 450px;\r\n    overflow-y: auto;\r\n    z-index: 200;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.cart {\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.total-in-cart {\r\n    font-size: small;\r\n    font-weight: bolder;\r\n    position: absolute;\r\n    right: 7px;\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    display: inline-block;\r\n    min-width: 12px;\r\n    padding: 1px;\r\n    text-align: center;\r\n}\r\n\r\n.empty-cart {\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    height: 100px;\r\n    line-height: 100px;\r\n}\r\n\r\n.item-image {\r\n    padding: 12px;\r\n}\r\n\r\n#cart-items-mobile li.cart-item,\r\n#cart-items-desktop li.cart-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-top: dotted 1px #ccc;\r\n}\r\n\r\n.cart-item-details {\r\n    padding: 3px 10px;\r\n}\r\n\r\n.cart-more-details {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.cart-more-details i {\r\n    display: inline-block;\r\n    padding: 4px;\r\n}\r\n\r\n#cart-items-mobile li.cart-item img,\r\n#cart-items-desktop li.cart-item img {\r\n    width: 80px;\r\n}\r\n\r\n#product-categories-heading {\r\n    text-align: right;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#search-bar-desktop {\r\n    display: flex;\r\n    border: solid 3px #000;\r\n    width: 90%;\r\n    margin: 20px  auto;\r\n    border-radius: 9px;\r\n    position: relative;\r\n}\r\n\r\n#search-bar-desktop span {\r\n    cursor: pointer;\r\n    margin-top: 4px;\r\n}\r\n\r\n#search-bar-desktop input {\r\n    border: none;\r\n    border-radius: 9px;\r\n    display: inline-block;\r\n    width: 90%;\r\n    height: 20px;\r\n    line-height: 24px;\r\n    outline: none;\r\n}\r\n\r\n#product-categories-heading p {\r\n    text-align: right;\r\n}\r\n\r\n#category-wrapper {\r\n    max-height: 380px;\r\n    overflow-y: auto;\r\n    -ms-overflow-style: none;  /* IE and Edge */\r\n    scrollbar-width: none;  /* Firefox */\r\n}\r\n\r\n#category-wrapper::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n#category-list ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#category-list li {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\n#category-list a {\r\n    display: flex;\r\n    text-decoration: none;\r\n    color: #000;\r\n    font-size: 1.2em;\r\n    padding: 1px 10px;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n#grid {\r\n    padding: 5px;\r\n}\r\n\r\n#grid .product-item {\r\n    padding: 10px;\r\n    background-color:#fff;\r\n    margin: 10px 5px;\r\n}\r\n\r\n#grid .product-item img {\r\n    width: 100%;\r\n}\r\n\r\n#grid .product-item button.shop-now {\r\n    padding: 10px 7px;\r\n    cursor: pointer;\r\n    float: right;\r\n    border: none;\r\n    color: #fff;\r\n    background-color: #000;\r\n    border-radius: 6px;\r\n}\r\n\r\n.rounded {\r\n    display: inline-block;\r\n    width: 35px;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    border-radius: 50%;\r\n    background-color: #000;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.arrow-span {\r\n    display: inline-block;\r\n    color: #000;\r\n    font-size: xx-large;\r\n    background-color: #000;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    width: 15px;\r\n    position: relative;\r\n    right: -30px;\r\n}\r\n\r\n.item-list {\r\n    border-top: dotted 0.5px #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.item-list p {\r\n    padding: 5px 0;\r\n    margin: 0;\r\n}\r\n\r\n.price-add-to-cart {\r\n    display: flex;\r\n    justify-content: space-between; \r\n}\r\n\r\n.add-to-cart { \r\n    background-color: #000;\r\n    color: #fff;\r\n    padding: 5px; \r\n    border: solid 1px #fff;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n}\r\n\r\n.qtty {\r\n    width: 35px;\r\n    display: inline-block;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}\r\n\r\n.add-to-cart:hover { \r\n    background-color: #fff;\r\n    color: #000;\r\n    padding: 5px; \r\n    border: solid 1px #000;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n}\r\n\r\n.item_name {\r\n    font-size: larger;\r\n    font-weight: bolder;\r\n}\r\n\r\n.price {\r\n    color: #000; \r\n    font-weight: bolder;\r\n}\r\n\r\n.quantity {\r\n    color: #000; \r\n    font-weight: bolder;\r\n}\r\n\r\n.item-total {\r\n    color: #000; \r\n    font-weight: bolder;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n\r\n.foot {\r\n    background-color: #333;\r\n    position: relative;\r\n    bottom: 0;\r\n    text-decoration: italicize;\r\n}\r\n\r\n.social {\r\n    background-color: #fff;\r\n    color: #aaa;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    height: 35px;\r\n    align-items: baseline;\r\n}\r\n\r\n#phone-number {\r\n    color: #000;\r\n    margin-bottom: 5px;\r\n    font-weight: bolder;\r\n    font-size: 1.2em;\r\n    display: inline-block;\r\n}\r\n\r\n.social span {\r\n    display: inline-block;\r\n    margin: 8px;\r\n}\r\n\r\n.useful-links {\r\n    color: #fff;\r\n}\r\n\r\n.css-spapped-arrow-all {\r\n    display: inline-block;\r\n    min-width: 30px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    font-size: small;\r\n    font-weight: bolder;\r\n    background-color: #aaa;\r\n    color:rgb(255, 255, 255);\r\n    position: relative;\r\n    margin-left: 15px;\r\n}\r\n\r\n.css-spapped-arrow {\r\n    display: inline-block;\r\n    width: 23px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    font-size: small;\r\n    font-weight: bolder;\r\n    background-color: #aaa;\r\n    color:rgb(255, 255, 255);\r\n    position: relative;\r\n    border-radius: 3px;\r\n    margin-left: 15px;\r\n}\r\n\r\n.css-spapped-arrow-all:before,\r\n.css-spapped-arrow:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: 80%;\r\n    top: 0px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 10px solid transparent;\r\n    border-right: 10px solid #aaa;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n\r\n.company-info {\r\n    padding: 6px;\r\n    display: flex;\r\n    color:#888;\r\n    justify-content: space-around;\r\n}\r\n\r\n.company-location {\r\n    padding: 8px;\r\n    color: #888;\r\n    text-align: center;\r\n}\r\n\r\n.current-category {\r\n \r\n}\r\n\r\n@media screen and (max-width: 1160px){\r\n    .rounded {\r\n        display: none;\r\n        font-size: small;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 999px){\r\n    .name-of-product{\r\n        font-size: smaller;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px){\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '1 .column.size-1of1';\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 481px) and (max-width: 768px) {\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '2 .column.size-1of2';\r\n\t}\r\n}\r\n@media screen and (min-width: 769px) {\r\n\t#grid[data-columns]::before {\r\n\t\tcontent: '3 .column.size-1of3';\r\n\t}\r\n}\r\n\r\n.column { float: left; }\r\n.size-1of1 { width: 100%; }\r\n.size-1of2 { width: 50%; }\r\n.size-1of3 { width: 33.333%; }"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 900px) {\r\n    body {\r\n      display: block;\r\n      padding-top: 50px;\r\n    }\r\n\r\n    aside {\r\n        display: none;\r\n    }\r\n\r\n    main {\r\n        width: 100%;\r\n        margin-left: 0;\r\n        margin-bottom: 100px;\r\n    }\r\n\r\n    #fixed-top {\r\n        background-color: white;\r\n        display: block;\r\n        box-shadow: 1px 1px 5px 1px #ccc;\r\n        position: fixed;\r\n        width: 101%;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .mobile-menu-wrapper {\r\n        width: 100vw;\r\n    }\r\n\r\n    #mobile-menu {\r\n        width: 100vw;\r\n        display: flex;\r\n        align-items: baseline;\r\n        overflow-x: scroll;\r\n        overflow-y: hidden;\r\n        min-height: 40px;\r\n        -ms-overflow-style: none;  /* IE and Edge */\r\n        scrollbar-width: none;  /* Firefox */\r\n    }\r\n\r\n    #mobile-menu::-webkit-scrollbar {\r\n        display: none;\r\n    }\r\n\r\n    .product-item-mobile {\r\n        margin: 6px 5px 2px 5px;\r\n    }\r\n\r\n    .product-item-mobile a {\r\n        text-decoration: none;\r\n        box-shadow: 1px 1px 2px 1px #ccc;\r\n        border-radius: 10px;\r\n        display: inline-block;\r\n        padding: 3px 7px;\r\n        color: #333;\r\n        text-align: center;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/css/mobile-tablet.css"],"names":[],"mappings":"AAAA;IACI;MACE,cAAc;MACd,iBAAiB;IACnB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,WAAW;QACX,cAAc;QACd,oBAAoB;IACxB;;IAEA;QACI,uBAAuB;QACvB,cAAc;QACd,gCAAgC;QAChC,eAAe;QACf,WAAW;QACX,MAAM;QACN,OAAO;IACX;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,aAAa;QACb,qBAAqB;QACrB,kBAAkB;QAClB,kBAAkB;QAClB,gBAAgB;QAChB,wBAAwB,GAAG,gBAAgB;QAC3C,qBAAqB,GAAG,YAAY;IACxC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,uBAAuB;IAC3B;;IAEA;QACI,qBAAqB;QACrB,gCAAgC;QAChC,mBAAmB;QACnB,qBAAqB;QACrB,gBAAgB;QAChB,WAAW;QACX,kBAAkB;IACtB;AACJ","sourcesContent":["@media only screen and (max-width: 900px) {\r\n    body {\r\n      display: block;\r\n      padding-top: 50px;\r\n    }\r\n\r\n    aside {\r\n        display: none;\r\n    }\r\n\r\n    main {\r\n        width: 100%;\r\n        margin-left: 0;\r\n        margin-bottom: 100px;\r\n    }\r\n\r\n    #fixed-top {\r\n        background-color: white;\r\n        display: block;\r\n        box-shadow: 1px 1px 5px 1px #ccc;\r\n        position: fixed;\r\n        width: 101%;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .mobile-menu-wrapper {\r\n        width: 100vw;\r\n    }\r\n\r\n    #mobile-menu {\r\n        width: 100vw;\r\n        display: flex;\r\n        align-items: baseline;\r\n        overflow-x: scroll;\r\n        overflow-y: hidden;\r\n        min-height: 40px;\r\n        -ms-overflow-style: none;  /* IE and Edge */\r\n        scrollbar-width: none;  /* Firefox */\r\n    }\r\n\r\n    #mobile-menu::-webkit-scrollbar {\r\n        display: none;\r\n    }\r\n\r\n    .product-item-mobile {\r\n        margin: 6px 5px 2px 5px;\r\n    }\r\n\r\n    .product-item-mobile a {\r\n        text-decoration: none;\r\n        box-shadow: 1px 1px 2px 1px #ccc;\r\n        border-radius: 10px;\r\n        display: inline-block;\r\n        padding: 3px 7px;\r\n        color: #333;\r\n        text-align: center;\r\n    }\r\n}"],"sourceRoot":""}]);
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
        items: [
            { 
                item_number: "1",
                item_name: "Sweet Banana 1kg",
                price: "150",
            },
            { 
                item_number: "2",
                item_name: "Sweet Banana 2kg",
                price: "250",
            },
            { 
                item_number: "3",
                item_name: "Sweet Banana 3kg",
                price: "350",
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
        items: [
            { 
                item_number: "1",
                item_name: "Unriped Plantain 1kg",
                price: "450",
            },
            { 
                item_number: "2",
                item_name: "Unriped Plantain 2kg",
                price: "850",
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
        category_id: "uuygh65235",
        items: [
            { 
                item_number: "1",
                item_name: "Palm Oil 5Liters",
                price: "1550",
            },
            { 
                item_number: "2",
                item_name: "Palm Oil 10Liters",
                price: "2550",
            },
            { 
                item_number: "3",
                item_name: "Palm Oil 15Liters",
                price: "3550",
            },
            { 
                item_number: "4",
                item_name: "Palm Oil 20Liters",
                price: "4550",
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
        items: [
            { 
                item_number: "1",
                item_name: "Onions 1Pound",
                price: "250",
            }
        ],
        largeImage: "https://i.postimg.cc/76kBKnNL/onions.jpg",
        availability: "In stock"

    },
    {
        id: "ew6t76j54",
        name: "Beef",
        description: "Special beef from the normadic Fulani herdman",
        category: "Meat",
        stars: "5",
        total_sold: "23",
        category_id: "uuylo65235",
        items: [
            { 
                item_number: "1",
                item_name: "Beef 10kg",
                price: "150",
            },
            { 
                item_number: "2",
                item_name: "Beef 20kg",
                price: "250",
            },
            { 
                item_number: "3",
                item_name: "Beef 30kg",
                price: "350",
            },
            { 
                item_number: "4",
                item_name: "Beef 40kg",
                price: "450",
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
        items: [
            { 
                item_number: "1",
                item_name: "Fresh okra 0.5kg",
                price: "250",
            },
            { 
                item_number: "2",
                item_name: "Fresh okra 1.5kg",
                price: "350",
            },
            { 
                item_number: "3",
                item_name: "Fresh okra 2.5kg",
                price: "450",
            },
            { 
                item_number: "4",
                item_name: "Fresh okra 3.5kg",
                price: "550",
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
        items: [
            { 
                item_number: "1",
                item_name: "Fresh okra 0.5kg",
                price: "550",
            },
            { 
                item_number: "2",
                item_name: "Fresh okra 1.5kg",
                price: "1000",
            },
            { 
                item_number: "3",
                item_name: "Fresh okra 2.5kg",
                price: "1550",
            },
            { 
                item_number: "3",
                item_name: "Fresh okra 3.5kg",
                price: "2550",
            }
        ],
        largeImage: "https://i.postimg.cc/52DKCVYL/ginger.jpg",
        availability: "In stock"

    },
    {
        id: "u100loikkj54",
        name: "Curry Powder",
        description: "Curry Powder fuit thefrshest brred",
        category: "Spices",
        stars: "5",
        total_sold: "23",
        category_id: "uuy6oj5235",
        items: [
            { 
                item_number: "1",
                item_name: "Curry Powder 0.5pounds",
                price: "550",
            },
            { 
                item_number: "2",
                item_name: "Curry Powder 1.5pounds",
                price: "1000",
            },
            { 
                item_number: "3",
                item_name: "Curry Powder 2.5pounds",
                price: "2550",
            },
            { 
                item_number: "4",
                item_name: "Curry Powder 3.5pounds",
                price: "3550",
            }
        ],
        largeImage: "https://i.postimg.cc/QdFnCttj/curry-powder.jpg",
        availability: "In stock"

    },
    {
        id: "uyeloder6j54",
        name: "Jollof Rice",
        description: "Delicious jollof rice prepared by the best hands",
        category: "Cooked Food",
        stars: "5",
        total_sold: "23",
        category_id: "cooked5235",
        items: [
            { 
                item_number: "1",
                item_name: "Jollof rice  1 plate",
                price: "500",
            },
            { 
                item_number: "2",
                item_name: "Jollof rice  2 plate",
                price: "1000",
            },
            { 
                item_number: "3",
                item_name: "Jollof rice 3 plate",
                price: "1500",
            },
            { 
                item_number: "4",
                item_name: "Jollof rice 4 plate",
                price: "2000",
            }
        ],
        largeImage: "https://i.postimg.cc/QdFnCttj/curry-powder.jpg",
        availability: "In stock"

    },
    {
        id: "qqyeloij6571",
        name: "Bole",
        description: "Bolle for you and your frineds",
        category: "Roasted and barbecue",
        stars: "5",
        total_sold: "23",
        category_id: "roasted65235",
        items: [
            { 
                item_number: "1",
                item_name: "Bole 1kg",
                price: "900",
            },
            { 
                item_number: "2",
                item_name: "Bole 2kg",
                price: "1100",
            },
            { 
                item_number: "3",
                item_name: "Bole 3kg",
                price: "1300",
            },
            { 
                item_number: "4",
                item_name: "Bole 4kg",
                price: "1500",
            }
        ],
        largeImage: "https://i.postimg.cc/QdFnCttj/curry-powder.jpg",
        availability: "In stock"

    },
    {
        id: "qqyeloij65001",
        name: "Milo refill pack",
        description: "Millo refill pack, to expire by August 30, 2024",
        category: "Beverages",
        stars: "5",
        total_sold: "23",
        category_id: "roasbeverages35",
        items: [
            { 
                item_number: "1",
                item_name: "Milo refill pack 1kg",
                price: "1500",
            },
            { 
                item_number: "2",
                item_name: "Milo refill pack 1.5kg",
                price: "2000",
            },
            { 
                item_number: "3",
                item_name: "Milo refill pack 2kg",
                price: "3000",
            },
            { 
                item_number: "4",
                item_name: "Milo refill pack 1kg",
                price: "4500",
            }
        ],
        largeImage: "https://i.postimg.cc/QdFnCttj/curry-powder.jpg",
        availability: "In stock"

    },
    {
        id: "q9qyppoij6571",
        name: "Stew packet",
        description: "Millo refill pack, to expire by August 30, 2024",
        category: "Collections",
        stars: "5",
        total_sold: "23",
        category_id: "roascollection35",
        items: [
            { 
                item_number: "1",
                item_name: "Stew packet for cooking only once",
                price: "150",
            },
            { 
                item_number: "2",
                item_name: "Stew packet for cooking twice",
                price: "150",
            },
            { 
                item_number: "3",
                item_name: "Stew packet for cooking thrice",
                price: "150",
            },
            { 
                item_number: "4",
                item_name: "Stew packet for cooking four times",
                price: "150",
            }
        ],
        largeImage: "https://i.postimg.cc/QdFnCttj/ginger.jpg",
        availability: "In stock"
    },
    {
        id: "qqyppoij65iu",
        name: "Saddin",
        description: "Best qaulity sadin",
        category: "Proccessed food",
        stars: "5",
        total_sold: "23",
        category_id: "roasprocces35",
        items: [
            { 
                item_number: "1",
                item_name: "Sadin 0.5kg",
                price: "150",
            },
            { 
                item_number: "2",
                item_name: "Sadin 1kg",
                price: "250",
            },
            { 
                item_number: "3",
                item_name: "Sadin 1.5kg",
                price: "350",
            },
            { 
                item_number: "4",
                item_name: "Sadin 2kg",
                price: "450",
            }
        ],
        largeImage: "https://i.postimg.cc/QdFnCttj/ginger.jpg",
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
        
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.adjustWidthOfElements)("#mobile-menu");
        
        const allProduct = String(window.location.hash).replace(/#/, '').replace(/_/gi, ' ')
        if (!window.location.hash || allProduct.toLocaleLowerCase() === "all products") {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayAllProducts)();
            _salvattore_js__WEBPACK_IMPORTED_MODULE_2___default().rescanMediaQueries();

            const currentHash = window.location.hash;
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.indicateCurrentCategory)("#category-list", currentHash);
        } else {
            const thisCategory = window.location.hash.replace(/#/, '').replace(/_/gi, ' ');
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayProductsOfCategory)(thisCategory);
            _salvattore_js__WEBPACK_IMPORTED_MODULE_2___default().rescanMediaQueries();

            const currentHash = window.location.hash;
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.indicateCurrentCategory)("#category-list", currentHash);
        }

        window.addEventListener('hashchange', function() {
            const thisCategory = window.location.hash.replace(/#/, '').replace(/_/gi, ' ');
            const currentHash = window.location.hash;
            
            if (!window.location.hash || String(thisCategory).trim().toLocaleLowerCase() === "all products") {
                
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayAllProducts)();
                _salvattore_js__WEBPACK_IMPORTED_MODULE_2___default().rescanMediaQueries();
                
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.indicateCurrentCategory)("#category-list", currentHash);
            } else {
                
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayProductsOfCategory)(thisCategory);
                _salvattore_js__WEBPACK_IMPORTED_MODULE_2___default().rescanMediaQueries();

                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.indicateCurrentCategory)("#category-list", currentHash);   
            }

            const shopNowButtons = document.querySelectorAll('.shop-now');
            shopNowButtons.forEach( button => button.addEventListener('click', (e) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createAddToCartBtn)(e)) );

            const sessionData = JSON.parse(localStorage.getItem('marketuze_cart')) || [];
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.syncSessionDataToDom)(sessionData); 

            const cartTotalContainers = document.querySelectorAll('.total-in-cart');
            cartTotalContainers.forEach( container => container.textContent = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.itemsInCartApp)() );

        }, false);

        const shopNowButtons = document.querySelectorAll('.shop-now');
        shopNowButtons.forEach( button => button.addEventListener('click', (e) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createAddToCartBtn)(e)) );

        _dom_js__WEBPACK_IMPORTED_MODULE_1__.grid.addEventListener('click', (e) => { 
            if (e.target.classList.contains('add-to-cart')) {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createPlusMinusBtn)(e);
            }
       
            if (e.target.classList.contains('plus')) {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.plusItem)(e);
            }

            if (e.target.classList.contains('minus')) {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.minusItem)(e);
            }
        } );

        const sessionData = JSON.parse(localStorage.getItem('marketuze_cart')) || [];
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.syncSessionDataToDom)(sessionData); 
    }

    return {
        display,
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shoppingData": () => (/* binding */ shoppingData),
/* harmony export */   "emptyBasketInfo": () => (/* binding */ emptyBasketInfo),
/* harmony export */   "numberOfItems": () => (/* binding */ numberOfItems),
/* harmony export */   "cartTotal": () => (/* binding */ cartTotal),
/* harmony export */   "basketSubTotal": () => (/* binding */ basketSubTotal),
/* harmony export */   "addToSession": () => (/* binding */ addToSession),
/* harmony export */   "addToShoppingBascket": () => (/* binding */ addToShoppingBascket),
/* harmony export */   "deleteFromSession": () => (/* binding */ deleteFromSession),
/* harmony export */   "increaseItem": () => (/* binding */ increaseItem),
/* harmony export */   "decreaseItem": () => (/* binding */ decreaseItem)
/* harmony export */ });

const shoppingData = () => JSON.parse(localStorage.getItem('marketuze_cart')) || [];

const emptyBasketInfo = `
   <div class="empty-cart">
      SHOPPING BASKET IS EMPTY
   </div>
`;

const createItemHtml = (item) => {
   return `
   <div class="item-image">
      <img src="${item.image}" alt="prd-image">
   </div>
   <div class="cart-item-details">
      <p class="cart-product-name">
         <i> ${item.name} </i>
      </p> 

      <p id="${item.cartId}" class="cart-more-details ${item.productId}-${item.number}">
          <i class="price"> ${item.price} </i>
          <i>&times; </i> 
          <i class="quantity"> ${item.quantity} </i> 
          <i>= </i> 
          <i class="item-total"> ${item.price * item.quantity} </i>
      </p>
   </div>
 `;
}

const numberOfItems = () => shoppingData()?.reduce( (total, current) => {
   total += current.quantity;
   return total;
}, 0) || 0;

const cartTotal = () => shoppingData()?.reduce( (total, current) => {
   total += current.quantity * current.price;
   return total;
}, 0) || 0;

const basketSubTotal = () => {
   return `
      <li id="basket-subtotal" class="cart-item">
            <i> Cart Subtotal:
               <strong id="subtotal-amount">
                  ${cartTotal()}
               </strong> 
            </i>
      </li>
   `
}

const addToSession = (item) => {

   const sessionData =  shoppingData();
   sessionData.push(item);

   const emptyBaskets = document.querySelectorAll('.empty-cart');
   if (emptyBaskets) {
      emptyBaskets.forEach( emptyBasket => emptyBasket.remove() );
   }

   const increaseQttyInCart = (number = 1) => {
      const quantityInCarts = document.querySelectorAll('.total-in-cart');
      quantityInCarts.forEach( cart => cart.textContent = Number(cart.textContent)  + number );
   }

   const shoppingBaskets = document.querySelectorAll('#cart-items-mobile, #cart-items-desktop');
   shoppingBaskets.forEach( basket => {

      const basketItem = document.createElement('li');
      basketItem.id = item.cartId;
      basketItem.classList.add('cart-item');
      basketItem.innerHTML = createItemHtml(item);

      basket.appendChild(basketItem);
   });

   increaseQttyInCart()
   localStorage.setItem('marketuze_cart', JSON.stringify(sessionData))
 }

 const addToShoppingBascket = (item) => {
   const emptyBasket = document.querySelectorAll('.empty-cart');
   if (emptyBasket) {
      emptyBasket.forEach( item => item.remove() );
   }

   const baskets = document.querySelectorAll('#cart-items-mobile, #cart-items-desktop'); 
   baskets.forEach( basket => {
      const basketItem = document.createElement('li');
      basketItem.classList.add('cart-item');
      basketItem.innerHTML = createItemHtml(item);

      const itemIsAlreadyInBasket = document.querySelector(`.${item.productId}-${item.number}`);
      if (!itemIsAlreadyInBasket) {
         basket.appendChild(basketItem);
      }
      
   });

 }

const deleteFromSession = (cartId) => {
   const afterDelete = shoppingData().filter(item => item.cartId !== cartId);
   localStorage.setItem('marketuze_cart', JSON.stringify(afterDelete));
}

const increaseItem = (id, number) => {
   const itemsInCart =  JSON.parse(localStorage.getItem('marketuze_cart'));
   itemsInCart.filter( item => item.productId === id && Number(item.number) === number )[0].quantity += 1;
   localStorage.setItem('marketuze_cart', JSON.stringify(itemsInCart));
}

const decreaseItem = (id, number) => {
   const itemsInCart =  JSON.parse(localStorage.getItem('marketuze_cart'));
   itemsInCart.filter( item => item.productId === id && Number(item.number) === number )[0].quantity -= 1;
   localStorage.setItem('marketuze_cart', JSON.stringify(itemsInCart));
}




/***/ }),

/***/ "./src/js/dom-strings.js":
/*!*******************************!*\
  !*** ./src/js/dom-strings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linkToAllCategories": () => (/* binding */ linkToAllCategories),
/* harmony export */   "addCategoryLinks": () => (/* binding */ addCategoryLinks),
/* harmony export */   "linkToAllCategoriesMobile": () => (/* binding */ linkToAllCategoriesMobile),
/* harmony export */   "addCategoryLinksMobile": () => (/* binding */ addCategoryLinksMobile),
/* harmony export */   "mapJoinProducts": () => (/* binding */ mapJoinProducts),
/* harmony export */   "mapJoinProductsOfCategory": () => (/* binding */ mapJoinProductsOfCategory),
/* harmony export */   "addToCartBtn": () => (/* binding */ addToCartBtn),
/* harmony export */   "makeButtonsWith": () => (/* binding */ makeButtonsWith),
/* harmony export */   "makeButtonsWith_2": () => (/* binding */ makeButtonsWith_2),
/* harmony export */   "addToCartDisplay": () => (/* binding */ addToCartDisplay)
/* harmony export */ });
const linkToAllCategories = (number) => {
    return `
    <li>
        <a href="#All_products"> 
            <i> 
                <span class="rounded"> 
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" fill="currentColor" 
                class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 
                .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 
                .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 
                0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 
                0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 
                .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
                </span> 
                <span> 
                <span class="name-of-product">All Products</span> 
                    <span class="css-spapped-arrow-all">${number}</span>
                </span>
            </i>
            <span class="current-category">
            
            </span> 
        </a> 
    </li>
    `
}    

const addCategoryLinks = (products, value) => {
    return `
    <li>
        <a href="#${value.replace(/ /gi, '_')}">
            <i>
                <span class="rounded"> ${value[0]} </span>
                <span>
                    <span class="name-of-product">${value}</span>
                    <span class="css-spapped-arrow"> 
                        ${products.filter( item => item.category === value).length} 
                    </span> 
                </span>
            </i>
            <span class="current-category">
            .
            </span>
        </a>
    </li>
    `;
}

const linkToAllCategoriesMobile = (number) => {
    return `   
        <div class="product-item-mobile">
            <a href="#All_products"> 
                <em> All products </em> 
                <span>${number}</span> 
            </a>
        </div>
    `;
}

const addCategoryLinksMobile = (products, value) => {
    return `
    <div class="product-item-mobile">
        <a href="#${value.replace(/ /gi, '_')}"> 
            <em> ${value} </em> 
            <span> 
                ${products.filter( item => item.category === value).length}
            </span> 
        </a>
    </div>
    `;
}

const mapJoinProducts = (products) => {
    return products.map(product => `
    <div>
        <div class="product-item">
            <img src="${product.largeImage}" alt="">
            <h2><i>${product.name}</i></h2>
            <p>
                <i>${product.description}</i>
            </p>
            <button 
            id="${product.id}" 
            class="shop-now"
            > 
                SHOP NOW 
            </button>
            <p class="clear"></p>
        </div>
    </div>
    ` ).join("");
} 

const mapJoinProductsOfCategory = (category) => {
    return category.map(product => `
    <div>
        <div class="product-item">
            <img src="${product.largeImage}" alt="">
          
            <h2> <i> ${product.name} </i> </h2>
            <p>   
                 <i> ${product.description} </i>
            </p>
            <button id="${product.id}" 
            class="shop-now"
            >
            SHOP NOW 
            </button>
            <p class="clear"></p>
        </div>
    </div>
    ` ).join("");
}

const addToCartBtn = (item, productID) => {
    return `
    <div class="item-list">
        <p>  <i class="item_name"> ${item.item_name}  </i></p>
        <p class="price-add-to-cart"> 
            <span class="price"> <i> &#8358; ${item.price}  </i></span>
            <button 
            class="add-to-cart ${productID}"
            data-product-id="${productID}" 
            data-product-number="${item.item_number}"
            data-product-name="${item.item_name}"
            data-product-price="${item.price}"
            >
            Add to cart
            </button>
        </p>
    </div>
    `
}

const makeButtonsWith = ({ cartId, productId, name, number, price }) => {
    return  `
    <span id="${cartId}" class="cart-events ${productId}">

    <button 
    class="minus"
    data-product-id="${productId}"
    data-product-name="${name.replace(/ /gi, '_')}"
    data-product-number="${number}"
    data-product-price="${price}"
    >
        &minus;
    </button>

    <span class="qtty">1</span>

    <button 
    class="plus"
    data-product-id="${productId}"
    data-product-name="${name.replace(/ /gi, '_')}"
    data-product-number="${number}"
    data-product-price="${price}"
    >
        &plus;
    </button>

    </span>
    `;
}

const makeButtonsWith_2 = ({ cartId, productId, name, number, price, quantity }) => {
    return  `
    <span id="${cartId}" class="cart-events ${productId}">

    <button 
    class="minus"
    data-product-id="${productId}"
    data-product-name="${name.replace(/ /gi, '_')}"
    data-product-number="${number}"
    data-product-price="${price}"
    >
        &minus;
    </button>

    <span class="qtty">${quantity}</span>

    <button 
    class="plus"
    data-product-id="${productId}"
    data-product-name="${name.replace(/ /gi, '_')}"
    data-product-number="${number}"
    data-product-price="${price}"
    >
        &plus;
    </button>

    </span>
    `;
}

const addToCartDisplay = (id, number, name, price) => {
    return `
        <button 
        class="add-to-cart ${id}" 
        data-product-id="${id}" 
        data-product-number="${number}" 
        data-product-name="${name.replace(/_/gi,' ')}" 
        data-product-price="${price}">
            Add to cart
        </button>
    `;
}


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
/* harmony export */   "categoryLinks": () => (/* binding */ categoryLinks),
/* harmony export */   "grid": () => (/* binding */ grid)
/* harmony export */ });
const shoppingCartIcons = document.querySelectorAll(".cart")
const userIcons = document.querySelectorAll(".user");
const categoryLinks = () => document.querySelectorAll('#category-list ul li');
const grid = document.getElementById('grid');


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
/* harmony export */   "displayProductsOfCategory": () => (/* binding */ displayProductsOfCategory),
/* harmony export */   "indicateCurrentCategory": () => (/* binding */ indicateCurrentCategory),
/* harmony export */   "adjustWidthOfElements": () => (/* binding */ adjustWidthOfElements),
/* harmony export */   "createAddToCartBtn": () => (/* binding */ createAddToCartBtn),
/* harmony export */   "createPlusMinusBtn": () => (/* binding */ createPlusMinusBtn),
/* harmony export */   "syncSessionDataToDom": () => (/* binding */ syncSessionDataToDom),
/* harmony export */   "itemsInCartApp": () => (/* binding */ itemsInCartApp),
/* harmony export */   "plusItem": () => (/* binding */ plusItem),
/* harmony export */   "minusItem": () => (/* binding */ minusItem)
/* harmony export */ });
/* harmony import */ var _data_products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/products.js */ "./src/data/products.js");
/* harmony import */ var _dom_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-strings.js */ "./src/js/dom-strings.js");
/* harmony import */ var _js_cart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/cart.js */ "./src/js/cart.js");






const toggleUserInfo = (elements) => {
    const shoppingBaskets = [
        'shopping-basket-desktop',
        'shopping-basket-mobile'
    ]

    const desktopBasketIsHidden = document.getElementById(`${shoppingBaskets[0]}`).classList.contains('hidden');
    if(!desktopBasketIsHidden) {
        const shoppingCartIcons = document.querySelectorAll(".cart");
        shoppingCartIcons[0].click();
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

    if (!document.getElementById(`${userInfo[0]}`).classList.contains('hidden')) {
        const userIcons = document.querySelectorAll(".user");
        userIcons[0].click();
    }

    shoppingBaskets.forEach( (basket) => {
        const thisBasket = document.getElementById(`${basket}`);
        thisBasket.classList.toggle("hidden");
    })

}

const displayCategories = () => {
    const allCategories = new Set([..._data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"].map( item => item.category)]);
    const desktopMenu = document.querySelector('#category-list ul');
    const mobileMenu = document.getElementById("mobile-menu");

    let desktopMenuList =  (0,_dom_strings_js__WEBPACK_IMPORTED_MODULE_1__.linkToAllCategories)(_data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"].length);

    let mobileMenuList = (0,_dom_strings_js__WEBPACK_IMPORTED_MODULE_1__.linkToAllCategoriesMobile)(_data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"].length) ;

    for ( let value of allCategories.values() ) {

        desktopMenuList += (0,_dom_strings_js__WEBPACK_IMPORTED_MODULE_1__.addCategoryLinks)(_data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"], value);

        mobileMenuList += (0,_dom_strings_js__WEBPACK_IMPORTED_MODULE_1__.addCategoryLinksMobile)(_data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"], value) 
    }

    desktopMenu.innerHTML = desktopMenuList;
    mobileMenu.innerHTML = mobileMenuList;
}

const displayAllProducts = () => {
    const grid = document.getElementById('grid');
    
    const listOfProducts = (0,_dom_strings_js__WEBPACK_IMPORTED_MODULE_1__.mapJoinProducts)(_data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"])

    grid.innerHTML = listOfProducts;
}

const displayProductsOfCategory = (category) => {
   const thisCategory = _data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter( product => product.category === category )
   const grid = document.getElementById('grid');

   const listOfProducts = (0,_dom_strings_js__WEBPACK_IMPORTED_MODULE_1__.mapJoinProductsOfCategory)(thisCategory);

   grid.innerHTML = listOfProducts;
}

const indicateCurrentCategory = (element, hash) => {
    document.querySelectorAll(`${element} li`).forEach( item => item.style.backgroundColor = 'white' );
    document.querySelectorAll("#mobile-menu a").forEach( item => {
        Object.assign(item.style, {backgroundColor: 'white', color: '#555'})
    });

    if (hash === '') {
        document.querySelector(`${element} a[href="#All_products"]`).parentElement.style.backgroundColor = 'whitesmoke';

        const mobileLinks = document.querySelector(`#mobile-menu a[href="#All_products"]`);
        Object.assign(mobileLinks.style, {backgroundColor: '#fff', color: '#333'})
    } else {
        document.querySelector(`${element} a[href="${hash}"]`).parentElement.style.backgroundColor = 'whitesmoke';

        const mobileLinks = document.querySelector(`#mobile-menu a[href="${hash}"]`);
        Object.assign(mobileLinks.style, {backgroundColor: '#333', color: 'whiteSmoke'})
    }
}

const adjustWidthOfElements = (container) => {
    const elements = document.querySelectorAll(`${container} a em`);
    elements.forEach( element => {
        const lengthOfInnerText = element.textContent.length;
        element.parentElement.style.width = `${(lengthOfInnerText * 9)}px`;
    })
}

const createAddToCartBtn = (e) => {
   const productID = e.target.id;
   const selectedItems = _data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter( product => product.id === productID )[0].items;
   const optionsDiv = document.createElement('div');
   let htmlContent = '';
   selectedItems.forEach( item => {
        htmlContent += (0,_dom_strings_js__WEBPACK_IMPORTED_MODULE_1__.addToCartBtn)(item, productID);
   });

   optionsDiv.innerHTML = htmlContent;
   e.target.before(optionsDiv);
   e.target.remove();
}

const keyGen = (len) => {
    let key = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz';
    const charsLen = chars.length;
    for (let i = 0; i < len; i += 1) {
      key += chars.charAt(Math.floor(Math.random() * charsLen));
    }
    return key;
}

const createPlusMinusBtn = (e) => {
    const cartId = keyGen(8);
    const productId = e.target.dataset.productId;
    const name = e.target.dataset.productName;
    const number = e.target.dataset.productNumber; 
    const price = e.target.dataset.productPrice;
    const quantity = 1;
    const image = _data_products_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter( item => item.id === productId)[0].largeImage;
    
    const newItem = {
        cartId,
        productId,
        name,
        number,
        price,
        quantity,
        image,
    }

    const cartPlusMinus = (0,_dom_strings_js__WEBPACK_IMPORTED_MODULE_1__.makeButtonsWith)(newItem);

    const priceTag = e.target.previousElementSibling;

    priceTag.insertAdjacentHTML('afterend', cartPlusMinus)
    e.target.remove();
    (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_2__.addToSession)(newItem);
}

const  syncSessionDataToDom = (sessionData) => {
    if (sessionData.length === 0) return

    sessionData.forEach( data => {
        const { productId, number } = data;

        const shopNowButton = document.getElementById(`${data.productId}`);

        if (shopNowButton) {
            shopNowButton.click();
        }

        if (document.querySelector(`.add-to-cart.${productId}[data-product-number="${number}"]`)) {

            const button = document.querySelector(`.add-to-cart.${productId}[data-product-number="${number}"]`);
            const priceTag = button.previousElementSibling;
            
            const cartPlusMinus = (0,_dom_strings_js__WEBPACK_IMPORTED_MODULE_1__.makeButtonsWith_2)(data);

            priceTag.insertAdjacentHTML('afterend', cartPlusMinus);
            button.remove();
        } 
        (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_2__.addToShoppingBascket)(data);
    });

    const cartTotalContainers = document.querySelectorAll('.total-in-cart');
    cartTotalContainers.forEach( container => container.textContent = (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_2__.numberOfItems)() );
}

const itemsInCartApp = () => (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_2__.shoppingData)()?.reduce( (total, current) => {
    total += current.quantity;
    return total;
}, 0) || 0;

const recalculateShoppingCart = (data, value) => {
    const { id, price, number, quantity } = data;
    const quantityContainers = document.querySelectorAll(`.${id}-${number} .quantity`);
    const itemTotalContainers = document.querySelectorAll(`.${id}-${number} .item-total`);

    quantityContainers.forEach( element => element.textContent = quantity + value );
    itemTotalContainers.forEach( element => element.textContent = (quantity + value) * price );

    const cartTotalContainers = document.querySelectorAll('.total-in-cart');
    cartTotalContainers.forEach( container => container.textContent = (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_2__.numberOfItems)()  );
}

const plusItem = (e) => {

    const id = e.target.dataset.productId;
    const number = Number(e.target.dataset.productNumber);
    const price = Number(e.target.dataset.productPrice);
    const quantity = Number(e.target.previousElementSibling.textContent);

    (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_2__.increaseItem)(id, number);

    e.target.previousElementSibling.textContent = quantity + 1;

    const data = {id, number, price, quantity};
    recalculateShoppingCart(data, 1);
}

const minusItem = (e) => {
    
    const cartId = e.target.parentElement.id;
    const id = e.target.dataset.productId;
    const number = Number(e.target.dataset.productNumber);
    const name = e.target.dataset.productName;
    const price = Number(e.target.dataset.productPrice);
    const quantity = Number(e.target.nextElementSibling.textContent);

    const  deleteFromBaskets = (elements) => {
        elements.forEach( element => {
            element.parentElement.parentElement.remove()
        })
    };
    
    const priceSpan = e.target.parentElement.previousElementSibling;

    const displayAddToCartButton = () => {
        const button = (0,_dom_strings_js__WEBPACK_IMPORTED_MODULE_1__.addToCartDisplay)(id, number, name, price);

        e.target.parentElement.remove();
        priceSpan.insertAdjacentHTML('afterend', button);
    }

    const shoppingBaskets = document.querySelectorAll('#cart-items-mobile, #cart-items-desktop');
    const indicateEmptyBaskets = (shoppingBaskets) => {

        if (shoppingBaskets[0].children.length) return;

        shoppingBaskets.forEach( basket => {
            basket.innerHTML = _js_cart_js__WEBPACK_IMPORTED_MODULE_2__.emptyBasketInfo;
        });
    }

    const cartTotalContainers = document.querySelectorAll('.total-in-cart');
    const numberOfItemsInCart = (cartTotalContainers) => {
        cartTotalContainers.forEach( container => container.textContent = (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_2__.numberOfItems)() );
    }

    if (quantity > 1) {
        (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_2__.decreaseItem)(id, number);
        e.target.nextElementSibling.textContent = quantity - 1;

        const data = {cartId, id, number, price, quantity};
        recalculateShoppingCart(data, -1);
    } else {
        (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_2__.deleteFromSession)(cartId);

        const items = document.querySelectorAll(`.${id}-${number}`);
        deleteFromBaskets(items);

        numberOfItemsInCart(cartTotalContainers)

        displayAddToCartButton();

        indicateEmptyBaskets(shoppingBaskets)
        
    }
   
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEseUJBQXlCLHVCQUF1QixPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZ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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1lLO0FBQ3BCO0FBTWtCO0FBQ2xCO0FBQzBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFpQjtBQUN6Qix5REFBeUQseURBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUF5QjtBQUNqQyx5REFBeUQsOERBQW1CO0FBQzVFO0FBQ0E7QUFDQSxRQUFRLDZEQUFpQjtBQUN6QjtBQUNBLFFBQVEsZ0VBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQWtCO0FBQzlCLFlBQVksd0VBQTZCO0FBQ3pDO0FBQ0E7QUFDQSxZQUFZLGtFQUF1QjtBQUNuQyxVQUFVO0FBQ1Y7QUFDQSxZQUFZLG9FQUF5QjtBQUNyQyxZQUFZLHdFQUE2QjtBQUN6QztBQUNBO0FBQ0EsWUFBWSxrRUFBdUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2REFBa0I7QUFDbEMsZ0JBQWdCLHdFQUE2QjtBQUM3QztBQUNBLGdCQUFnQixrRUFBdUI7QUFDdkMsY0FBYztBQUNkO0FBQ0EsZ0JBQWdCLG9FQUF5QjtBQUN6QyxnQkFBZ0Isd0VBQTZCO0FBQzdDO0FBQ0EsZ0JBQWdCLGtFQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsNkRBQWtCO0FBQ3hHO0FBQ0E7QUFDQSxZQUFZLCtEQUFvQjtBQUNoQztBQUNBO0FBQ0EsOEVBQThFLHlEQUFjO0FBQzVGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrRkFBa0YsNkRBQWtCO0FBQ3BHO0FBQ0EsUUFBUSwwREFBcUI7QUFDN0I7QUFDQSxnQkFBZ0IsNkRBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtREFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVM7QUFDekI7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsK0RBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSG5CO0FBQ1E7QUFDUjtBQUNRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixXQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0EsZUFBZSxZQUFZLDZCQUE2QixlQUFlLEdBQUcsWUFBWTtBQUN0Riw4QkFBOEIsWUFBWTtBQUMxQyxxQkFBcUI7QUFDckIsaUNBQWlDLGVBQWU7QUFDaEQ7QUFDQSxtQ0FBbUMsNEJBQTRCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsZUFBZSxHQUFHLFlBQVk7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELE9BQU87QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0EseUNBQXlDLFVBQVU7QUFDbkQ7QUFDQSxvREFBb0QsTUFBTTtBQUMxRDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQyxxQkFBcUIsYUFBYTtBQUNsQztBQUNBLHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQTtBQUNBLGtCQUFrQixXQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0EsMEJBQTBCLFdBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxxQ0FBcUMsaUJBQWlCO0FBQ3REO0FBQ0EsNkNBQTZDLEVBQUUsYUFBYTtBQUM1RDtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDLCtCQUErQixVQUFVO0FBQ3pDLG1DQUFtQyxpQkFBaUI7QUFDcEQsaUNBQWlDLGVBQWU7QUFDaEQsa0NBQWtDLFdBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDJCQUEyQix3Q0FBd0M7QUFDMUU7QUFDQSxnQkFBZ0IsT0FBTyx1QkFBdUIsVUFBVTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQyx5QkFBeUIseUJBQXlCO0FBQ2xELDJCQUEyQixPQUFPO0FBQ2xDLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQyx5QkFBeUIseUJBQXlCO0FBQ2xELDJCQUEyQixPQUFPO0FBQ2xDLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyw2QkFBNkIsa0RBQWtEO0FBQ3RGO0FBQ0EsZ0JBQWdCLE9BQU8sdUJBQXVCLFVBQVU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakMseUJBQXlCLHlCQUF5QjtBQUNsRCwyQkFBMkIsT0FBTztBQUNsQywwQkFBMEIsTUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDLHlCQUF5Qix5QkFBeUI7QUFDbEQsMkJBQTJCLE9BQU87QUFDbEMsMEJBQTBCLE1BQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLDZCQUE2QixHQUFHO0FBQ2hDLDJCQUEyQixHQUFHO0FBQzlCLCtCQUErQixPQUFPO0FBQ3RDLDZCQUE2Qix3QkFBd0I7QUFDckQsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTk87QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBMEM7QUFDbEQsTUFBTSxpQ0FBTyxFQUFFLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsa0dBQUM7QUFDekIsTUFBTSxLQUFLLEVBRU4sQ0FBQztBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QscUJBQXFCLGVBQWU7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxRQUFRO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxRQUFRO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQXFEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxrQ0FBa0M7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYyxrQkFBa0Isa0JBQWtCLGVBQWU7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1bEIyQztBQUMzQztBQVkwQjtBQUMxQjtBQVd1QjtBQUN2QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxtQkFBbUI7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsS0FBSztBQUM3RDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsT0FBTztBQUM3RDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQLHNDQUFzQyw2REFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0VBQW1CLENBQUMsZ0VBQWU7QUFDOUQ7QUFDQSx5QkFBeUIsMEVBQXlCLENBQUMsZ0VBQWU7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlFQUFnQixDQUFDLHlEQUFRO0FBQ3BEO0FBQ0EsMEJBQTBCLHVFQUFzQixDQUFDLHlEQUFRO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLDJCQUEyQixnRUFBZSxDQUFDLHlEQUFRO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx3QkFBd0IsZ0VBQWU7QUFDdkM7QUFDQTtBQUNBLDBCQUEwQiwwRUFBeUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0EsbUNBQW1DLHdDQUF3QztBQUMzRSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQSwwQ0FBMEMsdUNBQXVDO0FBQ2pGLE1BQU07QUFDTixrQ0FBa0MsU0FBUyxVQUFVLEtBQUs7QUFDMUQ7QUFDQSwyRUFBMkUsS0FBSztBQUNoRiwwQ0FBMEMsNkNBQTZDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asa0RBQWtELFdBQVc7QUFDN0Q7QUFDQTtBQUNBLCtDQUErQyx3QkFBd0I7QUFDdkUsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0EseUJBQXlCLGdFQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2REFBWTtBQUNuQyxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0VBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBWTtBQUNoQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0EseURBQXlELGVBQWU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxVQUFVLHdCQUF3QixPQUFPO0FBQzVGO0FBQ0Esa0VBQWtFLFVBQVUsd0JBQXdCLE9BQU87QUFDM0c7QUFDQTtBQUNBLGtDQUFrQyxrRUFBaUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFvQjtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBLHNFQUFzRSwwREFBYTtBQUNuRjtBQUNBO0FBQ08sNkJBQTZCLHlEQUFZO0FBQ2hEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFlBQVksOEJBQThCO0FBQzFDLDZEQUE2RCxHQUFHLEdBQUcsUUFBUTtBQUMzRSw4REFBOEQsR0FBRyxHQUFHLFFBQVE7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSwwREFBYTtBQUNuRjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpRUFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3REFBZTtBQUM5QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsMERBQWE7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBWTtBQUNwQjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsTUFBTTtBQUNOLFFBQVEsOERBQWlCO0FBQ3pCO0FBQ0Esb0RBQW9ELEdBQUcsR0FBRyxPQUFPO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzlTQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndCO0FBQ1M7QUFDRjtBQUMvQjtBQUNBLG9EQUFvRCwwREFBVyxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9tYXJrZXRpemUvLi9zcmMvY3NzL21vYmlsZS10YWJsZXQuY3NzIiwid2VicGFjazovL21hcmtldGl6ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL21hcmtldGl6ZS8uL3NyYy9jc3MvbW9iaWxlLXRhYmxldC5jc3M/ZTM2ZCIsIndlYnBhY2s6Ly9tYXJrZXRpemUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tYXJrZXRpemUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21hcmtldGl6ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21hcmtldGl6ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hcmtldGl6ZS8uL3NyYy9kYXRhL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL21hcmtldGl6ZS8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vc3JjL2pzL2NhcnQuanMiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vc3JjL2pzL2RvbS1zdHJpbmdzLmpzIiwid2VicGFjazovL21hcmtldGl6ZS8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vc3JjL2pzL3NhbHZhdHRvcmUuanMiLCJ3ZWJwYWNrOi8vbWFya2V0aXplLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovL21hcmtldGl6ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYXJrZXRpemUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWFya2V0aXplL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXJrZXRpemUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXJrZXRpemUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXJrZXRpemUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2VcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIGkge1xcclxcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28gZW0ge1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2t0b3AtaW5mby1hcmVhLFxcclxcbi5tb2JpbGUtaW5mby1hcmVhIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2t0b3AtaW5mby1hcmVhIGRpdiB7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1pbmZvLWFyZWEgZGl2IHtcXHJcXG4gICAgbWFyZ2luOiAwIDE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1kcm9wZG93bi1kZXNrdG9wIHtcXHJcXG4gICAgd2lkdGg6ODAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMjMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWRyb3Bkb3duLW1vYmlsZSB7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWRyb3Bkb3duLWRlc2t0b3AgdWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IDFweCAjY2NjO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICByaWdodDogLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItZHJvcGRvd24tbW9iaWxlIHVsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAxcHggI2NjYztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgcmlnaHQ6IDYwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1kcm9wZG93bi1kZXNrdG9wIHVsIGxpIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItZHJvcGRvd24tZGVza3RvcCB1bCBsaTpob3ZlciB7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWRyb3Bkb3duLW1vYmlsZSB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDZweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2ZpeGVkLXRvcCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3BwaW5nLWJhc2tldC1kZXNrdG9wIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNzaG9wcGluZy1iYXNrZXQtZGVza3RvcCB1bCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggIzY2NjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogLTE1MHB4O1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3BwaW5nLWJhc2tldC1tb2JpbGUgdWwge1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAxcHggIzk5OTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNDUwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIHotaW5kZXg6IDIwMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG90YWwtaW4tY2FydCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDdweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1pbi13aWR0aDogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eS1jYXJ0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWltYWdlIHtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcnQtaXRlbXMtbW9iaWxlIGxpLmNhcnQtaXRlbSxcXHJcXG4jY2FydC1pdGVtcy1kZXNrdG9wIGxpLmNhcnQtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm9yZGVyLXRvcDogZG90dGVkIDFweCAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtLWRldGFpbHMge1xcclxcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtbW9yZS1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtbW9yZS1kZXRhaWxzIGkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcnQtaXRlbXMtbW9iaWxlIGxpLmNhcnQtaXRlbSBpbWcsXFxyXFxuI2NhcnQtaXRlbXMtZGVza3RvcCBsaS5jYXJ0LWl0ZW0gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9kdWN0LWNhdGVnb3JpZXMtaGVhZGluZyB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyLWRlc2t0b3Age1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjMDAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDIwcHggIGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhci1kZXNrdG9wIHNwYW4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXItZGVza3RvcCBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNwcm9kdWN0LWNhdGVnb3JpZXMtaGVhZGluZyBwIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yeS13cmFwcGVyIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMzgwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3J5LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4jY2F0ZWdvcnktbGlzdCB1bCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3J5LWxpc3QgbGkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yeS1saXN0IGEge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcHggMTBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNncmlkIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCAucHJvZHVjdC1pdGVtIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xcclxcbiAgICBtYXJnaW46IDEwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCAucHJvZHVjdC1pdGVtIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCAucHJvZHVjdC1pdGVtIGJ1dHRvbi5zaG9wLW5vdyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggN3B4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmRlZCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFycm93LXNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICByaWdodDogLTMwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWxpc3Qge1xcclxcbiAgICBib3JkZXItdG9wOiBkb3R0ZWQgMC41cHggI2NjYztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uaXRlbS1saXN0IHAge1xcclxcbiAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2UtYWRkLXRvLWNhcnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvLWNhcnQgeyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDVweDsgXFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucXR0eSB7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10by1jYXJ0OmhvdmVyIHsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7IFxcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1fbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2Uge1xcclxcbiAgICBjb2xvcjogIzAwMDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5xdWFudGl0eSB7XFxyXFxuICAgIGNvbG9yOiAjMDAwOyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tdG90YWwge1xcclxcbiAgICBjb2xvcjogIzAwMDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnZpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXIge1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpdGFsaWNpemU7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogI2FhYTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbiNwaG9uZS1udW1iZXIge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwgc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi51c2VmdWwtbGlua3Mge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNzcy1zcGFwcGVkLWFycm93LWFsbCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWluLXdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XFxyXFxuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNzcy1zcGFwcGVkLWFycm93IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogMjNweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xcclxcbiAgICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNzcy1zcGFwcGVkLWFycm93LWFsbDpiZWZvcmUsXFxyXFxuLmNzcy1zcGFwcGVkLWFycm93OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiA4MCU7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2FhYTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBhbnktaW5mbyB7XFxyXFxuICAgIHBhZGRpbmc6IDZweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6Izg4ODtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5jb21wYW55LWxvY2F0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBjb2xvcjogIzg4ODtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1jYXRlZ29yeSB7XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTYwcHgpe1xcclxcbiAgICAucm91bmRlZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTlweCl7XFxyXFxuICAgIC5uYW1lLW9mLXByb2R1Y3R7XFxyXFxuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xcclxcblxcdCNncmlkW2RhdGEtY29sdW1uc106OmJlZm9yZSB7XFxyXFxuXFx0XFx0Y29udGVudDogJzEgLmNvbHVtbi5zaXplLTFvZjEnO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcdCNncmlkW2RhdGEtY29sdW1uc106OmJlZm9yZSB7XFxyXFxuXFx0XFx0Y29udGVudDogJzIgLmNvbHVtbi5zaXplLTFvZjInO1xcclxcblxcdH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXHJcXG5cXHQjZ3JpZFtkYXRhLWNvbHVtbnNdOjpiZWZvcmUge1xcclxcblxcdFxcdGNvbnRlbnQ6ICczIC5jb2x1bW4uc2l6ZS0xb2YzJztcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5jb2x1bW4geyBmbG9hdDogbGVmdDsgfVxcclxcbi5zaXplLTFvZjEgeyB3aWR0aDogMTAwJTsgfVxcclxcbi5zaXplLTFvZjIgeyB3aWR0aDogNTAlOyB9XFxyXFxuLnNpemUtMW9mMyB7IHdpZHRoOiAzMy4zMzMlOyB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFEQUFxRDtJQUNyRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25C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QkFBNkI7SUFDN0IscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7Q0FDQztFQUNDLDhCQUE4QjtDQUMvQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyw4QkFBOEI7Q0FDL0I7QUFDRDtBQUNBO0NBQ0M7RUFDQyw4QkFBOEI7Q0FDL0I7QUFDRDs7QUFFQSxVQUFVLFdBQVcsRUFBRTtBQUN2QixhQUFhLFdBQVcsRUFBRTtBQUMxQixhQUFhLFVBQVUsRUFBRTtBQUN6QixhQUFhLGNBQWMsRUFBRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2VcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIGkge1xcclxcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28gZW0ge1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2t0b3AtaW5mby1hcmVhLFxcclxcbi5tb2JpbGUtaW5mby1hcmVhIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2t0b3AtaW5mby1hcmVhIGRpdiB7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1pbmZvLWFyZWEgZGl2IHtcXHJcXG4gICAgbWFyZ2luOiAwIDE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1kcm9wZG93bi1kZXNrdG9wIHtcXHJcXG4gICAgd2lkdGg6ODAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMjMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWRyb3Bkb3duLW1vYmlsZSB7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWRyb3Bkb3duLWRlc2t0b3AgdWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IDFweCAjY2NjO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICByaWdodDogLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItZHJvcGRvd24tbW9iaWxlIHVsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAxcHggI2NjYztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgcmlnaHQ6IDYwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1kcm9wZG93bi1kZXNrdG9wIHVsIGxpIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItZHJvcGRvd24tZGVza3RvcCB1bCBsaTpob3ZlciB7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWRyb3Bkb3duLW1vYmlsZSB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDZweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2ZpeGVkLXRvcCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3BwaW5nLWJhc2tldC1kZXNrdG9wIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNzaG9wcGluZy1iYXNrZXQtZGVza3RvcCB1bCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggIzY2NjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogLTE1MHB4O1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3BwaW5nLWJhc2tldC1tb2JpbGUgdWwge1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAxcHggIzk5OTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNDUwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIHotaW5kZXg6IDIwMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG90YWwtaW4tY2FydCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDdweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1pbi13aWR0aDogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eS1jYXJ0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWltYWdlIHtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcnQtaXRlbXMtbW9iaWxlIGxpLmNhcnQtaXRlbSxcXHJcXG4jY2FydC1pdGVtcy1kZXNrdG9wIGxpLmNhcnQtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm9yZGVyLXRvcDogZG90dGVkIDFweCAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtLWRldGFpbHMge1xcclxcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtbW9yZS1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtbW9yZS1kZXRhaWxzIGkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcnQtaXRlbXMtbW9iaWxlIGxpLmNhcnQtaXRlbSBpbWcsXFxyXFxuI2NhcnQtaXRlbXMtZGVza3RvcCBsaS5jYXJ0LWl0ZW0gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9kdWN0LWNhdGVnb3JpZXMtaGVhZGluZyB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyLWRlc2t0b3Age1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjMDAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDIwcHggIGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhci1kZXNrdG9wIHNwYW4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXItZGVza3RvcCBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNwcm9kdWN0LWNhdGVnb3JpZXMtaGVhZGluZyBwIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yeS13cmFwcGVyIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMzgwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3J5LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4jY2F0ZWdvcnktbGlzdCB1bCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3J5LWxpc3QgbGkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yeS1saXN0IGEge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcHggMTBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNncmlkIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCAucHJvZHVjdC1pdGVtIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xcclxcbiAgICBtYXJnaW46IDEwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCAucHJvZHVjdC1pdGVtIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCAucHJvZHVjdC1pdGVtIGJ1dHRvbi5zaG9wLW5vdyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggN3B4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmRlZCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFycm93LXNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICByaWdodDogLTMwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWxpc3Qge1xcclxcbiAgICBib3JkZXItdG9wOiBkb3R0ZWQgMC41cHggI2NjYztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uaXRlbS1saXN0IHAge1xcclxcbiAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2UtYWRkLXRvLWNhcnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvLWNhcnQgeyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDVweDsgXFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucXR0eSB7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10by1jYXJ0OmhvdmVyIHsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7IFxcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1fbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2Uge1xcclxcbiAgICBjb2xvcjogIzAwMDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5xdWFudGl0eSB7XFxyXFxuICAgIGNvbG9yOiAjMDAwOyBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tdG90YWwge1xcclxcbiAgICBjb2xvcjogIzAwMDsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnZpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXIge1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpdGFsaWNpemU7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogI2FhYTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbiNwaG9uZS1udW1iZXIge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwgc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi51c2VmdWwtbGlua3Mge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNzcy1zcGFwcGVkLWFycm93LWFsbCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWluLXdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XFxyXFxuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNzcy1zcGFwcGVkLWFycm93IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogMjNweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xcclxcbiAgICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNzcy1zcGFwcGVkLWFycm93LWFsbDpiZWZvcmUsXFxyXFxuLmNzcy1zcGFwcGVkLWFycm93OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiA4MCU7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2FhYTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBhbnktaW5mbyB7XFxyXFxuICAgIHBhZGRpbmc6IDZweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6Izg4ODtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5jb21wYW55LWxvY2F0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBjb2xvcjogIzg4ODtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1jYXRlZ29yeSB7XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTYwcHgpe1xcclxcbiAgICAucm91bmRlZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTlweCl7XFxyXFxuICAgIC5uYW1lLW9mLXByb2R1Y3R7XFxyXFxuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xcclxcblxcdCNncmlkW2RhdGEtY29sdW1uc106OmJlZm9yZSB7XFxyXFxuXFx0XFx0Y29udGVudDogJzEgLmNvbHVtbi5zaXplLTFvZjEnO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcdCNncmlkW2RhdGEtY29sdW1uc106OmJlZm9yZSB7XFxyXFxuXFx0XFx0Y29udGVudDogJzIgLmNvbHVtbi5zaXplLTFvZjInO1xcclxcblxcdH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXHJcXG5cXHQjZ3JpZFtkYXRhLWNvbHVtbnNdOjpiZWZvcmUge1xcclxcblxcdFxcdGNvbnRlbnQ6ICczIC5jb2x1bW4uc2l6ZS0xb2YzJztcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5jb2x1bW4geyBmbG9hdDogbGVmdDsgfVxcclxcbi5zaXplLTFvZjEgeyB3aWR0aDogMTAwJTsgfVxcclxcbi5zaXplLTFvZjIgeyB3aWR0aDogNTAlOyB9XFxyXFxuLnNpemUtMW9mMyB7IHdpZHRoOiAzMy4zMzMlOyB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhc2lkZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIG1haW4ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNmaXhlZC10b3Age1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCAjY2NjO1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMSU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb2JpbGUtbWVudS13cmFwcGVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbW9iaWxlLW1lbnUge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xcclxcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNtb2JpbGUtbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvZHVjdC1pdGVtLW1vYmlsZSB7XFxyXFxuICAgICAgICBtYXJnaW46IDZweCA1cHggMnB4IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvZHVjdC1pdGVtLW1vYmlsZSBhIHtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCAjY2NjO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDNweCA3cHg7XFxyXFxuICAgICAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21vYmlsZS10YWJsZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7TUFDRSxjQUFjO01BQ2QsaUJBQWlCO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxjQUFjO1FBQ2Qsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxnQ0FBZ0M7UUFDaEMsZUFBZTtRQUNmLFdBQVc7UUFDWCxNQUFNO1FBQ04sT0FBTztJQUNYOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLHdCQUF3QixHQUFHLGdCQUFnQjtRQUMzQyxxQkFBcUIsR0FBRyxZQUFZO0lBQ3hDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixnQ0FBZ0M7UUFDaEMsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYXNpZGUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjZml4ZWQtdG9wIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggI2NjYztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDElO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9iaWxlLW1lbnUtd3JhcHBlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI21vYmlsZS1tZW51IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cXHJcXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbW9iaWxlLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2R1Y3QtaXRlbS1tb2JpbGUge1xcclxcbiAgICAgICAgbWFyZ2luOiA2cHggNXB4IDJweCA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2R1Y3QtaXRlbS1tb2JpbGUgYSB7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggI2NjYztcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzcHggN3B4O1xcclxcbiAgICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9iaWxlLXRhYmxldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vYmlsZS10YWJsZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHByb2R1Y3RzID0gXHJcbltcclxuICAgIHtcclxuICAgICAgICBpZDogXCJ5dXk2dDc2NTRcIixcclxuICAgICAgICBuYW1lOiBcIlN3ZWV0IEJhbmFuYVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJlc3QgaW4gY2xhc3MgY29va2luZyBvaWwgZm9yIHRhc3R5IHNvdXAgYW5kIHN0ZXdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGcnVpdHNcIixcclxuICAgICAgICBjYXRlZ29yeV9pZDogXCJ1dXk4NzY0NVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiU3dlZXQgQmFuYW5hIDFrZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMTUwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiU3dlZXQgQmFuYW5hIDJrZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMjUwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiU3dlZXQgQmFuYW5hIDNrZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMzUwXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhcmdlSW1hZ2U6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvcTc4dzZDZEgvYmFuYW5hLmpwZ1wiLFxyXG4gICAgICAgIGF2YWlsYWJpbGl0eTogXCJJbiBzdG9ja1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcInBvdXk2dDc2NTRcIixcclxuICAgICAgICBuYW1lOiBcIlVucmlwZWQgUGxhbnRhaW5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBzYW1lIHVucmlwZWQgcGxhbnRhaW4gdGhhdCBBZGFtIGFuZCBldmUgYXRlIGluIHRoZSBnYXJkZW5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJWZWdldGFibGVcIixcclxuICAgICAgICBzdGFyczogXCI1XCIsXHJcbiAgICAgICAgdG90YWxfc29sZDogXCIyM1wiLFxyXG4gICAgICAgIGNhdGVnb3J5X2lkOiBcInV1eTY1MjM1XCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJVbnJpcGVkIFBsYW50YWluIDFrZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiNDUwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiVW5yaXBlZCBQbGFudGFpbiAya2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjg1MFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYXJnZUltYWdlOiBcImh0dHBzOi8vaS5wb3N0aW1nLmNjL3dCSmY1R0xQL3BsYW50YWluLmpwZ1wiLFxyXG4gICAgICAgIGF2YWlsYWJpbGl0eTogXCJJbiBzdG9ja1wiXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJ5dXlpcDZ0NzY1NFwiLFxyXG4gICAgICAgIG5hbWU6IFwiUGFsbSBPaWxcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCZXN0IGluIGNsYXNzIGNvb2tpbmcgb2lsIGZvciB0YXN0eSBzb3VwIGFuZCBzdGV3XCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiT2lsIGFuZCBjb25kaW1lbnRzXCIsXHJcbiAgICAgICAgc3RhcnM6IFwiNFwiLFxyXG4gICAgICAgIHRvdGFsX3NvbGQ6IFwiMTIzXCIsXHJcbiAgICAgICAgY2F0ZWdvcnlfaWQ6IFwidXV5Z2g2NTIzNVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiUGFsbSBPaWwgNUxpdGVyc1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMTU1MFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIlBhbG0gT2lsIDEwTGl0ZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIyNTUwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiUGFsbSBPaWwgMTVMaXRlcnNcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjM1NTBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjRcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJQYWxtIE9pbCAyMExpdGVyc1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiNDU1MFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYXJnZUltYWdlOiBcImh0dHBzOi8vaS5wb3N0aW1nLmNjL3NENk4zUzNuL2NvbmRlbnNlZC1wYWxtLW9pbC5qcGdcIixcclxuICAgICAgICBhdmFpbGFiaWxpdHk6IFwiSW4gc3RvY2tcIlxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwieXV5ZXc2dG9wNTRcIixcclxuICAgICAgICBuYW1lOiBcIk9uaW9uc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlN3ZWV0IGFyb21hIG9uaW9ucyBmb3IgdGhlIGJlc3QgY29va2luZyBmbGF2b3VyXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiVmVnZXRhYmxlXCIsXHJcbiAgICAgICAgc3RhcnM6IFwiNVwiLFxyXG4gICAgICAgIHRvdGFsX3NvbGQ6IFwiMjNcIixcclxuICAgICAgICBjYXRlZ29yeV9pZDogXCJ1dXk2NTIzNVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiT25pb25zIDFQb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMjUwXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhcmdlSW1hZ2U6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvNzZrQktuTkwvb25pb25zLmpwZ1wiLFxyXG4gICAgICAgIGF2YWlsYWJpbGl0eTogXCJJbiBzdG9ja1wiXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJldzZ0NzZqNTRcIixcclxuICAgICAgICBuYW1lOiBcIkJlZWZcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTcGVjaWFsIGJlZWYgZnJvbSB0aGUgbm9ybWFkaWMgRnVsYW5pIGhlcmRtYW5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJNZWF0XCIsXHJcbiAgICAgICAgc3RhcnM6IFwiNVwiLFxyXG4gICAgICAgIHRvdGFsX3NvbGQ6IFwiMjNcIixcclxuICAgICAgICBjYXRlZ29yeV9pZDogXCJ1dXlsbzY1MjM1XCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJCZWVmIDEwa2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjE1MFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIkJlZWYgMjBrZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMjUwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiQmVlZiAzMGtnXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIzNTBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjRcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJCZWVmIDQwa2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjQ1MFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYXJnZUltYWdlOiBcImh0dHBzOi8vaS5wb3N0aW1nLmNjL0M1S3MyUG53L2JlZWYuanBnXCIsXHJcbiAgICAgICAgYXZhaWxhYmlsaXR5OiBcIkluIHN0b2NrXCJcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcInV5ZXdpdTZ0NzZqNTRcIixcclxuICAgICAgICBuYW1lOiBcIk9rcmFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTd2VldCBva3JhIGZvciBhIGRlbGljaW91cyAnZHJhdycgc291cFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlZlZ2V0YWJsZVwiLFxyXG4gICAgICAgIHN0YXJzOiBcIjVcIixcclxuICAgICAgICB0b3RhbF9zb2xkOiBcIjIzXCIsXHJcbiAgICAgICAgY2F0ZWdvcnlfaWQ6IFwidXV5NjUyMzVcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIkZyZXNoIG9rcmEgMC41a2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjI1MFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIkZyZXNoIG9rcmEgMS41a2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjM1MFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiM1wiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIkZyZXNoIG9rcmEgMi41a2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjQ1MFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiNFwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIkZyZXNoIG9rcmEgMy41a2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjU1MFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYXJnZUltYWdlOiBcImh0dHBzOi8vaS5wb3N0aW1nLmNjLzNOTG5KNVF5L29rcmEuanBnXCIsXHJcbiAgICAgICAgYXZhaWxhYmlsaXR5OiBcIkluIHN0b2NrXCJcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcInV5ZWxvaWo2ajU0XCIsXHJcbiAgICAgICAgbmFtZTogXCJHaW5nZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHaW5nZXIgdXAgeW91ciBsaWZlIHdpdGggZmluZXN0IGdpbmdlciBoYXZlc3RlZCBvbiBkZW1hbmRcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJWZWdldGFibGVcIixcclxuICAgICAgICBzdGFyczogXCI1XCIsXHJcbiAgICAgICAgdG90YWxfc29sZDogXCIyM1wiLFxyXG4gICAgICAgIGNhdGVnb3J5X2lkOiBcInV1eTY1MjM1XCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJGcmVzaCBva3JhIDAuNWtnXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCI1NTBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjJcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJGcmVzaCBva3JhIDEuNWtnXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIxMDAwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiRnJlc2ggb2tyYSAyLjVrZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMTU1MFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiM1wiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIkZyZXNoIG9rcmEgMy41a2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjI1NTBcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFyZ2VJbWFnZTogXCJodHRwczovL2kucG9zdGltZy5jYy81MkRLQ1ZZTC9naW5nZXIuanBnXCIsXHJcbiAgICAgICAgYXZhaWxhYmlsaXR5OiBcIkluIHN0b2NrXCJcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcInUxMDBsb2lra2o1NFwiLFxyXG4gICAgICAgIG5hbWU6IFwiQ3VycnkgUG93ZGVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycnkgUG93ZGVyIGZ1aXQgdGhlZnJzaGVzdCBicnJlZFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlNwaWNlc1wiLFxyXG4gICAgICAgIHN0YXJzOiBcIjVcIixcclxuICAgICAgICB0b3RhbF9zb2xkOiBcIjIzXCIsXHJcbiAgICAgICAgY2F0ZWdvcnlfaWQ6IFwidXV5Nm9qNTIzNVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiQ3VycnkgUG93ZGVyIDAuNXBvdW5kc1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiNTUwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiQ3VycnkgUG93ZGVyIDEuNXBvdW5kc1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMTAwMFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiM1wiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIkN1cnJ5IFBvd2RlciAyLjVwb3VuZHNcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjI1NTBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjRcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJDdXJyeSBQb3dkZXIgMy41cG91bmRzXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIzNTUwXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhcmdlSW1hZ2U6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvUWRGbkN0dGovY3VycnktcG93ZGVyLmpwZ1wiLFxyXG4gICAgICAgIGF2YWlsYWJpbGl0eTogXCJJbiBzdG9ja1wiXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJ1eWVsb2RlcjZqNTRcIixcclxuICAgICAgICBuYW1lOiBcIkpvbGxvZiBSaWNlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGVsaWNpb3VzIGpvbGxvZiByaWNlIHByZXBhcmVkIGJ5IHRoZSBiZXN0IGhhbmRzXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiQ29va2VkIEZvb2RcIixcclxuICAgICAgICBzdGFyczogXCI1XCIsXHJcbiAgICAgICAgdG90YWxfc29sZDogXCIyM1wiLFxyXG4gICAgICAgIGNhdGVnb3J5X2lkOiBcImNvb2tlZDUyMzVcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIkpvbGxvZiByaWNlICAxIHBsYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCI1MDBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjJcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJKb2xsb2YgcmljZSAgMiBwbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMTAwMFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiM1wiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIkpvbGxvZiByaWNlIDMgcGxhdGVcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjE1MDBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjRcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJKb2xsb2YgcmljZSA0IHBsYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIyMDAwXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhcmdlSW1hZ2U6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvUWRGbkN0dGovY3VycnktcG93ZGVyLmpwZ1wiLFxyXG4gICAgICAgIGF2YWlsYWJpbGl0eTogXCJJbiBzdG9ja1wiXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJxcXllbG9pajY1NzFcIixcclxuICAgICAgICBuYW1lOiBcIkJvbGVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCb2xsZSBmb3IgeW91IGFuZCB5b3VyIGZyaW5lZHNcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJSb2FzdGVkIGFuZCBiYXJiZWN1ZVwiLFxyXG4gICAgICAgIHN0YXJzOiBcIjVcIixcclxuICAgICAgICB0b3RhbF9zb2xkOiBcIjIzXCIsXHJcbiAgICAgICAgY2F0ZWdvcnlfaWQ6IFwicm9hc3RlZDY1MjM1XCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJCb2xlIDFrZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiOTAwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiQm9sZSAya2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjExMDBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjNcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJCb2xlIDNrZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMTMwMFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiNFwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIkJvbGUgNGtnXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIxNTAwXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhcmdlSW1hZ2U6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvUWRGbkN0dGovY3VycnktcG93ZGVyLmpwZ1wiLFxyXG4gICAgICAgIGF2YWlsYWJpbGl0eTogXCJJbiBzdG9ja1wiXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJxcXllbG9pajY1MDAxXCIsXHJcbiAgICAgICAgbmFtZTogXCJNaWxvIHJlZmlsbCBwYWNrXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWlsbG8gcmVmaWxsIHBhY2ssIHRvIGV4cGlyZSBieSBBdWd1c3QgMzAsIDIwMjRcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJCZXZlcmFnZXNcIixcclxuICAgICAgICBzdGFyczogXCI1XCIsXHJcbiAgICAgICAgdG90YWxfc29sZDogXCIyM1wiLFxyXG4gICAgICAgIGNhdGVnb3J5X2lkOiBcInJvYXNiZXZlcmFnZXMzNVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiTWlsbyByZWZpbGwgcGFjayAxa2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjE1MDBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjJcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJNaWxvIHJlZmlsbCBwYWNrIDEuNWtnXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIyMDAwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiTWlsbyByZWZpbGwgcGFjayAya2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjMwMDBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjRcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJNaWxvIHJlZmlsbCBwYWNrIDFrZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiNDUwMFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYXJnZUltYWdlOiBcImh0dHBzOi8vaS5wb3N0aW1nLmNjL1FkRm5DdHRqL2N1cnJ5LXBvd2Rlci5qcGdcIixcclxuICAgICAgICBhdmFpbGFiaWxpdHk6IFwiSW4gc3RvY2tcIlxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwicTlxeXBwb2lqNjU3MVwiLFxyXG4gICAgICAgIG5hbWU6IFwiU3RldyBwYWNrZXRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNaWxsbyByZWZpbGwgcGFjaywgdG8gZXhwaXJlIGJ5IEF1Z3VzdCAzMCwgMjAyNFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkNvbGxlY3Rpb25zXCIsXHJcbiAgICAgICAgc3RhcnM6IFwiNVwiLFxyXG4gICAgICAgIHRvdGFsX3NvbGQ6IFwiMjNcIixcclxuICAgICAgICBjYXRlZ29yeV9pZDogXCJyb2FzY29sbGVjdGlvbjM1XCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJTdGV3IHBhY2tldCBmb3IgY29va2luZyBvbmx5IG9uY2VcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjE1MFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIlN0ZXcgcGFja2V0IGZvciBjb29raW5nIHR3aWNlXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIxNTBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGl0ZW1fbnVtYmVyOiBcIjNcIixcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJTdGV3IHBhY2tldCBmb3IgY29va2luZyB0aHJpY2VcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjE1MFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiNFwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIlN0ZXcgcGFja2V0IGZvciBjb29raW5nIGZvdXIgdGltZXNcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjE1MFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYXJnZUltYWdlOiBcImh0dHBzOi8vaS5wb3N0aW1nLmNjL1FkRm5DdHRqL2dpbmdlci5qcGdcIixcclxuICAgICAgICBhdmFpbGFiaWxpdHk6IFwiSW4gc3RvY2tcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJxcXlwcG9pajY1aXVcIixcclxuICAgICAgICBuYW1lOiBcIlNhZGRpblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJlc3QgcWF1bGl0eSBzYWRpblwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlByb2NjZXNzZWQgZm9vZFwiLFxyXG4gICAgICAgIHN0YXJzOiBcIjVcIixcclxuICAgICAgICB0b3RhbF9zb2xkOiBcIjIzXCIsXHJcbiAgICAgICAgY2F0ZWdvcnlfaWQ6IFwicm9hc3Byb2NjZXMzNVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiU2FkaW4gMC41a2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjE1MFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIlNhZGluIDFrZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMjUwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtX251bWJlcjogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtX25hbWU6IFwiU2FkaW4gMS41a2dcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjM1MFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbV9udW1iZXI6IFwiNFwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9uYW1lOiBcIlNhZGluIDJrZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiNDUwXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhcmdlSW1hZ2U6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvUWRGbkN0dGovZ2luZ2VyLmpwZ1wiLFxyXG4gICAgICAgIGF2YWlsYWJpbGl0eTogXCJJbiBzdG9ja1wiXHJcblxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0cyIsImltcG9ydCB7IFxyXG4gICAgdG9nZ2xlVXNlckluZm8sIFxyXG4gICAgdG9nZ2xlU2hvcHBpbmdDYXJ0cyxcclxuICAgIGRpc3BsYXlDYXRlZ29yaWVzLFxyXG4gICAgZGlzcGxheUFsbFByb2R1Y3RzLFxyXG4gICAgZGlzcGxheVByb2R1Y3RzT2ZDYXRlZ29yeSxcclxuICAgIGluZGljYXRlQ3VycmVudENhdGVnb3J5LFxyXG4gICAgYWRqdXN0V2lkdGhPZkVsZW1lbnRzLFxyXG4gICAgY3JlYXRlQWRkVG9DYXJ0QnRuLFxyXG4gICAgY3JlYXRlUGx1c01pbnVzQnRuLFxyXG4gICAgc3luY1Nlc3Npb25EYXRhVG9Eb20sXHJcbiAgICBwbHVzSXRlbSxcclxuICAgIG1pbnVzSXRlbSxcclxuICAgIGl0ZW1zSW5DYXJ0QXBwLFxyXG5cclxufSBmcm9tICcuL3V0aWxzLmpzJztcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgc2hvcHBpbmdDYXJ0SWNvbnMsIFxyXG4gICAgdXNlckljb25zLFxyXG4gICAgZ3JpZCxcclxuXHJcbn0gZnJvbSAnLi9kb20uanMnO1xyXG5cclxuaW1wb3J0ICBzYWx2YXR0b3JlIGZyb20gJy4vc2FsdmF0dG9yZS5qcyc7XHJcblxyXG5jb25zdCBBcHAgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BsYXkgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtcclxuICAgICAgICAgICAgJ2NoZXZyb24tZG93bicsIFxyXG4gICAgICAgICAgICAnY2hldnJvbi11cCcsXHJcbiAgICAgICAgICAgICdjaGV2cm9uLWRvd24tbW9iaWxlJywgXHJcbiAgICAgICAgICAgICdjaGV2cm9uLXVwLW1vYmlsZScsIFxyXG4gICAgICAgICAgICAndXNlci1kcm9wZG93bi1kZXNrdG9wJyxcclxuICAgICAgICAgICAgJ3VzZXItZHJvcGRvd24tbW9iaWxlJ1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHVzZXJJY29ucy5mb3JFYWNoKCBcclxuICAgICAgICAgICAgaWNvbiA9PiBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVVc2VySW5mbyhlbGVtZW50cykgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3BwaW5nQmFza2V0cyA9IFtcclxuICAgICAgICAgICAgJ3Nob3BwaW5nLWJhc2tldC1kZXNrdG9wJyxcclxuICAgICAgICAgICAgJ3Nob3BwaW5nLWJhc2tldC1tb2JpbGUnXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBzaG9wcGluZ0NhcnRJY29ucy5mb3JFYWNoKCBcclxuICAgICAgICAgICAgaWNvbiA9PiBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVTaG9wcGluZ0NhcnRzKHNob3BwaW5nQmFza2V0cykgKVxyXG4gICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkanVzdFdpZHRoT2ZFbGVtZW50cyhcIiNtb2JpbGUtbWVudVwiKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhbGxQcm9kdWN0ID0gU3RyaW5nKHdpbmRvdy5sb2NhdGlvbi5oYXNoKS5yZXBsYWNlKC8jLywgJycpLnJlcGxhY2UoL18vZ2ksICcgJylcclxuICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5oYXNoIHx8IGFsbFByb2R1Y3QudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gXCJhbGwgcHJvZHVjdHNcIikge1xyXG4gICAgICAgICAgICBkaXNwbGF5QWxsUHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgc2FsdmF0dG9yZS5yZXNjYW5NZWRpYVF1ZXJpZXMoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgICAgICAgIGluZGljYXRlQ3VycmVudENhdGVnb3J5KFwiI2NhdGVnb3J5LWxpc3RcIiwgY3VycmVudEhhc2gpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXNDYXRlZ29yeSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoLyMvLCAnJykucmVwbGFjZSgvXy9naSwgJyAnKTtcclxuICAgICAgICAgICAgZGlzcGxheVByb2R1Y3RzT2ZDYXRlZ29yeSh0aGlzQ2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICBzYWx2YXR0b3JlLnJlc2Nhbk1lZGlhUXVlcmllcygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICAgICAgaW5kaWNhdGVDdXJyZW50Q2F0ZWdvcnkoXCIjY2F0ZWdvcnktbGlzdFwiLCBjdXJyZW50SGFzaCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGlzQ2F0ZWdvcnkgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC8jLywgJycpLnJlcGxhY2UoL18vZ2ksICcgJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5oYXNoIHx8IFN0cmluZyh0aGlzQ2F0ZWdvcnkpLnRyaW0oKS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBcImFsbCBwcm9kdWN0c1wiKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlBbGxQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgc2FsdmF0dG9yZS5yZXNjYW5NZWRpYVF1ZXJpZXMoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW5kaWNhdGVDdXJyZW50Q2F0ZWdvcnkoXCIjY2F0ZWdvcnktbGlzdFwiLCBjdXJyZW50SGFzaCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9kdWN0c09mQ2F0ZWdvcnkodGhpc0NhdGVnb3J5KTtcclxuICAgICAgICAgICAgICAgIHNhbHZhdHRvcmUucmVzY2FuTWVkaWFRdWVyaWVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5kaWNhdGVDdXJyZW50Q2F0ZWdvcnkoXCIjY2F0ZWdvcnktbGlzdFwiLCBjdXJyZW50SGFzaCk7ICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNob3BOb3dCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3Atbm93Jyk7XHJcbiAgICAgICAgICAgIHNob3BOb3dCdXR0b25zLmZvckVhY2goIGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY3JlYXRlQWRkVG9DYXJ0QnRuKGUpKSApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXJrZXR1emVfY2FydCcpKSB8fCBbXTtcclxuICAgICAgICAgICAgc3luY1Nlc3Npb25EYXRhVG9Eb20oc2Vzc2lvbkRhdGEpOyBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnRUb3RhbENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG90YWwtaW4tY2FydCcpO1xyXG4gICAgICAgICAgICBjYXJ0VG90YWxDb250YWluZXJzLmZvckVhY2goIGNvbnRhaW5lciA9PiBjb250YWluZXIudGV4dENvbnRlbnQgPSBpdGVtc0luQ2FydEFwcCgpICk7XHJcblxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvcE5vd0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvcC1ub3cnKTtcclxuICAgICAgICBzaG9wTm93QnV0dG9ucy5mb3JFYWNoKCBidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNyZWF0ZUFkZFRvQ2FydEJ0bihlKSkgKTtcclxuXHJcbiAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtdG8tY2FydCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQbHVzTWludXNCdG4oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbHVzJykpIHtcclxuICAgICAgICAgICAgICAgIHBsdXNJdGVtKGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW51cycpKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51c0l0ZW0oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlc3Npb25EYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFya2V0dXplX2NhcnQnKSkgfHwgW107XHJcbiAgICAgICAgc3luY1Nlc3Npb25EYXRhVG9Eb20oc2Vzc2lvbkRhdGEpOyBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpc3BsYXksXHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiXHJcbmV4cG9ydCAgY29uc3Qgc2hvcHBpbmdEYXRhID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFya2V0dXplX2NhcnQnKSkgfHwgW107XHJcblxyXG5leHBvcnQgIGNvbnN0IGVtcHR5QmFza2V0SW5mbyA9IGBcclxuICAgPGRpdiBjbGFzcz1cImVtcHR5LWNhcnRcIj5cclxuICAgICAgU0hPUFBJTkcgQkFTS0VUIElTIEVNUFRZXHJcbiAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlSXRlbUh0bWwgPSAoaXRlbSkgPT4ge1xyXG4gICByZXR1cm4gYFxyXG4gICA8ZGl2IGNsYXNzPVwiaXRlbS1pbWFnZVwiPlxyXG4gICAgICA8aW1nIHNyYz1cIiR7aXRlbS5pbWFnZX1cIiBhbHQ9XCJwcmQtaW1hZ2VcIj5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tZGV0YWlsc1wiPlxyXG4gICAgICA8cCBjbGFzcz1cImNhcnQtcHJvZHVjdC1uYW1lXCI+XHJcbiAgICAgICAgIDxpPiAke2l0ZW0ubmFtZX0gPC9pPlxyXG4gICAgICA8L3A+IFxyXG5cclxuICAgICAgPHAgaWQ9XCIke2l0ZW0uY2FydElkfVwiIGNsYXNzPVwiY2FydC1tb3JlLWRldGFpbHMgJHtpdGVtLnByb2R1Y3RJZH0tJHtpdGVtLm51bWJlcn1cIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwicHJpY2VcIj4gJHtpdGVtLnByaWNlfSA8L2k+XHJcbiAgICAgICAgICA8aT4mdGltZXM7IDwvaT4gXHJcbiAgICAgICAgICA8aSBjbGFzcz1cInF1YW50aXR5XCI+ICR7aXRlbS5xdWFudGl0eX0gPC9pPiBcclxuICAgICAgICAgIDxpPj0gPC9pPiBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiaXRlbS10b3RhbFwiPiAke2l0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5fSA8L2k+XHJcbiAgICAgIDwvcD5cclxuICAgPC9kaXY+XHJcbiBgO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbnVtYmVyT2ZJdGVtcyA9ICgpID0+IHNob3BwaW5nRGF0YSgpPy5yZWR1Y2UoICh0b3RhbCwgY3VycmVudCkgPT4ge1xyXG4gICB0b3RhbCArPSBjdXJyZW50LnF1YW50aXR5O1xyXG4gICByZXR1cm4gdG90YWw7XHJcbn0sIDApIHx8IDA7XHJcblxyXG5leHBvcnQgY29uc3QgY2FydFRvdGFsID0gKCkgPT4gc2hvcHBpbmdEYXRhKCk/LnJlZHVjZSggKHRvdGFsLCBjdXJyZW50KSA9PiB7XHJcbiAgIHRvdGFsICs9IGN1cnJlbnQucXVhbnRpdHkgKiBjdXJyZW50LnByaWNlO1xyXG4gICByZXR1cm4gdG90YWw7XHJcbn0sIDApIHx8IDA7XHJcblxyXG5leHBvcnQgY29uc3QgYmFza2V0U3ViVG90YWwgPSAoKSA9PiB7XHJcbiAgIHJldHVybiBgXHJcbiAgICAgIDxsaSBpZD1cImJhc2tldC1zdWJ0b3RhbFwiIGNsYXNzPVwiY2FydC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpPiBDYXJ0IFN1YnRvdGFsOlxyXG4gICAgICAgICAgICAgICA8c3Ryb25nIGlkPVwic3VidG90YWwtYW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICR7Y2FydFRvdGFsKCl9XHJcbiAgICAgICAgICAgICAgIDwvc3Ryb25nPiBcclxuICAgICAgICAgICAgPC9pPlxyXG4gICAgICA8L2xpPlxyXG4gICBgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb1Nlc3Npb24gPSAoaXRlbSkgPT4ge1xyXG5cclxuICAgY29uc3Qgc2Vzc2lvbkRhdGEgPSAgc2hvcHBpbmdEYXRhKCk7XHJcbiAgIHNlc3Npb25EYXRhLnB1c2goaXRlbSk7XHJcblxyXG4gICBjb25zdCBlbXB0eUJhc2tldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW1wdHktY2FydCcpO1xyXG4gICBpZiAoZW1wdHlCYXNrZXRzKSB7XHJcbiAgICAgIGVtcHR5QmFza2V0cy5mb3JFYWNoKCBlbXB0eUJhc2tldCA9PiBlbXB0eUJhc2tldC5yZW1vdmUoKSApO1xyXG4gICB9XHJcblxyXG4gICBjb25zdCBpbmNyZWFzZVF0dHlJbkNhcnQgPSAobnVtYmVyID0gMSkgPT4ge1xyXG4gICAgICBjb25zdCBxdWFudGl0eUluQ2FydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG90YWwtaW4tY2FydCcpO1xyXG4gICAgICBxdWFudGl0eUluQ2FydHMuZm9yRWFjaCggY2FydCA9PiBjYXJ0LnRleHRDb250ZW50ID0gTnVtYmVyKGNhcnQudGV4dENvbnRlbnQpICArIG51bWJlciApO1xyXG4gICB9XHJcblxyXG4gICBjb25zdCBzaG9wcGluZ0Jhc2tldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2FydC1pdGVtcy1tb2JpbGUsICNjYXJ0LWl0ZW1zLWRlc2t0b3AnKTtcclxuICAgc2hvcHBpbmdCYXNrZXRzLmZvckVhY2goIGJhc2tldCA9PiB7XHJcblxyXG4gICAgICBjb25zdCBiYXNrZXRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgYmFza2V0SXRlbS5pZCA9IGl0ZW0uY2FydElkO1xyXG4gICAgICBiYXNrZXRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcnQtaXRlbScpO1xyXG4gICAgICBiYXNrZXRJdGVtLmlubmVySFRNTCA9IGNyZWF0ZUl0ZW1IdG1sKGl0ZW0pO1xyXG5cclxuICAgICAgYmFza2V0LmFwcGVuZENoaWxkKGJhc2tldEl0ZW0pO1xyXG4gICB9KTtcclxuXHJcbiAgIGluY3JlYXNlUXR0eUluQ2FydCgpXHJcbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYXJrZXR1emVfY2FydCcsIEpTT04uc3RyaW5naWZ5KHNlc3Npb25EYXRhKSlcclxuIH1cclxuXHJcbiBleHBvcnQgY29uc3QgYWRkVG9TaG9wcGluZ0Jhc2NrZXQgPSAoaXRlbSkgPT4ge1xyXG4gICBjb25zdCBlbXB0eUJhc2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbXB0eS1jYXJ0Jyk7XHJcbiAgIGlmIChlbXB0eUJhc2tldCkge1xyXG4gICAgICBlbXB0eUJhc2tldC5mb3JFYWNoKCBpdGVtID0+IGl0ZW0ucmVtb3ZlKCkgKTtcclxuICAgfVxyXG5cclxuICAgY29uc3QgYmFza2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXJ0LWl0ZW1zLW1vYmlsZSwgI2NhcnQtaXRlbXMtZGVza3RvcCcpOyBcclxuICAgYmFza2V0cy5mb3JFYWNoKCBiYXNrZXQgPT4ge1xyXG4gICAgICBjb25zdCBiYXNrZXRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgYmFza2V0SXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJ0LWl0ZW0nKTtcclxuICAgICAgYmFza2V0SXRlbS5pbm5lckhUTUwgPSBjcmVhdGVJdGVtSHRtbChpdGVtKTtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1Jc0FscmVhZHlJbkJhc2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2l0ZW0ucHJvZHVjdElkfS0ke2l0ZW0ubnVtYmVyfWApO1xyXG4gICAgICBpZiAoIWl0ZW1Jc0FscmVhZHlJbkJhc2tldCkge1xyXG4gICAgICAgICBiYXNrZXQuYXBwZW5kQ2hpbGQoYmFza2V0SXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgIH0pO1xyXG5cclxuIH1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVGcm9tU2Vzc2lvbiA9IChjYXJ0SWQpID0+IHtcclxuICAgY29uc3QgYWZ0ZXJEZWxldGUgPSBzaG9wcGluZ0RhdGEoKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhcnRJZCAhPT0gY2FydElkKTtcclxuICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21hcmtldHV6ZV9jYXJ0JywgSlNPTi5zdHJpbmdpZnkoYWZ0ZXJEZWxldGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlYXNlSXRlbSA9IChpZCwgbnVtYmVyKSA9PiB7XHJcbiAgIGNvbnN0IGl0ZW1zSW5DYXJ0ID0gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21hcmtldHV6ZV9jYXJ0JykpO1xyXG4gICBpdGVtc0luQ2FydC5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5wcm9kdWN0SWQgPT09IGlkICYmIE51bWJlcihpdGVtLm51bWJlcikgPT09IG51bWJlciApWzBdLnF1YW50aXR5ICs9IDE7XHJcbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYXJrZXR1emVfY2FydCcsIEpTT04uc3RyaW5naWZ5KGl0ZW1zSW5DYXJ0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyZWFzZUl0ZW0gPSAoaWQsIG51bWJlcikgPT4ge1xyXG4gICBjb25zdCBpdGVtc0luQ2FydCA9ICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXJrZXR1emVfY2FydCcpKTtcclxuICAgaXRlbXNJbkNhcnQuZmlsdGVyKCBpdGVtID0+IGl0ZW0ucHJvZHVjdElkID09PSBpZCAmJiBOdW1iZXIoaXRlbS5udW1iZXIpID09PSBudW1iZXIgKVswXS5xdWFudGl0eSAtPSAxO1xyXG4gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWFya2V0dXplX2NhcnQnLCBKU09OLnN0cmluZ2lmeShpdGVtc0luQ2FydCkpO1xyXG59XHJcblxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IGxpbmtUb0FsbENhdGVnb3JpZXMgPSAobnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGxpPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjQWxsX3Byb2R1Y3RzXCI+IFxyXG4gICAgICAgICAgICA8aT4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJvdW5kZWRcIj4gXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmkgYmktaG91c2UtZG9vci1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk02LjUgMTQuNXYtMy41MDVjMC0uMjQ1LjI1LS40OTUuNS0uNDk1aDJjLjI1IDAgXHJcbiAgICAgICAgICAgICAgICAuNS4yNS41LjV2My41YS41LjUgMCAwIDAgLjUuNWg0YS41LjUgMCAwIDAgXHJcbiAgICAgICAgICAgICAgICAuNS0uNXYtN2EuNS41IDAgMCAwLS4xNDYtLjM1NEwxMyA1Ljc5M1YyLjVhLjUuNSBcclxuICAgICAgICAgICAgICAgIDAgMCAwLS41LS41aC0xYS41LjUgMCAwIDAtLjUuNXYxLjI5M0w4LjM1NCAxLjE0NmEuNS41IFxyXG4gICAgICAgICAgICAgICAgMCAwIDAtLjcwOCAwbC02IDZBLjUuNSAwIDAgMCAxLjUgNy41djdhLjUuNSAwIDAgMCBcclxuICAgICAgICAgICAgICAgIC41LjVoNGEuNS41IDAgMCAwIC41LS41elwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZS1vZi1wcm9kdWN0XCI+QWxsIFByb2R1Y3RzPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNzcy1zcGFwcGVkLWFycm93LWFsbFwiPiR7bnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1cnJlbnQtY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvc3Bhbj4gXHJcbiAgICAgICAgPC9hPiBcclxuICAgIDwvbGk+XHJcbiAgICBgXHJcbn0gICAgXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2F0ZWdvcnlMaW5rcyA9IChwcm9kdWN0cywgdmFsdWUpID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8bGk+XHJcbiAgICAgICAgPGEgaHJlZj1cIiMke3ZhbHVlLnJlcGxhY2UoLyAvZ2ksICdfJyl9XCI+XHJcbiAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyb3VuZGVkXCI+ICR7dmFsdWVbMF19IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZS1vZi1wcm9kdWN0XCI+JHt2YWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjc3Mtc3BhcHBlZC1hcnJvd1wiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9kdWN0cy5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5jYXRlZ29yeSA9PT0gdmFsdWUpLmxlbmd0aH0gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1cnJlbnQtY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgLlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgPC9saT5cclxuICAgIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rVG9BbGxDYXRlZ29yaWVzTW9iaWxlID0gKG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIGAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI0FsbF9wcm9kdWN0c1wiPiBcclxuICAgICAgICAgICAgICAgIDxlbT4gQWxsIHByb2R1Y3RzIDwvZW0+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+JHtudW1iZXJ9PC9zcGFuPiBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENhdGVnb3J5TGlua3NNb2JpbGUgPSAocHJvZHVjdHMsIHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaXRlbS1tb2JpbGVcIj5cclxuICAgICAgICA8YSBocmVmPVwiIyR7dmFsdWUucmVwbGFjZSgvIC9naSwgJ18nKX1cIj4gXHJcbiAgICAgICAgICAgIDxlbT4gJHt2YWx1ZX0gPC9lbT4gXHJcbiAgICAgICAgICAgIDxzcGFuPiBcclxuICAgICAgICAgICAgICAgICR7cHJvZHVjdHMuZmlsdGVyKCBpdGVtID0+IGl0ZW0uY2F0ZWdvcnkgPT09IHZhbHVlKS5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvc3Bhbj4gXHJcbiAgICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFwSm9pblByb2R1Y3RzID0gKHByb2R1Y3RzKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gYFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwcm9kdWN0LmxhcmdlSW1hZ2V9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDxoMj48aT4ke3Byb2R1Y3QubmFtZX08L2k+PC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8aT4ke3Byb2R1Y3QuZGVzY3JpcHRpb259PC9pPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIGlkPVwiJHtwcm9kdWN0LmlkfVwiIFxyXG4gICAgICAgICAgICBjbGFzcz1cInNob3Atbm93XCJcclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgIFNIT1AgTk9XIFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjbGVhclwiPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYCApLmpvaW4oXCJcIik7XHJcbn0gXHJcblxyXG5leHBvcnQgY29uc3QgbWFwSm9pblByb2R1Y3RzT2ZDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgcmV0dXJuIGNhdGVnb3J5Lm1hcChwcm9kdWN0ID0+IGBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaXRlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJvZHVjdC5sYXJnZUltYWdlfVwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxoMj4gPGk+ICR7cHJvZHVjdC5uYW1lfSA8L2k+IDwvaDI+XHJcbiAgICAgICAgICAgIDxwPiAgIFxyXG4gICAgICAgICAgICAgICAgIDxpPiAke3Byb2R1Y3QuZGVzY3JpcHRpb259IDwvaT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtwcm9kdWN0LmlkfVwiIFxyXG4gICAgICAgICAgICBjbGFzcz1cInNob3Atbm93XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBTSE9QIE5PVyBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2xlYXJcIj48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAgKS5qb2luKFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0QnRuID0gKGl0ZW0sIHByb2R1Y3RJRCkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtLWxpc3RcIj5cclxuICAgICAgICA8cD4gIDxpIGNsYXNzPVwiaXRlbV9uYW1lXCI+ICR7aXRlbS5pdGVtX25hbWV9ICA8L2k+PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwicHJpY2UtYWRkLXRvLWNhcnRcIj4gXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4gPGk+ICYjODM1ODsgJHtpdGVtLnByaWNlfSAgPC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgY2xhc3M9XCJhZGQtdG8tY2FydCAke3Byb2R1Y3RJRH1cIlxyXG4gICAgICAgICAgICBkYXRhLXByb2R1Y3QtaWQ9XCIke3Byb2R1Y3RJRH1cIiBcclxuICAgICAgICAgICAgZGF0YS1wcm9kdWN0LW51bWJlcj1cIiR7aXRlbS5pdGVtX251bWJlcn1cIlxyXG4gICAgICAgICAgICBkYXRhLXByb2R1Y3QtbmFtZT1cIiR7aXRlbS5pdGVtX25hbWV9XCJcclxuICAgICAgICAgICAgZGF0YS1wcm9kdWN0LXByaWNlPVwiJHtpdGVtLnByaWNlfVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlQnV0dG9uc1dpdGggPSAoeyBjYXJ0SWQsIHByb2R1Y3RJZCwgbmFtZSwgbnVtYmVyLCBwcmljZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gIGBcclxuICAgIDxzcGFuIGlkPVwiJHtjYXJ0SWR9XCIgY2xhc3M9XCJjYXJ0LWV2ZW50cyAke3Byb2R1Y3RJZH1cIj5cclxuXHJcbiAgICA8YnV0dG9uIFxyXG4gICAgY2xhc3M9XCJtaW51c1wiXHJcbiAgICBkYXRhLXByb2R1Y3QtaWQ9XCIke3Byb2R1Y3RJZH1cIlxyXG4gICAgZGF0YS1wcm9kdWN0LW5hbWU9XCIke25hbWUucmVwbGFjZSgvIC9naSwgJ18nKX1cIlxyXG4gICAgZGF0YS1wcm9kdWN0LW51bWJlcj1cIiR7bnVtYmVyfVwiXHJcbiAgICBkYXRhLXByb2R1Y3QtcHJpY2U9XCIke3ByaWNlfVwiXHJcbiAgICA+XHJcbiAgICAgICAgJm1pbnVzO1xyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPHNwYW4gY2xhc3M9XCJxdHR5XCI+MTwvc3Bhbj5cclxuXHJcbiAgICA8YnV0dG9uIFxyXG4gICAgY2xhc3M9XCJwbHVzXCJcclxuICAgIGRhdGEtcHJvZHVjdC1pZD1cIiR7cHJvZHVjdElkfVwiXHJcbiAgICBkYXRhLXByb2R1Y3QtbmFtZT1cIiR7bmFtZS5yZXBsYWNlKC8gL2dpLCAnXycpfVwiXHJcbiAgICBkYXRhLXByb2R1Y3QtbnVtYmVyPVwiJHtudW1iZXJ9XCJcclxuICAgIGRhdGEtcHJvZHVjdC1wcmljZT1cIiR7cHJpY2V9XCJcclxuICAgID5cclxuICAgICAgICAmcGx1cztcclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDwvc3Bhbj5cclxuICAgIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlQnV0dG9uc1dpdGhfMiA9ICh7IGNhcnRJZCwgcHJvZHVjdElkLCBuYW1lLCBudW1iZXIsIHByaWNlLCBxdWFudGl0eSB9KSA9PiB7XHJcbiAgICByZXR1cm4gIGBcclxuICAgIDxzcGFuIGlkPVwiJHtjYXJ0SWR9XCIgY2xhc3M9XCJjYXJ0LWV2ZW50cyAke3Byb2R1Y3RJZH1cIj5cclxuXHJcbiAgICA8YnV0dG9uIFxyXG4gICAgY2xhc3M9XCJtaW51c1wiXHJcbiAgICBkYXRhLXByb2R1Y3QtaWQ9XCIke3Byb2R1Y3RJZH1cIlxyXG4gICAgZGF0YS1wcm9kdWN0LW5hbWU9XCIke25hbWUucmVwbGFjZSgvIC9naSwgJ18nKX1cIlxyXG4gICAgZGF0YS1wcm9kdWN0LW51bWJlcj1cIiR7bnVtYmVyfVwiXHJcbiAgICBkYXRhLXByb2R1Y3QtcHJpY2U9XCIke3ByaWNlfVwiXHJcbiAgICA+XHJcbiAgICAgICAgJm1pbnVzO1xyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPHNwYW4gY2xhc3M9XCJxdHR5XCI+JHtxdWFudGl0eX08L3NwYW4+XHJcblxyXG4gICAgPGJ1dHRvbiBcclxuICAgIGNsYXNzPVwicGx1c1wiXHJcbiAgICBkYXRhLXByb2R1Y3QtaWQ9XCIke3Byb2R1Y3RJZH1cIlxyXG4gICAgZGF0YS1wcm9kdWN0LW5hbWU9XCIke25hbWUucmVwbGFjZSgvIC9naSwgJ18nKX1cIlxyXG4gICAgZGF0YS1wcm9kdWN0LW51bWJlcj1cIiR7bnVtYmVyfVwiXHJcbiAgICBkYXRhLXByb2R1Y3QtcHJpY2U9XCIke3ByaWNlfVwiXHJcbiAgICA+XHJcbiAgICAgICAgJnBsdXM7XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8L3NwYW4+XHJcbiAgICBgO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0RGlzcGxheSA9IChpZCwgbnVtYmVyLCBuYW1lLCBwcmljZSkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzPVwiYWRkLXRvLWNhcnQgJHtpZH1cIiBcclxuICAgICAgICBkYXRhLXByb2R1Y3QtaWQ9XCIke2lkfVwiIFxyXG4gICAgICAgIGRhdGEtcHJvZHVjdC1udW1iZXI9XCIke251bWJlcn1cIiBcclxuICAgICAgICBkYXRhLXByb2R1Y3QtbmFtZT1cIiR7bmFtZS5yZXBsYWNlKC9fL2dpLCcgJyl9XCIgXHJcbiAgICAgICAgZGF0YS1wcm9kdWN0LXByaWNlPVwiJHtwcmljZX1cIj5cclxuICAgICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIGA7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHNob3BwaW5nQ2FydEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJ0XCIpXHJcbmV4cG9ydCBjb25zdCB1c2VySWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVzZXJcIik7XHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUxpbmtzID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhdGVnb3J5LWxpc3QgdWwgbGknKTtcclxuZXhwb3J0IGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZCcpO1xyXG4iLCIvKiFcclxuICogU2FsdmF0dG9yZSAxLjAuOSBieSBAcm5tcCBhbmQgQHBwb2xkXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ybm1wL3NhbHZhdHRvcmVcclxuICovXHJcbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICAgIH0gLy9lbHNlIHtcclxuICAgIC8vICAgcm9vdC5zYWx2YXR0b3JlID0gZmFjdG9yeSgpO1xyXG4gICAgLy8gfVxyXG4gIH0odGhpcywgZnVuY3Rpb24oKSB7XHJcbiAgLyohIG1hdGNoTWVkaWEoKSBwb2x5ZmlsbCAtIFRlc3QgYSBDU1MgbWVkaWEgdHlwZS9xdWVyeSBpbiBKUy4gQXV0aG9ycyAmIGNvcHlyaWdodCAoYykgMjAxMjogU2NvdHQgSmVobCwgUGF1bCBJcmlzaCwgTmljaG9sYXMgWmFrYXMsIERhdmlkIEtuaWdodC4gRHVhbCBNSVQvQlNEIGxpY2Vuc2UgKi9cclxuICBcclxuICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhKSB7XHJcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICBcclxuICAgICAgICAgIC8vIEZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgbWF0Y2hNZWRpdW0gYXBpIHN1Y2ggYXMgSUUgOSBhbmQgd2Via2l0XHJcbiAgICAgICAgICB2YXIgc3R5bGVNZWRpYSA9ICh3aW5kb3cuc3R5bGVNZWRpYSB8fCB3aW5kb3cubWVkaWEpO1xyXG4gIFxyXG4gICAgICAgICAgLy8gRm9yIHRob3NlIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtYXRjaE1lZGl1bVxyXG4gICAgICAgICAgaWYgKCFzdHlsZU1lZGlhKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHN0eWxlICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKSxcclxuICAgICAgICAgICAgICAgICAgc2NyaXB0ICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0sXHJcbiAgICAgICAgICAgICAgICAgIGluZm8gICAgICAgID0gbnVsbDtcclxuICBcclxuICAgICAgICAgICAgICBzdHlsZS50eXBlICA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgICAgICAgc3R5bGUuaWQgICAgPSAnbWF0Y2htZWRpYWpzLXRlc3QnO1xyXG4gIFxyXG4gICAgICAgICAgICAgIHNjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZSwgc2NyaXB0KTtcclxuICBcclxuICAgICAgICAgICAgICAvLyAnc3R5bGUuY3VycmVudFN0eWxlJyBpcyB1c2VkIGJ5IElFIDw9IDggYW5kICd3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZScgZm9yIGFsbCBvdGhlciBicm93c2Vyc1xyXG4gICAgICAgICAgICAgIGluZm8gPSAoJ2dldENvbXB1dGVkU3R5bGUnIGluIHdpbmRvdykgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc3R5bGUsIG51bGwpIHx8IHN0eWxlLmN1cnJlbnRTdHlsZTtcclxuICBcclxuICAgICAgICAgICAgICBzdHlsZU1lZGlhID0ge1xyXG4gICAgICAgICAgICAgICAgICBtYXRjaE1lZGl1bTogZnVuY3Rpb24obWVkaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gJ0BtZWRpYSAnICsgbWVkaWEgKyAneyAjbWF0Y2htZWRpYWpzLXRlc3QgeyB3aWR0aDogMXB4OyB9IH0nO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gJ3N0eWxlLnN0eWxlU2hlZXQnIGlzIHVzZWQgYnkgSUUgPD0gOCBhbmQgJ3N0eWxlLnRleHRDb250ZW50JyBmb3IgYWxsIG90aGVyIGJyb3dzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgbWVkaWEgcXVlcnkgaXMgdHJ1ZSBvciBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZm8ud2lkdGggPT09ICcxcHgnO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbihtZWRpYSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIG1hdGNoZXM6IHN0eWxlTWVkaWEubWF0Y2hNZWRpdW0obWVkaWEgfHwgJ2FsbCcpLFxyXG4gICAgICAgICAgICAgICAgICBtZWRpYTogbWVkaWEgfHwgJ2FsbCdcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfTtcclxuICAgICAgfSgpO1xyXG4gIH1cclxuICBcclxuICAvKiEgbWF0Y2hNZWRpYSgpIHBvbHlmaWxsIGFkZExpc3RlbmVyL3JlbW92ZUxpc3RlbmVyIGV4dGVuc2lvbi4gQXV0aG9yICYgY29weXJpZ2h0IChjKSAyMDEyOiBTY290dCBKZWhsLiBEdWFsIE1JVC9CU0QgbGljZW5zZSAqL1xyXG4gIChmdW5jdGlvbigpe1xyXG4gICAgICBcInVzZSBzdHJpY3RcIjtcclxuICBcclxuICAgICAgLy8gQmFpbCBvdXQgZm9yIGJyb3dzZXJzIHRoYXQgaGF2ZSBhZGRMaXN0ZW5lciBzdXBwb3J0XHJcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnYWxsJykuYWRkTGlzdGVuZXIpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICB2YXIgbG9jYWxNYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEsXHJcbiAgICAgICAgICBoYXNNZWRpYVF1ZXJpZXMgPSBsb2NhbE1hdGNoTWVkaWEoJ29ubHkgYWxsJykubWF0Y2hlcyxcclxuICAgICAgICAgIGlzTGlzdGVuaW5nICAgICA9IGZhbHNlLFxyXG4gICAgICAgICAgdGltZW91dElEICAgICAgID0gMCwgICAgLy8gc2V0VGltZW91dCBmb3IgZGVib3VuY2luZyAnaGFuZGxlQ2hhbmdlJ1xyXG4gICAgICAgICAgcXVlcmllcyAgICAgICAgID0gW10sICAgLy8gQ29udGFpbnMgZWFjaCAnbXFsJyBhbmQgYXNzb2NpYXRlZCAnbGlzdGVuZXJzJyBpZiAnYWRkTGlzdGVuZXInIGlzIHVzZWRcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZSAgICA9IGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgIC8vIERlYm91bmNlXHJcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XHJcbiAgXHJcbiAgICAgICAgICAgICAgdGltZW91dElEID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gcXVlcmllcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbXFsICAgICAgICAgPSBxdWVyaWVzW2ldLm1xbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgICA9IHF1ZXJpZXNbaV0ubGlzdGVuZXJzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgICAgID0gbG9jYWxNYXRjaE1lZGlhKG1xbC5tZWRpYSkubWF0Y2hlcztcclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBtcWwubWF0Y2hlcyB2YWx1ZSBhbmQgY2FsbCBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmUgbGlzdGVuZXJzIG9ubHkgaWYgdHJhbnNpdGlvbmluZyB0byBvciBmcm9tIG1hdGNoZWQgc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICE9PSBtcWwubWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1xbC5tYXRjaGVzID0gbWF0Y2hlcztcclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgamwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBqIDwgamw7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbal0uY2FsbCh3aW5kb3csIG1xbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSwgMzApO1xyXG4gICAgICAgICAgfTtcclxuICBcclxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEgPSBmdW5jdGlvbihtZWRpYSkge1xyXG4gICAgICAgICAgdmFyIG1xbCAgICAgICAgID0gbG9jYWxNYXRjaE1lZGlhKG1lZGlhKSxcclxuICAgICAgICAgICAgICBsaXN0ZW5lcnMgICA9IFtdLFxyXG4gICAgICAgICAgICAgIGluZGV4ICAgICAgID0gMDtcclxuICBcclxuICAgICAgICAgIG1xbC5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgLy8gQ2hhbmdlcyB3b3VsZCBub3Qgb2NjdXIgdG8gY3NzIG1lZGlhIHR5cGUgc28gcmV0dXJuIG5vdyAoQWZmZWN0cyBJRSA8PSA4KVxyXG4gICAgICAgICAgICAgIGlmICghaGFzTWVkaWFRdWVyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgLy8gU2V0IHVwICdyZXNpemUnIGxpc3RlbmVyIGZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgQ1NTMyBtZWRpYSBxdWVyaWVzIChOb3QgZm9yIElFIDw9IDgpXHJcbiAgICAgICAgICAgICAgLy8gVGhlcmUgc2hvdWxkIG9ubHkgZXZlciBiZSAxIHJlc2l6ZSBsaXN0ZW5lciBydW5uaW5nIGZvciBwZXJmb3JtYW5jZVxyXG4gICAgICAgICAgICAgIGlmICghaXNMaXN0ZW5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgaXNMaXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlQ2hhbmdlLCB0cnVlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgLy8gUHVzaCBvYmplY3Qgb25seSBpZiBpdCBoYXMgbm90IGJlZW4gcHVzaGVkIGFscmVhZHlcclxuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgaW5kZXggPSBxdWVyaWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXFsICAgICAgICAgOiBtcWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgICA6IGxpc3RlbmVyc1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgICAgfTtcclxuICBcclxuICAgICAgICAgIG1xbC5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGlsOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcil7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICBcclxuICAgICAgICAgIHJldHVybiBtcWw7XHJcbiAgICAgIH07XHJcbiAgfSgpKTtcclxuICBcclxuICAvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xyXG4gIC8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcclxuICBcclxuICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXHJcbiAgXHJcbiAgLy8gTUlUIGxpY2Vuc2VcclxuICBcclxuICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gIFxyXG4gICAgICB2YXIgbGFzdFRpbWUgPSAwO1xyXG4gICAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XHJcbiAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xyXG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XHJcbiAgICAgICAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xyXG4gICAgICAgICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpOyB9LFxyXG4gICAgICAgICAgICAgICAgdGltZVRvQ2FsbCk7XHJcbiAgICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgICAgfTtcclxuICBcclxuICAgICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXHJcbiAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XHJcbiAgICAgICAgICB9O1xyXG4gIH0oKSk7XHJcbiAgXHJcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50XHJcbiAgXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xyXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfTtcclxuICAgICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcbiAgICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcclxuICAgICAgICByZXR1cm4gZXZ0O1xyXG4gICAgICAgfVxyXG4gIFxyXG4gICAgICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xyXG4gIFxyXG4gICAgICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcclxuICAgIH0pKCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGpzaGludCBsYXhjb21tYTogdHJ1ZSAqL1xyXG4gIHZhciBzYWx2YXR0b3JlID0gKGZ1bmN0aW9uIChnbG9iYWwsIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuICBcclxuICB2YXIgc2VsZiA9IHt9LFxyXG4gICAgICBncmlkcyA9IFtdLFxyXG4gICAgICBtZWRpYVJ1bGVzID0gW10sXHJcbiAgICAgIG1lZGlhUXVlcmllcyA9IFtdLFxyXG4gICAgICBhZGRfdG9fZGF0YXNldCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuICAgICAgICAvLyB1c2VzIGRhdGFzZXQgZnVuY3Rpb24gb3IgYSBmYWxsYmFjayBmb3IgPGllMTBcclxuICAgICAgICBpZiAoZWxlbWVudC5kYXRhc2V0KSB7XHJcbiAgICAgICAgICBlbGVtZW50LmRhdGFzZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtXCIgKyBrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gIHNlbGYub2J0YWluR3JpZFNldHRpbmdzID0gZnVuY3Rpb24gb2J0YWluR3JpZFNldHRpbmdzKGVsZW1lbnQpIHtcclxuICAgIC8vIHJldHVybnMgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCB0aGUgY2xhc3NlcyBhIGNvbHVtbiBzaG91bGQgaGF2ZSxcclxuICAgIC8vIGZyb20gY29tcHV0aW5nIHRoZSBzdHlsZSBvZiB0aGUgOjpiZWZvcmUgcHNldWRvLWVsZW1lbnQgb2YgdGhlIGdyaWQuXHJcbiAgXHJcbiAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdsb2JhbC5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIFwiOmJlZm9yZVwiKVxyXG4gICAgICAsIGNvbnRlbnQgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJjb250ZW50XCIpLnNsaWNlKDEsIC0xKVxyXG4gICAgICAsIG1hdGNoUmVzdWx0ID0gY29udGVudC5tYXRjaCgvXlxccyooXFxkKykoPzpcXHM/XFwuKC4rKSk/XFxzKiQvKVxyXG4gICAgICAsIG51bWJlck9mQ29sdW1ucyA9IDFcclxuICAgICAgLCBjb2x1bW5DbGFzc2VzID0gW11cclxuICAgIDtcclxuICBcclxuICAgIGlmIChtYXRjaFJlc3VsdCkge1xyXG4gICAgICBudW1iZXJPZkNvbHVtbnMgPSBtYXRjaFJlc3VsdFsxXTtcclxuICAgICAgY29sdW1uQ2xhc3NlcyA9IG1hdGNoUmVzdWx0WzJdO1xyXG4gICAgICBjb2x1bW5DbGFzc2VzID0gY29sdW1uQ2xhc3Nlcz8gY29sdW1uQ2xhc3Nlcy5zcGxpdChcIi5cIikgOiBbXCJjb2x1bW5cIl07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXRjaFJlc3VsdCA9IGNvbnRlbnQubWF0Y2goL15cXHMqXFwuKC4rKVxccysoXFxkKylcXHMqJC8pO1xyXG4gICAgICBpZiAobWF0Y2hSZXN1bHQpIHtcclxuICAgICAgICBjb2x1bW5DbGFzc2VzID0gbWF0Y2hSZXN1bHRbMV07XHJcbiAgICAgICAgbnVtYmVyT2ZDb2x1bW5zID0gbWF0Y2hSZXN1bHRbMl07XHJcbiAgICAgICAgaWYgKG51bWJlck9mQ29sdW1ucykge1xyXG4gICAgICAgICAgICAgIG51bWJlck9mQ29sdW1ucyA9IG51bWJlck9mQ29sdW1ucy5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBudW1iZXJPZkNvbHVtbnM6IG51bWJlck9mQ29sdW1ucyxcclxuICAgICAgY29sdW1uQ2xhc3NlczogY29sdW1uQ2xhc3Nlc1xyXG4gICAgfTtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHNlbGYuYWRkQ29sdW1ucyA9IGZ1bmN0aW9uIGFkZENvbHVtbnMoZ3JpZCwgaXRlbXMpIHtcclxuICAgIC8vIGZyb20gdGhlIHNldHRpbmdzIG9idGFpbmVkLCBpdCBjcmVhdGVzIGNvbHVtbnMgd2l0aFxyXG4gICAgLy8gdGhlIGNvbmZpZ3VyZWQgY2xhc3NlcyBhbmQgYWRkcyB0byB0aGVtIGEgbGlzdCBvZiBpdGVtcy5cclxuICBcclxuICAgIHZhciBzZXR0aW5ncyA9IHNlbGYub2J0YWluR3JpZFNldHRpbmdzKGdyaWQpXHJcbiAgICAgICwgbnVtYmVyT2ZDb2x1bW5zID0gc2V0dGluZ3MubnVtYmVyT2ZDb2x1bW5zXHJcbiAgICAgICwgY29sdW1uQ2xhc3NlcyA9IHNldHRpbmdzLmNvbHVtbkNsYXNzZXNcclxuICAgICAgLCBjb2x1bW5zSXRlbXMgPSBuZXcgQXJyYXkoK251bWJlck9mQ29sdW1ucylcclxuICAgICAgLCBjb2x1bW5zRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcclxuICAgICAgLCBpID0gbnVtYmVyT2ZDb2x1bW5zXHJcbiAgICAgICwgc2VsZWN0b3JcclxuICAgIDtcclxuICBcclxuICAgIHdoaWxlIChpLS0gIT09IDApIHtcclxuICAgICAgc2VsZWN0b3IgPSBcIltkYXRhLWNvbHVtbnNdID4gKjpudGgtY2hpbGQoXCIgKyBudW1iZXJPZkNvbHVtbnMgKyBcIm4tXCIgKyBpICsgXCIpXCI7XHJcbiAgICAgIGNvbHVtbnNJdGVtcy5wdXNoKGl0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbHVtbnNJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIGFwcGVuZF90b19ncmlkX2ZyYWdtZW50KHJvd3MpIHtcclxuICAgICAgdmFyIGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAsIHJvd3NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxyXG4gICAgICA7XHJcbiAgXHJcbiAgICAgIGNvbHVtbi5jbGFzc05hbWUgPSBjb2x1bW5DbGFzc2VzLmpvaW4oXCIgXCIpO1xyXG4gIFxyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHJvd3MsIGZ1bmN0aW9uIGFwcGVuZF90b19jb2x1bW4ocm93KSB7XHJcbiAgICAgICAgcm93c0ZyYWdtZW50LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQocm93c0ZyYWdtZW50KTtcclxuICAgICAgY29sdW1uc0ZyYWdtZW50LmFwcGVuZENoaWxkKGNvbHVtbik7XHJcbiAgICB9KTtcclxuICBcclxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoY29sdW1uc0ZyYWdtZW50KTtcclxuICAgIGFkZF90b19kYXRhc2V0KGdyaWQsICdjb2x1bW5zJywgbnVtYmVyT2ZDb2x1bW5zKTtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHNlbGYucmVtb3ZlQ29sdW1ucyA9IGZ1bmN0aW9uIHJlbW92ZUNvbHVtbnMoZ3JpZCkge1xyXG4gICAgLy8gcmVtb3ZlcyBhbGwgdGhlIGNvbHVtbnMgZnJvbSBhIGdyaWQsIGFuZCByZXR1cm5zIGEgbGlzdFxyXG4gICAgLy8gb2YgaXRlbXMgc29ydGVkIGJ5IHRoZSBvcmRlcmluZyBvZiBjb2x1bW5zLlxyXG4gIFxyXG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhncmlkKTtcclxuICBcclxuICAgIHZhciBjb2x1bW5zID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHJhbmdlLmV4dHJhY3RDb250ZW50cygpLmNoaWxkTm9kZXMsIGZ1bmN0aW9uIGZpbHRlcl9lbGVtZW50cyhub2RlKSB7XHJcbiAgICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgZ2xvYmFsLkhUTUxFbGVtZW50O1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICB2YXIgbnVtYmVyT2ZDb2x1bW5zID0gY29sdW1ucy5sZW5ndGhcclxuICAgICAgLCBudW1iZXJPZlJvd3NJbkZpcnN0Q29sdW1uID0gY29sdW1uc1swXS5jaGlsZE5vZGVzLmxlbmd0aFxyXG4gICAgICAsIHNvcnRlZFJvd3MgPSBuZXcgQXJyYXkobnVtYmVyT2ZSb3dzSW5GaXJzdENvbHVtbiAqIG51bWJlck9mQ29sdW1ucylcclxuICAgIDtcclxuICBcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY29sdW1ucywgZnVuY3Rpb24gaXRlcmF0ZV9jb2x1bW5zKGNvbHVtbiwgY29sdW1uSW5kZXgpIHtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChjb2x1bW4uY2hpbGRyZW4sIGZ1bmN0aW9uIGl0ZXJhdGVfcm93cyhyb3csIHJvd0luZGV4KSB7XHJcbiAgICAgICAgc29ydGVkUm93c1tyb3dJbmRleCAqIG51bWJlck9mQ29sdW1ucyArIGNvbHVtbkluZGV4XSA9IHJvdztcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkX3RvX2RhdGFzZXQoY29udGFpbmVyLCAnY29sdW1ucycsIDApO1xyXG4gIFxyXG4gICAgc29ydGVkUm93cy5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyX25vbl9udWxsKGNoaWxkKSB7XHJcbiAgICAgIHJldHVybiAhIWNoaWxkO1xyXG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiBhcHBlbmRfcm93KGNoaWxkKSB7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfTtcclxuICBcclxuICBcclxuICBzZWxmLnJlY3JlYXRlQ29sdW1ucyA9IGZ1bmN0aW9uIHJlY3JlYXRlQ29sdW1ucyhncmlkKSB7XHJcbiAgICAvLyByZW1vdmVzIGFsbCB0aGUgY29sdW1ucyBmcm9tIHRoZSBncmlkLCBhbmQgYWRkcyB0aGVtIGFnYWluLFxyXG4gICAgLy8gaXQgaXMgdXNlZCB3aGVuIHRoZSBudW1iZXIgb2YgY29sdW1ucyBjaGFuZ2UuXHJcbiAgXHJcbiAgICBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHJlbmRlcl9hZnRlcl9jc3NfbWVkaWFRdWVyeUNoYW5nZSgpIHtcclxuICAgICAgc2VsZi5hZGRDb2x1bW5zKGdyaWQsIHNlbGYucmVtb3ZlQ29sdW1ucyhncmlkKSk7XHJcbiAgICAgIHZhciBjb2x1bW5zQ2hhbmdlID0gbmV3IEN1c3RvbUV2ZW50KFwiY29sdW1uc0NoYW5nZVwiKTtcclxuICAgICAgZ3JpZC5kaXNwYXRjaEV2ZW50KGNvbHVtbnNDaGFuZ2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICBcclxuICBzZWxmLm1lZGlhUXVlcnlDaGFuZ2UgPSBmdW5jdGlvbiBtZWRpYVF1ZXJ5Q2hhbmdlKG1xbCkge1xyXG4gICAgLy8gcmVjcmVhdGVzIHRoZSBjb2x1bW5zIHdoZW4gYSBtZWRpYSBxdWVyeSBtYXRjaGVzIHRoZSBjdXJyZW50IHN0YXRlXHJcbiAgICAvLyBvZiB0aGUgYnJvd3Nlci5cclxuICBcclxuICAgIGlmIChtcWwubWF0Y2hlcykge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGdyaWRzLCBzZWxmLnJlY3JlYXRlQ29sdW1ucyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBcclxuICBzZWxmLmdldENTU1J1bGVzID0gZnVuY3Rpb24gZ2V0Q1NTUnVsZXMoc3R5bGVzaGVldCkge1xyXG4gICAgLy8gcmV0dXJucyBhIGxpc3Qgb2YgY3NzIHJ1bGVzIGZyb20gYSBzdHlsZXNoZWV0XHJcbiAgXHJcbiAgICB2YXIgY3NzUnVsZXM7XHJcbiAgICB0cnkge1xyXG4gICAgICBjc3NSdWxlcyA9IHN0eWxlc2hlZXQuc2hlZXQuY3NzUnVsZXMgfHwgc3R5bGVzaGVldC5zaGVldC5ydWxlcztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIGNzc1J1bGVzIHx8IFtdO1xyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiAgc2VsZi5nZXRTdHlsZXNoZWV0cyA9IGZ1bmN0aW9uIGdldFN0eWxlc2hlZXRzKCkge1xyXG4gICAgLy8gcmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRoZSBzdHlsZXMgaW4gdGhlIGRvY3VtZW50ICh0aGF0IGFyZSBhY2Nlc3NpYmxlKS5cclxuICBcclxuICAgIHZhciBpbmxpbmVTdHlsZUJsb2NrcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVwiKSk7XHJcbiAgICBpbmxpbmVTdHlsZUJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uKHN0eWxlc2hlZXQsIGlkeCkge1xyXG4gICAgICBpZiAoc3R5bGVzaGVldC50eXBlICE9PSAndGV4dC9jc3MnICYmIHN0eWxlc2hlZXQudHlwZSAhPT0gJycpIHtcclxuICAgICAgICBpbmxpbmVTdHlsZUJsb2Nrcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5jYWxsKFxyXG4gICAgICBpbmxpbmVTdHlsZUJsb2NrcyxcclxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPSdzdHlsZXNoZWV0J11cIikpXHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiAgc2VsZi5tZWRpYVJ1bGVIYXNDb2x1bW5zU2VsZWN0b3IgPSBmdW5jdGlvbiBtZWRpYVJ1bGVIYXNDb2x1bW5zU2VsZWN0b3IocnVsZXMpIHtcclxuICAgIC8vIGNoZWNrcyBpZiBhIG1lZGlhIHF1ZXJ5IGNzcyBydWxlIGhhcyBpbiBpdHMgY29udGVudHMgYSBzZWxlY3RvciB0aGF0XHJcbiAgICAvLyBzdHlsZXMgdGhlIGdyaWQuXHJcbiAgXHJcbiAgICB2YXIgaSwgcnVsZTtcclxuICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGkgPSBydWxlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICBpID0gMDtcclxuICAgIH1cclxuICBcclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgcnVsZSA9IHJ1bGVzW2ldO1xyXG4gICAgICBpZiAocnVsZS5zZWxlY3RvclRleHQgJiYgcnVsZS5zZWxlY3RvclRleHQubWF0Y2goL1xcW2RhdGEtY29sdW1uc1xcXSguKik6Oj9iZWZvcmUkLykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiAgc2VsZi5zY2FuTWVkaWFRdWVyaWVzID0gZnVuY3Rpb24gc2Nhbk1lZGlhUXVlcmllcygpIHtcclxuICAgIC8vIHNjYW5zIGFsbCB0aGUgc3R5bGVzaGVldHMgZm9yIHNlbGVjdG9ycyB0aGF0IHN0eWxlIGdyaWRzLFxyXG4gICAgLy8gaWYgdGhlIG1hdGNoTWVkaWEgQVBJIGlzIHN1cHBvcnRlZC5cclxuICBcclxuICAgIHZhciBuZXdNZWRpYVJ1bGVzID0gW107XHJcbiAgXHJcbiAgICBpZiAoIWdsb2JhbC5tYXRjaE1lZGlhKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICAgIHNlbGYuZ2V0U3R5bGVzaGVldHMoKS5mb3JFYWNoKGZ1bmN0aW9uIGV4dHJhY3RfcnVsZXMoc3R5bGVzaGVldCkge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNlbGYuZ2V0Q1NTUnVsZXMoc3R5bGVzaGVldCksIGZ1bmN0aW9uIGZpbHRlcl9ieV9jb2x1bW5fc2VsZWN0b3IocnVsZSkge1xyXG4gICAgICAgIC8vIHJ1bGUubWVkaWEgdGhyb3dzIGFuICdub3QgaW1wbGVtZW50ZWQgZXJyb3InIGluIGllOSBmb3IgaW1wb3J0IHJ1bGVzIG9jY2FzaW9uYWxseVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAocnVsZS5tZWRpYSAmJiBydWxlLmNzc1J1bGVzICYmIHNlbGYubWVkaWFSdWxlSGFzQ29sdW1uc1NlbGVjdG9yKHJ1bGUuY3NzUnVsZXMpKSB7XHJcbiAgICAgICAgICAgIG5ld01lZGlhUnVsZXMucHVzaChydWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gcmVtb3ZlIG1hdGNoTWVkaWEgbGlzdGVuZXJzIGZyb20gdGhlIG9sZCBydWxlc1xyXG4gICAgdmFyIG9sZFJ1bGVzID0gbWVkaWFSdWxlcy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ld01lZGlhUnVsZXMuaW5kZXhPZihlbCkgPT09IC0xO1xyXG4gICAgfSk7XHJcbiAgICBtZWRpYVF1ZXJpZXMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICByZXR1cm4gb2xkUnVsZXMuaW5kZXhPZihlbC5ydWxlKSAhPT0gLTE7XHJcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLm1xbC5yZW1vdmVMaXN0ZW5lcihzZWxmLm1lZGlhUXVlcnlDaGFuZ2UpO1xyXG4gICAgfSk7XHJcbiAgICBtZWRpYVF1ZXJpZXMgPSBtZWRpYVF1ZXJpZXMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICByZXR1cm4gb2xkUnVsZXMuaW5kZXhPZihlbC5ydWxlKSA9PT0gLTE7XHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIGFkZCBtYXRjaE1lZGlhIGxpc3RlbmVycyB0byB0aGUgbmV3IHJ1bGVzXHJcbiAgICBuZXdNZWRpYVJ1bGVzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgcmV0dXJuIG1lZGlhUnVsZXMuaW5kZXhPZihlbCkgPT0gLTE7XHJcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XHJcbiAgICAgICAgdmFyIG1xbCA9IGdsb2JhbC5tYXRjaE1lZGlhKHJ1bGUubWVkaWEubWVkaWFUZXh0KTtcclxuICAgICAgICBtcWwuYWRkTGlzdGVuZXIoc2VsZi5tZWRpYVF1ZXJ5Q2hhbmdlKTtcclxuICAgICAgICBtZWRpYVF1ZXJpZXMucHVzaCh7cnVsZTogcnVsZSwgbXFsOm1xbH0pO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyBzd2FwIG1lZGlhUnVsZXMgd2l0aCB0aGUgbmV3IHNldFxyXG4gICAgbWVkaWFSdWxlcy5sZW5ndGggPSAwO1xyXG4gICAgbWVkaWFSdWxlcyA9IG5ld01lZGlhUnVsZXM7XHJcbiAgfTtcclxuICBcclxuICBcclxuICBzZWxmLnJlc2Nhbk1lZGlhUXVlcmllcyA9IGZ1bmN0aW9uIHJlc2Nhbk1lZGlhUXVlcmllcygpIHtcclxuICAgICAgc2VsZi5zY2FuTWVkaWFRdWVyaWVzKCk7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZ3JpZHMsIHNlbGYucmVjcmVhdGVDb2x1bW5zKTtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHNlbGYubmV4dEVsZW1lbnRDb2x1bW5JbmRleCA9IGZ1bmN0aW9uIG5leHRFbGVtZW50Q29sdW1uSW5kZXgoZ3JpZCwgZnJhZ21lbnRzKSB7XHJcbiAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgY29sdW1uIHdoZXJlIHRoZSBnaXZlbiBlbGVtZW50IG11c3QgYmUgYWRkZWQuXHJcbiAgXHJcbiAgICB2YXIgY2hpbGRyZW4gPSBncmlkLmNoaWxkcmVuXHJcbiAgICAgICwgbSA9IGNoaWxkcmVuLmxlbmd0aFxyXG4gICAgICAsIGxvd2VzdFJvd0NvdW50ID0gMFxyXG4gICAgICAsIGNoaWxkXHJcbiAgICAgICwgY3VycmVudFJvd0NvdW50XHJcbiAgICAgICwgaVxyXG4gICAgICAsIGluZGV4ID0gMFxyXG4gICAgO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IG07IGkrKykge1xyXG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICBjdXJyZW50Um93Q291bnQgPSBjaGlsZC5jaGlsZHJlbi5sZW5ndGggKyAoZnJhZ21lbnRzW2ldLmNoaWxkcmVuIHx8IGZyYWdtZW50c1tpXS5jaGlsZE5vZGVzKS5sZW5ndGg7XHJcbiAgICBpZihsb3dlc3RSb3dDb3VudCA9PT0gMCkge1xyXG4gICAgICBsb3dlc3RSb3dDb3VudCA9IGN1cnJlbnRSb3dDb3VudDtcclxuICAgIH1cclxuICAgICAgaWYoY3VycmVudFJvd0NvdW50IDwgbG93ZXN0Um93Q291bnQpIHtcclxuICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgbG93ZXN0Um93Q291bnQgPSBjdXJyZW50Um93Q291bnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHNlbGYuY3JlYXRlRnJhZ21lbnRzTGlzdCA9IGZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50c0xpc3QocXVhbnRpdHkpIHtcclxuICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGZyYWdtZW50c1xyXG4gIFxyXG4gICAgdmFyIGZyYWdtZW50cyA9IG5ldyBBcnJheShxdWFudGl0eSlcclxuICAgICAgLCBpID0gMFxyXG4gICAgO1xyXG4gIFxyXG4gICAgd2hpbGUgKGkgIT09IHF1YW50aXR5KSB7XHJcbiAgICAgIGZyYWdtZW50c1tpXSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIGZyYWdtZW50cztcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHNlbGYuYXBwZW5kRWxlbWVudHMgPSBmdW5jdGlvbiBhcHBlbmRFbGVtZW50cyhncmlkLCBlbGVtZW50cykge1xyXG4gICAgLy8gYWRkcyBhIGxpc3Qgb2YgZWxlbWVudHMgdG8gdGhlIGVuZCBvZiBhIGdyaWRcclxuICBcclxuICAgIHZhciBjb2x1bW5zID0gZ3JpZC5jaGlsZHJlblxyXG4gICAgICAsIG51bWJlck9mQ29sdW1ucyA9IGNvbHVtbnMubGVuZ3RoXHJcbiAgICAgICwgZnJhZ21lbnRzID0gc2VsZi5jcmVhdGVGcmFnbWVudHNMaXN0KG51bWJlck9mQ29sdW1ucylcclxuICAgIDtcclxuICBcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIGFwcGVuZF90b19uZXh0X2ZyYWdtZW50KGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGNvbHVtbkluZGV4ID0gc2VsZi5uZXh0RWxlbWVudENvbHVtbkluZGV4KGdyaWQsIGZyYWdtZW50cyk7XHJcbiAgICAgIGZyYWdtZW50c1tjb2x1bW5JbmRleF0uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY29sdW1ucywgZnVuY3Rpb24gaW5zZXJ0X2NvbHVtbihjb2x1bW4sIGluZGV4KSB7XHJcbiAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChmcmFnbWVudHNbaW5kZXhdKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiAgc2VsZi5wcmVwZW5kRWxlbWVudHMgPSBmdW5jdGlvbiBwcmVwZW5kRWxlbWVudHMoZ3JpZCwgZWxlbWVudHMpIHtcclxuICAgIC8vIGFkZHMgYSBsaXN0IG9mIGVsZW1lbnRzIHRvIHRoZSBzdGFydCBvZiBhIGdyaWRcclxuICBcclxuICAgIHZhciBjb2x1bW5zID0gZ3JpZC5jaGlsZHJlblxyXG4gICAgICAsIG51bWJlck9mQ29sdW1ucyA9IGNvbHVtbnMubGVuZ3RoXHJcbiAgICAgICwgZnJhZ21lbnRzID0gc2VsZi5jcmVhdGVGcmFnbWVudHNMaXN0KG51bWJlck9mQ29sdW1ucylcclxuICAgICAgLCBjb2x1bW5JbmRleCA9IG51bWJlck9mQ29sdW1ucyAtIDFcclxuICAgIDtcclxuICBcclxuICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gYXBwZW5kX3RvX25leHRfZnJhZ21lbnQoZWxlbWVudCkge1xyXG4gICAgICB2YXIgZnJhZ21lbnQgPSBmcmFnbWVudHNbY29sdW1uSW5kZXhdO1xyXG4gICAgICBmcmFnbWVudC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgZnJhZ21lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgIGlmIChjb2x1bW5JbmRleCA9PT0gMCkge1xyXG4gICAgICAgIGNvbHVtbkluZGV4ID0gbnVtYmVyT2ZDb2x1bW5zIC0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW5JbmRleC0tO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY29sdW1ucywgZnVuY3Rpb24gaW5zZXJ0X2NvbHVtbihjb2x1bW4sIGluZGV4KSB7XHJcbiAgICAgIGNvbHVtbi5pbnNlcnRCZWZvcmUoZnJhZ21lbnRzW2luZGV4XSwgY29sdW1uLmZpcnN0Q2hpbGQpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyBwb3B1bGF0ZXMgYSBmcmFnbWVudCB3aXRoIG4gY29sdW1ucyB0aWxsIHRoZSByaWdodFxyXG4gICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXHJcbiAgICAgICwgbnVtYmVyT2ZDb2x1bW5zVG9FeHRyYWN0ID0gZWxlbWVudHMubGVuZ3RoICUgbnVtYmVyT2ZDb2x1bW5zXHJcbiAgICA7XHJcbiAgXHJcbiAgICB3aGlsZSAobnVtYmVyT2ZDb2x1bW5zVG9FeHRyYWN0LS0gIT09IDApIHtcclxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZ3JpZC5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gYWRkcyB0aGUgZnJhZ21lbnQgdG8gdGhlIGxlZnRcclxuICAgIGdyaWQuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBncmlkLmZpcnN0Q2hpbGQpO1xyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiAgc2VsZi5yZWdpc3RlckdyaWQgPSBmdW5jdGlvbiByZWdpc3RlckdyaWQgKGdyaWQpIHtcclxuICAgIGlmIChnbG9iYWwuZ2V0Q29tcHV0ZWRTdHlsZShncmlkKS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyByZXRyaWV2ZSB0aGUgbGlzdCBvZiBpdGVtcyBmcm9tIHRoZSBncmlkIGl0c2VsZlxyXG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhncmlkKTtcclxuICBcclxuICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpdGVtcy5hcHBlbmRDaGlsZChyYW5nZS5leHRyYWN0Q29udGVudHMoKSk7XHJcbiAgXHJcbiAgXHJcbiAgICBhZGRfdG9fZGF0YXNldChpdGVtcywgJ2NvbHVtbnMnLCAwKTtcclxuICAgIHNlbGYuYWRkQ29sdW1ucyhncmlkLCBpdGVtcyk7XHJcbiAgICBncmlkcy5wdXNoKGdyaWQpO1xyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiAgc2VsZi5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIC8vIGFkZHMgcmVxdWlyZWQgQ1NTIHJ1bGUgdG8gaGlkZSAnY29udGVudCcgYmFzZWRcclxuICAgIC8vIGNvbmZpZ3VyYXRpb24uXHJcbiAgXHJcbiAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgY3NzLmlubmVySFRNTCA9IFwiW2RhdGEtY29sdW1uc106OmJlZm9yZXtkaXNwbGF5OmJsb2NrO3Zpc2liaWxpdHk6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO2ZvbnQtc2l6ZToxcHg7fVwiO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjc3MpO1xyXG4gIFxyXG4gICAgLy8gc2NhbnMgYWxsIHRoZSBncmlkcyBpbiB0aGUgZG9jdW1lbnQgYW5kIGdlbmVyYXRlc1xyXG4gICAgLy8gY29sdW1ucyBmcm9tIHRoZWlyIGNvbmZpZ3VyYXRpb24uXHJcbiAgXHJcbiAgICB2YXIgZ3JpZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNvbHVtbnNdXCIpO1xyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChncmlkRWxlbWVudHMsIHNlbGYucmVnaXN0ZXJHcmlkKTtcclxuICAgIHNlbGYuc2Nhbk1lZGlhUXVlcmllcygpO1xyXG4gIH07XHJcbiAgXHJcbiAgc2VsZi5pbml0KCk7XHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIGFwcGVuZEVsZW1lbnRzOiBzZWxmLmFwcGVuZEVsZW1lbnRzLFxyXG4gICAgcHJlcGVuZEVsZW1lbnRzOiBzZWxmLnByZXBlbmRFbGVtZW50cyxcclxuICAgIHJlZ2lzdGVyR3JpZDogc2VsZi5yZWdpc3RlckdyaWQsXHJcbiAgICByZWNyZWF0ZUNvbHVtbnM6IHNlbGYucmVjcmVhdGVDb2x1bW5zLFxyXG4gICAgcmVzY2FuTWVkaWFRdWVyaWVzOiBzZWxmLnJlc2Nhbk1lZGlhUXVlcmllcyxcclxuICAgIGluaXQ6IHNlbGYuaW5pdCxcclxuICBcclxuICAgIC8vIG1haW50YWlucyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIHVuZGVyc2NvcmUgc3R5bGUgbWV0aG9kIG5hbWVzXHJcbiAgICBhcHBlbmRfZWxlbWVudHM6IHNlbGYuYXBwZW5kRWxlbWVudHMsXHJcbiAgICBwcmVwZW5kX2VsZW1lbnRzOiBzZWxmLnByZXBlbmRFbGVtZW50cyxcclxuICAgIHJlZ2lzdGVyX2dyaWQ6IHNlbGYucmVnaXN0ZXJHcmlkLFxyXG4gICAgcmVjcmVhdGVfY29sdW1uczogc2VsZi5yZWNyZWF0ZUNvbHVtbnMsXHJcbiAgICByZXNjYW5fbWVkaWFfcXVlcmllczogc2VsZi5yZXNjYW5NZWRpYVF1ZXJpZXNcclxuICB9O1xyXG4gIFxyXG4gIH0pKHdpbmRvdywgd2luZG93LmRvY3VtZW50KTtcclxuICBcclxuICByZXR1cm4gc2FsdmF0dG9yZTtcclxuICB9KSk7XHJcblxyXG4gIC8vZXhwb3J0IGRlZmF1bHQgc2FsdmF0dG9yZSIsImltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9kYXRhL3Byb2R1Y3RzLmpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBsaW5rVG9BbGxDYXRlZ29yaWVzLFxyXG4gICAgYWRkQ2F0ZWdvcnlMaW5rcyxcclxuICAgIGxpbmtUb0FsbENhdGVnb3JpZXNNb2JpbGUsXHJcbiAgICBhZGRDYXRlZ29yeUxpbmtzTW9iaWxlLFxyXG4gICAgbWFwSm9pblByb2R1Y3RzLFxyXG4gICAgbWFwSm9pblByb2R1Y3RzT2ZDYXRlZ29yeSxcclxuICAgIGFkZFRvQ2FydEJ0bixcclxuICAgIG1ha2VCdXR0b25zV2l0aCxcclxuICAgIG1ha2VCdXR0b25zV2l0aF8yLFxyXG4gICAgYWRkVG9DYXJ0RGlzcGxheSxcclxufSBmcm9tICcuL2RvbS1zdHJpbmdzLmpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBlbXB0eUJhc2tldEluZm8sXHJcbiAgICBzaG9wcGluZ0RhdGEsXHJcbiAgICBhZGRUb1Nlc3Npb24sXHJcbiAgICBhZGRUb1Nob3BwaW5nQmFzY2tldCxcclxuICAgIGRlbGV0ZUZyb21TZXNzaW9uLFxyXG4gICAgaW5jcmVhc2VJdGVtLFxyXG4gICAgZGVjcmVhc2VJdGVtLFxyXG4gICAgbnVtYmVyT2ZJdGVtcyxcclxuICAgIGNhcnRUb3RhbCwgXHJcbn0gZnJvbSAnLi4vanMvY2FydC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlVXNlckluZm8gPSAoZWxlbWVudHMpID0+IHtcclxuICAgIGNvbnN0IHNob3BwaW5nQmFza2V0cyA9IFtcclxuICAgICAgICAnc2hvcHBpbmctYmFza2V0LWRlc2t0b3AnLFxyXG4gICAgICAgICdzaG9wcGluZy1iYXNrZXQtbW9iaWxlJ1xyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGRlc2t0b3BCYXNrZXRJc0hpZGRlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Nob3BwaW5nQmFza2V0c1swXX1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpO1xyXG4gICAgaWYoIWRlc2t0b3BCYXNrZXRJc0hpZGRlbikge1xyXG4gICAgICAgIGNvbnN0IHNob3BwaW5nQ2FydEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJ0XCIpO1xyXG4gICAgICAgIHNob3BwaW5nQ2FydEljb25zWzBdLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRoaXNTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l0ZW19YCk7XHJcbiAgICAgICAgdGhpc1NlbGVjdG9yLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVTaG9wcGluZ0NhcnRzID0gKHNob3BwaW5nQmFza2V0cykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHVzZXJJbmZvID0gW1xyXG4gICAgICAgICd1c2VyLWRyb3Bkb3duLWRlc2t0b3AnLFxyXG4gICAgICAgICd1c2VyLWRyb3Bkb3duLW1vYmlsZSdcclxuICAgIF1cclxuXHJcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3VzZXJJbmZvWzBdfWApLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgICBjb25zdCB1c2VySWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVzZXJcIik7XHJcbiAgICAgICAgdXNlckljb25zWzBdLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvcHBpbmdCYXNrZXRzLmZvckVhY2goIChiYXNrZXQpID0+IHtcclxuICAgICAgICBjb25zdCB0aGlzQmFza2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YmFza2V0fWApO1xyXG4gICAgICAgIHRoaXNCYXNrZXQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUNhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gbmV3IFNldChbLi4ucHJvZHVjdHMubWFwKCBpdGVtID0+IGl0ZW0uY2F0ZWdvcnkpXSk7XHJcbiAgICBjb25zdCBkZXNrdG9wTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yeS1saXN0IHVsJyk7XHJcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGUtbWVudVwiKTtcclxuXHJcbiAgICBsZXQgZGVza3RvcE1lbnVMaXN0ID0gIGxpbmtUb0FsbENhdGVnb3JpZXMocHJvZHVjdHMubGVuZ3RoKTtcclxuXHJcbiAgICBsZXQgbW9iaWxlTWVudUxpc3QgPSBsaW5rVG9BbGxDYXRlZ29yaWVzTW9iaWxlKHByb2R1Y3RzLmxlbmd0aCkgO1xyXG5cclxuICAgIGZvciAoIGxldCB2YWx1ZSBvZiBhbGxDYXRlZ29yaWVzLnZhbHVlcygpICkge1xyXG5cclxuICAgICAgICBkZXNrdG9wTWVudUxpc3QgKz0gYWRkQ2F0ZWdvcnlMaW5rcyhwcm9kdWN0cywgdmFsdWUpO1xyXG5cclxuICAgICAgICBtb2JpbGVNZW51TGlzdCArPSBhZGRDYXRlZ29yeUxpbmtzTW9iaWxlKHByb2R1Y3RzLCB2YWx1ZSkgXHJcbiAgICB9XHJcblxyXG4gICAgZGVza3RvcE1lbnUuaW5uZXJIVE1MID0gZGVza3RvcE1lbnVMaXN0O1xyXG4gICAgbW9iaWxlTWVudS5pbm5lckhUTUwgPSBtb2JpbGVNZW51TGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXlBbGxQcm9kdWN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsaXN0T2ZQcm9kdWN0cyA9IG1hcEpvaW5Qcm9kdWN0cyhwcm9kdWN0cylcclxuXHJcbiAgICBncmlkLmlubmVySFRNTCA9IGxpc3RPZlByb2R1Y3RzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheVByb2R1Y3RzT2ZDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICBjb25zdCB0aGlzQ2F0ZWdvcnkgPSBwcm9kdWN0cy5maWx0ZXIoIHByb2R1Y3QgPT4gcHJvZHVjdC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkgKVxyXG4gICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWQnKTtcclxuXHJcbiAgIGNvbnN0IGxpc3RPZlByb2R1Y3RzID0gbWFwSm9pblByb2R1Y3RzT2ZDYXRlZ29yeSh0aGlzQ2F0ZWdvcnkpO1xyXG5cclxuICAgZ3JpZC5pbm5lckhUTUwgPSBsaXN0T2ZQcm9kdWN0cztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluZGljYXRlQ3VycmVudENhdGVnb3J5ID0gKGVsZW1lbnQsIGhhc2gpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7ZWxlbWVudH0gbGlgKS5mb3JFYWNoKCBpdGVtID0+IGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJyApO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtbWVudSBhXCIpLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oaXRlbS5zdHlsZSwge2JhY2tncm91bmRDb2xvcjogJ3doaXRlJywgY29sb3I6ICcjNTU1J30pXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2VsZW1lbnR9IGFbaHJlZj1cIiNBbGxfcHJvZHVjdHNcIl1gKS5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZXNtb2tlJztcclxuXHJcbiAgICAgICAgY29uc3QgbW9iaWxlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbW9iaWxlLW1lbnUgYVtocmVmPVwiI0FsbF9wcm9kdWN0c1wiXWApO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24obW9iaWxlTGlua3Muc3R5bGUsIHtiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgY29sb3I6ICcjMzMzJ30pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZWxlbWVudH0gYVtocmVmPVwiJHtoYXNofVwiXWApLnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlc21va2UnO1xyXG5cclxuICAgICAgICBjb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNtb2JpbGUtbWVudSBhW2hyZWY9XCIke2hhc2h9XCJdYCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihtb2JpbGVMaW5rcy5zdHlsZSwge2JhY2tncm91bmRDb2xvcjogJyMzMzMnLCBjb2xvcjogJ3doaXRlU21va2UnfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkanVzdFdpZHRoT2ZFbGVtZW50cyA9IChjb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtjb250YWluZXJ9IGEgZW1gKTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aE9mSW5uZXJUZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGg7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7KGxlbmd0aE9mSW5uZXJUZXh0ICogOSl9cHhgO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFkZFRvQ2FydEJ0biA9IChlKSA9PiB7XHJcbiAgIGNvbnN0IHByb2R1Y3RJRCA9IGUudGFyZ2V0LmlkO1xyXG4gICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gcHJvZHVjdHMuZmlsdGVyKCBwcm9kdWN0ID0+IHByb2R1Y3QuaWQgPT09IHByb2R1Y3RJRCApWzBdLml0ZW1zO1xyXG4gICBjb25zdCBvcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGxldCBodG1sQ29udGVudCA9ICcnO1xyXG4gICBzZWxlY3RlZEl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgIGh0bWxDb250ZW50ICs9IGFkZFRvQ2FydEJ0bihpdGVtLCBwcm9kdWN0SUQpO1xyXG4gICB9KTtcclxuXHJcbiAgIG9wdGlvbnNEaXYuaW5uZXJIVE1MID0gaHRtbENvbnRlbnQ7XHJcbiAgIGUudGFyZ2V0LmJlZm9yZShvcHRpb25zRGl2KTtcclxuICAgZS50YXJnZXQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmNvbnN0IGtleUdlbiA9IChsZW4pID0+IHtcclxuICAgIGxldCBrZXkgPSAnJztcclxuICAgIGNvbnN0IGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XHJcbiAgICBjb25zdCBjaGFyc0xlbiA9IGNoYXJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuICAgICAga2V5ICs9IGNoYXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyc0xlbikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBsdXNNaW51c0J0biA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBjYXJ0SWQgPSBrZXlHZW4oOCk7XHJcbiAgICBjb25zdCBwcm9kdWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2R1Y3RJZDtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnByb2R1Y3ROYW1lO1xyXG4gICAgY29uc3QgbnVtYmVyID0gZS50YXJnZXQuZGF0YXNldC5wcm9kdWN0TnVtYmVyOyBcclxuICAgIGNvbnN0IHByaWNlID0gZS50YXJnZXQuZGF0YXNldC5wcm9kdWN0UHJpY2U7XHJcbiAgICBjb25zdCBxdWFudGl0eSA9IDE7XHJcbiAgICBjb25zdCBpbWFnZSA9IHByb2R1Y3RzLmZpbHRlciggaXRlbSA9PiBpdGVtLmlkID09PSBwcm9kdWN0SWQpWzBdLmxhcmdlSW1hZ2U7XHJcbiAgICBcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgICAgY2FydElkLFxyXG4gICAgICAgIHByb2R1Y3RJZCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIG51bWJlcixcclxuICAgICAgICBwcmljZSxcclxuICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICBpbWFnZSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXJ0UGx1c01pbnVzID0gbWFrZUJ1dHRvbnNXaXRoKG5ld0l0ZW0pO1xyXG5cclxuICAgIGNvbnN0IHByaWNlVGFnID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHJcbiAgICBwcmljZVRhZy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgY2FydFBsdXNNaW51cylcclxuICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xyXG4gICAgYWRkVG9TZXNzaW9uKG5ld0l0ZW0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgIHN5bmNTZXNzaW9uRGF0YVRvRG9tID0gKHNlc3Npb25EYXRhKSA9PiB7XHJcbiAgICBpZiAoc2Vzc2lvbkRhdGEubGVuZ3RoID09PSAwKSByZXR1cm5cclxuXHJcbiAgICBzZXNzaW9uRGF0YS5mb3JFYWNoKCBkYXRhID0+IHtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3RJZCwgbnVtYmVyIH0gPSBkYXRhO1xyXG5cclxuICAgICAgICBjb25zdCBzaG9wTm93QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YS5wcm9kdWN0SWR9YCk7XHJcblxyXG4gICAgICAgIGlmIChzaG9wTm93QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHNob3BOb3dCdXR0b24uY2xpY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRkLXRvLWNhcnQuJHtwcm9kdWN0SWR9W2RhdGEtcHJvZHVjdC1udW1iZXI9XCIke251bWJlcn1cIl1gKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkZC10by1jYXJ0LiR7cHJvZHVjdElkfVtkYXRhLXByb2R1Y3QtbnVtYmVyPVwiJHtudW1iZXJ9XCJdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlVGFnID0gYnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjYXJ0UGx1c01pbnVzID0gbWFrZUJ1dHRvbnNXaXRoXzIoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBwcmljZVRhZy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgY2FydFBsdXNNaW51cyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGFkZFRvU2hvcHBpbmdCYXNja2V0KGRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2FydFRvdGFsQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3RhbC1pbi1jYXJ0Jyk7XHJcbiAgICBjYXJ0VG90YWxDb250YWluZXJzLmZvckVhY2goIGNvbnRhaW5lciA9PiBjb250YWluZXIudGV4dENvbnRlbnQgPSBudW1iZXJPZkl0ZW1zKCkgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zSW5DYXJ0QXBwID0gKCkgPT4gc2hvcHBpbmdEYXRhKCk/LnJlZHVjZSggKHRvdGFsLCBjdXJyZW50KSA9PiB7XHJcbiAgICB0b3RhbCArPSBjdXJyZW50LnF1YW50aXR5O1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG59LCAwKSB8fCAwO1xyXG5cclxuY29uc3QgcmVjYWxjdWxhdGVTaG9wcGluZ0NhcnQgPSAoZGF0YSwgdmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHsgaWQsIHByaWNlLCBudW1iZXIsIHF1YW50aXR5IH0gPSBkYXRhO1xyXG4gICAgY29uc3QgcXVhbnRpdHlDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7aWR9LSR7bnVtYmVyfSAucXVhbnRpdHlgKTtcclxuICAgIGNvbnN0IGl0ZW1Ub3RhbENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtpZH0tJHtudW1iZXJ9IC5pdGVtLXRvdGFsYCk7XHJcblxyXG4gICAgcXVhbnRpdHlDb250YWluZXJzLmZvckVhY2goIGVsZW1lbnQgPT4gZWxlbWVudC50ZXh0Q29udGVudCA9IHF1YW50aXR5ICsgdmFsdWUgKTtcclxuICAgIGl0ZW1Ub3RhbENvbnRhaW5lcnMuZm9yRWFjaCggZWxlbWVudCA9PiBlbGVtZW50LnRleHRDb250ZW50ID0gKHF1YW50aXR5ICsgdmFsdWUpICogcHJpY2UgKTtcclxuXHJcbiAgICBjb25zdCBjYXJ0VG90YWxDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvdGFsLWluLWNhcnQnKTtcclxuICAgIGNhcnRUb3RhbENvbnRhaW5lcnMuZm9yRWFjaCggY29udGFpbmVyID0+IGNvbnRhaW5lci50ZXh0Q29udGVudCA9IG51bWJlck9mSXRlbXMoKSAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBsdXNJdGVtID0gKGUpID0+IHtcclxuXHJcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvZHVjdElkO1xyXG4gICAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucHJvZHVjdE51bWJlcik7XHJcbiAgICBjb25zdCBwcmljZSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnByb2R1Y3RQcmljZSk7XHJcbiAgICBjb25zdCBxdWFudGl0eSA9IE51bWJlcihlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50KTtcclxuXHJcbiAgICBpbmNyZWFzZUl0ZW0oaWQsIG51bWJlcik7XHJcblxyXG4gICAgZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IHF1YW50aXR5ICsgMTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge2lkLCBudW1iZXIsIHByaWNlLCBxdWFudGl0eX07XHJcbiAgICByZWNhbGN1bGF0ZVNob3BwaW5nQ2FydChkYXRhLCAxKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1pbnVzSXRlbSA9IChlKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNhcnRJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XHJcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvZHVjdElkO1xyXG4gICAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucHJvZHVjdE51bWJlcik7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuZGF0YXNldC5wcm9kdWN0TmFtZTtcclxuICAgIGNvbnN0IHByaWNlID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucHJvZHVjdFByaWNlKTtcclxuICAgIGNvbnN0IHF1YW50aXR5ID0gTnVtYmVyKGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgY29uc3QgIGRlbGV0ZUZyb21CYXNrZXRzID0gKGVsZW1lbnRzKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHByaWNlU3BhbiA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHJcbiAgICBjb25zdCBkaXNwbGF5QWRkVG9DYXJ0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFkZFRvQ2FydERpc3BsYXkoaWQsIG51bWJlciwgbmFtZSwgcHJpY2UpO1xyXG5cclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHByaWNlU3Bhbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgYnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG9wcGluZ0Jhc2tldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2FydC1pdGVtcy1tb2JpbGUsICNjYXJ0LWl0ZW1zLWRlc2t0b3AnKTtcclxuICAgIGNvbnN0IGluZGljYXRlRW1wdHlCYXNrZXRzID0gKHNob3BwaW5nQmFza2V0cykgPT4ge1xyXG5cclxuICAgICAgICBpZiAoc2hvcHBpbmdCYXNrZXRzWzBdLmNoaWxkcmVuLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzaG9wcGluZ0Jhc2tldHMuZm9yRWFjaCggYmFza2V0ID0+IHtcclxuICAgICAgICAgICAgYmFza2V0LmlubmVySFRNTCA9IGVtcHR5QmFza2V0SW5mbztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXJ0VG90YWxDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvdGFsLWluLWNhcnQnKTtcclxuICAgIGNvbnN0IG51bWJlck9mSXRlbXNJbkNhcnQgPSAoY2FydFRvdGFsQ29udGFpbmVycykgPT4ge1xyXG4gICAgICAgIGNhcnRUb3RhbENvbnRhaW5lcnMuZm9yRWFjaCggY29udGFpbmVyID0+IGNvbnRhaW5lci50ZXh0Q29udGVudCA9IG51bWJlck9mSXRlbXMoKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChxdWFudGl0eSA+IDEpIHtcclxuICAgICAgICBkZWNyZWFzZUl0ZW0oaWQsIG51bWJlcik7XHJcbiAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gcXVhbnRpdHkgLSAxO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge2NhcnRJZCwgaWQsIG51bWJlciwgcHJpY2UsIHF1YW50aXR5fTtcclxuICAgICAgICByZWNhbGN1bGF0ZVNob3BwaW5nQ2FydChkYXRhLCAtMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGV0ZUZyb21TZXNzaW9uKGNhcnRJZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7aWR9LSR7bnVtYmVyfWApO1xyXG4gICAgICAgIGRlbGV0ZUZyb21CYXNrZXRzKGl0ZW1zKTtcclxuXHJcbiAgICAgICAgbnVtYmVyT2ZJdGVtc0luQ2FydChjYXJ0VG90YWxDb250YWluZXJzKVxyXG5cclxuICAgICAgICBkaXNwbGF5QWRkVG9DYXJ0QnV0dG9uKCk7XHJcblxyXG4gICAgICAgIGluZGljYXRlRW1wdHlCYXNrZXRzKHNob3BwaW5nQmFza2V0cylcclxuICAgICAgICBcclxuICAgIH1cclxuICAgXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvbW9iaWxlLXRhYmxldC5jc3MnO1xyXG5pbXBvcnQgQXBwICBmcm9tICcuL2pzL2FwcC5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiBBcHAuZGlzcGxheSgpICk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9