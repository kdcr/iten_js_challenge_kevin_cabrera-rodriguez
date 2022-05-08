import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LinkButton from '../../atomic/linkButton';

import { DeviceSizes, DeviceSizesNum } from '../../../utils/Constants';

import Label from '../../atomic/label';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${DeviceSizes.md}) {
    flex-direction: row;
    height: 60px;
  }

  height: 80px;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: var(--color-bg-alt);
`;

const Footer = () => {
  const { t } = useTranslation('common');

  const [width, setWidth] = useState(null);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <FooterContainer devices={DeviceSizes}>
      <div style={{ display: 'flex', 'flex-direction': 'row', gap: '0.5rem' }}>
        <Label style={{ 'font-size': '16px' }} size="subtitle">
          {t('appTitle')}
        </Label>
        {width > DeviceSizesNum.md ? <span>-</span> : ''}
        <Label style={{ 'font-size': '16px' }} size="subtitle">
          {t('developedBy')}
        </Label>
      </div>
      <LinkButton onClick={() => window.open('https://www.linkedin.com/in/kdcr', '_blank')}>
        <span>Kevin David Cabrera Rodríguez</span>
      </LinkButton>
    </FooterContainer>
  );
};

export default Footer;
