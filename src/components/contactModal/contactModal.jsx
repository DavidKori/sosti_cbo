import './contactModal.css';
import { Link } from 'react-router-dom';
import { FiFacebook, FiMail, FiPhone} from 'react-icons/fi';
import {FaWhatsapp} from 'react-icons/fa6';
import { mainSocials } from '../../utils/appData';
import Button from '../button/button';
import { useState } from 'react';

const ContactModal = ({
    phoneNumber =`${ mainSocials.phoneNumber}`,
    email = mainSocials.email,
    facebookLink = mainSocials.facebookLink,
    textArea = false,
    width
}) => {
    const [message, setMessage] = useState('')
    // console.log(message)
    // console.log(message.length)
    const handleSubmit = () => {
        //formSpree code for email submition
    }
    return (
     <>
     <section className="contact-container" style={{width:width}}>
            <div className='left-contact'>
                <div className='contact-items'>
                    <h2>Our Contact</h2>
                    <p>
                        Call Us At: 
                        <Link to={`tel:${phoneNumber}`}>
                            {` ${phoneNumber}`} 
                        </Link>
                    </p>
                    <p>Email: 
                        <Link to={`mailto:${email}`}>
                        {` ${email}`}
                        </Link>
                    </p>
                    <p>WhatsApp: 
                        <Link to={`https://wa.me${phoneNumber}?message=Hello?`}>
                            {` ${phoneNumber}`}
                        </Link>
                    </p>
                    <p>Facebook:
                        <Link to={facebookLink}> 
                            {` Reach Us At Facebook`}
                        </Link>
                    </p>
                
                </div>
                <div className='contact-icons'>
                    <Link to={`tel:${phoneNumber}`}><FiPhone className='-icon'/> <div className='border-right'></div></Link>
                    <Link to={`${email}`}> <FiMail className='-icon '/> <div className='border-right'></div></Link>
                    <Link to={`https://wa.me${phoneNumber}message?`}><FaWhatsapp className='-icon'/> <div className='border-right'></div></Link>
                    <Link to={`${facebookLink}`}> <FiFacebook className='-icon'/> </Link>
                </div>
            </div>
            {textArea==true &&
            <div className='contact-text-area right-contact'>
                <h3>Tell us something Really Quick:</h3>
                <textarea type="textarea" className='-text-area' onChange={e=>setMessage(e.target.value)} maxLength={500}/>
                <small>{message.length.toString()} of 500 characters</small>
                <Button 
                className={'button'}
                onClick={handleSubmit}
                children={'Submit'}
                width={'150px'}
                height='40px'/>
            </div>
            }
     
     </section>
     </>
    )
}

export default ContactModal;