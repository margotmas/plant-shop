// import { createContext } from "react";

// //items = tabeau des éléments présents dans le panier
// export const PanierContext = createContext ({
//     items: [],
//     addItemToCart: () => {}
// })

// export const PanierContextProvider = ({children}) => {

// // fonction ajout dans le panier (cart = panier)

// const handleAddToCart = (productId) => {
//     console.log(productId)
// }

//     const initialValue = {
//         items: [],
//         addItemToCart : handleAddToCart,
//     }
//     return <PanierContext.Provider value={initialValue}>
//         {children}
//     </PanierContext.Provider>
// }