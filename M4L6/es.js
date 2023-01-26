// loadBTN loadSecondaryBTN
let url = "https://api.pexels.com/v1/search"
let h = {
        "Authorization": "V0FxFIAxbX1qqIq2K1EhqvJAzKbyaNOJ8uDr2myPKyQbsCj7oFY5njt0"
    }

function creaCard({src, photographer, id, url}) {
    const myModal = new bootstrap.Modal('#imageModal')
    
    let div = document.createElement("div")
    div.classList.add("col-md-4")

    let card = document.createElement("div")
    card.classList.add("card", "mb-4", "shadow-sm")

    let img = document.createElement("img")
    img.classList.add("bd-placeholder-img", "card-img-top")
    img.src = src.original

    let cBody = document.createElement("div")
    cBody.classList.add("card-body")

    let p = document.createElement("p")
    p.classList.add("card-text")
    p.innerText = photographer

    let flex = document.createElement("div")
    flex.classList.add("d-flex", "justify-content-between", "align-items-center")

    let group = document.createElement("div")
    group.classList.add("btn-group")

    let btn = document.createElement("button")
    btn.classList.add("btn","btn-sm", "btn-outline-secondary")
    btn.innerText = "Nascondi"
    btn.addEventListener("click", (e)=>{
        div.classList.add("d-none")
    })
    let btnV = document.createElement("button")
    btnV.classList.add("btn","btn-sm", "btn-outline-secondary")
    btnV.innerText = "View"
    btnV.addEventListener("click", (e)=>{
        // location.href=url
        document.getElementById("modalImg").src = src.original
        myModal.show()
    })

    let small = document.createElement("small")
    small.classList.add("text-muted")
    small.innerText = id

    group.append(btn, btnV)
    flex.append(group, small)
    cBody.append(p, flex)
    card.append(img, cBody)
    div.append(card)

    //div TODO
    return div

}


function searchData(q, p=1, pp=10) {
    console.log(q, p , pp);
    q = q.split(" ").join(",")
    let searchQuery = url + "?query="+q+"&page="+p+"&per_page="+pp
    let options = {
        method: "GET",
        headers: h
    }
    return fetch(searchQuery, options).then(res=>res.json())
}
function getData(p=1) {
    let searchQuery = url + "?query=nature&page="+p+"&per_page=10"
    let options = {
        method: "GET",
        headers: h
    }
    return fetch(searchQuery, options).then(res=>res.json()).then((res)=>{
        if(res.error) {
            //alert errore
            return []
        }
        return res.photos
    })
}

function searchByPhotographer(p) {
    return getData().then(res=>{
        let resFiltrato = res.filter((e)=>{
            return e.photographer.toLowerCase() == p.toLowerCase()
        })
        return resFiltrato
    })
}

window.addEventListener("DOMContentLoaded", (e)=>{
    let page = 1
    let mainContent = document.getElementById("mainContent")

    getData().then(res=>{
        let urls = res.map((e)=>{
            return e.url
        })
        console.log("URLs", urls);
    })


    document.getElementById("loadBTN").addEventListener("click", (e)=>{
        getData().then(res=>{
            console.log(res);
            mainContent.innerHTML = ""
            res.forEach((el)=>{
                let c = creaCard(el)
                mainContent.append(c)
            })
        })
    })

    document.getElementById("loadSecondaryBTN").addEventListener("click", (e)=>{
        page++
        getData(page).then(res=>{
            console.log(res);
            res.forEach((el)=>{
                let c = creaCard(el)
                mainContent.append(c)
            })
        })
    })

    document.getElementById("searchbar").addEventListener("submit", (e)=>{
        e.preventDefault() //altrimenti reload
        let input = document.getElementById("search").value
        searchData(input, 1, 20).then(res=>{
            mainContent.innerHTML = ""
            res.photos.forEach((el)=>{
                mainContent.append(creaCard(el))
            })
        })
    })

})


function sa(a) {
    searchByPhotographer(a).then(res=>{
        console.log("Filtered", res);
        res.forEach((el)=>{
    let mainContent = document.getElementById("mainContent")
    mainContent.append(creaCard(el))
        })
    })
}