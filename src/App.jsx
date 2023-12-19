// import { useState } from "react"
// import Header from ".components/Header"
import Cards from './components/Cards'
import Header from './components/Header';
import plantsToSell from './data/plantsToSell'
import { PanierContextProvider } from './store/panierContext';

// import style from './styles/App.module.css'


function App() {
  return (
    <PanierContextProvider>
    <Header/>
      {plantsToSell.map((plant, index) => (
        <Cards
          key={index}
          description={plant.desc}
          title={plant.name}
          image={plant.img}
        />
      ))}
      </PanierContextProvider>
  
  );
}
console.log(plantsToSell)
export default App
