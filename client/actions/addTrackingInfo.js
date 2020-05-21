const trackingInfo = (trackingObj) => {
  return dispatch({
    type: "TRACKING_INFO",
    payload: trackingObj,
  });
};
