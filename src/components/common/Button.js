import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: '${palette.gray[8]}';

  &:hover {
    background: ${palette.gray[6]};
  }

  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
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

  ${(props) =>
    props?.indigo &&
    css`
      background: ${palette.indigo[5]};

      &:hover {
        background: ${palette.indigo[4]};
      }
    `}

  ${(props) =>
    props?.blue &&
    css`
      background: ${palette.blue[5]};

      &:hover {
        background: ${palette.blue[4]};
      }
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
