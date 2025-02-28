import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store/types/state";

export const useAppDispatch = () => useDispatch<AppDispatch>();
