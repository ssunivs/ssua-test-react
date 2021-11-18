import React from 'react';
import styled from 'styled-components';
import Illustration from '../common/Illustration';
import Button from '../common/Button';

export const ResultViewBlock = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const StyledResultImageWrapper = styled.div`
  margin: 2rem auto 1rem;
  width: 400px;
  height: 400px;
  border: 4px solid #265499;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  picture,
  img {
    margin: auto;
    display: block;
  }
`;

const StyledResultTextWrapper = styled.div`
  margin: 2rem auto 1rem;
  padding: 1rem 0.5rem;
  width: 400px;
  border-radius: 10px;
  background-color: #edf1f7;
  text-align: center;
  font-size: 1.5rem;

  p {
    margin: 0 0 0.5rem;
    font-weight: bold;
  }

  .title {
    color: #2d66bc;
  }

  .sub-title {
    color: #727171;
    font-weight: bold;
  }

  span {
    display: block;
    word-break: keep-all;
  }
`;

const StyledButton = styled(Button)`
  display: block;
  width: 300px;
  margin: 1rem auto 0;
  padding: 20px;
`;

const ResultView = ({ item, description, image, onRetry }) => {
  return (
    <>
      <Illustration src="/images/result-main.png" />
      <StyledResultImageWrapper>
        <Illustration src={`/images/result/${image}`} />
      </StyledResultImageWrapper>
      <StyledResultTextWrapper>
        <p className="title">{item}</p>
        <p className="sub-title">hoxy, 당신은 패션왕?</p>
        &nbsp;
        {description.split('\n').map((iter) => (
          <span>{iter}</span>
        ))}
      </StyledResultTextWrapper>
      <StyledButton href="https://www.instagram.com/snvs.official">
        슈아에게 컨펌받기
      </StyledButton>
      <StyledButton onClick={onRetry}>다시하기</StyledButton>
    </>
  );
};

export default ResultView;
