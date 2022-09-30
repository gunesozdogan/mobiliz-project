import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./VehiclesSearch.css";
import {
    deleteSearchedVehicle,
    toggleEditForm,
    showLocation,
    updateEditedVehicle,
} from "../../actions";
import myAPI from "../../modules/API";

export default function VehiclesSearch() {
    const myAPIModule = myAPI;
    const vehicleData = useSelector(state => state.searchedVehicles);
    const dispatch = useDispatch();

    // Displays edit page and uses edited vehicle properties as default values
    const handleClick = useCallback(
        e => {
            const parent = e.target.parentNode;
            dispatch(toggleEditForm());
            dispatch(
                updateEditedVehicle(
                    vehicleData.vehicles.find(vehicle => {
                        return (
                            vehicle.id ===
                            Number(parent.getAttribute("data-key"))
                        );
                    })
                )
            );
        },
        [dispatch, vehicleData.vehicles]
    );

    const handleLocationClick = async e => {
        const id = e.target.parentNode.getAttribute("data-key");
        const location = await myAPIModule.getLocation(id);
        dispatch(showLocation(location));
        return location;
    };
    return (
        <div>
            <div className="vehicle-list-container">
                <ul className="vehicle-list">
                    {/* creates list items for each vehicle */}
                    {vehicleData.vehicles
                        ? vehicleData.vehicles.map(vehicle => (
                              <li
                                  data-key={vehicle.id}
                                  key={vehicle.id}
                                  className="vehicle-list-item"
                              >
                                  <div className="left-container">
                                      <button
                                          onClick={e => {
                                              dispatch(
                                                  deleteSearchedVehicle(
                                                      vehicle.id
                                                  )
                                              );
                                              myAPIModule.deleteVehicle(
                                                  vehicle.id
                                              );
                                          }}
                                          className="vehicle-item-delete"
                                      ></button>
                                      <span className="vehicle-item-text">
                                          {vehicle.modelYear} - {vehicle.model}-{" "}
                                          {vehicle.brand} - {vehicle.plate}
                                          {vehicle.notes
                                              ? " (" + vehicle.notes + ")"
                                              : ""}
                                      </span>
                                  </div>
                                  <button
                                      onClick={handleLocationClick}
                                      className="vehicle-item-location"
                                  >
                                      Location
                                  </button>
                                  <button
                                      onClick={handleClick}
                                      className="vehicle-item-edit"
                                  >
                                      Edit
                                  </button>
                              </li>
                          ))
                        : ""}
                </ul>
            </div>
        </div>
    );
}
