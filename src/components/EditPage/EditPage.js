import React, { useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./EditPage.css";
import myUtility from "../../modules/utility";
import { updateCurrentVehicles, toggleEditPage } from "../../actions";

export default function EditPage(props) {
    const myUtilityFunctions = myUtility;
    const dispatch = useDispatch();
    const modelYearRef = useRef(null);
    const modelRef = useRef(null);
    const brandRef = useRef(null);
    const plateRef = useRef(null);
    const notesRef = useRef(null);

    const searchedVehicles = useSelector(
        state => state.currentVehicles.vehicles
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
        dispatch(updateCurrentVehicles(updatedVehicles));
        dispatch(toggleEditPage());
    }, [myUtilityFunctions, props.id, searchedVehicles, dispatch]);

    // handles cancel button
    const handleCancelClick = useCallback(() => {
        dispatch(toggleEditPage());
    }, [dispatch]);

    return (
        <form spellCheck="false" className="edit-page">
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
