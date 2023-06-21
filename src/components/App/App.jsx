import React, { Component } from 'react';
import { ContactsList } from 'components/ContactsList/ContactsList.jsx';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter.jsx';
import { saveLocalStorage, loadLocalStorage } from '../Utils/LocalStorage.js'
import {
  Container,
  Section,
  Wrapper,
  Title,
  SectionTitle,
  Message,
} from './App.styled.js';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  
  componentDidMount() {
    const savedContacts = loadLocalStorage('contacts');

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      saveLocalStorage('contacts', contacts);
    }
  }


  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    const normalizedName = name.toLowerCase();

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === normalizedName
      )
    ) {
      return alert(`${name} is already in contacts!`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

 

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { addContact, filterContacts, deleteContact, state } = this;
    return (
      <Container>
        <Title>Phonebook</Title>
        <Wrapper>
          <Section>
            <SectionTitle>Add contact</SectionTitle>
            <ContactsForm onSubmit={addContact} />
          </Section>
          <Section className="contacts">
            <SectionTitle>Contacts</SectionTitle>
            {state.contacts.length !== 0 ? (
              <>
                <Filter value={state.filter} onChangeFilter={filterContacts} />
                {filteredContacts.length !== 0 ? (
                    <ContactsList
                      contacts={filteredContacts}
                      onDeleteContact={deleteContact}
                    />
                ) : (
                  <Message>Nothing found !</Message>
                )}
              </>
            ) : (
              <Message>
                There are no contacts in your phonebook. Please add your first
                contact!
              </Message>
            )}
          </Section>
        </Wrapper>
      </Container>
    );
  }
}
