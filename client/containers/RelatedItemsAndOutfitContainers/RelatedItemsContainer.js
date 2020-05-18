import { connect } from "react-redux";
import RelatedItems from "../../components/RelatedItemsAndOutfit/RelatedItems";

const mapStateToProps = (state) => {
  return {
    productById: state.productById,
    prodRating: state.prodRating,
  };
};

export default connect(mapStateToProps, null)(RelatedItems);
