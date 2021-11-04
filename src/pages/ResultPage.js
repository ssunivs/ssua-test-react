import React from 'react';
import { Helmet } from 'react-helmet-async';
import Responsive from '../components/common/Responsive';
import ResultContainer from '../containers/ResultContainer';
import Header from '../components/common/Header';

const ResultPage = () => {
  return (
    <>
      <Helmet>
        <title>슈아는 패션왕</title>
      </Helmet>
      <Responsive>
        <Header />
        <ResultContainer />
      </Responsive>
    </>
  );
};

export default ResultPage;
