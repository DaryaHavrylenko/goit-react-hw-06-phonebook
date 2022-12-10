import { addContact, deleteContact} from './actions';
import { createReducer } from "@reduxjs/toolkit";

const initialState =[
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
 
];

export const contactReducer = createReducer (initialState, {
    
    [addContact]: (state, action) => {
        
        state.push(action.payload);
       
      },
      [deleteContact]: (state, action) => {
        const index = state.contacts.findIndex(contact => contact.id === action.payload);
        state.contacts.splice(index, 1);
      },})
//   switch (action.type) {
//     case addContact.type:
//         console.log(addContact.type)
//       return [action.payload, ...state];
//     case deleteContact.type:
//        return state.filter(contact => console.log(contact));
//     // case filterContact.type: return state.map(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
//};

//const initialFilterState = '';

// const filterReducer = (state = initialFilterState, action) => {
//   switch (action.type) {
//    case filterContact.type: return state.
//   }
// };
