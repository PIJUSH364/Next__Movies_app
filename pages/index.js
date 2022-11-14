import React from 'react';
import Layout from '../components/Layout';
import ListOfMovieItem from '../components/movie/ListOfMovieItem';
function index() {
  return (
    <div className="global">
      <Layout>
        {/* slider */}
        <h2>Home</h2>
        <ListOfMovieItem />
      </Layout>
    </div>
  );
}

export default index;
