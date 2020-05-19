import {connect} from "react-redux";
import Buttons from "../../components/Overview/Buttons";
import addDeleteOutfit from "../../actions/RelatedItemsAndOutfitActions/addDeleteOutfit";

const mapStateToProps = (state) => {
  return {
    productById: state.productById,
    outfitIdArr: state.outfitIdArr,
  };
};

export default connect(mapStateToProps, {addDeleteOutfit})(Buttons);
