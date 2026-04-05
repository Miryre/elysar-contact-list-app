export const initialStore=()=>{
  return{
    contacts: [
      {
        id: 1,
        name: "Mike Anamendolla",
        email: "mike.ana@example.com",
        phone: "(870) 288-4149",
        address: "5842 Hillcrest Rd",
        photo: "https://randomuser.me/api/portraits/men/1.jpg"
      }
    ]
  };
};

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_contact':
      return {
        ...store,
       contacts: [...store.contacts, action.payload]
      };
      case "delete_contact":
        return {
          ...store,
          contacts: store.contacts.filter(c => c.id !== action.payload)
        };
      case "edit_contact":
        return {
          ...store,
          contacts: store.contacts.map(c => c.id === action.payload.id ? action.payload : c)
        };
    default:
      throw Error('Unknown action.');
  }    
}
