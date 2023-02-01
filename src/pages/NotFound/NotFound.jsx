import { Helmet } from 'react-helmet';

import { Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>NotFound</title>
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
          404{' '}
          <span role="img" aria-label="Greeting icon">
            😭
          </span>
        </Typography>
        <Typography component="h2" variant="h5">
          Ooops, page not found...
        </Typography>
      </Box>
    </>
  );
};

export default NotFound;
