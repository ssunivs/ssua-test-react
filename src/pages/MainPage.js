import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Button from '../components/common/Button';
import Illustration from '../components/common/Illustration';
import Footer from '../components/common/Footer';

const StyledButton = styled(Button)`
  padding: 20px 45px;
  margin: 30px auto;
  width: 300px;
`;

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>슈아는 패션왕</title>
      </Helmet>
      <Responsive>
        <Illustration src="/images/sub_main.png" margin="0 auto 45px" />
        <Illustration src="/images/logo.gif" margin="45px auto" />
        <StyledButton to="/question">START</StyledButton>
      </Responsive>
    </>
  );
};

export default MainPage;
