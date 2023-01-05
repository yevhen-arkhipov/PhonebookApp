import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem';

import { List, ErrorText } from './ContactList.styled';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!contacts?.length) {
    return <ErrorText>You can add contacts</ErrorText>;
  }

  if (!visibleContacts?.length) {
    return <ErrorText>Not found </ErrorText>;
  }

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

export default Contacts;
