import { TasksListsType } from "./tasks-lists-type";

export type UserDataType = {
  id: string;
  email: string;
  password: string;
  name: string;
  tasksLists: TasksListsType[];
};
