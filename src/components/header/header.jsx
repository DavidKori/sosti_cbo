import { useState,useEffect } from 'react';
import { useMenu } from '../../context/menuContext';
import { usePage } from '../../context/pageContext';
import {Link} from 'react-router-dom';
import {FiPhone,FiPlus,FiInstagram,FiFacebook,FiTwitter,FiLinkedin,FiX,FiMenu} from 'react-icons/fi'
import Sidebar from '../sidebar/sidebar';
import { currentPage } from '../../context/pageContext';
import './header.css';

const Header = ({
    phoneNumber,
    linkedinLink,
    facebookLink,
    twitterLink,
    instagramLink,
    showContact
}
) => {
    const {pageName, setPageName} = usePage();
    const {showMenu,setShowMenu} = useMenu();
    // useEffect(() => {
    //     setPageName(currentPage)
    // },[])
    // console.log(pageName)
   return (
        <>
        <header className="site-head">
			<div className="site-head-inner">
				<div className="social-media-top">
					<a href={twitterLink} target="_blank" rel="noopener" 
                    aria-label="Twitter">
						<i className="fab fa-twitter"><FiTwitter/></i>
					</a>
					<a href={facebookLink} target="_blank" rel="noopener" 
                    aria-label="Facebook">
						<i className="fab fa-facebook"><FiFacebook/></i>
					</a>
					<a href={instagramLink} target="_blank" rel="noopener" 
                    aria-label="Instagram">
						<i className="fab fa-instagram"><FiInstagram/></i>
					</a>
					<a href={linkedinLink} target="_blank" rel="noopener" 
                    aria-label="LinkedIn">
						<i className="fab fa-linkedin"><FiLinkedin/></i>
					</a>
				</div>
				<div className="header-left" onClick={() => setPageName(currentPage)}> {/*this line may break the page header layout*/}
					<div className="logo">
						<Link to="/home" className="logo-link" >
							<h1>SOSTI</h1>
						</Link>
					</div>
					<div className="translations">
						<div className="gtranslate_wrapper" id="gt-wrapper-68378965"></div>					
                    </div>
				</div>
				<div className="navigation">
					<div id='menu-hedera' className="menu">
                        <nav>
                        <ul id="menu-header-1" className="menu" onClick={()=>setPageName(window.location.href.toString().split(['//'],2)[1].split('/')[2])}>
                            <li className={`menu-item ${ pageName == 'home'?'current-menu-item':''}`} >
                                <Link to="/home" >Home</Link>
                            </li>
                            <li className={`menu-item ${ pageName == 'about'?'current-menu-item':''}`} >
                                <Link to="/about">About</Link>
                            </li>
                            <li className={`menu-item ${ pageName == 'events'?'current-menu-item':''}`} >
                                <Link to="/events">Events</Link>
                            </li>
                            <li className={`menu-item ${ pageName == 'blogs'?'current-menu-item':''}`} >
                                <Link to="/blogs">Blog</Link>
                            </li>
                            <li className={`menu-item ${ pageName == 'contact'?'current-menu-item':''}`} >
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        	
                        </nav>				
                    </div>
					<div className="mobile-menu-button" onClick={()=>{
                         setShowMenu(prev => !prev)
                    }}>
						<i className="fas fa-bars"><FiMenu/></i>
					</div>
				</div>

                {/* <div class="navigation">
					<div class="menu">
                        <ul id="menu-header-1" class="menu">
                            <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-138">
                                <Link to="/home" >Home</Link>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-171">
                               <Link to="/about">About</Link>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-16117">
                                 <Link to="/events">Events</Link>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19152">
                                 <Link to="/blog">Blog</Link>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-16116">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>					
                    </div>
					<div class="mobile-menu-button">
						<i class="fas fa-bars"><FiMenu/></i>
					</div>
				</div> */}
                {/*showContact &&*/} {phoneNumber &&
                    <div className="add-organisation">
                        <a href={`tel:${phoneNumber}`} className="button">
                            Reach Out
                            <i className="fas fa-plus"><FiPhone/></i>
                        </a>
                    </div>
                }
                
			</div>
               {pageName!='home'&&
                	<div className="page-title">
                        <div className="container">
                            { pageName =="contact" && <h1>{pageName} us</h1>}
                            { pageName!="contact" && <h1>{pageName}</h1>}                            
                        </div>
                    </div>

                }
                {pageName=='home' && 
                <div className="page-title">
                    <div className="container">
                        <h1>SOSTI</h1>
                    </div>
                </div>

                }
            
		</header>
        <Sidebar showMobile={showMenu}/>
        </>
    )
}

export default Header;