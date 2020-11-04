import React from 'react';

export default function SearchMovie(){
    return (
        <div>
        <form class='form'>
            <label htmlFor="query" className='Label'>Movie Name</label>
            <input className='input' type='text' name='query' placeholder='i.e. Jurassic Park'/> 
            <button className='button' type='submit'>Search</button>
        </form>
        </div>
    )
}