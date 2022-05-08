/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const selectedClassRoomSlice = createSlice({
  name: 'selectedClassroom',
  initialState,
  reducers: {
    setClassroom: (state, { payload }) => {
      state.value = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClassroom } = selectedClassRoomSlice.actions;

export default selectedClassRoomSlice.reducer;
