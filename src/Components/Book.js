import { render } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import react from "react";

import React, { Component } from 'react';
import { useState } from "react/cjs/react.development";
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

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
                                    <canvas class="webgl"></canvas>
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
                                <script>
                                    
                                </script>

                            </>
                        )


                        const canvas = document.querySelector('.webgl')
                        const scene = new THREE.Scene()

                        const loader = new GLTFLoader()
                        loader.load('public\book_tutorial.glb',function (gltf){
                            console.log(gltf)
                            const root = gltf.scene
                            scene.add(root);
                        },function(xhr){
                            console.log((xhr.loaded/xhr.total* 100)+ "%loaded")
                        }, function(error){
                            console.log('an error ocurrred')
                        })
                        
                        const size = {
                            width: window.innerWidth,
                            height: window.innerHeight
                        }

                        const camera = new THREE.PerspectiveCamera(75,size.width/size.height,0.1,100)
                        camera.position.set(0,1,2)
                        scene.add(camera)
                        
                        const renderer = new THREE.WebGL1Renderer({
                            canvas:canvas
                        })

                        renderer.setSize(size.width,size.height)
                        renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
                        renderer.shadowMap.enabled = true
                        renderer.gammaOutput = true
                        renderer.render(scene,camera)
                    })

                }
            </>
        )

    }
}
export default Book;