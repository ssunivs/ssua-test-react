import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Logo from '../components/common/Logo';
import Illustration from '../components/common/Illustration';
import Responsive from '../components/common/Responsive';
import * as bp from '../lib/styles/BreakPoints';

const StyledText = styled.p`
  word-break: keep-all;
  margin: auto auto 30px;

  @media (${bp.small}) {
    max-width: 500px;
  }
`;

const ResultPage = () => {
  return (
    <>
      <Helmet>
        <title>슈아가 언제 졸업할까?</title>
      </Helmet>
      <Responsive>
        <Logo />
        <Illustration />
        <StyledText>TEXT</StyledText>
      </Responsive>
    </>
  );
};

export default ResultPage;
