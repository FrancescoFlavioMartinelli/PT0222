import jwt_decode from 'jwt-decode'
import { useState, useEffect } from 'react'

export const Form = ()=>{

    const [user, setUser] = useState(null);

    const login = (e)=>{
        e.preventDefault();
        fetch("http://localhost:3005/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: e.target[0].value,
                password: e.target[1].value
            })
        }).then(res=>res.json()).then(res=>{
            localStorage.setItem("token", res.token); //per autologin dopo
            //recirect alla home
            const user = jwt_decode(res.token);
            setUser(user)
        })
    }

    const autologin = (e)=>{
        const token = localStorage.getItem("token");
        if(token) {
            fetch('http://localhost:3005/autologin', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then(res=>res.json()).then(res=>{
                console.log(res);
                setUser(res)
            })
        }
        return false
    }

    const logout = (e)=>{
        if(window.confirm("Sei sicuro di voler sloggare?")) {
            localStorage.removeItem("token");
            setUser(null);
        }
    }

    useEffect(()=>{
        autologin()
    }, [])

    if(user) {
        return (
            <>
            <h1>Benvenuto {user.name}</h1>
            {/* <button onClick={autologin} >autologin</button> */}
            <button onClick={logout}> Logout </button>
            </>
        )
    } 
    return (
        <>
    <h1>LOGIN</h1>
    <form onSubmit={login}>
        <input name="username" placeholder="username" required />
        <input type="password" placeholder="password" name="password" required />
        <button type="submit">INVIA</button>
    </form>
        </>
    )
}