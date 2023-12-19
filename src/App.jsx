import { useState } from "react"
// import Header from ".components/Header"
import Cards from './components/Cards'
import Header from './components/Header';
import plantsToSell from './data/plantsToSell'


//import { PanierContextProvider } from './store/panierContext';

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

  const [cartCount, setCartCount] = useState (0);

 

  return (

    <>
    <Header cartCount = {cartCount}/>

    <div className={style.card}>

      {plantsToSell.map((plant, index) => (
        <Cards
          key={index}
          description={plant.desc}
          title={plant.name}
          image={plant.img}
          setCartCount={setCartCount}
        />
      ))}
     
    </div>
      <section className="BackgroundColorFooter">
        <h2>Développé par:</h2>
        {NameOfWorkers.map((NameOfWorker, index) => (
          <Footer key={index} infos={NameOfWorker} />

        ))}
      </section>
      </>

  );
}

export default App
