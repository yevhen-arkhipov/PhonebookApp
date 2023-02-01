import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';

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
          justifyContent: 'center',
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
            minHeight: '900px',
          }}
        >
          <Box
            component="section"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              pt: '32px',
              pb: '32px',
            }}
          >
            <Suspense>
              <Outlet />
            </Suspense>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
