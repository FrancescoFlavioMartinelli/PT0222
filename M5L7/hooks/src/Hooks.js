import {useState, useEffect, useContext, useReducer, useMemo, useRef, forwardRef, useImperativeHandle} from 'react';

import { Contesto } from './App'

let counterIniziale = {counter: 0}

function counterReducer(state, action) {
    switch(action.type) {

        case 'aumenta':
        return {counter: state.counter + 1}

        case 'diminuisci':
        return {counter: state.counter - 1}

        default:
            throw new Error("Tipo non trovato")
    }

}

export function Hooks(props, ref) {

    const ctx = useContext(Contesto)
    
    useEffect(()=>{
        const i = setInterval(()=>{
            console.log("CIAO");
        }, 1000)
        console.log("MOUNT");


        //unmount
        return ()=>{
            console.log("UNMUONT");
            clearInterval(i)
        }
    }, [])

    const [test, setTest] = useState(0)
    const [counter, setCounter] = useState(0)

    const [reducerCounter, counterDispatch] = useReducer(counterReducer, counterIniziale)

    // const f = ()=>{
    //     return (counter ** 2) ** 5
    // }
    const expensiveCounter = useMemo(()=>{
        return (counter ** 2) ** 5
    }, [counter])
    
    useEffect(()=>{
        console.log("Counter changed");
        // console.log(decreaseBtn);
    }, [counter, test])


    const decreaseBtn = useRef(null)

    useImperativeHandle(ref, ()=>({
        click: ()=>{
            console.log("FORWARD CLICK");
            decreaseBtn.current.click()
        }
    }))
    
    return (<>
    <button ref={decreaseBtn} onClick={()=>{setCounter(counter - 1)}}>-</button>
    <h1>{counter}</h1>
    <h5>{expensiveCounter}</h5>
    <button onClick={()=>{
        setCounter(counter + 1);
        decreaseBtn.current.click();
        }}>+</button>

    {/* <button onClick={()=>{counterDispatch({type: 'diminuisci'})}}>-</button>
    <h1>{reducerCounter.counter}</h1>
    <button onClick={()=>{counterDispatch({type: 'aumenta'})}}>+</button> */}

    <h2>Contesto: {ctx}</h2>

    {/* <button onClick={()=>{setTest(10)}}>Test</button> */}
    </>)
}

Hooks = forwardRef(Hooks)


// class HooksClass extends React.Component {

//     constructor(props) {
//         super(props)
//     }

//     componentDidMount(){
//         console.log("MOUNT");
//         this.interval = setInterval(()=>{console.log("interval"), 1000})
//     }

//     componentDidUpdate(prevprops, prevstate) {
//         if(this.counter != prevstate.counter){
//             //per avere l'esecuzione sul'update di un preciso state dobbiamo controllare se questo è cambiato nell'update
//             console.log("Counter changed");
//         }
//     }

//     componentWillUnmount() {
        // console.log("UNMOUNT");
//         clearInterval(this.intevarl)
//     }

//     render() {
//         return (<></>)
//     }
// }