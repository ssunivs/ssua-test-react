import React from "react";
import Main from "./pages/main";
import {Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route path={'/'} exact><Main/></Route>
    </>
  );
}

export default App;
