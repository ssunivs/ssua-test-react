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

const Question = () => {
  return (
    <div>
      <p>질문 질문 질문</p>
      <StyledAnswerBlock>
        <Button blue fullWidth>
          답변 1
        </Button>
        <Button blue fullWidth>
          답변 2
        </Button>
      </StyledAnswerBlock>
    </div>
  );
};

export default Question;
