//installazione react
0 - installare nodejs (versione LTS)
1 - installare react `npm install react` `npm install -g react`
2 - `create-react-app nome-app` `npx create-react-app nome-app`

3 - cd nome-app -> muovo il terminale nella cartella del progetto
4 - npm start -> avvio server

//cartelle
- node_modules -> dipendenze
- public -> file che vengono aperti dal browser, non li modifichiamo
- package.json -> i dettagli del progetto, all'itnerno è presento lo script per avviare il sito (start)
- src -> i file che modificheremo, lavoreremo suio file App.js App.css e altri file che creeremo noi


//CREZIONE COMPONENT
- funzione
- classe
creare un file js

<!-- 1 - importare React.component (solo con classi)
`import * from React.Component` -->
2 - creare funzione con
    - nome del componente
    - return html

creare file css
1 - importarlo nel js del component

inserire il component nella View
(inserire tag html del component in App.js (o nel punto html  che vogliamo))

Quando un componente viene caricato nell'interfaccia la sua funzione viene eseguita

Funzionalità:
- possiamo usare html come dato (salvarlo nelle variabili e manipolarlo via js)
- possiamo inserire logica js all'interno dell'html usando {} (inserire variabili come contenuti, logiche ecc)
- passare come parametri dati da un componente genitore a un suo figlio (props)

//PROPS