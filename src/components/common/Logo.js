import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 150px;
  display: block;
  margin: 50px auto 0;
`;

const Logo = () => {
  return <StyledImg src="/images/logo-clean.png" alt="ssuniverse-logo" />;
};

export default Logo;
