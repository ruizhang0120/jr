import React, { useState } from "react";
import "../styles/ConsumerInfo.css"; // 引入样式

const ConsumerInfo: React.FC = () => {
  return (
    <div className="consumer-info-page">
      <div className="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/water.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1>Welcome to My Website</h1>
        <p>This is an example of a video background.</p>
      </div>
    </div>
    </div>
  );
};

export default ConsumerInfo;
