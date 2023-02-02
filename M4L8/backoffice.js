function cardPost(p) {
    let card = document.createElement("div");
    card.classList.add("card", "postCard")
    card.dataset.idPost = p.id //CARD UPDATE
    let cardBody = document.createElement("h5");
    cardBody.classList.add("card-body")
    cardBody.innerHTML = p.userId + " - " + p.title
    //TODO: al posto di userId il nome dell'utente
    let cardText = document.createElement("p");
    cardText.classList.add("card-text")
    cardText.innerText = p.body

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger")
    deleteButton.innerText = "Elimina"
    deleteButton.addEventListener("click", ()=>{
        deletePost(p).then(res=>{
            card.remove()
        })
    })

    let editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-warning")
    editButton.innerText = "Modifica"
    editButton.addEventListener("click", ()=>{
        //questa funzione non fa l'update ma imposta solo il form per farlo
        // editPost(p).then(res=>{
            //         // if(!res) return 
            //         //ATTENZIONE, p è il parametro che avevamo quando abbiamo chiamato cardPosts (all'avvio), quindi p non hai dati nuovi modificati
            //         cardBody.innerText = res.title
            //         cardTitle.innerText = res.body
            //     })
        //ERRORE -> qua è dove usiamo editPost che visualizza solo il form, NON FA IL FETCH!!! quindi non posso fare .then()
        //dobbiamo trovare un altro modo per modifcare la card quando abbiamo terminato
        //versione corretta:
        editPost(p)
    })

    card.append(cardBody, cardText, deleteButton, editButton)
    return card
}

function deletePost(p) {
    if(confirm("Sei sicur di voler eliminare? L'azione è irreversibile")) {
        showLoading()
        return fetchDelete(p)
            .catch(err=>{
    
            })
            .then(res=>{
                alert("Post eliminato")
                hideLoading()
            })
    }
}

function editPost(p) {
    //impostare un form con i dati di p, in modoo che l'utente possa modificarlo
    let nuovo = document.getElementById("newForm")
    let f = document.getElementById("updateForm")
    nuovo.style.display = "none";
    f.style.display = "block";
    f[0].value = p.title
    f[1].value = p.body
    f[2].value = p.userId
    f[3].value = p.id
    ////
}

function updatePost(p) {
    //questa è la funzione che esegue l'update
    return fetchUpdate(p)
        .catch(err=>{})
        .then(res=>{
            if(res){
                alert("Post modificato")
                //il risultato dell'operazione PUT restituisce l'elemento modificato
                return res
            }
            //se res è undefined siamo passati dal catch
            //return del dato che vogliamo passare al prossimo then
        })
}

function getPosts() {
    let container = document.getElementById("postList")
    showLoading()
    // container.innerHTML = "" //fondamentale se la funzione viene riusata più volte (per evitare che si accumulino tutti i post)
    return fetchPosts()
        .catch(err=>{
            switch(err.message) {
                case "Nessun post nell'array":
                    container.innerHTML = "Nessun post presente"
                    break;
                default:
                    alert("non dovresti essere qua")
                    location.href = "index.html"
                    break;
            }
        })
        .then(res=>{
            if(!res) return //in caso ci sia stato il catch (no return da catch)
            res.forEach((e)=>{
                container.append(cardPost(e))
            })
            hideLoading()
        })
}

function creaPost(nuovoPost) {
    let container = document.getElementById("postList")
    //fetch POST
    return fetchNewPost(nuovoPost)
        .catch(err=>{
            //
        })
        .then(res=>{
            //
            container.append(cardPost(res))
        })
}

window.addEventListener("DOMContentLoaded", async ()=>{
    await getPosts()
    document.getElementById("newForm").addEventListener("submit", (e)=>{
        e.preventDefault() //con evento submit impedisce il reload della pagina
        //feedback - bloccare il tasto submit / mettere un caricamento
        blockSubmit()
        showLoading()
        let nuovoPost = {
            userId: 1,
            title: e.target[0].value,
            body: e.target[1].value
        }
        console.log(nuovoPost);
        creaPost(nuovoPost).then(()=>{
            //
            unlockSubmit()
            hideLoading()
        })
    })
    document.getElementById("updateForm").addEventListener("submit", (e)=>{
        e.preventDefault();
        // blockSubmit()
        if(!confirm("Sei sicur di voler modificare il post? L'azione è irreversibile")) return
        //ERRORE -> qua ho copiato dal nuovo post ma in realtà
            //qua userId deve essere quello che già era presente nel post
            //l'id deve essere compreso nell'oggetto (perchè serve sia nel body della request sia per l'url)
        // let post = {
        //     userId: 1,
        //     title: e.target[0].value,
        //     body: e.target[1].value
        // }
        //versione corretta:
        let post = {
            id: e.target[3].value,
            userId: e.target[2].value,
            title: e.target[0].value,
            body: e.target[1].value
        }
        showLoading()
        updatePost(post).then(res=>{
            hideLoading()
            //ERRORE -> qua è dove usiamo updatePost e possiamo manipolare il risultato
            editCard(res) //CARD UPDATE
            // unlockSubmit()
        })
    })
})

//CARD UPDATE
function editCard(p) {
    let c = Array.from(document.getElementsByClassName("postCard")).find((e)=>{
        return e.dataset.idPost == p.id 
    }) //trovo la card corretta
    if(c) {
        c.querySelector("h5").innerText = p.title
        c.querySelector("p").innerText = p.body
    }
}

function blockSubmit() {
    let f = document.getElementById("newForm")
    f[2].classList.add("disabled")
}

function unlockSubmit() {
    let f = document.getElementById("newForm")
    f[2].classList.remove("disabled")
    f[0].value = ""
    f[1].value = ""
}

function showLoading() {

}
function hideLoading() {

}