import React, { useState, useRef } from 'react'
import { imageDownload } from './EventHandlers/EventHandlers';
import './index.css'

function Index() {
    const [img, setImg] = useState("https://img.freepik.com/premium-photo/beautiful-emerald-lake-yoho-national-park-british-columbia-canada_131985-177.jpg?w=2000");

    const [blur, setBlur] = useState(0);
    const [brightness, setBrightness] = useState(1);
    const [contrast, setContrast] = useState(100);
    const [opacity, setOpacity] = useState(1);
    const [saturation, setSaturation] = useState(100);
    const [grayScale, setGrayScale] = useState(0);
    const [hue, setHue] = useState(0);
    const [invert, setInvert] = useState(0);
    const [sepia, setSepia] = useState(0);

    //transforms
    const [rotate, setRotate] = useState(0);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [scale, setScale] = useState(1);
    const [skewX, setSkewX] = useState(0);
    const [skewY, setSkewY] = useState(0);

    //borderRadius
    const [borderRadius, setBorderRadius] = useState(0)

    //array to hold the values for UI to map
    const inputs = [
        {
            label: `Blur`,
            sliderLabel: `${blur}px`,
            value: blur,
            handler: (e) => setBlur(e.target.value),
            min: "0",
            max: "20",
            step: "1",
            id: "19120001"
        },
        {
            label: `Brightness`,
            sliderLabel: `${brightness}`,
            value: brightness,
            handler: (e) => setBrightness(e.target.value),
            min: "0.1",
            max: "1.5",
            step: "0.1",
            id: "19120002"
        },
        {
            label: `Contrast`,
            sliderLabel: `${contrast}%`,
            value: contrast,
            handler: (e) => setContrast(e.target.value),
            min: "0",
            max: "200",
            step: "1",
            id: "19120003"
        },
        {
            label: `Opacity`,
            sliderLabel: `${opacity}`,
            value: opacity,
            handler: (e) => setOpacity(e.target.value),
            min: "0",
            max: "1",
            step: "0.1",
            id: "19120004"
        },
        {
            label: `Saturation`,
            sliderLabel: `${saturation}%`,
            value: saturation,
            handler: (e) => setSaturation(e.target.value),
            min: "-150",
            max: "150",
            step: "1",
            id: "19120005"
        },
        {
            label: `Grayscale`,
            sliderLabel: `${grayScale}%`,
            value: grayScale,
            handler: (e) => setGrayScale(e.target.value),
            min: "-100",
            max: "100",
            step: "1",
            id: "19120006"
        },
        {
            label: `Hue`,
            sliderLabel: `${hue}deg`,
            value: hue,
            handler: (e) => setHue(e.target.value),
            min: "0",
            max: "360",
            step: "1",
            id: "19120007"
        },
        {
            label: `Invert`,
            sliderLabel: `${invert}deg`,
            value: invert,
            handler: (e) => setInvert(e.target.value),
            min: "0",
            max: "360",
            step: "1",
            id: "19120008"
        },
        {
            label: `Sepia`,
            sliderLabel: `${sepia}%`,
            value: sepia,
            handler: (e) => setSepia(e.target.value),
            min: "0",
            max: "100",
            step: "1",
            id: "19120009"
        },
        {
            label: `Rotate`,
            sliderLabel: `${rotate}deg`,
            value: rotate,
            handler: (e) => setRotate(e.target.value),
            min: "-360",
            max: "360",
            step: "1",
            id: "191200010"
        },
        {
            label: `RotateX`,
            sliderLabel: `${rotateX}deg`,
            value: rotateX,
            handler: (e) => setRotateX(e.target.value),
            min: "-360",
            max: "360",
            step: "1",
            id: "191200011"
        },
        {
            label: `RotateY`,
            sliderLabel: `${rotateY}deg`,
            value: rotateY,
            handler: (e) => setRotateY(e.target.value),
            min: "-360",
            max: "360",
            step: "1",
            id: "191200012"
        },
        {
            label: `Scale`,
            sliderLabel: `${scale}`,
            value: scale,
            handler: (e) => setScale(e.target.value),
            min: "0.4",
            max: "1.5",
            step: "0.1",
            id: "191200013"
        },
        {
            label: `SkewX`,
            sliderLabel: `${skewX}`,
            value: skewX,
            handler: (e) => setSkewX(e.target.value),
            min: "-360",
            max: "360",
            step: "1",
            id: "191200014"
        },
        {
            label: `SkewY`,
            sliderLabel: `${skewY}`,
            value: skewY,
            handler: (e) => setSkewY(e.target.value),
            min: "-360",
            max: "360",
            step: "1",
            id: "191200015"
        },
        {
            label: `BorderRadius`,
            sliderLabel: `${borderRadius}%`,
            value: borderRadius,
            handler: (e) => setBorderRadius(e.target.value),
            min: "0",
            max: "50",
            step: "0.5",
            id: "191200018"
        },
    ]


    const ref = useRef(null)
    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    }

   


    //reset button
    const onReset = () => {
        setBlur(0)
        setBrightness(1)
        setContrast(100)
        setOpacity(1)
        setSaturation(100)
        setGrayScale(0)
        setHue(0)
        setInvert(0)
        setSepia(0)
        setRotate(0)
        setRotateX(0)
        setRotateY(0)
        setScale(1)
        setSkewX(0)
        setSkewY(0)
        setBorderRadius(0)
    }

    //dynaminc stylings for image
    const styles = {
        filter: `blur(${blur}px) brightness(${brightness}) 
          contrast(${contrast}%) opacity(${opacity}) saturate(${saturation}%) 
          grayscale(${grayScale}%) hue-rotate(${hue}deg) invert(${invert}%) sepia(${sepia}%)`,
        transform: `rotate(${rotate}deg) scale(${scale}) 
        skew(${skewX}deg,${skewY}deg) rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)`,
        borderRadius: `${borderRadius}%`,
        border: "1px solid",
    }


    return (
        <div className="">
            <div className="grid place-content-center my-10">
                <input type="file" onChange={onImageChange} />
            </div>
            <div className="grid grid-cols-1 md:justify-content-center mx-3">
                <div className="justify-self-center imgContainer" ref={ref}>
                    <img src={img} alt="Example" style={styles} />
                </div>
                <div className="space-x-5 my-3 h-48 overflow-auto inputsGrid">
                    {inputs.map(item => {
                        return (
                            <div key={item.id} className="my-2 grid grid-cols-1 ml-5">
                                <div className={`collapse my-3 place-self-center`} id={`editor${item.id}`} >
                                    <p>{item.sliderLabel}</p>
                                    <input type="range" min={item.min} step={item.step} max={item.max}
                                        value={item.value} onChange={item.handler}
                                    />
                                </div>
                                <button type="button" data-bs-toggle="collapse" data-bs-target={`#editor${item.id}`}
                                    aria-expanded="false" aria-controls="collapseExample"
                                    className="place-self-center text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm w-24 py-2.5">
                                    {item.label}
                                </button>
                            </div>
                        )
                    })}
                </div>
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
                    <button onClick={onReset} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-slate-900 rounded-lg group bg-gradient-to-br from-red-600 to-rose-500 group-hover:from-red-600 group-hover:to-rose-500 hover:text-violet-300 dark:text-violet-00 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Reset
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Index;
