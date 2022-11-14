import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
import MoviePoster from './MoviePoster';
function ListOfMovieItem() {
  const [movieData, setmovieData] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=b6d57f45c1ed674f27d2d36fd0ed479c&language=en-US&page=1'
      )
      .then(function (response) {
        // handle success
        const data = response.data.results;
        setmovieData(data);
      })
      .catch(function (error) {
        // handle error
        console.log('error on data fetching toprated slider', error);
      });
  }, []);

  console.log(movieData);
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        rowGap: '2rem',
        columnGap: '3rem',
        marginTop: '2rem',
        justifyItems: 'center',
      }}
    >
      {movieData.slice(0, 8).map((item, key) => {
        return (
          <Suspense key={key} fallback={<span>Loading...</span>}>
            <MoviePoster data={item} />
          </Suspense>
        );
      })}
    </Box>
  );
}

export default ListOfMovieItem;
