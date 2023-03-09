I middleware sono funzioni che vbengono eseguti tra la ricezione di una HTTP Request e l'invio di una HTTP Response

sono strutturate come (req, res, next) => {}
req -> request
res -> response
next -> funzione per passare al middleware successivo

i metodi di express
.get(), .post(), .put(), .delete()
ricevono come primo parametro il path della rotta e poi ricevono un qualunque numero di middleware,
anche la callback che da il risutlato è in realtà un middleware

i middleware vengono concatenati ed eseguiti in ordine quando si co0ntatta la rotta api

ATTENZIONE:
se viene eseguito un comando di response (res.send(), res.sendFile(), res.render(), res.json(), ...) non verranno inviate altre response indipendentemente da quanti middleware verrebbero eseguiti dopo

se viene eseguito next() il middleware continuerà ad eseguire la sua logica al termine dei middleware successivi
(ovver il next non interrompe la logica (non è un return) quindi se tra i middleware successivi non c'è una response al termine delle funzioni si eseguirà il resto del middleware inziale )

Questo ci permette di creare dei pattern di esecuzione molto ottimizzati ma è facile confendersi e perdersi, in generale cerca di impostare i middleware per terminare la loro esecuzione dopo il next() (puoi usare return ma di solito basterà avere next come ultima esecuzione, attenzione con gli if{}else{}, non puoi omettere l'else come faremmo con un return)



Possiamo impostarli in 4 modi

(const app = express())

A • GLOBALI
app.use(middleware)

express eseguirà il middleware su ogni request http che riceve (indipendentemente dall'esistenza della rotta contattata)

1 - prima della definizione della rotta (inizio documento di solito)
verrà eseguito sempre prima che dei middleware passati al metodo get/post/put/delete

utili per conversioni di dati (express.json(), ...), controlli di validazione/autenticazione/permessi, logging

2 - dopo la rotta (fine documento di solito)
verrà eseguito dopo il next dell'ultimo middleware passato a get/post/delete/put
questo comporta che la funzoine di callback abbia un next() come possibile termine (magari la callback da una response in alcuni casi, in altri casi esegue i middleware successivi per generare errori automaitici o dare risultati di default quando non disponibili ad esempio)

utili per response default, response con errori preimpostati, middleware "Not found" che viene eseguito quando non è presente la rotta usata (i middleware globali sono comunque eseguiti sempre)

B • Sulla rotta
1 - app.get("/", middleware, (req, res)=>{})
verrà eseguito dopo i globali inziali ma prima del middleware "callback"

utile per convertire i dati per request specifiche, manipolare la request prima di farla analizzare alla callback, controlli di validazioni specifici per certe rotte, logiche condivise da callback di più rotte per evitare di dover riscrivere certi controlli e logiche (possono avere delle response preventive di errore se kla request non è adatta alla rotta ad esempio)

2 - app.get("/", (req, res, next)=>{next() : res.send()}, middleware)
verrà eseguito dopo la callback ma solo se questa esegue un next

utile per conversioni specifiche dei dati nelle response, aggiunta di status o altre informazioni

Questi metodi si possono combinare, creare dei middleware con next e operazioni successive permettono di eseguire dei middleware a metà di una logica, questi funzionamenti però sono molto avanzati e spesso confusionali