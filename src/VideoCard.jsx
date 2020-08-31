import React from "react";
import "./videocard.css";

function VideoCard({ movie }) {
  return (
    <div className='videoCard'>
      <img src='https://static.toiimg.com/photo/73491567.jpeg' alt='' />
      <p>Movie description</p>
      <h2>Movie Title</h2>
      <p>Number of likes</p>
    </div>
  );
}

export default VideoCard;
