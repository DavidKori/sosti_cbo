import './sidebar.css';
import { useState,useEffect } from 'react';
import { useMenu } from '../../context/menuContext';
import { usePage } from '../../context/pageContext';
import {Link} from 'react-router-dom';
import {FiPhone,FiPlus,FiInstagram,FiFacebook,FiTwitter,FiLinkedin,FiX} from 'react-icons/fi'

const Sidebar = ({
    phoneNumber,
    linkedinLink,
    facebookLink,
    twitterLink,
    instagramLink,
    showMobile,
}) => {
    const {pageName, setPageName} = usePage();
    setPageName(window.location.href.toString().split(['//'],2)[1].split('/')[2])

    // useEffect(()=> {
    //    setPageName(window.location.href.toString().split(['//'],2)[1].split('/')[2])
    // })
    // console.log(pageName)
    const {showMenu, setShowMenu}= useMenu();
    
    // console.log(showMobile);
    return (
        <> 
    <nav className={`pushy ${showMenu==false ? "pushy-right":""}`}  data-menu-btn-class=".mobile-menu-button"
        onClick={ () => showMenu?setShowMenu(!showMenu):''}
    >
        <div id='hide' className="pushy-content">
            <a className="mobile-menu-button" onClick={()=> {
               setShowMenu(prev => !prev)
               
             }}> 
                <i className="fas fa-times"><FiX/></i>
            </a>
            <ul id="menu-hedera" className="menu">
                <li id="menu-item-138" 
                className={`menu-item ${pageName == 'home' || pageName == ''? 'current-menu-item' : ''} `}>
                    <Link to="/home" aria-current="page">Home</Link>
                </li>
                <li id="menu-item-171" 
                className={`menu-item ${pageName == 'about'? 'current-menu-item' : ''} `}>
                    <Link to="/about">About</Link>
                </li>
                <li id="menu-item-16117" 
                className={`menu-item ${pageName == 'events'? 'current-menu-item' : ''} `}>
                    <Link to="/events">Events</Link>
                </li>
                <li id="menu-item-19152" 
                className={`menu-item ${pageName == 'blogs'? 'current-menu-item' : ''} `}>
                    <Link to="/blogs">Blog</Link>
                </li>
                <li id="menu-item-16116" 
                className={`menu-item ${pageName == 'contact'? 'current-menu-item' : ''} `}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>        
            <div className="sidebar-add add-organisation">
                <a href={`tel:${phoneNumber}`} className="button">
                    Reach Out 
                    <i className="fas fa-plus"><FiPhone/></i>
                    
                </a>
            </div>
            <div className="mobile-social-media">
                <a href={twitterLink} 
                target="_blank" rel="noopener" 
                aria-label="Twitter">
                    <i className="fab fa-twitter"><FiTwitter/></i>										
                </a>
                <a href={facebookLink} 
                target="_blank" rel="noopener" 
                aria-label="Facebook">
                    <i className="fab fa-facebook"><FiFacebook/></i>	
                </a>									
                <a href={instagramLink} 
                target="_blank" rel="noopener" 
                aria-label="Instagram">
                    <i className="fab fa-instagram"><FiInstagram/></i>					
                </a>
                <a href={linkedinLink} 
                target="_blank" rel="noopener" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"><FiLinkedin/></i>
                </a>
            </div>
        </div>
    </nav>
    <div className="site-overlay"></div> </>
    )
}

export default Sidebar;
