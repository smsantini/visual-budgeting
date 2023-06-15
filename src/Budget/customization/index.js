import React from "react";

function Customization() {
    return(
        <div className="text-center">
            <h2>Customization</h2>
            <div className="m-1">
                <h5>Auto Adjustment</h5>
                <div className="border p-1 mb-1">
                    Expected costs will automatically adjust to account for overdraw of an item
                </div>
                <button className="btn btn-custom p-1 px-2">
                    Configure Auto Adjustment
                </button>
            </div>

        </div>
    );
}
export default Customization



