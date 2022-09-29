const myAPI = (function () {
    async function getVehicles(str) {
        const response = await fetch(
            `https://test001.testnet.mobiliz.com.tr/interview/vehicles?${str}`,
            {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: {
                    Authorization:
                        "Basic " + btoa("gunes.ozdogan95@gmail.com:12345"),
                },
            }
        );
        const data = await response.json();
        return data;
    }
    async function deleteVehicle(id) {
        fetch(
            `https://test001.testnet.mobiliz.com.tr/interview/vehicles/${id}`,
            {
                method: "DELETE",
                mode: "cors",
                credentials: "include",
                headers: {
                    Authorization:
                        "Basic " + btoa("gunes.ozdogan95@gmail.com:12345"),
                },
            }
        );
    }

    async function editVehicle(id, item) {
        fetch(
            `https://test001.testnet.mobiliz.com.tr/interview/vehicles/${id}`,
            {
                method: "PUT",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Basic " + btoa("gunes.ozdogan95@gmail.com:12345"),
                },
                body: JSON.stringify(item),
            }
        );
    }

    async function addVehicle(item) {
        console.log(item);
        fetch(`https://test001.testnet.mobiliz.com.tr/interview/vehicles`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Basic " + btoa("gunes.ozdogan95@gmail.com:12345"),
            },
            body: JSON.stringify(item),
        });
    }

    async function getBrandModels(brand) {
        const response = await fetch(
            `https://test001.testnet.mobiliz.com.tr/interview/models/brand/${brand}`,
            {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: {
                    Authorization:
                        "Basic " + btoa("gunes.ozdogan95@gmail.com:12345"),
                },
            }
        );
        const data = await response.json();
        return data;
    }

    // returns id of the vehicle object according to brand/model combination
    async function getModelID(model, brand) {
        const data = await getBrandModels(brand);

        for (let item of data) {
            if (item.model === model) {
                return item.id;
            }
        }
    }

    return {
        getVehicles,
        deleteVehicle,
        editVehicle,
        addVehicle,
        getBrandModels,
        getModelID,
    };
})();

export default myAPI;
