import React from 'react';
import styled from 'styled-components';
import * as bp from '../../lib/styles/BreakPoints';

const ResponsiveBlock = styled.div`
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
  padding: 10px 1rem 25px;
  margin: 0 auto 0;
  text-align: center;
  min-height: calc(100vh - 185px); // Footer 를 위한 영역

  @media (${bp.small}) {
    width: 95vw;
  }
  @media (${bp.medium}) {
    max-width: 900px;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
