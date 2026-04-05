export const BASE_URL = "https://playground.4geeks.com";
export const AGENDA_SLUG = "elysar";

export const initialStore = () => ({
  contacts: []
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_contacts":
      return { ...store, contacts: action.payload };
    case "add_contact":
      return { ...store, contacts: [...store.contacts, action.payload] };
    case "delete_contact":
      return { ...store, contacts: store.contacts.filter(c => c.id !== action.payload) };
    case "edit_contact":
      return { ...store, contacts: store.contacts.map(c => c.id === action.payload.id ? action.payload : c) };
    default:
      throw Error("Unknown action.");
  }
}
