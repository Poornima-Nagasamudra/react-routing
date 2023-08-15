import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function UserList(props){
    const[user, setUser] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/users')
          .then((response)=>{
              const result = response.data 
              setUser(result)
          })
          .catch((err)=>{
             alert(err.message)
          })

    }, [])

    return(
        <div>
            <h2>Listing Users - {user.length}</h2>         
          
          <ul>
            {user.map(function(ele){
                return <li key={ele.id}>   <Link to={`/user/${ele.id}`}>    {ele.name} </Link> </li>
            })}
          </ul>
        </div>
    )
}


export default UserList