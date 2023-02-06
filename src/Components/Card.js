import { type } from "@testing-library/user-event/dist/type";
import react from "react";
import React, { Component } from 'react';
import { useState } from "react/cjs/react.development";

const Card = ({ book }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let cover = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    let title = item.volumeInfo.title;
                    let isbn = item.volumeInfo.industryIdentifiers;
                    console.log(item);

                    isbn.map((isbnv) => {
                        console.log(isbnv.type)
                        if (isbnv.type === 'ISBN_10' || isbnv.type === 'ISBN_13') {
                            if (cover != undefined && price != undefined) {
                                console.log('Entro')
                                return (
                                    <>
                                        <div className="card" onClick={() => { setShow(true); setItem(item) }}>
                                            <img src={cover} alt="" />
                                            <div className="bottom">
                                                <h3 className="title">{title}</h3>
                                                <p className="price">{price}&#8364;</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        }
                    })
                })
            }

        </>
    )
}
export default Card;