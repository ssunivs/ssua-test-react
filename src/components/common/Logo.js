import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoBase64 from './LogoBase64';

const StyledImg = styled.img`
  width: 150px;
  display: block;
  margin: 50px auto 0;
`;

const Logo = () => {
  return (
    <Link to="/">
      <StyledImg src={LogoBase64} alt="ssuniverse-logo" />
    </Link>
  );
};

export default Logo;
