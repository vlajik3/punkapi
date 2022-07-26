import React from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.scss"

const Navbar = () => {

    return (
        <div className={s.navbar}>
            <h1><Link to="/" className={s.link}>Beer types</Link></h1>
        </div>
    );
};

export default Navbar;
