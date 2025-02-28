import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppState } from "../../../app/store/types/state";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
