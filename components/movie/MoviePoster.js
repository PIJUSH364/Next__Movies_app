import { Box } from '@mui/material';
import Image from 'next/image';
import React, { useContext } from 'react';

function MoviePoster({ data }) {
  //   const { state, dispatch } = useContext(Store);
  //   const { movies } = state;
  //   const { movieItem } = movies;
  //   const movieImfo = movieItem;

  //   const shownMovieDeatils = (item) => {
  //     dispatch({ type: 'SHOW_MOVIE_PREVIEW', payload: { ...item } });
  //     console.log('shownMovieDeatils', item);
  //   };
  return (
    <Box className="moviesItem--container">
      <Image
        className="poster_hover"
        // onClick={() => shownMovieDeatils(data)}
        width="140"
        height="200"
        src={'https://image.tmdb.org/t/p/w200' + data.poster_path}
        alt={data.title}
        style={{
          width: '140px',
          height: '200px',
          borderRadius: '10px',
        }}
      />
    </Box>
  );
}

export default MoviePoster;
