const searchedVehicleReducer = (state = [], action) => {
    switch (action.type) {
        case "updateSearched":
            return {
                vehicles: action.payload,
            };
        case "deleteSearched":
            return {
                vehicles: state.vehicles.filter(
                    vehicle => vehicle.id !== action.payload
                ),
            };
        case "resetSearched":
            return {
                vehicles: [],
            };
        default:
            return state;
    }
};

const editedVehicleReducer = (state = "", action) => {
    switch (action.type) {
        case "updateEdited":
            return {
                vehicle: action.payload,
            };
        case "resetEdited":
            return {
                vehicle: [],
            };
        default:
            return state;
    }
};

const addedVehicleReducer = (state = [], action) => {
    switch (action.type) {
        case "updateAdded":
            return {
                vehicles: action.payload,
            };
        case "deleteAdded":
            return {
                vehicles: state.vehicles.filter(
                    vehicle => vehicle.id !== action.payload
                ),
            };
        case "resetAdded":
            return {
                vehicles: [],
            };
        default:
            return state;
    }
};

export { searchedVehicleReducer, editedVehicleReducer, addedVehicleReducer };
