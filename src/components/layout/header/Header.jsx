import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Label from '../../atomic/label';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  const { t } = useTranslation('common');

  return (
    <HeaderContainer>
      <Link to="/">
        <Label size="subtitle">{t('appTitle')}</Label>
      </Link>
      <Link to="/">
        <Label size="subtitle">{t('appTitle')}</Label>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
