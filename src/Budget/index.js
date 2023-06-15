import React from "react";
import {Provider} from "react-redux";
import { configureStore }
    from '@reduxjs/toolkit';
// const store = configureStore(
//     {reducer: {who: whoReducer, tuits: tuitsReducer}});
import NavigationSidebar from "../Utilities/navigationSidebar/index.js";
import BudgetElement from "../Budget/budgetElement/index.js";
import Customization from "./customization/index.js";

function Budget() {
    return(
        // <Provider store={store}>
        <div className="m-3">
            <h1>Budget</h1>
            <div className="row mt-1">
                <div className="col-1 col-md-1 col-lg-2 col-xl-2">
                    <NavigationSidebar active="Budget"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-7">
                    <BudgetElement/>
                </div>
                <div className="col-1 col-md-1 col-lg-3 col-xl-3">
                    <Customization/>
                </div>
            </div>
        </div>
        // </Provider>
    );
}
export default Budget



