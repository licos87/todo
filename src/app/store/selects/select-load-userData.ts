import { AppState } from "../types/state";

export const selectLoadUserData = (state: AppState) => state.userData?.at(0);
