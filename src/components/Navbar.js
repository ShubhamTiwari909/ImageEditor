import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import Index from './index'
import Collage from './Collage'
import Collage2 from './collages/Collage2'
import Collage3 from './collages/Collage3'
import Collage4 from './collages/Collage4'
import Collage5 from './collages/Collage5'
import Collage6 from './collages/Collage6'
import Collage7 from './collages/Collage7'
import Collage8 from './collages/Collage8'
import Collage9 from './collages/Collage9'
import Collage10 from './collages/Collage10'
// import Boxshadow from './Boxshadow'


function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div>
            <nav className="w-full flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-900">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div
                            className="grid grid-cols-2 place-items-center lg:text-xl font-bold leading-relaxed mr-4 py-2 whitespace-nowrap text-white"
                        >
                            Waadu-Editor
                        </div>
                        <button
                            className="text-slate-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-slate-100 block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <GiHamburgerMenu />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col -mx-4 lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                                <p className={` mt-2 px-3 py-2.5 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}>
                                    <NavLink to="/" onClick={() => setNavbarOpen(!navbarOpen)}>Home</NavLink>
                                </p>
                            </li>
                            <li className="nav-item">
                                <p className={` mt-2 px-3 py-2.5 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}>
                                    <NavLink to="/collage" onClick={() => setNavbarOpen(!navbarOpen)}>Collage</NavLink>
                                </p>
                            </li>
                            {/* <li className="nav-item">
                                <p className={` mt-2 px-3 py-2.5 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}>
                                    <NavLink to="/imageshadow" onClick={() => setNavbarOpen(!navbarOpen)}>Image Shadow</NavLink>
                                </p>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route path="/collage" element={<Collage />} />
                <Route exact path="/collage2" element={<Collage2 />} />
                <Route exact path="/collage3" element={<Collage3 />} />
                <Route exact path="/collage4" element={<Collage4 />} />
                <Route exact path="/collage5" element={<Collage5 />} />
                <Route exact path="/collage6" element={<Collage6 />} />
                <Route exact path="/collage7" element={<Collage7 />} />
                <Route exact path="/collage8" element={<Collage8 />} />
                <Route exact path="/collage9" element={<Collage9 />} />
                <Route exact path="/collage10" element={<Collage10 />} />
                {/* <Route exact path="/imageshadow" element={<Boxshadow />} /> */}
            </Routes>
        </div>
    )
}

export default Navbar