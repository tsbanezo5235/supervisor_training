import React from 'react';
import ReactPlayer from 'react-player';
import MyVideo from './652333414.mp4';

const Player = () => {
  return (
    <ReactPlayer
      url={MyVideo}
      controls = {true}
    ></ReactPlayer>
  )
}

export default Player;