import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionProgress from '../components/question/QuestionProgress';
import Question from '../components/question/Question';
import { addAnswer, getList, getResult, undoAnswer } from '../modules/question';

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
      dispatch(getResult({ answer }));
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
    localStorage.setItem('answer', JSON.stringify(answer));
  }, [answer]);

  useEffect(() => {
    // prevent access to invalid question idx by checking idx when component mount
    if (!(1 <= currentIdx && currentIdx <= questionList.length)) {
      if (next) {
        history.replace(`/question/${next}`);
      }
    } else {
      // undo answer when visit already answered page
      if (answer.find((iter) => iter.idx === currentIdx).isAnswered) {
        dispatch(undoAnswer({ idx: currentIdx }));
      }
    }
  });

  return (
    <>
      <QuestionProgress
        answeredQuestionCount={answeredQuestionCount}
        totalQuestionCount={questionList.length}
      />
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
