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

    async function login(email, password) {
        const item = {
            id: 0,
            email,
            password: String(password),
        };

        const response = await fetch(
            `https://test001.testnet.mobiliz.com.tr/interview/login`,
            {
                method: "POST",
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

        return response.status === 200 ? true : false;
    }

    // gets vehicle exact location
    async function getLocation(id) {
        try {
            const coordResponse = await fetch(
                "https://test001.testnet.mobiliz.com.tr/interview/locations",
                {
                    method: "GET",
                    mode: "cors",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Basic " + btoa("gunes.ozdogan95@gmail.com:12345"),
                    },
                }
            );
            // gets vehicle coordinates according to vehicle id
            const coordData = await coordResponse.json();

            const curLocation = coordData.filter(
                item => item.vehicleId === Number(id)
            );

            if (curLocation.length === 0)
                return "Something went wrong, please try again later!";

            const { latitude, longitude } = curLocation[0];

            // google maps geocode api for returning vehicle location with vehicle coordinates
            const locationsResponse = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBUoZRtWUNW0G6k-OkAeFENM3Ipd73JJ58`
            );
            const locationsData = await locationsResponse.json();
            return locationsData.results[0]["formatted_address"];
        } catch (err) {
            console.log(err);
        }
    }

    return {
        getVehicles,
        deleteVehicle,
        editVehicle,
        addVehicle,
        getBrandModels,
        getModelID,
        login,
        getLocation,
    };
})();

export default myAPI;
