import style from "../styles/Header.module.css"
import {useContext} from "react"
import { PanierContext } from "../store/panierContext"

function Header() {
const { items } = useContext(PanierContext)

  return (
    <header className={style.header}>
      <img src="logo.png" alt="logo" />
      <h1>Plant-shop</h1>
      <div>Panier ({items.length})</div>
    </header>
  )
}

export default Header
