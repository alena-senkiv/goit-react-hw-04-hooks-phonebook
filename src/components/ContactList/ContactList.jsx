import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  handleDeleteContact: PropTypes.func,
};
