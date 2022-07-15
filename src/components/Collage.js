import React from 'react'
import { NavLink } from 'react-router-dom'

function Collage() {
  const stylings = "bg-transparent border-2 border-violet-600 text-violet-700 place-self-center rounded-md p-2"
  return (
    <div>
      <div className="mx-3 my-10 grid grid-cols-1 justify-content-center md:grid-cols-4 gap-3">
        <NavLink to="/collage2" className={stylings}>Collage of 2</NavLink>
        <NavLink to="/collage3" className={stylings}>Collage of 3</NavLink>
        <NavLink to="/collage4" className={stylings}>Collage of 4</NavLink>
        <NavLink to="/collage5" className={stylings}>Collage of 5</NavLink>
        <NavLink to="/collage6" className={stylings}>Collage of 6</NavLink>
        <NavLink to="/collage7" className={stylings}>Collage of 7</NavLink>
        <NavLink to="/collage8" className={stylings}>Collage of 8</NavLink>
        <NavLink to="/collage9" className={stylings}>Collage of 9</NavLink>
        <NavLink to="/collage10" className={stylings}>Collage of 10</NavLink>
        <NavLink to="/" className="bg-gradient-to-r from-purple-200 via-indigo-300 to-violet-400
        border-2 border-violet-600 text-slate-900 place-self-center rounded-md px-4 py-2 my-3">Home</NavLink>
      </div>
    </div>
  )
}

export default Collage