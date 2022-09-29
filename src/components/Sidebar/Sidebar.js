import React, { useCallback } from "react";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import {
    showAddSection,
    showSearchSection,
    resetSearchedVehicles,
    resetEditedVehicle,
    resetAddedVehicles,
} from "../../actions";
import {
    updateBrandInput,
    updatePlateInput,
    updateModelInput,
} from "../../actions";

export default function Sidebar(props) {
    const dispatch = useDispatch();

    // Displays add vehicle section and resets searched and edited vehicles in store
    const displayAddVehicleSection = useCallback(() => {
        dispatch(showAddSection());
        dispatch(resetSearchedVehicles());
        dispatch(resetEditedVehicle());
        // resets search inputs
        dispatch(updateBrandInput());
        dispatch(updatePlateInput());
        dispatch(updateModelInput());
    }, [dispatch]);

    // Displays search vehicle section and resets added and edited vehicles in store
    const displaySearchVehicleSection = useCallback(() => {
        dispatch(showSearchSection());
        dispatch(resetAddedVehicles());
        dispatch(resetEditedVehicle());
    }, [dispatch]);

    return (
        <div className="navbar">
            <div className="nav-search nav-section">
                <button
                    onClick={displaySearchVehicleSection}
                    className="nav-search-btn nav-btn"
                >
                    <svg
                        className="nav-search-icon"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title />
                        <g id="search">
                            <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
                        </g>
                    </svg>
                    Search Vehicle
                </button>
            </div>
            <div className="nav-add nav-section">
                <button
                    onClick={displayAddVehicleSection}
                    className="nav-add-btn nav-btn"
                >
                    <svg
                        className="nav-add-icon"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M2 18h10v2H2v-2zm0-7h20v2H2v-2zm0-7h20v2H2V4zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" />
                        </g>
                    </svg>
                    Add Vehicle
                </button>
            </div>
        </div>
    );
}
