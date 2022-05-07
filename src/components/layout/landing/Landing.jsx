import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';
import Label from '../../atomic/label';
import Button from '../../atomic/button';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  height: 100%;
`;

const Landing = () => {
  const { t } = useTranslation('common');

  const navigate = useNavigate();

  return (
    <LandingContainer>
      <Label size="title">{t('welcome')}</Label>
      <Button onClick={() => navigate('/newClassroom')}>{t('addClassroom')}</Button>
    </LandingContainer>
  );
};

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
