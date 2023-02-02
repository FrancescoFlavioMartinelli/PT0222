function cardPost(p) {
    // {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //   }
    let card = document.createElement("div");
    card.classList.add("card")
    let cardBody = document.createElement("h5");
    cardBody.classList.add("card-body")
    let cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title")
    cardTitle.innerHTML = p.userId + " - " + p.title
    //TODO: al posto di userId il nome dell'utente
    let cardText = document.createElement("p");
    cardText.classList.add("card-text")
    cardText.innerText = p.body
    let cardLink = document.createElement("a");
    cardLink.classList.add("card-link")
    //TODO: like

    card.append(cardBody, cardTitle, cardText, cardLink)
    return card
}

function cardAmici(u) {
    // u = {
    //     "id": 1,
    //     "nome": ""
    // }
    let card = document.createElement("div")
    card.classList.add("card")
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    cardBody.innerText = u.name
    //TODO: agginugere tasto metti/togli amicizia
    card.appendChild(cardBody)
    return card
}

function getPosts() {
    let container = document.getElementById("postsContainer")
    return fetchPosts()
        .catch(err=>{
            switch(err.message){
                case "Nessun post nell'array": 
                    container.innerHTML = "<h1>Nessun post trovato</h1>"
                    break;
                case "Errore fetch posts": 
                    container.innerHTML = "<h1>Caricamento fallito</h1>"
                    setTimeout(()=>{
                        // location.href = ""
                    }, 2000)
                    break;
            }
        })
        .then(res=>{
            console.log(res);
            if(!res) return
            res.forEach(p=>{
                let c = cardPost(p)
                container.append(c)
            })
        })
}

window.addEventListener("DOMContentLoaded", async ()=>{
    await getPosts()
    // await getAmici()
})