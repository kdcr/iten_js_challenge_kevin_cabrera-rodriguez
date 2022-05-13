import { configureStore } from '@reduxjs/toolkit';

import selectedClassroomReducer from './reducers/selectedClassroom';
import themeReducer from './reducers/themeReducer';

export default configureStore({
  reducer: {
    selectedClassroom: selectedClassroomReducer,
    theme: themeReducer,
  },
});
