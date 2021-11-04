import React from 'react';
import Responsive from '../components/common/Responsive';
import Logo from '../components/common/Logo';
import QuestionPageContainer from '../containers/QuestionPageContainer';
import Header from '../components/common/Header';

const QuestionPage = () => {
  return (
    <>
      <Header />
      <Responsive>
        <Logo />
        <QuestionPageContainer />
      </Responsive>
    </>
  );
};

export default QuestionPage;
