import React from 'react';
import styled, { css } from 'styled-components';

const StyledBlock = styled.div`
  margin-top: 25px;
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
  max-width: 400px;
  margin: auto;
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  background-color: #007bff;
  transition: width 0.6s ease;

  ${(props) =>
    props?.percent &&
    css`
      width: ${props.percent}%;
    `}
`;

const QuestionProgress = ({ answeredQuestionCount, totalQuestionCount }) => {
  const progressPercent = (answeredQuestionCount / totalQuestionCount) * 100;

  return (
    <StyledBlock>
      {answeredQuestionCount}/{totalQuestionCount}
      <ProgressBarWrapper>
        <ProgressBar percent={progressPercent} />
      </ProgressBarWrapper>
    </StyledBlock>
  );
};

export default QuestionProgress;
