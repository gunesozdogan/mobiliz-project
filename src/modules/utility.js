const myUtility = (function () {
    function editVehicle(
        id,
        newModelYear,
        newModel,
        newBrand,
        newPlate,
        newNotes,
        vehicles
    ) {
        for (let i = 0; i < vehicles.length; i++) {
            if (vehicles[i].id === id) {
                vehicles[i].modelYear = newModelYear;
                vehicles[i].brand = newBrand;
                vehicles[i].plate = newPlate;
                vehicles[i].model = newModel;
                vehicles[i].notes = newNotes;
            }
        }

        return vehicles;
    }

    function Vehicle(modelYear, model, brand, plate, notes) {
        return { plate, brand, model, modelYear, notes };
    }

    return { editVehicle, Vehicle };
})();

export default myUtility;
