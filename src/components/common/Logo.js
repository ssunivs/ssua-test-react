import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 150px;
  margin-top: 50px;
`;

const Logo = () => {
  return <StyledImg src="/images/logo-clean.png" alt="ssuniverse-logo" />;
};

export default Logo;
