import { configureStore } from '@reduxjs/toolkit';

import selectedClassroomReducer from './reducers/selectedClassroom';
import lastUpdateReducer from './reducers/lastUpdate';
import themeReducer from './reducers/themeReducer';

/**
 * The apps main store, every reduces should be here!
 */
export default configureStore({
  reducer: {
    selectedClassroom: selectedClassroomReducer,
    lastUpdate: lastUpdateReducer,
    theme: themeReducer,
  },
});
