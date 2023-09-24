/* eslint-disable react/prop-types */

//React tools
import React from "react";

//styles
import '../../../assets/scss/components/themes/PhoneBook/_phoneBook.scss';

//components
import Contacts from "./Contacts/Contacts";

class PhoneBook extends React.Component {
   constructor(props) {
      super(props);
   }

   

   render() {

      return (
         <>
            <section className='main_phonebook phonebook'>

               <h2 className='phonebook__header'>Ваша телефонна книжка</h2>

               <Contacts contacts={this.props.contacts} addContact={this.props.addContact}/>

            </section>
         </>
      );
   }
}

export default PhoneBook;