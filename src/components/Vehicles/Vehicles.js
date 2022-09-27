import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Vehicles.css";
import { deleteVehicle } from "../../actions";
import myAPI from "../../modules/API";

export default function Vehicles() {
    const myAPIModule = myAPI;
    const vehicleData = useSelector(state => state.currentVehicles);
    const dispatch = useDispatch();
    return (
        <div className="vehicle-list-container">
            <ul className="vehicle-list">
                {vehicleData.vehicles
                    ? vehicleData.vehicles.map(vehicle => (
                          <li key={vehicle.id} className="vehicle-list-item">
                              <div className="left-container">
                                  {/* <button
                                      onClick={e => {
                                          dispatch(deleteVehicle(vehicle.id));
                                          myAPIModule.deleteVehicle(vehicle.id);
                                      }}
                                      className="vehicle-item-delete"
                                  ></button> */}
                                  <span>
                                      {vehicle.model} - {vehicle.brand} -{" "}
                                      {vehicle.plate}
                                  </span>
                              </div>
                              <button className="vehicle-item-edit">
                                  Edit
                              </button>
                          </li>
                      ))
                    : ""}
            </ul>
        </div>
    );
}
