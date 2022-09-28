import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentAdd from "./components/ContentAdd/ContentAdd";
import ContentSearch from "./components/ContentSearch/ContentSearch";
import "./App.css";
import { useSelector } from "react-redux";
import EditPage from "./components/EditPage/EditPage";

function App() {
    const isSearchSectionShown = useSelector(state => state.isShown.search);
    const isEditPageShown = useSelector(state => state.isEditPageShown);
    const curVehicleEdit = useSelector(state => state.currentVehicleEdit);
    return (
        <div className="App">
            <div className={isEditPageShown ? "overlay" : "overlay hidden"}>
                {isEditPageShown ? (
                    <EditPage
                        modelYear={curVehicleEdit.vehicle.modelYear}
                        model={curVehicleEdit.vehicle.model}
                        brand={curVehicleEdit.vehicle.brand}
                        plate={curVehicleEdit.vehicle.plate}
                        notes={curVehicleEdit.vehicle.notes}
                        id={curVehicleEdit.vehicle.id}
                    />
                ) : (
                    ""
                )}{" "}
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
