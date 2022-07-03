import { v4 as uuidv4 } from "uuid";
import {
  addProductReviews,
} from "../apis/cart";

export const onAddReviews = ({
  values,
  onSuccess,
  onError,
}) => {


  addProductReviews(values)

  
    .then((res) => {
      if (res.data.length === 0) {
   
      } else {

      }
    })
    .then((res) => onSuccess && onSuccess(res))
    .catch(
      (err) =>
        onError && onError("Cannot Submit Review! Try again later", err)
    );
};

