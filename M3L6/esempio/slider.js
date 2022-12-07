window.addEventListener("DOMContentLoaded", init)


function init() {
    let next = document.getElementById("next")
    let prev = document.getElementById("prev")

    let slider = document.getElementsByClassName("slider")[0]

    let cardSpace = 18; //spazio in % di ogni card (quanto deve scorrere per card)
    let cardsToScroll = 1; //numero di card da scorrere ongi volta
    let currentScroll = 0; //scorrimento inziale, accumula gli scorrimento
    let currentCard = 6; //la card a cui siamo arrivati
    let maxCards = document.getElementsByClassName("card").length

    next.addEventListener("click", ()=>{
        currentCard += cardsToScroll
        if( currentCard > maxCards ) { //se stiamo per scorrere a una card oltre l'ultima
            currentScroll = 0 //torna all'inizio
            currentCard = 6
        } else {
            currentScroll -= cardSpace * cardsToScroll; //scorre verso destra (spostando a slider a sinistra) di nCard * lo spazio che occupa
        }
        slider.style.transform = "translateX("+currentScroll+"%)";
    })
    prev.addEventListener("click", ()=>{
        currentCard -= cardsToScroll
        if(currentCard < 6) {
            currentCard = maxCards
            currentScroll = -(cardSpace * (maxCards - 6))
        } else {
            currentScroll += cardSpace * cardsToScroll
        }
        slider.style.transform = "translateX("+currentScroll+"%)";
    })
}