const switchShownSectionReducer = (
    state = { search: true, add: false },
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

export default switchShownSectionReducer;
