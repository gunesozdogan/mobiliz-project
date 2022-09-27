import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentAdd from "./components/ContentAdd/ContentAdd";
import ContentSearch from "./components/ContentSearch/ContentSearch";
import "./App.css";
import { useSelector } from "react-redux";
import Vehicles from "./components/Vehicles/Vehicles";

function App() {
    const isSearchSectionShown = useSelector(state => state.isShown.search);
    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <Sidebar />
                {isSearchSectionShown ? <ContentSearch /> : <ContentAdd />}
            </main>
        </div>
    );
}

export default App;
