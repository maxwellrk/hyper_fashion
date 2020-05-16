import React, {useEffect, useState} from "react";
import {Rating} from "@material-ui/lab";

const Reviews = ({productRating}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (productRating) {
      let rating = Number(productRating);
      setValue(rating);
    }
  }, [productRating]);

  return (
    <div>
      {value ? (
        <Rating
          style={{color: "black"}}
          name="half-rating-read"
          size="small"
          value={value}
          precision={0.25}
          readOnly
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Reviews;
