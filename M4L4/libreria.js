
function sad(){
    return new Promise((succ, rej)=>{
    setTimeout(()=>{
        console.log("INIZO");
        succ(10)
    }, 1000)
})
}