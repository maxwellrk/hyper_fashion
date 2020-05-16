import QnABlock from '../../components/QnAComponents/QnABlock';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return { productById: state.productById };
};
export default connect(mapStateToProps, null)(QnABlock);
