import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons/logo";

export const Footer = () => {
  return (
    <footer className="container">
      <div className="w-[200px] h-[80px]">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
    </footer>
  );
};
