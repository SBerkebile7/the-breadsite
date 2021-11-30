import React, { useState } from 'react';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/acc2c940-520a-11ec-85ac-d56a41b9ab46";

require('dotenv').config();

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setSubmitted(true);
            console.log('Submit Form', formState);
        }
    };

    if (submitted) {
        return (
            <>
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <div>
            <div>
                <div class="container">
                    <div>
                        <h2>Contact Me</h2>
                        <div class="line-dec"></div>
                    </div>
                </div>
            </div>
            
            <div >
                <div class="container-fluid">
                    <div>
                        <div>
                            <div>
                                <h4>Let's get into contact! Fill out the form to the reach out to me about any inquiries or ideas you may have.</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div id="contact">
                            <form action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit} target="_blank">
                                <div>
                                    <input name="name" type="text" class="form-control" id="name" placeholder="Your name..." required />
                                </div>
                                <div>
                                    <input name="email" type="email" class="form-control" id="email" placeholder="Email..." required />
                                </div>
                                <div>
                                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required ></textarea>
                                </div>
                                <div>
                                   <button type="submit" id="form-submit" class="btn">Send Message</button>
                                </div> 
                                {errorMessage && (
                                    <div>
                                        <p className="error-text">{errorMessage}</p>
                                    </div>
                                )}
                                </form>
                            </div>                
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default ContactForm;
