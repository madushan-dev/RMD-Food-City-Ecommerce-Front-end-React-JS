module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apis/cart.js":
/*!**************************!*\
  !*** ./src/apis/cart.js ***!
  \**************************/
/*! exports provided: fetchCartData, fetchProductIdCartData, addCartData, removeCartData, updateCartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartData", function() { return fetchCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdCartData", function() { return fetchProductIdCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartData", function() { return addCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartData", function() { return removeCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartData", function() { return updateCartData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/cart";
const fetchCartData = cartId => {
  let endpoint = cartId ? _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}` : _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdCartData = pid => {
  let endpoint = `http://127.0.0.1:8000/api/cart?product=${pid}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addCartData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeCartData = cartId => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};
const updateCartData = (cartId, data) => {
  console.log(data);
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};

/***/ }),

/***/ "./src/apis/wishlist.js":
/*!******************************!*\
  !*** ./src/apis/wishlist.js ***!
  \******************************/
/*! exports provided: fetchWishlistData, fetchProductIdWishlistData, addWishlistData, removeWishlistData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishlistData", function() { return fetchWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdWishlistData", function() { return fetchProductIdWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWishlistData", function() { return addWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWishlistData", function() { return removeWishlistData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/wishlist";
const fetchWishlistData = () => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("id", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addWishlistData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${pid}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};

/***/ }),

/***/ "./src/common/axiosService.js":
/*!************************************!*\
  !*** ./src/common/axiosService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class AxiosService {
  constructor() {
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  patch(url, body) {
    return this.instance.patch(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AxiosService());

/***/ }),

/***/ "./src/common/defines.js":
/*!*******************************!*\
  !*** ./src/common/defines.js ***!
  \*******************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = "http://127.0.0.1:8000/api";

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: formatCurrency, renderParam, formatDate, removeDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderParam", function() { return renderParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDash", function() { return removeDash; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatCurrency = (price, locales = "us-US", currency = "LKR") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency
  }).format(price);
};
const renderParam = (paramName, paramValue) => {
  if (paramValue && paramValue !== "" && paramValue !== null) {
    return `LKR ${paramName}=${paramValue}`;
  }

  return "";
};
const formatDate = (date, inputFormat = "YYYY-MM-DD", outputFormat = "MMM DD, YYYY") => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, inputFormat).format(outputFormat);
};
const removeDash = str => {
  return str.replace(/-/g, " ");
};

/***/ }),

/***/ "./src/common/withReduxStore.js":
/*!**************************************!*\
  !*** ./src/common/withReduxStore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withReduxStor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
var _jsxFileName = "C:\\Users\\Madushan\\Desktop\\Level 3 Sem 1\\Group Project\\Development\\front-end\\src\\common\\withReduxStore.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

function withReduxStor(App) {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      }));
    }

  };
}

/***/ }),

/***/ "./src/components/other/FetchInitData.js":
/*!***********************************************!*\
  !*** ./src/components/other/FetchInitData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchInitData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");




function FetchInitData({
  children
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["fetchCartRequest"])());
    dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_3__["fetchWishListRequest"])());
  }, []);
  return children;
}

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/antd.less */ "./src/styles/antd.less");
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_antd_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_withReduxStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/withReduxStore */ "./src/common/withReduxStore.js");
/* harmony import */ var _components_other_FetchInitData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/other/FetchInitData */ "./src/components/other/FetchInitData.js");
var _jsxFileName = "C:\\Users\\Madushan\\Desktop\\Level 3 Sem 1\\Group Project\\Development\\front-end\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // import Loading from "../components/other/Loading";




const App = ({
  Component,
  pageProps,
  reduxStore
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: reduxStore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_components_other_FetchInitData__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_withReduxStore__WEBPACK_IMPORTED_MODULE_4__["default"])(App));

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/*! exports provided: SHOP, BLOG, SHOP_FILTER, CART, WISHLIST, COMPARE, BLOG_FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_FILTER", function() { return SHOP_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE", function() { return COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_FILTER", function() { return BLOG_FILTER; });
const SHOP = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAIL: "FETCH_PRODUCTS_FAIL",
  FETCH_SALE_PRODUCTS: "FETCH_SALE_PRODUCTS",
  FETCH_SALE_PRODUCTS_SUCCESS: "FETCH_SALE_PRODUCTS_SUCCESS",
  FETCH_SALE_PRODUCTS_FAIL: "FETCH_SALE_PRODUCTS_FAIL",
  FETCH_FEATURED_PRODUCTS: "FETCH_FEATURED_PRODUCTS",
  FETCH_FEATURED_PRODUCTS_SUCCESS: "FETCH_FEATURED_PRODUCTS_SUCCESS",
  FETCH_FEATURED_PRODUCTS_FAIL: "FETCH_FEATURED_PRODUCTS_FAIL",
  FETCH_BEST_SELLER_PRODUCTS: "FETCH_BEST_SELLER_PRODUCTS",
  FETCH_BEST_SELLER_PRODUCTS_SUCCESS: "FETCH_BEST_SELLER_PRODUCTS_SUCCESS",
  FETCH_BEST_SELLER_PRODUCTS_FAIL: "FETCH_BEST_SELLER_PRODUCTS_FAIL",
  FETCH_DALE_PRODUCTS: "FETCH_DALE_PRODUCTS",
  FETCH_DALE_PRODUCTS_SUCCESS: "FETCH_DALE_PRODUCTS_SUCCESS",
  FETCH_DALE_PRODUCTS_FAIL: "FETCH_DALE_PRODUCTS_FAIL",
  FETCH_PRODUCT_DETAIL: "FETCH_PRODUCT_DETAIL",
  FETCH_PRODUCT_DETAIL_SUCCESS: "FETCH_PRODUCT_DETAIL_SUCCESS",
  FETCH_PRODUCT_DETAIL_FAIL: "FETCH_PRODUCT_DETAIL_FAIL",
  FETCH_SEARCHED_PRODUCTS: "FETCH_SEARCHED_PRODUCTS",
  FETCH_SEARCHED_PRODUCTS_SUCCESS: "FETCH_SEARCHED_PRODUCTS_SUCCESS",
  FETCH_SEARCHED_PRODUCTS_FAIL: "FETCH_SEARCHED_PRODUCTS_FAIL"
};
const BLOG = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAIL: "FETCH_POSTS_FAIL",
  FETCH_POST_DETAIL: "FETCH_POST_DETAIL",
  FETCH_POST_DETAIL_SUCCESS: "FETCH_POST_DETAIL_SUCCESS",
  FETCH_POST_DETAIL_FAIL: "FETCH_POST_DETAIL_FAIL",
  FETCH_RECENT_POSTS: "FETCH_RECENT_POSTS",
  FETCH_RECENT_POSTS_SUCCESS: "FETCH_RECENT_POSTS_SUCCESS",
  FETCH_RECENT_POSTS_FAIL: "FETCH_RECENT_POSTS_FAIL"
};
const SHOP_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_SORT: "SET_SORT",
  SET_SHOW: "SET_SHOW",
  SET_VIEW: "SET_VIEW",
  SET_CATEGORY: "SET_CATEGORY",
  SET_COLOR: "SET_COLOR",
  SET_SIZE: "SET_SIZE",
  SET_TAG: "SET_TAG"
};
const CART = {
  FETCH_CART: "FETCH_CART",
  FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
  FETCH_CART_FAIL: "FETCH_CART_FAIL"
};
const WISHLIST = {
  FETCH_WISHLIST: "FETCH_WISHLIST",
  FETCH_WISHLIST_SUCCESS: "FETCH_WISHLIST_SUCCESS",
  FETCH_WISHLIST_FAIL: "FETCH_WISHLIST_FAIL"
};
const COMPARE = {
  ADD_TO_COMPARE: "ADD_TO_COMPARE",
  REMOVE_FROM_COMPARE: "REMOVE_FROM_COMPARE"
};
const BLOG_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_CATEGORY: "SET_CATEGORY",
  SET_TAG: "SET_TAG"
};

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: fetchCart, fetchCartSuccess, fetchCartFail, fetchCartRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCart", function() { return fetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartSuccess", function() { return fetchCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartFail", function() { return fetchCartFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartRequest", function() { return fetchCartRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/cart */ "./src/apis/cart.js");

 //Get cart data

const fetchCart = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART
});
const fetchCartSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS,
  payload: {
    data
  }
});
const fetchCartFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL,
  payload: {
    err
  }
});
const fetchCartRequest = () => {
  return dispatch => {
    dispatch(fetchCart());
    _apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchCartData"]().then(res => {
      dispatch(fetchCartSuccess(res.data));
    }).catch(err => {
      dispatch(fetchCartFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/wishlistActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
/*! exports provided: fetchWishListRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishListRequest", function() { return fetchWishListRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/wishlist */ "./src/apis/wishlist.js");

 //Get cart data

const fetchWishList = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST
});

const fetchWishListSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS,
  payload: {
    data
  }
});

const fetchWishListFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL,
  payload: {
    err
  }
});

const fetchWishListRequest = () => {
  return dispatch => {
    dispatch(fetchWishList());
    _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__["fetchWishlistData"]().then(res => {
      dispatch(fetchWishListSuccess(res.data));
    }).catch(err => {
      dispatch(fetchWishListFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/reducers/blogFilterReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/blogFilterReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogFilterReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  category: "",
  tag: ""
};
function blogFilterReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].RESET_FILTERS:
      return {
        category: "",
        tag: ""
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].SET_CATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.category
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].SET_TAG:
      return _objectSpread(_objectSpread({}, state), {}, {
        tag: action.tag
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/blogReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/blogReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  allPosts: {
    loading: true,
    data: [],
    error: false,
    count: 0
  },
  recentPosts: {
    loading: true,
    data: [],
    error: false
  },
  postDetail: {
    loading: true,
    data: [],
    error: false
  }
};
function blogReducer(state = initialState, action) {
  switch (action.type) {
    //All posts
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: _objectSpread(_objectSpread({}, state.allPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: _objectSpread(_objectSpread({}, state.allPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Recent posts

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: _objectSpread(_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: _objectSpread(_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Post detail

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: _objectSpread(_objectSpread({}, state.postDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: _objectSpread(_objectSpread({}, state.postDetail), {}, {
          loading: false,
          error: true
        })
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/cartReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/cartReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: true,
  data: [],
  error: false
};
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART:
      return {
        loading: true,
        data: [],
        error: false
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/compareReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/compareReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");

const initialState = [];
function compareReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].ADD_TO_COMPARE:
      if (!state.includes(action.payload.data)) {
        if (state.legth <= 3) {
          return [action.payload.data, ...state];
        } else {
          return [action.payload.data, ...state.slice(0, 2)];
        }
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].REMOVE_FROM_COMPARE:
      const compareItem = state.find(item => item.id === action.payload.productId);
      const compareItemIndex = compareItem && state.indexOf(compareItem);
      return [...state.slice(0, compareItemIndex), ...state.slice(compareItemIndex + 1)];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/rootReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/rootReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartReducer */ "./src/redux/reducers/cartReducer.js");
/* harmony import */ var _compareReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compareReducer */ "./src/redux/reducers/compareReducer.js");
/* harmony import */ var _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlistReducer */ "./src/redux/reducers/wishlistReducer.js");
/* harmony import */ var _shopReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopReducer */ "./src/redux/reducers/shopReducer.js");
/* harmony import */ var _shopFilterReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopFilterReducer */ "./src/redux/reducers/shopFilterReducer.js");
/* harmony import */ var _blogFilterReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogFilterReducer */ "./src/redux/reducers/blogFilterReducer.js");
/* harmony import */ var _blogReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogReducer */ "./src/redux/reducers/blogReducer.js");








const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  blogFilterReducer: _blogFilterReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  blogReducer: _blogReducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  shopReducer: _shopReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  shopFilterReducer: _shopFilterReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  compareReducer: _compareReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  cartReducer: _cartReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  wishlistReducer: _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/reducers/shopFilterReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/shopFilterReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shopFilterReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  sort: {},
  show: "10",
  view: "grid",
  category: "",
  color: "",
  size: "",
  tag: ""
};
function shopFilterReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].RESET_FILTERS:
      return {
        sort: {},
        show: "10",
        view: "grid",
        category: "",
        color: "",
        size: "",
        tag: ""
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SORT:
      return _objectSpread(_objectSpread({}, state), {}, {
        sort: action.sort
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SHOW:
      return _objectSpread(_objectSpread({}, state), {}, {
        show: action.show
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_VIEW:
      return _objectSpread(_objectSpread({}, state), {}, {
        view: action.view
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_CATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.category
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_COLOR:
      return _objectSpread(_objectSpread({}, state), {}, {
        color: action.color
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SIZE:
      return _objectSpread(_objectSpread({}, state), {}, {
        size: action.size
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_TAG:
      return _objectSpread(_objectSpread({}, state), {}, {
        tag: action.tag
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/shopReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/shopReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shopReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  products: {
    loading: true,
    data: [],
    error: false,
    count: 0
  },
  saleProducts: {
    loading: true,
    data: [],
    error: false
  },
  featuredProducts: {
    loading: true,
    data: [],
    error: false
  },
  bestSellerProducts: {
    loading: true,
    data: [],
    error: false
  },
  daleProducts: {
    loading: true,
    data: [],
    error: false
  },
  productDetail: {
    loading: true,
    data: [],
    error: false
  },
  searchedProducts: {
    loading: true,
    data: [],
    error: false
  }
};
function shopReducer(state = initialState, action) {
  switch (action.type) {
    //All products
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: {
          loading: true,
          data: [],
          error: false,
          count: 0
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: _objectSpread(_objectSpread({}, state.products), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        products: _objectSpread(_objectSpread({}, state.products), {}, {
          loading: false,
          error: true
        })
      });
    //Sale products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: _objectSpread(_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: _objectSpread(_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Featured products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: _objectSpread(_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: _objectSpread(_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Best seller products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: _objectSpread(_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: _objectSpread(_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Dale products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: _objectSpread(_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: _objectSpread(_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Product detail

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          error: true
        })
      });
    //Searched products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: _objectSpread(_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: _objectSpread(_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Defaul case

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/wishlistReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/wishlistReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WISHLISTReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: true,
  data: [],
  error: false
};
function WISHLISTReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST:
      return {
        loading: true,
        data: [],
        error: false
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/redux/reducers/rootReducer.js");




const createdStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
const initializeStore = (initialState = {}) => {
  return createdStore;
};

/***/ }),

/***/ "./src/styles/antd.less":
/*!******************************!*\
  !*** ./src/styles/antd.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2F4aW9zU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RlZmluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpdGhSZWR1eFN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0ZldGNoSW5pdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYmxvZ0ZpbHRlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2Jsb2dSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY29tcGFyZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9zaG9wRmlsdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2hvcFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3dpc2hsaXN0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbInVybCIsImZldGNoQ2FydERhdGEiLCJjYXJ0SWQiLCJlbmRwb2ludCIsIkFQSV9VUkwiLCJheGlvc1NlcnZpY2UiLCJnZXQiLCJmZXRjaFByb2R1Y3RJZENhcnREYXRhIiwicGlkIiwiYWRkQ2FydERhdGEiLCJkYXRhIiwicG9zdCIsInJlbW92ZUNhcnREYXRhIiwiZGVsZXRlIiwidXBkYXRlQ2FydERhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hXaXNobGlzdERhdGEiLCJmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YSIsInJlbmRlclBhcmFtIiwiYWRkV2lzaGxpc3REYXRhIiwicmVtb3ZlV2lzaGxpc3REYXRhIiwiQXhpb3NTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJoYW5kbGVTdWNjZXNzIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJib2R5IiwicGF0Y2giLCJmb3JtYXRDdXJyZW5jeSIsInByaWNlIiwibG9jYWxlcyIsImN1cnJlbmN5IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiZm9ybWF0IiwicGFyYW1OYW1lIiwicGFyYW1WYWx1ZSIsImZvcm1hdERhdGUiLCJkYXRlIiwiaW5wdXRGb3JtYXQiLCJvdXRwdXRGb3JtYXQiLCJtb21lbnQiLCJyZW1vdmVEYXNoIiwic3RyIiwicmVwbGFjZSIsImlzU2VydmVyIiwiX19ORVhUX1JFRFVYX1NUT1JFX18iLCJnZXRPckNyZWF0ZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiaW5pdGlhbGl6ZVN0b3JlIiwid2luZG93Iiwid2l0aFJlZHV4U3RvciIsIkFwcCIsIkFwcFdpdGhSZWR1eCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsInJlZHV4U3RvcmUiLCJjdHgiLCJhcHBQcm9wcyIsImluaXRpYWxSZWR1eFN0YXRlIiwiZ2V0U3RhdGUiLCJwcm9wcyIsInJlbmRlciIsIkZldGNoSW5pdERhdGEiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaENhcnRSZXF1ZXN0IiwiZmV0Y2hXaXNoTGlzdFJlcXVlc3QiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXhTdG9yZSIsIlNIT1AiLCJGRVRDSF9QUk9EVUNUUyIsIkZFVENIX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfU0FMRV9QUk9EVUNUUyIsIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUyIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfREFMRV9QUk9EVUNUUyIsIkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTCIsIkZFVENIX1BST0RVQ1RfREVUQUlMIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUyIsIkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUwiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUyIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMIiwiQkxPRyIsIkZFVENIX1BPU1RTIiwiRkVUQ0hfUE9TVFNfU1VDQ0VTUyIsIkZFVENIX1BPU1RTX0ZBSUwiLCJGRVRDSF9QT1NUX0RFVEFJTCIsIkZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1MiLCJGRVRDSF9QT1NUX0RFVEFJTF9GQUlMIiwiRkVUQ0hfUkVDRU5UX1BPU1RTIiwiRkVUQ0hfUkVDRU5UX1BPU1RTX1NVQ0NFU1MiLCJGRVRDSF9SRUNFTlRfUE9TVFNfRkFJTCIsIlNIT1BfRklMVEVSIiwiUkVTRVRfRklMVEVSUyIsIlNFVF9TT1JUIiwiU0VUX1NIT1ciLCJTRVRfVklFVyIsIlNFVF9DQVRFR09SWSIsIlNFVF9DT0xPUiIsIlNFVF9TSVpFIiwiU0VUX1RBRyIsIkNBUlQiLCJGRVRDSF9DQVJUIiwiRkVUQ0hfQ0FSVF9TVUNDRVNTIiwiRkVUQ0hfQ0FSVF9GQUlMIiwiV0lTSExJU1QiLCJGRVRDSF9XSVNITElTVCIsIkZFVENIX1dJU0hMSVNUX1NVQ0NFU1MiLCJGRVRDSF9XSVNITElTVF9GQUlMIiwiQ09NUEFSRSIsIkFERF9UT19DT01QQVJFIiwiUkVNT1ZFX0ZST01fQ09NUEFSRSIsIkJMT0dfRklMVEVSIiwiZmV0Y2hDYXJ0IiwidHlwZSIsImZldGNoQ2FydFN1Y2Nlc3MiLCJwYXlsb2FkIiwiZmV0Y2hDYXJ0RmFpbCIsImVyciIsImNhcnRBcGlzIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZmV0Y2hXaXNoTGlzdCIsImZldGNoV2lzaExpc3RTdWNjZXNzIiwiZmV0Y2hXaXNoTGlzdEZhaWwiLCJ3aXNobGlzdEFwaXMiLCJjYXRlZ29yeSIsInRhZyIsImJsb2dGaWx0ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJhbGxQb3N0cyIsImxvYWRpbmciLCJjb3VudCIsInJlY2VudFBvc3RzIiwicG9zdERldGFpbCIsImJsb2dSZWR1Y2VyIiwicG9zdENvdW50IiwiY2FydFJlZHVjZXIiLCJjb21wYXJlUmVkdWNlciIsImluY2x1ZGVzIiwibGVndGgiLCJzbGljZSIsImNvbXBhcmVJdGVtIiwiZmluZCIsIml0ZW0iLCJpZCIsInByb2R1Y3RJZCIsImNvbXBhcmVJdGVtSW5kZXgiLCJpbmRleE9mIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJzaG9wUmVkdWNlciIsInNob3BGaWx0ZXJSZWR1Y2VyIiwid2lzaGxpc3RSZWR1Y2VyIiwic29ydCIsInNob3ciLCJ2aWV3IiwiY29sb3IiLCJzaXplIiwicHJvZHVjdHMiLCJzYWxlUHJvZHVjdHMiLCJmZWF0dXJlZFByb2R1Y3RzIiwiYmVzdFNlbGxlclByb2R1Y3RzIiwiZGFsZVByb2R1Y3RzIiwicHJvZHVjdERldGFpbCIsInNlYXJjaGVkUHJvZHVjdHMiLCJwcm9kdWN0Q291bnQiLCJXSVNITElTVFJlZHVjZXIiLCJjcmVhdGVkU3RvcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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Q0FGVyxDQUFoQztBQUtPLE1BQU0zSSxlQUFlLEdBQUcsQ0FBQ0QsWUFBWSxHQUFHLEVBQWhCLEtBQXVCO0FBQ3BELFNBQU93SSxZQUFQO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XG5cbmNvbnN0IHVybCA9IFwiL2NhcnRcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydERhdGEgPSAoY2FydElkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IGNhcnRJZCA/IEFQSV9VUkwgKyB1cmwgKyBgLyR7Y2FydElkfWAgOiBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YSA9IChwaWQpID0+IHtcblxuXG4gIGxldCBlbmRwb2ludCA9IGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2NhcnQ/cHJvZHVjdD0ke3BpZH1gO1xuXG4gIFxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ2FydERhdGEgPSAoZGF0YSkgPT4ge1xuXG5cbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDYXJ0RGF0YSA9IChjYXJ0SWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5kZWxldGUoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhcnREYXRhID0gKGNhcnRJZCwgZGF0YSkgPT4ge1xuIFxuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wb3N0KGVuZHBvaW50LCBkYXRhKTtcblxufTtcbiIsImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2RlZmluZXNcIjtcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xuXG5jb25zdCB1cmwgPSBcIi93aXNobGlzdFwiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hXaXNobGlzdERhdGEgPSAoKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YSA9IChwaWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJpZFwiLCBwaWQpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkV2lzaGxpc3REYXRhID0gKGRhdGEpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVXaXNobGlzdERhdGEgPSAocGlkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBgLyR7cGlkfWA7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZGVsZXRlKGVuZHBvaW50KTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNsYXNzIEF4aW9zU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKCk7XG4gICAgaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSh0aGlzLmhhbmRsZVN1Y2Nlc3MsIHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgfVxuXG4gIGhhbmRsZVN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBoYW5kbGVFcnJvcihlcnJvcikge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cblxuICBnZXQodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0KHVybCk7XG4gIH1cblxuICBwb3N0KHVybCwgYm9keSkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnBvc3QodXJsLCBib2R5KTtcbiAgfVxuXG4gIHBhdGNoKHVybCwgYm9keSkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnBhdGNoKHVybCwgYm9keSk7XG4gIH1cblxuICBkZWxldGUodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZGVsZXRlKHVybCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEF4aW9zU2VydmljZSgpO1xuIiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGlcIjtcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAocHJpY2UsIGxvY2FsZXMgPSBcInVzLVVTXCIsIGN1cnJlbmN5ID0gXCJMS1JcIikgPT4ge1xuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIHtcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgIGN1cnJlbmN5OiBjdXJyZW5jeSxcbiAgfSkuZm9ybWF0KHByaWNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQYXJhbSA9IChwYXJhbU5hbWUsIHBhcmFtVmFsdWUpID0+IHtcbiAgaWYgKHBhcmFtVmFsdWUgJiYgcGFyYW1WYWx1ZSAhPT0gXCJcIiAmJiBwYXJhbVZhbHVlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGBMS1IgJHtwYXJhbU5hbWV9PSR7cGFyYW1WYWx1ZX1gO1xuICB9XG4gIHJldHVybiBcIlwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoXG4gIGRhdGUsXG4gIGlucHV0Rm9ybWF0ID0gXCJZWVlZLU1NLUREXCIsXG4gIG91dHB1dEZvcm1hdCA9IFwiTU1NIERELCBZWVlZXCJcbikgPT4ge1xuICByZXR1cm4gbW9tZW50KGRhdGUsIGlucHV0Rm9ybWF0KS5mb3JtYXQob3V0cHV0Rm9ybWF0KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVEYXNoID0gKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLy0vZywgXCIgXCIpO1xufTtcbiIsImltcG9ydCB7IGluaXRpYWxpemVTdG9yZSB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XG5jb25zdCBfX05FWFRfUkVEVVhfU1RPUkVfXyA9IFwiX19ORVhUX1JFRFVYX1NUT1JFX19cIjtcblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgLy8gQWx3YXlzIG1ha2UgYSBuZXcgc3RvcmUgaWYgc2VydmVyLCBvdGhlcndpc2Ugc3RhdGUgaXMgc2hhcmVkIGJldHdlZW4gcmVxdWVzdHNcbiAgaWYgKGlzU2VydmVyKSB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHN0b3JlIGlmIHVuYXZhaWxhYmxlIG9uIHRoZSBjbGllbnQgYW5kIHNldCBpdCBvbiB0aGUgd2luZG93IG9iamVjdFxuICBpZiAoIXdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10pIHtcbiAgICB3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dID0gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSZWR1eFN0b3IoQXBwKSB7XG4gIHJldHVybiBjbGFzcyBBcHBXaXRoUmVkdXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCkge1xuICAgICAgLy8gR2V0IG9yIENyZWF0ZSB0aGUgc3RvcmUgd2l0aCBgdW5kZWZpbmVkYCBhcyBpbml0aWFsU3RhdGVcbiAgICAgIC8vIFRoaXMgYWxsb3dzIHlvdSB0byBzZXQgYSBjdXN0b20gZGVmYXVsdCBpbml0aWFsU3RhdGVcbiAgICAgIGNvbnN0IHJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKCk7XG5cbiAgICAgIC8vIFByb3ZpZGUgdGhlIHN0b3JlIHRvIGdldEluaXRpYWxQcm9wcyBvZiBwYWdlc1xuICAgICAgYXBwQ29udGV4dC5jdHgucmVkdXhTdG9yZSA9IHJlZHV4U3RvcmU7XG5cbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9O1xuICAgICAgaWYgKHR5cGVvZiBBcHAuZ2V0SW5pdGlhbFByb3BzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hcHBQcm9wcyxcbiAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMucmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUocHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8QXBwIHsuLi50aGlzLnByb3BzfSByZWR1eFN0b3JlPXt0aGlzLnJlZHV4U3RvcmV9IC8+O1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCB7IGZldGNoQ2FydFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xuaW1wb3J0IHsgZmV0Y2hXaXNoTGlzdFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy93aXNobGlzdEFjdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmV0Y2hJbml0RGF0YSh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoQ2FydFJlcXVlc3QoKSk7XG4gICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdFJlcXVlc3QoKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2FudGQubGVzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5zY3NzXCI7XG4vLyBpbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9vdGhlci9Mb2FkaW5nXCI7XG5pbXBvcnQgd2l0aFJlZHV4U3RvcmUgZnJvbSBcIi4uL2NvbW1vbi93aXRoUmVkdXhTdG9yZVwiO1xuaW1wb3J0IEZldGNoSW5pdERhdGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvb3RoZXIvRmV0Y2hJbml0RGF0YVwiO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcmVkdXhTdG9yZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlfT5cbiAgICAgIDxGZXRjaEluaXREYXRhPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0ZldGNoSW5pdERhdGE+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eFN0b3JlKEFwcCk7XG4iLCJleHBvcnQgY29uc3QgU0hPUCA9IHtcbiAgRkVUQ0hfUFJPRFVDVFM6IFwiRkVUQ0hfUFJPRFVDVFNcIixcbiAgRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9TQUxFX1BST0RVQ1RTOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNcIixcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTXCIsXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFM6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNcIixcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9EQUxFX1BST0RVQ1RTOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNcIixcbiAgRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMXCIsXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1M6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTU1wiLFxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUxcIixcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFM6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNcIixcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IEJMT0cgPSB7XG4gIEZFVENIX1BPU1RTOiBcIkZFVENIX1BPU1RTXCIsXG4gIEZFVENIX1BPU1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUE9TVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9QT1NUU19GQUlMOiBcIkZFVENIX1BPU1RTX0ZBSUxcIixcbiAgRkVUQ0hfUE9TVF9ERVRBSUw6IFwiRkVUQ0hfUE9TVF9ERVRBSUxcIixcbiAgRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUzogXCJGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTXCIsXG4gIEZFVENIX1BPU1RfREVUQUlMX0ZBSUw6IFwiRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTFwiLFxuICBGRVRDSF9SRUNFTlRfUE9TVFM6IFwiRkVUQ0hfUkVDRU5UX1BPU1RTXCIsXG4gIEZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTXCIsXG4gIEZFVENIX1JFQ0VOVF9QT1NUU19GQUlMOiBcIkZFVENIX1JFQ0VOVF9QT1NUU19GQUlMXCIsXG59O1xuXG5leHBvcnQgY29uc3QgU0hPUF9GSUxURVIgPSB7XG4gIFJFU0VUX0ZJTFRFUlM6IFwiUkVTRVRfRklMVEVSU1wiLFxuICBTRVRfU09SVDogXCJTRVRfU09SVFwiLFxuICBTRVRfU0hPVzogXCJTRVRfU0hPV1wiLFxuICBTRVRfVklFVzogXCJTRVRfVklFV1wiLFxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXG4gIFNFVF9DT0xPUjogXCJTRVRfQ09MT1JcIixcbiAgU0VUX1NJWkU6IFwiU0VUX1NJWkVcIixcbiAgU0VUX1RBRzogXCJTRVRfVEFHXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQ0FSVCA9IHtcbiAgRkVUQ0hfQ0FSVDogXCJGRVRDSF9DQVJUXCIsXG4gIEZFVENIX0NBUlRfU1VDQ0VTUzogXCJGRVRDSF9DQVJUX1NVQ0NFU1NcIixcbiAgRkVUQ0hfQ0FSVF9GQUlMOiBcIkZFVENIX0NBUlRfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFdJU0hMSVNUID0ge1xuICBGRVRDSF9XSVNITElTVDogXCJGRVRDSF9XSVNITElTVFwiLFxuICBGRVRDSF9XSVNITElTVF9TVUNDRVNTOiBcIkZFVENIX1dJU0hMSVNUX1NVQ0NFU1NcIixcbiAgRkVUQ0hfV0lTSExJU1RfRkFJTDogXCJGRVRDSF9XSVNITElTVF9GQUlMXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQ09NUEFSRSA9IHtcbiAgQUREX1RPX0NPTVBBUkU6IFwiQUREX1RPX0NPTVBBUkVcIixcbiAgUkVNT1ZFX0ZST01fQ09NUEFSRTogXCJSRU1PVkVfRlJPTV9DT01QQVJFXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQkxPR19GSUxURVIgPSB7XG4gIFJFU0VUX0ZJTFRFUlM6IFwiUkVTRVRfRklMVEVSU1wiLFxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXG4gIFNFVF9UQUc6IFwiU0VUX1RBR1wiLFxufTtcbiIsImltcG9ydCB7IENBUlQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuaW1wb3J0ICogYXMgY2FydEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvY2FydFwiO1xuXG4vL0dldCBjYXJ0IGRhdGFcbmV4cG9ydCBjb25zdCBmZXRjaENhcnQgPSAoKSA9PiAoe1xuICB0eXBlOiBDQVJULkZFVENIX0NBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJUX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJUX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFJlcXVlc3QgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaENhcnQoKSk7XG4gICAgY2FydEFwaXNcbiAgICAgIC5mZXRjaENhcnREYXRhKClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0U3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydEZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBXSVNITElTVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5pbXBvcnQgKiBhcyB3aXNobGlzdEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvd2lzaGxpc3RcIjtcblxuLy9HZXQgY2FydCBkYXRhXG5jb25zdCBmZXRjaFdpc2hMaXN0ID0gKCkgPT4gKHtcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1QsXG59KTtcblxuY29uc3QgZmV0Y2hXaXNoTGlzdFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuY29uc3QgZmV0Y2hXaXNoTGlzdEZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBXSVNITElTVC5GRVRDSF9XSVNITElTVF9GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdpc2hMaXN0UmVxdWVzdCA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3QoKSk7XG4gICAgd2lzaGxpc3RBcGlzXG4gICAgICAuZmV0Y2hXaXNobGlzdERhdGEoKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0U3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgQkxPR19GSUxURVIgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjYXRlZ29yeTogXCJcIixcbiAgdGFnOiBcIlwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmxvZ0ZpbHRlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBCTE9HX0ZJTFRFUi5SRVNFVF9GSUxURVJTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXG4gICAgICAgIHRhZzogXCJcIixcbiAgICAgIH07XG4gICAgY2FzZSBCTE9HX0ZJTFRFUi5TRVRfQ0FURUdPUlk6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2F0ZWdvcnk6IGFjdGlvbi5jYXRlZ29yeSxcbiAgICAgIH07XG4gICAgY2FzZSBCTE9HX0ZJTFRFUi5TRVRfVEFHOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRhZzogYWN0aW9uLnRhZyxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQkxPRyB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGFsbFBvc3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UsIGNvdW50OiAwIH0sXG4gIHJlY2VudFBvc3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgcG9zdERldGFpbDogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBibG9nUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAvL0FsbCBwb3N0c1xuICAgIGNhc2UgQkxPRy5GRVRDSF9QT1NUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhbGxQb3N0czoge1xuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUE9TVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhbGxQb3N0czoge1xuICAgICAgICAgIC4uLnN0YXRlLmFsbFBvc3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgICAgY291bnQ6IGFjdGlvbi5wYXlsb2FkLnBvc3RDb3VudCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RTX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFsbFBvc3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuYWxsUG9zdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIC8vUmVjZW50IHBvc3RzXG4gICAgY2FzZSBCTE9HLkZFVENIX1JFQ0VOVF9QT1NUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWNlbnRQb3N0czoge1xuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUkVDRU5UX1BPU1RTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVjZW50UG9zdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5yZWNlbnRQb3N0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICAgIGNvdW50OiBhY3Rpb24ucGF5bG9hZC5wb3N0Q291bnQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgQkxPRy5GRVRDSF9SRUNFTlRfUE9TVFNfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVjZW50UG9zdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5yZWNlbnRQb3N0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgLy9Qb3N0IGRldGFpbFxuICAgIGNhc2UgQkxPRy5GRVRDSF9QT1NUX0RFVEFJTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3N0RGV0YWlsOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgICAgIH07XG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9zdERldGFpbDoge1xuICAgICAgICAgIC4uLnN0YXRlLnBvc3REZXRhaWwsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RfREVUQUlMX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvc3REZXRhaWw6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5wb3N0RGV0YWlsLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDQVJUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJ0UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENBUlQuRkVUQ0hfQ0FSVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGRhdGE6IFtdLFxuICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgQ0FSVC5GRVRDSF9DQVJUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICB9O1xuICAgIGNhc2UgQ0FSVC5GRVRDSF9DQVJUX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ09NUEFSRSB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDT01QQVJFLkFERF9UT19DT01QQVJFOlxuICAgICAgaWYgKCFzdGF0ZS5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC5kYXRhKSkge1xuICAgICAgICBpZiAoc3RhdGUubGVndGggPD0gMykge1xuICAgICAgICAgIHJldHVybiBbYWN0aW9uLnBheWxvYWQuZGF0YSwgLi4uc3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbYWN0aW9uLnBheWxvYWQuZGF0YSwgLi4uc3RhdGUuc2xpY2UoMCwgMildO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgY2FzZSBDT01QQVJFLlJFTU9WRV9GUk9NX0NPTVBBUkU6XG4gICAgICBjb25zdCBjb21wYXJlSXRlbSA9IHN0YXRlLmZpbmQoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0SWRcbiAgICAgICk7XG4gICAgICBjb25zdCBjb21wYXJlSXRlbUluZGV4ID0gY29tcGFyZUl0ZW0gJiYgc3RhdGUuaW5kZXhPZihjb21wYXJlSXRlbSk7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZS5zbGljZSgwLCBjb21wYXJlSXRlbUluZGV4KSxcbiAgICAgICAgLi4uc3RhdGUuc2xpY2UoY29tcGFyZUl0ZW1JbmRleCArIDEpLFxuICAgICAgXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gXCIuL2NhcnRSZWR1Y2VyXCI7XG5pbXBvcnQgY29tcGFyZVJlZHVjZXIgZnJvbSBcIi4vY29tcGFyZVJlZHVjZXJcIjtcbmltcG9ydCB3aXNobGlzdFJlZHVjZXIgZnJvbSBcIi4vd2lzaGxpc3RSZWR1Y2VyXCI7XG5pbXBvcnQgc2hvcFJlZHVjZXIgZnJvbSBcIi4vc2hvcFJlZHVjZXJcIjtcbmltcG9ydCBzaG9wRmlsdGVyUmVkdWNlciBmcm9tIFwiLi9zaG9wRmlsdGVyUmVkdWNlclwiO1xuaW1wb3J0IGJsb2dGaWx0ZXJSZWR1Y2VyIGZyb20gXCIuL2Jsb2dGaWx0ZXJSZWR1Y2VyXCI7XG5pbXBvcnQgYmxvZ1JlZHVjZXIgZnJvbSBcIi4vYmxvZ1JlZHVjZXJcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBibG9nRmlsdGVyUmVkdWNlcixcbiAgYmxvZ1JlZHVjZXIsXG4gIHNob3BSZWR1Y2VyLFxuICBzaG9wRmlsdGVyUmVkdWNlcixcbiAgY29tcGFyZVJlZHVjZXIsXG4gIGNhcnRSZWR1Y2VyLFxuICB3aXNobGlzdFJlZHVjZXIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBTSE9QX0ZJTFRFUiB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNvcnQ6IHt9LFxuICBzaG93OiBcIjEwXCIsXG4gIHZpZXc6IFwiZ3JpZFwiLFxuICBjYXRlZ29yeTogXCJcIixcbiAgY29sb3I6IFwiXCIsXG4gIHNpemU6IFwiXCIsXG4gIHRhZzogXCJcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BGaWx0ZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0hPUF9GSUxURVIuUkVTRVRfRklMVEVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNvcnQ6IHt9LFxuICAgICAgICBzaG93OiBcIjEwXCIsXG4gICAgICAgIHZpZXc6IFwiZ3JpZFwiLFxuICAgICAgICBjYXRlZ29yeTogXCJcIixcbiAgICAgICAgY29sb3I6IFwiXCIsXG4gICAgICAgIHNpemU6IFwiXCIsXG4gICAgICAgIHRhZzogXCJcIixcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfU09SVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzb3J0OiBhY3Rpb24uc29ydCxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfU0hPVzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaG93OiBhY3Rpb24uc2hvdyxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfVklFVzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aWV3OiBhY3Rpb24udmlldyxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfQ0FURUdPUlk6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2F0ZWdvcnk6IGFjdGlvbi5jYXRlZ29yeSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfQ09MT1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29sb3I6IGFjdGlvbi5jb2xvcixcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfU0laRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaXplOiBhY3Rpb24uc2l6ZSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfVEFHOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRhZzogYWN0aW9uLnRhZyxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU0hPUCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UsIGNvdW50OiAwIH0sXG4gIHNhbGVQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gIGZlYXR1cmVkUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICBiZXN0U2VsbGVyUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICBkYWxlUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICBwcm9kdWN0RGV0YWlsOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgc2VhcmNoZWRQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAvL0FsbCBwcm9kdWN0c1xuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlLCBjb3VudDogMCB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgICAgY291bnQ6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RDb3VudCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX1BST0RVQ1RTX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIC8vU2FsZSBwcm9kdWN0c1xuICAgIGNhc2UgU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZVByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuc2FsZVByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVQcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLnNhbGVQcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgLy9GZWF0dXJlZCBwcm9kdWN0c1xuICAgIGNhc2UgU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmZWF0dXJlZFByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmVhdHVyZWRQcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLmZlYXR1cmVkUHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZlYXR1cmVkUHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5mZWF0dXJlZFByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAvL0Jlc3Qgc2VsbGVyIHByb2R1Y3RzXG4gICAgY2FzZSBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJlc3RTZWxsZXJQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJlc3RTZWxsZXJQcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLmJlc3RTZWxsZXJQcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYmVzdFNlbGxlclByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuYmVzdFNlbGxlclByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAvL0RhbGUgcHJvZHVjdHNcbiAgICBjYXNlIFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYWxlUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRhbGVQcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLmRhbGVQcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYWxlUHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5kYWxlUHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIC8vUHJvZHVjdCBkZXRhaWxcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVF9ERVRBSUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdERldGFpbDogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdERldGFpbCxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgLy9TZWFyY2hlZCBwcm9kdWN0c1xuICAgIGNhc2UgU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2hlZFByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoZWRQcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLnNlYXJjaGVkUHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgICBjb3VudDogYWN0aW9uLnBheWxvYWQucHJvZHVjdENvdW50LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoZWRQcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLnNlYXJjaGVkUHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIC8vRGVmYXVsIGNhc2VcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBXSVNITElTVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV0lTSExJU1RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgV0lTSExJU1QuRkVUQ0hfV0lTSExJU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICB9O1xuICAgIGNhc2UgV0lTSExJU1QuRkVUQ0hfV0lTSExJU1RfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyXCI7XG5cbmNvbnN0IGNyZWF0ZWRTdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByb290UmVkdWNlcixcbiAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKVxuKTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChpbml0aWFsU3RhdGUgPSB7fSkgPT4ge1xuICByZXR1cm4gY3JlYXRlZFN0b3JlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==