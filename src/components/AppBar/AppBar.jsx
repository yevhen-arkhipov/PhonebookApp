import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';

import { Toolbar, Typography, Icon } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Toolbar
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Typography
        component="span"
        variant="h5"
        color="#883f2d"
        noWrap
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          ml: '20px',
        }}
      >
        <NavLink
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          PHONEBOOK
          <Icon sx={{ ml: '5px' }}>
            <ConnectWithoutContactIcon sx={{ color: '#883f2d' }} />
          </Icon>
        </NavLink>
      </Typography>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Toolbar>
  );
};

export default AppBar;
