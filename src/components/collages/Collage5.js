import React, { useState, useRef } from 'react'
import PhotoAlbum from "react-photo-album";
import {NavLink} from 'react-router-dom'
const { onImageChange1, imageDownload } = require('../EventHandlers/EventHandlers')
function Collage5() {
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState()
    const [img4, setImg4] = useState()
    const [img5, setImg5] = useState()

    const photos = [
        {
            src: img1,
            width: 500,
            height: 500
        },
        {
            src: img2,
            width: 400,
            height: 500
        },
        {
            src: img3,
            width: 300,
            height: 350
        },
        {
            src: img4,
            width: 400,
            height: 450
        },
        {
            src: img5,
            width: 500,
            height: 650
        },

    ];

    const inputs = [
        {
            label: "Image1",
            handler: (e) => onImageChange1(e, setImg1)
        },
        {
            label: "Image2",
            handler: (e) => onImageChange1(e, setImg2)
        },
        {
            label: "Image3",
            handler: (e) => onImageChange1(e, setImg3)
        },
        {
            label: "Image4",
            handler: (e) => onImageChange1(e, setImg4)
        },
        {
            label: "Image5",
            handler: (e) => onImageChange1(e, setImg5)
        }
    ]

    const ref = useRef(null)
    const stylings = "bg-transparent border-2 border-green-600 text-green-600 place-self-center rounded-md p-2 mx-3"

    return (
        <div className="mx-3 my-4 grid justify-center">
            <div className="grid grid-cols-4 space-4 my-5 gap-4 place-self-center">
                {inputs.map(item => {
                    return (
                        <div className={stylings}>
                            <label onChange={item.handler}>
                                <h1>{item.label}</h1>
                                <input type="file" className="hidden" />
                            </label>
                        </div>
                    )
                })}
            </div>
            <div className="px-12 py-4" ref={ref}>
                <PhotoAlbum layout="rows" photos={photos} />
            </div>
            <div className="flex justify-center">
                <div className="grid justify-content-center my-5">
                    <button onClick={() => imageDownload(ref)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-slate-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-violet-700 dark:text-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Download
                        </span>
                    </button>
                </div>
                <div className="grid justify-content-center my-5">
                    <NavLink to="/collage" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-slate-900 rounded-lg group bg-gradient-to-br from-red-600 to-rose-500 group-hover:from-red-600 group-hover:to-rose-500 hover:text-violet-300 dark:text-violet-00 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Collage
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Collage5