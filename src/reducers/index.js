import switchShownSectionReducer from "./isShown";
import inputReducer from "./searchInput";
import {
    searchedVehicleReducer,
    editedVehicleReducer,
    addedVehicleReducer,
} from "./vehicle";
import editFormReducer from "./toggleEdit";
import addFormReducer from "./toggleAdd";
import loaderReducer from "./toggleLoader";
import themeColorReducer from "./themeColor";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    isShown: switchShownSectionReducer,
    isLoaderShown: loaderReducer,
    isEditFormShown: editFormReducer,
    isAddFormShown: addFormReducer,
    themeColor: themeColorReducer,
    searchInput: inputReducer,
    searchedVehicles: searchedVehicleReducer,
    addedVehicles: addedVehicleReducer,
    editedVehicle: editedVehicleReducer,
});

export default allReducers;
