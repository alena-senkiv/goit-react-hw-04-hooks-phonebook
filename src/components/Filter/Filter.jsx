import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ value, onInputChange }) => {
  return (
    <div className={styles.filter}>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          name="filter"
          value={value}
          onChange={onInputChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func,
};
