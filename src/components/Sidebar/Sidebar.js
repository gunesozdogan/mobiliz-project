import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { showAddSection, showSearchSection } from "../../actions";

export default function Sidebar(props) {
    const dispatch = useDispatch();

    return (
        <div className="navbar">
            <div className="nav-search nav-section">
                <button
                    onClick={() => dispatch(showSearchSection())}
                    className="nav-search-btn nav-btn"
                >
                    Search Vehicle
                </button>
            </div>
            <div className="nav-add nav-section">
                <button
                    onClick={() => dispatch(showAddSection())}
                    className="nav-add-btn nav-btn"
                >
                    Add Vehicle
                </button>
            </div>
        </div>
    );
}
