import React from 'react';
import { Box, Stack, SvgIcon } from '@mui/material';
function FormButton(props) {
  return (
    <Stack
      className="button--form--container"
      direction="row"
      justifyContent="flex-start"
      sx={{ alignItems: 'center' }}
      p={0}
    >
      <Box
        textAlign="left"
        p={1.6}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '6px 0 0 6px',
        }}
      >
        <SvgIcon component={props.icon} inheritViewBox sx={{ fontSize: 25 }} />
      </Box>
      <Box ml={5}>
        <button className="Custom--form--button">{props.body}</button>
      </Box>
    </Stack>
  );
}

export default FormButton;
