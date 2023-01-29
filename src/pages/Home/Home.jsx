import { Helmet } from 'react-helmet';

import { useAuth } from 'hooks';

import AuthNav from 'components/AuthNav';

import { Container, Box, Typography } from '@mui/material';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container
      component="section"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Box
        component="div"
        sx={{
          marginTop: 26,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '600px',
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: '20px' }}>
          Welcome to Phonebook manager!{' '}
          <span role="img" aria-label="Greeting icon">
            ☎️
          </span>
        </Typography>
        {!isLoggedIn ? (
          <Typography component="h2" variant="h5" sx={{ mb: '20px' }}>
            Please sign in to your account.
          </Typography>
        ) : (
          <Typography component="h2" variant="h5" sx={{ mb: '20px' }}>
            You are logged in, you can manage your contacts.
          </Typography>
        )}
        {!isLoggedIn && <AuthNav />}
      </Box>
    </Container>
  );
};

export default Home;
