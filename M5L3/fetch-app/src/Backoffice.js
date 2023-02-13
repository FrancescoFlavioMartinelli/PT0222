import {useState, useEffect} from 'react'

export function Backoffice() {

    const [posts, setPosts] = useState([])

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const [getLoading, setGetLoading] = useState(true)

    const [postLoading, setPostLoading] = useState(false)

    const newSubmit = (e)=>{
        e.preventDefault()
        setPostLoading(true)
        fetch("http://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: title, body: body})
        })
        .then(res=>res.json())
        .then((res)=>{
            //rimuovo il caricamento
            setPostLoading(false)
            //normalmente la response di un post riuscito è l'elemento appena aggiunto al db compreso dei dati che assegnato il backend (id)+
            // let newPosts = posts
            // newPosts.push(res)
            let newPosts = [...posts, res] //aggiorna l'interfaccia con un nuovo elemento
            setPosts(newPosts)
            //svuoto il form
            setTitle("")
            setBody("")
        },
        (err)=>{
            console.log(err);
            setPostLoading(false)
        })
    }

    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then((res)=>{
            setPosts(res)
            setGetLoading(false)
        },
        (err)=>{
            console.log(err);
        })
    }, [])

    const eliminaPost = (id)=>{
        // console.log(e.target);
        //caricamento
        if(confirm("Sei sicur di voler l'eliminare?")){
            fetch("http://jsonplaceholder.typicode.com/posts/" + id, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then((res)=>{
                //caricamento
                let newPosts = posts.filter((p)=>{
                    return p.id != id
                })
                setPosts(newPosts)
            },
            (err)=>{
                console.log(err);
            })
        }
    }

    const modificaPost = (p) =>{
        //questa deve impostare il form update con i dati del post che vogliamo modificare
    }



    const updateForm = () =>{
        //eseguire il fetch con i dati del formUpdate
        //per fare il fetch ci servono sia i dati nuovi nel body sia l'id nell'url
    }



    return (
        <div>
            {
                getLoading ? 
                    <h5>Caricamento...</h5> :
                    <ul>
                        {posts.map((e)=>(<li key={e.id}>
                            {e.title}
                            <button onClick={()=>{eliminaPost(e.id)}}>Elimina</button>
                            <button onClick={()=>{modificaPost(e)}}>Elimina</button>
                    </li>))}
            </ul>
            }
            {
                postLoading ?
                    <h5>Post in corso...</h5> :
                    <>
                    <h1>NEW</h1>
                    <form onSubmit={newSubmit}>
                        <input name="title" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                        <input name="body" type="text"  value={body} onChange={(e)=>{setBody(e.target.value)}}/>
                        <button type="submit">Invia</button>
                    </form>
                    </>
            }
            <h1>UPDATE</h1>
            <form id="updateForm" onSubmit={updateForm}>
                <input name="title" type="text"/>
                <input name="body" type="text" />
                <button type="submit">Invia</button>
            </form>
        </div>
    )
}