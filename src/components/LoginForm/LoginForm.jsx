import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';

import { Box, Typography, TextField, Avatar, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
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
        Log in
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
          required
          fullWidth
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

export default LoginForm;
