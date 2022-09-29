import React, { useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./EditForm.css";
import myUtility from "../../modules/utility";
import { updateSearchedVehicles, toggleEditForm } from "../../actions";
import myAPI from "../../modules/API";

export default function EditForm(props) {
    const myUtilityFunctions = myUtility;
    const myAPIModule = myAPI;
    const dispatch = useDispatch();
    const modelYearRef = useRef(null);
    const modelRef = useRef(null);
    const brandRef = useRef(null);
    const plateRef = useRef(null);
    const notesRef = useRef(null);

    const searchedVehicles = useSelector(
        state => state.searchedVehicles.vehicles
    );

    const displayRelatedModels = useCallback(async () => {
        const editedBrand = brandRef.current.value;
        const models = await myAPIModule.getBrandModels(editedBrand);

        // creates dropdown selections
        myUtilityFunctions.createDropdownArray(models, modelRef.current);
    }, [myAPIModule, myUtilityFunctions]);

    // edits vehicle item and closes the edit form
    const handleEditClick = useCallback(async () => {
        console.log(plateRef.current.value);
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

        // gets the id corresponds to brand/model
        const id = await myAPIModule.getModelID(
            modelRef.current.value,
            brandRef.current.value
        );
        console.log(plateRef.current.value);
        console.log(plateRef);
        // edited Vehicle object
        const editedVehicle = {
            modelID: id,
            plate: plateRef.current.value,
            modelYear: modelYearRef.current.value,
            notes: notesRef.current.value,
        };
        // edits the vehicle object in the server
        myAPIModule.editVehicle(props.id, editedVehicle);
    }, [myUtilityFunctions, props.id, searchedVehicles, dispatch, myAPIModule]);

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
                    autoComplete="off"
                />
            </div>

            <div className="input-container">
                <label htmlFor="brand">Brand</label>
                <input
                    onBlur={displayRelatedModels}
                    ref={brandRef}
                    className="input"
                    id="brand"
                    type="text"
                    defaultValue={props.brand}
                    autoComplete="off"
                />
            </div>

            <div className="input-container">
                <label htmlFor="model">Model</label>
                <select
                    ref={modelRef}
                    className="input"
                    id="model"
                    type="text"
                    defaultValue={props.model}
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
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
