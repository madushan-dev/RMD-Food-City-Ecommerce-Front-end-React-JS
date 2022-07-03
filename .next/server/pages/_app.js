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
/*! exports provided: fetchCartData, fetchProductIdCartData, addCartData, removeCartData, updateCartData, addProductReviews, addMessage, handleLogin, handleRegister, handleProfileEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartData", function() { return fetchCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdCartData", function() { return fetchProductIdCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartData", function() { return addCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartData", function() { return removeCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartData", function() { return updateCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductReviews", function() { return addProductReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMessage", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleLogin", function() { return handleLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRegister", function() { return handleRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleProfileEdit", function() { return handleProfileEdit; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.post['Content-Type'] = 'application/json';
axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.post['Accept'] = 'application/json';
axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.withCredentials = true;
const url = "/cart";
const fetchCartData = loggeduser => {
  let cus_id = localStorage.getItem('cus_id');
  let cus_data = {
    id: cus_id
  };
  let endpoint = 'http://127.0.0.1:8000/api/allcart';
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, cus_data);
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
  let cus_id = localStorage.getItem('cus_id');
  let cus_data = {
    cus_id: cus_id
  };
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, cus_data);
};
const updateCartData = (cartId, data) => {
  let cus_id = localStorage.getItem('cus_id');
  data.cus_id = cus_id;
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const addProductReviews = values => {
  let endpoint = `http://127.0.0.1:8000/api/reviews`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, values);
};
const addMessage = values => {
  let endpoint = `http://127.0.0.1:8000/api/message`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, values);
};
const handleLogin = values => {
  let endpoint = `http://127.0.0.1:8000/api/auth/login`;
  console.log(values);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, values);
};
const handleRegister = values => {
  let endpoint = `http://127.0.0.1:8000/api/auth/register`;
  return axios__WEBPACK_IMPORTED_MODULE_3___default()({
    method: "post",
    url: endpoint,
    data: values,
    headers: {
      "Content-Type": "multipart/form-data",
      "boundary": "----WebKitFormBoundaryyrV7KO0BoCBuDbTL"
    }
  });
};
const handleProfileEdit = values => {
  let endpoint = `http://127.0.0.1:8000/api/auth/customeredit`;
  return axios__WEBPACK_IMPORTED_MODULE_3___default()({
    method: "post",
    url: endpoint,
    data: values,
    headers: {
      "Content-Type": "multipart/form-data",
      "boundary": "----WebKitFormBoundaryyrV7KO0BoCBuDbTL"
    }
  });
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
const fetchCartRequest = loggeduser => {
  return dispatch => {
    _apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchCartData"](loggeduser).then(res => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2F4aW9zU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RlZmluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpdGhSZWR1eFN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0ZldGNoSW5pdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYmxvZ0ZpbHRlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2Jsb2dSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY29tcGFyZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9zaG9wRmlsdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2hvcFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3dpc2hsaXN0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInVybCIsImZldGNoQ2FydERhdGEiLCJsb2dnZWR1c2VyIiwiY3VzX2lkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1c19kYXRhIiwiaWQiLCJlbmRwb2ludCIsImF4aW9zU2VydmljZSIsImZldGNoUHJvZHVjdElkQ2FydERhdGEiLCJwaWQiLCJnZXQiLCJhZGRDYXJ0RGF0YSIsImRhdGEiLCJBUElfVVJMIiwicmVtb3ZlQ2FydERhdGEiLCJjYXJ0SWQiLCJ1cGRhdGVDYXJ0RGF0YSIsImFkZFByb2R1Y3RSZXZpZXdzIiwidmFsdWVzIiwiYWRkTWVzc2FnZSIsImhhbmRsZUxvZ2luIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVJlZ2lzdGVyIiwibWV0aG9kIiwiaGFuZGxlUHJvZmlsZUVkaXQiLCJmZXRjaFdpc2hsaXN0RGF0YSIsImZldGNoUHJvZHVjdElkV2lzaGxpc3REYXRhIiwicmVuZGVyUGFyYW0iLCJhZGRXaXNobGlzdERhdGEiLCJyZW1vdmVXaXNobGlzdERhdGEiLCJkZWxldGUiLCJBeGlvc1NlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImluc3RhbmNlIiwiY3JlYXRlIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJoYW5kbGVTdWNjZXNzIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJib2R5IiwicGF0Y2giLCJmb3JtYXRDdXJyZW5jeSIsInByaWNlIiwibG9jYWxlcyIsImN1cnJlbmN5IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiZm9ybWF0IiwicGFyYW1OYW1lIiwicGFyYW1WYWx1ZSIsImZvcm1hdERhdGUiLCJkYXRlIiwiaW5wdXRGb3JtYXQiLCJvdXRwdXRGb3JtYXQiLCJtb21lbnQiLCJyZW1vdmVEYXNoIiwic3RyIiwicmVwbGFjZSIsImlzU2VydmVyIiwiX19ORVhUX1JFRFVYX1NUT1JFX18iLCJnZXRPckNyZWF0ZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiaW5pdGlhbGl6ZVN0b3JlIiwid2luZG93Iiwid2l0aFJlZHV4U3RvciIsIkFwcCIsIkFwcFdpdGhSZWR1eCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsInJlZHV4U3RvcmUiLCJjdHgiLCJhcHBQcm9wcyIsImluaXRpYWxSZWR1eFN0YXRlIiwiZ2V0U3RhdGUiLCJwcm9wcyIsInJlbmRlciIsIkZldGNoSW5pdERhdGEiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaENhcnRSZXF1ZXN0IiwiZmV0Y2hXaXNoTGlzdFJlcXVlc3QiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXhTdG9yZSIsIlNIT1AiLCJGRVRDSF9QUk9EVUNUUyIsIkZFVENIX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfU0FMRV9QUk9EVUNUUyIsIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUyIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfREFMRV9QUk9EVUNUUyIsIkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTCIsIkZFVENIX1BST0RVQ1RfREVUQUlMIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUyIsIkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUwiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUyIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMIiwiQkxPRyIsIkZFVENIX1BPU1RTIiwiRkVUQ0hfUE9TVFNfU1VDQ0VTUyIsIkZFVENIX1BPU1RTX0ZBSUwiLCJGRVRDSF9QT1NUX0RFVEFJTCIsIkZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1MiLCJGRVRDSF9QT1NUX0RFVEFJTF9GQUlMIiwiRkVUQ0hfUkVDRU5UX1BPU1RTIiwiRkVUQ0hfUkVDRU5UX1BPU1RTX1NVQ0NFU1MiLCJGRVRDSF9SRUNFTlRfUE9TVFNfRkFJTCIsIlNIT1BfRklMVEVSIiwiUkVTRVRfRklMVEVSUyIsIlNFVF9TT1JUIiwiU0VUX1NIT1ciLCJTRVRfVklFVyIsIlNFVF9DQVRFR09SWSIsIlNFVF9DT0xPUiIsIlNFVF9TSVpFIiwiU0VUX1RBRyIsIkNBUlQiLCJGRVRDSF9DQVJUIiwiRkVUQ0hfQ0FSVF9TVUNDRVNTIiwiRkVUQ0hfQ0FSVF9GQUlMIiwiV0lTSExJU1QiLCJGRVRDSF9XSVNITElTVCIsIkZFVENIX1dJU0hMSVNUX1NVQ0NFU1MiLCJGRVRDSF9XSVNITElTVF9GQUlMIiwiQ09NUEFSRSIsIkFERF9UT19DT01QQVJFIiwiUkVNT1ZFX0ZST01fQ09NUEFSRSIsIkJMT0dfRklMVEVSIiwiZmV0Y2hDYXJ0IiwidHlwZSIsImZldGNoQ2FydFN1Y2Nlc3MiLCJwYXlsb2FkIiwiZmV0Y2hDYXJ0RmFpbCIsImVyciIsImNhcnRBcGlzIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZmV0Y2hXaXNoTGlzdCIsImZldGNoV2lzaExpc3RTdWNjZXNzIiwiZmV0Y2hXaXNoTGlzdEZhaWwiLCJ3aXNobGlzdEFwaXMiLCJjYXRlZ29yeSIsInRhZyIsImJsb2dGaWx0ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJhbGxQb3N0cyIsImxvYWRpbmciLCJjb3VudCIsInJlY2VudFBvc3RzIiwicG9zdERldGFpbCIsImJsb2dSZWR1Y2VyIiwicG9zdENvdW50IiwiY2FydFJlZHVjZXIiLCJjb21wYXJlUmVkdWNlciIsImluY2x1ZGVzIiwibGVndGgiLCJzbGljZSIsImNvbXBhcmVJdGVtIiwiZmluZCIsIml0ZW0iLCJwcm9kdWN0SWQiLCJjb21wYXJlSXRlbUluZGV4IiwiaW5kZXhPZiIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwic2hvcFJlZHVjZXIiLCJzaG9wRmlsdGVyUmVkdWNlciIsIndpc2hsaXN0UmVkdWNlciIsInNvcnQiLCJzaG93IiwidmlldyIsImNvbG9yIiwic2l6ZSIsInByb2R1Y3RzIiwic2FsZVByb2R1Y3RzIiwiZmVhdHVyZWRQcm9kdWN0cyIsImJlc3RTZWxsZXJQcm9kdWN0cyIsImRhbGVQcm9kdWN0cyIsInByb2R1Y3REZXRhaWwiLCJzZWFyY2hlZFByb2R1Y3RzIiwicHJvZHVjdENvdW50IiwiV0lTSExJU1RSZWR1Y2VyIiwiY3JlYXRlZFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7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cGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2RlZmluZXNcIjtcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQWNjZXB0J10gPSAnYXBwbGljYXRpb24vanNvbic7XG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG5cblxuY29uc3QgdXJsID0gXCIvY2FydFwiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0RGF0YSA9IChsb2dnZWR1c2VyKSA9PiB7XG4gIGxldCBjdXNfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VzX2lkJyk7XG4gIGxldCBjdXNfZGF0YSA9IHtpZDpjdXNfaWR9XG4gIGxldCBlbmRwb2ludCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2FsbGNhcnQnO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBvc3QoZW5kcG9pbnQsY3VzX2RhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdElkQ2FydERhdGEgPSAocGlkKSA9PiB7XG5cblxuICBsZXQgZW5kcG9pbnQgPSBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9jYXJ0P3Byb2R1Y3Q9JHtwaWR9YDtcblxuICBcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuXG5cbmV4cG9ydCBjb25zdCBhZGRDYXJ0RGF0YSA9IChkYXRhKSA9PiB7XG5cblxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhcnREYXRhID0gKGNhcnRJZCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke2NhcnRJZH1gO1xuXG5cbiAgbGV0IGN1c19pZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXNfaWQnKTtcbiAgbGV0IGN1c19kYXRhID0ge2N1c19pZDpjdXNfaWR9XG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCxjdXNfZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FydERhdGEgPSAoY2FydElkLCBkYXRhKSA9PiB7XG4gXG4gIGxldCBjdXNfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VzX2lkJyk7XG4gIGRhdGEuY3VzX2lkID0gY3VzX2lkO1xuXG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSk7XG5cbn07XG5cblxuZXhwb3J0IGNvbnN0IGFkZFByb2R1Y3RSZXZpZXdzID0gKHZhbHVlcykgPT4ge1xuXG5cbiAgbGV0IGVuZHBvaW50ID0gYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcmV2aWV3c2A7XG5cbiAgXG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCx2YWx1ZXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZE1lc3NhZ2UgPSAodmFsdWVzKSA9PiB7XG5cblxuICBsZXQgZW5kcG9pbnQgPSBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9tZXNzYWdlYDtcblxuICBcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wb3N0KGVuZHBvaW50LHZhbHVlcyk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTG9naW4gPSAodmFsdWVzKSA9PiB7XG5cbiAgbGV0IGVuZHBvaW50ID0gYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvYXV0aC9sb2dpbmA7XG5cbiAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wb3N0KGVuZHBvaW50LHZhbHVlcyk7XG5cbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVSZWdpc3RlciA9ICh2YWx1ZXMpID0+IHtcblxuICBsZXQgZW5kcG9pbnQgPSBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9hdXRoL3JlZ2lzdGVyYDtcblxuICBcblxuICByZXR1cm4gYXhpb3Moe1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgdXJsOiBlbmRwb2ludCxcbiAgICBkYXRhOiB2YWx1ZXMsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcImJvdW5kYXJ5XCI6XCItLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5eXJWN0tPMEJvQ0J1RGJUTFwiXG5cbiAgfSxcbiAgIFxuICB9KTtcblxuXG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlUHJvZmlsZUVkaXQgPSAodmFsdWVzKSA9PiB7XG5cblxuICBsZXQgZW5kcG9pbnQgPSBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9hdXRoL2N1c3RvbWVyZWRpdGA7XG5cbiAgXG5cbiAgcmV0dXJuIGF4aW9zKHtcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIHVybDogZW5kcG9pbnQsXG4gICAgZGF0YTogdmFsdWVzLFxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXCJib3VuZGFyeVwiOlwiLS0tLVdlYktpdEZvcm1Cb3VuZGFyeXlyVjdLTzBCb0NCdURiVExcIlxuXG4gIH0sXG4gICBcbiAgfSk7XG5cblxufTtcbiIsImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2RlZmluZXNcIjtcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xuXG5jb25zdCB1cmwgPSBcIi93aXNobGlzdFwiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hXaXNobGlzdERhdGEgPSAoKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YSA9IChwaWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJpZFwiLCBwaWQpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkV2lzaGxpc3REYXRhID0gKGRhdGEpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVXaXNobGlzdERhdGEgPSAocGlkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBgLyR7cGlkfWA7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZGVsZXRlKGVuZHBvaW50KTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cblxuY2xhc3MgQXhpb3NTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoKTtcbiAgICBpbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHRoaXMuaGFuZGxlU3VjY2VzcywgdGhpcy5oYW5kbGVFcnJvcik7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICB9XG5cbiAgaGFuZGxlU3VjY2VzcyhyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuXG4gIGdldCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXQodXJsKTtcbiAgfVxuXG4gIHBvc3QodXJsLCBib2R5KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucG9zdCh1cmwsIGJvZHkpO1xuICB9XG5cbiAgcGF0Y2godXJsLCBib2R5KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucGF0Y2godXJsLCBib2R5KTtcbiAgfVxuXG4gIGRlbGV0ZSh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5kZWxldGUodXJsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXhpb3NTZXJ2aWNlKCk7XG4iLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaVwiO1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChwcmljZSwgbG9jYWxlcyA9IFwidXMtVVNcIiwgY3VycmVuY3kgPSBcIkxLUlwiKSA9PiB7XG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlcywge1xuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgY3VycmVuY3k6IGN1cnJlbmN5LFxuICB9KS5mb3JtYXQocHJpY2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclBhcmFtID0gKHBhcmFtTmFtZSwgcGFyYW1WYWx1ZSkgPT4ge1xuICBpZiAocGFyYW1WYWx1ZSAmJiBwYXJhbVZhbHVlICE9PSBcIlwiICYmIHBhcmFtVmFsdWUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gYExLUiAke3BhcmFtTmFtZX09JHtwYXJhbVZhbHVlfWA7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChcbiAgZGF0ZSxcbiAgaW5wdXRGb3JtYXQgPSBcIllZWVktTU0tRERcIixcbiAgb3V0cHV0Rm9ybWF0ID0gXCJNTU0gREQsIFlZWVlcIlxuKSA9PiB7XG4gIHJldHVybiBtb21lbnQoZGF0ZSwgaW5wdXRGb3JtYXQpLmZvcm1hdChvdXRwdXRGb3JtYXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZURhc2ggPSAoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvLS9nLCBcIiBcIik7XG59O1xuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZVN0b3JlIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcbmNvbnN0IF9fTkVYVF9SRURVWF9TVE9SRV9fID0gXCJfX05FWFRfUkVEVVhfU1RPUkVfX1wiO1xuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICAvLyBBbHdheXMgbWFrZSBhIG5ldyBzdG9yZSBpZiBzZXJ2ZXIsIG90aGVyd2lzZSBzdGF0ZSBpcyBzaGFyZWQgYmV0d2VlbiByZXF1ZXN0c1xuICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICAvLyBDcmVhdGUgc3RvcmUgaWYgdW5hdmFpbGFibGUgb24gdGhlIGNsaWVudCBhbmQgc2V0IGl0IG9uIHRoZSB3aW5kb3cgb2JqZWN0XG4gIGlmICghd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSkge1xuICAgIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10gPSBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuICByZXR1cm4gd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJlZHV4U3RvcihBcHApIHtcbiAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KSB7XG4gICAgICAvLyBHZXQgb3IgQ3JlYXRlIHRoZSBzdG9yZSB3aXRoIGB1bmRlZmluZWRgIGFzIGluaXRpYWxTdGF0ZVxuICAgICAgLy8gVGhpcyBhbGxvd3MgeW91IHRvIHNldCBhIGN1c3RvbSBkZWZhdWx0IGluaXRpYWxTdGF0ZVxuICAgICAgY29uc3QgcmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUoKTtcblxuICAgICAgLy8gUHJvdmlkZSB0aGUgc3RvcmUgdG8gZ2V0SW5pdGlhbFByb3BzIG9mIHBhZ2VzXG4gICAgICBhcHBDb250ZXh0LmN0eC5yZWR1eFN0b3JlID0gcmVkdXhTdG9yZTtcblxuICAgICAgbGV0IGFwcFByb3BzID0ge307XG4gICAgICBpZiAodHlwZW9mIEFwcC5nZXRJbml0aWFsUHJvcHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFwcFByb3BzLFxuICAgICAgICBpbml0aWFsUmVkdXhTdGF0ZTogcmVkdXhTdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5yZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShwcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9IHJlZHV4U3RvcmU9e3RoaXMucmVkdXhTdG9yZX0gLz47XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgZmV0Y2hDYXJ0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XG5pbXBvcnQgeyBmZXRjaFdpc2hMaXN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZXRjaEluaXREYXRhKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hDYXJ0UmVxdWVzdCgpKTtcbiAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0UmVxdWVzdCgpKTtcbiAgfSwgW10pO1xuICByZXR1cm4gY2hpbGRyZW47XG59XG4iLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgXCIuLi9zdHlsZXMvYW50ZC5sZXNzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGVzLnNjc3NcIjtcbi8vIGltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0xvYWRpbmdcIjtcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tIFwiLi4vY29tbW9uL3dpdGhSZWR1eFN0b3JlXCI7XG5pbXBvcnQgRmV0Y2hJbml0RGF0YSBmcm9tIFwiLi4vY29tcG9uZW50cy9vdGhlci9GZXRjaEluaXREYXRhXCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxuICAgICAgPEZldGNoSW5pdERhdGE+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvRmV0Y2hJbml0RGF0YT5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U3RvcmUoQXBwKTtcbiIsImV4cG9ydCBjb25zdCBTSE9QID0ge1xuICBGRVRDSF9QUk9EVUNUUzogXCJGRVRDSF9QUk9EVUNUU1wiLFxuICBGRVRDSF9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX1NBTEVfUFJPRFVDVFM6IFwiRkVUQ0hfU0FMRV9QUk9EVUNUU1wiLFxuICBGRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFM6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNcIixcbiAgRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUzogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU1wiLFxuICBGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX0RBTEVfUFJPRFVDVFM6IFwiRkVUQ0hfREFMRV9QUk9EVUNUU1wiLFxuICBGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfUFJPRFVDVF9ERVRBSUw6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxcIixcbiAgRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUzogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTXCIsXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUw6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTFwiLFxuICBGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUzogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU1wiLFxuICBGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQkxPRyA9IHtcbiAgRkVUQ0hfUE9TVFM6IFwiRkVUQ0hfUE9TVFNcIixcbiAgRkVUQ0hfUE9TVFNfU1VDQ0VTUzogXCJGRVRDSF9QT1NUU19TVUNDRVNTXCIsXG4gIEZFVENIX1BPU1RTX0ZBSUw6IFwiRkVUQ0hfUE9TVFNfRkFJTFwiLFxuICBGRVRDSF9QT1NUX0RFVEFJTDogXCJGRVRDSF9QT1NUX0RFVEFJTFwiLFxuICBGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTOiBcIkZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTDogXCJGRVRDSF9QT1NUX0RFVEFJTF9GQUlMXCIsXG4gIEZFVENIX1JFQ0VOVF9QT1NUUzogXCJGRVRDSF9SRUNFTlRfUE9TVFNcIixcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUkVDRU5UX1BPU1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUw6IFwiRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBTSE9QX0ZJTFRFUiA9IHtcbiAgUkVTRVRfRklMVEVSUzogXCJSRVNFVF9GSUxURVJTXCIsXG4gIFNFVF9TT1JUOiBcIlNFVF9TT1JUXCIsXG4gIFNFVF9TSE9XOiBcIlNFVF9TSE9XXCIsXG4gIFNFVF9WSUVXOiBcIlNFVF9WSUVXXCIsXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcbiAgU0VUX0NPTE9SOiBcIlNFVF9DT0xPUlwiLFxuICBTRVRfU0laRTogXCJTRVRfU0laRVwiLFxuICBTRVRfVEFHOiBcIlNFVF9UQUdcIixcbn07XG5cbmV4cG9ydCBjb25zdCBDQVJUID0ge1xuICBGRVRDSF9DQVJUOiBcIkZFVENIX0NBUlRcIixcbiAgRkVUQ0hfQ0FSVF9TVUNDRVNTOiBcIkZFVENIX0NBUlRfU1VDQ0VTU1wiLFxuICBGRVRDSF9DQVJUX0ZBSUw6IFwiRkVUQ0hfQ0FSVF9GQUlMXCIsXG59O1xuXG5leHBvcnQgY29uc3QgV0lTSExJU1QgPSB7XG4gIEZFVENIX1dJU0hMSVNUOiBcIkZFVENIX1dJU0hMSVNUXCIsXG4gIEZFVENIX1dJU0hMSVNUX1NVQ0NFU1M6IFwiRkVUQ0hfV0lTSExJU1RfU1VDQ0VTU1wiLFxuICBGRVRDSF9XSVNITElTVF9GQUlMOiBcIkZFVENIX1dJU0hMSVNUX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBDT01QQVJFID0ge1xuICBBRERfVE9fQ09NUEFSRTogXCJBRERfVE9fQ09NUEFSRVwiLFxuICBSRU1PVkVfRlJPTV9DT01QQVJFOiBcIlJFTU9WRV9GUk9NX0NPTVBBUkVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBCTE9HX0ZJTFRFUiA9IHtcbiAgUkVTRVRfRklMVEVSUzogXCJSRVNFVF9GSUxURVJTXCIsXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcbiAgU0VUX1RBRzogXCJTRVRfVEFHXCIsXG59O1xuIiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5pbXBvcnQgKiBhcyBjYXJ0QXBpcyBmcm9tIFwiLi4vLi4vYXBpcy9jYXJ0XCI7XG5cbi8vR2V0IGNhcnQgZGF0YVxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydCA9ICgpID0+ICh7XG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBDQVJULkZFVENIX0NBUlRfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydEZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBDQVJULkZFVENIX0NBUlRfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0UmVxdWVzdCA9IChsb2dnZWR1c2VyKSA9PiB7XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGNhcnRBcGlzXG4gICAgICAuZmV0Y2hDYXJ0RGF0YShsb2dnZWR1c2VyKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaENhcnRTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0RmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcbiIsImltcG9ydCB7IFdJU0hMSVNUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmltcG9ydCAqIGFzIHdpc2hsaXN0QXBpcyBmcm9tIFwiLi4vLi4vYXBpcy93aXNobGlzdFwiO1xuXG4vL0dldCBjYXJ0IGRhdGFcbmNvbnN0IGZldGNoV2lzaExpc3QgPSAoKSA9PiAoe1xuICB0eXBlOiBXSVNITElTVC5GRVRDSF9XSVNITElTVCxcbn0pO1xuXG5jb25zdCBmZXRjaFdpc2hMaXN0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBXSVNITElTVC5GRVRDSF9XSVNITElTVF9TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5jb25zdCBmZXRjaFdpc2hMaXN0RmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoV2lzaExpc3RSZXF1ZXN0ID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdCgpKTtcbiAgICB3aXNobGlzdEFwaXNcbiAgICAgIC5mZXRjaFdpc2hsaXN0RGF0YSgpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdEZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBCTE9HX0ZJTFRFUiB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNhdGVnb3J5OiBcIlwiLFxuICB0YWc6IFwiXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBibG9nRmlsdGVyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEJMT0dfRklMVEVSLlJFU0VUX0ZJTFRFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYXRlZ29yeTogXCJcIixcbiAgICAgICAgdGFnOiBcIlwiLFxuICAgICAgfTtcbiAgICBjYXNlIEJMT0dfRklMVEVSLlNFVF9DQVRFR09SWTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXRlZ29yeTogYWN0aW9uLmNhdGVnb3J5LFxuICAgICAgfTtcbiAgICBjYXNlIEJMT0dfRklMVEVSLlNFVF9UQUc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGFnOiBhY3Rpb24udGFnLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCTE9HIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYWxsUG9zdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSwgY291bnQ6IDAgfSxcbiAgcmVjZW50UG9zdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICBwb3N0RGV0YWlsOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJsb2dSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIC8vQWxsIHBvc3RzXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFsbFBvc3RzOiB7XG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgQkxPRy5GRVRDSF9QT1NUU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFsbFBvc3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuYWxsUG9zdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgICBjb3VudDogYWN0aW9uLnBheWxvYWQucG9zdENvdW50LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUE9TVFNfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWxsUG9zdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5hbGxQb3N0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgLy9SZWNlbnQgcG9zdHNcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUkVDRU5UX1BPU1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlY2VudFBvc3RzOiB7XG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgQkxPRy5GRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWNlbnRQb3N0czoge1xuICAgICAgICAgIC4uLnN0YXRlLnJlY2VudFBvc3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgICAgY291bnQ6IGFjdGlvbi5wYXlsb2FkLnBvc3RDb3VudCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBCTE9HLkZFVENIX1JFQ0VOVF9QT1NUU19GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWNlbnRQb3N0czoge1xuICAgICAgICAgIC4uLnN0YXRlLnJlY2VudFBvc3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAvL1Bvc3QgZGV0YWlsXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RfREVUQUlMOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvc3REZXRhaWw6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICAgICAgfTtcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3N0RGV0YWlsOiB7XG4gICAgICAgICAgLi4uc3RhdGUucG9zdERldGFpbCxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9zdERldGFpbDoge1xuICAgICAgICAgIC4uLnN0YXRlLnBvc3REZXRhaWwsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IENBUlQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcnRSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ0FSVC5GRVRDSF9DQVJUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgZGF0YTogW10sXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBDQVJULkZFVENIX0NBUlRfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgIH07XG4gICAgY2FzZSBDQVJULkZFVENIX0NBUlRfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDT01QQVJFIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENPTVBBUkUuQUREX1RPX0NPTVBBUkU6XG4gICAgICBpZiAoIXN0YXRlLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLmRhdGEpKSB7XG4gICAgICAgIGlmIChzdGF0ZS5sZWd0aCA8PSAzKSB7XG4gICAgICAgICAgcmV0dXJuIFthY3Rpb24ucGF5bG9hZC5kYXRhLCAuLi5zdGF0ZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFthY3Rpb24ucGF5bG9hZC5kYXRhLCAuLi5zdGF0ZS5zbGljZSgwLCAyKV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBjYXNlIENPTVBBUkUuUkVNT1ZFX0ZST01fQ09NUEFSRTpcbiAgICAgIGNvbnN0IGNvbXBhcmVJdGVtID0gc3RhdGUuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RJZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbXBhcmVJdGVtSW5kZXggPSBjb21wYXJlSXRlbSAmJiBzdGF0ZS5pbmRleE9mKGNvbXBhcmVJdGVtKTtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLnN0YXRlLnNsaWNlKDAsIGNvbXBhcmVJdGVtSW5kZXgpLFxuICAgICAgICAuLi5zdGF0ZS5zbGljZShjb21wYXJlSXRlbUluZGV4ICsgMSksXG4gICAgICBdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuXG5pbXBvcnQgY2FydFJlZHVjZXIgZnJvbSBcIi4vY2FydFJlZHVjZXJcIjtcbmltcG9ydCBjb21wYXJlUmVkdWNlciBmcm9tIFwiLi9jb21wYXJlUmVkdWNlclwiO1xuaW1wb3J0IHdpc2hsaXN0UmVkdWNlciBmcm9tIFwiLi93aXNobGlzdFJlZHVjZXJcIjtcbmltcG9ydCBzaG9wUmVkdWNlciBmcm9tIFwiLi9zaG9wUmVkdWNlclwiO1xuaW1wb3J0IHNob3BGaWx0ZXJSZWR1Y2VyIGZyb20gXCIuL3Nob3BGaWx0ZXJSZWR1Y2VyXCI7XG5pbXBvcnQgYmxvZ0ZpbHRlclJlZHVjZXIgZnJvbSBcIi4vYmxvZ0ZpbHRlclJlZHVjZXJcIjtcbmltcG9ydCBibG9nUmVkdWNlciBmcm9tIFwiLi9ibG9nUmVkdWNlclwiO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGJsb2dGaWx0ZXJSZWR1Y2VyLFxuICBibG9nUmVkdWNlcixcbiAgc2hvcFJlZHVjZXIsXG4gIHNob3BGaWx0ZXJSZWR1Y2VyLFxuICBjb21wYXJlUmVkdWNlcixcbiAgY2FydFJlZHVjZXIsXG4gIHdpc2hsaXN0UmVkdWNlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCB7IFNIT1BfRklMVEVSIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc29ydDoge30sXG4gIHNob3c6IFwiMTBcIixcbiAgdmlldzogXCJncmlkXCIsXG4gIGNhdGVnb3J5OiBcIlwiLFxuICBjb2xvcjogXCJcIixcbiAgc2l6ZTogXCJcIixcbiAgdGFnOiBcIlwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvcEZpbHRlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5SRVNFVF9GSUxURVJTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc29ydDoge30sXG4gICAgICAgIHNob3c6IFwiMTBcIixcbiAgICAgICAgdmlldzogXCJncmlkXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxuICAgICAgICBjb2xvcjogXCJcIixcbiAgICAgICAgc2l6ZTogXCJcIixcbiAgICAgICAgdGFnOiBcIlwiLFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9TT1JUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNvcnQ6IGFjdGlvbi5zb3J0LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9TSE9XOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3c6IGFjdGlvbi5zaG93LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9WSUVXOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpZXc6IGFjdGlvbi52aWV3LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9DQVRFR09SWTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXRlZ29yeTogYWN0aW9uLmNhdGVnb3J5LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9DT0xPUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb2xvcjogYWN0aW9uLmNvbG9yLFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9TSVpFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNpemU6IGFjdGlvbi5zaXplLFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9UQUc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGFnOiBhY3Rpb24udGFnLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTSE9QIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSwgY291bnQ6IDAgfSxcbiAgc2FsZVByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgZmVhdHVyZWRQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gIGJlc3RTZWxsZXJQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gIGRhbGVQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gIHByb2R1Y3REZXRhaWw6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICBzZWFyY2hlZFByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIC8vQWxsIHByb2R1Y3RzXG4gICAgY2FzZSBTSE9QLkZFVENIX1BST0RVQ1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UsIGNvdW50OiAwIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgICBjb3VudDogYWN0aW9uLnBheWxvYWQucHJvZHVjdENvdW50LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVFNfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgLy9TYWxlIHByb2R1Y3RzXG4gICAgY2FzZSBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZVByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlUHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5zYWxlUHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZVByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuc2FsZVByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAvL0ZlYXR1cmVkIHByb2R1Y3RzXG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZlYXR1cmVkUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmZWF0dXJlZFByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZmVhdHVyZWRQcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmVhdHVyZWRQcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLmZlYXR1cmVkUHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIC8vQmVzdCBzZWxsZXIgcHJvZHVjdHNcbiAgICBjYXNlIFNIT1AuRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYmVzdFNlbGxlclByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYmVzdFNlbGxlclByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuYmVzdFNlbGxlclByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBiZXN0U2VsbGVyUHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5iZXN0U2VsbGVyUHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIC8vRGFsZSBwcm9kdWN0c1xuICAgIGNhc2UgU0hPUC5GRVRDSF9EQUxFX1BST0RVQ1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRhbGVQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGFsZVByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZGFsZVByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRhbGVQcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLmRhbGVQcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgLy9Qcm9kdWN0IGRldGFpbFxuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdERldGFpbDoge1xuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAvL1NlYXJjaGVkIHByb2R1Y3RzXG4gICAgY2FzZSBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaGVkUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2hlZFByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuc2VhcmNoZWRQcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICAgIGNvdW50OiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Q291bnQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2hlZFByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuc2VhcmNoZWRQcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgLy9EZWZhdWwgY2FzZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFdJU0hMSVNUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXSVNITElTVFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBXSVNITElTVC5GRVRDSF9XSVNITElTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGRhdGE6IFtdLFxuICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgV0lTSExJU1QuRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgIH07XG4gICAgY2FzZSBXSVNITElTVC5GRVRDSF9XSVNITElTVF9GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvcm9vdFJlZHVjZXJcIjtcblxuY29uc3QgY3JlYXRlZFN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJvb3RSZWR1Y2VyLFxuICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXG4pO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gIHJldHVybiBjcmVhdGVkU3RvcmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9