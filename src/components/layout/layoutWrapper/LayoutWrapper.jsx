import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const LayoutWrapper = (props) => {
  const { children } = props;

  return (
    <WrapperContainer>
      {/* TODO: add header here when implemented */}
      {children}
      {/* TODO: add footer here when implemented */}
    </WrapperContainer>
  );
};

LayoutWrapper.propTypes = {
  children: PropTypes.node,
};

LayoutWrapper.defaultProps = {
  children: null,
};

export default LayoutWrapper;
