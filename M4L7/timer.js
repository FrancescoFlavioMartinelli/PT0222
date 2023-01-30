let time = {
    s:0,
    m:0,
    h:0
}
//valore iniziale
let sessionTime = localStorage.getItem("time")
if(sessionTime) {
    time = JSON.parse(sessionTime)
}

document.getElementById("timer").innerText = time.h + ":" + time.m + ":" + time.s

setInterval(()=>{
    time.s++
    if(time.s == 60) {
        time.s = 0
        time.m++
    }
    if(time.m == 60) {
        time.m = 0
        time.h++
    }
    localStorage.setItem("time", JSON.stringify(time))
    document.getElementById("timer").innerText = time.h + ":" + time.m + ":" + time.s
}, 1000)