import { render } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import react from "react";

import React, { Component } from 'react';
import { useState } from "react/cjs/react.development";


const Card = ({ book, getBook }) => {


    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    //const { showbookDetail } = this.state;


    return (
        <>
            <h2 class="category" >Books</h2>
            <div className="card-catalog">
                {
                    book.map((item) => {

                        let isbn = item.volumeInfo.industryIdentifiers;
                        if (isbn != undefined) {
                            var repeat = false;
                            return (
                                <>

                                    {
                                        isbn.map((isbnv) => {

                                            let cover = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                                            let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                                            let title = item.volumeInfo.title;
                                            let author = item.volumeInfo.authors;
                                            let category = item.volumeInfo.categories;
                                            const data = "This is data from Child Component to the Parent Component."
                                            if ((isbnv.type === 'ISBN_13' || isbnv.type === 'ISBN_10') && (repeat == false)) {
                                                repeat = true;
                                                if (cover != undefined && price != undefined) {
                                                    console.log(cover)
                                                    return (
                                                        <>
                                                            <div className="card" onClick={() => { getBook(isbnv.identifier) }}>
                                                                <div className="card-color">
                                                                    <div className="card-img">
                                                                        <img src={cover} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="card-text">
                                                                    <div className="card-bookmark">
                                                                        <p className="card-text-category">{category}</p>
                                                                        <span class="material-symbols-rounded bookmark-icon">
                                                                            bookmark
                                                                        </span>
                                                                    </div>
                                                                    <p className="card-text-title">{title}</p>
                                                                    <p className="card-text-author">By {author}</p>
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
            </div>
        </>
    )
}
export default Card;