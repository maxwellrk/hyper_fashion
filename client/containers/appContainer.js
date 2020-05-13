import App from '../components/App';
import fetchProductList from '../actions/index';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return { productList: state.productList };
};

export default connect(mapStateToProps, {
  fetchProductList,
})(App);
