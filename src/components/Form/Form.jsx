import React from "react";
import { Container, Button } from "./Form.styled";
import { useDispatch, useSelector } from "react-redux";
// import { addNewContacts } from "redux/contactsSlice";
import { selectContacts } from "redux/selectors";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from "react";
import { addContacts } from "redux/contacts-api";

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      Notify.warning(`${name} is already in contacts`);
      return;
    } else {dispatch(addContacts({name, phone}));
      setName('');
      setPhone('');
    }
  };

    return (
      <Container onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            value={phone}
            placeholder="000-00-00"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
           
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Container>
    );
  }

export default Form;