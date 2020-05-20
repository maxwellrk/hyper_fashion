import React, {useEffect, useState} from "react";
import {Rating} from "@material-ui/lab";
import {Link, animateScroll} from "react-scroll";

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
      <div style={{fontSize: "10px", marginBottom: "10px"}}>
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Read All Reviews
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
