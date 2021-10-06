import React from 'react';
import Responsive from '../components/common/Responsive';
import Logo from '../components/common/Logo';
import QuestionPageContainer from '../containers/QuestionPageContainer';

const QuestionPage = () => {
  return (
    <Responsive>
      <Logo />
      <QuestionPageContainer />
    </Responsive>
  );
};

export default QuestionPage;
