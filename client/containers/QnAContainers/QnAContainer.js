import QnA from '../../components/QnAComponents/QnA';
import fetchQuestionsById from '../../actions/fetchProductList';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return { questionsList: state.questionsList };
};

export default connect(mapStateToProps, {
  fetchQuestionsById,
})(QnA);
