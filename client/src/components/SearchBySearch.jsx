
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SearchBySearch = () => {

    const params = useParams()
    const [searchResults, setSearchResults] = useState([])
    const [notResults, setNotResults] = useState(false)

    
    useEffect(() => { 
        axios.get(`http://localhost:4000/getTaskBySearch/${params.searchParam}`)
             .then((res) => { 
                console.log(res.data)
                if(res.data.length === 0) { 
                    setNotResults(true)
                } else { 
                    setSearchResults(res.data)
                }
             })
             .catch((err) => console.log(err))
    }, [params.searchParam])

  return (
    <div>
    <NavBar/>
    {notResults ? <p className='font-bold'>No Result for your Search!</p> 
       : 
       <div className='grid grid-cols-1 gap-6 '>
        <h1 className='font-bold text-2xl mt-6 text-indigo-500 underline'>Results of your Search</h1>
        {searchResults.map((t) => ( 
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-6">
            <div className="card-body">
                <div className='text-center text-lg'>
                  <h2 className="text-center underline">{t.title}</h2>
                </div>
              <p><b>{t.description}</b></p>
              <div className="card-actions flex mt-4 justify-center items-center">
                    <button className='text-indigo-500' onClick={() => deleteTask(t.idtask)}>Delete</button>
                </div>
              </div>
            </div> 
            ))}
          </div> }

       
    </div>
  )
}

export default SearchBySearch
