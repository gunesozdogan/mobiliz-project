import React from "react";
import "./ContentAdd.css";
import { useDispatch } from "react-redux";
import { toggleAddForm } from "../../actions";
import VehiclesAdd from "../VehiclesAdd/VehiclesAdd";

function ContentAdd() {
    const dispatch = useDispatch();

    return (
        <div className="add-vehicles-section">
            <div className="add-container">
                <button
                    className="add-vehicle-btn"
                    onClick={() => dispatch(toggleAddForm())}
                >
                    Add Vehicle
                </button>
                <VehiclesAdd />
            </div>
        </div>
    );
}
export default ContentAdd;
