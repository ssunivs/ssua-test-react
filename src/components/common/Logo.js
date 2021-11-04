import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledImg = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto 0;
`;

const Logo = () => {
  return (
    <Link to="/">
      <StyledImg src="/images/ssuniverse-logo.png" alt="ssuniverse-logo" />
    </Link>
  );
};

export default Logo;
