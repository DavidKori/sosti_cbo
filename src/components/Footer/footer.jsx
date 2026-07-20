import './footer.css'
import {FiPhone,FiPlus,FiInstagram,FiFacebook,FiTwitter,FiLinkedin,FiX,FiMenu} from 'react-icons/fi'
import image from '../../assets/images/pexels-shvetsa-5029923.jpg'
const Footer = (
    phoneNumber,
    linkedinLink,
    facebookLink,
    twitterLink,
    instagramLink
)=> {
    return (
    <>
    			<footer className="site-foot">
				<div className="container">
					<div className="footer-content">
						<div className="footer-logo">
							<img src={image} 
                            alt="Society for Sustainable Transformative Initiative"/>
						</div>
						<div className="footer-social">
							<h3>Follow us</h3>
							<div className="social-links">
								<a href={twitterLink} target="_blank" rel="noopener" aria-label="Twitter">
									<i className="fab fa-twitter"><FiTwitter/></i>
								</a>
								<a href={facebookLink} target="_blank" rel="noopener" aria-label="Facebook">
									<i className="fab fa-facebook"><FiFacebook/></i>
								</a>
								<a href={instagramLink} target="_blank" rel="noopener" aria-label="Instagram">
									<i className="fab fa-instagram"><FiInstagram/></i>
								</a>
								<a href={linkedinLink} target="_blank" rel="noopener" aria-label="LinkedIn">
									<i className="fab fa-linkedin"><FiLinkedin/></i>
								</a>
							</div>
						</div>
					</div>
					<div className="footer-copyright">
						<p>Copyright &copy; 2026 Society for Sustainable Transformative Initiative <strong>:SOSTI</strong></p><br />
                        <small>Powered by: <strong><a href="tel:+254115685773">KoriDevifys</a></strong></small>
                    </div>
				</div>
			</footer>
    </>
)
}

export default Footer;