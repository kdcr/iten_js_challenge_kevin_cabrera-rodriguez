import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { DeviceSizes } from '../../../utils/Constants';

import Label from '../../atomic/label';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-accent);

  height: 50px;
  @media (min-width: ${DeviceSizes.md}) {
    height: 90px;
    padding: 0 25px 0 25px;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <HeaderContainer>
      <span
        onKeyPress={() => navigate('/')}
        tabIndex={0}
        style={{ cursor: 'pointer' }}
        role="link"
        onClick={() => navigate('/')}
      >
        <Label size="subtitle">{t('appTitle')}</Label>
      </span>
      <span
        onKeyPress={() => navigate('/classrooms')}
        tabIndex={0}
        style={{ cursor: 'pointer' }}
        role="link"
        onClick={() => navigate('/classrooms')}
      >
        <Label size="subtitle">{t('classrooms')}</Label>
      </span>
    </HeaderContainer>
  );
};

export default Header;
