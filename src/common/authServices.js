import { v4 as uuidv4 } from "uuid";
import {
  handleLogin,
  handleRegister
} from "../apis/cart";

export const onLogin = ({
  values,
  onSuccess,
  onError,
}) => {


    handleLogin(values)

  
    .then((res) => {
      if (res.data.length === 0) {
    
      } else {
 
        localStorage.setItem('cus_id', res.data.cus_id);
        localStorage.setItem('cus_name', res.data.cus_name);
        localStorage.setItem('cus_token', res.data.token);

      }
    })
    .then((res) => onSuccess && onSuccess(res))
    .catch(
      (err) =>
        onError && onError("Your login details are incorerct!", err)
    );
};

export const onRegister = ({
  values,
  onSuccess,
  onError,
}) => {

  handleRegister(values)

  
    .then((res) => {
      if (res.data.length === 0) {
        console.log("test up");
      } else {
        localStorage.setItem('cus_id', res.data.cus_id);
        localStorage.setItem('cus_name', res.data.cus_name);
        localStorage.setItem('cus_token', res.data.token);

      }
    })
    .then((res) => onSuccess && onSuccess(res))
    .catch(
      (err) =>
        onError && onError("Please check register form again", err)
    );
};

