const locationReducer = (state = false, action) => {
    switch (action.type) {
        case "showLocation":
            return action.payload;
        case "hideLocation":
            return false;
        default:
            return state;
    }
};

export default locationReducer;
