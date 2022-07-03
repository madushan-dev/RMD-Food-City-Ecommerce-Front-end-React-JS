import axiosService from "../common/axiosService";
import { API_URL } from "../common/defines";
import { renderParam } from "../common/utils";
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;



const url = "/cart";

export const fetchCartData = (loggeduser) => {
  let cus_id = localStorage.getItem('cus_id');
  let cus_data = {id:cus_id}
  let endpoint = 'http://127.0.0.1:8000/api/allcart';
  return axiosService.post(endpoint,cus_data);
};

export const fetchProductIdCartData = (pid) => {


  let endpoint = `http://127.0.0.1:8000/api/cart?product=${pid}`;

  
  return axiosService.get(endpoint);
};



export const addCartData = (data) => {


  let endpoint = API_URL + url;
  return axiosService.post(endpoint, data);
};

export const removeCartData = (cartId) => {
  let endpoint = API_URL + url + `/${cartId}`;


  let cus_id = localStorage.getItem('cus_id');
  let cus_data = {cus_id:cus_id}
  return axiosService.post(endpoint,cus_data);
};

export const updateCartData = (cartId, data) => {
 
  let cus_id = localStorage.getItem('cus_id');
  data.cus_id = cus_id;

  let endpoint = API_URL + url;
  return axiosService.post(endpoint, data);

};


export const addProductReviews = (values) => {


  let endpoint = `http://127.0.0.1:8000/api/reviews`;

  
  return axiosService.post(endpoint,values);
};

export const addMessage = (values) => {


  let endpoint = `http://127.0.0.1:8000/api/message`;

  
  return axiosService.post(endpoint,values);
};

export const handleLogin = (values) => {

  let endpoint = `http://127.0.0.1:8000/api/auth/login`;

  console.log(values);
  return axiosService.post(endpoint,values);

};

export const handleRegister = (values) => {

  let endpoint = `http://127.0.0.1:8000/api/auth/register`;

  

  return axios({
    method: "post",
    url: endpoint,
    data: values,
    headers: { "Content-Type": "multipart/form-data","boundary":"----WebKitFormBoundaryyrV7KO0BoCBuDbTL"

  },
   
  });


};

export const handleProfileEdit = (values) => {


  let endpoint = `http://127.0.0.1:8000/api/auth/customeredit`;

  

  return axios({
    method: "post",
    url: endpoint,
    data: values,
    headers: { "Content-Type": "multipart/form-data","boundary":"----WebKitFormBoundaryyrV7KO0BoCBuDbTL"

  },
   
  });


};
