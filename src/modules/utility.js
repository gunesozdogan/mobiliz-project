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

    return { editVehicle };
})();

export default myUtility;
