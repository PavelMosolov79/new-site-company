import "./VideoSectionPhone.css";
import "./VideoSectionDesctop.css"
import ReactPlayer from 'react-player'
import React, { useEffect, useState } from "react";

import dynamic from 'next/dynamic'

const VideoSection = ({ func }) => {

  return (
    <div className="video">
      <div className="video__block">
            <ReactPlayer url='https://www.youtube.com/watch?v=O39Q68J-ctE&ab_channel=M%26PNSKDEV' 
            width="80%"
            controls = "true"
            height="100%"/>
      </div>
    </div>
  );
};

export default VideoSection;