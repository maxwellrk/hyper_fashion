import React from "react";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import RelatedItemsAndOutfit from "../../client/components/RelatedItemsAndOutfit/RelatedItemsAndOutfit";
import RelatedItems from "../../client/containers/RelatedItemsAndOutfitContainers/RelatedItemsContainer";
import CompareModal from "../../client/components/RelatedItemsAndOutfit/CompareModal";
import Outfit from "../../client/containers/RelatedItemsAndOutfitContainers/OutfitContainer";
import OutfitEntry from "../../client/components/RelatedItemsAndOutfit/OutfitEntry";
import { MemoryRouter as Router, withRouter } from "react-router-dom";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('RelatedItemsAndOutfit Unit Tests: Amount of Children Components', () => {
  test("RelatedItemsAndOutfit should have two children components", () => {
    const wrapper = shallow(<RelatedItemsAndOutfit />);
    expect(wrapper.children()).toHaveLength(2);
  });
  test("RelatedItems should have one children component", () => {
    const wrapper = shallow(<RelatedItems store={mockStore({})} />);
    expect(wrapper.children()).toHaveLength(1);
  });
});

describe("RelatedItemsAndOutfit Unit Tests: Shallow Rendering", () => {
  test("RelatedItemsAndOutfit component exists", () => {
    const wrapper = shallow(<RelatedItemsAndOutfit />);
    expect(wrapper.exists()).toBe(true);
  });
  test("RelatedItems component exists", () => {
    const wrapper = shallow(<RelatedItems store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("CompareModal component exists", () => {
    const wrapper = shallow(<CompareModal store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("Outfit component exists", () => {
    const wrapper = shallow(<Outfit store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("OutfitEntry component exists", () => {
    const wrapper = shallow(<OutfitEntry store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("RelatedItems Unit Tests: Full DOM Rendering", () => {
  const wrapperMount = mount(
    <RelatedItems
      related-outfit-h3_body="RELATED PRODUCT"
      relatedItemsAndStyle={[1]}
      store={mockStore({})}
    />
  );
  test("Renders with related-outfit-h3_body in RelatedItems", () => {
    expect(
      wrapperMount.containsMatchingElement(
        <h3 className="related-outfit-h3">RELATED PRODUCT</h3>
      )
    ).toEqual(true);
  });
});

describe("Outfit Unit Tests: Full DOM Rendering", () => {
  const wrapperMount = mount(
    <Router>
      <Outfit
        related-outfit-h3_body="YOUR OUTFIT"
        currentProduct={{ id: 1 }}
        store={mockStore({ outfitIdArr: [1] })}
      />
    </Router>
  );

  test("Renders with related-outfit-h3_body in Outfit", () => {
    expect(
      wrapperMount.contains(<h3 className="related-outfit-h3">YOUR OUTFIT</h3>)
    ).toBeTruthy();
  });
});
