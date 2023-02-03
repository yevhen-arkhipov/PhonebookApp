import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
import Footer from 'components/Footer';

import { Box, Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Container
        component="div"
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh',
          bgcolor: '#fff',
        }}
      >
        <AppBar />
        <Box
          component="main"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="section"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              pt: '55px',
              pb: '55px',
            }}
          >
            <Suspense>
              <Outlet />
            </Suspense>
          </Box>
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
