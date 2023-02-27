import { Component } from 'react';

import { List } from './List';
import { Updateform } from './Updateform';

export class Main extends Component {

    constructor(props){
        super(props)

        // this.prodotti = []
        this.state = {
            products: [],
            fetchGet: {
                loading: true,
                error: false
            },
            fetchPut: {
                loading: false,
                error: false
            },
            updateProduct: null
        }

        this.modifica = (p)=>{
            this.setState({updateProduct: {...p}})
        }

        this.changeUpdateForm = (e)=>{
            // console.log(e);
            // console.log(e.target.name);
            let nuovoValore = this.state.updateProduct
            nuovoValore[e.target.name] = e.target.value
            
            this.setState({updateProduct: nuovoValore})
        }
        
        this.updateSubmit = (e)=>{
            e.preventDefault()

            // this.setState({fetchPut: {loading: true, error: false}})
            this.setState({fetchPutLoading: true, fetchPutError: false})

            fetch("http://localhost:3000/products/"+this.state.updateProduct.id, {
                method: "PUT",
                body: JSON.stringify(this.state.updateProduct),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(
                res=>{
                    if(res.ok) return res.json()
                    else throw new Error("ERR")
                }
            ).then(
                res=>{
                    let nuovoArray = [...this.state.products]
                    nuovoArray = nuovoArray.map((e)=>{
                        if(e.id == res.id) return res
                        return e
                    })
                    this.setState({
                        // fetchPut: {loading: false, error: false},
                        fetchPutLoading: true,
                        fetchPutError: false,
                        updateProduct: null,
                        products: nuovoArray
                    })
                },
                err=>{
                    this.setState({
                        fetchPutLoading: true,
                        fetchPutError: false
                    })
                }
            )
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/products").then(res=>{
            // console.log(res.ok);
            if(res.ok){ //qua verifichiamo errori del backend
                return res.json()
            } 
            // else {
            //     this.setState({
            //         fetchGet: {
            //             loading: false,
            //             error: true
            //         }
            //     })
            // }
            // throw new Error("Response is not ok")
            if(res.status == 404) throw new Error("Risorsa non trovata")
            if(res.status == 500) throw new Error("Errore server")
            throw new Error("Errore HTTP")
        }).then((res)=>{
            //console.log("SUCC", res);
            this.setState({
                products: res,
                fetchGet: {
                    loading: false,
                    error: false
                }
            })
        },
        (err)=>{
            //console.warn(err)
            //per errori "di sistema" -> generati dal fetch/request http a livello client
            this.setState({
                fetchGet: {
                    loading: false,
                    error: err
                }
            })
        })
    }

    render() {

        const state = this.state
        const get = this.state.fetchGet
        const updateForm = this.state.updateProduct
        // const put = this.state.fetchPut

        const putloading = this.state.fetchPutLoading
        const puterror = this.state.fetchPutError

        if(get.loading) {
            return (<h1>Caricamento in corso...</h1>)
        } 
        if(get.error) {
            return (<h1>ERRORE LETTURA - {get.error.message}</h1>)
        }
        if(state.products.length == 0){
            return (<h2>Nessun prodotto disponibile</h2>)
        }
        return (
            <>
            {/* <h1>{get.error ? (<h1 style="color:red">ERRORE LETTURA</h1>): (<></>)}</h1> */}
                <List prodotti={this.state.products} modificaFunc={this.modifica}></List>
                <hr></hr>
                { updateForm ? (<Updateform updateFunc={this.updateSubmit} changeFunc={this.changeUpdateForm} updateF={updateForm} putloading={putloading}></Updateform>) : (<h4>Premi un tasto modifica per iniziare</h4>)}
                <hr></hr>
            </>
        )
    }

}