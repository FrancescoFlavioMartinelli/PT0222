// const collapseElementList = document.querySelectorAll('.collapse')
// const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

const bsCollapse = new bootstrap.Collapse('#collapseExample1', {
    toggle: false
})

setTimeout(() =>{
    bsCollapse.show()
}, 2000)

// const myCollapsible = document.getElementById('collapseExample1')

// myCollapsible.addEventListener("shown.bs.collapse", (e)=>{
//     alert("SHOW")
// })