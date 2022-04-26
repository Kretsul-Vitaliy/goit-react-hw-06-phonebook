import { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Form, FormLabel, Input } from "./ContactForm.styled";

function ContactForm({ onAdd, onCheckUnique }) {
  const [form, setForm] = useState({
    name: "",
    number: "",
  });

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };
  const { name, number } = form;
  const validateForm = () => {
    if (!name || !number) {
      Notify.failure("Some field is empty");
      return false;
    }
    return onCheckUnique(name);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const isValidateForm = validateForm();
    if (!isValidateForm) return;
    onAdd({ id: nanoid(10), ...form });
    const resetForm = () => setForm({ name: "", number: "" });
    resetForm();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormLabel>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChangeForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <button type="submit">Add contact</button>
    </Form>
  );
}

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCheckUnique: PropTypes.func.isRequired,
};

export default ContactForm;
