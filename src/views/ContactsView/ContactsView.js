import { useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import { getContacts } from "../../redux/contacts/selectors";

export default function Contacts() {
  const items = useSelector(getContacts);
  return (
    <div className="container">
      <ContactForm />
      {items.length > 0 && <Filter />}
      <ContactList />
    </div>
  );
}