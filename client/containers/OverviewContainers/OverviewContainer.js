import { connect } from "react-redux";
import Overview from "../../components/Overview/Overview";

const mapStateToProps = (state) => {
  return { productById: state.productById };
};

export default connect(mapStateToProps, null)(Overview);
