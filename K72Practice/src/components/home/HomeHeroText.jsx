import Video from "./Video";
const HomeHeroText = () => {
  return (
    <div>
      <div className="font-[cfont300] pt-1 text-center">
        <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">
          The spark for
        </div>
        <div className="text-[9.5vw] flex items-start justify-center uppercase leading-[8vw]">
          all
          <div className="h-[7vw] w-[16vw] rounded-full -mt-1 overflow-hidden ">
            <Video />
          </div>
          things
        </div>
        <div className="text-[9.5vw] uppercase flex items-center justify-center leading-[8vw]">
          creative
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;
