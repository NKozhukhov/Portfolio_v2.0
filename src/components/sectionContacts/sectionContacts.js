import React from 'react'
import "../../style/main.sass"
import Heading from "../heading"
import ContactsForm from "./contactsForm"

class SectionContacts extends React.Component {
    render(){
        return (
            <section className="contacts" id="contacts">
                <Heading heading="Напиши мне!" />
                <ContactsForm />

            </section>
        )
    }
    

}

export default SectionContacts 