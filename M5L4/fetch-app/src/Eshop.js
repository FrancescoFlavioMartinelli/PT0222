import React from 'react';

//Al termine della lezione non aveva funzionato la modifica dei prodotti al termine del fetch ma in realta senza nessuna modifica ora funziona, probabilmente non era un errore legato al codice ma all'esecuzione quindi quello che abbiamo fatto a fine lezione era corretto

export class Eshop extends React.Component {
    constructor(props){
        super(props)
        //la prima cosa che viene eseguita quando si usa una classe
        //variabili iniziali, states, esegcuzioni da fare all'inizio

        this.state = {
            searchValue: '',
            products: [],
            filterTag: "",
            loading: true,
            fetchError: false,
            nuovo: {
                loading: true,
                error: false
            },
            updateForm: {
                id: null,
                name: "",
                price: null,
                qnt: null,
                taf: "tag0"
            }
        }

        this.search = (e)=>{
            this.setState({
                searchValue: e.target.value
            })
            //attenzione che lo state cambia con il render, fino alla fine di questa funzione this.state.searchValue vale ancora il vecchio state
            console.log(this.state.searchValue);
        }

        this.nuovoProdotto = (e)=>{
            e.preventDefault()
            let p = {
                name: e.target[0].value,
                price: e.target[1].value,
                qnt: e.target[2].value,
                tag: e.target[3].value
            }
            console.log(p);
            fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(p)
            }).then(res=>res.json())
            .then(
                (res)=>{
                    let nuovoarray = [...this.state.products, p]
                    // let nuovoarray = this.state.products
                    // nuovoarray.push(p)
                    this.setState({products: nuovoarray})
                    //pulisco il form
                    e.target[0].value = ""
                },
                (err)=>{}
            )
        }

        this.updateProdotto = (e) => {
            //parte il caricamento di update
            e.preventDefault()
            console.log("a", this.state.updateForm);
            let p = {
                id: this.state.updateForm.id,
                name: e.target[0].value,
                price: e.target[1].value,
                qnt: e.target[2].value,
                tag: e.target[3].value
            }
            //console.log(p);
            fetch("http://localhost:3000/products/"+p.id, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(p)
            }).then(res=>res.json())
            .then((res)=>{
                let arrayModificato = this.state.products.map((e)=>{
                    if(e.id != p.id) return e
                    // return res
                    return p
                })
                this.setState({products: arrayModificato})
                //loading
            }, (err)=>{
                //errore
            })
        }

        this.setUpdate = (p)=>{
            console.log("set", p);
            this.setState({updateForm: p})
        }
    }

    componentDidMount() {
        //dopo che il component è stato renderizzato
        fetch("http://localhost:3000/products").then(res=>res.json())
        .then(res=>{
            //gestione success
            //caricamento
            this.setState({products: res, loading: false})
        }, (err)=>{
            //gestione errore
            this.setState({fetchError: true, loading: false})
            console.log(err);
        })
    }

    render() {
        const state = this.state
        //ogni volta che viene ri-renderizzato il component (ogni volta che cambia uno state)
        
        //nel render facciamo le operazioni con lo state cambiato
        // console.log(state);

        const loading = (<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>)
        const empty = (<h5>Nessun prodotto trovato</h5>)
        const error = (<h5 className='text-danger'>Errore di caricamento, riprovare più tardi</h5>)

        const getProdottiFiltrati = ()=>{
            return prodottiFiltrati.map((p)=>{
                // return (<div className={p.name.toLowerCase().includes(state.searchValue.toLowerCase()) && p.tag == state.tag ? "d-block" : "d-none"}>
                return (<div className>
                    <h4>{p.name}</h4>
                    <h5>{p.price} €</h5>
                    <h5>{p.tag}</h5>
                    <button className={p.qnt == 0 ? "btn disabled btn-primary" : "btn btn-primary"} >Aggiungi al carrello</button>
                    <button className="btn btn-warning" onClick={()=>{this.setUpdate(p)}}>modifica</button>
                </div>)
            })
        }
        
        //filter search
        let prodottiFiltrati = state.products.filter((p)=>{
            // if( p.name.toLowerCase().includes(state.searchValue.toLowerCase())) {
            //     return true
            // } else {
            //     return false
            // }
            return p.name.toLowerCase().includes(state.searchValue.toLowerCase())
        })
        // console.log("a", prodottiFiltrati);
        //filter tag
        prodottiFiltrati = prodottiFiltrati.filter((p)=>{
            if(state.filterTag == "") return true
            return p.tag == state.filterTag
        })
        // console.log("b", prodottiFiltrati);

        //
        let c = "btn rounded p-1 m-0 "
        const getBtnClass = (tag)=>{
            // return state.filterTag != "" ? c + 'btn-light' : c + 'btn-dark'
            if(state.filterTag != tag) {
                return c + "btn-light"
            } else {
                return c + 'btn-dark'
            }
        }
        
        //RETURN
        return (
            <>
            {/* LISTA PRODOTTI */}
            <>
                <input type="text" onChange={this.search} value={state.searchValue} />
                <button onClick={(e)=>{
                    this.setState({searchValue: ""})
                }}>x</button>

                <button onClick={()=>{
                    this.setState({filterTag: ""})
                }} className={getBtnClass("")}>Tutti</button>
                {/* <button className={ state.filterTag != "tag1" ? c + 'btn-light' : c + 'btn-dark'}>Tag0</button> */}
                <button onClick={()=>{
                    this.setState({filterTag: "tag0"})
                }} className={ getBtnClass("tag0")}>Tag0</button>
                <button onClick={()=>{
                    this.setState({filterTag: "tag1"})
                }} className={ getBtnClass("tag1") }>Tag1</button>

                {
                    // state.products.length == 0 ?
                    state.loading ? loading : //se state.loading è true visualizza html 'loading'
                        state.fetchError ? error :
                            prodottiFiltrati.length == 0 ? empty : getProdottiFiltrati() //else se non ci sono prodotti visualizza il messaggio 'empty' altrimenti la lista di elementi ottenuta da getProdottiFiltrati()
                }
            </>
            {/* FORM NUOVO PRODOTTO */}
            <form onSubmit={this.nuovoProdotto}>
                <input type="text" name="name" required />
                <input type="number" name="price" required min="0" step="0.01" />
                <input type="number" name="qnt" required min="0" step="1"/>
                <select name="tag" required>
                    <option selected={state.updateForm.tag == "tag0"} value="tag0">Tag0</option>
                    <option selected={state.updateForm.tag == "tag0"} value="tag1">Tag1</option>
                </select>

                <button type="submit">crea</button>
            </form>
            {/* FORM MODIFICA PRODOTTO */}
            <hr></hr>
            <form onSubmit={this.updateProdotto}>
                <input type="text" name="name" required value={state.updateForm.name} onChange={(e)=>{
                    this.setState({updateForm: {...state.updateForm, name: e.target.value}})
                }}/>
                <input type="number" name="price" required min="0" step="0.01" value={state.updateForm.price} onChange={(e)=>{
                    this.setState({updateForm: {...state.updateForm, price: e.target.value}})
                }}/>
                <input type="number" name="qnt" required min="0" step="1"  value={state.updateForm.qnt} onChange={(e)=>{
                    this.setState({updateForm: {...state.updateForm, qnt: e.target.value}})
                }}/>
                <select name="tag" required onChange={(e)=>{
                    this.setState({updateForm: {...state.updateForm, tag: e.target.value}})
                }}>
                    <option selected={state.updateForm.tag == "tag0"} value="tag0">Tag0</option>
                    <option selected={state.updateForm.tag == "tag0"} value="tag1">Tag1</option>
                </select>

                <button type="submit">crea</button>
            </form>
            </>
        )
    }
}

//Questo componente ora ha moltissime variabili, states, logiche e html. Potrebbe avere senso dividerla in components, ad esempio una lista con i prodotti, un component per il form di aggiunta e uno per il form di modifica. Con gli argomenti visti fino ad ora siamo in grado di fare quasi tutto ma nel momento in cui l'interazione fatta da un component (es il click di modifica di un prodotto fatto dalla lista) deve interagire con un altro component (il form modifica deve cambiare valore) ci troviamo davanti a un problema perchè dobbiamo impostare dall'evento click di un component lo state di un altro.
//Argomento della prossima lezione sarà infatti far "comunicare" tra i loro i component