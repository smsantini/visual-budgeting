import React from "react";
import {Provider} from "react-redux";
import { configureStore }
    from '@reduxjs/toolkit';
// const store = configureStore(
//     {reducer: {who: whoReducer, tuits: tuitsReducer}});
import NavigationSidebar from "../Utilities/navigationSidebar/index.js";
import BudgetElement from "../Budget/budgetElement/index.js";

function Home() {
    return(
        // <Provider store={store}>
        <>
            <h1>Home</h1>
            <div className="row mt-1">
                <div className="col-2">
                    <NavigationSidebar active="Home"/>
                </div>
            </div>
        </>
        // </Provider>
    );
}
export default Home



