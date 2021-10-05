import React from 'react'
import Responsive from "../components/common/Responsive";
import {Helmet} from "react-helmet-async";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>슈아가 언제 졸업할까?</title>
      </Helmet>
      <Responsive style={{height: '50vh'}}>
        <div style={{border: '1px solid grey', minHeight: '100%', minWidth: '100%'}}>BORDER_LAYOUT</div>
      </Responsive>
    </>
  );
}

export default Main;