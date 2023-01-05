import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import {
  Section,
  PhonebookWrapper,
  PhonebookTitle,
  ContactsWrapper,
  ContactsTitle,
} from './App.styled';

const App = () => {
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
