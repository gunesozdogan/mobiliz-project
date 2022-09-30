const switchShownSectionReducer = (
    state = { search: true, add: false, login: false },
    action
) => {
    switch (action.type) {
        case "showSearchSection":
            return { search: true, add: false };
        case "showAddSection":
            return { search: false, add: true };
        default:
            return state;
    }
};

const toggleLoginForm = (state = true, action) => {
    switch (action.type) {
        case "toggleLoginForm":
            return !state;
        default:
            return state;
    }
};
export { toggleLoginForm, switchShownSectionReducer };
