import React, {useState, useEffect} from 'react';
import Header from '../header/header';
import Footer from '../Footer/footer';
import { usePage } from '../../context/pageContext';
import { useMenu } from '../../context/menuContext';


const Layout = ({ children }) => {
  const [showContact, setShowContact] = useState(false);
  const {pageName, setPageName} = usePage();
  const {showMenu, setShowMenu} = useMenu()
  
  // setPageName(window.location.href.toString().split(['//'],2)[1].split('/')[2]);
   useEffect(() => {
    setPageName(window.location.hash.split("/")[1]);
  }, []);

    useEffect(()=> {
      pageName=='home'? setShowContact(true):setShowContact(false);
      }
    )
  return (
    <div className="app-layout" onClick={() => {
      showMenu ? setShowMenu(false) : ''
    }}>
      <Header 
      phoneNumber={'+25491513825'} 
      showContact={showContact}
      />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;