import { configureStore } from '@reduxjs/toolkit';

import selectedClassRoomReducer from './reducers/selectedClassroom';
import lastUpdateReducer from './reducers/lastUpdate';

export default configureStore({
  reducer: {
    selectedClassRoom: selectedClassRoomReducer,
    lastUpdate: lastUpdateReducer,
  },
});
