import React from "react";

const Button = (
    {
        active = "",
        href="",
        title = "",
        icon = ""
    }) => {
        if (active === title) {
            return (
                <a href={href} className="list-group-item background-color-pink rounded-0">
                    <i className={icon}></i>
                    <span className="d-none d-lg-inline">
                        {title}
                    </span>
                </a>);
        } else {
            return (
                <a href={href} className="list-group-item no-background rounded-0">
                    <i className={icon}></i>
                    <span className="d-none d-lg-inline">
                        {title}
                    </span>
                </a>);
        }
};
export default Button;