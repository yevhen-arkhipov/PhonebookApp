import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchContacts } from 'redux/contacts/operations';
import { useContacts } from 'hooks';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Loader from 'components/Loader';

import { Container, Typography, Avatar } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container
      component="section"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      {isLoading && !error && <Loader />}
      <Avatar sx={{ marginTop: 4, bgcolor: '#883f2d' }}>
        <PersonAddAltIcon />
      </Avatar>
      <Typography component="h1" variant="h6">
        Phonebook
      </Typography>
      <ContactForm />
      <Avatar sx={{ marginTop: 4, bgcolor: '#883f2d' }}>
        <PersonSearchIcon />
      </Avatar>
      <Typography
        component="h2"
        variant="h6"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
