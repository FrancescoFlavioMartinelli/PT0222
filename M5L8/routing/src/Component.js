import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { Nav } from 'react-bootstrap';

export function Home() {
    const router = useNavigate()

    // setTimeout(()=>{
    //     router('/profile')
    // }, 1000)

    return (
        <>
            <h1>HOME</h1>
            {/* ROUTING#6 possiamo navigare programmaticamente usando l'hook useNavigate per ottenere una funzione di navigazione */}
            <button onClick={()=>{router('/profile')}}>vai al profile</button>
        </>
    )
}

export function Profile() {
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


export function Settings() {
    return (<h1>Settings</h1>)
}


export function Navbar() {
    // ROUTING#4 per navigare a una Route si possono usare i tag Link e NavLink con l'attributo to="/path/to/route"
    return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" >Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link to='/' className="nav-link" >Home</Link> */}
        {/*ROUTING#5 NavLink aggiunge la classe active all'anchor quando siamo nella rotta associata  */}
                                <NavLink to='/' className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <Link to='/profile' className="nav-link" >Profile</Link> */}
                                <NavLink to='/profile' className="nav-link">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/profile/settings' className="nav-link" >Settings</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>)
  }

//    ROUTING#5.1 alcune librerie potrebbero gestire autonomamente i NavLink e chiedere un modo alternativo per gestire le classi active
//ad esempio react-bootstrap (npm install react-bootstrap bootstrap) chiede di mettere a <Nav> un activeKey con il valore dell'href di <Nav.Link> da attivare (che in questo caso leggo da window.location)
  export function NavbarReactBootstrap() {
      const p = window.location.pathname
      return (
          <Nav activeKey={p} variant="pills" defaultActiveKey="/" as="ul">
              <Nav.Item as="li">
                  <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                  <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav.Item>
          </Nav>
      )
    }

export function NotFound() {
    return (<h1>NOT FOUND 404</h1>)
}

export function Dettagli() {
    const navigate = useNavigate()
    
    // ROUTING#9.1 per leggere i parametri dalla rotta possimao usare l'hook useParams che ci restituisce un oggetto con tutti i parametri presenti nel routing
    // const params = useParams()
    const { id } = useParams()

    const [user, setUser] = useState()
    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/users/" + id).then(res=>res.json())
            .then(res=>{setUser(res)})
    }, [])
    return (
        <>
        <button onClick={()=>{navigate(-1)}}>Indietro</button>
            <h1>Dettagli - {id}</h1>
            <h2>{user ? user.name : "loading"}</h2>
        </>
    )
}


export function Loading() {
    return (<h1>Loading</h1>)
}