//request -> leggere 
let xhttp = new XMLHttpRequest();
xhttp.open("GET", "prodotti.json")

//callback
xhttp.onload = (res)=>{
    console.log(res.srcElement.response);
    let prodotti = JSON.parse(res.srcElement.response)
    console.log(prodotti);
    prodotti.forEach((e)=>{
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        h1.innerHTML = e.nome
        let h2 = document.createElement("h2")
        h2.innerHTML = e.prezzo
        div.appendChild(h1)
        div.appendChild(h2)
        document.body.append(div)
    })
}

xhttp.send()


