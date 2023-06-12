import { List, ItemContacts, ButtonContacts } from "./ContactsList.styled";
import React from 'react';
import PropTypes from 'prop-types'

export const ContactsList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(contact => (
      <ItemContacts key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <ButtonContacts
            type="button"
            name="delete"
            onClick={() => onDeleteContact(contact.id)}
          >
            delete
          </ButtonContacts>
        }
      </ItemContacts>
    ))}
  </List>
);


ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
