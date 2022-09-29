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
    const isLoaderShown = useSelector(state => state.isLoaderShown);
    const themeColor = useSelector(state => state.themeColor);

    return (
        <div className="App" data-theme={themeColor}>
            <div
                className={
                    isEditFormShown || isAddFormShown || isLoaderShown
                        ? "overlay"
                        : "overlay hidden"
                }
            >
                <div
                    className={isLoaderShown ? "loader" : "loader hidden"}
                ></div>
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
