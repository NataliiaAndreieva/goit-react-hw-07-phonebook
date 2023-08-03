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
