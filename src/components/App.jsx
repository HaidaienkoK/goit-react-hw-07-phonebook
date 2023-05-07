import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { selectContacts } from 'redux/selectors/selectors';
import { getContactsThunk } from 'redux/operations/contactsThunk';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const users = useSelector(selectContacts);

  return (
    <section>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>
        {/* {!users.length ? (
          <h3>Your phonebook is empty. Add your first contact</h3>
        ) : ( */}
          <>
            <h3>Your phonebook has {users.length} contacts</h3>
            <Filter />
            <ContactList />
          </>
        {/* )} */}
      </div>
    </section>
  );
};
