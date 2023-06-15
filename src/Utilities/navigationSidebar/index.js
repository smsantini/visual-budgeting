import React from "react";
import Button from "./button.js";
const NavigationSidebar = (
    {
        active = "Home"
    }
) => {
    return (
        <ul className="list-group">
            <Button active={active} href="/" title="Home" icon="bi bi-house-door-fill pe-3 fs-5"/>
            <Button active={active} href="/budget" title="Budget" icon="bi bi-person-fill-gear pe-3 fs-5"/>
        </ul>
    )
};
export default NavigationSidebar;