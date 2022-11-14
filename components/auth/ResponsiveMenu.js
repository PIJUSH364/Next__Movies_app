import styled from '@emotion/styled';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import MovieIcon from '@mui/icons-material/Movie';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { green, pink } from '@mui/material/colors';
import Image from 'next/image';
import Link from 'next/link';
const MenuItems = styled(Button)({
  color: 'rgba(255,255,255,0.8)',
  fontFamily: 'monospace',
  fontSize: '1.2rem',
  fontFamily: 500,
  padding: '5px 1.4rem',
  transition: 'all 1.2s ease-in-out',
  borderRadius: '30px',
  border: '2px solid #fff',
  minWidth: '200px',
  maxWidth: '350px',
  '&:hover': {
    background: '#fff',
    color: '#000',
  },
});
function ResponsiveMenu({ setAuthRenderValue }) {
  const handleConReandering = (value) => {
    setAuthRenderValue(value);
  };
  return (
    <Box mt={2}>
      <Stack direction="row" justifyContent="flex-end">
        <Avatar
          onClick={() => handleConReandering(0)}
          sx={{
            marginRight: '1rem',
            bgcolor: green[500],
            cursor: 'pointer',
            transition: 'all 1.2s ease-in-out',
            '&:hover': {
              background: '#fff',
              color: '#000',
            },
          }}
        >
          <AccountCircleIcon />
        </Avatar>
      </Stack>
      <Box className="application--logo" mb={5}>
        <Link href="/">
          <Image width="50" height="50" src="/logo.png" alt="app--logo" />
          <Typography color="#fff">Sf Movies</Typography>
        </Link>
      </Box>
      {/* <Stack justifyContent="space-around" m={2} gap={2}>
        <Link to="/">
          <MenuItems startIcon={<HomeIcon />}>Home</MenuItems>
        </Link>
        <NavLink to="movies">
          <MenuItems startIcon={<MovieIcon />}>Movies</MenuItems>
        </NavLink>{' '}
        <NavLink to="movies">
          <MenuItems startIcon={<GroupWorkIcon />}>Shows</MenuItems>
        </NavLink>{' '}
        <NavLink to="movies">
          <MenuItems startIcon={<LiveTvIcon />}>livie Tv</MenuItems>
        </NavLink>{' '}
        <NavLink to="movies">
          <MenuItems startIcon={<ShoppingCartIcon />}>My List</MenuItems>
        </NavLink>
      </Stack> */}
    </Box>
  );
}

export default ResponsiveMenu;
