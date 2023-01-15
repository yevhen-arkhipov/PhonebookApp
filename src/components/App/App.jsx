import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Loader from 'components/Loader';

import {
  Section,
  PhonebookWrapper,
  PhonebookTitle,
  ContactsWrapper,
  ContactsTitle,
} from './App.styled';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        width="1280px"
        height="970px"
        bg="bodyColor"
        boxShadow="outline"
        as="main"
      >
        <Section>
          {isLoading && !error && <Loader />}
          <PhonebookWrapper>
            <PhonebookTitle>Phonebook</PhonebookTitle>
            <ContactForm />
          </PhonebookWrapper>
          <ContactsWrapper>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            <ContactList />
          </ContactsWrapper>
        </Section>
      </Box>
    </>
  );
};

export default App;
