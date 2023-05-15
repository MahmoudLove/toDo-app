import { createSlice } from '@reduxjs/toolkit';

const formsSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    savedName: null,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    saveName(state, action) {
      if (action.payload) {
        state.savedName = action.payload;
        return;
      }
      state.savedName = state.name;
      localStorage.setItem('happyName', JSON.stringify(state.name));
    },
    removeName(state, action) {
      state.name = '';
      state.savedName = null;
      localStorage.removeItem('happyName');
    },
  },
});

export const { changeName, saveName, removeName } = formsSlice.actions;
export const formsReducer = formsSlice.reducer;
