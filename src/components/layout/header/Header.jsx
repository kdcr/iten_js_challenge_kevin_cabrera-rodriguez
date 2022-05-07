import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => (
  <HeaderContainer>
    <div>title</div>
  </HeaderContainer>
);

export default Header;
