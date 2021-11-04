import React from 'react';
import styled, { css } from 'styled-components';

import * as bp from '../../lib/styles/BreakPoints';

const StyledImg = styled.img`
  width: 90%;
  display: block;
  margin: auto;

  @media (${bp.small}) {
    max-width: 400px;
  }

  ${(props) =>
    props?.margin &&
    css`
      margin: ${props.margin};
    `}
`;

const Illustration = ({
  src = '/images/xbox.png',
  webpSrc = src === '/images/xbox.png' ? '/images/xbox.webp' : false,
  margin = 'auto',
}) => {
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <StyledImg src={src} alt="ssua-illustration" margin={margin} />
    </picture>
  );
};

export default Illustration;
