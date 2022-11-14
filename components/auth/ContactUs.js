import { Box, Stack, Typography, TextField } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
// import FormButton from '../movies/FormButton';
import Image from 'next/image';
import FormButton from '../customComponent/FormButton';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
});

function ContactUs({ setAuthRenderValue }) {
  const handleConReandering = (value) => {
    setAuthRenderValue(value);
  };

  return (
    <Stack className="login--container" p={3}>
      <Box className="application--logo" mb={5}>
        <Image width="50" height="50" src="/logo.png" alt="app--logo" />
      </Box>
      <Box>
        <Typography variant="h6" textAlign="left" gutterBottom>
          Contact us & report bugs !
        </Typography>
        <Stack component="form" noValidate gap={3}>
          <CssTextField label="Email" id="custom-css-outlined-input" />
          <CssTextField label="Password" id="custom-css-outlined-input" />{' '}
          <CssTextField
            multiline
            label="Message"
            id="custom-css-outlined-input"
          />
          <FormButton body="Send Message!" icon={SendIcon} />
        </Stack>
      </Box>
      <Typography
        variant="body2"
        textAlign="right"
        mt={3}
        style={{
          cursor: 'pointer',
        }}
        onClick={() => handleConReandering(2)}
      >
        Privicy Policy!
      </Typography>
    </Stack>
  );
}

export default ContactUs;
