import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function Test() {
    const router = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/users").then(res=>res.json())
            .then(res=>{
                setUsers(res)
            })
    }, [])

    return (
        <>
            <button onClick={()=>{router(-1)}}>indietro</button>
            <h1>Profile</h1>
            {/* ROUTING#6.1 per tornare inditetro nella cronologia si può mettere il parametro -1 */}
            {users.map(u=>(<button key={u.id} onClick={()=>{router('/profile/'+u.id)}}>{u.name}</button>))}
        </>
    )
}