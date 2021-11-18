import React from 'react';
import styled, { css } from 'styled-components';

const StyledBlock = styled.div`
  margin-top: 25px;
  font-family: 'CookieRun', sans-serif;

  span {
    display: block;
    margin-bottom: 1rem;
  }
`;

const ProgressBarWrapper = styled.div`
  position: relative;
  height: 1rem;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
  max-width: 400px;
  margin: auto;
`;

const ProgressBar = styled.div`
  display: block;
  color: #fff;
  text-align: center;
  background-color: #007bff;
  transition: width 0.6s ease;
  position: absolute;
  height: 1rem;
  border-radius: 0.25rem;

  ::after {
    content: '';
    background-image: url('/images/progress-ssua.png');
    width: 40px;
    height: 40px;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: -15px;
    right: -15px;
  }

  ${(props) =>
    props?.percent &&
    css`
      width: ${props.percent}%;
    `}
`;

const QuestionProgress = ({ answeredQuestionCount, totalQuestionCount }) => {
  const progressPercent =
    ((answeredQuestionCount + 1) / totalQuestionCount) * 100;

  return (
    <StyledBlock>
      <span>
        {answeredQuestionCount + 1}/{totalQuestionCount}
      </span>
      <ProgressBarWrapper>
        <ProgressBar percent={progressPercent} />
      </ProgressBarWrapper>
    </StyledBlock>
  );
};

export default QuestionProgress;
