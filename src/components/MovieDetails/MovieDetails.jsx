import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

  let history = useHistory();

  const movieDetails = useSelector(store => store.movieDetails);

  const handleBackButton = () => {
    history.push('/');
  }
  
  return (
    <div>
      {movieDetails.map(movie => {
        return (
          <div>
            <img src={movie.poster} alt={movie.title}/>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            
          </div>
        );
      })}
      <button onClick={handleBackButton}>Back to Home Page</button>
    </div>
  )
}

export default MovieDetails;