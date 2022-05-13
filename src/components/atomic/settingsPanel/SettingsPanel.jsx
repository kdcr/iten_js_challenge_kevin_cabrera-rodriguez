import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { reloadMockUp } from '../../../api/ApiUtils';

import i18n from '../../../i18n';
import { setTheme } from '../../../redux/reducers/themeReducer';
import Button from '../button';
import Label from '../label';
import Select from '../select';
import Switch from '../switch';

const Container = styled.div`
  position: absolute;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1rem;

  border: 1px solid var(--color-border);
  background-color: var(--color-bg);

  width: 300px;
  height: 100px;
  padding: 20px;
  z-index: 20;
`;

const Backdrop = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-bg-opacity);
  z-index: 10;
`;

const SettingsPanel = ({ open, handleClose, className, style }) => {
  const { t } = useTranslation('common');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const darkTheme = useSelector((state) => state.theme.dark);

  return (
    <div>
      <Container open={open} className={className} style={style}>
        <Switch value={darkTheme} onClick={() => dispatch(setTheme(!darkTheme))}>
          <Label>{`${t('darkTheme')} ${t('experimental')}!`}</Label>
        </Switch>
        <Select
          style={{ width: '100px' }}
          selectedOption={t(i18n.language)}
          options={['es', 'en']}
          onChange={(value) => i18n.changeLanguage(value)}
        />
        <Button
          onClick={() => {
            reloadMockUp();
            navigate('/');
            handleClose();
          }}
        >
          {t('reloadMockupData')}
        </Button>
      </Container>
      {open ? <Backdrop onClick={handleClose} /> : null}
    </div>
  );
};

SettingsPanel.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

SettingsPanel.defaultProps = {
  open: false,
  handleClose: () => {},
  className: '',
  style: {},
};

export default SettingsPanel;
