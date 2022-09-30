import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentAdd from "./components/ContentAdd/ContentAdd";
import ContentSearch from "./components/ContentSearch/ContentSearch";
import "./App.css";
import { useSelector } from "react-redux";
import EditForm from "./components/EditForm/EditForm";
import AddForm from "./components/AddForm/AddForm";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
    const isSearchSectionShown = useSelector(state => state.isShown.search);
    const isEditFormShown = useSelector(state => state.isEditFormShown);
    const isAddFormShown = useSelector(state => state.isAddFormShown);
    const isLoginFormShown = useSelector(state => state.isLoginFormShown);
    const curVehicleEdit = useSelector(state => state.editedVehicle);
    const isLoaderShown = useSelector(state => state.isLoaderShown);
    const themeColor = useSelector(state => state.themeColor);

    return (
        <div className="App" data-theme={themeColor}>
            {/* displays overlay element */}
            <div
                className={
                    isEditFormShown ||
                    isAddFormShown ||
                    isLoaderShown ||
                    isLoginFormShown
                        ? "overlay"
                        : "overlay hidden"
                }
            >
                {/* displays loading icon */}
                <div
                    className={isLoaderShown ? "loader" : "loader hidden"}
                ></div>

                {isLoginFormShown ? <LoginForm /> : ""}
                {/* displays edit form */}
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
                {/* displays add form */}
                {isAddFormShown ? <AddForm /> : ""}
            </div>
            <Header />
            <main className="main-content">
                <Sidebar />
                {/* switchs between add and search section */}
                {isSearchSectionShown ? <ContentSearch /> : <ContentAdd />}
            </main>
        </div>
    );
}

export default App;
