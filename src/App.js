import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EntrancePage from './pages/EntrancePage';

const App = () => {
  return (
    <>
      <Route path={'/'} exact>
        <MainPage />
      </Route>
      <Route path={'/enter'}>
        <EntrancePage />
      </Route>
    </>
  );
};

export default App;
