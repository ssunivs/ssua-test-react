import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Button from '../components/common/Button';

const StyledImage = styled.img`
  width: 150px;
  margin-top: 50px;
`;

const StyledText = styled.p`
  span {
    display: block;
    font-weight: normal;
  }

  font-weight: bold;
`;

const Main = () => {
  return (
    <>
      <Helmet>
        <title>슈아가 언제 졸업할까?</title>
      </Helmet>
      <Responsive>
        <StyledImage src="/images/logo-clean.png" alt="ssuniverse-logo" />
        <StyledText>
          <span>숭실대의 숨겨진 재학생 슈아</span>
          슈아가 언제 졸업할까?
        </StyledText>
        <img
          src="/images/xbox.png"
          alt="xbox-image"
          style={{ width: '400px' }}
        />
        <Button fullWidth blue>
          테스트 시작
        </Button>
      </Responsive>
    </>
  );
};

export default Main;
