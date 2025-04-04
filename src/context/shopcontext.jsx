import React, {useContext, useState} from "react";

import all_products from "../Data/all_product";


const AppContext = React.createContext();

function AppProvider({children}) {
    const [menu, setMenu] = useState("shop");
    const [cart, setCart] = useState([]);  
    const [addToCartNotif, setAddToCartNotif] = useState();  
    
    return(
        <AppContext.Provider value={{all_products, menu, setMenu, cart, setCart, addToCartNotif, setAddToCartNotif}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}


export {AppProvider, useGlobalContext};