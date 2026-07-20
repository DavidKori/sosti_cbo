import { createContext, useContext, useState } from "react";

const PageContext = createContext()

export default function PageProvider ( {children}) {
 const [pageName, setPageName] = useState("");
 return (
    <PageContext.Provider value={
        {
            pageName,
            setPageName
        }
    }>
        {children}
    </PageContext.Provider>
 )
}

export function usePage () {
    return (useContext(PageContext)) 
}

export function currentPage () {
    return window.location.href.toString().split(['//'],2)[1].split('/')[2]
}