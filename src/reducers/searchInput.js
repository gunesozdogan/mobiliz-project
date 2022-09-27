const inputReducer = (state = { plate: "", brand: "", model: "" }, action) => {
    switch (action.type) {
        case "plate":
            return {
                plate: action.payload,
                brand: state.brand,
                model: state.model,
            };
        case "brand":
            return {
                plate: state.plate,
                brand: action.payload,
                model: state.model,
            };
        case "model":
            return {
                plate: state.plate,
                brand: state.brand,
                model: action.payload,
            };
        default:
            return state;
    }
};

export default inputReducer;
