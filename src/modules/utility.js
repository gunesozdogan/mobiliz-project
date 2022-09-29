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
                break;
            }
        }

        return vehicles;
    }

    function Vehicle(modelYear, model, brand, plate, notes) {
        return { plate, brand, model, modelYear, notes };
    }

    function createDropdownArray(models, selectElement) {
        const arr = [];
        selectElement.options.length = 0;
        models.forEach(element => {
            arr.push({ text: element.model, value: element.model });
        });

        // adds models as dropdown option
        arr.forEach(item =>
            selectElement.options.add(new Option(item.text, item.value))
        );

        return arr;
    }

    return { editVehicle, Vehicle, createDropdownArray };
})();

export default myUtility;
