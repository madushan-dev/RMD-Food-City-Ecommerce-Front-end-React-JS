import axiosService from "../common/axiosService";
import { API_URL } from "../common/defines";
import { renderParam } from "../common/utils";

const url = "/product";

const renderUrl = (url, limit, category) => {
  return (
    url + "?" + renderParam("_limit", limit) + renderParam("category", category)
  );
};

//Fetch list of products
export const fetchProductsData = (query) => {
  let endpoint =
    renderUrl(API_URL + url, query.limit, query.category) +
    renderParam("_page", query.page) +
    renderParam("_sort", query.sort.sort) +
    renderParam("_order", query.sort.order) +
    renderParam("q", query.q) +
    renderParam("specifications.color", query.color) +
    renderParam("specifications.size", query.size) +
    renderParam("tag_like", query.tag);

  endpoint = `http://127.0.0.1:8000/api/shop?category=${query.category}`;

  return axiosService.get(endpoint);
};



export const fetchSaleProductsData = (query) => {
  let endpoint = 'http://127.0.0.1:8000/api/products?results=9&type=saleproducts';
  return axiosService.get(endpoint);
};

export const fetchFeaturedProductsData = (query) => {
  let endpoint = `http://127.0.0.1:8000/api/products?results=8&category=${query.category}`;
  return axiosService.get(endpoint);
};

export const fetchBestSellerProductsData = (query) => {
  let endpoint = 'http://127.0.0.1:8000/api/products?results=9&type=bestseller';
  return axiosService.get(endpoint);
};

export const fetchDaleProductsData = (query) => {
  let endpoint = 'http://127.0.0.1:8000/api/products?results=9';
  return axiosService.get(endpoint);
};

//Fetch product detail
export const fetchProductDetailData = (slug) => {
  let endpoint = 'http://127.0.0.1:8000/api/products/'+slug;
  return axiosService.get(endpoint);
};

//Fetch serched product by query
export const fetchSearchedProductData = (query) => {
  let endpoint =
    API_URL +
    url +
    "?" +
    renderParam("q", query.input) +
    renderParam("category", query.category) +
    renderParam("limit", query.limit);
  return axiosService.get(endpoint);
};
