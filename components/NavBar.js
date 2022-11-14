import styled from '@emotion/styled';
import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import RenderAuth from '../components/auth/RenderAuth';
import SearchBar from './SearchBar';
import axios from 'axios';
const bgImg = {
  background: `url(https://images.unsplash.com/photo-1537113399937-1cb9c5b273ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bnNldCUyMGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
};
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
const MenuShown = styled(MenuIcon)({
  color: 'rgba(255,255,255,0.8)',
  transition: 'all 1.2s ease-in-out',
  '&:hover': {
    color: 'rgba(255,255,255,0.5)',
  },
});

function NavBar() {
  const [moviesData, setMoviesData] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  //   const { state, dispatch } = useContext(Store);
  //   const { movies } = state;

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=b6d57f45c1ed674f27d2d36fd0ed479c&language=en-US&page=1'
      )
      .then(function (response) {
        // handle success
        setMoviesData(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        height: { xs: '13vh', sm: '13vh', md: '18vh', lg: '15vh', xl: '20vh' },
      }}
    >
      <Box>
        <Link href="index">
          <Image width="50" height="50" src="/logo.png" alt="app--logo" />
        </Link>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'auto',
            sm: '1fr',
            md: '1.4fr 2fr',
            lg: '1.2fr 2fr',
          },
          alignItems: 'baseline',
        }}
      >
        <Box>
          <SearchBar placeholder="Find movies..." data={moviesData} />
        </Box>
        {/* <Stack
        direction="row"
        sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
        ml={1}
        gap={1}
      >
        <Link to="/">
          <MenuItems>Home</MenuItems>
        </Link>
        <Link to={movieLink}>
          <MenuItems>Movies</MenuItems>
        </Link>{' '}
        <Link to="shows">
          <MenuItems>Shows</MenuItems>
        </Link>{' '}
        <Link to="livetv">
          <MenuItems>LiveTv</MenuItems>
        </Link>{' '}
        <Link to="mylist">
          <MenuItems>MyList</MenuItems>
        </Link>
      </Stack> */}
      </Box>
      <Box
        mt={-1.4}
        sx={{
          paddingLeft: { xs: '1rem', sm: '1rem', md: '0', lg: '0' },
          paddingRight: { xs: '1rem', sm: '1rem', md: '0', lg: '0' },
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="logo"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuShown fontSize="large" />
        </IconButton>

        <Drawer
          id="menu_drawer_navigation"
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box
            textAlign="center"
            role="presentation"
            sx={{
              // backgroundColor: '#696969',
              color: '#FFF',
              width: { xs: '80vw', sm: '60vw', md: '50vw', lg: '30vw' },
              boxSizing: 'border-box',
            }}
          >
            <RenderAuth />
          </Box>
        </Drawer>
      </Box>
    </Stack>
  );
}

export default NavBar;
