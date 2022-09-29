const themeColorReducer = (state = "light", action) => {
    switch (action.type) {
        case "toggleThemeColor":
            return state === "light" ? "dark" : "light";
        default:
            return state;
    }
};

export default themeColorReducer;
