import { useEffect, createContext, useContext, useState } from "react";

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
    return window.location.hash.split('/')[1];
}

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}