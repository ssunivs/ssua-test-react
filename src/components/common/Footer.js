import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledText = styled.p`
  font-weight: bold;
  color: #265499;
`;

const Footer = () => {
  return (
    <>
      <Logo />
      <a href="https://www.instagram.com/snvs.official" target="new">
        <StyledText>혹시 슈아가 누군지 아직도 모르셨나요? :-)</StyledText>
      </a>
      <StyledText>© 슈니버스 Co. All Rights Reserved.</StyledText>
    </>
  );
};

export default Footer;
