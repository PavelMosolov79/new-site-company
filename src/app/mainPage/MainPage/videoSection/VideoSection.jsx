import "./VideoSectionPhone.css";
import "./VideoSectionDesctop.css"
import React from "react";
import PropTypes from "prop-types";

const VideoSection = ({ func }) => {
  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };

  return (
    <div className="video">
      <div className="video__block">
        <YoutubeEmbed embedId="O39Q68J" />

      </div>
    </div>
  );
};

export default VideoSection;