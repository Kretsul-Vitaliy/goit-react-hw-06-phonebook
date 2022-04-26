import PropTypes from "prop-types";
import { Input } from "../ContactForm/ContactForm.styled";

function Filter({ filter, onChange }) {
  return (
    <Input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for Search"
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
