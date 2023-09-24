/* eslint-disable react/prop-types */
//React tools
import React from "react";

//styles
import "../../../../assets/scss/components/themes/PhoneBook/Contacts/_contacts.scss";

//components
import Contact from "./Contact/Contact";

class Contacts extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         addContactForm: {
            name: "",
            username: "",
            phone: "",
         },
         contacts: [],
         isAddingContact: false,
      };
   }

   //connect to API
   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(data => {
            this.setState({ contacts: data });
         })
         .catch(error => {
            console.error('Помилка завантаження контактів:', error);
         });

      //History API
      window.addEventListener('popstate', this.handlePopstate);
   }

   componentWillUnmount() {
      window.removeEventListener('popstate', this.handlePopstate);
   }

   handlePopstate = () => {
      const newPath = window.location.pathname;
      if (newPath === '/newContact') {
         this.setState({ isAddingContact: true });
      } else {
         this.setState({ isAddingContact: false });
      }
   };

   //check change for all inputs
   handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState(prevState => ({
         addContactForm: {
            ...prevState.addContactForm,
            [name]: value,
         },
      }));
   };

   showAddContactForm = () => {
      this.setState({ isAddingContact: true });
      window.history.pushState(null, '', '/newContact'); //History API
   };

   addNewContact = () => {
      const newContact = { ...this.state.addContactForm };
      if (newContact.name && newContact.username && newContact.phone) {
         this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
            isAddingContact: false,
            addContactForm: {
               name: "",
               username: "",
               phone: "",
            },
         }));
         window.history.back(); //back to main page
      }
   };

   cancelAddContact = () => {
      this.setState({
         isAddingContact: false,
         addContactForm: {
            name: "",
            username: "",
            phone: "",
         },
      });
      window.history.back();
   };

   deleteContact = (index) => {
      const updatedContacts = [...this.state.contacts];
      updatedContacts.splice(index, 1);
      this.setState({ contacts: updatedContacts });
   };

   render() {
      const { contacts, isAddingContact, addContactForm } = this.state;

      if (isAddingContact) {
         return (
            <>
               <h3>Додавання нового контакту</h3>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={addContactForm.name}
                  onChange={this.handleInputChange}
               />
               <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={addContactForm.username}
                  onChange={this.handleInputChange}
               />
               <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={addContactForm.phone}
                  onChange={this.handleInputChange}
               />
               <button onClick={this.addNewContact}>Додати контакт</button>
               <button onClick={this.cancelAddContact}>Скасувати</button>
            </>
         );
      }

      const contactElements = contacts.map((contact, index) => (
         <Contact
            key={index}
            name={contact.name}
            username={contact.username}
            phone={contact.phone}
            onDelete={() => this.deleteContact(index)}
         />
      ));

      return (
         <>
            <section className="phonebook__contacts contacts">
               <h3 className="contacts__header">Список контактів</h3>
               {contactElements}
            </section>
            <button onClick={this.showAddContactForm}>Додати контакт</button>
         </>
      );
   }
}


export default Contacts;