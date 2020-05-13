const startingState = {
  id: 1,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd",
  description:
    "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  category: "Jackets",
  default_price: "140",
  features: [
    {
      feature: "Buttons",
      value: "Brass",
    },
  ],
};

export default (state = startingState, action) => {
  if (action.type === "PRODUCT_BY_ID") {
    return action.payload;
  }
  return state;
};
