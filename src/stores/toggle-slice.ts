import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface IToggleState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: IToggleState = {
  isOpen: true,
};

export const ToggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleAside: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleAside } = ToggleSlice.actions;
export default ToggleSlice.reducer;
