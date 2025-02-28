import { createAction } from "@reduxjs/toolkit";
import { UserDataType } from "../../../shared/types/user-data-type";

export const loadUserData = createAction<UserDataType>("app/loadUserData");
export const saveUserName = createAction<string>("user/saveUserName");
export const changeActiveTaskList = createAction<string>(
  "tasksList/changeActiveTaskList"
);
