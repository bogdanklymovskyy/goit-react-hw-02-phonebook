import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';

const ContactList = ({ contact, deleteContact }) => {
  return (
    <div className={styles.contactListContaoner}>
      <ul className={styles.contactList}>
        {contact.map(({ id, name, number }) => (
          <li key={id} className={styles.contactItem}>
            {name}: {number}
            <button
              className={styles.deleteBtn}
              onClick={() => deleteContact(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                class="modal__icon-close"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
