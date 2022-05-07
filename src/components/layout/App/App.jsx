import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppThemes } from '../../../utils/Constants';
import Landing from '../landing';
import LayoutWrapper from '../layoutWrapper';

const App = (props) => {
  const { theme } = props;

  return (
    <div className={`${theme === AppThemes.LIGHT ? 'light-theme' : 'dark-theme'}`}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <LayoutWrapper>
                <Landing />
              </LayoutWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  theme: PropTypes.oneOf([AppThemes.LIGHT, AppThemes.DARK]),
};

App.defaultProps = {
  theme: 'light',
};

export default App;
