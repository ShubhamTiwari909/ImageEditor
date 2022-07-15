import React, { useState, useRef } from 'react'
import { toPng } from 'html-to-image';
import { NavLink } from 'react-router-dom';
import './index.css'

function Boxshadow() {
    const [img, setImg] = useState()
    const [horizontalShadow, setHorizontalShadow] = useState(5)
    const [verticalShadow, setVerticalShadow] = useState(5)
    const [blurRadius, setBlurRadius] = useState(25)
    const [spreadRadius, setSpreadRadius] = useState(0)
    const [shadowColor, setShadowColor] = useState()
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const [shadowColorOpacity, setShadowColorOpacity] = useState(0.4)

    function printColor(ev) {
        const color = ev.target.value
        const r = parseInt(color.substr(1, 2), 16)
        const g = parseInt(color.substr(3, 2), 16)
        const b = parseInt(color.substr(5, 2), 16)
        setShadowColor(color)
        setRed(r)
        setGreen(g)
        setBlue(b)
    }
    const styles = {
        boxShadow: `${horizontalShadow}px ${verticalShadow}px ${blurRadius}px ${spreadRadius}px rgba(${red},${green},${blue},${shadowColorOpacity})`
    }

    const inputs = [
        {
            id: 191200001,
            label: "Horizonatal Shadow",
            sliderLabel: `${horizontalShadow}px`,
            type: 'range',
            min: "-200",
            max: "200",
            step: "1",
            value: horizontalShadow,
            handler: (e) => setHorizontalShadow(e.target.value)
        },
        {
            id: 191200002,
            label: "Vertical Shadow",
            sliderLabel: `${verticalShadow}px`,
            type: 'range',
            min: "-200",
            max: "200",
            step: "1",
            value: verticalShadow,
            handler: (e) => setVerticalShadow(e.target.value)
        },
        {
            id: 191200003,
            label: "Blur Radius",
            sliderLabel: `${blurRadius}px`,
            type: 'range',
            min: "0",
            max: "400",
            step: "1",
            value: blurRadius,
            handler: (e) => setBlurRadius(e.target.value)
        },
        {
            id: 191200004,
            label: "Spread Radius",
            sliderLabel: `${spreadRadius}px`,
            type: 'range',
            min: "-200",
            max: "200",
            step: "1",
            value: spreadRadius,
            handler: (e) => setSpreadRadius(e.target.value)
        },
        {
            id: 191200005,
            label: "Shadow Color",
            sliderLabel: `rgb(${red},${green},${blue})`,
            type: 'color',
            min: "",
            max: "",
            step: "",
            value: shadowColor,
            handler: printColor
        },
        {
            id: 191200006,
            label: "Shadow Color Opacity",
            sliderLabel: `${shadowColorOpacity}px`,
            type: 'range',
            min: "0.05",
            max: "1",
            step: "0.01",
            value: spreadRadius,
            handler: (e) => setShadowColorOpacity(e.target.value)
        },

    ]

    const ref = useRef(null)
    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    }

    //image downloading method starts
    const onButtonClick = async () => {
        if (ref.current === null) {
            return
        }
        toPng(ref.current)
            .then(async (dataUrl) => {
                const link = document.createElement('a')
                link.download = 'Download.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    //image downloading method ends

    return (
        <div>
            <div className="grid place-content-center my-10">
                <input type="file" onChange={onImageChange} />
            </div>
            <div className="grid grid-cols-1 md:justify-content-center mx-3">
                <div className="justify-self-center imgContainer"  ref={ref}>
                    <div className="p-20">
                        <img src={img} alt="Example" className="shadow-xl" />
                    </div>
                </div>

                <div className="space-x-5 my-3 h-48 overflow-auto boxShadowGrid">
                    {inputs.map(item => {
                        return (
                            <div key={item.id} className="my-2 grid grid-cols-1 ml-24">
                                <div className={`collapse my-3 place-self-center`} id={`editor${item.id}`} >
                                    <p>{item.sliderLabel}</p>
                                    <input type={item.type} min={item.min} step={item.step} max={item.max}
                                        value={item.value} onChange={item.handler}
                                    />
                                </div>
                                <button type="button" data-bs-toggle="collapse" data-bs-target={`#editor${item.id}`}
                                    aria-expanded="false" aria-controls="collapseExample"
                                    className="place-self-center text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm w-40 py-2.5">
                                    {item.label}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid justify-content-center my-5">
                    <button onClick={onButtonClick} className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-slate-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-violet-700 dark:text-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Download
                        </span>
                    </button>
                </div>
                <NavLink to="/" className="bg-transparent border-2 border-blue-600 text-blue-900
                 place-self-center rounded-md px-4 py-2 my-5">Home</NavLink>

            </div>
        </div>
    )
}

export default Boxshadow