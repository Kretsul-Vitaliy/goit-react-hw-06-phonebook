import { useState, useEffect } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import GlobalStyle from "../theme/GlobalStyle.styled";
import ContactForm from "../components/ContactForm";
import Section from "../components/Section";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";

import initialContacts from "../data/contacts.json";

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) || initialContacts || [],
  );
  const [filterContact, setFilterContact] = useState("");
  // функция (метод) обработки контактов которая добавляем новый контакт
  const handleAddContact = newContact => {
    setContacts(
      prevContacts => [...prevContacts, newContact],
      Notify.success("Contact is add phonebook"),
    );
  };
  // функция (метод) проверки на уникальность контактов
  const handleCheckUniqueContact = name => {
    // берем наши контакты из Usestate
    // переменная которая проверяет существует ли контакт в массиве контактов
    // ставим !! если что то найдет то получим true в противном случае false
    const isExistContact = !!contacts.find(contact => contact.name === name);
    // если контакт существует то выводим сообщение
    if (isExistContact) {
      Notify.failure("Contact is already exist");
    }
    // но так как у нас функция проверяет на уникальность то мы ставим инверсию (тоесть не существует контакта значит он уникальный)
    return !isExistContact;
  };

  // метод для удаления контактов, в него будет приходить id и отталкиваться от предыдущего состояния используеться колбек и
  // из деструктуризации наши контакты и их же будем возвращать используя метод filter на каждой итерации будет приходить контакт
  // и будем фильтровать id  (id который не равен id который мы хотим удалить)
  const handleRemoveContact = id => {
    setContacts(
      prevContacts => prevContacts.filter(contact => contact.id !== id),
      Notify.success("Contact is delete"),
    );
  };
  // обработчик фильтр handleFilterChange в него будет приходить фильтр и будем менять наш стейт filter
  const handleFilterChange = filter => setFilterContact(filter);

  // метод фильтрации контактов , будем брать из нашего state contacts и filter, будем возвращать отфильтрованный список контактов
  // при этом не будем изменять тот который находиться у нас в state, методом фильтр на каждой итерации приходит контакт и делаем проверку контакта
  // который будет содержать символы которые находяться в нашем фильтре но мы не должны привязываться к регистру, то что вводим большие или маленькие символы
  // приводим все в нижний регистр методом toLowerCase().includes(filter.toLowerCase()) и фильтр тоже к нижнему регистру
  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContact.toLowerCase()),
    );

  useEffect(() => {
    if (contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);
  // const visibleContacts = getVisibleContacts();
  return (
    <>
      <GlobalStyle />
      <Section title="Phonebook">
        <ContactForm
          onAdd={handleAddContact}
          onCheckUnique={handleCheckUniqueContact}
        />
      </Section>
      <Section title="Contacts">
        <h3>Find contacts by name</h3>
        <Filter filter={filterContact} onChange={handleFilterChange} />
        <ContactList
          contacts={getVisibleContacts()}
          onRemove={handleRemoveContact}
        />
      </Section>
    </>
  );
}

export default App;
