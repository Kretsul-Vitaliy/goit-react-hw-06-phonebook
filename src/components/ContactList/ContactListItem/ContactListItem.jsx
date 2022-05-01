import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Notify } from "notiflix";
import { ButtonDelete, ContactListLi } from "./ContactListItem.styled";
import { contactsActions } from "../../../redux/contacts";

function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <ContactListLi>
      {name}: {number}
      <ButtonDelete
        onClick={() =>
          dispatch(
            contactsActions.handleRemoveContact(id),
            Notify.success("Contact is delete"),
          )
        }
      >
        Delete
      </ButtonDelete>
    </ContactListLi>
  );
}
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactListItem;
