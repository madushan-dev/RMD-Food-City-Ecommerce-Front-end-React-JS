import { v4 as uuidv4 } from "uuid";
import {
  handleProfileEdit
} from "../apis/cart";


export const onRegister = ({
  values,
  onSuccess,
  onError,
}) => {

  handleProfileEdit(values)

  
    .then((res) => {
      if (res.data.length === 0) {

      } else {
  

      }
    })
    .then((res) => onSuccess && onSuccess(res))
    .catch(
      (err) =>
        onError && onError("Please check register form again", err)
    );
};

