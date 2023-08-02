// import React from "react";
// import ContactsListItem from "components/ContactsListItem";
// import { useSelector } from "react-redux";
// import { selectContacts, selectFilter } from "redux/selectors";

// const ContactsList = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);

//   const visibleContacts = contacts.filter(contact => contact.contactName.toLowerCase().includes(filter));

//     return (
//       <ul>
//         {visibleContacts.map(({ contactName, contactNumber, id }) => (
//           <ContactsListItem
//             key={id}
//             id={id}
//             name={contactName}
//             number={contactNumber}
//           />
//         ))}
//       </ul>
//     );
// };

// export default ContactsList;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { getContacts } from 'redux/contacts-api';
import { deleteContactById } from 'redux/contacts-api';
import { Contacts, Button } from './ContactsList.styled';
import Loader from 'components/Loader/Loader';

const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul>
      {!error &&
        visibleContacts.map(({ id, name, phone }) => (
          <Contacts key={id}>
            <p>{name[0].toUpperCase() + name.substring(1)}</p> 
            <p>{phone}</p>
            <Button
              type="button"
              onClick={() => dispatch(deleteContactById(id))}
            >
              Delete
            </Button>
          </Contacts>
        ))}
      {isLoading && <Loader />}
    </ul>
  );
};

export default ContactsList;