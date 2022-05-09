import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Landing from '../landing';
import LayoutWrapper from '../layoutWrapper';
import { writeData } from '../../../api/ApiUtils';
import MockupData from '../../../api/MockupData.json';
import ClassroomList from '../classroomList/ClassroomList';
import ClassroomDetail from '../classroomDetail/ClassroomDetail';
import ClassroomCreation from '../classroomCreation/ClassroomCreation';
import StudentCreation from '../studentCreation';
import { setTheme } from '../../../redux/reducers/themeReducer';

const App = () => {
  const theme = useSelector((state) => state.theme.dark);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.itenData || localStorage.itenData === 'null') {
      writeData(MockupData);
    }
    if (localStorage?.darkTheme) {
      dispatch(setTheme(localStorage.darkTheme === 'true'));
    } else {
      dispatch(setTheme(false));
    }
  }, []);

  return (
    <div
      style={{ backgroundColor: 'var(--color-bg)' }}
      className={`${theme ? 'dark-theme' : 'light-theme'}`}
    >
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
          <Route
            path="/classroomDetail"
            element={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <LayoutWrapper>
                <ClassroomDetail />
              </LayoutWrapper>
            }
          />
          <Route
            path="/newClassroom"
            element={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <LayoutWrapper>
                <ClassroomCreation />
              </LayoutWrapper>
            }
          />
          <Route
            path="/newStudent"
            element={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <LayoutWrapper>
                <StudentCreation />
              </LayoutWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
