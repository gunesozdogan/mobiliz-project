import switchShownSectionReducer from "./isShown";
import inputReducer from "./searchInput";
import { vehicleReducer, currentEditVehicleReducer } from "./vehicle";
import editPageReducer from "./toggleEdit";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    isShown: switchShownSectionReducer,
    searchInput: inputReducer,
    currentVehicles: vehicleReducer,
    isEditPageShown: editPageReducer,
    currentVehicleEdit: currentEditVehicleReducer,
});

export default allReducers;
