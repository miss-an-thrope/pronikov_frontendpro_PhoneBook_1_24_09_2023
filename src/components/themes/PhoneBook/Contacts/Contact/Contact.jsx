/* eslint-disable react/prop-types */
//React tools
import React from "react";

//styles
import '../../../../../assets/scss/components/themes/PhoneBook/Contacts/Contact/_contact.scss';

//components

class Contact extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <>
            <section className="contacts__contact contact">
               <table className="contact__info">
                  <tbody>
                     <tr>
                        <th scope="row">{"Ім'я"}</th>
                        <td>{this.props.name}</td>
                     </tr>
                     <tr>
                        <th scope="row">Прізвище:</th>
                        <td>{this.props.username}</td>
                     </tr>
                     <tr>
                        <th scope="row">Телефон:</th>
                        <td>{this.props.phone}</td>
                     </tr>
                  </tbody>
               </table>

               <button onClick={this.props.onDelete}>Видалити</button>
            </section>
         </>
      );
   }
}

export default Contact;