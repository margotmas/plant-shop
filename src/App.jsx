import Header from ".components/Header"
import Cards from './components/Cards'

import style from './styles/App.module.css'

function App() {

  return (
    <>
      <Cards 
              key={house.name}
              description={house.desc}
              title={house.name}
              image={house.img}
       />
    </>
  )
}

export default App
