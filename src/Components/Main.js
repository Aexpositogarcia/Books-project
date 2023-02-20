import react, { useEffect, useState } from "react";
import React, { Component } from 'react';
import Card from "./Card";
import Book from "./Book";
import axios from "axios";
import '../style.css';
//Add Class for a Card

const Main = () => {
    const [isShown, setIsShown] = useState(false);
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const [bookInfo, setBook] = useState(null);

    const getBook = (isbn) => {
        setIsShown(current => !current);
        axios.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn)
            .then(res => setBook(res.data))
            .catch(err => console.log(err))
        console.log('INFO BOOK' + bookInfo);
    }

    const closeBook = () => {
        setIsShown(current => !current);
    }


    //Utilizado para esperar hasta que el usuario escriba
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(search)
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyD0MkCs6qBhR2JQIwrLiyE9ygTpW--tEvY' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
            // Send Axios request here
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [search])

    return (
        //Controlando la variable isShown, controlamos la apareicion esta parte de la pagina
        <>

            <div className="search-box">
                <h1>Search</h1>
                <div className="search-icon">
                    <span class="material-symbols-rounded icon-input ">
                        search
                    </span>
                    <input type="text" className="search-input" placeholder="Enter a book title"
                        value={search} onChange={e => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div>
                {!isShown &&
                    (
                        <Card book={bookData} getBook={getBook} />
                    )
                }
            </div>
            <div>
                {isShown &&
                    (
                        <Book book={bookInfo} closeBook={closeBook} />
                    )
                }
            </div>
        </>
    )
}
export default Main;