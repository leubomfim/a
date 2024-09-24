import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons/logo";

export const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mt-[100px] m-auto">
      <Link to={"/"}>
        <Logo />
      </Link>
    </footer>
  );
};
