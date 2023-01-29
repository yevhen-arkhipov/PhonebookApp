import { NavLink } from 'react-router-dom';

import { Box, Button } from '@mui/material';

const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Button
        variant="outlined"
        size="small"
        component={NavLink}
        to="/register"
        sx={{ mr: '10px', color: 'primary', '&.active': { color: '#883f2d' } }}
      >
        Sing up
      </Button>
      <Button
        variant="outlined"
        size="small"
        component={NavLink}
        to="/login"
        sx={{ color: 'primary', '&.active': { color: '#883f2d' } }}
      >
        Log In
      </Button>
    </Box>
  );
};

export default AuthNav;
