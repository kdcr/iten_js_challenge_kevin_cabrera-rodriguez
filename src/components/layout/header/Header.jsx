import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LinkButton from '../../atomic/linkButton';

import { DeviceSizes } from '../../../utils/Constants';

import Label from '../../atomic/label';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-accent);

  height: 90px;
  padding: 0 25px 0 25px;

  @media (max-width: ${DeviceSizes.sm}) {
    height: 75px;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <HeaderContainer>
      <LinkButton onClick={() => navigate('/')}>
        <Label size="subtitle">{t('appTitle')}</Label>
      </LinkButton>
      <LinkButton onClick={() => navigate('/classrooms')}>
        <Label size="subtitle">{t('classrooms')}</Label>
      </LinkButton>
    </HeaderContainer>
  );
};

export default Header;
