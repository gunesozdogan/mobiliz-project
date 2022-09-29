import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleAddForm, updateAddedVehicles } from "../../actions";
import myAPI from "../../modules/API";
import myUtility from "../../modules/utility";
import "./AddForm.css";

export default function AddForm(props) {
    const myUtilityFunctions = myUtility;
    const myAPIModule = myAPI;

    const dispatch = useDispatch();
    const modelYearRef = useRef(null);
    const modelRef = useRef(null);
    const brandRef = useRef(null);
    const plateRef = useRef(null);
    const notesRef = useRef(null);
    const missingParaErrorRef = useRef(null);
    const modelYearErrorRef = useRef(null);
    const brandErrorRef = useRef(null);

    // displays models according to brand choice
    const displayRelatedModels = useCallback(async () => {
        try {
            const editedBrand = brandRef.current.value;

            if (editedBrand === "") {
                brandErrorRef.current.className = "brand-error-msg";
                return;
            }
            const models = await myAPIModule.getBrandModels(editedBrand);

            if (models.length === 0) {
                brandErrorRef.current.className = "brand-error-msg";
                return;
            }
            // creates dropdown selections
            myUtilityFunctions.createDropdownArray(
                models,
                modelRef.current,
                modelRef.current.value
            );
        } catch (error) {
            console.log(error);
        }
    }, [myAPIModule, myUtilityFunctions]);

    // edits vehicle item in redux store and closes the edit form
    const handleAddClick = useCallback(async () => {
        // input validation
        if (
            !modelRef.current.value ||
            !modelYearRef.current.value ||
            !brandRef.current.value ||
            !plateRef.current.value ||
            !notesRef.current.value
        ) {
            missingParaErrorRef.current.className =
                "missing-parameter-error-msg";
            modelYearErrorRef.current.className =
                "modelyear-error-msg message-hidden";
            brandErrorRef.current.className = "brand-error-msg message-hidden";
            return;
        }
        if (
            modelYearRef.current.value < 1930 ||
            modelYearRef.current.value > 2022
        ) {
            modelYearErrorRef.current.className = "modelyear-error-msg";
            missingParaErrorRef.current.className =
                "missing-parameter-error-msg message-hidden";
            brandErrorRef.current.className = "brand-error-msg message-hidden";
            return;
        }

        const id = await myAPIModule.getModelID(
            modelRef.current.value,
            brandRef.current.value
        );
        const vehicleToAdd = {
            modelId: id,
            plate: plateRef.current.value,
            modelYear: Number(modelYearRef.current.value),
            notes: notesRef.current.value,
        };
        // adds new vehicle to redux store
        const newVehicle = myUtilityFunctions.Vehicle(
            modelYearRef.current.value,
            modelRef.current.value,
            brandRef.current.value,
            plateRef.current.value,
            notesRef.current.value
        );
        dispatch(updateAddedVehicles(newVehicle));
        dispatch(toggleAddForm());

        myAPIModule.addVehicle(vehicleToAdd);
    }, [myUtilityFunctions, dispatch, myAPIModule]);

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
                    autoComplete="off"
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
                    autoComplete="off"
                />
            </div>

            <div className="input-container">
                <label htmlFor="model">Model</label>
                <select
                    onFocus={displayRelatedModels}
                    ref={modelRef}
                    className="input"
                    id="model"
                    type="text"
                    autoComplete="off"
                >
                    <option value={props.model}>{props.model}</option>
                </select>
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
            <span
                ref={missingParaErrorRef}
                className="missing-parameter-error-msg message-hidden hidden"
            >
                Please fill every parameter!
            </span>
            <span
                ref={modelYearErrorRef}
                className="model-year-error-msg message-hidden hidden"
            >
                Model Year must be between 1930 and 2022!
            </span>
            <span ref={brandErrorRef} className="brand-error-msg hidden">
                Brand is not found!
            </span>
        </form>
    );
}
