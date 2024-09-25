import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons/logo";

export const Footer = () => {
  return (
    <footer className="container sticky bottom-0">
      <Link to={"/"}>
        <Logo />
      </Link>
    </footer>
  );
};
