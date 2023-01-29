import { ThreeDots as Spinner } from 'react-loader-spinner';

import { Container } from '@mui/material';

const Loader = () => {
  return (
    <Container
      component="div"
      sx={{
        zIndex: 1,
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner
        height="400"
        width="400"
        radius="9"
        color="#111"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
};

export default Loader;
