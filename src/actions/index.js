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

export const updateCurrentVehicles = val => {
    return {
        type: "update",
        payload: val,
    };
};

export const deleteVehicle = val => {
    return {
        type: "delete",
        payload: val,
    };
};

export const toggleEditPage = () => {
    return {
        type: "toggle",
    };
};

export const updateCurrentVehicleEdit = val => {
    return {
        type: "updateVehicleEdit",
        payload: val,
    };
};
