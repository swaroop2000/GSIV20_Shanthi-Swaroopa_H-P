import React, { useState } from "react";
// import MovieCard from "./movieCard";
// import { Link } from 'react-router';
{/* <Link to="/some/where">Click me</Link> */}


var i = 0;
var n =1;
// function MovieDetails(){

// }
function MovieCard(props) {

  
  return (
    <div className="card" >
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
        alt={props.movie.title + " poster"}
      />
      
      <div className="card--content">
        <p className="card-title"><b>{props.movie.title}</b></p>
        <p>RELEASE DATE: {props.movie.release_date}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ( {props.movie.vote_average}) </p>
        {/* <p></p> */}
        <p className="card--desc">{props.movie.overview.substring(0,330)}</p>
      </div>
    </div>
  );
}
// function MovieDetails(id) {
//   // const [id, setId] = useState('');
//   const [movies, setMovies1] = useState([]);
  

  

//     const url = 'https://api.themoviedb.org/3/search/movie/'+(id)+'?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&include_adult=false';
//     // const url = `https://api.themoviedb.org/3/search/movie/upcoming?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&page=1&include_adult=false`;
//     // const url1 = 'https://api.themoviedb.org/3/movie/upcoming?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&page=1';
//     try {
//       const res1 =  fetch(url);
//       const data1 =  res.json();
//       setMovie1s(data1.results);
//     } catch (err) {
//       console.error(err);
//     }

//     const searchMovies1 = async (e) => {
//       i++;
//       // e.preventDefault();
//       if (n<1)
//       n=1;
  
//       // const url = `https://api.themoviedb.org/3/search/movie/?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&query=${query}&page=1&include_adult=false`;
//       // const url = `https://api.themoviedb.org/3/search/movie/upcoming?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&page=1&include_adult=false`;
//       const url1 = 'https://api.themoviedb.org/3/movie/upcoming?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&page='+(n);
//       try {
//         const res1 = await fetch(url1);
//         const data1 = await res.json();
//         setMovies1(data1.results);
//       } catch (err) {
//         console.error(err);
//       }
//       // <div className="card-list">
//       //     {movies
//       //       .filter((movie) => movie.poster_path)
//       //       .map((movie) => (
//       //         <MovieCard movie={movie} key={movie.id} />
//       //       ))}
//       //   </div>
//     };

//     const searchMovies4 = async (e) => {
//       n = 1;
//       searchMovies1();
//     };


//     return (
    
//       <>
//         <form className="form" onSubmit={searchMovies}>
//           <input
//             className="input"
//             type="text"
//             name="query"
//             placeholder=" 🔍Search "
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
          
//         </form>
//         <button className="button2" onClick={searchMovies4} >
//         🏠
//           </button>
//         <br></br>
//         {/* <button className="button1" onClick={searchMovies3} >
//             PREVIOUS
//           </button>
//         <button className="button" onClick={searchMovies2} >
//             NEXT
//           </button>
//           <br></br>
        
//         <div className="card-list">
//           {movies
//             .filter((movie) => movie.poster_path)
//             .map((movie) => (
//               <MovieCard movie={movie} key={movie.id} />
//             ))}
//         </div> */}
//       </>
//     );
  

// }


function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie/?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&query=${query}&include_adult=false`;
    // const url = `https://api.themoviedb.org/3/search/movie/upcoming?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&page=1&include_adult=false`;
    // const url1 = 'https://api.themoviedb.org/3/movie/upcoming?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&page=1';
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const searchMovies1 = async (e) => {
    i++;
    // e.preventDefault();
    if (n<1)
    n=1;

    // const url = `https://api.themoviedb.org/3/search/movie/?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&query=${query}&page=1&include_adult=false`;
    // const url = `https://api.themoviedb.org/3/search/movie/upcoming?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&page=1&include_adult=false`;
    const url1 = 'https://api.themoviedb.org/3/movie/upcoming?api_key=3b9d0d4b7da8c5c4a9d164597501571d&language=en-US&page='+(n);
    try {
      const res = await fetch(url1);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
    // <div className="card-list">
    //     {movies
    //       .filter((movie) => movie.poster_path)
    //       .map((movie) => (
    //         <MovieCard movie={movie} key={movie.id} />
    //       ))}
    //   </div>
  };

  const searchMovies2 = async (e) => {
    n++;
    searchMovies1();
  };
  const searchMovies3 = async (e) => {
    n--;
    searchMovies1();
  };
  const searchMovies4 = async (e) => {
    n = 1;
    searchMovies1();
  };
  if (i===0)
  searchMovies1();

  
 



  return (
    
    <>
      <form className="form" onSubmit={searchMovies}>
        <input
          className="input"
          type="text"
          name="query"
          placeholder=" 🔍Search "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
      </form>
      <button className="button2" onClick={searchMovies4} >
      🏠
        </button>
      <br></br>
      <button className="button1" onClick={searchMovies3} >
          PREVIOUS
        </button>
      <button className="button" onClick={searchMovies2} >
          NEXT
        </button>
        <br></br>
      
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}

export default SearchMovies;