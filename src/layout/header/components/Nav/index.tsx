import { Link } from "react-router-dom";
import { Logo } from "../../../../assets/icons/logo";
import { NavItemsType } from "../../types";
import { TFunction } from "i18next";

export const Nav = ({ t }: { t: TFunction<"translation", undefined> }) => {
  const navItems: NavItemsType[] = [
    {
      label: t("title"),
      path: "/products",
    },
    {
      label: t("bestSellers"),
      path: "/products",
    },
    {
      label: t("about"),
      path: "/about",
    },
  ];
  return (
    <div className="flex gap-[2vw]">
      <Link to={"/"}>
        <Logo />
      </Link>
      <nav className="lg:flex min-[300px]:hidden flex items-center">
        <ul className="flex gap-[2vw]">
          {navItems.map((item) => (
            <li key={item.label} className="whitespace-nowrap">
              <Link to={`${item.path}`}>
                <button
                  className="transition-all ease-in-out duration-500 py-[8px] text-xl hover:text-[#5086FA]"
                  type="button"
                >
                  {item.label}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
