import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks';

import { Box, Button } from '@mui/material';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      component="nav"
      sx={{
        mr: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        variant="outlined"
        size="small"
        component={NavLink}
        to="/"
        sx={{ color: 'primary', '&.active': { color: '#883f2d' } }}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          variant="outlined"
          size="small"
          component={NavLink}
          to="/contacts"
          sx={{
            ml: '10px',
            color: 'primary',
            '&.active': { color: '#883f2d' },
          }}
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};

export default Navigation;
