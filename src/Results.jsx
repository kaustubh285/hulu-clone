import React, { useState, useEffect } from "react";
import "./results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log({ selectedOption });
    async function fetchData() {
      const response = await axios.get(selectedOption);
      console.log(response);
      setMovies(response.data.results);
      return response;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className='results'>
      <FlipMove>
        {movies.map((movie) => {
          return <VideoCard movie={movie} key={movie.id} />;
        })}
      </FlipMove>
    </div>
  );
}

export default Results;
