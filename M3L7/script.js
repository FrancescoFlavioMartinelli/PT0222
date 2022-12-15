
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



/* */

class Subject {
    constructor() {
        // this.functions = [f1]
        this.obs = []
        this.pipes = []
        this.complete = (e)=>{console.log(e)}
    }

    next(x) {
        this.pipes.forEach(f=>{
            x = f(x)
        })

        this.obs.forEach(o=>{
            o.run(x)
        })

        // this.complete(x)
    }

    addObsverable(o) {
        this.obs.push(o)
    }


    pipe(f) {
        this.pipes.push(f)
    }
}

class Observable {
    constructor() {
        this.functions = (e)=>{}
        this.pipes = []
    } 
    subscribe(f) {
        // this.functions.push(f)
        this.functions = f
    }

    pipe(p) {
        this.pipes.push(p)
    }

    run(x) {

        this.pipes.forEach(f=>{
            x = f(x)
        })

        // this.functions.forEach(f=>{
        //     f(x)
        // })
        f(x)
    }


}

let s = new Subject()
function f1(e) {console.log(e*2)}
function p1(e) {return e*3}

let obs = new Observable()
obs.subscribe(f1)
let obs2 = new Observable()
obs2.subscribe(f1)

s.addObsverable(obs)
s.addObsverable(obs2)

s.next(10)



/////
class Button {
    constructor() {
        this.eventsClick = []
        this.eventsHover = []
    }
    
    click(x){
        this.eventsClick.forEach(e=>{
            e(x)
        })
        console.log(x)
    }
    
    hover(x){
        this.eventsHover.forEach(e=>{
            e(x)
        })
        console.log(x)
    }

    addClickListener(f) {
        this.eventsClick.push(f)
    }
    addHoverListener(f) {
        this.eventsHover.push(f)
    }
}

let b = new Button()
let b1 = new Button()

b.addClickListener((e)=>{
    console.log(x*2);
})

b1.addClickListener((e)=>{
    console.log(x*3);
})

b.click(10)
b1.click(10)

let ba = {
    f: (e)=>{},
    click: (x)=>{
        this.f(x)
        console.log(x);
    }
}
let bb = {
    f: (e)=>{},
    click: (x)=>{
        this.f(x)
        console.log(x);
    }
}
let bc = {
    f: (e)=>{},
    click: (x)=>{
        this.f(x)
        console.log(x);
    }
}

class btn {

    constructor(f) {
        this.f = f
    }

    click(x){
        this.f(x)
        console.log(x);
    }
}

ba = new btn((x)=>{console.log(x*2)})
bb = new btn((x)=>{console.log(x*3)})
bc = new btn((x)=>{console.log(x*4)})

ba.click(10)