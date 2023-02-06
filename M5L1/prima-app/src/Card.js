import "./Card.css"

export function Card(props) {
    let post = props.post

    let a = props.active

    let expanded = props.expanded

    const elimina = ()=>{
        fetch("http://localhost:3001/posts/"+post.id)
    }
    
    return (<div class={a ? "card active" : "card"}>
        <h5>{post["id"]} - {post["title"]}</h5>
        <h4>{post["body"]}</h4>
        {expanded ? (<h3>Autore: {post["userId"]}</h3>) : null}
        <button onclick={elimina}>elimina</button>
    </div>)
} 