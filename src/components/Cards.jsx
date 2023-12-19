import PropTypes from "prop-types"
// import plantsToSell from "../data/plantsToSell"
import style from "../styles/Cards.module.css"
import CardButton from "./CardButton";
//import { useContext } from "react";
//import { PanierContext } from "../store/panierContext";

function Cards({ setCartCount, description, title, image }) {

//const addItemToCart = useContext(PanierContext)

  return (
    <div className={style.card}>
      <img src={image} alt={title} className={style.cardImg} />
      <div className={style.cardContent}>
        <h2 className={style.cardTitle}>{title}</h2>
        <p className={style.cardDescription}>{description}</p>
      </div>
      <CardButton setCartCount = {setCartCount}/>
    </div>
  );
}


export default Cards

Cards.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  setCartCount: PropTypes.func
}
