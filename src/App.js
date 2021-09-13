
import { useState } from 'react';
import './App.css';

const moviesData = {
  "Action 💪": [{
              "title": "Ong Bak",
              "rating": 4
              },
              {
                "title": "Raid",
                "rating": 4.5
              },
              {
                "title": "Mission-Impossible",
                "rating": 4.2
              },],
    "Horror 👻": [{
              "title": "Conjuring",
              "rating": 4
              },
              {
                "title": "Annabelle",
                "rating": 4.5
              },
              {
                "title": "The Nun",
                "rating": 4
              },],
    "Animation 🤡": [{
              "title": "Up",
              "rating": 4.3
              },
              {
                "title": "Toy Story",
                "rating": 4.5
              },
              {
                "title": "Cars",
                "rating": 4
              },],
    "Fantasy🌠": [{
              "title": "Harry Potter",
              "rating": 4.4
              },
              {
                "title": "Jungle Cruise",
                "rating": 4
              },
              {
               "title":"Lord of the Rings",
               "rating":4.6
              }],
     "Drama😑 " :[{
                "title":"Parasite",
                "rating":4.7
                },
                {
                "title":"Knives Out",
                "rating":4.2
                },
                {
                "title":"12 Years a Slave",
                "rating":4.3
                }]
              
}

const genreArray=Object.keys(moviesData)

function App() {
  const [movies,setMovies]=useState([])

  function showMovies (genre){
    const selectMovies = moviesData[genre]
    setMovies(selectMovies)
  }

  return (
    <div className="App">
      <div className="navBar">
        <h3>DEBNARAYAN DUTTA</h3>
      </div>
      <div className="header">
        <h1 className="recommendation">🎬 Movies Recommendation 🎥</h1>
        <p className="tag">It's my personal choice</p>
        <h2 className="select">Select a Genre</h2>
        {genreArray.map((genre,idx) => {
          return <button key={idx} onClick={()=> showMovies(genre)} className="button">{genre}</button>
        })}
      </div>
      <div className="movies-container">
        {movies.map((item,idx) => {
          return <div key={idx} className="movie">
          <h3 >{item.title}</h3>
          <p>⭐{item.rating}</p>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
