import HeroVideo from "../../assets/copy.mp4"
const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src={HeroVideo}
      ></video>
    </div>
  );
};

export default Video;
