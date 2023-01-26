import { useContacts } from 'hooks';
import { selectVisibleContacts } from 'redux/contacts/selectors';

import ContactItem from 'components/ContactItem';

import { List, ErrorText } from './ContactList.styled';

const ContactList = () => {
  const { contacts, filter } = useContacts();
  const visibleContacts = selectVisibleContacts(contacts, filter);

  if (!contacts?.length) {
    return <ErrorText>You can add contacts</ErrorText>;
  }

  if (!visibleContacts?.length) {
    return <ErrorText>Not found...</ErrorText>;
  }

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

export default ContactList;
