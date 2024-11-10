import { Link } from "react-router-dom";
import { NavItemsType } from "../../types";
import { TFunction } from "i18next";

export const Nav = ({ t }: { t: TFunction<"translation", undefined> }) => {
  const navItems: NavItemsType[] = [
    {
      label: t("blog"),
      path: "/",
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
      <nav className="lg:flex min-[300px]:hidden flex items-center">
        <ul className="flex gap-[2vw] text-[1rem] font-semibold opacity-70">
          {navItems.map((item) => (
            <li key={item.label} className="whitespace-nowrap">
              <Link to={`${item.path}`}>
                <button
                  className="transition-all ease-in-out duration-500 py-[8px] hover:text-[#5086FA]"
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
