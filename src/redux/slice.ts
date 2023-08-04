import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isShowModal: false,
  error: null,
};

const Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isShowModal = action.payload;
    },
  },
});

export const Reducer = Slice.reducer;
export const { showModal } = Slice.actions;
