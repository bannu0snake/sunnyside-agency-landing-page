import classes from "./Navbar.module.css";

import React from "react";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <h1 className={classes.logo}>Sunnyside</h1>
            <ul className={classes.options}>
                <li className={classes.item}>About</li>
                <li className={classes.item}>Services</li>
                <li className={classes.item}>Projects</li>
                <li className={`${classes.item} ${classes.button}`}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
