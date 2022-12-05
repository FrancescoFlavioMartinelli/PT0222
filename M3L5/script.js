let p = 0
function slideNext() {
    p+=20
    if(p>=80) {
        p = 0
    }
    let slider = document.getElementById("contentSlider")
    slider.style.transform = "translateX(-"+p+"%)"
}