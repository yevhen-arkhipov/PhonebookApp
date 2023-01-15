import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { DataForm, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const newContact = { name: form.name.value, phone: form.number.value };
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
    <DataForm onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="false"
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="false"
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </DataForm>
  );
};

export default ContactForm;
