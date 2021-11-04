import React from 'react';
import { Helmet } from 'react-helmet-async';
import Responsive from '../components/common/Responsive';
import ResultContainer from '../containers/ResultContainer';
import Header from '../components/common/Header';

const ResultPage = () => {
  return (
    <>
      <Helmet>
        <title>슈아가 언제 졸업할까?</title>
      </Helmet>
      <Responsive>
        <Header />
        <ResultContainer />
      </Responsive>
    </>
  );
};

export default ResultPage;
