import React from "react";
import thunk from "redux-thunk";
import store from "../../client/store/store";
import configureStore from "redux-mock-store";
import {shallow, mount} from "enzyme";
import Arrows from "../../client/components/Overview/Arrows";
import Buttons from "../../client/components/Overview/Buttons";
import Carousel from "../../client//containers/OverviewContainers/CarouselContainer";
import CarouselContent from "../../client/components/Overview/CarouselContent";
import Display from "../../client/components/Overview/Display";
import DropDowns from "../../client/components/Overview/DropDownMenus";
import NavBar from "../../client/components/Overview/NavBar";
import Overview from "../../client/containers/OverviewContainers/OverviewContainer";
import ProductDescription from "../../client/containers/OverviewContainers/productDescriptionContainer";
import Reviews from "../../client/components/Overview/Reviews";
import Slide from "../../client/components/Overview/Slide";
import Thumbnails from "../../client/components/Overview/Thumbnails";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Overview", () => {
  it("should be true", () => {
    const truthy = true;
    expect(truthy).toBe(true);
  });
});

describe("Overview tests", () => {
  test("renders", () => {
    const wrapper = shallow(<Overview store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Product Description tests", () => {
  test("renders", () => {
    const wrapper = shallow(<ProductDescription store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Carousel tests", () => {
  test("renders", () => {
    const wrapper = shallow(<Carousel store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should have 1 child components", () => {
    const wrapper = shallow(<Carousel store={mockStore({})} />);
    expect(wrapper.children()).toHaveLength(1);
  });
});

describe("Carousel Content tests", () => {
  test("renders", () => {
    const wrapper = shallow(<CarouselContent store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Arrows tests", () => {
  test("renders", () => {
    const wrapper = shallow(<Arrows store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Buttons tests", () => {
  test("renders", () => {
    const wrapper = shallow(<Buttons store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Display tests", () => {
  test("renders", () => {
    const wrapper = shallow(<Display store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Dropwdowns tests", () => {
  test("renders", () => {
    const wrapper = shallow(<DropDowns store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("NavBar tests", () => {
  test("renders", () => {
    const wrapper = shallow(<NavBar store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Reviews tests", () => {
  test("renders", () => {
    const wrapper = shallow(<Reviews store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Slide tests", () => {
  test("renders", () => {
    const wrapper = shallow(<Slide store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

xdescribe("Thumbnails tests", () => {
  test("renders", () => {
    const wrapper = shallow(<Thumbnails store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});
