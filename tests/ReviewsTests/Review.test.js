import React from "react";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import RatingInfo from "../../client/containers/ReviewComponentContainers/RatingInfoContainer";
import ReviewList from "../../client/containers/ReviewComponentContainers/ReviewListContainer";
import RatingBreakdown from "../../client/components/ReviewComponents/RatingBreakdown";
import RatingInfos from "../../client/components/ReviewComponents/RatingInfo";
import RatingsandReviews from "../../client/components/ReviewComponents/RatingsandReviews";
import SubmitReviewForm from "../../client/components/ReviewComponents/SubmitReviewForm";
import ReviewLists from "../../client/components/ReviewComponents/ReviewList";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("RatingInfo tests", () => {
  test("it renders with no props", () => {
    const wrapper = shallow(<RatingInfo store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("ReviewList Description tests", () => {
  test("renders", () => {
    const wrapper = shallow(<ReviewList store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("RatingsandReviews tests", () => {
  test("renders", () => {
    const wrapper = shallow(<RatingsandReviews store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("SubmitReviewForm tests", () => {
  test("renders", () => {
    const wrapper = shallow(<SubmitReviewForm store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

// describe("RatingBreakdown tests", () => {
//   test("renders", () => {
//     const wrapper = shallow(<RatingBreakdown store={mockStore({})} />);
//     expect(wrapper.exists()).toBe(true);
//   });
// });

// describe("ReviewLists tests", () => {
//   test("renders", () => {
//     const wrapper = shallow(<ReviewLists store={mockStore({})} />);
//     expect(wrapper.exists()).toBe(true);
//   });
// });

// describe("ReviewLists Description tests", () => {
//   test("renders", () => {
//     const wrapper = shallow(<ReviewLists store={mockStore({})} />);
//     expect(wrapper.exists()).toBe(true);
//   });
// });
