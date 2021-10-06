import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Button from '../components/common/Button';
import Logo from '../components/common/Logo';
import Illustration from '../components/common/Illustration';

const StyledText = styled.p`
  span {
    display: block;
    font-weight: normal;
  }

  font-weight: bold;
`;

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>슈아가 언제 졸업할까?</title>
      </Helmet>
      <Responsive>
        <Logo />
        <StyledText>
          <span>숭실대의 숨겨진 재학생 슈아</span>
          슈아가 언제 졸업할까?
        </StyledText>
        <Illustration />
        <Button fullWidth blue to="/enter">
          테스트 시작
        </Button>
      </Responsive>
    </>
  );
};

export default MainPage;
