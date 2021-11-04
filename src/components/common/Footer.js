import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const FooterWrapper = styled.div`
  height: 150px;
  text-align: center;
`;

const StyledAnchor = styled.a`
  text-decoration-color: #265499;
`;

const StyledText = styled.p`
  font-weight: bold;
  color: #265499;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo />
      <StyledAnchor href="https://www.instagram.com/snvs.official" target="new">
        <StyledText>혹시 슈아가 누군지 아직도 모르셨나요? :-)</StyledText>
      </StyledAnchor>
      <StyledText>© 슈니버스 Co. All Rights Reserved.</StyledText>
    </FooterWrapper>
  );
};

export default Footer;
