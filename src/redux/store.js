import { configureStore } from '@reduxjs/toolkit';

import selectedClassroomReducer from './reducers/selectedClassroom';
import lastUpdateReducer from './reducers/lastUpdate';
import themeReducer from './reducers/themeReducer';

export default configureStore({
  reducer: {
    selectedClassroom: selectedClassroomReducer,
    lastUpdate: lastUpdateReducer,
    theme: themeReducer,
  },
});
