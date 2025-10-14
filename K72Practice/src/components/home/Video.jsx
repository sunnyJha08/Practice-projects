import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1760449687~exp=1760453287~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=6988d7c7846dbaf3ed848d8a60588bf7a50c1690a81681189f5944509568cdf5&r=dXMtZWFzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;
