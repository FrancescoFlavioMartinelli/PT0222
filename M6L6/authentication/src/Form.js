import {useState, useEffect} from 'React';

import jwt_decode from "jwt-decode";

export const Form = ()=>{

    const [ordini, setOrdini] = useState([]);
    const [user, setUser] = useState(null);

    const signup = (e)=>{
        e.preventDefault();
        const f = e.target;
        if(f[3].value != f[4].value) {
            alert("Password non corrispondono");
            return false;
        }

        const signupData = {
            username: f[0].value,
            email: f[1].value,
            name: f[2].value,
            password: f[3].value
        }

        fetch("http://localhost:3005/signup", {
            method: "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupData)
        }).then(res=>res.json()).then((res)=>{
            console.log(res);
            //se ci arriva un successo redirect alla pagina login
        })
    }

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

    //carico gli oridni dopo il login
    useEffect(()=>{
        if(user != null) {
            const token = localStorage.getItem("token");
            if(!token) {
                //token non trovato, non posso autenticare
                return
            }
            // fetch("http://localhost:3005/orders/" + user.id, { //posso fare la rotta api con l'id come parametro o leggero l'id dal payload del token
            fetch("http://localhost:3005/orders", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res=>res.json).then(res=>{
                setOrdini(res)
            })
        }
    }, [user])

    //carico gli ordini all'avvio

    return (<>
        <h1>REGISTRAZIONE</h1>
        <form onSubmit={signup}>
            <input name="username" placeholder="username" required />
            <input name="mail" placeholder="mail" required />
            <input name="name" placeholder="name" required />
            <input type="password" placeholder="password" name="password" required />
            <input type="password" placeholder="password" name="passwordCopy" required />
            <button type="submit">INVIA</button>
        </form>


        <hr />

        <h1>LOGIN</h1>
        <form onSubmit={login}>
            <input name="username" placeholder="username" required />
            <input type="password" placeholder="password" name="password" required />
            <button type="submit">INVIA</button>
        </form>

        <hr />

        <h1>ORDINI</h1>
        <ul>
            {ordini.map(o=>(<li>o._id</li>))}
        </ul>

    </>)
}