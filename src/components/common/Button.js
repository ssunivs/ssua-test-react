import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.blue[10]};

  &:hover {
    background: ${palette.blue[9]};
  }

  &:disabled {
    background: ${palette.blue[3]};
    color: ${palette.blue[5]};
    cursor: not-allowed;
  }

  ${(props) =>
    props?.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledAnchor = styled.a`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  text-align: center;
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  text-align: center;
  ${buttonStyle}
`;

const Button = (props) => {
  if (props.to) {
    return <StyledLink {...props} />;
  } else if (props.href) {
    return <StyledAnchor {...props} />;
  } else {
    return <StyledButton {...props} />;
  }
};

export default Button;
