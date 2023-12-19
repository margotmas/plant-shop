// import { useState } from "react"
// import Header from ".components/Header"
import Cards from './components/Cards'
import Header from './components/Header';
import plantsToSell from './data/plantsToSell'

import { PanierContextProvider } from './store/panierContext';

import style from './styles/App.module.css'
import Footer from './components/Footer';

const NameOfWorkers = [
  {
    FirstName: "Alexia🌻",

  },
  {
    FirstName: 'Margot🌷',

  },

  {
    FirstName: 'Mathieu🌱',

  },
]

function App() {
  return (

    <PanierContextProvider>
    <Header/>

    <div className={style.card}>

      {plantsToSell.map((plant, index) => (
        <Cards
          key={index}
          description={plant.desc}
          title={plant.name}
          image={plant.img}
        />
      ))}

      
  

      </div>
      <section className="BackgroundColorFooter">
        <h2>Développé par:</h2>
        {NameOfWorkers.map((NameOfWorker, index) => (
          <Footer key={index} infos={NameOfWorker} />

        ))}
      </section>
      </PanierContextProvider>

  );
}

export default App
