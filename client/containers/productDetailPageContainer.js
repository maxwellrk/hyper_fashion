import ProductDetailPage from '../components/ProductDetailPage';
import fetchProductById from '../actions/fetchProductById';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { productById: state.productById };
};

export default connect(mapStateToProps, {
  fetchProductById,
})(ProductDetailPage);
