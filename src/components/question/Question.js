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

const Question = ({ text, answer }) => {
  return (
    Array.isArray(answer) && (
      <div>
        <p>{text}</p>
        <StyledAnswerBlock>
          <Button blue fullWidth>
            {answer[0].text}
          </Button>
          <Button blue fullWidth>
            {answer[1].text}
          </Button>
        </StyledAnswerBlock>
      </div>
    )
  );
};

export default Question;
