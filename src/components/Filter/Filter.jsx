import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ContactForm/ContactForm.styled";
import { contactsActions } from "../../redux/contacts";

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  return (
    <Input
      type="text"
      name="filter"
      value={filterValue}
      onChange={e => dispatch(contactsActions.filterContact(e.target.value))}
      placeholder="Enter name for Search"
    />
  );
}

export default Filter;
