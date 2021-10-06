import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 150px;
  display: block;
  margin: 50px auto 0;
`;

const Logo = () => {
  return (
    <picture>
      <source srcSet="/images/logo-clean.webp" type="image/webp" />
      <StyledImg src="/images/logo-clean.png" alt="ssuniverse-logo" />
    </picture>
  );
};

export default Logo;
