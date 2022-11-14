import { Box } from '@mui/material';
import React, { useState } from 'react';
import ContactUs from './ContactUs';
import Login from './Login';
import PrivicyPolicy from './PrivicyPolicy';
import ResponsiveMenu from './ResponsiveMenu';
import SingUp from './SingUp';

function RenderAuth() {
  const [authRenderValue, setAuthRenderValue] = useState(99);
  return (
    <>
      <Box
        className={`auth_shown ${authRenderValue === 0 ? '' : 'auth_hidden'}`}
      >
        <Login setAuthRenderValue={setAuthRenderValue} />
      </Box>
      <Box
        className={`auth_shown ${authRenderValue === 1 ? '' : 'auth_hidden'}`}
      >
        <SingUp setAuthRenderValue={setAuthRenderValue} />
      </Box>
      <Box
        className={`auth_shown ${authRenderValue === 2 ? '' : 'auth_hidden'}`}
      >
        <PrivicyPolicy setAuthRenderValue={setAuthRenderValue} />
      </Box>
      <Box
        className={`auth_shown ${authRenderValue === 3 ? '' : 'auth_hidden'}`}
      >
        <ContactUs setAuthRenderValue={setAuthRenderValue} />
      </Box>
      <Box
        className={`auth_shown ${authRenderValue === 99 ? '' : 'auth_hidden'}`}
      >
        <ResponsiveMenu setAuthRenderValue={setAuthRenderValue} />
      </Box>
    </>
  );
}

export default RenderAuth;
