import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 90px;
  display: block;
  margin: 0 auto 0;
`;

const Logo = () => {
  return <StyledImg src="/images/ssuniverse-logo.png" alt="ssuniverse-logo" />;
};

export default Logo;
