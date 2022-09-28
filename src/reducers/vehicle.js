const vehicleReducer = (state = [], action) => {
    switch (action.type) {
        case "update":
            return {
                vehicles: action.payload,
            };
        case "delete":
            return {
                vehicles: state.vehicles.filter(
                    vehicle => vehicle.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

const currentEditVehicleReducer = (state = "", action) => {
    switch (action.type) {
        case "updateVehicleEdit":
            return {
                vehicle: action.payload,
            };
        default:
            return state;
    }
};

export { vehicleReducer, currentEditVehicleReducer };
