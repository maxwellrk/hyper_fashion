import React from "react";
import {shallow} from "enzyme";
import store from "../../client/store/store";
import Overview from "../../client/containers/OverviewContainers/OverviewContainer";
import ProductDescription from "../../client/containers/OverviewContainers/productDescriptionContainer";
import Carousel from "../../client//containers/OverviewContainers/CarouselContainer";

describe("Overview", () => {
  it("should be true", () => {
    const truthy = true;
    expect(truthy).toBe(true);
  });
});

describe("Overview tests", () => {
  test("renders", () => {
    const wrapper = shallow(<Overview store={store} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Product Description tests", () => {
  test("renders", () => {
    const wrapper = shallow(<ProductDescription store={store} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Product Description tests", () => {
  test("renders", () => {
    const wrapper = shallow(<Carousel store={store} />);
    expect(wrapper.exists()).toBe(true);
  });
});
