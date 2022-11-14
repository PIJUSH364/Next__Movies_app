import { Box, Stack, Typography, TextField } from '@mui/material';
import React, { useContext } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { styled } from '@mui/material/styles';
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
const MenuItems = styled(Typography)({
  color: 'rgba(255,255,255,0.8)',
  fontFamily: 'monospace',
  fontSize: '1.4rem',
  fontFamily: 500,
  padding: '5px 1.4rem',
  transition: 'all 1.2s ease-in-out',
  borderRadius: '30px',
  '&:hover': {
    background: '#fff',
    color: '#000',
  },
});
function login({ setAuthRenderValue }) {
  const handleConReandering = (value) => {
    setAuthRenderValue(value);
  };

  return (
    <Stack className="login--container" p={5}>
      <Box className="application--logo" mb={5}>
        <Image width="50" height="50" src="/logo.png" alt="app--logo" />
      </Box>
      <Box>
        <Typography variant="h6" textAlign="left" gutterBottom>
          Sign in Your Account!
        </Typography>
        <Stack component="form" noValidate gap={3}>
          <CssTextField
            label="Email"
            id="custom-css-outlined-input"
            sx={{ input: { color: '#fff' } }}
          />
          <CssTextField label="Password" id="custom-css-outlined-input" />
          <FormButton body="Sign in to Your Account !" icon={LoginIcon} />
        </Stack>
      </Box>
      <Typography
        variant="body1"
        textAlign="left"
        mt={3}
        style={{
          cursor: 'pointer',
        }}
        onClick={() => handleConReandering(1)}
      >
        Create An Account !
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

export default login;
