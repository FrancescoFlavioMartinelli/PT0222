Distinzione client e server

Server -> la macchina che esegue il backend, mantiene i dati persistenti e ha tutti i file frontend e backend
Client -> la macchiam dell'utente, si connette al server al suo indirizzo a una porta aperta, scarica i file frontend che gli servono e comunica via api con il server

----------------------------------------------------------------
Fronted e Backend
FE
- ui utente
- chiede dei dati da mostrare
- chiede di manipolare dati persistenti
- eseguito nella sandbox del browser (limitato in funionalità e non persistente)
- devono essere file scritti nei linguaggi che il browser possa capire

BE
app
- logiche complesse, pesanti o sensibili
- comunica con il db
- apre la porta del server ad altri software (api)
    - url api
    - metodo api
    - funzione associata
    - response al frontend
- può essere scritto in qualunque linguaggio che può essere letto dalla macchina server
- è uno script che viene avviato e resta in ascolto di eventi (http requests)
db (software gestione db)
- gestione dati
- può fornire una gui dei dati persistenti
- fornisce funzionalità, controlli e limitazioni sulle operazioni che si possono fare sui dati (per mantenerli protetti)

---
Tecnologie

nodejs - runtime js, permette di lavorare con js a un livello più basso del browser, permettendo di creare software da eseguire sul computer

mongodb - database, il software che gestisce i dati persistenti, è di tipologia nosql (non usa il liunguaggio sql per gestire i dati)
    - tabella/collection/~model -> risorsa
    - Schema -> struttura di un model (oltre alle tipologia si possono indicare campi come nonNull (required), con valori  di default, associazioni con altri Schemas e altri controlli)
mongodb atlas -> piattaforma pre gestire i clusters e db mongodb (cluster è la macchina con i file fisici del db salvati, ci interagiamo via gui o con mongoose)
mongodb compass -> gui locale per atlas

NPM
express -> framework nodejs per creare backend
mongoose -> per interagire con mongodb
(attenzione noi lavoriamo con mongodb, atlas e compass servono per comodita ma non sono necessari dopo l'avvio del cluster)
+
postman -> per debug, non vorremo creare un sito ogni volta che dobbiamo testare una funzione del backend
