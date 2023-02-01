import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useContacts } from 'hooks';

import { Box, Typography, TextField, Button } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const newContact = { name: form.name.value, number: form.number.value };
    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (findContact) {
      form.reset();
      return Notify.failure(`${newContact.name} is already in contacts.`, {
        position: 'center-top',
        width: '300px',
        fontSize: '14px',
        failure: {
          background: '#883f2d',
        },
      });
    }

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
      }}
      autoComplete="off"
    >
      <Typography
        component="h4"
        variant="1"
        sx={{
          marginTop: 1,
        }}
      >
        Add contact
      </Typography>
      <TextField
        type="text"
        name="name"
        label="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        margin="normal"
        fullWidth
        required
        autoComplete="false"
        sx={{ marginTop: 4 }}
      />
      <TextField
        type="tel"
        name="number"
        label="Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        margin="normal"
        fullWidth
        required
        autoComplete="false"
      />
      <Button
        type="submit"
        variant="outlined"
        sx={{
          marginTop: 4,
        }}
      >
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;
