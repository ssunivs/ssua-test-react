import React from 'react';
import Main from './pages/main';
import { Route } from 'react-router-dom';
import Entrance from './pages/entrance';

const App = () => {
  return (
    <>
      <Route path={'/'} exact>
        <Main />
      </Route>
      <Route path={'/enter'}>
        <Entrance />
      </Route>
    </>
  );
};

export default App;
