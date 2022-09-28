import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentAdd from "./components/ContentAdd/ContentAdd";
import ContentSearch from "./components/ContentSearch/ContentSearch";
import "./App.css";
import { useSelector } from "react-redux";
import EditForm from "./components/EditForm/EditForm";
import AddForm from "./components/AddForm/AddForm";

function App() {
    const isSearchSectionShown = useSelector(state => state.isShown.search);
    const isEditFormShown = useSelector(state => state.isEditFormShown);
    const isAddFormShown = useSelector(state => state.isAddFormShown);
    const curVehicleEdit = useSelector(state => state.editedVehicle);
    return (
        <div className="App">
            <div
                className={
                    isEditFormShown || isAddFormShown
                        ? "overlay"
                        : "overlay hidden"
                }
            >
                {isEditFormShown ? (
                    <EditForm
                        modelYear={curVehicleEdit.vehicle.modelYear}
                        model={curVehicleEdit.vehicle.model}
                        brand={curVehicleEdit.vehicle.brand}
                        plate={curVehicleEdit.vehicle.plate}
                        notes={curVehicleEdit.vehicle.notes}
                        id={curVehicleEdit.vehicle.id}
                    />
                ) : (
                    ""
                )}
                {isAddFormShown ? <AddForm /> : ""}
            </div>
            <Header />
            <main className="main-content">
                <Sidebar />
                {isSearchSectionShown ? <ContentSearch /> : <ContentAdd />}
            </main>
        </div>
    );
}

export default App;
