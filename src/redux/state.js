import { rerenderEntireTree } from "../render";

const state = {
   phoneBookPage: {
         contacts: []
   }
}

export const addContact = (name, username, phone) => {
   let newContact = {
      id: state.phoneBookPage.contacts.length + 1,
      name: name,
      username: username,
      phone: phone,
   }
   
   state.phoneBookPage.contacts.push(newContact);
   rerenderEntireTree(state);
}
export default state;