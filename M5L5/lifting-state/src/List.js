import { Component } from 'react';

export class List extends Component {

    constructor(props){
        super(props)

        this.products = props.prodotti

        this.clickEvent = (p)=>{
            props.modificaFunc(p)
        }
    }

    render() {
        return (
            <><ul>
            {
            this.products.map((e, i)=>{
                            return (<li>{e.name} - {e.price}€ <button onClick={()=>{this.clickEvent(e)}}>Modifica</button></li>)
                        })
            }</ul>
            </>
        )
    }
}