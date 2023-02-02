import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/contacts/operations';

import { ListItem, Typography, Button, Avatar, Icon } from '@mui/material';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: 1,
        borderColor: 'divider',
        pt: '16.5px',
        pb: '16.5px',
        pr: '14px',
        pl: '14px',
      }}
    >
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
        <InsertEmoticonOutlinedIcon />
      </Avatar>
      <Typography component="h4" variant="1">
        {name}: {number}
      </Typography>
      <Button type="button" onClick={handleDelete}>
        <Icon sx={{ display: 'flex', ml: '30px' }}>
          <PersonRemoveIcon sx={{ color: '#883f2d' }} />
        </Icon>
      </Button>
    </ListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
