import App from '../components/App';
import fetchProductList from '../actions/fetchProductList';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return { productList: state.productList };
};

export default connect(mapStateToProps, {
  fetchProductList,
})(App);
