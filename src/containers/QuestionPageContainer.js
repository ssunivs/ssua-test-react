import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuestionProgress from '../components/question/QuestionProgress';
import Illustration from '../components/common/Illustration';
import Question from '../components/question/Question';
import { getList } from '../modules/question';
import { withRouter } from 'react-router-dom';

const QuestionPageContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { list, questionError, loading } = useSelector(
    ({ question, loading }) => ({
      list: question.list,
      questionError: question.questionError,
      loading: loading['question/GET_LIST'],
    }),
  );
  const currentQuestionIdx = location.pathname.split('/').slice(-1)[0];

  const questionText = !loading && list[currentQuestionIdx - 1]?.question;
  const answerList = !loading && list[currentQuestionIdx - 1]?.answer;

  useEffect(() => {
    if (questionError) {
      console.error(questionError);
    }

    dispatch(getList());
  }, [dispatch, questionError]);

  return (
    !loading && (
      <>
        <QuestionProgress
          currentQuestion={currentQuestionIdx}
          totalQuestion={list.length}
        />
        <Illustration />
        <Question text={questionText} answer={answerList} />
      </>
    )
  );
};

export default withRouter(QuestionPageContainer);
