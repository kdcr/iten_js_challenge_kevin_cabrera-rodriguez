/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const lastUpdateSlice = createSlice({
  name: 'lastUpdate',
  initialState,
  reducers: {
    setLastUpdate: (state, { payload }) => {
      state.value = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLastUpdate } = lastUpdateSlice.actions;

export default lastUpdateSlice.reducer;
