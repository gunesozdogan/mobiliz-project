import React, { useCallback, useRef } from "react";
import "./ContentSearch.css";
import { useSelector, useDispatch } from "react-redux";
import {
    updatePlateInput,
    updateBrandInput,
    updateModelInput,
    updateSearchedVehicles,
    toggleLoader,
} from "../../actions";
import VehiclesEdit from "../VehiclesEdit/VehiclesEdit";
import myAPI from "../../modules/API";

function ContentSearch() {
    const myAPIModule = myAPI;
    const plateInput = useSelector(state => state.searchInput.plate);
    const brandInput = useSelector(state => state.searchInput.brand);
    const modelInput = useSelector(state => state.searchInput.model);
    const dispatch = useDispatch();
    const errorMessageRef = useRef(null);

    // displays related vehicles according to search inputs
    const handleClick = useCallback(async () => {
        // show inputValidation
        if (!plateInput && !brandInput && !modelInput) {
            errorMessageRef.current.className = "visible";
            return;
        }
        // if at least 1 parameter is entered,continue
        errorMessageRef.current.className = "hidden";
        let str = plateInput
            ? `plate=${plateInput}&`
            : "" + brandInput
            ? `brand=${brandInput}&`
            : "" + modelInput
            ? `model=${modelInput}&`
            : "";
        str = str.slice(0, -1);
        dispatch(toggleLoader());

        try {
            const data = await myAPIModule.getVehicles(str);
            dispatch(updateSearchedVehicles(data));
            dispatch(toggleLoader());
        } catch (err) {
            console.log(err);
        }
    }, [plateInput, brandInput, modelInput, dispatch, myAPIModule]);

    return (
        <div className="search-vehicles-section">
            <div className="search-container">
                <input
                    onChange={e => dispatch(updatePlateInput(e.target.value))}
                    spellCheck="false"
                    type="text"
                    placeholder="Plate"
                    className="plate-input search-input"
                />
                <input
                    onChange={e => dispatch(updateBrandInput(e.target.value))}
                    spellCheck="false"
                    type="text"
                    placeholder="Brand"
                    className="brand-input search-input"
                />
                <input
                    onChange={e => dispatch(updateModelInput(e.target.value))}
                    spellCheck="false"
                    type="text"
                    placeholder="Model"
                    className="model-input search-input"
                />
                <button onClick={handleClick} className="search-btn">
                    Search Vehicle
                </button>
                <div ref={errorMessageRef} className="hidden">
                    <p>At least one of the parameters should be entered!</p>
                </div>
                <VehiclesEdit />
            </div>
        </div>
    );
}
export default ContentSearch;
