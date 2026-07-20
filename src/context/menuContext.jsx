import { createContext, useState, useContext} from "react";
 
 export const MenuContext = createContext();

export default function MenuProvider ({children}) {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <MenuContext.Provider 
        value={{showMenu, setShowMenu}}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu () {
    return useContext(MenuContext);
}

