import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchContacts } from 'redux/contacts/operations';
import { useContacts } from 'hooks';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Loader from 'components/Loader';

import { Typography, Avatar } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isLoading && !error ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Avatar sx={{ bgcolor: '#883f2d' }}>
        <PersonAddAltIcon />
      </Avatar>
      <Typography
        component="h1"
        variant="h6"
        sx={{
          marginTop: 1,
        }}
      >
        Phonebook
      </Typography>
      <ContactForm />
      <Avatar sx={{ marginTop: '40px', bgcolor: '#883f2d' }}>
        <PersonSearchIcon />
      </Avatar>
      <Typography
        component="h2"
        variant="h6"
        sx={{
          marginTop: 1,
        }}
      >
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
