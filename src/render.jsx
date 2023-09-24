//React tools
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//Redux/funcs
import { addContact } from './redux/state';

//styles
import './assets/scss/index.scss';

//Components
import App from './components/App.jsx';


const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (state) => {
   root.render(
   <React.StrictMode>
      <BrowserRouter>
        <App contacts={state.phoneBookPage.contacts} addContact={addContact}/>
      </BrowserRouter>
   </React.StrictMode>
  );
}
