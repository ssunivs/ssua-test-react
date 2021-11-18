import React from 'react';
import styled from 'styled-components';
import Illustration from '../common/Illustration';
import Button from '../common/Button';
import * as bp from '../../lib/styles/BreakPoints';

export const ResultViewBlock = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const StyledResultImageWrapper = styled.div`
  margin: 2rem auto 1rem;
  width: 300px;
  height: 300px;
  border: 4px solid #265499;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  picture,
  img {
    margin: auto;
    display: block;
    max-width: 300px;
    max-height: 300px;
  }

  @media (${bp.small}) {
    width: 400px;
    height: 400px;

    picture,
    img {
      max-width: 400px;
      max-height: 400px;
    }
  }
`;

const StyledResultTextWrapper = styled.div`
  margin: 2rem auto 1rem;
  padding: 1rem 0.5rem;
  width: 300px;
  border-radius: 10px;
  background-color: #edf1f7;
  text-align: center;

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

  @media (${bp.small}) {
    width: 400px;
    font-size: 1.2rem;
  }
`;

const StyledButton = styled(Button)`
  display: block;
  width: 300px;
  margin: 1rem auto 0;
  padding: 20px;
`;

const ResultView = ({ level, item, description, image, onRetry }) => {
  return (
    <>
      <Illustration src="/images/result-main.png" />
      <StyledResultImageWrapper>
        <Illustration src={`/images/result/${image}`} />
      </StyledResultImageWrapper>
      <StyledResultTextWrapper>
        <p className="title">
          Level {level}. {item}
        </p>
        <p className="sub-title">hoxy, 당신은 패션왕?</p>
        &nbsp;
        {description.split('\n').map((iter) => (
          <span>{iter}</span>
        ))}
      </StyledResultTextWrapper>
      <StyledButton
        href="https://www.instagram.com/snvs.official"
        target="_blank"
      >
        슈아에게 컨펌받기
      </StyledButton>
      <StyledButton onClick={onRetry}>다시하기</StyledButton>
    </>
  );
};

export default ResultView;
