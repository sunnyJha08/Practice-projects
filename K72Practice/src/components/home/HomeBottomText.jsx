import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[cfont500] text-4xl flex justify-center items-center gap-2  pb-1 ">
      <Link className="text-[6.5vw] uppercase border-white border rounded-full px-3 pt-1 leading-tight ">
        work
      </Link>
      <Link className="text-[6.5vw]  uppercase border-white border rounded-full px-3 pt-1 leading-tight ">
        Agency
      </Link>
    </div>
  );
};

export default HomeBottomText;
