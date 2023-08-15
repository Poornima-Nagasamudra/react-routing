import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

function UserShow(props){
    const[list, setList] = useState([])
    const {id} = props.match.params

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
          .then((response)=>{
              const result = response.data
              setList(result)
          })
          .catch((err)=>{
             alert(err.message)
          })
    }, [id])

    return(
        <div>
              <h2> Show - {id} </h2>
              <p> {list.name} - {list.email}- {list.address  &&  list.address.city} </p>

              <Link to="/userList">back</Link>
        </div>
    )
}

export default UserShow