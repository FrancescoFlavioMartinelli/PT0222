import { useEffect, useState } from "react";
//QUESTO È IL COMPONENT PRESO DALLA DOCUMENTAZIONE
//https://reactjs.org/docs/faq-ajax.html
//implementa un modo di gestire caricamento e errore

export function MyComponent(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {

        fetch("http://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      /* Quando facciamo il map andrebbe messo un attributo key con un valore univoco per ogni elemnto creato, di solito si usa l'id dell'oggetto se disponibile */
      return (
        <ul>
            <button disabled={!isLoaded} onClick="">Load</button>
          {items.map(item => (
            <li key={item.id}> 
              {item.name} {item.username}
            </li>
          ))}
        </ul>
      );
    }
  }