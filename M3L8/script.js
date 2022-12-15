let menuClosed = true

function toggleMenu() {
    let menu = document.getElementById("menu")

    menuClosed = !menuClosed
    if(menuClosed){
        menu.classList.add("closed")
    } else {
        menu.classList.remove("closed")
    }

    // menu.classList.toggle("closed")

    // if(menu.classList.contains("closed")) {
    //     menu.classList.remove("closed")
    // } else {
    //     menu.classList.add("closed")
    // }
}


window.addEventListener("DOMContentLoaded", (e)=>{
    // Tutte le operazioni che hanno che hanno a che fare con il dom andrebbero eseguite solo quando tutto il contenuto ha caricato
    // lo possiamo capire con l'evento DOMContentLoaded dell'oggetto window
    // let menuBtn = document.getElementById("menuBtn")
    // menuBtn.addEventListener("click", (e)=>{
        //     toggleMenu()
        // })
        
    let nav = document.getElementById("nav")
    
    let hamburger = document.getElementById("hamburger")
    hamburger.addEventListener("click", (e)=>{
        // hamburger.classList.toggle("open")
        nav.classList.toggle("menuOpen")
    })

    
})