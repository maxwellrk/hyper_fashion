import {connect} from "react-redux";
import RelatedItems from "../../components/RelatedItemsAndOutfit/RelatedItems";
import fetchProductById from "../../actions/fetchProductById";

const mapStateToProps = (state) => {
  return { productById: state.productById };
};

export default connect(mapStateToProps, { fetchProductById })(RelatedItems);