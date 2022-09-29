import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleAddForm, updateAddedVehicles } from "../../actions";
import myUtility from "../../modules/utility";
import "./AddForm.css";

export default function AddForm(props) {
    const myUtilityFunctions = myUtility;

    const dispatch = useDispatch();
    const modelYearRef = useRef(null);
    const modelRef = useRef(null);
    const brandRef = useRef(null);
    const plateRef = useRef(null);
    const notesRef = useRef(null);

    // edits vehicle item in redux store and closes the edit form
    const handleAddClick = useCallback(() => {
        const newVehicle = myUtilityFunctions.Vehicle(
            modelYearRef.current.value,
            modelRef.current.value,
            brandRef.current.value,
            plateRef.current.value,
            notesRef.current.value
        );
        dispatch(updateAddedVehicles(newVehicle));
        dispatch(toggleAddForm());
    }, [myUtilityFunctions, dispatch]);

    // handles cancel button
    const handleCancelClick = useCallback(() => {
        dispatch(toggleAddForm());
    }, [dispatch]);

    return (
        <form spellCheck="false" className="add-form">
            <div className="input-container">
                <label htmlFor="modelYear">Model Year</label>
                <input
                    ref={modelYearRef}
                    className="input"
                    id="modelYear"
                    type="text"
                    defaultValue={props.modelYear}
                />
            </div>

            <div className="input-container">
                <label htmlFor="model">Model</label>
                <input
                    ref={modelRef}
                    className="input"
                    id="model"
                    type="text"
                    defaultValue={props.model}
                />
            </div>

            <div className="input-container">
                <label htmlFor="brand">Brand</label>
                <input
                    ref={brandRef}
                    className="input"
                    id="brand"
                    type="text"
                    defaultValue={props.brand}
                />
            </div>

            <div className="input-container">
                <label htmlFor="plate">Plate</label>
                <input
                    ref={plateRef}
                    className="input"
                    id="plate"
                    type="text"
                    defaultValue={props.plate}
                />
            </div>

            <div className="input-container">
                <label htmlFor="notes">Notes</label>
                <input
                    ref={notesRef}
                    className="input"
                    id="notes"
                    type="text"
                    defaultValue={props.notes}
                />
            </div>

            <div className="button-container">
                <button
                    onClick={handleAddClick}
                    className="add-form-add-btn"
                    type="button"
                >
                    Add
                </button>
                <button
                    onClick={handleCancelClick}
                    className="add-form-cancel-btn"
                    type="button"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
