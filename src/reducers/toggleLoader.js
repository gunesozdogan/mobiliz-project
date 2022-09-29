const loaderReducer = (state = false, action) => {
    switch (action.type) {
        case "toggleLoader":
            return !state;
        default:
            return state;
    }
};

export default loaderReducer;
