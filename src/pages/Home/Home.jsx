import { Helmet } from 'react-helmet';

import { useAuth } from 'hooks';

import AuthNav from 'components/AuthNav';

import { Box, Typography } from '@mui/material';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Box
        component="div"
        sx={{
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
          <Typography component="h2" variant="h5">
            You are logged in, you can manage your contacts.
          </Typography>
        )}
        {!isLoggedIn && <AuthNav />}
      </Box>
    </>
  );
};

export default Home;
