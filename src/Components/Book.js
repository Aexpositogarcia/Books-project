import { render } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import react from "react";

import React, { Component } from 'react';
import { useState } from "react/cjs/react.development";

const Book = ({ book, closeBook }) => {

    if (book != null) {
        return (
            <>{
                book.items.map((item) => {
                    console.log(item);
                    
                    let cover = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    let title = item.volumeInfo.title;
                    let resume = item.searchInfo.textSnippet;

                    return (
                        <>
                            <div>
                                <h1>{title}</h1>
                                <img src={cover} alt="" />
                                <p className="">{price}&#8364;</p>
                            </div>
                            <div>
                                <h1>Breve Descripción:</h1>
                                <p>{resume}</p>
                            </div>

                            <div>
                                <button primary onClick={() => closeBook()}>Dame para cerrar</button>
                            </div>

                        </>
                    )
                })

            }
            </>
        )

    }
}
export default Book;