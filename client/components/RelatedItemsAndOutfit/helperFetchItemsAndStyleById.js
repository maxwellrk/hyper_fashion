import axios from "axios";
import Promise from "bluebird";
import getAverageReview from "../../actions/ReviewComponentActions/ActionHelpers/averageReviewHelper";

const fetchItemsAndStyles = (id) => {
  const itemsUrl = `http://18.224.200.47/products/${id}`;
  const styleUrl = `http://18.224.200.47/products/${id}/styles`;
  const ratingUrl = `http://18.224.200.47/reviews/${id}/meta`;

  const requestItem = axios.get(itemsUrl);
  const requestStyle = axios.get(styleUrl);
  const requestRating = axios.get(ratingUrl);

  return axios.all([requestItem, requestStyle, requestRating]).then(
    axios.spread((...responses) => {
      const responseItem = responses[0].data;
      const responseStyle = responses[1].data;
      const responseRating = getAverageReview(responses[2].data.ratings);
      return [responseItem, responseStyle, responseRating];
    }),
  );
};

const fetchRelatedItemsAndStyleById = (id) => {
  const url = `http://18.224.200.47/products/${id}/related`;
  let productIdListPromise = axios
    .get(url)
    .then((results) => {
      return results.data;
    })
    .catch((err) => {
      console.log("error getting related itemsId by id:", err);
    });

  return productIdListPromise.then((idArr) => {
    return Promise.all(idArr.map((id) => fetchItemsAndStyles(id)));
  });
};

const fetchOutfitItemsAndStyleByIdArr = (idArr) => {
  return Promise.all(idArr.map((id) => fetchItemsAndStyles(id)));
};

export { fetchRelatedItemsAndStyleById, fetchOutfitItemsAndStyleByIdArr };



// origin fetchRelatedItemsAndStyleById for reference
/*
  const fetchRelatedItemsAndStyleById = (id) => {
    const url = `http://18.224.200.47/products/${id}/related`;
    let productIdListPromise = axios
      .get(url)
      .then((results) => {
        return results.data;
      })
      .catch((err) => {
        console.log("error getting related itemsId by id:", err);
      });

      // productIdListPromise don't need to be promised again
      // because it is already an pending promise array
    Promise.all(productIdListPromise)
      .then((idArr) => {
        return Promise.all(
          idArr.map((id) => {
            const itemsUrl = `http://18.224.200.47/products/${id}`;
            const styleUrl = `http://18.224.200.47/products/${id}/styles`;
            const ratingUrl = `http://18.224.200.47/reviews/${id}/meta`;

            const requestItem = axios.get(itemsUrl);
            const requestStyle = axios.get(styleUrl);
            const requestRating = axios.get(ratingUrl);

            return axios.all([requestItem, requestStyle, requestRating]).then(
              axios.spread((...responses) => {
                const responseItem = responses[0].data;
                const responseStyle = responses[1].data;
                const responseRating = getAverageReview(responses[2].data.ratings);
                return [responseItem, responseStyle, responseRating];
              })
            );
          })
        );
      })
      .then((itemsAndStyleArr) => {
        setRelatedItemsAndStyle(itemsAndStyleArr);
      });
  };
  */
