import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { IoReload } from 'react-icons/all';
import { withRouter } from 'react-router-dom';
import Logo from '../components/common/Logo';
import Illustration from '../components/common/Illustration';
import * as bp from '../lib/styles/BreakPoints';
import { getResult, resetAnswer } from '../modules/question';
import palette from '../lib/styles/palette';

const StyledText = styled.p`
  word-break: keep-all;
  margin: auto auto 30px;

  @media (${bp.small}) {
    max-width: 500px;
  }

  span {
    display: block;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  border: 0.5em solid ${palette.blue[4]};
  border-right-color: transparent;
  border-radius: 50%;
  animation: 0.75s linear infinite spinner-border;

  span {
    display: none;
  }
`;

const Loading = () => {
  return (
    <>
      <LoadingSpinner>
        <span>Loading....</span>
      </LoadingSpinner>
      <p>슈아가 열심히 결과를 분석 중입니다......</p>
    </>
  );
};

const Result = ({ title, description, onRetry }) => {
  return (
    <>
      <StyledText>
        {title}
        <span>{description}</span>
      </StyledText>
      <StyledText>내 결과 공유하기</StyledText>
      <StyledText onClick={onRetry}>
        다시 하기
        <span style={{ fontSize: '3rem' }}>
          <IoReload />
        </span>
      </StyledText>
      <StyledText>
        슈아의 소속사 슈니버스의 다양한 소식을 접해보세요!
      </StyledText>
      <StyledText>
        숭실대학교 재학생이 창업한 기업 슈니버스는 슈아를 모델로 한 굿즈 판매를
        통해 창출해낸 수익금을 숭실대학교 발전기금 으로 기부하고 있습니다.
      </StyledText>
    </>
  );
};

const ResultContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { result, loading, answer } = useSelector(({ question, loading }) => ({
    result: question.result,
    loading: loading['question/GET_RESULT'],
    answer: question.answer,
  }));

  const { title, description } = result;

  const onRetry = (e) => {
    e.preventDefault();
    e.stopPropagation();

    localStorage.removeItem('answer');
    dispatch(resetAnswer());

    history.push('/');
  };

  useEffect(() => {
    dispatch(getResult({ answer }));
  }, [dispatch, answer]);

  useEffect(() => {
    //localStorage.clear();
  });

  return (
    <>
      <Logo />
      <Illustration />
      {loading ? (
        <Loading />
      ) : (
        <Result title={title} description={description} onRetry={onRetry} />
      )}
    </>
  );
};

export default withRouter(ResultContainer);
