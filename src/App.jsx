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
        <div className='row row-cols-lg-4 row-gap-3'>
          {
            actressesData && actressesData.map((actress) => {
              return (
                <div className="col h-100" key={actress.id}>
                  <div className="card h-100">
                    <div className="card-top">
                      <img src={actress.image} alt={actress.name} />
                    </div>
                    <div className="card-body" >
                      <h5 className="card-title">
                        {actress.name}
                      </h5>
                      <p className="card-text">
                        {actress.birth_year}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div >
      </div >
    </>
  )
}

export default App
