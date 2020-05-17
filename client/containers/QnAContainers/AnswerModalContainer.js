import AnswerModal from '../../components/QnAComponents/AnswerModal';
import fetchQuestionsById from '../../actions/QnAActions/fetchQuestionsById';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return { questionsList: state.questionsList, productById: state.productById };
};
export default connect(mapStateToProps, {
  fetchQuestionsById,
})(AnswerModal);
