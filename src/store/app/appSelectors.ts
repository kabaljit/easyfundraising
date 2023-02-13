import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const selectSelf = (state: RootState) => state.app;

export const selectPreviousUrls = createSelector(
  selectSelf,
  (appState) => appState.previousUrls
);
