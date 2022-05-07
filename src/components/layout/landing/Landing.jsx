import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const Landing = (props) => {
  const { children } = props;

  return (
    <LandingContainer>
      <div style={{ fontSize: '48px' }}>Welcome</div>
      {children}
    </LandingContainer>
  );
};

Landing.propTypes = {
  children: PropTypes.node,
};

Landing.defaultProps = {
  children: null,
};

export default Landing;
