
function toggleMenu() {
    let menu = document.getElementById("menu")
    if(menu.classList.contains("open")) {
        menu.classList.add("reverse")
        setTimeout(()=>{
            menu.classList.remove("open", "animated")
        }, 3000)
    } else {
        //open
        menu.classList.add("animated", "open")
    }
}