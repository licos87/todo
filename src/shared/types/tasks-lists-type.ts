import { TaskType } from "./task-type";

export type TasksListsType = {
  id: number;
  listTitle: string;
  colorTheme: "green" | "blue";
  tasks: TaskType[];
};
