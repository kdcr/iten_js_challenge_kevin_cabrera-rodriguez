import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LinkButton from '../../atomic/linkButton';

import { DeviceSizes, DeviceSizesNum } from '../../../utils/Constants';

import Label from '../../atomic/label';
import SettingsPanel from '../../atomic/settingsPanel/SettingsPanel';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${DeviceSizes.md}) {
    flex-direction: row;
    height: 60px;
  }

  height: 110px;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: var(--color-bg-alt);
`;

const Footer = () => {
  const { t } = useTranslation('common');

  const [width, setWidth] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const settingsRef = useRef(null);

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
        <Label size="large">{t('appTitle')}</Label>
        {width > DeviceSizesNum.md ? <Label size="large">-</Label> : ''}
        <Label size="large">{t('developedBy')}</Label>
      </div>
      <LinkButton onClick={() => window.open('https://www.linkedin.com/in/kdcr', '_blank')}>
        <Label size="large">Kevin David Cabrera Rodríguez</Label>
      </LinkButton>
      {width > DeviceSizesNum.md ? <Label size="large">-</Label> : ''}
      <LinkButton
        ref={settingsRef}
        onClick={() => setSettingsOpen(!settingsOpen)}
        style={{ float: 'left' }}
      >
        <Label size="large">{t('settings')}</Label>
      </LinkButton>
      <SettingsPanel
        style={{ bottom: 'calc(50% - 100px)', left: 'calc(50% - 150px)' }}
        open={settingsOpen}
        handleClose={() => setSettingsOpen(false)}
      />
    </FooterContainer>
  );
};

export default Footer;
