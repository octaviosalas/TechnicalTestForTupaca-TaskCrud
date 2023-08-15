import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import CrateNewTask from './components/CreateNewTask'
import {Routes, Route} from "react-router-dom"
import { UserProvider } from '../store/userContext'
import Login from './components/Login'
import Register from './components/Register'
import Welcome from './components/Welcome'
import AllMyTasks from './components/AllMyTasks'
import PendingTasks from './components/PendingTasks'
import CompletedTasks from './components/CompletedTasks'
import InProcess from './components/InProcess'
import SearchBySearch from './components/SearchBySearch'




function App() {

  const [count, setCount] = useState(0)

  return (
    
      <div className='app'>
        <UserProvider>
          <Routes> 
            <Route path="/" element={<Register/>}></Route> 
            <Route path="/login" element={<Login/>}></Route> 
            <Route path="/welcome/:userId" element={<Welcome/>}></Route> 
            <Route path="/createNewTask" element={<CrateNewTask/>}></Route>
            <Route path="/allMyTasks" element={<AllMyTasks/>}></Route>
            <Route path="/pendingTasks" element={<PendingTasks/>}></Route>
            <Route path="/completedTasks" element={<CompletedTasks/>}></Route>
            <Route path="/inProcess" element={<InProcess/>}></Route>
            <Route path="/searchBySearch/:searchParam" element={<SearchBySearch/>}></Route>
          </Routes>
          
         </UserProvider>
      </div>
    
  )
}

export default App;
