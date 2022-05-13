/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

/**
 * @deprecated
 */
export const lastUpdateSlice = createSlice({
  name: 'lastUpdate',
  initialState,
  reducers: {
    /**
     * @deprecated
     * @param {*} state
     * @param {*} param1
     */
    setLastUpdate: (state, { payload }) => {
      state.value = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLastUpdate } = lastUpdateSlice.actions;

export default lastUpdateSlice.reducer;
