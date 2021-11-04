import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <>
      <Route path={'/'} exact>
        <MainPage />
      </Route>
      <Route path={'/question'}>
        <QuestionPage />
      </Route>
      <Route path={'/result'}>
        <ResultPage />
      </Route>
      <Footer />
    </>
  );
};

export default App;
