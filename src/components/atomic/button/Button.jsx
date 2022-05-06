import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonTypes = {
  NORMAL: 'normal',
  WARNING: 'warning',
  LINK: 'link',
};

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  width: 210px;
  border: 0;
  border-radius: 4px;
`;

const Button = (props) => {
  const { children, type } = props;

  return <Container type={type}>{children}</Container>;
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf([ButtonTypes.NORMAL, ButtonTypes.WARNING, ButtonTypes.LINK]),
};

Button.defaultProps = {
  children: null,
  type: ButtonTypes.NORMAL,
};

export default Button;
