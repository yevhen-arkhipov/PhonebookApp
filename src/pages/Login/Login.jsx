import { Helmet } from 'react-helmet';

import LoginForm from 'components/LoginForm';

import { Container } from '@mui/material';

const Login = () => {
  return (
    <Container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
};

export default Login;
