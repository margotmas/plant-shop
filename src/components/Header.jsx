import style from "../styles/Header.module.css"
//import {useContext} from "react"
//import { PanierContext } from "../store/panierContext"
import CardButton from "./CardButton"
import PropTypes from "prop-types"


function Header({cartCount}) {




  return (
    <header className={style.header}>
      <img src="logo.png" alt="logo" />
      <h1>Plant-shop</h1>
      <div> <CardButton/> Panier ({cartCount})</div>
    </header>
  )
}

Header.propTypes = {
    
cartCount:PropTypes.number,
}
export default Header
