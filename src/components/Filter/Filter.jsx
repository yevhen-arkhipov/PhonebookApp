import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';

import { Container, Typography, TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const form = e.currentTarget.value;
    dispatch(setFilter(form));
  };

  return (
    <Container
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        component="h4"
        variant="1"
        sx={{
          marginTop: 1,
        }}
      >
        Find contact by name
      </Typography>
      <TextField
        onChange={handleSubmit}
        type="text"
        name="filter"
        label="Enter contact"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        margin="normal"
        fullWidth
        required
        sx={{ marginTop: 4, width: '400px' }}
      />
    </Container>
  );
};

export default Filter;
