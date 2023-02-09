dalla cartella del progetto (dove si trovano package.json e node_modules)
(cd path/to/folder)

install
npm install react-bootstrap bootstrap
(dovrebbe bastare una volta sola, se dovesse chiedervi l'istallazione ogni volta)
npm install -g react-bootstrap bootstrap

import

//tutto bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
(da fare in App.js)

//singolo component
import NomeComponent from 'react-bootstrap/NomeComponent';
(in qualunque component in cui ci serve)