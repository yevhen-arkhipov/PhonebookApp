import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'rgb(159 159 159 / 12%)', py: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom>
          PHONEBOOK
        </Typography>
        <Typography
          variant="h7"
          align="center"
          color="#000000"
          component="h4"
          gutterBottom
        >
          Manage your contact list easily!
        </Typography>
        <Typography variant="h8" color="#000000" align="center" component="h5">
          {'Copyright © '}
          <Link color="inherit" href="https://github.com/yevhen-arkhipov">
            Created by Arkhipov Y.
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
