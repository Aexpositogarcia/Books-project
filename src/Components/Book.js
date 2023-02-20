import { render } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import react from "react";

import React, { Component } from 'react';
import { useState } from "react/cjs/react.development";

const Book = ({ book, closeBook }) => {


    console.log(book);
    
    if (book != undefined) {

        return (
            <>
                <div>
                    <p>Hola crack</p>
                    <button onClick={() => closeBook()}>Salir Crack</button>
                </div>
                <div className="">
                    <h1>{book}</h1>
                </div>
            </>
        )
    }
}
export default Book;