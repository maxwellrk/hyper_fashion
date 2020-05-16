import QuestionModal from '../../components/QnAComponents/QuestionModal';
import fetchQuestionsById from '../../actions/QnAActions/fetchQuestionsById';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return { questionsList: state.questionsList, productById: state.productById };
};
export default connect(mapStateToProps, {
  fetchQuestionsById,
})(QuestionModal);
