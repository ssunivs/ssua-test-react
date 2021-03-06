import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getResult, resetAnswer } from '../modules/question';
import ResultLoading from '../components/result/ResultLoading';
import ResultView, { ResultViewBlock } from '../components/result/ResultView';

const ResultContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { result, loading, answer } = useSelector(({ question, loading }) => ({
    result: question.result,
    loading: loading['question/GET_RESULT'],
    answer: question.answer,
  }));

  const { level, item, description, image } = result;

  const onRetry = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(resetAnswer());
    localStorage.removeItem('answer');

    history.push('/');
  };

  useEffect(() => {
    dispatch(getResult({ answer }));
  }, [dispatch, answer]);

  useEffect(() => {
    //localStorage.clear();
  });

  return (
    <ResultViewBlock>
      {loading ? (
        <ResultLoading />
      ) : (
        <ResultView
          level={level}
          item={item}
          description={description}
          image={image}
          onRetry={onRetry}
        />
      )}
    </ResultViewBlock>
  );
};

export default withRouter(ResultContainer);
