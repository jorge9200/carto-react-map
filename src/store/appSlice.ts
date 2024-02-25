import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'app',
  initialState: {
    error: null,
    bottomSheetOpen: false,
    pointStyles: {
      fillColor: { r: 0, g: 0, b: 0 },
      outlineSize: 2,
      outlineColor: { r: 0, g: 0, b: 0 },
      radius: 2,
      columnBased: false,
    },
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setBottomSheetOpen: (state, action) => {
      state.bottomSheetOpen = action.payload;
    },
    setPointStyles: (state, action) => {
      state.pointStyles = {...state.pointStyles, ...action.payload};
    },
  },
});

export default slice.reducer;

export const setError = (payload: string | null) => ({
  type: 'app/setError',
  payload,
});

export const setBottomSheetOpen = (payload: boolean) => ({
  type: 'app/setBottomSheetOpen',
  payload,
});

export const setPointStyles = (payload: PointStyles) => ({
  type: 'app/setPointStyles',
  payload,
});
