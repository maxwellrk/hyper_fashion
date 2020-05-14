import { connect } from "react-redux";
import Carousel from "../../components/Overview/Carousel";

const mapStateToProps = (state) => {
  return { productById: state.productById };
};

export default connect(mapStateToProps, null)(Carousel);
