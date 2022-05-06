import React from 'react';
import PropTypes from 'prop-types';
import { AppThemes } from '../../../utils/Constants';

const App = (props) => {
  const { children, theme } = props;

  return (
    <div className={`${theme === AppThemes.LIGHT ? 'light-theme' : 'dark-theme'}`}>{children}</div>
  );
};

App.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf([AppThemes.LIGHT, AppThemes.DARK]),
};

App.defaultProps = {
  children: null,
  theme: 'light',
};

export default App;
