import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ImPencil } from 'react-icons/im';
import styles from './ContactForm.module.css';

const nameInputId = uuidv4();
const numberInputId = uuidv4();

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.contactLabel} htmlFor={nameInputId}>
        Name
      </label>
      <input
        className={styles.contactInput}
        type="text"
        name="name"
        id={nameInputId}
        value={name}
        onChange={e => setName(e.currentTarget.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />

      <label className={styles.contactLabel} htmlFor={numberInputId}>
        Number
      </label>
      <input
        className={styles.contactInput}
        type="tel"
        name="number"
        id={numberInputId}
        value={number}
        onChange={e => setNumber(e.currentTarget.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />

      <button className={styles.buttonAdd} type="submit">
        <ImPencil style={{ marginRight: 5 }} />
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
