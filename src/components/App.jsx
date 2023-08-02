import React from 'react';
import { selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';

import Form from "./Form";
import Filter from "./Filter";
import ContactsList from "./ContactsList";
import { Container } from "./App.styled";

export function App () {
  const error = useSelector(selectError);

    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <Form />
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </Container>
        {error && <p>{error}</p>}
      </>
    );
  }
