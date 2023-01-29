import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import { Box, Typography, TextField, Avatar, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Avatar sx={{ marginTop: 4, bgcolor: '#883f2d' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h6">
        Sign up
      </Typography>
      <Box
        component="form"
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '400px',
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          type="text"
          name="name"
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          margin="normal"
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{
            marginTop: 4,
          }}
        >
          Continue
        </Button>
      </Box>
    </>
  );
};

export default RegisterForm;
