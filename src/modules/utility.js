const myUtility = (function () {
    function editVehicle(id, newModel, newBrand, newPlate, vehicles) {
        for (let i = 0; i < vehicles.length; i++) {
            if (vehicles[i].id === id) {
                console.log("ty");
                console.log(newBrand);
                vehicles[i].brand = newBrand;
                vehicles[i].plate = newPlate;
                vehicles[i].model = newModel;
            }
        }

        return vehicles;
    }

    return { editVehicle };
})();

export default myUtility;
