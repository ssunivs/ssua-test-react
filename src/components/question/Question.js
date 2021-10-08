import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const StyledAnswerBlock = styled.div`
  max-width: 500px;
  margin: auto;

  button,
  a {
    margin-bottom: 1rem;
  }
`;

const Question = ({ idx, text, answer, generateAnswerHandler }) => {
  text = text || 'QUESTION';
  answer = answer || [{ text: 'ANSWER' }, { text: 'ANSWER' }];

  return (
    <>
      <p>{text}</p>
      <StyledAnswerBlock>
        <Button
          blue
          fullWidth
          onClick={generateAnswerHandler(idx, answer[0]?.value)}
        >
          {answer[0]?.text ?? 'ANSWER_1'}
        </Button>
        <Button
          blue
          fullWidth
          onClick={generateAnswerHandler(idx, answer[1]?.value)}
        >
          {answer[1]?.text ?? 'ANSWER_2'}
        </Button>
      </StyledAnswerBlock>
    </>
  );
};

export default Question;
