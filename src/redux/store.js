import { configureStore } from '@reduxjs/toolkit';

import selectedClassRoomReducer from './reducers/selectedClassroom';

export default configureStore({
  reducer: {
    selectedClassRoom: selectedClassRoomReducer,
  },
});
