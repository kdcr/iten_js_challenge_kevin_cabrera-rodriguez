import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
`;

const SwitchContainer = styled.div`
  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: start;

  width: 40px;
  height: 20px;

  background-color: ${({ checked }) => (checked ? 'var(--color-accent)' : 'var(--color-bg-alt)')};
`;

const SwitchElement = styled.div`
  background-color: var(--color-fg-alt);
  height: 14px;
  width: 14px;
  border-radius: 9999px;

  transition-duration: 500ms;

  transform: ${({ checked }) => (checked ? 'translateX(22px)' : 'translateX(4px)')};
`;

const Switch = (props) => {
  const { children, value, onClick, className, style } = props;

  return (
    <Container onClick={onClick} className={className} style={style}>
      <SwitchContainer checked={value}>
        <SwitchElement checked={value} />
      </SwitchContainer>
      {children}
    </Container>
  );
};

Switch.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Switch.defaultProps = {
  children: null,
  value: false,
  onClick: () => {},
  className: '',
  style: {},
};

export default Switch;
