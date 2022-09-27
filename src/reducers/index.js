import switchShownSectionReducer from "./isShown";
import inputReducer from "./searchInput";
import vehicleReducer from "./vehicle";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    isShown: switchShownSectionReducer,
    searchInput: inputReducer,
    currentVehicles:vehicleReducer
});

export default allReducers;
