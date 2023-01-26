import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Box from 'components/Box';
import AppBar from 'components/AppBar';

const Layout = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width="1280px"
      height="970px"
      bg="bodyColor"
      boxShadow="outline"
      as="main"
    >
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
