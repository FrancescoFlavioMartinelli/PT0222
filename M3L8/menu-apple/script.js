let nav

window.addEventListener("DOMContentLoaded", ()=>{
    nav = document.querySelector("nav")
    let h = document.getElementById("hamburger")
    h.addEventListener("click", toggleMenu)
    let i = document.getElementById("searchbar")
    i.addEventListener("click", openSearchbar)
    let c = document.getElementById("cancel")
    c.addEventListener("click", closeSearchbar)
})

function toggleMenu() {
    nav.classList.toggle("menuOpen")
} 

function openSearchbar() {
    nav.classList.add("searchActive")
}
function closeSearchbar() {
    nav.classList.remove("searchActive")
}