const addFormReducer = (state = false, action) => {
    switch (action.type) {
        case "toggleAdd":
            return !state;
        default:
            return state;
    }
};

export default addFormReducer;
