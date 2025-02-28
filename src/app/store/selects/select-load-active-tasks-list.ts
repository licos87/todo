import { AppState } from "../types/state";

export const selectLoadActiveTasksList = (state: AppState) =>
  state.activeTasksList;
