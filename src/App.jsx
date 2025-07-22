/*
Consegna:

MILESTONE 1:
Al caricamento dell'applicazione, recuperiamo la lista degli attori e delle attrici dalle API e stampiamoli in console.

MILESTONE 2:
Prepariamo una card per ciascun attore/attrice, mostrandone le seguenti informazioni:
- nome
- anno nascita
- nazionalità
- biografia
- immagine
- riconoscimenti
- immagine

MILESTONE 3:
Mostriamo in pagina una card per ciascun attore, con grafica a piacimento!
*/

import { useEffect, useState } from 'react'

function App() {
  // creo una variabile che contenga il link all'api
  const url = 'https://lanciweb.github.io/demo/api/actresses/'
  // creo una variabile di stato per le info delle attrici
  const [actressesData, setActressesData] = useState(null)

  // faccio il fetch dei dati delle attrici al caricamento dell'applicazione
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // stampo la lista in console
        console.log(data);
        setActressesData(data)
      })
  }, [])

  return (
    <>
      <div className="container">
        <ul>
          {
            actressesData && actressesData.map((actress) => {
              return (
                <li key={actress.id}>
                  {actress.name}
                </li>
              )
            })
          }

        </ul>
      </div>
    </>
  )
}

export default App
