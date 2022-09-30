export const showSearchSection = () => {
    return {
        type: "showSearchSection",
    };
};

export const showAddSection = () => {
    return {
        type: "showAddSection",
    };
};

export const toggleLoginForm = () => {
    return {
        type: "toggleLoginForm",
    };
};

export const updatePlateInput = val => {
    return {
        type: "plate",
        payload: val,
    };
};

export const updateBrandInput = val => {
    return {
        type: "brand",
        payload: val,
    };
};

export const updateModelInput = val => {
    return {
        type: "model",
        payload: val,
    };
};

export const updateSearchedVehicles = val => {
    return {
        type: "updateSearched",
        payload: val,
    };
};

export const resetSearchedVehicles = () => {
    return {
        type: "resetSearched",
    };
};

export const deleteSearchedVehicle = val => {
    return {
        type: "deleteSearched",
        payload: val,
    };
};

export const updateAddedVehicles = val => {
    return {
        type: "updateAdded",
        payload: val,
    };
};

export const resetAddedVehicles = () => {
    return {
        type: "resetAdded",
    };
};

export const deleteAddedVehicle = val => {
    return {
        type: "deleteAdded",
        payload: val,
    };
};

export const toggleEditForm = () => {
    return {
        type: "toggleEdit",
    };
};

export const toggleAddForm = () => {
    return {
        type: "toggleAdd",
    };
};

export const toggleLoader = () => {
    return {
        type: "toggleLoader",
    };
};

export const toggleThemeColor = () => {
    return {
        type: "toggleThemeColor",
    };
};

// updates state for vehicle that is only being edited
export const updateEditedVehicle = val => {
    return {
        type: "updateEdited",
        payload: val,
    };
};

export const resetEditedVehicle = () => {
    return {
        type: "resetEdited",
    };
};

export const switchLoggedIn = () => {
    return {
        type: "switchLoggedIn",
    };
};
