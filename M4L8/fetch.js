let url = "http://localhost:3000"

function fetchPosts() {
    return fetch(`${url}/posts`).then(res=>{
        console.log(res);
        if(!res.ok) {
            throw new Error("Errore fetch posts")
        }
        return res.json()
    }).then(res=>{
        console.log(res);
        if(res.length == 0) {
            throw new Error("Nessun post nell'array")
        }
        return res
    })
}

function fetchNewPost(nuovoPost) {
    return fetch(`${url}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuovoPost)
    }).then(res=>{
        console.log(res);
        if(!res.ok) {
            throw new Error("Errore creazione posts")
        }
        return res.json()
    })
}

function fetchDelete(p) {
    console.log(p);
    return fetch(`${url}/posts/${p.id}`, {
        method: "DELETE"
    }).then(res=>{
        console.log(res);
        if(!res.ok) {
            throw new Error("Errore fetch delete")
        }
        return res.json()
    })
}

function fetchUpdate(p){
    return fetch(`${url}/posts/${p.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(p)
    }).then(res=>{
        console.log(res);
        if(!res.ok) {
            throw new Error("Errore fetch put")
        }
        return res.json()
    })
}