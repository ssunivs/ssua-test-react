import React from 'react';
import styled from 'styled-components';

import * as bp from '../../lib/styles/BreakPoints';

const StyledImg = styled.img`
  width: 90%;

  @media (${bp.small}) {
    max-width: 400px;
  }
`;

const Illustration = ({ src }) => {
  src = src || '/images/xbox.png';
  return <StyledImg src={src} alt="ssua-illustration" />;
};

export default Illustration;
