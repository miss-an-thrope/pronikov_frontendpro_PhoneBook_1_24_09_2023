/* eslint-disable react/prop-types */

//React tools
import React from "react";

//styles
import '../assets/scss/components/App.scss';

//components
import Header from "./blocks/Header";
import Aside from "./blocks/Aside";
import Main from "./blocks/Main";
import Footer from "./blocks/Footer";

class App extends React.Component {
   constructor(props) {
      super(props);
      
   }

   render() {


      return (
         <>
            <div className="container">
               <Header />
               <Aside />
               <Main contacts={this.props.contacts} addContact={this.props.addContact}/>
               <Footer />
            </div>
         </>
      );
   }
}

export default App;