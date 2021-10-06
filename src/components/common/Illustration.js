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

const Illustration = ({ src }) => {
  src = src || '/images/xbox.webp';
  //TODO: webp 를 전달받는 경우에만 source 동작하게끔
  return (
    <picture>
      <source srcSet={src.replace('.png', '.webp')} type="image/webp" />
      <StyledImg src={src.replace('.webp', '.png')} alt="ssua-illustration" />
    </picture>
  );
};

export default Illustration;
