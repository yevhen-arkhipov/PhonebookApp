import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { useContacts } from 'hooks';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Loader from 'components/Loader';

import { fetchContacts } from 'redux/contacts/operations';

import {
  Section,
  PhonebookWrapper,
  PhonebookTitle,
  ContactsWrapper,
  ContactsTitle,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
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
    </>
  );
};

export default Contacts;
