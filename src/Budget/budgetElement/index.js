import React from "react";
import Priorities from "./priorities";

const BudgetElement = () => {
    return (
        <>
            <div className="row">
                <div className="col border py-1 me-3">
                    <h5>Monthly Income:</h5>
                    $0
                </div>
                <div className="col border py-1">
                    <h5>Remaining:</h5>
                    $0
                </div>
            </div>
            <div className="row mt-3">
                <h2 className="col">Priority Chart</h2>
                <button className="col-3 btn btn-custom">Add Item</button>
            </div>
            <div className="row">
                <div className="col border pt-2">
                    <Priorities/>
                </div>
            </div>
        </>
    );
}

export default BudgetElement;