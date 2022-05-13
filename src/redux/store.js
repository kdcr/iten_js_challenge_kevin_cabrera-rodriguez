import { configureStore } from '@reduxjs/toolkit';

import selectedClassroomReducer from './reducers/selectedClassroom';
import themeReducer from './reducers/themeReducer';

/**
 * The apps main store, every reduces should be here!
 */
export default configureStore({
  reducer: {
    selectedClassroom: selectedClassroomReducer,
    theme: themeReducer,
  },
});
