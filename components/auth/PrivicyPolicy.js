import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Image from 'next/image';
function PrivicyPolicy({ setAuthRenderValue }) {
  const handleConReandering = (value) => {
    setAuthRenderValue(value);
  };
  return (
    <Stack p={1.3}>
      <Stack justifyContent="flex-end" direction="row" pt={1}>
        <Avatar
          sx={{
            cursor: 'pointer',
            transition: 'all 0.5s ease-in-out',
            '&:hover': {
              color: 'rgb(255, 99, 71)',
              backgroundColor: 'rgba(255,255,255,0.8)',
            },
          }}
        >
          <CloseIcon onClick={() => handleConReandering(0)} />
        </Avatar>
      </Stack>
      <Box className="application--logo" mb={2} mt={1}>
        <Image width="50" height="50" src="/logo.png" alt="app--logo" />
      </Box>
      <Typography variant="h6" textAlign="left" gutterBottom>
        Privacy Policy !
      </Typography>
      <Typography variant="body2" textAlign="justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        deleniti, nihil nobis obcaecati libero nesciunt illum optio dolore ut
        earum reprehenderit rerum eum, dolores autem harum voluptas similique
        sequi sed commodi. Sed voluptate similique soluta odio labore dolor
        saepe enim provident est excepturi corrupti culpa eos necessitatibus rem
        minima accusantium voluptatem nam eaque beatae, reiciendis magnam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti,
        nihil nobis obcaecati libero nesciunt illum optio dolore ut earum
        reprehenderit rerum eum, dolores autem harum voluptas similique sequi
        sed commodi. Sed voluptate similique soluta odio labore dolor saepe enim
        provident est excepturi corrupti culpa eos necessitatibus rem minima
        accusantium voluptatem nam eaque beatae, reiciendis magnam.
      </Typography>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        mt={5}
        textAlign="right"
        color="#c5c9c6"
        sx={{
          cursor: 'pointer',
        }}
      >
        <Typography onClick={() => handleConReandering(3)}>
          Contact US&nbsp;
        </Typography>
        <ContactSupportIcon />
      </Stack>
    </Stack>
  );
}

export default PrivicyPolicy;
