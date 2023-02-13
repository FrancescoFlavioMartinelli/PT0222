La principale differenza tra component func e classe è che la classe ha un modo (dei metodi) per interagire con i vari momenti del ciclo dei vita del component
Un momento rilevante è il componentDidMount che è dove dovremmo far partire il fetch

Nei components funzione possiamo usare un hook (useEffect) per fare più o meno la stessa cosa ma con meno precisione


//
useState -> creare uno state -> re-renderizza ogni volta che cambia il valore (setState) -> rieseguire la funzoine component
useEffect -> aggiugnere funzionamenti a vari momenti della vita del component, non per forza collegati all'esecuzione della funzione component -> riesegue le sua funzione parametro
-componentDidMount -> viene eseguito quando il component è montato -> dopo il primo render

useEffect(f, deps)
f -> callback
deps -> array -> specifica in quali momenti usare l'effect -> []