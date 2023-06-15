import React from "react";
import PriorityElement from "./priorityElement.js";

const Priorities = () => {
    const database = [
        {
            title: "Rent",
            expected: "1133",
            actual: "1133",
            adjusted: false
        },
        {
            title: "Groceries",
            expected: "500",
            actual: "200",
            adjusted: true
        }
    ];
    const remaining = {
        title: "Remaining",
        expected: "500",
        actual: "500",
        adjusted: true
    }
    return (
        <ul className="list-group text-center mb-2">
            <div className="row m-2 mb-0">
                <div className="col-4">
                    <h6>Item</h6>
                </div>
                <div className="col-4">
                    <h6>Expected Cost</h6>
                </div>
                <div className="col-4">
                    <h6>Actual Cost</h6>
                </div>
            </div>
            {database.map((item) => (
                <>
                    <PriorityElement item={item}/>
                    <i className="bi bi-arrow-down"></i>
                </>
            ))}
            <PriorityElement item={remaining}/>
        </ul>
    );
}

export default Priorities;