function apriMenu() {
    let menu = document.getElementById('menu')
    if(menu.classList.contains("active")){
        menu.classList.remove("active")
    } else {
        menu.classList.add("active")
    }
}