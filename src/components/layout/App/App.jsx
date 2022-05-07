import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppThemes } from '../../../utils/Constants';
import Landing from '../landing';
import LayoutWrapper from '../layoutWrapper';
import { writeData } from '../../../api/ApiUtils';
import MockupData from '../../../api/MockupData.json';
import ClassroomList from '../classroomList/ClassroomList';

const App = (props) => {
  const { theme } = props;

  useEffect(() => {
    if (!localStorage.itenData || localStorage.itenData === 'null') {
      writeData(MockupData);
    }
  }, []);

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
          <Route
            path="/classrooms"
            element={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <LayoutWrapper>
                <ClassroomList />
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
