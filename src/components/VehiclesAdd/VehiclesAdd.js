import React from "react";
import { useSelector } from "react-redux";
import "./VehiclesAdd.css";
import uniqid from "uniqid";

export default function VehiclesAdd() {
    const vehicleData = useSelector(state => state.addedVehicles);

    return (
        <div className="vehicle-list-container">
            <ul className="vehicle-list">
                {/* creates list items for each vehicle */}
                {vehicleData.vehicles
                    ? vehicleData.vehicles.map(vehicle => (
                          <li
                              data-key={String(uniqid())}
                              key={uniqid()}
                              className="vehicle-list-item"
                          >
                              <div className="left-container">
                                  <span className="vehicle-item-text">
                                      {vehicle.modelYear} - {vehicle.model}-{" "}
                                      {vehicle.brand} - {vehicle.plate}
                                      {vehicle.notes
                                          ? " (" + vehicle.notes + ")"
                                          : ""}
                                  </span>
                              </div>
                          </li>
                      ))
                    : ""}
            </ul>
        </div>
    );
}
