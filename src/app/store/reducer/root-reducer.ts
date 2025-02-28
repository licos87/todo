import { createReducer } from "@reduxjs/toolkit";
import { changeActiveTaskList, loadUserData } from "../actions/actions";
import { UserDataType } from "../../../shared/types/user-data-type";

type TInitialState = {
  userName: string;
  userData: UserDataType | null;
  activeTasksList: string;
};

const initialState: TInitialState = {
  userName: "tester1@mail.ru",
  userData: null,
  activeTasksList: "",
};

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUserData, (state, { payload }) => {
      state.userData = payload;
    })
    .addCase(changeActiveTaskList, (state, { payload }) => {
      state.activeTasksList = payload;
    });
});
