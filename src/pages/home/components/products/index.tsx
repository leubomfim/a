import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { RatingProduct } from "./rating";
import phoneImage from "../../../../assets/images/phone2.jpeg";
import { Props } from "../../types";

export const ProductionHome = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-screen-2xl m-auto">
      <div>
        <div className="divide-y divide-x-0 divide-zinc-400 divide-solid">
          <div className="flex justify-between items-center">
            <h3 className="text-[1.7rem] text-zinc-700 pb-[10px]">
              {props.title}
            </h3>
            <Link
              className="text-[0.875rem] text-orange-500 font-semibold"
              to="/products"
            >
              {t("seeAll")} {`>`}
            </Link>
          </div>
          <div className="pt-[20px]">
            {props.products.map((product) => (
              <div
                className="w-[268px] h-[436px] border-solid border-zinc-400 border-1 rounded p-2 flex flex-col hover:shadow-xl shadow-cyan-700 transition-all relative hover:border-[#5086fa79]"
                key={product.id}
              >
                <RatingProduct ratingValue={4} />
                <div className="w-full h-[200px] pt-5 flex items-center justify-center">
                  <img className="h-full" src={phoneImage} alt="a" />
                </div>
                <div className="mt-[10px]">
                  <Link
                    to="/product/1"
                    className="hover:text-blue-500 transition-all duration-200 line-clamp-3 text-ellipsis"
                  >
                    {product.name}
                  </Link>
                  <p className="text-xl font-bold text-blue-500">
                    {props.currencySign + " " + product.price}
                  </p>
                  <p>{props.currencySign + " " + product.discount}</p>
                </div>
                <div className="mt-auto">
                  <button className="w-full bg-blue-500 text-white rounded py-3 font-semibold text-xs flex justify-center items-center gap-2 transition-colors hover:bg-blue-400">
                    {t("cart")} {<FaCartPlus className="text-2xl " />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
