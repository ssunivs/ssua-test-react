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
  border-radius: 20px;
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
  width: 400px;
  border: 4px solid #265499;
  border-radius: 20px;
  background-color: #edf1f7;
  text-align: center;
  font-size: 1.5rem;

  .title {
    color: #2d66bc;
  }

  .sub-title {
    color: #727171;
    font-weight: bold;
  }

  span {
    display: block;
  }
`;

const StyledButton = styled(Button)`
  display: block;
  width: 300px;
  margin: 1rem auto 0;
  padding: 20px;
`;

const ResultView = ({ title, description, onRetry }) => {
  return (
    <>
      <Illustration src="/images/result-main.png" />
      <StyledResultImageWrapper>
        <Illustration src="/images/result/9-crown.png" />
      </StyledResultImageWrapper>
      <StyledResultTextWrapper>
        <p className="title">Level 10. 패션왕관</p>
        <p className="sub-title">hoxy, 당신은 패션왕?</p>
        {(
          '슈아에게 딱 어울리는,,,\n' +
          '당신의 패션센스 믿음직 어쩌구,,,\n' +
          '나중에 텍스트 전달하겠습니다,,,\n' +
          '기획팀 도와주세요,,,'
        )
          .split('\n')
          .map((iter) => (
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
