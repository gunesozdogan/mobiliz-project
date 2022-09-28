const editFormReducer = (state = false, action) => {
    switch (action.type) {
        case "toggleEdit":
            return !state;
        default:
            return state;
    }
};

export default editFormReducer;
