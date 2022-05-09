import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonTypes = {
  NORMAL: 'normal',
  WARNING: 'warning',
};

// prettier-ignore
const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  width: 210px;
  border: 0;
  border-radius: 4px;
  
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ type }) => (type === ButtonTypes.NORMAL ? 'var(--color-fg)' : 'var(--color-fg-alt)')};
  ${({ disabled, type }) => (disabled ? '' : `
    background-color: ${(type === ButtonTypes.NORMAL ? 'var(--color-accent)' : 'var(--color-warning)')};
  `)}
  background-color: ${({ disabled }) => disabled && 'var(--color-bg-alt)'};
`;

const Button = (props) => {
  const { children, type, onClick, disabled, className, style } = props;

  return (
    <Container
      onClick={!disabled && onClick}
      type={type}
      disabled={disabled}
      className={className}
      style={style}
    >
      {children}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf([ButtonTypes.NORMAL, ButtonTypes.WARNING]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Button.defaultProps = {
  children: null,
  type: ButtonTypes.NORMAL,
  onClick: () => {},
  disabled: false,
  className: '',
  style: {},
};

export default Button;
