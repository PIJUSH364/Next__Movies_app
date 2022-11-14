import { Box, Stack, Typography, TextField } from '@mui/material';
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { styled } from '@mui/material/styles';
import FormButton from '../customComponent/FormButton';
import Image from 'next/image';

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

function SingUp({ setAuthRenderValue }) {
  const handleConReandering = (value) => {
    setAuthRenderValue(value);
    console.log('sign up');
  };
  return (
    <Stack className="login--container" p={5}>
      <Box className="application--logo">
        <Image width="50" height="50" src="/logo.png" alt="app--logo" />
      </Box>
      <Box>
        <Typography variant="h6" textAlign="left" gutterBottom mt={4}>
          Signup for free!
        </Typography>
        <Stack component="form" noValidate gap={3}>
          <CssTextField label="Email" id="custom-css-outlined-input" />
          <CssTextField label="fullName" id="custom-css-outlined-input" />
          <CssTextField label="PassWord " id="custom-css-outlined-input" />
          <CssTextField
            label="PassWord confirmation"
            id="custom-css-outlined-input"
          />
          <FormButton body="Create Your Account !" icon={LoginIcon} />
        </Stack>
      </Box>

      <Typography
        variant="body1"
        textAlign="left"
        mt={3}
        style={{
          cursor: 'pointer',
        }}
        onClick={() => handleConReandering(0)}
      >
        Sign in Your account !
      </Typography>

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

export default SingUp;
