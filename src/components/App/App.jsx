import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/Container';
import ContactForm from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    const normalizedName = contact.name.toLowerCase();

    if (!name.trim() || !number.trim()) {
      toast.error('Please, enter Name and Number', { position: 'top-center' });
      return;
    }

    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      toast.warn(`${name} is already in contacts`);
      return;
    }

    setContacts(state => [contact, ...state]);
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <Container>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2 className={styles.secondaryTitle}>Contacts</h2>
      <Filter
        value={filter}
        onInputChange={e => setFilter(e.currentTarget.value)}
      />
      <ContactList
        contacts={getVisibleContacts()}
        handleDeleteContact={deleteContact}
      />
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default App;
