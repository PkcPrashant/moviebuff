import React from 'react';

const Details = ({movie}) => {
	return(
		<div>
			<h5>Genre : {movie.Genre}</h5>
                  <h6>Rated : {movie.Rated}</h6>
                  <h6>Type : {movie.Type}</h6>
                  <h6>Released on : {movie.Released}</h6>
                  <h6>Runtime : {movie.Runtime}</h6>
                  <h6>IMDB Rating : {movie.imdbRating}</h6>
                  <h6>Director : {movie.Director}</h6>
                  <h6>Writer : {movie.Writer}</h6>
                  <h6>Production : {movie.Production}</h6>
                  <h6>Box Office : {movie.BoxOffice}</h6>
                  <h6>Awards : {movie.Awards}</h6>
                  <h6>Plot : {movie.Plot}</h6>
                  <a href='/DownloadableFiles/9.jpg' download='Poster.jpg'>Download</a>
		</div>
	);
}

export default Details;