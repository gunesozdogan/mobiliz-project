import React from "react";
import "./ContentAdd.css";
import { useDispatch } from "react-redux";
import { toggleAddForm } from "../../actions";

function ContentAdd() {
    const dispatch = useDispatch();

    return (
        <div className="add-vehicles-section">
            <button onClick={() => dispatch(toggleAddForm())}>
                Add Vehicle
            </button>
        </div>
    );
}
export default ContentAdd;
