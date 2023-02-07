import { render } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import react from "react";

import React, { Component } from 'react';
import { useState } from "react/cjs/react.development";

const Book = ({ book, closeBook }) => {
    console.log(book.items);
    if (book != undefined) {
        let cover = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
        let price = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;
        let title = book.volumeInfo.title;
        return (
            <>
                <div>
                    <button primary onClick={() => closeBook()}>Salir Crack</button>
                </div>
                <div className="">
                    <h1>{title}</h1>
                </div>
            </>
        )
    }
}
export default Book;