const api = "https://api.spotify.com/v1"
const token = "BQBIr8IORUAyfL8PImaDk5oeyfcQf6-LPJAFRbiZjmcqPXsVbdkb5yBwnQdtHnE2pT0EFhfg3N9gRLlSz1UvdnnkVygc89skesqy6GfPzbCA_vK4Bqe8GLwjLcjDf4wV62hJ0XmVy1KSZoUapVhRXhmiWpC06_QoQDouZjXyzTjpqXN7fywmhVh7XZVWWLuSJ1A"

const options = {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
}

function getQueryArtist() {
    let params = new URLSearchParams(window.location.search);
    let artist = params.get("artist")
    // document.querySelector("#mainContent .row").innerHTML = artist
    return artist
}

function getArtist(id) {
    return fetch(api + "/artists/" + id, options).then(res=>res.json()).catch((err)=>{
        //cattura errori http, a volte le api danno risultati positivi con dentro un errore
        console.log(err);
    }).then((res)=>{
        //qua non vogliamo manipolare i dati ma solo controllarli
        if(res.error) {
            //qua gestiamo l'errore
            // location.href = "index.html"
            // visulizzaError()
            throw new Error("ID non trovato") //lo catturiamo nel catch successivo
        }

        //se tutto è ok
        return res //così sarà letto dal successivo then
    })
}

function getAlbums(idArtista) {
    //PER TESTARE LOADING
    // return new Promise(async (s, e)=>{
    //     let res = await fetch(api + "/artists/" + idArtista + "/albums", options).then(res=>res.json())
    //     setTimeout(()=>{
    //         s(res)
    //     }, 2000)
    // })
    return fetch(api + "/artists/" + idArtista + "/albums", options)
                .then(res=>res.json())
                .catch(err=>{console.log(err)})
                .then((res)=>{
                    //se l'api ci da errori come risultato
                    if(res.error) throw new Error("messaggio errore")
                    return res
                })
}


window.addEventListener("DOMContentLoaded", ()=>{
    let a = getQueryArtist()
    getArtist(a)
    .catch(err=>{
        console.log("ERRORE", err);
    })
    .then((res)=>{
        console.log(res);
        document.getElementById("title").innerText = res.name
        document.getElementById("followers").innerText = res.followers.total
        //inizio caricamento - prima del fetch
        document.getElementById("albums").innerHTML = ""
        document.getElementById("albums").append(creaCaricamento())
        getAlbums(a).catch(err=>{
            //qua gestisco l'errore per questa esatta chiamata
        })
        .then((res)=>{
            //fine caricamento - nel than (dopo il termine della chiamata http)
            document.getElementById("albums").innerHTML = ""
            res.items.forEach((al)=>{
                document.getElementById("albums").append(creaAlbum(al))
            })
        })
    })
})


function creaAlbum(item) {

    let div = document.createElement("div")
    div.classList.add("col-3", "dato")
    let img = document.createElement("img")
    img.classList.add("trackImage")
    img.src = item.images[0].url
    let h4 = document.createElement("h4")
    h4.classList.add("trackTitle")
    h4.innerText = item.name

    div.append(img, h4)
    div.addEventListener("click", ()=>{
        location.href = "/album?id="+item.id
    })
    return div
}

function creaCaricamento() {
//     <div class="spinner-border" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>
let div = document.createElement("div")
div.classList.add("spinner-border")
div.role = "status"
console.log(div);
let span = document.createElement("span")
span.classList.add("visually-hidden")
span.innerText =" asf"
return div
}