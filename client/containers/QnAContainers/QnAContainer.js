import QnA from '../../components/QnAComponents/QnA';
import fetchQuestionsById from '../../actions/QnAActions/fetchQuestionsById';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return { questionsList: state.questionsList, productById: state.productById };
};
export default connect(mapStateToProps, {
  fetchQuestionsById,
})(QnA);
