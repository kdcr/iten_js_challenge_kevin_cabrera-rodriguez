import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';

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
      <Header />
      {children}
      <Footer />
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
