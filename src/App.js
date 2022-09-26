import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentAdd from "./components/ContentAdd/ContentAdd";
import ContentSearch from "./components/ContentSearch/ContentSearch";
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
                <Sidebar />
                {isSearchSectionShown ? <ContentSearch /> : <ContentAdd />}
            </main>
        </div>
    );
}

export default App;
