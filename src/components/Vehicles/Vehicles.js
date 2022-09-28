import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Vehicles.css";
import {
    deleteVehicle,
    toggleEditPage,
    updateCurrentVehicleEdit,
} from "../../actions";
import myAPI from "../../modules/API";

export default function Vehicles() {
    const myAPIModule = myAPI;
    const vehicleData = useSelector(state => state.currentVehicles);
    const dispatch = useDispatch();

    // Displays edit page and uses edited vehicle properties as default values
    const handleClick = useCallback(
        e => {
            const parent = e.target.parentNode;
            dispatch(toggleEditPage());
            dispatch(
                updateCurrentVehicleEdit(
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
                                                  deleteVehicle(vehicle.id)
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
