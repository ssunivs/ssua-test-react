import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import * as bp from '../../lib/styles/BreakPoints';

const HeaderWrapper = styled(Responsive)`
  background-color: #2d66bc;
  padding: 10px 0;
  min-height: 0;
  margin: -10px -1rem 0px;
  width: 100vw;
`;

const StyledImage = styled.img`
  width: 55%;
  margin: 0 auto;

  @media (${bp.small}) {
    width: 100%;
    max-width: 375px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledImage src="/images/header-logo.png" alt="슈아는 패션왕" />
    </HeaderWrapper>
  );
};

export default Header;
