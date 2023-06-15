import React from "react";

const PriorityElement = ({ item }) => {
    return (
        <div className="row border border-dark rounded-3 py-1 m-2">
            <div className="col-4 border-dark">
                {item.title}
            </div>
            <div className="col-4 border border-top-0 border-bottom-0 border-dark">
                ${item.expected}
                {
                    item.adjusted && <span className="ps-1">*</span>
                }
            </div>
            <div className="col-4 border-dark">
                ${item.actual}
            </div>
        </div>
    );
}

export default PriorityElement;