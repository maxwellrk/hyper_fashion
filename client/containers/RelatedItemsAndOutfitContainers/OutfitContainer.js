import { connect } from "react-redux";
import Outfit from "../../components/RelatedItemsAndOutfit/Outfit";
import addDeleteOutfit from "../../actions/RelatedItemsAndOutfitActions/addDeleteOutfit";

const mapStateToProps = (state) => {
  return {
    productById: state.productById,
    outfitIdArr: state.outfitIdArr,
    prodRating: state.prodRating,
  };
};

export default connect(mapStateToProps, { addDeleteOutfit })(Outfit);