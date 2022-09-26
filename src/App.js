import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { showAddSection, showSearchSection } from "./actions";

function App() {
    const isSearchSectionShown = useSelector(state => state.isShown.search);
    const isAddSectionShown = useSelector(state => state.isShown.add);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <Sidebar
                    searchSection={isSearchSectionShown}
                    addSection={isAddSectionShown}
                />
                <Content />
                {isSearchSectionShown ? (
                    <h1>This is search section</h1>
                ) : (
                    <h1>This is add section</h1>
                )}
            </main>
        </div>
    );
}

export default App;
