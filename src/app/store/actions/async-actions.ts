import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch, AppState } from "../types/state";
import { loadUserData } from "./actions";
import { BASE_URL } from "../../../shared/config/api";
import { getUser } from "../../api/token";
import { UserDataType } from "../../../shared/types/user-data-type";

export const fetchUserDataAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>("data/fetchUserData", async (_arg, { dispatch, extra: api }) => {
  // const user = getUser();
  const user = "tester1@mail.ru";
  try {
    const { data } = await api.get<UserDataType>(`${BASE_URL}?email=${user}`);
    dispatch(loadUserData(data));
  } catch (error) {
    throw new Error("Warning, we have error");
  }
});
