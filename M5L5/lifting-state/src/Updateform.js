import { Component } from 'react';

export class Updateform extends Component {

    constructor(props){
        super(props)

        this.props = props

        this.updateSubmit = (e)=>{
            props.updateFunc(e)
        }

        this.changeUpdateForm = (e)=>{
            props.changeFunc(e)
        }

        this.updateForm = props.updateF

        this.put = props.putloading
    }

    componentDidUpdate(prevProps) {

        // console.log(prevProps.put, this.props.put);

        // this.updateForm = this.props.updateF

        this.put = this.props.putloading
        console.log(prevProps.putloading, this.props.putloading);
    }

    render() {
        console.log(this.put);
        return (
            <>
            <form onSubmit={this.updateSubmit}>
                    <input type="string" name="name" value={this.updateForm.name} onChange={this.changeUpdateForm} />
                    <input type="number" name="price" value={this.updateForm.price} onChange={this.changeUpdateForm} />
                    {this.put ? <button type="button" disabled>Caricamento</button> : <button type="submit">Invia</button>}
                </form>
            </>
        )
    }
}