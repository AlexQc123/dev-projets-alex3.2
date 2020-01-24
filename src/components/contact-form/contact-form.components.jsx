import React from 'react'
import './contact-form.styles.scss'



class ContactForm extends React.Component {
    render() {
        return(
            <>
                <h1 className='contact-form'> Dev.Projets.Alex</h1>
                <h2 className='disclaimer'>
                    Plusieurs intégrations sont disponibles, tel que le chat <br/> en direct, différentes devises de paiement, les <br/> systèmes de livraison par courrier, etc. 
                </h2>
                <div className='contact-text'>
                    Web developper for small business <br/>
                    Developpeur de projet Web pour PME
                        <br/>
                <a className='email' style={{textAlign:'center'}} href={`mailto:${"dev.projets.alex@gmail.com"}`}>dev.projets.alex@gmail.com</a>
                </div>
            </>
        )
    }
}

export default ContactForm
    