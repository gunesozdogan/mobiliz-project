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

// const addSectionShownReducer = (state = false, action) => {
//     switch (action.type) {
//         case "SHOW":
//             return true;
//         case "HIDE":
//             return false;
//         default:
//             return state;
//     }
// };

export default switchShownSectionReducer;
