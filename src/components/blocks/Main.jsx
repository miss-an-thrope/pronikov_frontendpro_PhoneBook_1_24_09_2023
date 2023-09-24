/* eslint-disable react/prop-types */

//React tools
import React from "react";

//styles
import '../../assets/scss/components/blocks/_main.scss';

//Components
import PhoneBook from "../themes/PhoneBook/PhoneBook";
import { Routes, Route } from "react-router-dom";

class Main extends React.Component {
   constructor(props) {
      super(props);
   
   }

   render() {

      return (
         <>
            <main className="main">
               <Routes>
                  <Route 
                  path='/' 
                  element={<PhoneBook contacts={this.props.contacts} addContact={this.props.addContact}/>}>
                  </Route>   
               </Routes>
               
            </main>
         </>
      );
   }
}

export default Main;