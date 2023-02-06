import { render } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import react from "react";
import React, { Component } from 'react';
import { useState } from "react/cjs/react.development";

const Card = ({ book }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
            {
                book.map((item) => {

                    let isbn = item.volumeInfo.industryIdentifiers;
                    if (isbn != undefined) {
                        var repeat = false;
                        return (
                            <>{

                                isbn.map((isbnv) => {
                                    let cover = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                                    let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                                    let title = item.volumeInfo.title;
                                    if ((isbnv.type === 'ISBN_13' || isbnv.type === 'ISBN_10') && (repeat == false)) {
                                        repeat = true;
                                        if (cover != undefined && price != undefined) {

                                            return (
                                                <>
                                                    <div className="" onClick={() => { setShow(true); setItem(item) }}>
                                                        <img src={cover} alt="" />
                                                        <div className="">
                                                            <h3 className="">{title}</h3>
                                                            <p className="">{price}&#8364;</p>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        }
                                    }
                                })
                            }
                            </>
                        );

                    }
                })
            }

        </>
    )
}
export default Card;