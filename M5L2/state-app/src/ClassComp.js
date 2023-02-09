import React from "react";
import Button from 'react-bootstrap/Button';


// extends React.Component - ereditarietà
// aggiungere alla prima riga del constructor
//super(props)

class ClassComp extends React.Component {
    constructor(props) {
        super(props); //esegue costruttore della superclasse
        // this.counter = 10
        //per avere lo state nelle classi
        this.state = {
            name: "Flavio",
            last_name: "Martinelli"
        }
    }

    //aumenta(){ //ERRORE
    //questo sopra è il modo corretto di creare un metodo in una classe
    //react però sembra non accettare setState all'interno di un metodo
    //(c'è una problematica con il riferimento di this, come vi dicevo this si comporta in molti contesti in maniera strana)
    //quindi per creare i metodi scriviamo in questo modo, manteniamo l'organizzazione dei metodi come fatto nelle classi ma diamo come valore una funzione assegnata con =
    //questa è un'interazione complicata quindi vi consiglio di considerare questa sintassi assiomatica di react, normalmente con le classi non c'è questo problema, esiste solo in react e con state
    aumenta = () => {
        // this.counter++
        console.log("TEST");
        this.setState({last_name: this.state.last_name+"!"})
    }

    render() {
        return (
            <>
                {/* <h1>Hai cliccato {this.counter} volte</h1> */}
                <h1>Hai cliccato {this.state.name} {this.state.last_name} volte</h1>
                <Button variant="danger" onClick={this.aumenta}>Aumenta</Button>
                {/* in alternativa va bene il metodo come scritto a lezione la per usarlo dovremmo aggiugnere .bind(this) nell'html ma sconsiglio */}
                {/* <Button variant="danger" onClick={this.aumenta.bind(this)}>Aumenta</Button> */}
            </>
            )
    }
}

export default ClassComp