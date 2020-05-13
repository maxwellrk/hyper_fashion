import { connect } from "react-redux";
import ProductDescription from "../../components/Overview/ProductDescription";

const mapStateToProps = (state) => {
  return { productById: state.productById };
};

export default connect(mapStateToProps, null)(ProductDescription);
