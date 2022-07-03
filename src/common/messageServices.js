import { v4 as uuidv4 } from "uuid";
import {
  addMessage,
} from "../apis/cart";

export const onAddContact = ({
  values,
  onSuccess,
  onError,
}) => {


  addMessage(values)

  
    .then((res) => {
      if (res.data.length === 0) {
   
      } else {

      }
    })
    .then((res) => onSuccess && onSuccess(res))
    .catch(
      (err) =>
        onError && onError("Cannot Submit Message! Try again later", err)
    );
};

