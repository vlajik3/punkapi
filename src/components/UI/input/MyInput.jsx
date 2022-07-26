import React from "react";
import s from "./MyInput.module.scss";

const MyInput = React.forwardRef((props, ref) => {
    return <input {...props} className={s.myInput} ref={ref} />;
});
export default MyInput;
