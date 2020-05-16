import { connect } from "react-redux";
import RelatedItems from "../../components/RelatedItemsAndOutfit/RelatedItems";
import updateCurrentId from "../../actions/RelatedItemsAndOutfitActions/updateCurrentId";

const mapStateToProps = (state) => {
  return { currentId: state.currentId, productById: state.productById };
};

export default connect(mapStateToProps, { updateCurrentId })(RelatedItems);
