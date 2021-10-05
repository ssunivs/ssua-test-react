import React from 'react'
import styled from "styled-components";
import * as bp from '../../lib/styles/BreakPoints';

const ResponsiveBlock = styled.div`
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
  padding: 10px 1rem 25px;
  margin: 0 auto 0;
  box-shadow: rgba(0, 0, 0, 0.04) 0 4px 16px 0;

  @media (${bp.medium}) {
    width: 95vw;
  }
  @media (${bp.large}) {
    width: 90vw;
  }
`;

const Responsive = ({children, ...rest}) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
}

export default Responsive;