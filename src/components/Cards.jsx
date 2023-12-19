import PropTypes from "prop-types"
import style from "../styles/Cards.module.css"
import { useState } from "react";

function Cards({ description, title, image }) {
  const [displayText, setDisplayText] = useState(false);
  
  const toggleTextDisplay = () => {
    setDisplayText(!displayText)
  }
// const {addItemToCart} = useContext(PanierContext)

  return (
    <div className={style.card} onClick={toggleTextDisplay}>
      <img src={image} alt={title} className={style.cardImg} />
      <div className={style.cardContent}>
        <h2 className={style.cardTitle}>{title}</h2>
        {displayText && <p className={style.cardDescription}>{description}</p>}
      </div>
    </div>
  );
}


export default Cards

Cards.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}
