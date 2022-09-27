import cors from "cors";

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
    // async function deleteVehicle(id) {
    //     fetch(
    //         `https://test001.testnet.mobiliz.com.tr/interview/vehicles/${id}`,
    //         {
    //             method: "DELETE",
    //             mode: "cors",
    //             credentials: "include",
    //             headers: {
    //                 Authorization:
    //                     "Basic " + btoa("gunes.ozdogan95@gmail.com:12345"),
    //             },
    //         }
    //     );
    // }

    return { getVehicles };
})();

export default myAPI;
