import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons/logo";

export const Footer = () => {
  return (
    <footer className=" m-auto w-[95%]">
      <div className="w-[200px] h-[80px]">
        <Link to={"/"}>
          <Logo fill="#000" />
        </Link>
      </div>
    </footer>
  );
};
