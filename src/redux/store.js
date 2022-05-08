import { configureStore } from '@reduxjs/toolkit';

import selectedClassroomReducer from './reducers/selectedClassroom';
import lastUpdateReducer from './reducers/lastUpdate';

export default configureStore({
  reducer: {
    selectedClassroom: selectedClassroomReducer,
    lastUpdate: lastUpdateReducer,
  },
});
