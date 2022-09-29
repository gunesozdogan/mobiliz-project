import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./VehiclesAdd.css";
import uniqid from "uniqid";
import { toggleEditForm, updateEditedVehicle } from "../../actions";
import { useCallback } from "react";

export default function VehiclesAdd() {
    const vehicleData = useSelector(state => state.addedVehicles);
    const dispatch = useDispatch();

    // Displays edit page and uses edited vehicle properties as default values
    // const handleClick = useCallback(
    //     e => {
    //         const parent = e.target.parentNode;
    //         console.log(parent);
    //         dispatch(toggleEditForm());
    //         dispatch(
    //             updateEditedVehicle(
    //                 vehicleData.vehicles.find(vehicle => {
    //                     return (
    //                         vehicle.id ===
    //                         Number(parent.getAttribute("data-key"))
    //                     );
    //                 })
    //             )
    //         );
    //     },
    //     [dispatch, vehicleData.vehicles]
    // );

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
                                  <button
                                      //   onClick={}
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
                              {/* <button
                                  onClick={handleClick}
                                  className="vehicle-item-edit"
                              >
                                  Edit
                              </button> */}
                          </li>
                      ))
                    : ""}
            </ul>
        </div>
    );
}
