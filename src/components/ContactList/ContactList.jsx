import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/selectors';

import ContactItem from 'components/ContactItem';

import { List, ErrorText } from './ContactList.styled';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = selectVisibleContacts(contacts, filter);

  if (!contacts?.length) {
    return <ErrorText>You can add contacts</ErrorText>;
  }

  if (!visibleContacts?.length) {
    return <ErrorText>Not found...</ErrorText>;
  }

  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} number={phone} />
      ))}
    </List>
  );
};

export default Contacts;
