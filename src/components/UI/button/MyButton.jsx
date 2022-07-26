import React from "react";
import s from "./MyButton.module.scss";
import cn from "classnames";

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className={cn(s.myBtn, props.className && props.className)}>
            {children}
        </button>
    );
};

export default MyButton;
