import {useEffect, useState} from 'react'

export function List() {

    //usiamo uno state per far renderizzare il component con un valore iniziale e aggiornare la view nel momento in cui il fetch ci da i dati corretti
    let [users, setUsers] = useState([])


    
    // fetch("http://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(res=>{
        //     console.log(res)
        //     // users = res
        //     setUsers(res)
        //     //NON POSSIAMO CAMBIARE LO STATE NEL THEN PERCHÈ IL FETCH VINENE ESEGUITO QUANDO SI RENDERIZZA E IL SETSTATE() FA RENDERIZZARE NUVAMENTE IL COMPONENT (AVVIANDO UN'ALTRO FETCH)
        
        // })
        
    useEffect(()=>{
        //Qua è l'equivalente del componentDidMount, prima fase della vita del component
        //quando il componente carica esegui il fetch
        //NON quando cambio 
        console.log("EFFECT")
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((result) => {
                setUsers(result);
            },
            (err)=>{
                console.warn(err)
            })
    }, [])


    //tutto ciò che è scritto nella funzione viene ri-eseguito a ogni rendere tranne gli hook che hanno esecuzioni in momenti precisi e definiti da react
    console.log("RENDER");


    return (
        <ul>
            {/* Usiamo map per ciclare l'array e generare per ogni elemento l'html equivalente */}
            { users.map((u)=> (<li key={u.id}>{u.name}<span>{u.username}</span></li>)) }
        </ul>
    )
}