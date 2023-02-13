import {useState} from 'react'

export function Form() {

    // let nome = "flavio"
    const [nome, setNome] = useState("Flavio")

    // come negli eventListener le funzioni relative agli eventi ricevono l'evento come parametro
    const submit = (e)=>{
        // prevenire il reload
        e.preventDefault();
        console.log(nome)
    }

    const change = (e)=>{
        // console.log(e.target.value); //questa value è aggiornata con l'input utente ma react non farà cambiare la value
        setNome(e.target.value)
    }
    
    //Uncontrolled inputs -> senza state per la value -> non potendo interagire con il dom non possiamo modificare la value dell'input

    //Controlled inputs -> usiamo state per la value così abbiamo una variabile per controlalre facilmente l'input
    return (
        //Con i form sempre evento submit e mai click del button (il click avviene sempre ikl submit solo se il form è valido)
        // Gli input hanno uno state nativo (la value) e questo crea problematiche se vogliamo modificare la value con una variaible
        <form onSubmit={submit}>
            <input name="nome" required value={nome} onChange={change} />
            <button type="submit">Invia</button>
        </form>
    )
}