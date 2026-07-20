import './contact.css';
import { usePage } from '../../context/pageContext';
import ContactModal from '../../components/contactModal/contactModal';
import { useState } from 'react';
const ContactPage = () => {

    const { pageName, setPageName} = usePage();
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')

    const [initialEmail, setInitialEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')

    const [message, setMessage] = useState('')

     const fullName = `${firstName.toString().charAt(0).toUpperCase() + firstName.toString().slice(1)} ${secondName.toString().charAt(0).toUpperCase() + secondName.toString().slice(1)}`
    //  console.log(fullName)

    const handleSubmit = () => {
        if (firstName&&secondName&&initialEmail&&confirmEmail&&initialEmail===confirmEmail&&message){

                const confirmedEmail= initialEmail===confirmEmail
    const clientData = {
        name:fullName,
        email:confirmedEmail?initialEmail:alert('email mismatch'),
        message:message

    }
        }

    }

    const handleClear = () => {
        setSecondName('');
        setFirstName('');
        setConfirmEmail('');
        setInitialEmail('');
        setMessage('');

    }
 
    return (
            <div 
            className=' form_wrapper gravity-theme ' 
            data-form-theme='gravity-theme' 
            data-form-index='0' 
            id='form_wrapper_14' >
              
                <form 
                method='POST' 
                encType='multipart/form-data'  
                id='form_14'   
                noValidate
                style={{marginBottom:'30px'}}>
                    <div className='form-body form_body'>
                        <div id='form_fields_14' 
                        className='form_fields top_label '>
                            <div className='form_heading'>
                                    <h2 className="form_title">Contact us</h2>
                            </div>
                            <fieldset id="field_14_1" 
                            className="field field-type-name "  >
                               
                                <legend className='field_label ' >
                                    Name
                                    <span className="field_required">
                                        <span className="field_required field_required_text">
                                            (Required)
                                        </span>
                                    </span>
                                </legend>
                                <div className='input_complex input_container ' id='input_14_1'>
                                    <span id='input_14_1_3_container' className='name_first form-grid-col' >
                                        <label htmlFor='input_14_1_3' className='form-field-label  '>
                                            First
                                        </label>
                                        <input type='text' 
                                        name='input_1.3' id='input_14_1_3' 
                                           aria-required='true'    autoComplete="given-name" onChange={e => setFirstName(e.target.value)} value={firstName}/>
                                    </span>
                                    <span id='input_14_1_6_container' className='name_last form-grid-col' >
                                        <label htmlFor='input_14_1_6' className='form-field-label  '>
                                            Last
                                        </label>
                                        <input type='text' name='input_1.6' 
                                        id='input_14_1_6'    aria-required='true'   
                                        autoComplete="family-name" 
                                        onChange={e => setSecondName(e.target.value)}
                                        value={secondName}/>
                                        </span>
                                </div>
                            </fieldset>
                            <fieldset id="field_14_2" 
                            className="field field-type-email "  >
                                <legend className='field_label ' >
                                    Email
                                    <span className="field_required">
                                        <span className="field_required field_required_text">
                                            (Required)
                                        </span>
                                    </span>
                                </legend>
                                <div className='input_complex ' id='input_14_2_container'>
                                    <span id='input_14_2_1_container' className='input_left form-grid-col'>
                                        <label htmlFor='input_14_2' className='form-field-label  '>
                                            Enter Email
                                        </label>
                                        <input className='' type='email' name='input_2' 
                                        id='input_14_27'     aria-required="true" 
                                        aria-invalid="false"  autoComplete="email"
                                        onChange={e => setInitialEmail(e.target.value)} value={initialEmail}/>
                                    </span>
                                    <span id='input_14_2_2_container' className='input_right form-grid-col'>
                                        <label htmlFor='input_14_2_2' className='form-field-label  '>
                                            Confirm Email
                                        </label>
                                        <input className='push_right' type='email' name='input_2_2' 
                                        id='input_14_2_29'     aria-required="true" 
                                        aria-invalid="false"  autoComplete="email"
                                        onChange={e => setConfirmEmail(e.target.value)} value={confirmEmail}/>
                                    </span>
                                </div>
                            </fieldset>
                            <div id="field_14_3" 
                            className="field field-type-textarea "  >
                                <label className='field_label text-field-label' htmlFor='input_14_3'>
                                    Comments
                                    <span className="field_required">
                                        <span className="field_required field_required_text">
                                            (Required)
                                        </span>
                                    </span>
                                </label>
                                <div className='field_description' id='field_description_14_3'>
                                    Please let us know what&#039;s on your mind. 
                                    Have a question for us? Ask away.
                                </div>
                                <div className='input_container input_container_textarea'>
                                    <textarea name='input_3' id='input_14_3' 
                                    className='textarea medium'  aria-describedby="field_description_14_3" 
                                    maxLength='500'  aria-required="true" aria-invalid="false"   
                                    rows='10' cols='50' 
                                    onChange={e => setMessage(e.target.value)} value={message}>
                                    </textarea>
                                    <small style={{fontStyle:'italic',width:'100%',textAlign:'left',display:'inline-block'}}>{message.length.toString()} of 500 characters</small>
                                </div>
                            </div>
                            <div className='form-footer form_footer top_label'> 
                                <input type='clear' className='form_button button' maxLength='5' minLength={'5'}   defaultValue='Clear' onClick={handleClear} />
                                <input type='submit' id='form_submit_button_14' 
                                className='form_button button' onClick={handleSubmit} 
                                 defaultValue='Submit' 
                                   maxLength='6' minLength={'6'} />
                                
                            </div>
                            {/* <div id="field_14_4" 
                            className="field field--type-captcha "  >
                                <label className='field_label form-field-label' for='input_14_4'>
                                    CAPTCHA
                                </label>
                                <div id='input_14_4' className='input_container input_recaptcha' 
                                data-sitekey='6LeFMwgqAAAAAEnrGhM4olZzAeHH1lZoAQlZt4LK' 
                                    data-theme='light' data-tabindex='0'  data-badge=''>
                                </div>
                            </div> */}
                             <ContactModal width={'100%'}/>
                        </div>
                        
                    </div>
                    
                </form>
               
            </div>
    )
}

export default ContactPage;