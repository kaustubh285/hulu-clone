import React, { forwardRef } from "react";
import "./videocard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpSharpIcon from "@material-ui/icons/ThumbUpSharp";

const VideoCard = forwardRef(({ movie }, ref) => {
  const img_base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className='videoCard'>
      <img
        src={`${img_base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=''
      />

      <TextTruncate
        line={1}
        element='p'
        truncateText='...'
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className='movieStats'>
        {movie.release_date || movie.first_air_date} |
        <span style={{ paddingRight: "5px" }}>{movie.vote_count}</span>
        <ThumbUpSharpIcon />
      </p>
    </div>
  );
});

export default VideoCard;
