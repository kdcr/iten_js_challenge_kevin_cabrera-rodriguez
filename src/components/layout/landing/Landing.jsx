import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Label from '../../atomic/label';

const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const Landing = () => {
  const { t } = useTranslation('common');

  return (
    <LandingContainer>
      <Label size="title">{t('welcome')}</Label>
    </LandingContainer>
  );
};

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
