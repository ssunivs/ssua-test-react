import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionProgress from '../components/question/QuestionProgress';
import Illustration from '../components/common/Illustration';
import Question from '../components/question/Question';
import { addAnswer, getList } from '../modules/question';

const QuestionPageContainer = ({ location, history }) => {
  const dispatch = useDispatch();
  const { questionList, answer, questionError, loading } = useSelector(
    ({ question, loading }) => ({
      questionList: question.list,
      answer: question.answer,
      questionError: question.questionError,
      loading: loading['question/GET_LIST'],
    }),
  );

  const currentIdx = parseInt(location.pathname.split('/').slice(-1)[0]);
  const next = answer.find(
    (iter) => iter.isAnswered === false && iter.idx !== currentIdx,
  )?.idx;

  const answeredQuestionCount = answer.filter((iter) => iter.isAnswered).length;
  const questionText = !loading && questionList[currentIdx - 1]?.question;
  const answerList = !loading && questionList[currentIdx - 1]?.answer;

  const generateAnswerHandler = (idx, value) => (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (1 <= idx && idx <= questionList.length) {
      dispatch(addAnswer({ idx, value }));
    }

    if (next) {
      history.push(`/question/${next}`);
    } else {
      history.push('/result');
    }
  };

  useEffect(() => {
    if (questionError) {
      console.error(questionError);
    }

    dispatch(getList());
  }, [dispatch, questionError]);

  useEffect(() => {
    // prevent access to invalid question idx by checking idx when component mount
    if (!(1 <= currentIdx && currentIdx <= questionList.length)) {
      if (next) {
        history.replace(`/question/${next}`);
      } else {
        history.push('/result');
      }
    }
  });

  return (
    <>
      <QuestionProgress
        answeredQuestionCount={answeredQuestionCount}
        totalQuestionCount={questionList.length}
      />
      <Illustration />
      <Question
        idx={currentIdx}
        text={questionText}
        answer={answerList}
        generateAnswerHandler={generateAnswerHandler}
      />
    </>
  );
};

export default withRouter(QuestionPageContainer);
