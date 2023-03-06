(installare nodejs)

installare una volta express e mongoose
npm install -g express
npm install -g mongoose


Dopo la prima installazione quando si inzia un progetto nuovo basta eseguire
npm install

//mongodb
mongodb atlas - gestione cluster (macchine in cui metteremo i nostri db)
https://www.mongodb.com/atlas/database
registrazione -> piano gratuito -> nuovo cluster -> nuovo utente (segnarsi username e password)

Dalla schermata di mongodb atlas selezionare il cluster e premere 
connect -> con mongodb compass -> copiare indirizzo fornito

mongodb+srv://<username>:<password>@pt02.gflnadk.mongodb.net/test
sostituire <username> e <password> con i dati inseriti prima
mongodb+srv://flavio:Mvats8GJ7OzC7NYM@pt02.gflnadk.mongodb.net/test

aggiungi nuovo indirizzo ip (se non te lo chiede dal menu network access)


mongodb compass -> software gui per gestire i cluster di atlas
https://www.mongodb.com/products/compass
installare -> login -> connect all'indirizzo copiato prima
nuovo database (serve dare un nome alla prima collection)

////////////////////backend.js
////Creazione del backend
- importare express
- creare app express
    - creare variabile app = express()
    - impostare json app.use(express.json())
    - creare funzione start (async con try{}catch)
        - app.listen(port, callback) 

- creare rotte api app.get(route, callback), app.post(), app.delete(), app.put()
    - leggere la request
    - eseguire logica o manipolazione db
    - retituire response.json(risultato)
    (possiamo aggiungere altri metodi per cambiare status e altre informazioni della response)

- avviare l'app eseguendo start


////Collegamento db
- nella funzione start eseguire mongoose.connect(indirizzo mongodb)
- creazione Schema
    - new mongoose.Schema(struttura inziale)
        struttura inziale: { colonna: {type: string, required: boolean}, colonna2: {type: string, required: boolean} }
- creazione model
    - const Model = mongoose.model(nomeModel, schemaModel)

- inserire le operazioni sul db nelle callback delle rotte api
    Lettura:
        - Model.find(), Model.findById(id)
    Scrittura:
        - const m = new Model
        - m.save()
    Modifica:
        
    Eliminazione:
        - Model.findByIdAndDelete(id)
