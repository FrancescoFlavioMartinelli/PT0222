    FRONTEND            |            BACKEND

1   registrazione       ->          crea utente sul db
                                        - codifica Bcrypt della password
                        |
                        |
2   login               ->          verifica dati utente
                        |               - controllare se l'utente esiste (in base a mail o username)
                        |               - codificafre la password inviata e compararla a quella del db
                        |             
    ricevo il token     <-              - Creo JWT e mando response positiva
                        |                   - inseriamo dati utente nel token
                        |                   - impostiamo una scadenza
salvo il token per usi futuri
    - localStorage (autologin)
                        |
                        |
                        |
                        |
3   aggiungere il token
a tutte le request da autenticare
- aggiungere a headers
'Authorization': 'Bearer ' + token

facciamo una request    ->          Middleware auth
                                        - controlla che il token non sia scaduto (altrimenti manda errore)

                                        - prendere i dati dal db
END                     <-
                        |
                        |
                        |
                        |
4 logout
- dimenticare il JWT nel frontend

5 autologin
- all'avvio della pagina se abbiamo un token in localstorage
    - se il token è valido (expiration date)
        - estraiamo il Payload per i dati dell'utente

        - chiediamo al backend di rinnovare il token
                        ->              - /autologin
                                            - simile al login ma senza password usando il token e i dati dell'utente per verificare e genere il nuovo token
