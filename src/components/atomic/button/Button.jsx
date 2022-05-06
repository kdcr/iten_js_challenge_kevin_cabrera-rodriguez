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

  cursor: pointer;
  color: ${({ type }) => (type === ButtonTypes.NORMAL ? 'var(--color-fg)' : 'var(--color-fg-alt)')};
  background-color: ${({ type }) => (type === ButtonTypes.NORMAL ? 'var(--color-accent)' : 'var(--color-warning)')};
`;

const Button = (props) => {
  const { children, type, onClick } = props;

  return (
    <Container onClick={onClick} type={type}>
      {children}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf([ButtonTypes.NORMAL, ButtonTypes.WARNING]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  type: ButtonTypes.NORMAL,
  onClick: () => {},
};

export default Button;
