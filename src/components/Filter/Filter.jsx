import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import Box from 'components/Box';

import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const form = e.currentTarget.value;
    dispatch(setFilter(form));
  };

  return (
    <Box>
      <Label>
        Find contacts by name
        <Input
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          type="text"
          name="filter"
          onChange={handleSubmit}
        />
      </Label>
    </Box>
  );
};

export default Filter;
