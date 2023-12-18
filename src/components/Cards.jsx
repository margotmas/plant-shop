import PropTypes from "prop-types"

import style from "../styles/Cards.module.css"
import CardButton from "./CardButton"

function Cards({ description, title, image }) {
  return (
    <div className={style.cards}>
      <div className={style["card-header"]}>
        <div
          className={style["card-img"]}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        ></div>
      </div>
      <div className={style["card-body"]}>
        <h2 className={style["card-title"]}>{title}</h2>
        <p className={style["card-description"]}>{description}</p>
        <CardButton />
      </div>
    </div>
  )
}

export default Cards

Cards.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}
