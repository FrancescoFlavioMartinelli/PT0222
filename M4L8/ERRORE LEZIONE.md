Attenzione ho fatto un'errore nella parte finale mentre scrivevo l'update.
Sono segnati con dei commenti "ERRORE" i punti dove ho lavorato male, in seguito una breve spiegazione

Abbiamo detto che per fare l'update ci sono 2 step
1 - mostrare il form per la modifica quando premiamo update
    - questo lo facciamo con addEventListener del Button al momento che creiamo la card
    - qua abbiamo a disposizione come parametro p il post ORIGINALE
    - qua abbiamo come variabile la CARD che dobbiamo modificare

2 - eseguire il fetch PUT
    - questo lo facciamo con addEventListener del Form al submit
    - qua non abbiamo alcun post passato come parametro, abbiamo solo il form (e.target) da cui prendere gli input
    - il risultato del fetch sarà il post AGGIORNATO

l'obbiettivo è modificare la card corretta al termine del fetch usando come dati quelli del post AGGIORNATO
inoltre per fare il fetch ci servono i dati nuovi, compresi quelli che non modifichiamo nel form come "userId" e "id"

Pertanto
    1 - quando creo la card non posso specificare al Button Modifica di modificare la CARD nel .then() in quanto l'operazione di fetch (che darà come risultato l'array AGGIORNATO) non è chiamata direttamente in quel codice
    2 - quando faccio il fetch non posso ricevere come parametro il post "già pronto" comne parametro ma devo leggermi tutti i dati da una parte del codice non direttamente collegata

la complicazione del PUT deriva propio dal fatto che 2 interazionni completamente separate nel codice servono per fare tutta l'operazione e non possiamo passare dati di una come parametri dell'altra

In questo caso la soluzione e "salvarci" i dati che ci servono da una funzione e andare a leggerli dall'altra
Modi per fare questo possonno essere
 - storage: comodo ma rimane in memoria anche su esecuzioni future creando interazioni problematiche, non serve esattamente a questo
 - variabile "globale" (ovvero creata alla prima riga del codice e modificabile da qualunque punto): soluzione più immediata, di solito si evita di lavorare con variabili globali perchè diventano complesse da gestire, qua può andare bene ma molta attenzione alle interazioni problematiche
 - input hidden: creare nel form dei campi input type="hidden" che non saranno modificabili ne visibili all'utente ma ci permettono di "salvare" nel form tutti i dati che ci servono, sia quelli da modificare sia quelli per dopo. Nel codice condiviso ho usato questa soluzione (attenzione che gli input sono visibili nell'html quindi possono essere modificati manualmente e questo può creare delle problematiche (potrei modificare un post che non è mio se cambiassi l'id di questo input), queste problematiche sono a volte coperte dal backend ma bisogna comunque farci attenzione che potrebbe non andare bene come soluzione nel frontend)

 quindi nel codice trovi
 html: aggiunti i cambi input hidden
 js: modifica alla logica del PUT (che ho completato), commenti "ERRORE" per guidare nei punti che sono stati modificati

 Risolto il fetch la seconda problematica è modificare la card con i dati aggiornati. Non possiamo lavorare dentro all'eventListener del button (dove avremmo la CARD come variabile) perchè ci servono i dati AGGIORNATI ottenuti dal fetch quindi nel .then() del fetch dovremo trovare un modo di identificare la card (usando l'unico valore univoco, l'id del post) e modificarla.
 Quindi:
 1 - quando creiamo la card aggiungiamo l'id da qualche parte nell'elemento (classe, id, attributi data*)
 *attributi html data -> "variabili" che possiamo scrivere sui tag html per differenziarli tra loro
    si scrivono come data-nomeVar="valueVar" direttamente sul tag hmtl
    o via js element.dataset.nomeVar

 (1.5) - quando premiamo modifica ci salviamo il dato per dopo (spiegato sopra)

 2 - quando il fetch termina cerchiamo l'elemento corretto nel dom e lo modifichiamo


 quindi nel codice trovi (commenti "CARD UPDATE")
 js: modifica alla logica di cardPost e aggiunta funzione editCard che trova e modifica la card in base all'id del post (passando come paraemtro il post AGGIORNATO, così la usiamo dopo il fetch)
