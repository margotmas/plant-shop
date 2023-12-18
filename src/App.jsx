// import { useState } from "react"
// import Header from ".components/Header"
import Cards from './components/Cards'
import plantsToSell from './data/plantsToSell'
// import style from './styles/App.module.css'


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
    </>
  );
}
console.log(plantsToSell)
export default App
