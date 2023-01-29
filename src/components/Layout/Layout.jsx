import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';

import { Box, Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Container component="main" maxWidth="xl">
        <Box sx={{ bgcolor: '#fff', height: '100vh' }}>
          <AppBar />
          <Suspense>
            <Outlet />
          </Suspense>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
