import { render } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import react from "react";

import React, { Component } from 'react';
import { useState } from "react/cjs/react.development";

const Navbar = () => {
return(
    <>
        <div className="navbar">
            <h2 className="Logo-text">Bookey</h2>
            <div className="item-navbar">
                <div className="pages">
                    <p>Project Bookey</p>
                    <p>Blog</p>
                </div>
                <div className="login">
                    <p className="login">Login</p>
                    <p className="search-book">Search Book</p>
                </div>
            </div>
        </div>
    </>
)
}
export default Navbar;