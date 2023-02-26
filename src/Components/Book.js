import { render } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import react from "react";
import React, { Component } from 'react';
import { useState } from "react/cjs/react.development";


let open_ai_response;



async function openai_test() {
  
  var url = "https://api.openai.com/v1/engines/text-davinci-002/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer LA API VA AQUI");

  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        open_ai_response = xhr.responseText;
        console.log(open_ai_response);
     }};

  var data = `{
    "prompt": "Hello WORD.",
    "temperature": 0.7,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0.75,
    "presence_penalty": 0
  }`;

  xhr.send(data);
}


const Book = ({ book, closeBook }) => {

    
    if (book != null) {
        return (
            <>

                {
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
                                    <canvas id="canvas"></canvas>
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