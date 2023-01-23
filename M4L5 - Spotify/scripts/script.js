//Per passare variaibili da una pagina all'altra
// window.location.search //stringa query parametri
// const params = new URLSearchParams(window.location.search)
// console.log(params.get("var"));


////INIZO
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

function getNewReleases() {
    return fetch(api + "/browse/new-releases", options).then(res=>res.json())
    // .then((res)=>{
    //     //NOME ARTISTA: albums.items[].artist[].name e .id
    //     //NOME ALBUM: albums.items[].name
    //     //COVER: albums.items[].images[0].url
    //     console.log(res);
    // })
}

function creaAlbum(item) {
    //NOME ARTISTA: item.artist[].name e .id
    //     //NOME ALBUM: item.name
    //     //COVER: item.images[0].url
    let div = document.createElement("div")
    div.classList.add("col-3", "dato")
    let img = document.createElement("img")
    img.classList.add("trackImage")
    img.src = item.images[0].url
    let h4 = document.createElement("h4")
    h4.classList.add("trackTitle")
    h4.innerText = item.name
    let h5 = document.createElement("h5")
    h5.classList.add("trackAuthor")

    let artists = document.createElement("div")
    item.artists.forEach((artist)=>{
        let a = document.createElement("a")
        a.innerText = artist.name
        a.href = "/artist.html?artist="+artist.id
        artists.append(a)
    })

    div.append(img, h4, h5, artists)
    document.querySelector("#mainContent .row").append(div)
}

window.addEventListener("DOMContentLoaded", ()=>{
    getNewReleases().then((res)=>{
        console.log(res);
        res.albums.items.forEach((i)=>{
            creaAlbum(i)
        })
    })
})


//SE LE OPTIONS SERVISSERO DIVERSE
function fetchPostOption() {
    fetch("", {...options, method: "POST", body: JSON.stringify()}) //uguale a options ma con method post
}