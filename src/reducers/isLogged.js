const switchLoggedInReducer = (state = false, action) => {
    switch (action.type) {
        case "switchLoggedIn":
            return !state;

        default:
            return state;
    }
};

export default switchLoggedInReducer;
