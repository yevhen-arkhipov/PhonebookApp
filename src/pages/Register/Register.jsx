import { Helmet } from 'react-helmet';

import RegisterForm from 'components/RegisterForm';

import { Container } from '@mui/material';

const Register = () => {
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
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Container>
  );
};

export default Register;
