/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const selectedClassroomSlice = createSlice({
  name: 'selectedClassroom',
  initialState,
  reducers: {
    setClassroom: (state, { payload }) => {
      state.value = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClassroom } = selectedClassroomSlice.actions;

export default selectedClassroomSlice.reducer;
