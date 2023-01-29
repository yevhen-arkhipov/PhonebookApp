import { selectVisibleContacts } from 'redux/contacts/selectors';

import { useContacts } from 'hooks';

import ContactItem from 'components/ContactItem';

import { List, Typography } from '@mui/material';

const ContactList = () => {
  const { contacts, filter } = useContacts();
  const visibleContacts = selectVisibleContacts(contacts, filter);

  if (!contacts?.length) {
    return (
      <Typography
        component="h4"
        variant="1"
        sx={{ marginTop: 4, color: '#883f2d' }}
      >
        You can add contacts
      </Typography>
    );
  }

  if (!visibleContacts?.length) {
    return (
      <Typography
        component="h4"
        variant="1"
        sx={{ marginTop: 4, color: '#883f2d' }}
      >
        Not found...
      </Typography>
    );
  }

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
      }}
    >
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

export default ContactList;
