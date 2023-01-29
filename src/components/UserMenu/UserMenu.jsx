import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Box, Typography, Button, Avatar } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const userLogOut = () => dispatch(logOut());

  return (
    <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        component="p"
        sx={{
          ml: '10px',
          fontSize: '17px',
        }}
      >
        Welcome, {user.email}
      </Typography>
      <Avatar
        sx={{
          ml: '10px',
          mr: '10px',
          color: '#767474',
          bgcolor: '#ffffff',
          border: '1px solid #767474',
          borderRadius: 1,
        }}
      >
        <ManageAccountsIcon />
      </Avatar>
      <Button
        variant="outlined"
        size="small"
        onClick={userLogOut}
        component={NavLink}
        to="/"
        sx={{
          ml: '10px',
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
