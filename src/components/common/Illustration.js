import React from 'react';
import styled from 'styled-components';

import * as bp from '../../lib/styles/BreakPoints';

const StyledImg = styled.img`
  width: 90%;
  display: block;
  margin: auto;

  @media (${bp.small}) {
    max-width: 400px;
  }
`;

const Illustration = ({
  src = '/images/xbox.png',
  webpSrc = src === '/images/xbox.png' ? '/images/xbox.webp' : false,
}) => {
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <StyledImg src={src} alt="ssua-illustration" />
    </picture>
  );
};

export default Illustration;
