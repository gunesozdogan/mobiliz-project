import switchShownSectionReducer from "./isShown";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    isShown: switchShownSectionReducer,
});

export default allReducers;
