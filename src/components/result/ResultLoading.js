import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

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

const ResultLoading = () => {
  return (
    <>
      <LoadingSpinner>
        <span>Loading....</span>
      </LoadingSpinner>
      <p>슈아가 열심히 결과를 분석 중입니다......</p>
    </>
  );
};

export default ResultLoading;
