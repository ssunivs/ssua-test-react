import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EntrancePage from './pages/EntrancePage';
import QuestionPage from './pages/QuestionPage';

const App = () => {
  return (
    <>
      <Route path={'/'} exact>
        <MainPage />
      </Route>
      <Route path={'/enter'} exact>
        <EntrancePage />
      </Route>
      <Route path={'/question'}>
        <QuestionPage />
      </Route>
    </>
  );
};

export default App;
