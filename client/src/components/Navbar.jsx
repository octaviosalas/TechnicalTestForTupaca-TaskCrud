import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar   2xl:w-[100%]  fixed top-0 left-0 right-0 main-content z-50">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           <Link to={"/allMyTasks"}><li><a>All Task</a></li></Link>
                            <li><a>Pending Tasks</a></li>
                            <li><a>Completed Tasks</a></li>
                        </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl text-bg-500">Task App</a>
                    </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <Link to={"/allMyTasks"}><li><a>All Task</a></li></Link>
                <Link to={"/pendingTasks"}><li><a>Pending Tasks</a></li></Link>
                <li><a>Completed Tasks</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/createNewTask"}><a className="btn">Create New Task</a></Link>
            </div>
            </div>
  )
}

export default NavBar
