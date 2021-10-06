import React from 'react';
import Responsive from '../components/common/Responsive';
import Logo from '../components/common/Logo';
import Illustration from '../components/common/Illustration';
import QuestionProgress from '../components/question/QuestionProgress';
import Question from '../components/question/Question';

const QuestionPage = () => {
  return (
    <Responsive>
      <Logo />
      <QuestionProgress currentQuestion={1} totalQuestion={16} />
      <Illustration />
      <Question />
    </Responsive>
  );
};

export default QuestionPage;
