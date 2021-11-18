import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const StyledQuestion = styled.p`
  font-size: 1.4rem;
  color: #265499;

  span {
    color: #727171;
  }
`;

const StyledAnswerBlock = styled.div`
  max-width: 500px;
  margin: auto;

  button,
  a {
    margin-bottom: 1rem;
  }
`;

const StyledButton = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
  color: #2d66bc;
  background-color: #edf1f7;

  &:hover {
    background: #e7f5ff;
  }

  &:disabled {
    background: #e7f5ff;
    color: #339af0;
    cursor: not-allowed;
  }
`;

const Question = ({ idx, text, answer, generateAnswerHandler }) => {
  text = text || 'QUESTION';
  answer = answer || [{ text: 'ANSWER' }, { text: 'ANSWER' }];

  return (
    <>
      <StyledQuestion>
        Q. <span>{text}</span>
      </StyledQuestion>
      <StyledAnswerBlock>
        <StyledButton
          fullWidth
          onClick={generateAnswerHandler(idx, answer[0]?.value)}
        >
          {answer[0]?.text ?? 'ANSWER_1'}
        </StyledButton>
        <StyledButton
          fullWidth
          onClick={generateAnswerHandler(idx, answer[1]?.value)}
        >
          {answer[1]?.text ?? 'ANSWER_2'}
        </StyledButton>
      </StyledAnswerBlock>
    </>
  );
};

export default Question;
