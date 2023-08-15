import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../store/userContext'
import { useState } from 'react'

const NavBar = () => {

    const navigate = useNavigate()
    const userCtx = useContext(UserContext)
    const [searchParam, setSearchParam] = useState("")
 
    const logOut = () => { 
        userCtx.updateUser(null)
        setTimeout(() => { 
             navigate("/login")
        }, 300)
    }

    const searchBySearch = () => { 
      navigate(`/searchBySearch/${searchParam}`)
    }


  return (
    <div className="navbar   2xl:w-[100%]  fixed top-0 left-0 right-0 main-content z-50">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              <Link to={"/allMyTasks"}><li><a>All Task</a></li></Link>
                              <Link to={"/pendingTasks"}><li><a>Pending Tasks</a></li></Link>
                              <Link to ={"/completedTasks"}><li><a>Completed Tasks</a></li></Link>
                              <Link to={"/inProcess"}><li><a>In Process</a></li></Link>
                              <li><a onClick={() => logOut()}>Log Out</a></li>
                        </ul>
                        </div>
                       <Link to={"/createNewTask"}><a className="btn btn-ghost normal-case text-xl text-bg-500">Task App</a></Link> 
                    </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <Link to={"/allMyTasks"}><li><a>All Task</a></li></Link>
                <Link to={"/pendingTasks"}><li><a>Pending Tasks</a></li></Link>
                <Link to ={"/completedTasks"}><li><a>Completed Tasks</a></li></Link>
                <Link to={"/inProcess"}><li><a>In Process</a></li></Link>
                <li><a onClick={() => logOut()}>Log Out</a></li>
                </ul>
                <div className="flex">
                    <input type="text" placeholder="..." className="input input-bordered w-24 md:w-auto text-center" onChange={(e) => setSearchParam(e.target.value)}/>
                    <button onClick={() => searchBySearch()}>Search</button>
                 
                </div>
            </div>
            <div className="navbar-end">
                <Link to={"/createNewTask"}><a className="btn">Create New Task</a></Link>
            </div>
            </div>
  )
}

export default NavBar
