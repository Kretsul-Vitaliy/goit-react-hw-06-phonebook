import { useSelector } from "react-redux";

import ContactListItem from "./ContactListItem/ContactListItem";
import { ContactListBox } from "./ContactList.styled";

function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

  const isVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  const filterContact = isVisibleContacts();

  return (
    <ContactListBox>
      {filterContact.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
        />
      ))}
    </ContactListBox>
  );
}

export default ContactList;

// --------REDUX----------------
// ContactList.propTypes = {
//   // contacts: PropTypes.arrayOf(
//   //   PropTypes.shape({
//   //     id: PropTypes.string.isRequired,
//   //   }),
//   // ).isRequired,
//   // onRemove: PropTypes.func.isRequired,
// };

// export default ContactList;
// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onRemove: id =>
//     dispatch(handleRemoveContact(id), Notify.success("Contact is delete")),
// });
