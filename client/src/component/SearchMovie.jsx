import React, {useState} from 'react';
import MovieCard from './MovieCard';

export default function SearchMovie(){

    //states input query, movies
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log('submitting')
       
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
        
        
        try{
            const moviePromise = await fetch(url);

            const movieResponse = await moviePromise.json();
            setMovies(movieResponse.results)
            console.log(movieResponse);
        } catch(error){
            console.error(error);
        }
    }
    return (
        <>
        <form className='form' onSubmit={searchMovies}>
            <label htmlFor="query" className='Label'></label>
            <input className='input' type='text' name='query' placeholder='i.e. Jurassic Park' value={query} onChange={(e) => setQuery(e.target.value)}/> 
            <button className='button' type='submit'>Search</button>
        </form>
        <div className='card-list'>
        {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id}/>
                ))}
        </div>
        </>
    )
}