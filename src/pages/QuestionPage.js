import React from 'react';
import Responsive from '../components/common/Responsive';
import QuestionPageContainer from '../containers/QuestionPageContainer';
import Header from '../components/common/Header';

const QuestionPage = () => {
  return (
    <>
      <Responsive>
        <Header />
        <QuestionPageContainer />
      </Responsive>
    </>
  );
};

export default QuestionPage;
