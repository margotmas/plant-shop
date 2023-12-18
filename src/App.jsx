// import { useState } from "react"
// import Header from ".components/Header"
import Cards from './components/Cards'
import plantsToSell from './data/plantsToSell'
import Footer from './components/Footer';
// import style from './styles/App.module.css'


const NameOfWorkers = [
  {
    FirstName: "Alexia",

  },
  {
    FirstName: 'Margot',

  },

  {
    FirstName: 'Mathieu',

  },
]


function App() {
  return (
    <>
      {plantsToSell.map((plant, index) => (
        <Cards
          key={index}
          description={plant.desc}
          title={plant.name}
          image={plant.img}
        />
      ))}
      <h2>développé par</h2>
      {NameOfWorkers.map((NameOfWorker, index) => (
        <Footer key={index} infos={NameOfWorker} />
      ))}


    </>
  );
}

export default App
