import React, { useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./EditForm.css";
import myUtility from "../../modules/utility";
import { updateSearchedVehicles, toggleEditForm } from "../../actions";

export default function EditForm(props) {
    const myUtilityFunctions = myUtility;
    const dispatch = useDispatch();
    const modelYearRef = useRef(null);
    const modelRef = useRef(null);
    const brandRef = useRef(null);
    const plateRef = useRef(null);
    const notesRef = useRef(null);

    const searchedVehicles = useSelector(
        state => state.searchedVehicles.vehicles
    );

    // edits vehicle item in redux store and closes the edit form
    const handleEditClick = useCallback(() => {
        const updatedVehicles = myUtilityFunctions.editVehicle(
            props.id,
            modelYearRef.current.value,
            modelRef.current.value,
            brandRef.current.value,
            plateRef.current.value,
            notesRef.current.value,
            searchedVehicles
        );
        dispatch(updateSearchedVehicles(updatedVehicles));
        dispatch(toggleEditForm());
    }, [myUtilityFunctions, props.id, searchedVehicles, dispatch]);

    // handles cancel button
    const handleCancelClick = useCallback(() => {
        dispatch(toggleEditForm());
    }, [dispatch]);

    return (
        <form spellCheck="false" className="edit-form">
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
                    onClick={handleEditClick}
                    className="edit-form-edit-btn"
                    type="button"
                >
                    Edit
                </button>
                <button
                    onClick={handleCancelClick}
                    className="edit-form-cancel-btn"
                    type="button"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
