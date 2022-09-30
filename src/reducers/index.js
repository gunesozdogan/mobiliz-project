import { switchShownSectionReducer, toggleLoginForm } from "./isShown";
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
import switchLoggedInReducer from "./isLogged";
import locationReducer from "./toggleLocation";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    isLoggedIn: switchLoggedInReducer,
    isLoginFormShown: toggleLoginForm,
    isShown: switchShownSectionReducer,
    isLocationShown: locationReducer,
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
