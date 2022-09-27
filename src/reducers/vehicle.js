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

export default vehicleReducer;
