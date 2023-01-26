import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import styles from './App.module.scss';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'RosieR Simpson', number: '458-12-56' },
      { id: 'id-6', name: 'HermioneR Kline', number: '483-89-12' },
      { id: 'id-7', name: 'EdenR Clements', number: '648-17-79' },
      { id: 'id-8', name: 'AnnieR Copeland', number: '287-91-26' },
      { id: 'id-9', name: 'RosieF Simpson', number: '455-12-56' },
      { id: 'id-10', name: 'HermioneF Kline', number: '543-89-12' },
      { id: 'id-11', name: 'EdenF Clements', number: '655-17-79' },
      { id: 'id-12', name: 'AnnieF Copeland', number: '527-91-26' },
      { id: 'id-13', name: 'Annies Copeland', number: '527-91-26' },
      { id: 'id-14', name: 'AnnieM Copeland', number: '547-91-26' },
      { id: 'id-15', name: 'Anniel Copeland', number: '537-91-26' },
      { id: 'id-16', name: 'AnnieX Copeland', number: '517-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const auditName = this.state.contacts.find(
      e => e.name.toLowerCase() === data.name.toLowerCase()
    );
    if (auditName) return alert(auditName.name + ' is already in contacts.');

    data.id = nanoid();
    this.setState(prevState => ({ contacts: [data, ...prevState.contacts] }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();
    const isContact = Boolean(visibleContact.length);

    return (
      <div className={styles.container}>
        <div className={styles.containerBcg}>
          <div className={styles.contactBook}>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm onSubmit={this.addContact} />
            <h2 className={styles.subTitle}>Contacts</h2>
            <Filter value={filter} changeFilter={this.changeFilter} />
            {isContact && (
              <ContactList
                contact={visibleContact}
                deleteContact={this.deleteContact}
              />
            )}
            {!isContact && (
              <p className={styles.noContact}>No contact in list</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
