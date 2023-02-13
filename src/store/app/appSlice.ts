import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  previousUrls?: previousUrls[];
}

interface previousUrls {
  originalUrl: string;
  shortUrl: string;
}

const initialState: AppState = { previousUrls: [] };

const accountSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPreviousUrls(state, action: PayloadAction<previousUrls>) {
      // Logic to remove element there is more than 5 elements
      console.log(
        "state.previousUrls?.length ?? 0",
        state.previousUrls?.length ?? 0
      );
      if ((state.previousUrls?.length ?? 0) >= 5) {
        state.previousUrls?.pop();
      }
      state.previousUrls?.unshift(action.payload);
    },
  },
});

export const { setPreviousUrls } = accountSlice.actions;
export default accountSlice.reducer;
