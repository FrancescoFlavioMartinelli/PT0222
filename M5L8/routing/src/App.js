import logo from './logo.svg';
import './App.css';

import { Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';

import {Home, Profile, NotFound, Navbar, NavbarReactBootstrap, Settings, Dettagli, Loading } from './Component';

import {lazy, Suspense} from 'react';

function App(){

  //ROUTING#7 la versione in documentazione gestisce le rotte non in html ma in js
  // const r = createBrowserRouter([
  //   {path: '/', element: (<Home />)},
  //   {path: '/profile', element: (<Profile />)},
  //   {path: '/profile/settings', element: (<Settings />)},
  //   {path: '*', element: (<NotFound />)}
  // ]);
  // return (
  //   <>
  //     <Navbar />
  //     <RouterProvider router={r} />
  //   </>)



  // ROUTING#9 lazy loading - caricare parte dei componenti solo quando encessari e non all'avvio del sito, per diminuire i tempi di avvio di un sito pesante
  //si impostano come elements delle rotte i components ottenuti importando un componente dentro la funzione lazy
  const ProfileLazy = lazy(()=> import('./Profile'))
  //ERRORE: il component va exportato come default, vedi file Profile.js, il resto è come spiegato a lezione


  return (
    <>
    <Navbar />
    {/* <NavbarReactBootstrap /> */}
    {/* ROUTING#2 creare tag <Routes> qua è dove verrà inserito il Component della pagina. Può essere posizionato ovunque nel sito (non deve cambiare per forza tutta la pagina) */}
    

{/* ROUTING#8.1 - usiamo il tag Suspense con un Component all'attributo fallback per indicare l'html da visualizzare mentre il component carica */}
    <Suspense fallback={(<Loading />)} >
      <Routes>
        {/* ROUTING#3 per ogni rotta visitabile in questo Router creare un tag <Route> con path ed element */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/profile" element={<ProfileLazy />} /> 
          <Route path="/profile/settings" element={<Settings />} />
          {/* path="*" indica qualunque indirizzo non listato nelle rotte */}
          <Route path="*" element={<NotFound />} />
          {/* Per una variante speicifica interna a una certa rotta posso usare * dopo il resto del path */}
          {/* <Route path="/profile/*" element={<ProfileNotFound />} /> */}
          
          {/* ROUTING#8 possiamo usare il routing per passare dei parametri, li indichiamo come :nomeParam nella definizione della rotta e lo leggeremo con quel nome nel component element. Attenzione che qualunque valore è accettato quindi serviranno dei controlli nel component per controllarne la validità */}
          <Route path="/profile/:id" element={<Dettagli />} />
      </Routes>

    </Suspense>
    
    


    </>
  );
}


export default App;
