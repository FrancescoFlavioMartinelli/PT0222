Gli hooks si usano nei components Funzione

Vano sempre usati all'inizio della funzione, mai nel return o in altre funzioni


// per i impostare gli state, ovvero variabili che quando vengono impostate con la loro funzione set fanno ri eseguire il render
useState();
//parametro -> valore iniziale
//return -> [state, setState]


//
useEffect(()=>{
    
}, [])
//parametri
    //callback -> funzione che verrà eseguita quando cambia lo state indicato nell dependencies 
        //return -> funzione ->la callback da eseguire quando il component viene smontato

    //dependencies -> array,
        //se vuoto -> componentDidMount (al montaggio (primo render), dopo il render)
        //lista di states -> la callback è eseguita ogni volta che cambiano gli state indicati (solo quando lo state cambia, se lo state è impostato allo stesso valore di com'era prima non verrò eseguita)
    

//
useContext(NomeContext)
//paramtro -> Nome del context
//return -> variabile value del context

//per usare questo hook dobbiamo creare un Context e un ContextProvider nel componente genitore
const Cxt = createContext(valueIniziale)

<Ctx.Provider value={nuovaValue}>
//tutti icomponent qua dentro a qualunqu livello leggerzanno Ctx come nuovaValue usando l'hook
</Ctx.Provider>

//temi
//dati utente

//permette di gestire gli state con Redux
useReducer(reducer, stateIniziale)
//parametri
    //reducer -> funzione che riceve 2 parametri, state e action. In base all'action verrà restituiro un oggetto da assegnare come nuovo state

//return -> [state, dipatch]
    //state -> valore dello stato
    //dispatch -> funzione che esguimao per effettuare uno dei cambi distate del reducer. Passiamo come parametro un oggetto che sarà l'action catturata dal reducer

//creare una funzione reduce
//usare hook per ottenere dispatch
//eseguire dispact specificando l'action per eseguire il cambio di state in Redux


//similea useEffect, eseguono delle funzioni correlate al cambio di certi state, le funzioni sono memoized, mantenute in memoria per velocità
expensiveState = useMemo(fn, [state1, state2])
useCallback(fn, [state1, state2])
//parametri
    //fn ->funzione callback da eseguire quando gli state dependecies cambiano
    //dependencies -> array di state, quando cambiano effettivamente sarà eseguita la callback

useMemo -> funzioni pesanti
useCallback -> funzioni ricorrenti

per ottimizzare ma solo per situazioni specifiche, useCallback/useMemo non sono uno useEffect "più veloce"



//
nomeRef = useRef(null)
<button ref={nomeRef}></button>

perfemtte di associare una variabile a un elemento html
nomeRef.current -> HtmlButtonElement

da usare solo per interagire con l'elemento html ma non fare modifiche dom, verranno perse nel render in ogni caso

//per inoltrare un ref a un componente genitore puoi trasformare il componente con

NomeComponent = forwardRef(NomeComponent)

e nel component generale catturare il ref con

genitoreRef = useRef(null)
<NomeComponent ref={genitoreRef}></NomeComponent>

le funzioni disponibili su genitoreRef devono essere indicate nel component figlio (NomeComponent) con l'hook
useImperativeHandle(ref, ()=>({
    comando1: ()=>{
        //qua lavoro usando il ref originale creato nel component figlio
        nomeRef.click()
    },
    comando2: ()=>{}
}))

e nel componetn genitore potrò fare
genitoreRef.comando1()

che corrisponde a 
nomeRef.click(), interagiamo con nomeRef, ref di NomeComponent a partire dal genitore
