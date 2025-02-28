import { Store } from "../store";

export type AppState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
