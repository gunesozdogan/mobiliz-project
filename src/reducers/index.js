import switchShownSectionReducer from "./isShown";
import inputReducer from "./searchInput";
import {
    searchedVehicleReducer,
    editedVehicleReducer,
    addedVehicleReducer,
} from "./vehicle";
import editFormReducer from "./toggleEdit";
import addFormReducer from "./toggleAdd";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    isShown: switchShownSectionReducer,
    isEditFormShown: editFormReducer,
    isAddFormShown: addFormReducer,
    searchInput: inputReducer,
    searchedVehicles: searchedVehicleReducer,
    addedVehicles: addedVehicleReducer,
    editedVehicle: editedVehicleReducer,
});

export default allReducers;
