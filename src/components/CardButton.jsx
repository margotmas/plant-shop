
import PropTypes from "prop-types"


function CardButton({ setCartCount}) {




    return (
      <>
  <button onClick={() => setCartCount ((prev) => prev + 1)}>
    Ajouter au panier
  </button>
    </>
      
    )
  }

  
  CardButton.propTypes = {
    cartCount:PropTypes.string,
    setCartCount:PropTypes.func,
  }
  export default CardButton