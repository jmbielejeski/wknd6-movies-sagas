import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function MovieList() {

  let history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  // grab movieList on load
  useEffect(() => {
      dispatch({ type: 'FETCH_MOVIES' })
  }, []);

  // go to AddMovie
  const goToAddMovie = () => {
    console.log('in goToAddMovie')
    history.push('/AddMovie');
  }

  // go to details of movie clicked on
  const goToDetails = (movieId) => {
    // dispatch data in order to pull up specific movie details
    dispatch({
      type: 'FETCH_MOVIE_DETAILS',
      payload: movieId
    })
    // dispatch genre details to get genres for this movie
    dispatch({
      type: 'FETCH_MOVIE_GENRES',
      payload: movieId
    })

    // go to details page
    history.push(`/MovieDetails/`)
  }

  return (
      <main>
          <h1>Movie List</h1>
          {/* go to AddMovie */}
          <button onClick={goToAddMovie} className="button">Add movie</button>
          <section className="movies">
            {/* map to go over movie list and render to DOM */}
              {movies.map(movie => {
                  return (
                      <div class="card" key={movie.id} onClick={() => goToDetails(movie.id)} >
                          <h3 className="movieTitle">{movie.title}</h3>
                          <img src={movie.poster} alt={movie.title}/>
                      </div>
                  );
              })}
          </section>
      </main>

  );
}

export default MovieList;