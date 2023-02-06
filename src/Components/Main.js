import react, { useEffect, useState } from "react";
import React, { Component } from 'react';
import Card from "./Card";
import axios from "axios";
//Add Class for a Card

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const [isShown, setIsShown] = useState(false);

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

    const searchBook = () => {
        //if (evt.key === "Enter") {
        console.log("Hola");
        setIsShown(current => !current);
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyD0MkCs6qBhR2JQIwrLiyE9ygTpW--tEvY' + '&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
    }
    return (
        //Controlando la variable isShown, controlamos la apareicion esta parte de la pagina
        <>
            <div className="header">
                <p>SHHHHHH PA TU CASA TONTIN</p>
                <input type="text" placeholder="METE EL PUTO TITULO COÑO"
                    value={search} onChange={e => setSearch(e.target.value)}
                />
                <button onClick={searchBook}> BUSCA COJONES</button>

                {isShown && (
                    <p >Eso es cabron</p>
                )}

            </div>
            <div>
                {
                    <Card book={bookData} />
                }
            </div>
        </>
    )
}
export default Main;