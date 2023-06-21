import React from 'react';
import PropTypes from 'prop-types';


import {
    LabelStyle,
    FormStyle,
    InputStyle,
    ButtonStyle,
  } from './ContactForm.styled';

export class ContactsForm extends React.Component {
    state = {
        name: '',
        number: '',
    };


    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({ name: this.state.name, number: this.state.number });
        this.reset();
      };
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
      reset = () => {
        this.setState({ number: '', name: '' });
    };
    

    render() {
        return (
          <FormStyle onSubmit={this.handleSubmit}>
            <LabelStyle >
              Name
              <InputStyle
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </LabelStyle>
    
            <LabelStyle >
              Number
              <InputStyle
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </LabelStyle>
    
            <ButtonStyle type="submit">Add contact </ButtonStyle>
          </FormStyle>
        );
      }
}
    
ContactsForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };