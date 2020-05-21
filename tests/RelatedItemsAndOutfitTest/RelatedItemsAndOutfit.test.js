import React from "react";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import RelatedItemsAndOutfit from "../../client/components/RelatedItemsAndOutfit/RelatedItemsAndOutfit";
import RelatedItems from "../../client/containers/RelatedItemsAndOutfitContainers/RelatedItemsContainer";
import CompareModal from "../../client/components/RelatedItemsAndOutfit/CompareModal";
import Outfit from "../../client/containers/RelatedItemsAndOutfitContainers/OutfitContainer";
import OutfitEntry from "../../client/components/RelatedItemsAndOutfit/OutfitEntry";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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
  // tried to test children number. Failed
//   test("Render one CompareModal component in RelatedItems", () => {
//     const wrapper = shallow(<RelatedItems store={mockStore({})} />);
//     expect(wrapper.containsMatchingElement(<CompareModal />)).toEqual(true);
//     expect(wrapper.children()).toHaveLength(2);
//     expect(wrapper.find(CompareModal)).toHaveLength(1);
//   });
});
// This test is not successful yet need to find a way to make [] false
// describe("RelatedItems Unit Tests: Full DOM Rendering", () => {
//   const wrapperMount = mount((<RelatedItems related-outfit-h3_body="RELATED PRODUCT" store={mockStore({})} />));

//   test("renders with related-outfit-h3_body", () => {
//     expect(
//       wrapperMount.contains(<h3 className='related-outfit-h3'>RELATED PRODUCT</h3>)
//     ).toBeTruthy();
//   });
// });

// This test is not successful yet
// describe("Outfit Unit Tests: Full DOM Rendering", () => {
//     const wrapperMount = mount((<Outfit related-outfit-h3_body="YOUR OUTFIT" store={mockStore({})} />));
  
//     test("renders with related-outfit-h3_body", () => {
//       expect(
//         wrapperMount.contains(<h3 className="related-outfit-h3">YOUR OUTFIT</h3>)
//       ).toBeTruthy();
//     });
//     // const wrapper = shallow(<Outfit store={mockStore({})} />);
//     // expect(wrapper.containsMatchingElement(<OutfitEntry/>)).toEqual(true);
//     // expect(wrapper.children()).toHaveLength(2);
//     // expect(wrapper.find(OutfitEntry)).toHaveLength(1);
//   });